# Arquitectura propuesta para la plataforma de aperturas

## 1. Decisión

Construir una sola aplicación con un motor común y un módulo de contenido
independiente para cada apertura.

La aplicación actual de la Italiana debe conservarse como referencia funcional
durante la migración. La incorporación de la Española y la Escocesa no debe
realizarse duplicando `index.html`, `app.js` y `styles.css`.

## 2. Material analizado

| Apertura | Versión | Word | PDF | Posiciones/datos | Partidas |
| --- | --- | --- | --- | --- | --- |
| Italiana | v2 | Sí | Sí | CSV básico: 12 posiciones | 3 PGN |
| Española | v2.3 bilateral revisada | Sí | Sí | CSV ampliado: 73 registros | 3 PGN |
| Escocesa | v1.4 final | Sí | Sí | CSV ampliado: 73 registros | 3 PGN |

Los manuales comparten una estructura pedagógica estable:

- fundamentos y lógica de las primeras jugadas;
- construcción del esquema principal;
- respuestas habituales del rival;
- planes de medio juego;
- errores frecuentes;
- seis estructuras de peones;
- motivos tácticos;
- seis partidas modelo: tres esenciales y tres de ampliación, con cinco comentarios didácticos cada una;
- finales y repertorio práctico;
- 40 ejercicios;
- 12 fichas de posiciones;
- plan de estudio de ocho semanas;
- anexos y recursos digitales.

## 3. Inventario normalizado por apertura

El módulo completo de una apertura debe admitir:

| Colección | Cantidad esperada | Identificador |
| --- | ---: | --- |
| Posiciones guiadas | 12 | `XXX-P01` a `XXX-P12` |
| Estructuras | 6 | `XXX-S01` a `XXX-S06` |
| Partidas modelo esenciales | 3 | `XXX-M01` a `XXX-M03` |
| Partidas de ampliación | 3 | `XXX-M04` a `XXX-M06` |
| Posiciones de ampliación | 6 | `XXX-M04-A1` a `XXX-M06-A2` |
| Paradas de partidas | 15 | `XXX-M01-P1` a `XXX-M03-P5` |
| Ejercicios | 40 | `XXX-E01` a `XXX-E40` |

`XXX` representa el código de apertura: `ITA`, `ESP`, `ESC`, etc.

La Española ya cumple este inventario en su CSV. La Escocesa también lo cumple.
La Italiana lo contiene en el conjunto Word/PGN, pero su CSV solo recoge las
12 posiciones y deberá migrarse al esquema ampliado.

## 4. Esquema común de contenido

Cada apertura tendrá un archivo de metadatos y cuatro colecciones principales.
El formato de distribución recomendado es JSON generado a partir de los CSV y
PGN editoriales.

```text
content/
├── catalog.json
├── italiana/
│   ├── opening.json
│   ├── lessons.json
│   ├── positions.json
│   ├── games.json
│   └── exercises.json
├── espanola/
│   └── ...
└── escocesa/
    └── ...
```

### 4.1 Metadatos de apertura

```json
{
  "id": "espanola",
  "code": "ESP",
  "manualNumber": 2,
  "title": "Apertura Española o Ruy López",
  "shortTitle": "La Española",
  "version": "2.3",
  "status": "available",
  "accent": "#8f4f3a",
  "startingMoves": ["e2e4", "e7e5", "g1f3", "b8c6", "f1b5"],
  "storageNamespace": "repertorio:espanola:v1"
}
```

### 4.2 Registro didáctico común

Las posiciones, estructuras, paradas y ejercicios comparten esta base:

```json
{
  "id": "ESP-P01",
  "kind": "position",
  "title": "Ocupar el centro",
  "chapter": "Ampliación A",
  "movesUci": ["e2e4", "e7e5"],
  "fen": "...",
  "sideToMove": "white",
  "objective": "...",
  "level": {
    "minRating": 800,
    "maxRating": 1400,
    "stage": "recognize"
  },
  "whitePlan": "...",
  "blackPlan": "...",
  "teachingContinuation": "...",
  "manualReference": "Ficha ESP-P01",
  "tags": []
}
```

### 4.3 Partida modelo

```json
{
  "id": "ESP-M01",
  "title": "Construcción clásica en la Morphy",
  "movesUci": [],
  "movesSan": [],
  "result": "*",
  "comments": [],
  "stops": ["ESP-M01-P1", "ESP-M01-P2", "ESP-M01-P3",
            "ESP-M01-P4", "ESP-M01-P5"]
}
```

Los comentarios no deben guardarse en un objeto indexado solo por número de
jugada. Deben ser una lista para admitir comentarios de ambos bandos y futuras
anotaciones:

```json
{
  "ply": 6,
  "side": "white",
  "text": "...",
  "kind": "teaching"
}
```

### 4.4 Progreso

El progreso no debe quedar ligado a claves como `italiana-progress`.

```json
{
  "schemaVersion": 1,
  "openings": {
    "italiana": {
      "completed": [],
      "variantReviews": {},
      "lastLocation": null
    },
    "espanola": {
      "completed": [],
      "variantReviews": {},
      "lastLocation": null
    }
  }
}
```

Clave única recomendada en `localStorage`:

```text
repertorio:progress:v1
```

