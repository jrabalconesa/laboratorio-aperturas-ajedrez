# Laboratorio Aperturas Ajedrez

Plataforma común para estudiar la colección **Mi Repertorio de Ajedrez**.

El proyecto integrará inicialmente tres aperturas:

- Apertura Italiana, cuaderno 1, versión 2;
- Apertura Española o Ruy López, cuaderno 2, versión 2.3;
- Apertura Escocesa, cuaderno 3, versión 1.4.

## Estado

La fase 1 incorpora las fuentes editoriales y genera un modelo de contenido
normalizado. La aplicación web de la Italiana se conserva en su proyecto
original hasta que el motor común reproduzca correctamente su funcionamiento.

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

El generador acepta los separadores utilizados actualmente por los CSV:
punto y coma en Italiana y Española, y coma en Escocesa.

La validación distingue entre:

- módulos completos: 12 posiciones, 6 estructuras, 15 paradas y 40 ejercicios;
- módulos parciales: fuentes antiguas que todavía deben completar el esquema.

La documentación detallada está en
[`docs/ARQUITECTURA_PLATAFORMA_APERTURAS.md`](docs/ARQUITECTURA_PLATAFORMA_APERTURAS.md).


## Estándar editorial ampliado

Cada apertura conserva 12 posiciones esenciales y añade 6 posiciones opcionales de atlas. El recorrido de partidas contiene 3 modelos esenciales y 3 modelos de ampliación, con cinco comentarios didácticos por partida. Las secuencias y FEN nuevas se validan legalmente con chess.js durante la generación; la web final no depende de esta librería en el navegador.
