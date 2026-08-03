import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Chess } from "chess.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceLab = path.join(root, "openings", "italiana");
const sourceHtml = fs.readFileSync(path.join(sourceLab, "index.html"), "utf8");
const sourceEngine = fs.readFileSync(path.join(sourceLab, "app.js"), "utf8");
const engineTail = sourceEngine.slice(sourceEngine.indexOf("const state ="));

const configurations = {
  espanola: {
    adjective: "Española",
    article: "La Española",
    code: "ESP",
    accent: "#AA151B",
    focus: "#D14A4F",
    manual: 2,
    notation: "1.e4 e5 2.Cf3 Cc6 3.Ab5",
    identity: "La presión española",
    lead: "Domina la Apertura Española entendiendo la presión central, las maniobras y el momento de jugar d4.",
    baseIndex: 2,
  },
  escocesa: {
    adjective: "Escocesa",
    article: "La Escocesa",
    code: "ESC",
    accent: "#0065BD",
    focus: "#3F8DCA",
    manual: 3,
    notation: "1.e4 e5 2.Cf3 Cc6 3.d4",
    identity: "La ruptura escocesa",
    lead: "Domina la Apertura Escocesa entendiendo el centro abierto, el desarrollo con tiempo y la iniciativa.",
    baseIndex: 2,
  },
};

function splitIdeas(text = "") {
  return text.split(/(?<=[.!?])\s+/).filter(Boolean).slice(0, 3);
}

function parseCoreGame(game, localizedNotation) {
  const chess = new Chess();
  const pgn = localizedNotation
    ? game.pgn
      .replace(/\bR(?=[a-h1-8x])/g, "K")
      .replace(/\bC(?=[a-h1-8x])/g, "N")
      .replace(/\bA(?=[a-h1-8x])/g, "B")
      .replace(/\bT(?=[a-h1-8x])/g, "R")
      .replace(/\bD(?=[a-h1-8x])/g, "Q")
    : game.pgn;
  chess.loadPgn(pgn);
  const history = chess.history({ verbose: true });
  const commentsByFen = new Map(chess.getComments().map(({ fen, comment }) => [fen, comment]));
  return {
    code: game.id,
    title: game.title.replace(`${game.id} · `, "").replace("Mi Repertorio de Ajedrez - ", ""),
    subtitle: `${game.headers.White ?? "Blancas"} — ${game.headers.Black ?? "Negras"}`,
    moves: history.map((move) => `${move.from}${move.to}${move.promotion ?? ""}`),
    san: history.map((move) => move.san),
    comments: Object.fromEntries(history.map((move, index) => [index, commentsByFen.get(move.after)]).filter(([, comment]) => comment)),
  };
}

function buildData(id) {
  const directory = path.join(root, "content", id);
  const positions = JSON.parse(fs.readFileSync(path.join(directory, "positions.json"), "utf8"));
  const exercises = JSON.parse(fs.readFileSync(path.join(directory, "exercises.json"), "utf8"));
  const structures = JSON.parse(fs.readFileSync(path.join(directory, "structures.json"), "utf8"));
  const coreGames = JSON.parse(fs.readFileSync(path.join(directory, "games.json"), "utf8")).map((game) => parseCoreGame(game, id === "espanola"));
  const expansionGames = JSON.parse(fs.readFileSync(path.join(directory, "expansion-games.json"), "utf8")).map((game) => ({
    code: game.code,
    title: game.title,
    subtitle: game.subtitle,
    moves: game.movesUci,
    san: game.movesSan,
    comments: game.comments,
  }));

  const lessons = positions.map((position, index) => ({
    code: position.id,
    title: position.title,
    fen: position.fen,
    uci: position.movesUci.join(" "),
    notation: position.movesUci.join(" "),
    stage: position.level?.stage?.toUpperCase() || position.chapter || `POSICIÓN ${index + 1}`,
    explanation: position.objective,
    idea: position.whitePlan || position.teachingContinuation,
    hint: splitIdeas(position.teachingContinuation)[0] || position.whitePlan,
  }));

  const variants = structures.map((structure, index) => {
    const whitePlans = splitIdeas(structure.whitePlan);
    const blackPlans = splitIdeas(structure.blackPlan);
    return {
      code: structure.id,
      title: structure.title,
      level: structure.level?.label || "ESTRUCTURA",
      response: `Estructura ${index + 1}`,
      risk: index < 2 ? "Medio" : "Variable",
      theory: index < 2 ? "Media" : "Práctica",
      central: structure.objective,
      recommendation: index < 2 ? "Estudiar primero" : "Incorporar después",
      summary: structure.teachingContinuation,
      moves: structure.movesUci.join(" "),
      whitePlans: whitePlans.length ? whitePlans : ["Mejorar la peor pieza y preparar la ruptura central."],
      blackPlans: blackPlans.length ? blackPlans : ["Buscar contrajuego antes de defender pasivamente."],
      question: `¿Qué plan describe mejor la estructura «${structure.title}»?`,
      options: [
        whitePlans[0] || structure.objective,
        "Mover la dama repetidamente sin completar el desarrollo.",
        "Atacar en un flanco sin comprobar el centro ni la seguridad del rey.",
      ],
      correct: 0,
      feedback: whitePlans[0] || structure.objective,
    };
  });

  const moveExplanations = {};
  for (const position of positions) {
    position.movesUci.forEach((move) => {
      moveExplanations[move] ||= position.teachingContinuation || position.objective;
    });
  }
  const lessonMoveContexts = Object.fromEntries(positions.map((position) => [
    position.id,
    `${position.whitePlan || ""} ${position.blackPlan || ""}`.trim(),
  ]));
  return { lessons, variants, exercises, games: [...coreGames, ...expansionGames], moveExplanations, lessonMoveContexts };
}

