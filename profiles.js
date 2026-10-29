(function(){
  'use strict';
  const META='laboratorio-profiles-v1',PREFIX='laboratorio-profile:',memory=new Map();
  let warning=false;
  function read(key){try{return localStorage.getItem(key)??memory.get(key)??null;}catch{warning=true;return memory.get(key)??null;}}
  function write(key,value){memory.set(key,value);try{localStorage.setItem(key,value);}catch{warning=true;}}
  const fallback=()=>({version:1,active:'principal',profiles:[{id:'principal',name:'Principal'}]});
  function load(raw){
    try{const d=JSON.parse(raw);if(d?.version!==1||!Array.isArray(d.profiles))return fallback();
      const seen=new Set();const profiles=d.profiles.filter(p=>p&&typeof p.id==='string'&&/^[a-zA-Z0-9_-]{1,80}$/.test(p.id)&&typeof p.name==='string'&&p.name.trim()&&p.name.length<=40&&!seen.has(p.id)&&(seen.add(p.id),true)).slice(0,30);
      if(!profiles.length)return fallback();return {version:1,profiles,active:profiles.some(p=>p.id===d.active)?d.active:profiles[0].id};
    }catch{return fallback();}
  }
  const state=load(read(META));
  // Capturar la identidad al cargar evita atribuir una escritura tardía a otro
  // perfil si el usuario cambia de perfil en una pestaña diferente.
  const identity=state.active;
  const storage={
    getItem(key){
      const scoped=PREFIX+identity+':'+key;let value=read(scoped);
      if(value===null&&identity==='principal'){
        const legacy=read(key);if(legacy!==null){try{JSON.parse(legacy);value=legacy;write(scoped,legacy);}catch{}}
      }
      // Los cuadernos guardan JSON. Una entrada dañada no debe impedir abrirlos.
      if(value!==null){try{JSON.parse(value);}catch{return null;}}
      return value;
    },
    setItem(key,value){write(PREFIX+identity+':'+key,String(value));if(warning)showWarning();},
  };
  window.LabProfiles={storage,activeId:identity,activeName:state.profiles.find(p=>p.id===identity).name};
  function persist(){write(META,JSON.stringify(state));}
  function showWarning(){const n=document.getElementById('profileNotice');if(n)n.textContent='El navegador no permite guardar datos. Los cambios solo se conservarán durante esta sesión.';}
  function mount(){
    const host=document.createElement('section');host.className='profile-bar';host.setAttribute('aria-label','Perfiles locales');
    host.innerHTML='<div><label for="localProfile">Perfil local</label><select id="localProfile"></select><button type="button" id="newProfile">Nuevo perfil</button><button type="button" id="renameProfile">Renombrar</button></div><p id="profileNotice">Guardado en este navegador · sin sincronización entre dispositivos o sitios.</p><dialog id="profileDialog"><form id="profileForm"><h2 id="profileFormTitle">Nuevo perfil local</h2><label for="profileName">Nombre del perfil</label><input id="profileName" name="name" maxlength="40" required autocomplete="off"><p id="profileError" role="status"></p><div><button type="button" id="profileCancel">Cancelar</button><button type="submit">Guardar perfil</button></div></form></dialog>';
    const header=document.querySelector('.site-header,.topbar,header.top');(header||document.body.firstElementChild).after(host);
    const style=document.createElement('style');style.textContent='.profile-bar{max-width:1200px;margin:10px auto;padding:10px 20px;border-bottom:1px solid #d6ddd1;font-family:Arial,sans-serif;color:#233d2b}.profile-bar>div{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.profile-bar label{font-size:12px;font-weight:bold}.profile-bar select,.profile-bar button,.profile-bar input{font:inherit;font-size:12px;border:1px solid #bdcbb9;border-radius:6px;padding:7px 10px;background:#fff;color:#25432c}.profile-bar p{font-size:11px;margin:7px 0 0;color:#596751}.profile-bar select{min-width:110px;max-width:210px}.profile-bar dialog{border:1px solid #b9cab6;border-radius:12px;max-width:calc(100vw - 32px);width:370px;padding:24px;color:#233d2b}.profile-bar dialog::backdrop{background:#16251c99}.profile-bar dialog h2{font-size:20px;margin:0 0 18px}.profile-bar dialog input{display:block;width:100%;font-size:16px;margin:8px 0 12px}.profile-bar dialog form>div{display:flex;gap:8px;justify-content:end;margin-top:18px}.profile-bar dialog button[type=submit]{background:#1c6239;color:white}.profile-bar #profileError{color:#a62c24}.profile-bar :focus-visible{outline:3px solid #bd8c24;outline-offset:2px}@media(max-width:600px){.profile-bar{padding:7px 12px;margin:5px auto}.profile-bar select,.profile-bar button{font-size:11px;padding:6px 8px}.profile-bar p{font-size:10px}}';document.head.append(style);
    const select=host.querySelector('#localProfile'),dialog=host.querySelector('#profileDialog'),name=host.querySelector('#profileName'),error=host.querySelector('#profileError');let renaming=false;
    function options(){select.replaceChildren();for(const profile of state.profiles){const option=document.createElement('option');option.value=profile.id;option.textContent=profile.name;select.append(option);}select.value=state.active;}
    options();
    select.addEventListener('change',()=>{state.active=select.value;persist();location.reload();});
    function edit(rename){renaming=rename;host.querySelector('#profileFormTitle').textContent=rename?'Renombrar perfil local':'Nuevo perfil local';name.value=rename?state.profiles.find(p=>p.id===identity).name:'';error.textContent='';dialog.showModal();name.focus();}
    host.querySelector('#newProfile').addEventListener('click',()=>edit(false));host.querySelector('#renameProfile').addEventListener('click',()=>edit(true));
    host.querySelector('#profileCancel').addEventListener('click',()=>dialog.close());
    host.querySelector('#profileForm').addEventListener('submit',event=>{
      event.preventDefault();const value=name.value.trim();
      if(!value||value.length>40){error.textContent='Escribe un nombre de 1 a 40 caracteres.';return;}
      if(state.profiles.some(p=>p.name.toLocaleLowerCase()===value.toLocaleLowerCase()&&(!renaming||p.id!==identity))){error.textContent='Ya existe un perfil con ese nombre.';return;}
      if(!renaming&&state.profiles.length>=30){error.textContent='Puedes guardar hasta 30 perfiles locales.';return;}
      if(renaming){state.profiles.find(p=>p.id===identity).name=value;window.LabProfiles.activeName=value;persist();options();dialog.close();}
      else {const id=typeof crypto.randomUUID==='function'?crypto.randomUUID():'p'+Date.now().toString(36)+Math.random().toString(36).slice(2,10);state.profiles.push({id,name:value});state.active=id;persist();location.reload();}
      if(warning)showWarning();
    });
    if(warning)showWarning();
    window.addEventListener('storage',event=>{if(event.key===META&&load(event.newValue).active!==identity)location.reload();});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
