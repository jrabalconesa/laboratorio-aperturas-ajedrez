const state = { catalog: [] };
const labels = { position: "Posiciones", structure: "Estructuras", game_stop: "Paradas didácticas", exercise: "Ejercicios" };

const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
const pieceGlyphs = { P: "♙", N: "♘", B: "♗", R: "♖", Q: "♕", K: "♔", p: "♟", n: "♞", b: "♝", r: "♜", q: "♛", k: "♚" };

function renderOpeningPreview(opening) {
  const preview = opening.preview;
  if (!preview?.fen) return `<span class="opening-code-large">${escapeHtml(opening.code)}</span>`;
  const board = {};
  preview.fen.split(" ")[0].split("/").forEach((row, rowIndex) => {
    let file = 0;
    for (const token of row) {
      if (/\d/.test(token)) file += Number(token);
      else { board["abcdefgh"[file] + (8 - rowIndex)] = token; file += 1; }
    }
  });
  const highlighted = new Set(preview.lastMove || []);
  const squares = [];
  for (let rank = 8; rank >= 1; rank -= 1) {
    for (let file = 0; file < 8; file += 1) {
      const name = "abcdefgh"[file] + rank;
      const piece = board[name];
      squares.push(`<span class="opening-mini-square ${(file + rank) % 2 ? "light" : "dark"} ${highlighted.has(name) ? "last-move" : ""}">${piece ? `<i class="${piece === piece.toUpperCase() ? "white" : "black"}">${pieceGlyphs[piece]}</i>` : ""}</span>`);
    }
  }
  return `<figure class="opening-preview" aria-label="Posición tras ${escapeHtml(preview.line)}">
    <div class="opening-mini-board" aria-hidden="true">${squares.join("")}</div>
    <figcaption><strong>${escapeHtml(opening.code)}</strong><span>${escapeHtml(preview.line)}</span></figcaption>
  </figure>`;
}

function renderCompletionMessage(opening) {
  if (opening.status === "available" && opening.interactiveAvailable && opening.quote) {
    const attribution = `${opening.quote.author}${opening.quote.years ? ` (${opening.quote.years})` : ""}${opening.quote.nationality ? `, ${opening.quote.nationality}` : ""}`;
    return `<blockquote class="opening-quote"><p>“${escapeHtml(opening.quote.text)}”</p><cite>— ${escapeHtml(attribution)}</cite></blockquote>`;
  }
  return `<p class="module-note">La integración de esta apertura continúa en revisión.</p>`;
}

async function loadCatalog() {
  if (location.protocol === "file:") {
    state.catalog = window.OPENING_CATALOG ?? [];
  } else {
    const response = await fetch("content/catalog.json?v=20260803-country-codes-1");
    if (!response.ok) throw new Error("No se pudo cargar el catálogo.");
    state.catalog = await response.json();
  }
  document.querySelector("#availableCount").textContent = state.catalog.length;
  document.querySelector("#openingGrid").innerHTML = state.catalog.map((opening) => `
    <article class="opening-card" style="--accent:${opening.accent}">
      <div class="card-topline"><span>CUADERNO ${String(opening.manualNumber).padStart(2, "0")}</span><span>v${escapeHtml(opening.version)}</span></div>
      <div><p class="opening-code">${escapeHtml(opening.code)}</p><h3><a class="opening-title-link" href="openings/${opening.id}/index.html">${escapeHtml(opening.shortTitle)}</a></h3><p>${escapeHtml(opening.title)}</p></div>
      <div class="card-summary"><span><strong>${opening.inventory.position}</strong> posiciones</span><span><strong>${opening.gameCount}</strong> partidas</span></div>
      <a href="#/aperturas/${opening.id}">Abrir laboratorio <span>→</span></a>
    </article>`).join("");
  route();
}

function route() {
  const id = location.hash.match(/^#\/aperturas\/([a-z-]+)$/)?.[1];
  const opening = state.catalog.find((item) => item.id === id);
  document.querySelector(".library").hidden = Boolean(opening);
  document.querySelector(".hero").hidden = Boolean(opening);
  const detail = document.querySelector("#openingDetail");
  if (!opening) {
    detail.hidden = true;
    document.title = "Laboratorio de Aperturas de Ajedrez";
    return;
  }
  detail.hidden = false;
  detail.style.setProperty("--accent", opening.accent);
  document.title = `${opening.shortTitle} · Laboratorio de Aperturas`;
  detail.innerHTML = `
    <a class="back-link" href="#/">← Todas las aperturas</a>
    <div class="opening-header"><div><p class="eyebrow">CUADERNO ${String(opening.manualNumber).padStart(2, "0")} · VERSIÓN ${escapeHtml(opening.version)}</p><h1>${escapeHtml(opening.shortTitle)}</h1><p>${escapeHtml(opening.title)}</p></div>${renderOpeningPreview(opening)}</div>
    <a class="launch-module" href="openings/${opening.id}/index.html">Entrar en el laboratorio completo <span>→</span></a>
    <nav class="module-nav">${[["Inicio","inicio"],["Aprende","aprende"],["Practica","practica"],["Estructuras","variantes"],["Partidas","partidas"],["Ejercicios","ejercicios"],["Plan de estudio","plan"]].map(([item, view]) => `<a href="openings/${opening.id}/index.html#${view}">${item}</a>`).join("")}</nav>
    <div class="inventory-grid">${Object.entries(opening.inventory).map(([kind, count]) => `<article><strong>${count}</strong><span>${labels[kind]}</span></article>`).join("")}<article><strong>${opening.atlasCount ?? 0}</strong><span>Posiciones de ampliación</span></article><article><strong>${opening.gameCount}</strong><span>Partidas modelo</span></article></div>
    ${renderCompletionMessage(opening)}`;
}

window.addEventListener("hashchange", route);
loadCatalog().catch((error) => document.querySelector("#openingGrid").innerHTML = `<p class="error">${escapeHtml(error.message)} Abre la aplicación mediante el servidor local.</p>`);
