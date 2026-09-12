import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Chess } from "chess.js";
import { openings } from "./openings.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const sourceLab = path.join(root, "openings", "italiana");
const sourceHtml = fs.readFileSync(path.join(sourceLab, "index.html"), "utf8");
const sourceEngine = fs.readFileSync(path.join(sourceLab, "app.js"), "utf8");
const engineTail = sourceEngine.slice(sourceEngine.indexOf("const state ="));

const configurations = Object.fromEntries(openings
  .filter((opening) => opening.id !== "italiana")
  .map((opening) => [opening.id, {
    ...opening.lab,
    code: opening.code,
    accent: opening.accent,
    focus: opening.focus,
    boardDark: opening.boardDark,
    manual: opening.manualNumber,
    title: opening.title,
    shortTitle: opening.shortTitle,
    version: opening.version,
    sourceDir: opening.sourceDir,
    preview: opening.preview,
    pgnLocalized: opening.pgnLocalized,
  }]));

function splitIdeas(text = "") {
  return text.split(/(?<=[.!?])\s+/).filter(Boolean).slice(0, 3);
}

function editorialText(value, fallback) {
  const text = String(value ?? "").trim();
  // Algunos CSV de origen concentran toda la ficha tras el rótulo. Esa ficha
  // sirve como respaldo, pero no debe convertirse en un título o una tarjeta.
  return !text || text.length > 260 || text.includes("/ FEN:") ? fallback : text;
}

const coreGameTitles = {
  "ESC-M01": "Estructura 4...Cf6 · presión sobre d5",
  "ESC-M02": "Salida prematura de dama · iniciativa y desarrollo",
  "ESC-M03": "Jaque ...Ab4+ · estructura y ruptura ...d5",
};

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

function parseCoreGame(game, localizedNotation) {
  const chess = new Chess();
  const pgn = localizedNotation ? translateLocalizedPgn(game.pgn) : game.pgn;
  chess.loadPgn(pgn);
  const history = chess.history({ verbose: true });
  const commentsByFen = new Map(chess.getComments().map(({ fen, comment }) => [fen, comment]));
  return {
    code: game.id,
    title: coreGameTitles[game.id] || game.title.replace(`${game.id} · `, "").replace("Mi Repertorio de Ajedrez - ", ""),
    subtitle: `${game.headers.White ?? "Blancas"} — ${game.headers.Black ?? "Negras"}`,
    moves: history.map((move) => `${move.from}${move.to}${move.promotion ?? ""}`),
    san: history.map((move) => move.san),
    comments: Object.fromEntries(history.map((move, index) => [index, commentsByFen.get(move.after)]).filter(([, comment]) => comment)),
  };
}

