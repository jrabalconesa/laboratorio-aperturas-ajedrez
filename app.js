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
      <a href="#/aperturas/${opening.id}">${opening.interactiveAvailable ? "Abrir laboratorio" : "Ver contenido"} <span>→</span></a>
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
    ${opening.id === "italiana" ? `<a class="launch-module" href="openings/italiana/index.html">Entrar en el laboratorio completo <span>→</span></a>` : ""}
    <nav class="module-nav">${opening.id === "italiana" ? [["Aprende","aprende"],["Practica","practica"],["Estructuras","variantes"],["Partidas","partidas"],["Ejercicios","practica"],["Plan de estudio","inicio"]].map(([item, view]) => `<a href="openings/italiana/index.html#${view}">${item}</a>`).join("") : ["Aprende", "Practica", "Estructuras", "Partidas", "Ejercicios", "Plan de estudio"].map((item) => `<button disabled>${item}<small>próximamente</small></button>`).join("")}</nav>
    <div class="inventory-grid">${Object.entries(opening.inventory).map(([kind, count]) => `<article><strong>${count}</strong><span>${labels[kind]}</span></article>`).join("")}<article><strong>${opening.atlasCount ?? 0}</strong><span>Posiciones de ampliación</span></article><article><strong>${opening.gameCount}</strong><span>Partidas modelo</span></article></div>
    <p class="module-note ${opening.status === "available" ? "ready" : ""}">${opening.interactiveAvailable ? "El contenido y el laboratorio interactivo están integrados y validados." : "El contenido está integrado y validado. El laboratorio interactivo se encuentra en preparación."}</p>`;
}

window.addEventListener("hashchange", route);
loadCatalog().catch((error) => document.querySelector("#openingGrid").innerHTML = `<p class="error">${escapeHtml(error.message)} Abre la aplicación mediante el servidor local.</p>`);
