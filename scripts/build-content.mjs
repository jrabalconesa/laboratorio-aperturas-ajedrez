import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { Chess } from "chess.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");

const openings = [
  {
    id: "italiana",
    code: "ITA",
    manualNumber: 1,
    title: "Apertura Italiana",
    shortTitle: "La Italiana",
    version: "2",
    accent: "#008C45",
    preview: {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      line: "1.e4 e5 2.Cf3 Cc6 3.Ac4",
      lastMove: ["f1", "c4"],
    },
    quote: { text: "Ayuda a tus piezas para que ellas puedan ayudarte.", author: "Paul Morphy", years: "1837–1884", nationality: "USA" },
    sourceDir: "italiana",
    csv: "posiciones_ITA_completo.csv",
    pgn: "partidas_modelo_ITA.pgn",
    expectedComplete: true,
  },
  {
    id: "espanola",
    code: "ESP",
    manualNumber: 2,
    title: "Apertura Española o Ruy López",
    shortTitle: "La Española",
    version: "2.3",
    accent: "#AA151B",
    preview: {
      fen: "r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R b KQkq - 3 3",
      line: "1.e4 e5 2.Cf3 Cc6 3.Ab5",
      lastMove: ["f1", "b5"],
    },
    quote: { text: "No creo en la psicología. Creo en las buenas jugadas.", author: "Bobby Fischer", years: "1943–2008", nationality: "USA" },
    sourceDir: "espanola",
    csv: "posiciones_ESP_v2.3.csv",
    pgn: "partidas_modelo_ESP_v2.3.pgn",
    expectedComplete: true,
  },
  {
    id: "escocesa",
    code: "ESC",
    manualNumber: 3,
    title: "Apertura Escocesa",
    shortTitle: "La Escocesa",
    version: "1.4",
    accent: "#0065BD",
    preview: {
      fen: "r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R b KQkq d3 0 3",
      line: "1.e4 e5 2.Cf3 Cc6 3.d4",
      lastMove: ["d2", "d4"],
    },
    quote: { text: "El ajedrez es la vida en miniatura. El ajedrez es lucha, el ajedrez es batalla.", author: "Garry Kasparov", years: "1963–", nationality: "RUS" },
    sourceDir: "escocesa",
    csv: "posiciones_ESC.csv",
    pgn: "partidas_modelo_ESC.pgn",
    expectedComplete: true,
  },
];

const editorialObjectives = {
  "ESP-P01": "Comprender cómo 1.e4 ocupa el centro y por qué Cf3 es el desarrollo más activo.",
  "ESP-P02": "Explicar cómo Ab5 aumenta la presión sobre e5 sin ganar todavía el peón.",
  "ESP-P03": "Reconocer la posición base española y la tensión entre Ab5, Cc6 y e5.",
  "ESP-P04": "Priorizar el enroque y conservar el alfil antes de abrir el centro.",
  "ESP-P05": "Comprender cómo Te1 refuerza e4 y prepara una futura ruptura d4.",
  "ESP-P06": "Valorar el espacio negro del flanco de dama y la utilidad del alfil en b3.",
  "ESP-P07": "Explicar por qué c3 es una jugada de infraestructura para preparar d4.",
  "ESP-P08": "Reconocer una jugada profiláctica útil y distinguirla de una pérdida de tiempo.",
  "ESP-P09": "Calcular la ruptura d4 y anticipar cómo cambia la estructura central.",
  "ESP-P10": "Desarrollar el caballo por d2 sin bloquear el peón c ni abandonar e4.",
  "ESP-P11": "Decidir si conviene cerrar el centro con d5 o mantener la tensión.",
  "ESP-P12": "Formular un plan de medio juego después de completar la maniobra Cf1-g3.",
  "ESP-S01": "Coordinar torres y alfiles cuando el centro se abre y cada tiempo cuenta.",
  "ESP-S02": "Mantener o resolver la tensión central según la actividad de las piezas.",
  "ESP-S03": "Maniobrar en un centro cerrado sin permitir el contrajuego liberador rival.",
  "ESP-S04": "Convertir la mayoría 4 contra 3 sin entregar la actividad de los alfiles negros.",
  "ESP-S05": "Sostener la cadena e4-d5 y reconocer qué ruptura ataca su base.",
  "ESP-S06": "Compensar el peón aislado en d4 con actividad antes de simplificar.",
};

