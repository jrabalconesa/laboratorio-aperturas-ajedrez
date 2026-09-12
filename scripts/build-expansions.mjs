import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Chess } from "chess.js";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const expansions = {
  italiana: [
    {
      code: "ITA-M04",
      title: "Dos Caballos · cálculo en el centro",
      subtitle: "La presión sobre f7 solo funciona si el desarrollo sostiene la táctica.",
      moves: ["e2e4","e7e5","g1f3","b8c6","f1c4","g8f6","f3g5","d7d5","e4d5","c6a5","c4b5","c7c6","d5c6","b7c6","b5d3","h7h6","g5f3","e5e4","d3e2","e4f3","e2f3","f8d6","e1g1","e8g8"],
      comments: {3:"Cc6 confirma el carácter táctico de los Dos Caballos.",6:"Cg5 crea amenazas concretas, pero obliga a calcular ...d5.",11:"...c6 ataca el alfil y el centro; el blanco debe decidir sin perder tiempos.",17:"...e4 transforma el centro en una secuencia forzada.",23:"Ambos reyes están seguros y toca evaluar la estructura resultante."},
      atlas: [8,18],
    },
    {
      code: "ITA-M05",
      title: "Gambito Evans · tiempos por iniciativa",
      subtitle: "El peón de b4 compra desarrollo y apertura de líneas, no un ataque automático.",
      moves: ["e2e4","e7e5","g1f3","b8c6","f1c4","f8c5","b2b4","c5b4","c2c3","b4a5","d2d4","e5d4","e1g1","d7d6","c3d4","a5b6","b1c3","g8f6","f1e1","e8g8","h2h3","h7h6","c1f4","f8e8","d1d2"],
      comments: {3:"Cc6 sostiene e5 y prepara la aceptación del gambito.",6:"b4 entrega un peón para ganar tiempos de desarrollo.",10:"d4 abre el centro antes de que el negro consolide el peón extra.",18:"Te1 coloca la torre frente al rey y sostiene e4.",24:"Dd2 completa la coordinación sin precipitar el ataque."},
      atlas: [10,19],
    },
    {
      code: "ITA-M06",
      title: "De la maniobra al final",
      subtitle: "Los cambios centrales muestran cómo la apertura determina el final.",
      moves: ["e2e4","e7e5","g1f3","b8c6","f1c4","f8c5","e1g1","g8f6","d2d3","d7d6","c2c3","e8g8","f1e1","a7a6","c4b3","c5a7","b1d2","f8e8","d2f1","c8e6","c1e3","a7e3","f1e3","d6d5","e4d5","f6d5","e3d5","d8d5","d1d2","a8d8"],
      comments: {7:"Cf6 desarrolla atacando e4 y acelera el enroque.",16:"Cbd2 inicia la mejora de la peor pieza.",23:"...d5 cambia la posición de maniobra a cálculo.",27:"El cambio de caballos conduce a una simplificación comprensible.",29:"Las torres ocupan columnas centrales y anticipan una fase técnica."},
      atlas: [20,30],
    },
  ],
  espanola: [
    {
      code: "ESP-M04",
      title: "Española Abierta · actividad inmediata",
      subtitle: "La captura en e4 abre el centro y obliga a desarrollar con precisión.",
      moves: ["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f6e4","d2d4","b7b5","a4b3","d7d5","d4e5","c8e6","c2c3","f8c5","b1d2","e8g8","b3c2","f7f5","e5f6","d8f6","d2b3","c5b6"],
      comments: {3:"...a6 define la estructura Morphy antes de abrir el centro.",9:"...Cxe4 define la Española Abierta.",14:"dxe5 obliga a las negras a demostrar su actividad.",21:"...f5 sostiene el caballo y gana espacio.",25:"El caballo de b3 y el alfil de b6 compiten por casillas centrales."},
      atlas: [10,22],
    },
    {
      code: "ESP-M05",
      title: "Schliemann · responder al contragolpe",
      subtitle: "El ataque ...f5 exige desarrollo y cálculo, no defensa automática.",
      moves: ["e2e4","e7e5","g1f3","b8c6","f1b5","f7f5","d2d3","g8f6","e1g1","d7d6","b1c3","f8e7","f1e1","e8g8","b5c6","b7c6","d3d4","e5d4","f3d4","f5e4","c3e4","f6e4","e1e4","c8f5"],
      comments: {3:"Cc6 sostiene e5, pero ...f5 cambia inmediatamente la lucha.",5:"...f5 disputa e4 desde el primer momento.",14:"Axc6 acepta una estructura asimétrica para reducir la presión.",19:"...fxe4 abre líneas y cambia el carácter de la posición.",23:"...Af5 desarrolla atacando la torre activa."},
      atlas: [6,20],
    },
    {
      code: "ESP-M06",
      title: "Ruptura ...d5 y transición",
      subtitle: "Ambos bandos deben cambiar de plan cuando se abre el centro cerrado.",
      moves: ["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","e8g8","h2h3","c8b7","d2d3","d7d6","c2c3","f8e8","b1d2","e7f8","d2f1","h7h6","f1g3","d6d5","e4d5","f6d5","d3d4","e5d4","e1e8","d8e8","c3d4"],
      comments: {3:"...a6 inicia la construcción de la Española cerrada.",20:"Cbd2 inicia la maniobra española.",25:"...d5 es la ruptura liberadora principal.",29:"...exd4 transforma la estructura y abre la columna e.",32:"cxd4 reconstruye un centro jugable tras la simplificación."},
      atlas: [24,30],
    },
  ],
  escocesa: [
    {
      code: "ESC-M04",
      title: "4...Ac5 · desarrollo con presión",
      subtitle: "Las negras atacan d4 y el blanco responde desarrollando con ganancia de tiempo.",
      moves: ["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8c5","c1e3","d8f6","c2c3","g8e7","f1c4","e8g8","e1g1","c5b6","b1a3","d7d6","a3c2","c6e5","c4e2","d6d5","f2f4","e5c4","e2c4","d5c4"],
      comments: {3:"Cc6 controla d4 antes de que la Escocesa abra el centro.",7:"...Ac5 desarrolla atacando el caballo central.",10:"c3 sostiene d4 y prepara un desarrollo estable.",19:"...Ce5 centraliza con presión sobre c4 y d3.",25:"...dxc4 aclara la tensión y crea una nueva estructura."},
      atlas: [8,20],
    },
    {
      code: "ESC-M05",
      title: "Mieses · peones doblados y actividad",
      subtitle: "La estructura negra parece débil, pero la pareja de alfiles aporta contrajuego.",
      moves: ["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","e4e5","d8e7","d1e2","f6d5","c2c4","c8a6","b2b3","g7g6","f2f4","f8g7","e2f2","d5b6","c1a3","d7d6","b1d2","e8g8"],
      comments: {3:"Cc6 prepara la respuesta central a d4.",9:"...bxc6 acepta peones doblados a cambio de columna b y pareja de alfiles.",13:"...Cd5 bloquea e5 y ocupa una casilla central.",20:"Df2 protege el centro y prepara el desarrollo del flanco de dama.",25:"El enroque completa la coordinación negra."},
      atlas: [10,22],
    },
    {
      code: "ESC-M06",
      title: "Centro abierto hacia un final",
      subtitle: "La actividad de piezas pesa más que la apariencia estática de la estructura.",
      moves: ["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8","b1d2","c7c5","d2f3","c8b7","c2c3","f8e8","c1f4","h7h6","f3e5","e7d6"],
      comments: {3:"Cc6 disputa d4 y sostiene e5.",11:"...d5 libera las piezas antes de defender debilidades.",17:"Ambos reyes seguros permiten activar las torres.",23:"...Te8 disputa la columna abierta.",27:"...Ad6 desafía al caballo y prepara cambios hacia el final."},
      atlas: [12,24],
    },
  ],
};