function buildData(id, config) {
  const directory = path.join(root, "content", id);
  const positions = JSON.parse(fs.readFileSync(path.join(directory, "positions.json"), "utf8"));
  const exercises = JSON.parse(fs.readFileSync(path.join(directory, "exercises.json"), "utf8"));
  const structures = JSON.parse(fs.readFileSync(path.join(directory, "structures.json"), "utf8"));
  const coreGames = JSON.parse(fs.readFileSync(path.join(directory, "games.json"), "utf8")).map((game) => parseCoreGame(game, config.pgnLocalized));
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
    fen: position.fen,
    notation: position.movesUci.join(" "),
    stage: position.level?.stage?.toUpperCase() || position.chapter || `POSICIÓN ${index + 1}`,
    explanation: position.objective,
    idea: position.whitePlan || position.teachingContinuation,
    hint: splitIdeas(position.teachingContinuation)[0] || position.whitePlan,
  }));

  const variants = structures.map((structure, index) => {
    const title = editorialText(structure.title, `Estructura crítica ${index + 1}`);
    const central = editorialText(structure.objective, "Compara el centro, la actividad de las piezas y la ruptura disponible.");
    const summary = editorialText(structure.teachingContinuation, "Identifica la tensión central antes de elegir un plan.");
    const whitePlan = editorialText(structure.whitePlan, "Completar el desarrollo, asegurar el rey y preparar la ruptura central.");
    const blackPlan = editorialText(structure.blackPlan, "Coordinar las piezas y buscar contrajuego sin debilitar el centro.");
    const whitePlans = splitIdeas(whitePlan);
    const blackPlans = splitIdeas(blackPlan);
    return {
      code: structure.id,
      title,
      level: structure.level?.label || "ESTRUCTURA",
      response: `Estructura ${index + 1}`,
      risk: index < 2 ? "Medio" : "Variable",
      theory: index < 2 ? "Media" : "Práctica",
      central,
      recommendation: index < 2 ? "Estudiar primero" : "Incorporar después",
      summary,
      moves: structure.movesUci.join(" "),
      fen: structure.fen,
      whitePlans: whitePlans.length ? whitePlans : ["Mejorar la peor pieza y preparar la ruptura central."],
      blackPlans: blackPlans.length ? blackPlans : ["Buscar contrajuego antes de defender pasivamente."],
      question: `¿Qué plan describe mejor «${title}»?`,
      options: [
        whitePlans[0] || central,
        "Mover la dama repetidamente sin completar el desarrollo.",
        "Atacar en un flanco sin comprobar el centro ni la seguridad del rey.",
      ],
      correct: 0,
      feedback: whitePlans[0] || central,
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

function buildHtml(id, config, structures, data, cardNames) {
  const principleItems = config.principles.map((principle, index) =>
    `<span><b>0${index + 1}</b> ${principle}</span>${index < config.principles.length - 1 ? "<i></i>" : ""}`
  ).join("\n              ");
  const decisionButtons = data.variants.map((variant, index) =>
    `<button class="decision-branch${index === 0 ? " active" : ""}" data-variant="${index}"><span>${variant.code}</span><b>${variant.title}</b><small>${variant.central}</small></button>`
  ).join("\n          ");
  const cardGallery = cardNames.length ? `<section class="study-cards" aria-labelledby="study-cards-title">
            <div class="study-heading"><p class="eyebrow">TARJETAS DE REPASO</p><h2 id="study-cards-title">Cuatro recordatorios visuales</h2></div>
            <div class="study-card-grid">${cardNames.map((name, index) => `<figure><img src="assets/tarjetas/${name}" alt="Tarjeta de repaso ${index + 1} de ${config.article}" loading="lazy"><figcaption>Tarjeta ${String(index + 1).padStart(2, "0")}</figcaption></figure>`).join("")}</div>
          </section>` : "";

  return sourceHtml
    .replace('content="#008C45"', `content="${config.accent}"`)
    .replace('<meta name="application-name" content="Laboratorio de Aperturas">', `<meta name="application-name" content="${config.shortTitle}">`)
    .replace('<meta name="description" content="Mi Repertorio de Ajedrez">', `<meta name="description" content="${config.lead}">`)
    .replace('<meta property="og:title" content="Laboratorio de Aperturas">', `<meta property="og:title" content="${config.title}">`)
    .replace('<meta property="og:description" content="Mi Repertorio de Ajedrez">', `<meta property="og:description" content="${config.lead}">`)
    .replace('<title>Laboratorio de Aperturas</title>', `<title>${config.shortTitle} · Laboratorio de Aperturas</title>`)
    .replace('<body style="--red:#008C45;--orange:#38A76B;--dark-square:#6F9278;">', `<body style="--red:${config.accent};--orange:${config.focus};--dark-square:${config.boardDark};">`)
    .replaceAll("La Italiana", config.article)
    .replaceAll("LA ITALIANA", config.article.toUpperCase())
    .replaceAll("Apertura Italiana", `Apertura ${config.adjective}`)
    .replaceAll("Italiana", config.adjective)
    .replaceAll("italiana", config.adjective.toLowerCase())
    .replace("1.e4 e5 2.Cf3 Cc6 3.Ac4 Ac5", config.notation)
    .replace("Domina la Apertura " + config.adjective + " entendiendo el centro, la seguridad del rey y la coordinación de tus piezas.", config.lead)
    .replace("La diagonal " + config.adjective.toLowerCase(), config.identity)
    .replace(`aria-label="Posición base de la Apertura ${config.adjective}"`, `aria-label="${config.baseLabel}"`)
    .replace(`<h3>Construye la ${config.adjective} jugada a jugada</h3>`, `<h3>${config.routeHeading}</h3>`)
    .replace(/<div class="principles">[\s\S]*?<\/div>\s*<\/div>\s*<div class="hero-board-wrap">/, `<div class="principles">\n              ${principleItems}\n            </div>\n          </div>\n          <div class="hero-board-wrap">`)
    .replaceAll("ITA-P01", `${config.code}-P01`)
    .replaceAll("ITA-M01", `${config.code}-M01`)
    .replace('<span class="route-number">12</span>', `<span class="route-number">${String(data.lessons.length).padStart(2, "0")}</span>`)
    .replace('<span class="route-number">06</span>', `<span class="route-number">${String(data.games.length).padStart(2, "0")}</span>`)
    .replace('<span class="route-number">07</span>', `<span class="route-number">${String(structures.length).padStart(2, "0")}</span>`)
    .replace('<span class="route-number">40</span>', `<span class="route-number">${String(data.exercises.length).padStart(2, "0")}</span>`)
    .replace("<h3>40 ejercicios</h3>", `<h3>${data.exercises.length ? `${data.exercises.length} ejercicios` : "Ejercicios guiados"}</h3>`)
    .replace("<h3>6 partidas modelo</h3>", `<h3>${data.games.length} partidas modelo</h3>`)
    .replace('<div class="game-checklist">', `${cardGallery}<div class="game-checklist">`)
    .replace(/<div class="decision-map"[\s\S]*?<\/div>\s*\n\s*<div class="variant-shell">/, `<div class="decision-map" aria-label="Estructuras principales">\n          ${decisionButtons}\n        </div>\n\n        <div class="variant-shell">`)
    .replace(/<p>Parte de .*?<\/p>\s*\n\s*<\/div>\s*\n\s*\n\s*<div class="decision-map"/, `<p>Compara seis estructuras críticas y aprende qué plan corresponde a cada una.</p>\n        </div>\n\n        <div class="decision-map"`)
    .replace("CUADERNO 1", `CUADERNO ${config.manual}`)
    .replace(`../../index.html#/aperturas/${config.adjective.toLowerCase()}`, `../../index.html#/aperturas/${id}`)
    .replace(/\s*<script src="expansion-games\.js"><\/script>/, "")
    .replace(/styles\.css\?v=[^"]+/, "styles.css?v=20260809-global-density-1")
    .replace(/app\.js\?v=[^"]+/, "app.js?v=20260809-global-density-1");
}

const italianaExercises = JSON.parse(fs.readFileSync(path.join(root, "content", "italiana", "exercises.json"), "utf8"));
fs.writeFileSync(path.join(sourceLab, "exercise-data.js"), `window.OPENING_EXERCISES=${JSON.stringify(italianaExercises)};\n`, "utf8");
for (const [id, config] of Object.entries(configurations)) {
  const data = buildData(id, config);
  const structures = JSON.parse(fs.readFileSync(path.join(root, "content", id, "structures.json"), "utf8"));
  const target = path.join(root, "openings", id);
  fs.mkdirSync(target, { recursive: true });
  fs.cpSync(path.join(sourceLab, "assets"), path.join(target, "assets"), { recursive: true, force: true });
  fs.copyFileSync(path.join(sourceLab, "styles.css"), path.join(target, "styles.css"));
  const cardsSource = path.join(root, "sources", config.sourceDir, "TARJETAS_PNG");
  const cardNames = fs.existsSync(cardsSource)
    ? fs.readdirSync(cardsSource).filter((name) => /\.png$/i.test(name)).sort()
    : [];
  if (cardNames.length) fs.cpSync(cardsSource, path.join(target, "assets", "tarjetas"), { recursive: true, force: true });
  const serviceWorker = fs.readFileSync(path.join(sourceLab, "service-worker.js"), "utf8")
    .replace("la-italiana-v21", `laboratorio-${id}-v12`)
    .replace(/\s*"\.\/expansion-games\.js",/, "");
  fs.writeFileSync(path.join(target, "service-worker.js"), serviceWorker, "utf8");
  fs.writeFileSync(path.join(target, "index.html"), buildHtml(id, config, structures, data, cardNames), "utf8");
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
    .replace("boardAt(lessons[2].uci.split(\" \"),6)", `parseFen(${JSON.stringify(config.preview.fen)})`);
  fs.writeFileSync(path.join(target, "app.js"), prelude + tailoredEngine, "utf8");

  const manifest = {
    name: `${config.title} · Mi Repertorio de Ajedrez`,
    short_name: config.shortTitle,
    description: config.lead,
    lang: "es",
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

console.log(`Laboratorios generados para ${Object.keys(configurations).length} aperturas además de la Italiana.`);