function descriptiveExerciseTitle(record) {
  const label = record.level?.label || "Ejercicio";
  const cleaned = record.objective.replace(/^¿/, "").replace(/\?$/, "");
  const compact = cleaned.length > 78 ? `${cleaned.slice(0, 75).trim()}…` : cleaned;
  return `${label} · ${compact}`;
}

function refineRecord(record) {
  if (editorialObjectives[record.id]) record.objective = editorialObjectives[record.id];
  if (record.kind === "exercise" && /^Ejercicio \d+$/.test(record.title)) {
    record.title = descriptiveExerciseTitle(record);
  }
  return record;
}
const kindMap = new Map([
  ["posición", "position"],
  ["ficha_posicion", "position"],
  ["estructura", "structure"],
  ["partida_modelo", "game_stop"],
  ["parada_modelo", "game_stop"],
  ["ejercicio", "exercise"],
]);

function detectDelimiter(text) {
  const header = text.replace(/^\uFEFF/, "").split(/\r?\n/, 1)[0];
  return countUnquoted(header, ";") >= countUnquoted(header, ",") ? ";" : ",";
}

function countUnquoted(text, target) {
  let quoted = false;
  let count = 0;
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '"') {
      if (quoted && text[index + 1] === '"') index += 1;
      else quoted = !quoted;
    } else if (!quoted && text[index] === target) {
      count += 1;
    }
  }
  return count;
}

function parseCsv(text) {
  const delimiter = detectDelimiter(text);
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  const input = text.replace(/^\uFEFF/, "");

  for (let index = 0; index < input.length; index += 1) {
    const character = input[index];
    if (character === '"') {
      if (quoted && input[index + 1] === '"') {
        cell += '"';
        index += 1;
      } else {
        quoted = !quoted;
      }
    } else if (character === delimiter && !quoted) {
      row.push(cell);
      cell = "";
    } else if ((character === "\n" || character === "\r") && !quoted) {
      if (character === "\r" && input[index + 1] === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value !== "")) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += character;
    }
  }
  if (cell !== "" || row.length) {
    row.push(cell);
    rows.push(row);
  }

  const [headers, ...data] = rows;
  return data.map((values) =>
    Object.fromEntries(headers.map((header, index) => [header.trim(), values[index]?.trim() ?? ""])),
  );
}

function normalizeLevel(value) {
  const rating = value.match(/(\d+)\s*[–-]\s*(\d+)/);
  return {
    label: value,
    minRating: rating ? Number(rating[1]) : null,
    maxRating: rating ? Number(rating[2]) : null,
    stage: rating ? null : value.toLocaleLowerCase("es"),
  };
}

function normalizeRow(row, opening) {
  if (row.Código) {
    return {
      id: row.Código,
      kind: "position",
      title: row.Nombre,
      chapter: "Ampliación A",
      movesUci: row["Secuencia UCI"].split(/\s+/).filter(Boolean),
      fen: row.FEN,
      sideToMove: fenSide(row.FEN),
      objective: "",
      level: normalizeLevel(""),
      whitePlan: "",
      blackPlan: "",
      teachingContinuation: "",
      manualReference: row.Código,
      tags: [],
      openingId: opening.id,
    };
  }

  return {
    id: row.codigo,
    kind: kindMap.get(row.tipo) ?? row.tipo,
    title: row.titulo,
    chapter: row["capítulo"] ?? row.capitulo ?? "",
    movesUci: row.secuencia.split(/\s+/).filter(Boolean),
    fen: row.FEN,
    sideToMove: row.bando_que_mueve === "blancas" ? "white" : "black",
    objective: row.objetivo,
    level: normalizeLevel(row.nivel),
    whitePlan: row.comentario_blancas,
    blackPlan: row.comentario_negras,
    teachingContinuation: row.continuidad_didactica,
    manualReference: row.referencia_en_manual,
    tags: [],
    openingId: opening.id,
  };
}

