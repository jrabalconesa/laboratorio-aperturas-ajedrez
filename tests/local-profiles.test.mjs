import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
const code=fs.readFileSync(new URL('../profiles.js',import.meta.url),'utf8');
function boot(data,blocked=false){
  const window={},storage={getItem:k=>{if(blocked)throw Error('blocked');return data.get(k)??null;},setItem:(k,v)=>{if(blocked)throw Error('blocked');data.set(k,v);}};
  vm.runInNewContext(code,{window,localStorage:storage,Map,Set,crypto:{},document:{readyState:'loading',addEventListener(){},getElementById(){return null;}},location:{reload(){}}});return window.LabProfiles;
}
test('Migra el progreso anterior solo al perfil Principal y preserva el original',()=>{
  const data=new Map([['italiana-progress','["ITA-P01"]']]),profile=boot(data);
  assert.equal(profile.activeId,'principal');assert.equal(profile.storage.getItem('italiana-progress'),'["ITA-P01"]');
  assert.equal(data.get('laboratorio-profile:principal:italiana-progress'),'["ITA-P01"]');
  profile.storage.setItem('italiana-progress','["ITA-P01","ITA-P02"]');
  assert.equal(data.get('italiana-progress'),'["ITA-P01"]');
});
test('Los perfiles aíslan cuadernos y progreso adaptativo, incluso al cambiar en otra pestaña',()=>{
  const data=new Map([['italiana-progress','["ITA-P01"]']]);const first=boot(data);
  first.storage.getItem('italiana-progress');
  data.set('laboratorio-profiles-v1',JSON.stringify({version:1,active:'p2',profiles:[{id:'principal',name:'Principal'},{id:'p2',name:'Otro'}]}));
  const second=boot(data);assert.equal(second.storage.getItem('italiana-progress'),null);
  second.storage.setItem('italiana-progress','["ITA-P05"]');second.storage.setItem('laboratorio-italiana-training-v1','{"version":1}');
  assert.equal(first.storage.getItem('italiana-progress'),'["ITA-P01"]');
  assert.equal(first.storage.getItem('laboratorio-italiana-training-v1'),null);
  first.storage.setItem('italiana-progress','["ITA-P02"]');
  assert.equal(second.storage.getItem('italiana-progress'),'["ITA-P05"]');
});
test('Metadatos o progreso dañados y almacenamiento bloqueado no impiden abrir los cuadernos',()=>{
  const data=new Map([['laboratorio-profiles-v1','{broken'],['italiana-progress','bad json']]);
  assert.equal(boot(data).storage.getItem('italiana-progress'),null);
  const profile=boot(new Map(),true);profile.storage.setItem('espanola-progress','[]');assert.equal(profile.storage.getItem('espanola-progress'),'[]');
});
test('Los doce cuadernos cargan perfiles antes de su app y guardan en su espacio propio',()=>{
  const root=new URL('../',import.meta.url),ids=JSON.parse(fs.readFileSync(new URL('content/catalog.json',root),'utf8')).map(x=>x.id);
  assert.equal(ids.length,12);
  for(const id of ids){
    const html=fs.readFileSync(new URL('openings/'+id+'/index.html',root),'utf8'),app=fs.readFileSync(new URL('openings/'+id+'/app.js',root),'utf8');
    assert.ok(html.indexOf('profiles.js')<html.indexOf('<script src="app.js'));
    assert.equal(app.includes('localStorage.'),false);
    assert.ok(app.includes('window.LabProfiles.storage.getItem'));
  }
});
