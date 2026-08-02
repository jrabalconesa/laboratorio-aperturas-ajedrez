import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const client = path.join(dist, "client");
const server = path.join(dist, "server");

if (!dist.startsWith(root + path.sep)) {
  throw new Error("La carpeta de salida debe permanecer dentro del proyecto.");
}

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(client, { recursive: true });
fs.mkdirSync(server, { recursive: true });

for (const file of ["index.html", "app.js", "styles.css"]) {
  fs.copyFileSync(path.join(root, file), path.join(client, file));
}

for (const directory of ["assets", "content", "openings"]) {
  fs.cpSync(path.join(root, directory), path.join(client, directory), { recursive: true });
}

const worker = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      url.pathname = "/index.html";
      return env.ASSETS.fetch(new Request(url, request));
    }
    if (url.pathname.endsWith("/")) {
      url.pathname += "index.html";
      const response = await env.ASSETS.fetch(new Request(url, request));
      if (response.status !== 404) return response;
    }
    return env.ASSETS.fetch(request);
  },
};
`;

fs.writeFileSync(path.join(server, "index.js"), worker, "utf8");
console.log("Versión de producción preparada en dist.");