function fenSide(fen) {
  return fen.split(/\s+/)[1] === "b" ? "black" : "white";
}

function parsePgnGames(text, opening) {
  const starts = [...text.matchAll(/^\[Event\s/mg)].map((match) => match.index);
  return starts.map((start, index) => {
    const block = text.slice(start, starts[index + 1] ?? text.length).trim();
    const headers = Object.fromEntries(
      [...block.matchAll(/^\[([A-Za-z0-9_]+)\s+"([^"]*)"\]$/gm)].map((match) => [
        match[1],
        match[2],
      ]),
    );
    return {
      id: `${opening.code}-M${String(index + 1).padStart(2, "0")}`,
      title: headers.Event || `Partida modelo ${index + 1}`,
      headers,
      commentCount: [...block.matchAll(/\{[^}]*\}/gs)].length,
      pgn: block,
    };
  });
}

function translateLocalizedPgn(pgn) {
  const comments = [];
  const protectedPgn = pgn.replace(/\{[^}]*\}/gs, (comment) => {
    const token = `__PGN_COMMENT_${comments.length}__`;
    comments.push(comment);
    return token;
  });
  const translated = protectedPgn
    .replace(/\bR(?=[a-h1-8x])/g, "K")
    .replace(/\bC(?=[a-h1-8x])/g, "N")
    .replace(/\bA(?=[a-h1-8x])/g, "B")
    .replace(/\bT(?=[a-h1-8x])/g, "R")
    .replace(/\bD(?=[a-h1-8x])/g, "Q");
  return translated.replace(/__PGN_COMMENT_(\d+)__/g, (_, index) => comments[Number(index)]);
}

function replayRecord(record) {
  const chess = new Chess();
  for (const [index, uci] of record.movesUci.entries()) {
    try {
      chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] });
    } catch {
      throw new Error(`${record.id}: jugada ilegal ${uci} en ply ${index + 1}`);
    }
  }
  return chess.fen();
}
function validate(opening, records, games) {
  const errors = [];
  const warnings = [];
  const seen = new Set();

  for (const record of records) {
    if (!record.id.startsWith(`${opening.code}-`)) {
      errors.push(`Identificador con prefijo incorrecto: ${record.id}`);
    }
    if (seen.has(record.id)) errors.push(`Identificador duplicado: ${record.id}`);
    seen.add(record.id);
    if (!/^([prnbqkPRNBQK1-8]+\/){7}[prnbqkPRNBQK1-8]+\s[wb]\s/.test(record.fen)) {
      errors.push(`FEN con formato no reconocido: ${record.id}`);
    }
    if (!record.movesUci.every((move) => /^[a-h][1-8][a-h][1-8][qrbn]?$/.test(move))) {
      errors.push(`Secuencia UCI con formato no reconocido: ${record.id}`);
    }
    if (fenSide(record.fen) !== record.sideToMove) {
      errors.push(`El bando que mueve no coincide con la FEN: ${record.id}`);
    }
    try {
      const replayed = replayRecord(record).split(" ");
      const expected = record.fen.split(" ");
      if (replayed.slice(0, 3).join(" ") !== expected.slice(0, 3).join(" ")) {
        errors.push(`La secuencia no reproduce la posición o los enroques de la FEN: ${record.id}`);
      }
    } catch (error) {
      errors.push(error.message);
    }
  }

  const counts = Object.fromEntries(
    ["position", "structure", "game_stop", "exercise"].map((kind) => [
      kind,
      records.filter((record) => record.kind === kind).length,
    ]),
  );
  const expected = { position: 12, structure: 6, game_stop: 15, exercise: 40 };
  for (const [kind, count] of Object.entries(expected)) {
    if (counts[kind] !== count) {
      const message = `${kind}: ${counts[kind]} de ${count}`;
      if (opening.expectedComplete) errors.push(message);
      else warnings.push(message);
    }
  }
  if (games.length !== 3) errors.push(`Partidas PGN: ${games.length} de 3`);
  for (const game of games) {
    const chess = new Chess();
    try {
      chess.loadPgn(opening.id === "espanola" ? translateLocalizedPgn(game.pgn) : game.pgn);
    } catch (error) {
      errors.push(`${game.id}: PGN ilegal (${error.message.split("\n")[0]})`);
    }
  }

  return { errors, warnings, counts, gameCount: games.length };
}

