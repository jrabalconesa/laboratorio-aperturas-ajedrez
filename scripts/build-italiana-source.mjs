import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceDir = path.join(root, "sources", "italiana");
const basicCsv = fs.readFileSync(path.join(sourceDir, "posiciones_ITA.csv"), "utf8");

function parseSimpleCsv(text) {
  const [header, ...lines] = text.replace(/^\uFEFF/, "").trim().split(/\r?\n/);
  const fields = header.split(";");
  return lines.map((line) =>
    Object.fromEntries(fields.map((field, index) => [field, line.split(";")[index] ?? ""])),
  );
}

const basePositions = parseSimpleCsv(basicCsv);
const positionsById = Object.fromEntries(basePositions.map((row) => [row.Código, row]));

const games = [
  {
    id: "ITA-M01",
    title: "Construcción sólida y centro abierto",
    moves: ["e2e4","e7e5","g1f3","b8c6","f1c4","f8c5","e1g1","g8f6","c2c3","e8g8","d2d4","e5d4","c3d4","c5b6","b1c3","d7d6","c1e3","c8g4","f1e1","f8e8","d1d2","f6e4","c3e4","e8e4","c4f7","g8f7","f3g5","f7g8","g5e4"],
    stops: [
      [7, "Tras 4.O-O", "¿Por qué enrocar antes de c3-d4?", "La seguridad del rey es una condición para abrir líneas."],
      [11, "Tras 6.d4", "¿Qué debe calcularse antes de la ruptura?", "Las capturas en d4 y e4, la seguridad de los reyes y qué piezas ganarán actividad."],
      [15, "Tras 8.Cc3", "¿Cuál era la peor pieza blanca?", "El caballo de b1; Cc3 lo desarrolla y aumenta el control de d5 y e4."],
      [19, "Tras 10.Te1", "¿Qué hace realmente la torre?", "Refuerza e4, ocupa la columna central y prepara respuestas tácticas."],
      [29, "Tras 15.Cxe4", "¿Qué enseñó la combinación?", "La táctica apareció porque las piezas estaban desarrolladas y las líneas abiertas."],
    ],
  },
  {
    id: "ITA-M02",
    title: "El precio de la precipitación",
    moves: ["e2e4","e7e5","g1f3","b8c6","f1c4","f8c5","d1h5","g7g6","h5f3","g8f6","c2c3","e8g8","d2d3","d7d5","e4d5","e5e4","d3e4","f6e4","e1g1","c6e5","f3e4","f8e8"],
    stops: [
      [7, "Tras 4.Dh5?!", "¿Qué gana y qué pierde la dama?", "Presiona f7, pero pierde tiempos y retrasa el desarrollo y el enroque."],
      [14, "Tras 7...d5", "¿Por qué la ruptura es fuerte?", "Las negras tienen el rey seguro y mayor desarrollo; las rupturas castigan la falta de coordinación."],
      [16, "Tras 8...e4!", "¿Qué cambió al abrirse el centro?", "El caballo y la dama blancos quedan expuestos a ataques con ganancia de tiempo."],
      [20, "Tras 10...Ce5", "¿Qué pieza negra mejora?", "El caballo se centraliza atacando la dama y el alfil de c4."],
      [22, "Tras 11...Te8", "¿Por qué la torre llega con fuerza?", "La columna e está abierta y las piezas blancas siguen descoordinadas."],
    ],
  },
  {
    id: "ITA-M03",
    title: "Centro cerrado y maniobra",
    moves: ["e2e4","e7e5","g1f3","b8c6","f1c4","f8c5","d2d3","g8f6","e1g1","d7d6","c2c3","a7a6","c4b3","c5a7","f1e1","e8g8","h2h3","h7h6","b1d2","f8e8","d2f1","c8e6","f1g3","d8d7","c1c2","a8d8","d3d4","d6d5","e4d5","e6d5","f3e5","c6e5","e1e5"],
    stops: [
      [11, "Tras 6.c3", "¿Por qué c3 sigue siendo útil sin jugar d4 enseguida?", "Reserva la ruptura, controla d4 y mantiene abiertas varias opciones."],
      [19, "Tras 10.Cbd2", "¿Cuál es la ruta del caballo?", "Cbd2-f1-g3; desde g3 participa en el flanco de rey y apoya e4."],
      [23, "Tras 12.Cg3", "¿Qué debe vigilar el blanco?", "La ruptura ...d5; el plan propio no puede ignorar el plan rival."],
      [28, "Tras 14...d5", "¿Qué significa que ambos rompan el centro?", "La posición cambia de maniobra a cálculo y las piezas centrales ganan valor."],
      [33, "Tras 17.Txe5", "¿Qué debe hacer ahora el blanco?", "Reevaluar desde cero, completar el desarrollo y coordinar las torres."],
    ],
  },
];

