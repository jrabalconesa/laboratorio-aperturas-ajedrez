import {Chess} from './vendor/chess.js';
import {compiled,START,key,uci,choices,expected,play,classify,readProgress,recordMistake,resolveMistake,complete,pickLine} from './training-core.js';
import {spanish,pieceNames,moveIdea} from './training-lines.js';
const $=id=>document.getElementById('trainer-'+id),STORAGE='laboratorio-italiana-training-v1';
let progress;try{progress=readProgress(window.LabProfiles.storage.getItem(STORAGE));}catch{progress=readProgress(null);$('storageWarning').hidden=false;}
let run=null,selected=null,hintLevel=0,assisted=false,viewIndex=null,blocked=null,generation=0,busy=false;
function save(){try{window.LabProfiles.storage.setItem(STORAGE,JSON.stringify(progress));}catch{$('storageWarning').hidden=false;}summary();}
function summary(){
  $('summary').textContent=progress.sessions+' recorridos completados';
  const n=progress.mistakes.filter(m=>m.due<=Date.now()).length;$('dueCount').textContent=n?'('+n+')':'';
}
function say(title,message,kind='neutral'){
  const box=$('feedback');box.className='feedback '+kind;box.replaceChildren();
  const label=document.createElement('b');label.textContent=title;box.append(label,document.createTextNode(message));
}
function currentLine(){return compiled.find(l=>l.id===run.lineId);}
function resetHints(){hintLevel=0;assisted=false;selected=null;$('hintLevel').textContent='0/4';$('hintText').hidden=true;}
function showTraining(){ $('training').hidden=false;$('review').hidden=true;$('trainTab').hidden=true;$('reviewTab').removeAttribute('aria-current'); }
function begin({line,side,start='initial',mistake=null,guided=false}){
  generation++;busy=false;blocked=null;viewIndex=null;resetHints();
  const c=new Chess();
  run={chess:c,lineId:line.id,side,history:[],snapshots:[START],messages:[],clean:true,done:false,reviewId:mistake?.id||null,reviewOnly:!!mistake,startPly:0,ownMoves:0,guided,basic:line.id==='basic'};
  if(mistake){c.load(mistake.fen);run.snapshots=[c.fen()];}
  else if(start==='key'){
    for(const step of line.steps.slice(0,line.checkpoint))append(play(c,step.uci),'Posición de partida del ejercicio.');
    run.startPly=run.history.length;
  }
  showTraining();$('lineTitle').textContent=line.title;$('plan').textContent=side==='w'?line.plan:line.blackPlan;
  $('configuration').open=false;$('configurationLabel').textContent='Configurar práctica · '+(side==='w'?'Blancas':'Negras')+' · '+(mistake?'Repaso':line.title);
  $('next').hidden=true;$('retry').hidden=true;$('returnLive').hidden=true;
  $('guideControls').hidden=!guided;$('guideIntro').hidden=!guided;
  $('guideCompletion').hidden=true;
  $('configuration').hidden=guided||run.basic;
  $('manualControls').hidden=guided;$('helpControls').hidden=guided;
  $('guideTab').setAttribute('aria-pressed',String(guided));$('basicTab').setAttribute('aria-pressed',String(run.basic&&!guided));$('variantsTab').setAttribute('aria-pressed',String(!run.basic));
  $('modeDescription').textContent=guided?'Observa las jugadas de ambos bandos y entiende su propósito. Avanza a tu ritmo.':run.basic?'Repite la secuencia que acabas de estudiar. Elige tu bando y usa las pistas cuando las necesites.':'Amplía la secuencia básica con otras respuestas y repasa tus dificultades.';
  $('basicSideControl').hidden=!run.basic||guided;
  say(mistake?'Repaso de una dificultad':'Entrenamiento de variante',mistake?'Resuelve de nuevo esta posición. Intenta hacerlo sin pistas.':'Juega las continuaciones del repertorio. Puedes elegir otra línea conocida y el entrenador la reconocerá.');
  if(guided){say('Empezamos desde la posición inicial','Aprenderás una línea básica de la Italiana: 1.e4 e5 2.Cf3 Cc6 3.Ac4 Ac5. Después verás el enroque y la preparación del centro. Pulsa «Siguiente jugada».');}
  render();advance();
}
function append(move,message){run.history.push({san:move.san,uci:uci(move),color:move.color,fullmove:run.chess.fen().split(' ')[5]});run.snapshots.push(run.chess.fen());run.messages.push(message);}
function finish(){
  if(run.done)return;run.done=true;busy=false;generation++;
  if(!run.reviewOnly)complete(progress,run.lineId,run.clean,Date.now(),run.side);
  save();$('next').hidden=false;
  say(run.reviewOnly?'Posición repasada':'Recorrido completado',run.reviewOnly?'El siguiente repaso se ha programado según las ayudas utilizadas.':(run.clean?'Has completado la línea sin errores ni pistas. ':'Has completado la línea. Las dificultades quedan guardadas para repasar. ')+(run.side==='w'?currentLine().plan:currentLine().blackPlan),'good');
  render();
}
function advance(){
  if(!run||run.guided||run.done||viewIndex!==null||blocked)return;
  const step=expected(run.chess.fen(),run.lineId);
  if(!step){finish();return;}
  if(!step.lines.some(l=>l.id===run.lineId)){finish();return;}
  if(run.chess.turn()===run.side){busy=false;render();return;}
  busy=true;render();const ticket=++generation;
  setTimeout(()=>{
    if(ticket!==generation||viewIndex!==null||blocked||run.done)return;
    const before=run.chess.fen(),move=play(run.chess,step.uci);
    append(move,moveIdea(move,currentLine(),move.color));busy=false;resetHints();
    say('Respuesta del rival',spanish(move.san)+'. '+moveIdea(move,currentLine(),move.color));
    render();advance();
  },450);
}
function mistake(kind,message,attempt){
  run.clean=false;const m=recordMistake(progress,{fen:run.chess.fen(),attempt,lineId:run.lineId,kind,message});save();return m;
}
function attempt(move){
  const before=run.chess.fen(),result=classify(before,move,run.lineId);
  if(result.kind==='illegal'){
    say('Movimiento ilegal',result.message,'bad');selected=null;render();return;
  }
  if(run.basic&&result.kind==='alternative'){
    say('Es otra línea válida del repertorio','En este paso estamos aprendiendo la secuencia básica. Prueba su continuación o pide una pista; podrás explorar esa alternativa en «Variantes».','caution');selected=null;render();return;
  }
  if(['outside','risk','error'].includes(result.kind)){
    mistake(result.kind,result.message,move);
    const c=new Chess(before);play(c,move);blocked=c.fen();selected=null;
    say(result.kind==='outside'?'Fuera del repertorio':result.kind==='risk'?'Revisa este riesgo táctico':'Error: permites mate',result.message,result.kind==='outside'?'caution':'bad');
    $('retry').hidden=false;render();return;
  }
  const helped=assisted||$('threats').checked;
  if(helped)run.clean=false;
  if($('threats').checked&&!progress.mistakes.some(m=>key(m.fen)===key(before)))mistake('hint','Posición practicada con piezas atacadas visibles.',move);
  const matching=progress.mistakes.find(m=>key(m.fen)===key(before));if(matching)resolveMistake(progress,matching.id,helped);
  if(result.kind==='alternative'){
    const destination=result.option.lines.find(l=>l.id!==run.lineId);run.lineId=destination.id;
    $('lineTitle').textContent=currentLine().title;$('plan').textContent=run.side==='w'?currentLine().plan:currentLine().blackPlan;
  }
  const played=play(run.chess,move),explanation=moveIdea(played,currentLine(),run.side);
  append(played,explanation);run.ownMoves++;save();resetHints();
  say(result.kind==='alternative'?'Alternativa del repertorio':'Bien: continuación del repertorio',spanish(played.san)+'. '+explanation,result.kind==='alternative'?'caution':'good');
  render();if(run.reviewOnly){finish();return;}advance();
}
function handleSquare(square){
  if(!run||run.guided||run.done||busy||blocked||viewIndex!==null||run.chess.turn()!==run.side)return;
  const p=run.chess.get(square);
  if(p?.color===run.side){selected=selected===square?null:square;renderBoard();return;}
  if(!selected)return;
  attempt(selected+square+'q');
}
function threats(c){const enemy=run.side==='w'?'b':'w';return c.board().flat().filter(p=>p&&p.color===run.side&&c.isAttacked(p.square,enemy));}
function renderBoard(){
  const fen=blocked||(viewIndex!==null?run.snapshots[viewIndex]:run.chess.fen()),c=new Chess(fen);
  const ranks=run.side==='w'?[8,7,6,5,4,3,2,1]:[1,2,3,4,5,6,7,8],files=(run.side==='w'?'abcdefgh':'hgfedcba').split('');
  const board=$('board');board.replaceChildren();
  const interactive=!run.guided&&!busy&&!run.done&&!blocked&&viewIndex===null&&run.chess.turn()===run.side;
  const targets=selected?run.chess.moves({square:selected,verbose:true}).map(m=>m.to):[];
  const attacked=$('threats').checked?threats(c):[];
  const last=viewIndex!==null?run.history[viewIndex-1]:run.history.at(-1);
  ranks.forEach((rank,ri)=>files.forEach((file,fi)=>{
    const square=file+rank,p=c.get(square),button=document.createElement('button');button.type='button';
    button.className='square'+((('abcdefgh'.indexOf(file)+rank)%2===0)?' dark':'')+(selected===square?' selected':'')+(targets.includes(square)?' target':'')+(last&&(last.uci.slice(0,2)===square||last.uci.slice(2,4)===square)?' last':'')+(attacked.some(p=>p.square===square)?' attacked':'');
    button.setAttribute('aria-label',square+(p?', '+pieceNames[p.type]+(p.color==='w'?' blanco':' negro'):', vacía'));
    button.setAttribute('aria-disabled',String(!interactive));
    if(p){const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 100 100');svg.setAttribute('aria-hidden','true');svg.setAttribute('class',p.color==='w'?'white-piece':'black-piece');const use=document.createElementNS(svg.namespaceURI,'use');use.setAttribute('href','assets/chess-pieces-modern.svg#piece-'+p.type.toUpperCase());svg.append(use);button.append(svg);}
    if(ri===7||fi===0){const coord=document.createElement('span');coord.className='coord';coord.textContent=(fi===0?rank:'')+(ri===7?file:'');button.append(coord);}
    button.addEventListener('click',()=>handleSquare(square));board.append(button);
  }));
  $('threatText').textContent=$('threats').checked?(attacked.length?'Bajo ataque directo: '+attacked.map(p=>pieceNames[p.type]+' en '+p.square).join(', ')+'. Un ataque no implica una pérdida forzada.':'No hay piezas propias bajo ataque directo. Revisa también las amenazas de la próxima jugada.'):'Las ayudas visuales son opcionales. Activarlas cuenta como ayuda en este recorrido.';
}
function render(){
  if(!run)return;renderBoard();
  $('turn').textContent=run.guided?(run.history.length+'/'+currentLine().steps.length+' jugadas individuales'):viewIndex!==null?'Revisando posición':blocked?'Compara y reconsidera':run.done?'Práctica terminada':busy?'Responde el rival…':('Juegas con '+(run.side==='w'?'blancas':'negras'));
  $('hint').disabled=run.done||busy||!!blocked||viewIndex!==null||hintLevel>=4;
  $('stepCount').textContent=run.ownMoves+' decisiones';$('moves').replaceChildren();
  if(run.guided){$('stepCount').textContent=run.history.length+'/'+currentLine().steps.length;$('guidePrevious').disabled=run.history.length===0;$('guideNext').disabled=run.history.length===currentLine().steps.length;$('guideRepeat').hidden=run.history.length!==currentLine().steps.length;}
  run.history.forEach((m,i)=>{
    const button=document.createElement('button');button.type='button';button.textContent=(m.color==='w'?Math.floor((Number(new Chess(run.snapshots[i]).fen().split(' ')[5])))+'. ':'… ')+spanish(m.san);
    button.className=(viewIndex===i+1?'current':'');button.setAttribute('aria-label','Revisar '+button.textContent);
    button.addEventListener('click',()=>{if(run.guided){seekGuide(i+1);return;}generation++;busy=false;viewIndex=i+1;selected=null;$('returnLive').hidden=false;$('retry').hidden=true;
      say('Revisión · '+spanish(m.san),run.messages[i]);$('hintText').hidden=true;render();});$('moves').append(button);
  });
}
function hint(){
  if(!run||run.done||busy||blocked||viewIndex!==null)return;
  const option=expected(run.chess.fen(),run.lineId);if(!option)return;
  hintLevel=Math.min(4,hintLevel+1);assisted=true;run.clean=false;
  if(hintLevel===1)mistake('hint','Posición practicada con ayuda.',option.uci);
  const c=new Chess(run.chess.fen()),m=play(c,option.uci);
  const hints=[
    'Antes de mover, comprueba la seguridad del rey, las capturas y las piezas bajo ataque. ¿Qué necesita esta posición?',
    run.side==='w'?currentLine().plan:currentLine().blackPlan,
    'Observa el '+pieceNames[m.piece]+' en '+m.from+'. '+(m.captured?'Comprueba qué puedes capturar y la recaptura.':'Busca una casilla coherente con el plan.'),
    'La continuación de esta línea es '+spanish(m.san)+' ('+m.from+'–'+m.to+'). '+moveIdea(m,currentLine(),run.side),
  ];
  $('hintText').hidden=false;$('hintText').textContent='Pista '+hintLevel+'/4 · '+hints[hintLevel-1];$('hintLevel').textContent=hintLevel+'/4';render();
}
function formatDate(time){return new Date(time).toLocaleDateString('es-ES',{day:'numeric',month:'short'});}
function button(text,action){const b=document.createElement('button');b.type='button';b.textContent=text;b.addEventListener('click',action);return b;}
function p(text){const n=document.createElement('p');n.textContent=text;return n;}
function review(){
  generation++;busy=false;$('training').hidden=true;$('review').hidden=false;$('reviewTab').setAttribute('aria-current','page');$('trainTab').hidden=false;
  for(const id of ['guideTab','basicTab','variantsTab'])$(id).setAttribute('aria-pressed','false');
  $('lineProgress').replaceChildren();
  for(const line of compiled){
    const card=document.createElement('article');card.className='progress-item';const title=document.createElement('h3');title.textContent=line.title;card.append(title);
    for(const side of ['w','b']){const v=progress.lines[line.id+':'+side];card.append(p((side==='w'?'Blancas: ':'Negras: ')+(v?v.tries+' recorridos · '+v.streak+' seguidos sin ayuda · repaso '+formatDate(v.due):'pendiente de practicar')));}
    card.append(button('Practicar',()=>begin({line,side:$('side').value,start:$('startAt').value})));$('lineProgress').append(card);
  }
  $('mistakes').replaceChildren();
  const list=[...progress.mistakes].sort((a,b)=>a.due-b.due);
  if(!list.length)$('mistakes').append(p('Todavía no tienes dificultades registradas. Empieza un recorrido para practicar.'));
  for(const item of list){
    const line=compiled.find(l=>l.id===item.lineId),card=document.createElement('article');card.className='mistake';
    const text=document.createElement('div'),title=document.createElement('b');title.textContent=line.title+' · '+(new Chess(item.fen).turn()==='w'?'blancas':'negras');
    text.append(title,p(item.message),p(item.due<=Date.now()?'Pendiente de repaso':'Próximo repaso: '+formatDate(item.due)));
    card.append(text,button('Reintentar',()=>begin({line,side:new Chess(item.fen).turn(),mistake:item})));$('mistakes').append(card);
  }
  $('reviewDue').disabled=!list.some(m=>m.due<=Date.now());summary();
}
function seekGuide(ply){
  if(!run?.guided)return;
  const line=currentLine();generation++;run.chess=new Chess();run.history=[];run.snapshots=[START];run.messages=[];viewIndex=null;selected=null;
  for(const step of line.steps.slice(0,ply)){const m=play(run.chess,step.uci);append(m,moveIdea(m,line,m.color));}
  if(ply===0)say('Posición inicial','Antes de memorizar, comprende: centro, desarrollo y seguridad del rey. Pulsa «Siguiente jugada».');
  else{
    const m=run.history.at(-1),fullmove=Math.ceil(ply/2);
    say((m.color==='w'?'Blancas · ':'Negras · ')+fullmove+(m.color==='w'?'. ':'… ')+spanish(m.san),run.messages.at(-1),'good');
  }
  if(ply===line.steps.length){
    window.LabProfiles.storage.setItem('italiana-basic-guide-v1',JSON.stringify({seen:true,date:Date.now()}));
    $('guideCompletion').hidden=false;
  }else $('guideCompletion').hidden=true;
  render();
}
function learnBasic(){begin({line:compiled.find(l=>l.id==='basic'),side:'w',guided:true});}
function repeatBasic(){begin({line:compiled.find(l=>l.id==='basic'),side:$('basicSide').value});}
$('guideTab').addEventListener('click',learnBasic);
$('basicTab').addEventListener('click',repeatBasic);
$('variantsTab').addEventListener('click',()=>{const side=$('side').value;begin({...($('line').value==='adaptive'?pickLine(progress,side):{line:compiled.find(l=>l.id===$('line').value)}),side,start:$('startAt').value});});
$('guidePrevious').addEventListener('click',()=>seekGuide(Math.max(0,run.history.length-1)));
$('guideNext').addEventListener('click',()=>seekGuide(Math.min(currentLine().steps.length,run.history.length+1)));
$('guideRestart').addEventListener('click',learnBasic);
$('guideRepeat').addEventListener('click',repeatBasic);
$('basicSide').addEventListener('change',repeatBasic);
for(const line of compiled){const option=document.createElement('option');option.value=line.id;option.textContent=line.title;$('line').append(option);}
try{
  const settings=JSON.parse(window.LabProfiles.storage.getItem('italiana-training-settings')||'{}');
  if(['w','b'].includes(settings.side))$('side').value=settings.side;
  if(['initial','key'].includes(settings.start))$('startAt').value=settings.start;
  if(settings.line==='adaptive'||compiled.some(l=>l.id===settings.line))$('line').value=settings.line;
}catch{}
$('setup').addEventListener('submit',event=>{
  event.preventDefault();const side=$('side').value,chosen=$('line').value;
  window.LabProfiles.storage.setItem('italiana-training-settings',JSON.stringify({side,line:chosen,start:$('startAt').value}));
  const choice=chosen==='adaptive'?pickLine(progress,side):{line:compiled.find(l=>l.id===chosen)};
  begin({...choice,side,start:$('startAt').value});
});
$('hint').addEventListener('click',hint);
$('retry').addEventListener('click',()=>{blocked=null;viewIndex=null;selected=null;$('retry').hidden=true;say('Vuelve a intentarlo','La posición anterior está restaurada. Compara tus candidatas o pide una pista.');render();advance();});
$('returnLive').addEventListener('click',()=>{viewIndex=null;selected=null;$('returnLive').hidden=true;$('retry').hidden=!blocked;say('Ejercicio recuperado','Continúa desde tu última posición de entrenamiento.');$('hintText').hidden=hintLevel===0;render();advance();});
$('threats').addEventListener('change',()=>{if($('threats').checked&&run&&!run.done){assisted=true;run.clean=false;if(run.chess.turn()===run.side)mistake('hint','Posición practicada con piezas atacadas visibles.','');}renderBoard();});
$('next').addEventListener('click',()=>{
  if(run.basic){repeatBasic();return;}
  const side=run.side,choice=$('line').value==='adaptive'?pickLine(progress,side,run.lineId):{line:compiled.find(l=>l.id===$('line').value)};begin({...choice,side,start:$('startAt').value});
});
$('reviewTab').addEventListener('click',review);
$('trainTab').addEventListener('click',()=>{showTraining();if(run){render();advance();}});
$('reviewDue').addEventListener('click',()=>{
  const item=[...progress.mistakes].filter(m=>m.due<=Date.now()).sort((a,b)=>a.due-b.due)[0];
  if(item)begin({line:compiled.find(l=>l.id===item.lineId),side:new Chess(item.fen).turn(),mistake:item});
});
summary();learnBasic();
if('serviceWorker' in navigator)navigator.serviceWorker.register('./service-worker.js').catch(()=>{});
