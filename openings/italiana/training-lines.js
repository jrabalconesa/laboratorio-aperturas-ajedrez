// Líneas didácticas originales. Las alternativas se aceptan por posición legal,
// incluidos órdenes de jugadas que transponen. No son una evaluación de motor.
export const lines = [
  {id:'centro', title:'Italiana abierta · preparar c3–d4', level:1,
    moves:'e4 e5 Nf3 Nc6 Bc4 Bc5 O-O Nf6 c3 O-O d4 exd4 cxd4 Bb6 Nc3 d6 Be3 Bg4 Re1 Re8',
    plan:'Con el rey seguro, c3 sostiene d4. Tras abrir el centro, termina el desarrollo y activa las torres.',
    blackPlan:'Desarrolla, enroca y presiona el centro blanco; ...d6 y ...Ag4 coordinan tus piezas.',
    checkpoint:6},
  {id:'lenta', title:'Giuoco Pianissimo · centro estable', level:1,
    moves:'e4 e5 Nf3 Nc6 Bc4 Bc5 d3 Nf6 O-O d6 c3 O-O Re1 a6 Bb3 Ba7 Nbd2 Re8 Nf1 Be6 Ng3',
    plan:'Sostén e4 y prepara d4 sin precipitarte. El centro estable permite la maniobra Cbd2–f1–g3.',
    blackPlan:'Completa el desarrollo y prepara ...d5. Vigila cuándo cambia el equilibrio central.',
    checkpoint:6},
  {id:'orden', title:'Italiana lenta · enrocar primero', level:1,
    moves:'e4 e5 Nf3 Nc6 Bc4 Bc5 O-O Nf6 d3 d6 c3 O-O Re1 a6 Bb3 Ba7 Nbd2 Re8 Nf1 Be6 Ng3',
    plan:'Enrocar antes de d3 llega al mismo esquema lento. Reconoce la posición aunque cambie el orden.',
    blackPlan:'Reconoce la transposición: el plan central importa más que recordar un orden único.',
    checkpoint:6},
  {id:'dos-caballos', title:'Dos Caballos · respuesta tranquila', level:1,
    moves:'e4 e5 Nf3 Nc6 Bc4 Nf6 d3 Bc5 O-O d6 c3 O-O Re1 a6 Bb3 Ba7 Nbd2 Re8',
    plan:'Defiende e4 con d3, enroca y desarrolla. No es obligatorio entrar en un ataque sobre f7.',
    blackPlan:'...Cf6 ataca e4 mientras desarrolla. Enroca y prepara contrajuego central.',
    checkpoint:6},
  {id:'hungara', title:'Defensa Húngara · ocupar el centro', level:2,
    moves:'e4 e5 Nf3 Nc6 Bc4 Be7 d4 exd4 Nxd4 Nf6 Nc3 d6 O-O O-O Re1',
    plan:'Aprovecha el desarrollo discreto del alfil negro para ocupar d4, desarrollar y enrocar.',
    blackPlan:'Completa el desarrollo y disputa el centro; no confundas solidez con inmovilidad.',
    checkpoint:6},
  {id:'evans', title:'Gambito Evans · iniciativa y tiempos', level:2,
    moves:'e4 e5 Nf3 Nc6 Bc4 Bc5 b4 Bxb4 c3 Ba5 d4 exd4 O-O d6 cxd4 Bb6 Nc3',
    plan:'El peón b compra tiempos para c3 y d4. Prioriza desarrollo y rey seguro antes de recuperar material.',
    blackPlan:'Después de aceptar el peón, retira el alfil con sentido y completa el desarrollo con cuidado.',
    checkpoint:6},
  {id:'central', title:'Italiana clásica · responder al jaque', level:2,
    moves:'e4 e5 Nf3 Nc6 Bc4 Bc5 c3 Nf6 d4 exd4 cxd4 Bb4+ Bd2 Bxd2+ Nbxd2 d5 exd5 Nxd5 O-O',
    plan:'c3 y d4 abren el centro antes del enroque. Responde al jaque y calcula los cambios antes de seguir.',
    blackPlan:'El jaque en b4 y la ruptura ...d5 cuestionan el centro blanco. Calcula las recapturas.',
    checkpoint:6},
];

export const pieceNames = {p:'peón',n:'caballo',b:'alfil',r:'torre',q:'dama',k:'rey'};
export function spanish(san){return san.replace(/[KQRBN]/g,p=>({K:'R',Q:'D',R:'T',B:'A',N:'C'})[p]);}
export function moveIdea(move, line, side){
  const plan=side==='w'?line.plan:line.blackPlan;
  if(move.isKingsideCastle())return 'El enroque aparta al rey del centro y activa la torre. '+plan;
  if(move.san.includes('+'))return 'Das jaque: el rival debe atender a su rey antes de continuar su plan.';
  if(move.captured)return 'Capturas un '+pieceNames[move.captured]+'. Comprueba la recaptura y las líneas que se abren. '+plan;
  if(move.to==='d4'&&move.piece==='p')return 'La ruptura d4 disputa e5 y cambia la estructura. Revisa las capturas antes de continuar.';
  if(move.to==='c3'&&move.piece==='p')return 'c3 prepara d4 y controla esa casilla; a cambio, ocupa una casilla natural del caballo de b1.';
  if(move.to==='b4'&&move.piece==='p')return 'El gambito ofrece un peón para ganar tiempos sobre el alfil y construir el centro con c3 y d4.';
  if(move.to==='d3'&&move.piece==='p')return 'd3 sostiene e4, libera el alfil y conserva un centro estable. La ruptura d4 puede prepararse después.';
  if(move.piece==='n'&&['d2','f1','g3'].includes(move.to))return 'El caballo mejora su coordinación con el centro. En el esquema lento, la ruta d2–f1–g3 necesita un centro estable.';
  if(['n','b'].includes(move.piece))return 'Desarrollas o reubicas una pieza menor. '+plan;
  if(move.piece==='r')return 'La torre busca actividad en una columna central. '+plan;
  return plan;
}