function initialState() {
  const board = {};
  for (const [file, piece] of [..."rnbqkbnr"].entries()) {
    board["abcdefgh"[file] + "8"] = piece;
    board["abcdefgh"[file] + "7"] = "p";
    board["abcdefgh"[file] + "2"] = "P";
    board["abcdefgh"[file] + "1"] = piece.toUpperCase();
  }
  return { board, turn: "w", castling: "KQkq", ep: "-", halfmove: 0, fullmove: 1 };
}

function play(state, uci) {
  const from = uci.slice(0, 2);
  const to = uci.slice(2, 4);
  const piece = state.board[from];
  const captured = state.board[to];
  if (!piece) throw new Error(`No hay pieza en ${from} para ${uci}`);
  if (piece.toUpperCase() === "P" && from[0] !== to[0] && !captured) {
    delete state.board[to[0] + from[1]];
  }
  state.board[to] = uci.length > 4
    ? piece === piece.toUpperCase() ? uci[4].toUpperCase() : uci[4]
    : piece;
  delete state.board[from];

  if (piece.toUpperCase() === "K" && Math.abs(from.charCodeAt(0) - to.charCodeAt(0)) === 2) {
    const rank = from[1];
    if (to[0] === "g") {
      state.board[`f${rank}`] = state.board[`h${rank}`];
      delete state.board[`h${rank}`];
    } else {
      state.board[`d${rank}`] = state.board[`a${rank}`];
      delete state.board[`a${rank}`];
    }
  }

  const rights = { e1: "KQ", h1: "K", a1: "Q", e8: "kq", h8: "k", a8: "q" };
  for (const square of [from, to]) {
    for (const right of rights[square] ?? "") state.castling = state.castling.replace(right, "");
  }
  state.ep = piece.toUpperCase() === "P" && Math.abs(Number(from[1]) - Number(to[1])) === 2
    ? `${from[0]}${(Number(from[1]) + Number(to[1])) / 2}`
    : "-";
  state.halfmove = piece.toUpperCase() === "P" || captured ? 0 : state.halfmove + 1;
  if (state.turn === "b") state.fullmove += 1;
  state.turn = state.turn === "w" ? "b" : "w";
}

function fenFor(moves) {
  const state = initialState();
  for (const move of moves) play(state, move);
  const placement = [];
  for (let rank = 8; rank >= 1; rank -= 1) {
    let row = "";
    let empty = 0;
    for (const file of "abcdefgh") {
      const piece = state.board[`${file}${rank}`];
      if (piece) {
        if (empty) row += empty;
        row += piece;
        empty = 0;
      } else empty += 1;
    }
    if (empty) row += empty;
    placement.push(row);
  }
  return `${placement.join("/")} ${state.turn} ${state.castling || "-"} ${state.ep} ${state.halfmove} ${state.fullmove}`;
}

function commonRow({ id, kind, title, chapter, moves, objective, level, whitePlan, blackPlan, continuation, reference }) {
  return {
    codigo: id,
    tipo: kind,
    titulo: title,
    "capítulo": chapter,
    secuencia: moves.join(" "),
    FEN: fenFor(moves),
    bando_que_mueve: moves.length % 2 ? "negras" : "blancas",
    objetivo: objective,
    nivel: level,
    comentario_blancas: whitePlan,
    comentario_negras: blackPlan,
    continuidad_didactica: continuation,
    referencia_en_manual: reference,
  };
}

const positionRows = basePositions.map((source) => ({
  codigo: source.Código,
  tipo: "posición",
  titulo: source.Nombre,
  "capítulo": "Ampliación A",
  secuencia: source["Secuencia UCI"],
  FEN: source.FEN,
  bando_que_mueve: source.FEN.split(/\s+/)[1] === "b" ? "negras" : "blancas",
  objetivo: "Reconocer la evolución de la Apertura Italiana y elegir el siguiente paso lógico.",
  nivel: "800–1400",
  comentario_blancas: "Aplicar desarrollo, seguridad del rey, ruptura central y mejora de la peor pieza según la estructura.",
  comentario_negras: "Buscar presión sobre e4 y la ruptura liberadora ...d5 sin descuidar el desarrollo.",
  continuidad_didactica: `Reproducir la secuencia, explicar el plan de ambos bandos y continuar sin memorizar desde ${source.Código}.`,
  referencia_en_manual: `Ficha ${source.Código}`,
}));

