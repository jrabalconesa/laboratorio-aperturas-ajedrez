import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { Chess } from "chess.js";
import { openings } from "./openings.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const checkOnly = process.argv.includes("--check");

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
  const cleaned = (record.objective || "Decisión crítica")
    .replace(/^¿/, "")
    .replace(/\?$/, "");
  const compact = cleaned.length > 78 ? `${cleaned.slice(0, 75).trim()}…` : cleaned;
  return `${label} · ${compact}`;
}

function embeddedExerciseQuestion(value = "") {
  const slashPrompt = value.match(/\/\s*((?:Juegan|Mueven|Tras)\s+.+?)\s*\/\s*Pista\s*:/i)?.[1];
  if (slashPrompt) return slashPrompt.trim();
  const fenPrompt = value.match(/\s·\s*((?:Juegan|Mueven|Reconoce|Reproduce|Compara).+)$/i)?.[1];
  return fenPrompt?.trim() ?? "";
}

function embeddedExerciseGuidance(value = "") {
  return value.match(/\|\s*Recomendación\s*:\s*(.+?)(?:\s*\/\s*Error típico\s*:|$)/i)?.[1]?.trim()
    ?? value.match(/\/\s*Pista\s*:\s*(.+?)(?:\s*\/|\s*\||$)/i)?.[1]?.trim()
    ?? "";
}

function isGenericExerciseTitle(value = "") {
  return /^(?:Ejercicio\s+\d+|Pregunta|Misma FEN|Decidir|[A-Z]{3}-P\d+)$/i.test(value.trim());
}

function hasMeaningfulObjective(value = "") {
  const text = value.trim();
  return text.length > 18 && !/^Reconocer la decisión crítica/i.test(text);
}

function refineRecord(record) {
  if (editorialObjectives[record.id]) record.objective = editorialObjectives[record.id];
  const embeddedQuestion = [
    record.title,
    record.objective,
    record.whitePlan,
    record.blackPlan,
    record.teachingContinuation,
  ].map(embeddedExerciseQuestion).find(Boolean);
  const embeddedGuidance = [record.title, record.teachingContinuation]
    .map(embeddedExerciseGuidance)
    .find(Boolean);
  if (record.kind === "exercise" && embeddedQuestion) {
    record.objective = embeddedQuestion;
    if (embeddedGuidance) record.teachingContinuation = embeddedGuidance;
    record.title = descriptiveExerciseTitle(record);
  } else if (record.kind === "exercise" && isGenericExerciseTitle(record.title) && hasMeaningfulObjective(record.objective)) {
    record.title = descriptiveExerciseTitle(record);
  }
  return record;
}
const kindMap = new Map([
  ["posición", "position"],
  ["ficha", "position"],
  ["ficha_posicion", "position"],
  ["estructura", "structure"],
  ["partida_modelo", "game_stop"],
  ["parada_modelo", "game_stop"],
  ["parada", "game_stop"],
  ["parada_partida", "game_stop"],
  ["ejercicio", "exercise"],
  ["final", "supplemental_position"],
  ["final_derivado", "supplemental_position"],
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
  const label = value ?? "";
  const rating = label.match(/(\d+)\s*[–-]\s*(\d+)/);
  return {
    label,
    minRating: rating ? Number(rating[1]) : null,
    maxRating: rating ? Number(rating[2]) : null,
    stage: rating ? null : label.toLocaleLowerCase("es"),
  };
}

function parseMoveSequence(value = "") {
  const source = value.trim();
  if (!source) return { movesUci: [], sequenceIssue: null };
  if (/^Derivado\s+de\s+/i.test(source)) return { movesUci: [], sequenceIssue: null };
  const tokens = source.split(/\s+/).filter(Boolean);
  if (tokens.every((token) => /^[a-h][1-8][a-h][1-8][qrbn]?$/.test(token))) {
    return { movesUci: tokens, sequenceIssue: null };
  }

  const chess = new Chess();
  const movesUci = [];
  try {
    for (const rawToken of tokens) {
      let token = rawToken
        .replace(/^(?:\.\.\.)?\d+\.(?:\.\.)?/, "")
        .replace(/[!?]+$/g, "");
      if (!token || token === "..." || /^(?:\*|1-0|0-1|1\/2-1\/2)$/.test(token)) continue;
      const localized = token
        .replace(/^R(?=[a-h1-8xO])/u, "K")
        .replace(/^D(?=[a-h1-8x])/u, "Q")
        .replace(/^T(?=[a-h1-8x])/u, "R")
        .replace(/^A(?=[a-h1-8x])/u, "B")
        .replace(/^C(?=[a-h1-8x])/u, "N");
      let move = null;
      for (const candidate of [...new Set([token, localized])]) {
        try {
          move = chess.move(candidate, { strict: false });
          if (move) break;
        } catch {}
      }
      if (!move) throw new Error(`jugada no reconocida: ${rawToken}`);
      movesUci.push(`${move.from}${move.to}${move.promotion ?? ""}`);
    }
    return { movesUci, sequenceIssue: null };
  } catch (error) {
    return { movesUci: [], sequenceIssue: error.message };
  }
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

  const correctedRarSequences = new Set([
    "RAR-M03-P4", "RAR-M03-P5", "RAR-E37", "RAR-E38", "RAR-E39", "RAR-E40",
  ]);
  const sourceSequence = opening.code === "RAR" && correctedRarSequences.has(row.codigo)
    ? (row.secuencia ?? "")
      .replaceAll("c6d5", "f6d5")
      .replaceAll("f4f5 f6e7", "f4f5 c6e7")
    : opening.code === "SCA"
      ? (row.secuencia ?? "").replaceAll("19.Tb1", "19.Rb1")
      : row.secuencia ?? "";
  const sourceFen = opening.code === "RAR" && ["RAR-M03-P4", "RAR-E37"].includes(row.codigo)
    ? row.FEN.replace("/5np1/", "/2n3p1/")
    : row.FEN;
  const sequence = parseMoveSequence(sourceSequence);

  const record = {
    id: row.codigo,
    kind: kindMap.get((row.tipo ?? "").toLocaleLowerCase("es")) ?? row.tipo,
    title: row.titulo,
    chapter: row["capítulo"] ?? row.capitulo ?? "",
    movesUci: sequence.movesUci,
    fen: sourceFen,
    sideToMove: fenSide(sourceFen),
    objective: row.objetivo,
    level: normalizeLevel(row.nivel),
    whitePlan: row.comentario_blancas,
    blackPlan: row.comentario_negras,
    teachingContinuation: row.continuidad_didactica,
    manualReference: row.referencia_en_manual,
    tags: [],
    openingId: opening.id,
  };
  if (sequence.sequenceIssue) record.sequenceIssue = sequence.sequenceIssue;
  return record;
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

function comparableFen(fen) {
  return fen.split(" ").slice(0, 3).join(" ");
}

function trimSequenceToFen(record) {
  if (!record.movesUci.length) return false;
  const target = comparableFen(record.fen);
  const chess = new Chess();
  for (const [index, uci] of record.movesUci.entries()) {
    try {
      chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] });
    } catch {
      return false;
    }
    if (comparableFen(chess.fen()) === target) {
      if (index < record.movesUci.length - 1) record.movesUci = record.movesUci.slice(0, index + 1);
      return true;
    }
  }
  return false;
}

