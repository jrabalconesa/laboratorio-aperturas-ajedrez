import {Chess} from './vendor/chess.js';
import {lines,spanish,pieceNames} from './training-lines.js?v=20261029-integrated-3';
export const START=new Chess().fen();
export const key=fen=>new Chess(fen).fen().split(' ').slice(0,4).join(' ');
export const uci=m=>m.from+m.to+(m.promotion||'');
export const compiled=lines.map(line=>{
  const c=new Chess(),steps=[];
  for(const san of line.moves.split(' ')){const before=c.fen(),move=c.move(san);steps.push({before,after:c.fen(),uci:uci(move),san:move.san});}
  return {...line,steps};
});
export function choices(fen){
  const found=new Map();
  for(const line of compiled)for(let i=0;i<line.steps.length;i++){
    const step=line.steps[i];if(key(step.before)!==key(fen))continue;
    const item=found.get(step.uci)||{...step,lines:[]};item.lines.push({id:line.id,index:i});found.set(step.uci,item);
  }
  return [...found.values()];
}
export function expected(fen,lineId){return choices(fen).find(x=>x.lines.some(l=>l.id===lineId))||choices(fen)[0];}
export function play(c,move){return c.move({from:move.slice(0,2),to:move.slice(2,4),promotion:move[4]||'q'});}
export function classify(fen,move,lineId){
  const c=new Chess(fen);let m;
  try{m=play(c,move);}catch{return {kind:'illegal',message:'Movimiento ilegal. Revisa el turno, el recorrido de la pieza y la seguridad de tu rey.'};}
  const option=choices(fen).find(x=>x.uci===uci(m));
  if(option)return {kind:option.lines.some(l=>l.id===lineId)?'repertoire':'alternative',move:m,option,fen:c.fen()};
  // Solo afirmamos un error cuando existe una consecuencia táctica comprobada.
  const mate=c.moves({verbose:true}).find(reply=>{const t=new Chess(c.fen());t.move(reply);return t.isCheckmate();});
  if(mate)return {kind:'error',move:m,reply:spanish(mate.san),message:`Permites ${spanish(mate.san)}, que da mate. Prueba otra continuación.`};
  if(m.piece!=='k'&&!m.captured){
    const loss=c.moves({verbose:true}).find(reply=>{
      if(reply.to!==m.to||!reply.captured)return false;
      const t=new Chess(c.fen());t.move(reply);
      return !t.moves({verbose:true}).some(r=>r.to===reply.to&&r.captured);
    });
    if(loss)return {kind:'risk',move:m,reply:spanish(loss.san),message:`${pieceNames[m.piece]} en ${m.to}: el rival puede jugar ${spanish(loss.san)} y capturarlo sin recaptura inmediata en esa casilla. Comprueba otras compensaciones antes de valorarlo.`};
  }
  return {kind:'outside',move:m,message:'Jugada legal fuera de las líneas de este piloto. No está evaluada como mala: vuelve a la posición y compara con las continuaciones del repertorio.'};
}
export function newProgress(){return {version:1,lines:{},mistakes:[],sessions:0};}
export function readProgress(raw){
  try{
    const d=JSON.parse(raw);if(d?.version!==1||!d.lines||!Array.isArray(d.mistakes))return newProgress();
    const clean=newProgress();clean.sessions=Number.isSafeInteger(d.sessions)&&d.sessions>=0?d.sessions:0;
    for(const line of compiled)for(const side of ['w','b']){const id=line.id+':'+side,v=d.lines[id];if(v&&Number.isFinite(v.due)&&Number.isInteger(v.streak)&&v.streak>=0)clean.lines[id]={streak:Math.min(v.streak,20),due:v.due,tries:Math.max(0,Number(v.tries)||0)};}
    clean.mistakes=d.mistakes.filter(m=>{try{return typeof m.id==='string'&&typeof m.lineId==='string'&&compiled.some(l=>l.id===m.lineId)&&new Chess(m.fen)&&typeof m.attempt==='string'&&Number.isFinite(m.due);}catch{return false;}}).slice(-80);
    return clean;
  }catch{return newProgress();}
}
export function recordMistake(progress,{fen,attempt,lineId,kind,message},now=Date.now()){
  const id=key(fen)+'|'+new Chess(fen).turn(),previous=progress.mistakes.find(m=>m.id===id);
  const value={id,fen,attempt,lineId,kind,message,due:now,count:(previous?.count||0)+1,solved:0};
  if(previous)Object.assign(previous,value);else progress.mistakes.push(value);
  progress.mistakes=progress.mistakes.slice(-80);return value;
}
export function resolveMistake(progress,id,assisted,now=Date.now()){
  const m=progress.mistakes.find(x=>x.id===id);if(!m)return;
  m.solved=assisted?0:(m.solved||0)+1;
  const days=assisted?1:[1,3,7,14,30][Math.min(m.solved-1,4)];m.due=now+days*86400000;
}
export function complete(progress,lineId,clean,now=Date.now(),side='w'){
  const id=lineId+':'+side,old=progress.lines[id]||{streak:0,tries:0},streak=clean?old.streak+1:0;
  progress.lines[id]={streak,tries:old.tries+1,due:now+(clean?[1,3,7,14,30][Math.min(streak-1,4)]:1)*86400000};progress.sessions++;
}
export function pickLine(progress,side,excludeId,now=Date.now()){
  const candidates=compiled.filter(l=>l.id!==excludeId);
  const due=progress.mistakes.filter(m=>m.due<=now&&new Chess(m.fen).turn()===side).sort((a,b)=>a.due-b.due)[0];
  if(due)return {line:compiled.find(l=>l.id===due.lineId),mistake:due};
  candidates.sort((a,b)=>{
    const av=progress.lines[a.id+':'+side],bv=progress.lines[b.id+':'+side];
    const group=v=>!v?0:v.due<=now?1:2;
    return group(av)-group(bv)||(av?.due||0)-(bv?.due||0)||a.level-b.level;
  });
  return {line:candidates[0]||compiled[0]};
}
export function auditLessons(lessons){
  return lessons.map(l=>{const c=new Chess();for(const move of l.uci.split(' '))play(c,move);return {code:l.code,valid:key(c.fen())===key(l.fen)};});
}
