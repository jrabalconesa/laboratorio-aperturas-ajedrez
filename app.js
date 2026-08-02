const state = { catalog: [] };
const labels = { position: "Posiciones", structure: "Estructuras", game_stop: "Paradas didácticas", exercise: "Ejercicios" };

const escapeHtml = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

async function loadCatalog() {
  if (location.protocol === "file:") {
    state.catalog = window.OPENING_CATALOG ?? [];
  } else {
    const response = await fetch("content/catalog.json");
    if (!response.ok) throw new Error("No se pudo cargar el catálogo.");
    state.catalog = await response.json();
  }
  document.querySelector("#availableCount").textContent = state.catalog.length;
  document.querySelector("#openingGrid").innerHTML = state.catalog.map((opening) => `
    <article class="opening-card" style="--accent:${opening.accent}">
      <div class="card-topline"><span>CUADERNO ${String(opening.manualNumber).padStart(2, "0")}</span><span>v${escapeHtml(opening.version)}</span></div>
      <div><p class="opening-code">${escapeHtml(opening.code)}</p><h3>${escapeHtml(opening.shortTitle)}</h3><p>${escapeHtml(opening.title)}</p></div>
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
    <div class="opening-header"><div><p class="eyebrow">CUADERNO ${String(opening.manualNumber).padStart(2, "0")} · VERSIÓN ${escapeHtml(opening.version)}</p><h1>${escapeHtml(opening.shortTitle)}</h1><p>${escapeHtml(opening.title)}</p></div><span>${escapeHtml(opening.code)}</span></div>
    <a class="launch-module" href="openings/${opening.id}/index.html">Entrar en el laboratorio completo <span>→</span></a>
    <nav class="module-nav">${[["Aprende","aprende"],["Practica","practica"],["Estructuras","variantes"],["Partidas","partidas"],["Ejercicios","practica"],["Plan de estudio","inicio"]].map(([item, view]) => `<a href="openings/${opening.id}/index.html#${view}">${item}</a>`).join("")}</nav>
    <div class="inventory-grid">${Object.entries(opening.inventory).map(([kind, count]) => `<article><strong>${count}</strong><span>${labels[kind]}</span></article>`).join("")}<article><strong>${opening.atlasCount ?? 0}</strong><span>Posiciones de ampliación</span></article><article><strong>${opening.gameCount}</strong><span>Partidas modelo</span></article></div>
    <p class="module-note ready">El contenido y el laboratorio interactivo están integrados y validados.</p>`;
}

window.addEventListener("hashchange", route);
loadCatalog().catch((error) => document.querySelector("#openingGrid").innerHTML = `<p class="error">${escapeHtml(error.message)} Abre la aplicación mediante el servidor local.</p>`);