function editorialWarnings(records) {
  const warnings = [];
  const placeholderTitles = records.filter((record) =>
    record.kind === "exercise" && isGenericExerciseTitle(record.title),
  );
  const genericCopy = records.filter((record) =>
    [record.objective, record.whitePlan, record.blackPlan, record.teachingContinuation].some((value) =>
      /^(?:Reconocer la decisión crítica|Consulta la lectura bilateral|Consulta la respuesta activa|Reproducir la posición, elegir dos candidatas)/i.test((value || "").trim()),
    ),
  );
  if (placeholderTitles.length) {
    warnings.push(`Revisión editorial pendiente en ${placeholderTitles.length} títulos de ejercicios`);
  }
  if (genericCopy.length) {
    warnings.push(`Texto editorial provisional en ${genericCopy.length} registros`);
  }
  return warnings;
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
    if (record.sequenceIssue) warnings.push(`${record.id}: ${record.sequenceIssue}`);
    if (fenSide(record.fen) !== record.sideToMove) {
      errors.push(`El bando que mueve no coincide con la FEN: ${record.id}`);
    }
    if (record.movesUci.length) {
      try {
        trimSequenceToFen(record);
        const replayed = replayRecord(record);
        if (comparableFen(replayed) !== comparableFen(record.fen)) {
          warnings.push(`La secuencia no reproduce exactamente la FEN: ${record.id}`);
        }
      } catch (error) {
        warnings.push(error.message);
      }
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
      chess.loadPgn(opening.pgnLocalized ? translateLocalizedPgn(game.pgn) : game.pgn);
    } catch (error) {
      errors.push(`${game.id}: PGN ilegal (${error.message.split("\n")[0]})`);
    }
  }

  warnings.push(...editorialWarnings(records));

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
  const supplementalPositions = records.filter((record) => record.kind === "supplemental_position");
  const atlas = [...expansion.atlas, ...supplementalPositions];
  const validation = validate(opening, records, games);
  failureCount += validation.errors.length;
  const inventoryComplete = validation.counts.position === 12
    && validation.counts.structure === 6
    && validation.counts.game_stop === 15
    && validation.counts.exercise === 40;

  const metadata = {
    id: opening.id,
    code: opening.code,
    manualNumber: opening.manualNumber,
    title: opening.title,
    shortTitle: opening.shortTitle,
    version: opening.version,
    accent: opening.accent,
    boardDark: opening.boardDark,
    preview: opening.preview,
    quote: opening.quote,
    storageNamespace: `repertorio:${opening.id}:v1`,
    interactiveAvailable: true,
    status: validation.errors.length
      ? "invalid"
      : inventoryComplete && validation.warnings.length === 0
        ? "available"
        : "partial",
    inventory: validation.counts,
    gameCount: validation.gameCount + expansion.games.length,
    coreGameCount: validation.gameCount,
    expansionGameCount: expansion.games.length,
    atlasCount: atlas.length,
    validationWarnings: validation.warnings.length,
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
    writeJson(path.join(base, "atlas.json"), atlas);
    if (supplementalPositions.length) {
      writeJson(path.join(base, "supplemental-positions.json"), supplementalPositions);
    }
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