function writeJson(relativePath, data) {
  const destination = path.join(root, relativePath);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, `${JSON.stringify(data, null, 2)}\n`, "utf8");
}

const catalog = [];
let failureCount = 0;

for (const opening of openings) {
  const source = path.join(root, "sources", opening.sourceDir);
  const csvText = fs.readFileSync(path.join(source, opening.csv), "utf8");
  const pgnText = fs.readFileSync(path.join(source, opening.pgn), "utf8").replace(/^\uFEFF/, "");
  const records = parseCsv(csvText).map((row) => refineRecord(normalizeRow(row, opening)));
  const games = parsePgnGames(pgnText, opening);
  const expansionPath = path.join(source, "ampliacion_partidas.json");
  const expansion = fs.existsSync(expansionPath)
    ? JSON.parse(fs.readFileSync(expansionPath, "utf8"))
    : { games: [], atlas: [] };
  const validation = validate(opening, records, games);
  failureCount += validation.errors.length;

  const metadata = {
    id: opening.id,
    code: opening.code,
    manualNumber: opening.manualNumber,
    title: opening.title,
    shortTitle: opening.shortTitle,
    version: opening.version,
    accent: opening.accent,
    preview: opening.preview,
    quote: opening.quote,
    storageNamespace: `repertorio:${opening.id}:v1`,
    interactiveAvailable: true,
    status: validation.errors.length ? "invalid" : validation.warnings.length ? "partial" : "available",
    inventory: validation.counts,
    gameCount: validation.gameCount + expansion.games.length,
    coreGameCount: validation.gameCount,
    expansionGameCount: expansion.games.length,
    atlasCount: expansion.atlas.length,
  };
  catalog.push(metadata);

  if (!checkOnly) {
    const base = path.join("content", opening.id);
    writeJson(path.join(base, "opening.json"), metadata);
    writeJson(path.join(base, "positions.json"), records.filter((record) => record.kind === "position"));
    writeJson(path.join(base, "structures.json"), records.filter((record) => record.kind === "structure"));
    writeJson(path.join(base, "game-stops.json"), records.filter((record) => record.kind === "game_stop"));
    writeJson(path.join(base, "exercises.json"), records.filter((record) => record.kind === "exercise"));
    writeJson(path.join(base, "games.json"), games);
    writeJson(path.join(base, "expansion-games.json"), expansion.games);
    writeJson(path.join(base, "atlas.json"), expansion.atlas);
  }

  console.log(
    `${opening.code}: ${metadata.status} · ${records.length} registros · ${metadata.gameCount} partidas (${metadata.coreGameCount} esenciales + ${metadata.expansionGameCount} ampliación)`,
  );
  for (const warning of validation.warnings) console.log(`  aviso: ${warning}`);
  for (const error of validation.errors) console.error(`  error: ${error}`);
}

if (!checkOnly) {
  writeJson(path.join("content", "catalog.json"), catalog);
  fs.writeFileSync(path.join(root, "content", "catalog.js"), `window.OPENING_CATALOG = ${JSON.stringify(catalog, null, 2)};\n`, "utf8");
}
if (failureCount) process.exitCode = 1;

