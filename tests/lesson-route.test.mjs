import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const root=new URL('../',import.meta.url);
const catalog=JSON.parse(fs.readFileSync(new URL('content/catalog.json',root),'utf8'));
function load(id,lesson=0,ply=0){
  const code=fs.readFileSync(new URL('openings/'+id+'/app.js',root),'utf8');
  const lessons=vm.runInNewContext(code.slice(0,code.indexOf('const variants'))+';lessons');
  const state={lesson,lessonPly:ply},frames=[],queue=[];
  const scope={lessons,state,lessonMoves:l=>(l.uci||'').trim().split(/\s+/).filter(Boolean),renderLessonStep:fn=>{fn();frames.push([state.lesson,state.lessonPly]);},renderLesson(){},setTimeout:fn=>queue.push(fn)};
  vm.createContext(scope);
  const navigation=code.slice(code.indexOf('function planLessonTransition('),code.indexOf('function challengeData('));
  vm.runInContext(navigation+';this.api={planLessonTransition,goToLesson,replayLessonFromStart,nextLessonStep,previousLessonStep};',scope);
  return {...scope,frames,queue,code,async flush(){while(queue.length){queue.shift()();await Promise.resolve();}}};
}
test('P01-P08 de la Italiana conservan todas las jugadas ya vistas',async()=>{
  const x=load('italiana');
  for(let i=0;i<7;i++){
    x.state.lesson=i;x.state.lessonPly=x.lessonMoves(x.lessons[i]).length;
    const before=x.state.lessonPly;
    await x.api.goToLesson(i+1);
    assert.equal(x.state.lessonPly,before,'No debe reiniciarse la secuencia al ampliar la línea');
    assert.equal(x.state.lesson,i+1);
  }
});
test('P08-P09 retrocede jugada a jugada hasta 3...Ac5, sin pasar por la posición inicial',async()=>{
  const x=load('italiana',7,20),operation=x.api.goToLesson(8);await x.flush();await operation;
  assert.equal(x.state.lesson,8);assert.equal(x.state.lessonPly,6);
  const rewinds=x.frames.filter(([lesson])=>lesson===7).map(([,ply])=>ply);
  assert.deepEqual(rewinds,[20,19,18,17,16,15,14,13,12,11,10,9,8,7,6]);
  assert.ok(x.frames.every(([,ply])=>ply>=6));
  assert.equal(x.lessonMoves(x.lessons[8])[6],'d2d3');
});
test('P09-P12 continúan desde la posición de la ficha anterior',async()=>{
  const x=load('italiana');
  for(let i=8;i<11;i++){
    x.state.lesson=i;x.state.lessonPly=x.lessonMoves(x.lessons[i]).length;
    const before=x.state.lessonPly;await x.api.goToLesson(i+1);
    assert.equal(x.state.lessonPly,before);
  }
});
test('Una selección durante el retroceso cancela la transición pendiente',async()=>{
  const x=load('italiana',7,20),first=x.api.goToLesson(8);
  x.api.replayLessonFromStart();await x.flush();await first;
  assert.equal(x.state.lesson,7);assert.equal(x.state.lessonPly,0);
});
test('El recorrido funciona con una ficha a medio leer y con dos conceptos sobre la misma posición',async()=>{
  const x=load('italiana',0,1);await x.api.goToLesson(1);assert.equal(x.state.lessonPly,1);
  const same=x.api.planLessonTransition(['e2e4','e7e5'],['e2e4','e7e5'],2);
  assert.equal(same.samePosition,true);assert.equal(same.rewind,0);assert.equal(same.shared,2);
});
test('Las doce aperturas incluyen la navegación y su transición conserva el prefijo común',()=>{
  for(const opening of catalog){
    const x=load(opening.id),html=fs.readFileSync(new URL('openings/'+opening.id+'/index.html',root),'utf8');
    for(const id of ['lessonPreviousCard','lessonNextCard','lessonReplay','lessonTransitionNotice'])assert.ok(html.includes('id="'+id+'"'),opening.id+' '+id);
    const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(ids.length,new Set(ids).size);
    for(let i=0;i<x.lessons.length-1;i++){
      const from=x.lessonMoves(x.lessons[i]),to=x.lessonMoves(x.lessons[i+1]);
      const route=x.api.planLessonTransition(from,to,from.length);
      assert.equal(from.slice(0,route.shared).join(' '),to.slice(0,route.shared).join(' '));
      assert.equal(route.rewind,from.length-route.shared);
    }
    assert.ok(!x.code.includes('state.lesson=i; state.lessonPly=0;'));
    assert.ok(html.includes('app.js?v=20261029-lesson-route-1'));
  }
});

test('La generación de otros cuadernos conserva su caché propia y excluye los recursos exclusivos de la Italiana',()=>{
  const generator=fs.readFileSync(new URL('scripts/build-labs.mjs',root),'utf8');
  const start=generator.indexOf('const serviceWorker = '),end=generator.indexOf('fs.writeFileSync(path.join(target, "service-worker.js")',start);
  const italianWorker=fs.readFileSync(new URL('openings/italiana/service-worker.js',root),'utf8');
  const worker=vm.runInNewContext(generator.slice(start,end)+';serviceWorker',{sourceLab:'',id:'francesa',path:{join(){return '';}},fs:{readFileSync(){return italianWorker;}}});
  assert.ok(worker.includes('laboratorio-francesa-v16-lesson-route-1'));
  assert.ok(worker.includes('key.startsWith("laboratorio-francesa-")'));
  assert.ok(!/entrenar\.html|trainer\.js|training-core\.js|training-lines\.js|training\.css|vendor\/chess\.js/.test(worker));
  assert.ok(worker.includes('app.js?v=20261029-lesson-route-1'));
});