La primera ejecución del nuevo sistema debe importar automáticamente
`italiana-progress` e `italiana-variant-reviews` para no perder el avance
existente.

## 5. Normalización necesaria

### 5.1 Tipos de registro

| Fuente | Valor original | Valor normalizado |
| --- | --- | --- |
| Española | `posición` | `position` |
| Española | `partida_modelo` | `game_stop` |
| Escocesa | `ficha_posicion` | `position` |
| Escocesa | `parada_modelo` | `game_stop` |
| Ambas | `estructura` | `structure` |
| Ambas | `ejercicio` | `exercise` |

### 5.2 Nombres de columnas

| CSV editorial | Aplicación |
| --- | --- |
| `codigo` | `id` |
| `tipo` | `kind` |
| `titulo` | `title` |
| `capítulo` | `chapter` |
| `secuencia` | `movesUci` |
| `FEN` | `fen` |
| `bando_que_mueve` | `sideToMove` |
| `objetivo` | `objective` |
| `nivel` | `level` |
| `comentario_blancas` | `whitePlan` |
| `comentario_negras` | `blackPlan` |
| `continuidad_didactica` | `teachingContinuation` |
| `referencia_en_manual` | `manualReference` |

### 5.3 Particularidades editoriales

- La Española usa punto y coma como separador; la Escocesa usa coma.
- `nivel` no tiene todavía una taxonomía uniforme. Debe conservarse el texto
  editorial y añadirse, cuando sea posible, una clasificación estructurada.
- La denominación de las paradas difiere, aunque su función es idéntica.
- El importador debe aceptar UTF-8 con BOM y conservar tildes y notación
  española.
- El CSV editorial será la fuente mantenible; los JSON de la aplicación deben
  generarse y validarse, no editarse manualmente.

## 6. Navegación

La experiencia tendrá dos niveles:

```text
Biblioteca de aperturas
└── Apertura seleccionada
    ├── Inicio
    ├── Aprende
    ├── Practica
    ├── Estructuras y variantes
    ├── Partidas
    ├── Ejercicios
    └── Plan de estudio
```

La apertura activa se expresará en la URL:

```text
/#/aperturas/italiana/inicio
/#/aperturas/espanola/aprende
/#/aperturas/escocesa/partidas
```

Este esquema funciona tanto abriendo la aplicación localmente como publicándola
en GitHub Pages, sin configuración adicional del servidor.

## 7. Separación del motor actual

El `app.js` actual mezcla tres responsabilidades:

1. datos específicos de la Italiana;
2. estado y progreso;
3. renderizado e interacción del tablero.

La refactorización debe producir:

```text
src/
├── app.js
├── router.js
├── state/
│   ├── progress.js
│   └── storage-migrations.js
├── chess/
│   ├── board.js
│   ├── moves.js
│   └── notation.js
├── views/
│   ├── library.js
│   ├── learn.js
│   ├── practice.js
│   ├── structures.js
│   ├── games.js
│   ├── exercises.js
│   └── study-plan.js
└── content/
```

No es necesario introducir un framework para esta primera migración. El modelo
actual sin dependencias puede mantenerse usando módulos ES.

## 8. Validaciones automáticas

Antes de publicar una apertura, el generador debe comprobar:

- identificadores únicos y con el prefijo correcto;
- FEN válido;
- secuencia UCI legal desde la posición inicial;
- coincidencia entre la posición obtenida por UCI y la FEN declarada;
- 12 posiciones, 6 estructuras, 15 paradas y 40 ejercicios;
- tres partidas PGN esenciales y tres partidas didácticas de ampliación validadas;
- correspondencia de cada parada con su partida;
- presencia de planes para blancas y negras;
- referencias manuales no vacías;
- ausencia de claves de progreso compartidas accidentalmente entre aperturas.

## 9. Plan de migración

### Fase 1 · Preservación y modelo común

- conservar una copia funcional de la Italiana;
- incorporar los paquetes editoriales de Española y Escocesa al repositorio;
- crear el conversor CSV/PGN a JSON;
- definir validaciones y generar los tres módulos.

### Fase 2 · Extraer el motor

- separar los datos hardcodeados de `app.js`;
- cargar la Italiana desde `content/italiana`;
- migrar el progreso local existente;
- comprobar que la experiencia actual no cambia.

### Fase 3 · Biblioteca y nuevas aperturas

- crear la pantalla de biblioteca;
- activar Española y Escocesa;
- adaptar textos, colores y navegación al módulo seleccionado;
- añadir ejercicios y estructuras como vistas comunes.

### Fase 4 · Verificación

- revisar las tres aperturas posición por posición;
- probar progreso independiente y navegación directa por URL;
- comprobar funcionamiento local, móvil, PWA y GitHub Pages;
- documentar el procedimiento para incorporar los nueve manuales siguientes.

## 10. Criterio de éxito

Tras la migración, añadir una nueva apertura debe consistir principalmente en:

1. copiar su DOCX, PDF, CSV y PGN;
2. registrar sus metadatos;
3. ejecutar el conversor y las validaciones;
4. revisar el contenido generado;
5. publicarla en el catálogo.

No deberá ser necesario duplicar ni modificar el tablero, el visor de partidas,
el sistema de progreso o las vistas principales.