const structureSpecs = [
  ["ITA-S01", "Centro abierto", "ITA-P07", "Torres y alfiles ganan actividad en columnas y diagonales abiertas.", "Desarrollar Cc3, activar torres y aprovechar las líneas.", "Completar desarrollo y disputar las columnas antes de quedar restringido."],
  ["ITA-S02", "Centro con tensión", "ITA-P06", "Decidir cuándo mantener o resolver la tensión central.", "Conservar opciones y calcular dxe5 o e5 solo con beneficio concreto.", "Preparar ...exd4 o ...d5 según la colocación de las piezas."],
  ["ITA-S03", "Centro cerrado", "ITA-P09", "Comprender las maniobras previas a la ruptura d4.", "Jugar Te1, Cbd2-f1-g3 y preparar d4.", "Preparar ...d5 y generar contrajuego antes del ataque blanco."],
  ["ITA-S04", "Cadena c3-d4-e4", "ITA-P06", "Reconocer la base d4 y sostener el espacio central.", "Desarrollar Cc3 y utilizar el espacio para activar las piezas.", "Presionar d4 mediante ...Cc6, ...Ag4 y ...Te8."],
  ["ITA-S05", "Peón aislado en d4", "ITA-P07", "Compensar la debilidad estática con actividad.", "Buscar e5, columnas abiertas y ataque antes de simplificar.", "Bloquear d4 y cambiar las piezas activas blancas."],
  ["ITA-S06", "Mayoría central", "ITA-P12", "Transformar la mayoría de peones en un peón pasado.", "Activar el rey y avanzar de forma coordinada.", "Bloquear la mayoría y crear contrajuego en el otro flanco."],
];

const structureRows = structureSpecs.map(([id, title, positionId, objective, whitePlan, blackPlan]) => {
  const source = positionsById[positionId];
  return {
    ...commonRow({
      id, kind: "estructura", title, chapter: "Ampliación B · Estructuras de peones",
      moves: source["Secuencia UCI"].split(/\s+/), objective, level: "intermedio",
      whitePlan, blackPlan,
      continuation: "Identificar la estructura, la peor pieza y la ruptura de cada bando antes de elegir una jugada.",
      reference: `${id} · Ampliación B`,
    }),
    FEN: source.FEN,
    bando_que_mueve: source.FEN.split(/\s+/)[1] === "b" ? "negras" : "blancas",
  };
});

const stopRows = games.flatMap((game) =>
  game.stops.map(([ply, title, objective, answer], index) =>
    commonRow({
      id: `${game.id}-P${index + 1}`,
      kind: "parada_modelo",
      title: `${game.title} · ${title}`,
      chapter: "Ampliación C · Tres partidas modelo desarrolladas",
      moves: game.moves.slice(0, ply),
      objective,
      level: "intermedio",
      whitePlan: answer,
      blackPlan: "Identificar el recurso más activo del rival y explicar cómo cambia la estructura o la coordinación.",
      continuation: "Continuar la partida únicamente después de verbalizar el plan de ambos bandos.",
      reference: `${game.id} · ${title}`,
    }),
  ),
);

