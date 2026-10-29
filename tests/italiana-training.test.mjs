import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
import {Chess} from '../openings/italiana/vendor/chess.js';
import {compiled,START,key,play,choices,expected,classify,newProgress,readProgress,recordMistake,resolveMistake,complete,pickLine,auditLessons} from '../openings/italiana/training-core.js';
test('La secuencia básica y las siete variantes son legales y se pueden recorrer con ambos bandos',()=>{
  assert.equal(compiled.length,8);
  for(const line of compiled)for(const side of ['w','b']){
    const c=new Chess();let own=0;
    for(const step of line.steps){
      assert.equal(key(c.fen()),key(step.before));
      assert.equal(expected(c.fen(),line.id).uci,step.uci);
      assert.equal(classify(c.fen(),step.uci,line.id).kind,'repertoire');
      const m=play(c,step.uci);if(m.color===side)own++;
      assert.equal(key(c.fen()),key(step.after));
    }
    assert.ok(own>=7);assert.equal(expected(c.fen(),line.id)?.lines.some(l=>l.id===line.id)||false,false);
  }
});
test('Alternativas de repertorio y transposiciones se reconocen sin penalización',()=>{
  const c=new Chess();for(const san of ['e4','e5','Nf3','Nc6','Bc4','Bc5'])c.move(san);
  assert.ok(choices(c.fen()).length>=4);
  assert.equal(classify(c.fen(),'d2d3','centro').kind,'alternative');
  const slower=compiled.find(l=>l.id==='lenta').steps[10],order=compiled.find(l=>l.id==='orden').steps[10];
  assert.equal(key(slower.after),key(order.after));
  assert.ok(choices(slower.after).find(x=>x.uci==='e8g8').lines.some(l=>l.id==='orden'));
});
test('Jugada desconocida legal no se clasifica como error; una ilegal no cambia la posición',()=>{
  assert.equal(classify(START,'b2b3','centro').kind,'outside');
  assert.equal(classify(START,'e2e5','centro').kind,'illegal');
  assert.equal(new Chess().fen(),START);
});
test('La advertencia de mate en una se fundamenta en una respuesta legal',()=>{
  const c=new Chess();c.move('f3');c.move('e5');
  const verdict=classify(c.fen(),'g2g4','centro');assert.equal(verdict.kind,'error');
  c.move('g4');c.move('Qh4#');assert.ok(c.isCheckmate());
});
test('Las doce fichas originales de la Italiana coinciden con su secuencia legal',()=>{
  const source=fs.readFileSync(new URL('../openings/italiana/app.js',import.meta.url),'utf8');
  const lessons=vm.runInNewContext(source.slice(0,source.indexOf('const variants'))+';lessons');
  const audited=auditLessons(lessons);assert.equal(audited.length,12);
  assert.ok(audited.every(x=>x.valid),JSON.stringify(audited));
});
test('El repaso distingue pistas y aciertos independientes; persiste y vuelve a programar errores',()=>{
  const p=newProgress(),now=10000000000;
  const m=recordMistake(p,{fen:START,attempt:'b2b3',lineId:'centro',kind:'outside',message:'Fuera de repertorio'},now);
  recordMistake(p,{fen:START,attempt:'g2g3',lineId:'centro',kind:'outside',message:'Otra alternativa'},now);
  assert.equal(p.mistakes.length,1);assert.equal(p.mistakes[0].count,2);
  resolveMistake(p,m.id,true,now);assert.equal(m.solved,0);assert.equal(m.due,now+86400000);
  resolveMistake(p,m.id,false,now);assert.equal(m.solved,1);
  resolveMistake(p,m.id,false,now);assert.equal(m.due,now+3*86400000);
  const loaded=readProgress(JSON.stringify(p));assert.equal(loaded.mistakes[0].solved,2);
});
test('El progreso de blancas y negras es independiente y la ayuda no acredita dominio',()=>{
  const p=newProgress(),now=10000000000;
  complete(p,'centro',true,now,'w');complete(p,'centro',true,now,'w');complete(p,'centro',false,now,'b');
  assert.equal(p.lines['centro:w'].streak,2);assert.equal(p.lines['centro:b'].streak,0);
  assert.equal(readProgress(JSON.stringify(p)).lines['centro:w'].streak,2);
  assert.equal(pickLine(p,'w','lenta',now).line.id,'basic');
});
test('AIA prioriza errores pendientes del bando correcto y tolera almacenamiento inválido',()=>{
  const p=newProgress(),now=10000000000,c=new Chess();c.move('e4');
  recordMistake(p,{fen:c.fen(),attempt:'c7c5',lineId:'centro',kind:'outside',message:'Repasar'},now);
  assert.equal(pickLine(p,'w',null,now).mistake,undefined);
  assert.ok(pickLine(p,'b',null,now).mistake);
  assert.deepEqual(readProgress('{invalid'),newProgress());
  assert.deepEqual(readProgress('{"version":99}'),newProgress());
});

test('El entrenador comparte Practica y los identificadores del cuaderno son únicos',()=>{
  const html=fs.readFileSync(new URL('../openings/italiana/index.html',import.meta.url),'utf8');
  const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
  assert.equal(ids.length,new Set(ids).size,'Hay identificadores duplicados con el cuaderno');
  const practice=html.slice(html.indexOf('<section id="practica"'),html.indexOf('<section id="variantes"'));
  assert.ok(practice.includes('id="trainerApp"'));
  assert.ok(practice.includes('id="practiceBoard"'),'Se conserva el ejercicio original');
  assert.ok(practice.includes('1. Aprende la secuencia'));
  assert.ok(practice.includes('2. Repítela'));
  assert.ok(practice.includes('3. Practica variantes'));
  const otherTemplates=html.replace(/<!-- ITALIANA_TRAINER_START -->[\s\S]*?<!-- ITALIANA_TRAINER_END -->/g,'').replace(/^.*data-italiana-trainer.*\r?\n/gm,'');
  assert.equal(otherTemplates.includes('trainerApp'),false);
  assert.equal(otherTemplates.includes('trainer.js'),false);
  assert.ok(otherTemplates.includes('id="practiceBoard"'));
});
test('El acceso antiguo vuelve a Practica y la secuencia básica termina tras ocho jugadas',()=>{
  const redirect=fs.readFileSync(new URL('../openings/italiana/entrenar.html',import.meta.url),'utf8');
  assert.ok(redirect.includes("location.replace('index.html#practica')"));
  const basic=compiled.find(l=>l.id==='basic');assert.equal(basic.steps.length,16);
  const final=new Chess(basic.steps.at(-1).after);assert.equal(final.turn(),'w');
  assert.equal(final.get('g1').type,'k');assert.equal(final.get('g8').type,'k');
  assert.equal(final.get('c3').type,'n');assert.equal(final.get('b6').type,'b');
});

test('La página y sus módulos usan la misma versión para evitar mezclar datos en caché',()=>{
  const at=p=>fs.readFileSync(new URL('../openings/italiana/'+p,import.meta.url),'utf8');
  const release=at('index.html').match(/trainer\.js\?v=([^"']+)/)[1];
  const trainer=at('trainer.js'),core=at('training-core.js'),worker=at('service-worker.js');
  for(const dependency of ['training-core.js','training-lines.js'])assert.ok(trainer.includes(dependency+'?v='+release));
  assert.ok(core.includes('training-lines.js?v='+release));
  for(const file of ['trainer.js','training-core.js','training-lines.js','training.css'])assert.ok(worker.includes(file+'?v='+release));
});