function buildHtml(id, config, structures) {
  const decisionButtons = structures.map((structure, index) =>
    `<button class="decision-branch${index === 0 ? " active" : ""}" data-variant="${index}"><span>${structure.id}</span><b>${structure.title}</b><small>${structure.objective}</small></button>`
  ).join("\n          ");

  return sourceHtml
    .replace('content="#008C45"', `content="${config.accent}"`)
    .replace('<body style="--red:#008C45;--orange:#38A76B;">', `<body style="--red:${config.accent};--orange:${config.focus};">`)
    .replaceAll("La Italiana", config.article)
    .replaceAll("LA ITALIANA", config.article.toUpperCase())
    .replaceAll("Apertura Italiana", `Apertura ${config.adjective}`)
    .replaceAll("Italiana", config.adjective)
    .replaceAll("italiana", config.adjective.toLowerCase())
    .replace("1.e4 e5 2.Cf3 Cc6 3.Ac4", config.notation)
    .replace("Domina la Apertura " + config.adjective + " entendiendo el centro, la seguridad del rey y la coordinación de tus piezas.", config.lead)
    .replace("La diagonal " + config.adjective.toLowerCase(), config.identity)
    .replace('<span class="route-number">03</span>', '<span class="route-number">06</span>')
    .replace('<span class="route-number">07</span>', '<span class="route-number">06</span>')
    .replace(/<div class="decision-map"[\s\S]*?<\/div>\s*\n\s*<div class="variant-shell">/, `<div class="decision-map" aria-label="Estructuras principales">\n          ${decisionButtons}\n        </div>\n\n        <div class="variant-shell">`)
    .replace(/<p>Parte de .*?<\/p>\s*\n\s*<\/div>\s*\n\s*\n\s*<div class="decision-map"/, `<p>Compara seis estructuras críticas y aprende qué plan corresponde a cada una.</p>\n        </div>\n\n        <div class="decision-map"`)
    .replace("CUADERNO 1", `CUADERNO ${config.manual}`)
    .replace(`../../index.html#/aperturas/${config.adjective.toLowerCase()}`, `../../index.html#/aperturas/${id}`)
    .replace(/\s*<script src="expansion-games\.js"><\/script>/, "")
    .replace(/app\.js\?v=[^"]+/, "app.js?v=20260803-flag-colors-1");
}

const italianaExercises = JSON.parse(fs.readFileSync(path.join(root, "content", "italiana", "exercises.json"), "utf8"));
fs.writeFileSync(path.join(sourceLab, "exercise-data.js"), `window.OPENING_EXERCISES=${JSON.stringify(italianaExercises)};\n`, "utf8");
for (const [id, config] of Object.entries(configurations)) {
  const data = buildData(id);
  const structures = JSON.parse(fs.readFileSync(path.join(root, "content", id, "structures.json"), "utf8"));
  const target = path.join(root, "openings", id);
  fs.mkdirSync(target, { recursive: true });
  fs.cpSync(path.join(sourceLab, "assets"), path.join(target, "assets"), { recursive: true, force: true });
  fs.copyFileSync(path.join(sourceLab, "styles.css"), path.join(target, "styles.css"));
  const serviceWorker = fs.readFileSync(path.join(sourceLab, "service-worker.js"), "utf8")
    .replace("la-italiana-v15", `laboratorio-${id}-v5`)
    .replace(/\s*"\.\/expansion-games\.js",/, "");
  fs.writeFileSync(path.join(target, "service-worker.js"), serviceWorker, "utf8");
  fs.writeFileSync(path.join(target, "index.html"), buildHtml(id, config, structures), "utf8");
  fs.writeFileSync(path.join(target, "exercise-data.js"), `window.OPENING_EXERCISES=${JSON.stringify(data.exercises)};\n`, "utf8");

  const prelude = `const PIECES=${JSON.stringify({P:"♙",N:"♘",B:"♗",R:"♖",Q:"♕",K:"♔",p:"♟",n:"♞",b:"♝",r:"♜",q:"♛",k:"♚"})};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=${JSON.stringify(data.lessons)};
const variants=${JSON.stringify(data.variants)};
const exercises=${JSON.stringify(data.exercises)};
const games=${JSON.stringify(data.games)};
const moveExplanations=${JSON.stringify(data.moveExplanations)};
const lessonMoveContexts=${JSON.stringify(data.lessonMoveContexts)};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
`;
  const tailoredEngine = engineTail
    .replaceAll("italiana-progress", `${id}-progress`)
    .replaceAll("italiana-variant-reviews", `${id}-variant-reviews`)
    .replaceAll('.replace("ITA-","")', `.replace("${config.code}-","")`)
    .replace(/function variantBranch\(index\) \{[\s\S]*?\n\}/, "function variantBranch(index) { return index; }")
    .replace("boardAt(lessons[2].uci.split(\" \"),6)", `boardAt(lessons[${config.baseIndex}].uci.split(" "),lessons[${config.baseIndex}].uci.split(" ").length)`);
  fs.writeFileSync(path.join(target, "app.js"), prelude + tailoredEngine, "utf8");

  const manifest = {
    name: `${config.article} · Laboratorio de apertura`,
    short_name: config.article,
    start_url: "./",
    display: "standalone",
    background_color: "#f4f0e7",
    theme_color: config.accent,
    icons: [
      { src: "assets/app-icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "assets/app-icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
  fs.writeFileSync(path.join(target, "manifest.webmanifest"), JSON.stringify(manifest, null, 2), "utf8");
}

console.log("Laboratorios completos de Española y Escocesa generados.");