const basicQuestions = [
  ["Tras 1.e4 e5 2.Cf3 Cc6 3.Ac4 Ac5, elige el plan más sano.", "4.O-O: asegura el rey y activa la torre.", "ITA-P03"],
  ["Has enrocado y jugado c3. ¿Qué ruptura temática debes considerar?", "d4, después de comprobar las capturas.", "ITA-P05"],
  ["El negro prepara ...d5. ¿Qué debes hacer primero?", "Calcular sus consecuencias y la nueva estructura.", "ITA-P10"],
  ["En un centro cerrado, ¿qué pieza suele mejorar mediante una maniobra?", "El caballo, mediante Cbd2-f1-g3.", "ITA-P09"],
  ["Tienes un peón aislado en d4 y muchas piezas. ¿Qué priorizas?", "Actividad; el peón aislado necesita dinamismo.", "ITA-S05"],
  ["El alfil de c4 es atacado por ...Ca5. ¿Qué preguntas haces?", "Dónde conservarlo y qué gana el negro con el ataque.", "ITA-P03"],
  ["El rival amenaza e4 con ...Cf6. ¿Siempre debes defender?", "No; primero hay que calcular las respuestas activas.", "ITA-P04"],
  ["Antes de sacrificar en f7, ¿qué revisas?", "Atacantes, defensores y continuación forzada.", "ITA-P03"],
  ["Con el centro abierto, ¿qué piezas ganan valor?", "Torres y alfiles.", "ITA-S01"],
  ["En un final sin damas, ¿qué pieza debe activarse?", "El rey.", "ITA-S06"],
  ["¿Qué es la peor pieza?", "La pieza menos activa o con menor función.", "ITA-P08"],
  ["Si dos jugadas son buenas, ¿cuál elegir?", "La más comprensible, segura y coherente con el plan.", "ITA-P08"],
  ["¿Cuándo está completa la apertura?", "Cuando el rey está seguro, las piezas están desarrolladas y las torres pueden coordinarse.", "ITA-P12"],
  ["En un centro tenso, ¿debes capturar automáticamente?", "No; mantener la tensión puede conservar opciones.", "ITA-S02"],
  ["Final de torres con peón pasado: ¿dónde debe colocarse la torre?", "Detrás del peón pasado.", "ITA-S06"],
];

const advancedQuestions = [
  ["Tras 1.e4 e5 2.Cf3 Cc6 3.Ac4 Ac5, ¿cuál es la prioridad blanca?", "Enrocar y continuar el desarrollo.", "ITA-P03", "Reconocer"],
  ["En la estructura c3-d4-e4, ¿cuál es la base de la cadena?", "El peón d4.", "ITA-S04", "Reconocer"],
  ["En un centro abierto, ¿qué piezas suelen mejorar más?", "Torres y alfiles.", "ITA-S01", "Reconocer"],
  ["En un centro cerrado, ¿qué pieza blanca suele seguir la ruta d2-f1-g3?", "El caballo de b1.", "ITA-P09", "Reconocer"],
  ["¿Cuál es la ruptura liberadora principal de las negras en la Italiana?", "...d5.", "ITA-P10", "Reconocer"],
  ["Has enrocado y jugado c3. El negro también ha enrocado. ¿Qué jugada temática debes considerar?", "d4, después de comprobar capturas y tácticas.", "ITA-P05", "Decidir"],
  ["Tu caballo de b1 sigue sin desarrollar y el centro acaba de abrirse. ¿Qué jugada natural mejora tu posición?", "Cc3.", "ITA-P07", "Decidir"],
  ["El negro amenaza ...d5 en una posición cerrada. ¿Debes ignorarlo para atacar?", "No; hay que calcular ...d5 y decidir cómo tratar el centro.", "ITA-P10", "Decidir"],
  ["Tienes un peón aislado en d4 y piezas activas. ¿Conviene cambiar todas las piezas?", "No normalmente; necesitas actividad como compensación.", "ITA-S05", "Decidir"],
  ["El alfil de c4 es atacado por ...Ca5. ¿Cuál es la pregunta correcta?", "Dónde conservarlo y qué gana el negro con el ataque.", "ITA-P03", "Decidir"],
  ["Desde ITA-P07, propón un plan de tres jugadas.", "Cc3, Ae3 y Te1, ajustando el orden.", "ITA-P07", "Continuar"],
  ["Desde ITA-P09, propón la maniobra principal del caballo de b1.", "Cbd2-f1-g3.", "ITA-P09", "Continuar"],
  ["Tras abrirse la columna e y quedar el rey negro en e8, ¿qué pieza blanca debe ocuparla?", "La torre, normalmente con Te1.", "ITA-P08", "Continuar"],
  ["Después de que desaparezcan las damas, ¿qué cambio de plan es habitual?", "Activar el rey y valorar la estructura de peones.", "ITA-P12", "Continuar"],
  ["Desde ITA-P10, ¿qué debes comprobar cada turno?", "La amenaza rival, ...d5, la peor pieza y si el plan sigue siendo válido.", "ITA-P10", "Continuar"],
  ["¿Por qué 4.O-O es más formativo que 4.Dh5?!", "Mejora seguridad y coordinación sin crear una amenaza fácil de neutralizar.", "ITA-P03", "Explicar"],
  ["¿Por qué c3 no debe considerarse una jugada lenta?", "Prepara d4, controla d4 y sostiene un centro más fuerte.", "ITA-P05", "Explicar"],
  ["¿Por qué el plan debe cambiar después de ...d5?", "Cambia la estructura, se abren líneas y aparecen nuevas amenazas.", "ITA-P11", "Explicar"],
  ["¿Qué significa mejorar la peor pieza?", "Encontrar la pieza menos activa y darle una función útil.", "ITA-P08", "Explicar"],
  ["¿Cuándo termina realmente la apertura?", "Cuando el rey está seguro, las piezas están desarrolladas y las torres pueden coordinarse.", "ITA-P12", "Explicar"],
  ["Reproduce ITA-M01 hasta 7...Ab6 y continúa cinco jugadas.", "Comparar después el desarrollo con Cc3, Ae3 y Te1.", "ITA-M01-P3", "Tablero virtual"],
  ["Carga ITA-P09 y juega diez jugadas con blancas.", "Intentar Cbd2-f1-g3 y preparar d4.", "ITA-P09", "Tablero virtual"],
  ["Carga ITA-P07 y juega la posición desde ambos colores.", "Con blancas buscar desarrollo; con negras presión central y ...d5.", "ITA-P07", "Tablero virtual"],
  ["Compara ITA-M02 después de 4.Dh5?! y una posición con 4.O-O.", "Comparar desarrollo, seguridad y facilidad del plan.", "ITA-M02-P1", "Tablero virtual"],
  ["Analiza una partida propia de Italiana con la ficha del anexo.", "Identificar la primera posición reconocible y dónde se desvió el plan.", "ITA-P12", "Revisión global"],
];

