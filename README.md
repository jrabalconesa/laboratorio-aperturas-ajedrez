# Laboratorio Aperturas Ajedrez

Plataforma común para estudiar la colección **Mi Repertorio de Ajedrez**.

El proyecto integra los doce cuadernos de la primera serie:

- cuadernos 1–3: Italiana, Española y Escocesa;
- cuadernos 4–6: contra la Siciliana, contra la Francesa y contra la Caro-Kann;
- cuadernos 7–9: Caro-Kann, Escandinava y Eslava con negras;
- cuadernos 10–12: Gambito de Dama Rehusado, sistemas contra el Londres y respuestas contra aperturas poco frecuentes.

## Estado

Las doce aperturas disponen de catálogo, módulo de contenido normalizado y
laboratorio interactivo. Cada apertura conserva una identidad cromática propia.
Los cuadernos cuyo CSV editorial no contiene todavía todo el inventario se
publican como módulos parciales, sin rellenar contenido inexistente.

## Estructura

```text
content/     JSON normalizado que consumirá la aplicación
docs/        decisiones de arquitectura
scripts/     conversores y validadores
sources/     DOCX, PDF, CSV, PGN y notas editoriales
```

## Generar y validar el contenido

```powershell
npm run build:content
npm run validate:content
```

El generador detecta automáticamente CSV separados por coma o punto y coma,
acepta secuencias UCI y SAN en castellano o inglés, y usa la FEN editorial como
posición de referencia cuando una fuente no incluye una secuencia reproducible.

La validación distingue entre:

- módulos completos: 12 posiciones, 6 estructuras, 15 paradas y 40 ejercicios;
- módulos parciales: fuentes antiguas que todavía deben completar el esquema.

La documentación detallada está en
[`docs/ARQUITECTURA_PLATAFORMA_APERTURAS.md`](docs/ARQUITECTURA_PLATAFORMA_APERTURAS.md).

## Incorporar otro cuaderno

1. Copiar DOCX, PDF, CSV, PGN, `LEEME.txt` y tarjetas en una carpeta de `sources/`.
2. Añadir sus metadatos y su color exclusivo en `scripts/openings.mjs`.
3. Ejecutar `npm run build`.
4. Revisar los avisos editoriales y el laboratorio generado antes de publicar.


## Estándar editorial ampliado

Cada apertura conserva 12 posiciones esenciales y añade 6 posiciones opcionales de atlas. El recorrido de partidas contiene 3 modelos esenciales y 3 modelos de ampliación, con cinco comentarios didácticos por partida. Las secuencias y FEN nuevas se validan legalmente con chess.js durante la generación; la web final no depende de esta librería en el navegador.