function buildGame(openingId, specification) {
  const chess = new Chess();
  const san = [];
  const fens = [];
  for (const [index, uci] of specification.moves.entries()) {
    let move;
    try {
      move = chess.move({ from: uci.slice(0, 2), to: uci.slice(2, 4), promotion: uci[4] });
    } catch {
      throw new Error(`${specification.code}: jugada ilegal ${uci} en ply ${index + 1}; FEN ${chess.fen()}; legales ${chess.moves().join(" ")}`);
    }
    if (!move) throw new Error(`${specification.code}: jugada ilegal ${uci} en ply ${index + 1}`);
    san.push(move.san);
    fens.push(chess.fen());
  }

  const atlas = specification.atlas.map((ply, index) => ({
    id: `${specification.code}-A${index + 1}`,
    openingId,
    gameId: specification.code,
    title: `${specification.title} · posición ${index + 1}`,
    ply,
    movesUci: specification.moves.slice(0, ply),
    fen: fens[ply - 1],
    sideToMove: fens[ply - 1].split(" ")[1] === "w" ? "white" : "black",
    objective: specification.comments[ply - 1] ?? "Explicar el plan de ambos bandos y comparar dos candidatas.",
    level: { label: "ampliación", minRating: 1000, maxRating: 1600, stage: "deepen" },
    manualReference: `${specification.code} · Atlas`,
  }));

  return {
    game: {
      id: specification.code,
      code: specification.code,
      title: specification.title,
      subtitle: specification.subtitle,
      tier: "expansion",
      movesUci: specification.moves,
      movesSan: san,
      comments: specification.comments,
      result: "*",
    },
    atlas,
  };
}

for (const [openingId, specifications] of Object.entries(expansions)) {
  const built = specifications.map((specification) => buildGame(openingId, specification));
  const games = built.map((item) => item.game);
  const atlas = built.flatMap((item) => item.atlas);
  const sourceDir = path.join(root, "sources", openingId);
  fs.writeFileSync(
    path.join(sourceDir, "ampliacion_partidas.json"),
    `${JSON.stringify({ games, atlas }, null, 2)}\n`,
    "utf8",
  );
  if (openingId === "italiana") {
    const legacyGames = games.map((game) => ({ code: game.code, title: game.title, subtitle: game.subtitle, moves: game.movesUci, san: game.movesSan, comments: game.comments }));
    fs.writeFileSync(path.join(root, "openings", "italiana", "expansion-games.js"), `window.ITALIANA_EXPANSION_GAMES = ${JSON.stringify(legacyGames, null, 2)};\n`, "utf8");
  }
  console.log(`${openingId}: ${games.length} partidas y ${atlas.length} posiciones de ampliación validadas.`);
}