function sourceForReference(reference) {
  if (reference.startsWith("ITA-M")) {
    const match = reference.match(/ITA-M(\d\d)-P(\d)/);
    const game = games[Number(match[1]) - 1];
    const stop = game.stops[Number(match[2]) - 1];
    return { moves: game.moves.slice(0, stop[0]), fen: fenFor(game.moves.slice(0, stop[0])) };
  }
  const positionReference = reference.startsWith("ITA-S")
    ? structureSpecs.find(([id]) => id === reference)?.[2]
    : reference;
  const source = positionsById[positionReference] ?? positionsById["ITA-P03"];
  return { moves: source["Secuencia UCI"].split(/\s+/), fen: source.FEN };
}

const exerciseSpecs = [
  ...basicQuestions.map(([question, answer, reference]) => [question, answer, reference, "Básico"]),
  ...advancedQuestions,
];

const exerciseRows = exerciseSpecs.map(([question, answer, reference, level], index) => {
  const id = `ITA-E${String(index + 1).padStart(2, "0")}`;
  const source = sourceForReference(reference);
  return {
    ...commonRow({
      id, kind: "ejercicio", title: `Ejercicio ${index + 1}`,
      chapter: index < 15 ? "Parte XIII" : "Ampliación D",
      moves: source.moves, objective: question, level,
      whitePlan: answer,
      blackPlan: "Comparar al menos dos candidatas y anticipar la respuesta más activa del rival.",
      continuation: `Resolver sin mover, justificar la elección y revisar ${reference}.`,
      reference: `${id} · ${index < 15 ? "Parte XIII" : "Ampliación D"}`,
    }),
    FEN: source.fen,
    bando_que_mueve: source.fen.split(/\s+/)[1] === "b" ? "negras" : "blancas",
  };
});

const rows = [...positionRows, ...structureRows, ...stopRows, ...exerciseRows];
const headers = ["codigo","tipo","titulo","capítulo","secuencia","FEN","bando_que_mueve","objetivo","nivel","comentario_blancas","comentario_negras","continuidad_didactica","referencia_en_manual"];

function csvCell(value) {
  const text = String(value ?? "");
  return /[;"\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

const output = [
  headers.join(";"),
  ...rows.map((row) => headers.map((header) => csvCell(row[header])).join(";")),
].join("\n");

const destination = path.join(sourceDir, "posiciones_ITA_completo.csv");
fs.writeFileSync(destination, `${output}\n`, "utf8");
console.log(`Generado ${path.relative(root, destination)} con ${rows.length} registros.`);

