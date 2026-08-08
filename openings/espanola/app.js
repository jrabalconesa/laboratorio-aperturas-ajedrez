const PIECES={"P":"♙","N":"♘","B":"♗","R":"♖","Q":"♕","K":"♔","p":"♟","n":"♞","b":"♝","r":"♜","q":"♛","k":"♚"};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=[{"code":"ESP-P01","title":"Ocupar el centro","fen":"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2","uci":"e2e4 e7e5","notation":"e2e4 e7e5","stage":"Ampliación A","explanation":"Comprender cómo 1.e4 ocupa el centro y por qué Cf3 es el desarrollo más activo.","idea":"Cf3 desarrolla con amenaza sobre e5 y acerca el enroque. La alternativa Cc3 es sana, pero no obliga a las negras a explicar cómo sostendrán e5.","hint":"Tras 1.e4 e5, ambos bandos reclaman espacio central y abren líneas para dama y alfil."},{"code":"ESP-P02","title":"Desarrollar atacando","fen":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3","uci":"e2e4 e7e5 g1f3 b8c6","notation":"e2e4 e7e5 g1f3 b8c6","stage":"Ampliación A","explanation":"Explicar cómo Ab5 aumenta la presión sobre e5 sin ganar todavía el peón.","idea":"3.Ab5 desarrolla el alfil, prepara O-O y aumenta la presión sobre el caballo que sostiene e5. No gana el peón todavía: tras Axc6 dxc6 Cxe5, las negras suelen disponer de Dd4.","hint":"Después de 2.Cf3 Cc6, el peón e5 está defendido y la casilla d4 queda bajo control negro."},{"code":"ESP-P03","title":"La presión española","fen":"r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6","stage":"Ampliación A","explanation":"Reconocer la posición base española y la tensión entre Ab5, Cc6 y e5.","idea":"4.Aa4 conserva el alfil de casillas blancas, mantiene la presión indirecta sobre e5 y obliga a las negras a invertir otro tiempo si desean ganar espacio con ...b5.","hint":"Tras 3.Ab5 a6, el alfil debe decidir entre conservar la tensión o cambiar en c6."},{"code":"ESP-P04","title":"Conservar el alfil y enrocar","fen":"r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6","stage":"Ampliación A","explanation":"Priorizar el enroque y conservar el alfil antes de abrir el centro.","idea":"5.O-O es prioritario: pone el rey a salvo, activa Tf1 y permite responder a ...Cxe4 con d4, abriendo el centro cuando el caballo negro está expuesto.","hint":"El alfil está en a4 y el caballo negro de f6 presiona e4."},{"code":"ESP-P05","title":"Rey seguro y torre activa","fen":"r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7","stage":"Ampliación A","explanation":"Comprender cómo Te1 refuerza e4 y prepara una futura ruptura d4.","idea":"6.Te1 refuerza e4 con una pieza, libera f1 para maniobras y coloca la torre frente al rey negro si el centro se abre.","hint":"Después de 5.O-O Ae7, ambos bandos están cerca de completar el desarrollo del flanco de rey."},{"code":"ESP-P06","title":"Espacio negro y alfil en b3","fen":"r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq b6 0 7","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5","stage":"Ampliación A","explanation":"Valorar el espacio negro del flanco de dama y la utilidad del alfil en b3.","idea":"7.Ab3 conserva la diagonal b1-h7 y mantiene la vista sobre f7. También deja libre a2 para una retirada futura si ...Ca5 gana tiempo.","hint":"Tras ...b5, el alfil debe elegir una diagonal útil."},{"code":"ESP-P07","title":"Preparar d4","fen":"r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 0 8","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6","stage":"Ampliación A","explanation":"Explicar por qué c3 es una jugada de infraestructura para preparar d4.","idea":"8.c3 prepara d4, ofrece c2 al alfil y evita que un caballo negro se instale cómodamente en d4. No amenaza nada inmediato: es una jugada de infraestructura.","hint":"Con el centro sostenido por ...d6, las blancas deben decidir cómo construir su ruptura."},{"code":"ESP-P08","title":"Profilaxis útil","fen":"r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 1 9","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8","stage":"Ampliación A","explanation":"Reconocer una jugada profiláctica útil y distinguirla de una pérdida de tiempo.","idea":"9.h3 evita ...Ag4, que podría clavar Cf3 y aumentar la presión sobre e4. También crea una casilla de escape para el rey, pero no debe convertirse en una excusa para lanzar g4.","hint":"Ambos reyes están seguros y la lucha gira alrededor de d4 y ...d5."},{"code":"ESP-P09","title":"La ruptura d4","fen":"rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8","stage":"Ampliación A","explanation":"Calcular la ruptura d4 y anticipar cómo cambia la estructura central.","idea":"10.d4 reclama espacio y desafía e5. Si las negras mantienen la tensión, las blancas ganan libertad; si capturan, se abren líneas para las piezas blancas.","hint":"Tras ...Cb8, las negras han concedido un tiempo para reorganizarse."},{"code":"ESP-P10","title":"Desarrollar sin bloquear","fen":"r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - - 1 11","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7","stage":"Ampliación A","explanation":"Desarrollar el caballo por d2 sin bloquear el peón c ni abandonar e4.","idea":"11.Cbd2 desarrolla el caballo por d2 para no bloquear el peón c. Su ruta típica es f1-g3, desde donde apoya f5, h5 y e4.","hint":"El centro está tenso y las negras han reforzado e5."},{"code":"ESP-P11","title":"Cerrar o mantener la tensión","fen":"r1bq1rk1/3nbppp/p2p1n2/1pp1p3/3PP3/1BP2N1P/PP1N1PP1/R1BQR1K1 w - c6 0 12","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7 b1d2 c7c5","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7 b1d2 c7c5","stage":"Ampliación A","explanation":"Decidir si conviene cerrar el centro con d5 o mantener la tensión.","idea":"12.d5 gana espacio, fija el caballo d7 y convierte la partida en una lucha de maniobras. La decisión es buena si las blancas aceptan que el ataque no será inmediato.","hint":"Tras ...c5, las blancas deben decidir la estructura."},{"code":"ESP-P12","title":"Transición al medio juego","fen":"r1b2rk1/2qnbp1p/p2p1np1/1ppPp3/4P3/1BP2NNP/PP3PP1/R1BQR1K1 b - - 1 14","uci":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7 b1d2 c7c5 d4d5 d8c7 d2f1 g7g6 f1g3","notation":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7 b1d2 c7c5 d4d5 d8c7 d2f1 g7g6 f1g3","stage":"Ampliación A","explanation":"Formular un plan de medio juego después de completar la maniobra Cf1-g3.","idea":"13.Cf1 y 14.Cg3 completan la ruta del caballo. Desde g3, defiende e4, mira f5 y h5 y coopera con el alfil de b3 contra el rey.","hint":"El centro está cerrado; la apertura ha terminado y comienza la mejora de piezas."}];
const variants=[{"code":"ESP-S01","title":"Centro abierto","level":"900–1400","response":"Estructura 1","risk":"Medio","theory":"Media","central":"Coordinar torres y alfiles cuando el centro se abre y cada tiempo cuenta.","recommendation":"Estudiar primero","summary":"Piezas clave: Torres y alfiles. Casillas y rupturas: Rey en el centro o una pieza sin defender. Error: Abrir líneas sin terminar el desarrollo.","moves":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5","whitePlans":["Torres en e1 y d1, alfiles en diagonales largas, desarrollo con tempo y control de piezas sueltas."],"blackPlans":["Actividad inmediata: ...d5, presión sobre e4 y cambios de piezas activas antes de que el espacio blanco pese."],"question":"¿Qué plan describe mejor la estructura «Centro abierto»?","options":["Torres en e1 y d1, alfiles en diagonales largas, desarrollo con tempo y control de piezas sueltas.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Torres en e1 y d1, alfiles en diagonales largas, desarrollo con tempo y control de piezas sueltas."},{"code":"ESP-S02","title":"Centro tenso","level":"900–1400","response":"Estructura 2","risk":"Medio","theory":"Media","central":"Mantener o resolver la tensión central según la actividad de las piezas.","recommendation":"Estudiar primero","summary":"Piezas clave: Todas las piezas. Casillas y rupturas: d5, e5 y c5. Error: Capturar por costumbre y liberar al rival.","moves":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7","whitePlans":["Mantener opciones, reforzar e4, completar Cbd2-f1-g3 y elegir entre d5, dxe5 o mantener la tensión."],"blackPlans":["Elegir el momento de ...exd4 o ...d5; aumentar presión sobre d4 con ...c5 y ...Ag4."],"question":"¿Qué plan describe mejor la estructura «Centro tenso»?","options":["Mantener opciones, reforzar e4, completar Cbd2-f1-g3 y elegir entre d5, dxe5 o mantener la tensión.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Mantener opciones, reforzar e4, completar Cbd2-f1-g3 y elegir entre d5, dxe5 o mantener la tensión."},{"code":"ESP-S03","title":"Centro cerrado","level":"900–1400","response":"Estructura 3","risk":"Variable","theory":"Práctica","central":"Maniobrar en un centro cerrado sin permitir el contrajuego liberador rival.","recommendation":"Incorporar después","summary":"Piezas clave: Caballos. Casillas y rupturas: f5, c5, d4. Error: Atacar sin vigilar la ruptura del rival.","moves":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7 b1d2 c7c5 d4d5 d8c7 d2f1 g7g6 f1g3","whitePlans":["Maniobrar hacia el flanco de rey, preparar Cg3-f5, a4 o g4 solo cuando el centro esté estable."],"blackPlans":["Contrajuego con ...c4, ...Af8-g7, ...a5 o ...f5; evitar una defensa pasiva."],"question":"¿Qué plan describe mejor la estructura «Centro cerrado»?","options":["Maniobrar hacia el flanco de rey, preparar Cg3-f5, a4 o g4 solo cuando el centro esté estable.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Maniobrar hacia el flanco de rey, preparar Cg3-f5, a4 o g4 solo cuando el centro esté estable."},{"code":"ESP-S04","title":"Mayoría 4 contra 3","level":"900–1400","response":"Estructura 4","risk":"Variable","theory":"Práctica","central":"Convertir la mayoría 4 contra 3 sin entregar la actividad de los alfiles negros.","recommendation":"Incorporar después","summary":"Piezas clave: Reyes y alfiles. Casillas y rupturas: d4, d-file y e4. Error: Creer que los peones doblados pierden por sí solos.","moves":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6","whitePlans":["Simplificar con criterio, crear un peón pasado con la mayoría 4 contra 3 del flanco de rey y restringir los alfiles."],"blackPlans":["Mantener piezas activas, abrir líneas para los alfiles y evitar un final puramente de peones."],"question":"¿Qué plan describe mejor la estructura «Mayoría 4 contra 3»?","options":["Simplificar con criterio, crear un peón pasado con la mayoría 4 contra 3 del flanco de rey y restringir los alfiles.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Simplificar con criterio, crear un peón pasado con la mayoría 4 contra 3 del flanco de rey y restringir los alfiles."},{"code":"ESP-S05","title":"Cadena e4-d5","level":"900–1400","response":"Estructura 5","risk":"Variable","theory":"Práctica","central":"Sostener la cadena e4-d5 y reconocer qué ruptura ataca su base.","recommendation":"Incorporar después","summary":"Piezas clave: Caballo en g3 y alfil en b3/c2. Casillas y rupturas: c6, f5, c4. Error: Empujar más peones sin mejorar las piezas.","moves":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6 c2c3 e8g8 h2h3 c6b8 d2d4 b8d7 b1d2 c7c5 d4d5 d8c7 d2f1 g7g6 f1g3","whitePlans":["Sostener e4, usar d5 como espacio y preparar un ataque donde haya más espacio."],"blackPlans":["Atacar la base con ...c6 o ...f5 y buscar cambios que reduzcan el espacio blanco."],"question":"¿Qué plan describe mejor la estructura «Cadena e4-d5»?","options":["Sostener e4, usar d5 como espacio y preparar un ataque donde haya más espacio.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Sostener e4, usar d5 como espacio y preparar un ataque donde haya más espacio."},{"code":"ESP-S06","title":"Peón aislado en d4","level":"900–1400","response":"Estructura 6","risk":"Variable","theory":"Práctica","central":"Compensar el peón aislado en d4 con actividad antes de simplificar.","recommendation":"Incorporar después","summary":"Piezas clave: Piezas activas. Casillas y rupturas: d5 y e5. Error: Defender pasivamente con todas las piezas.","moves":"e2e4 e7e5 g1f3 b8c6 f1b5 a7a6 b5a4 g8f6 e1g1 f8e7 f1e1 b7b5 a4b3 d7d6","whitePlans":["Actividad, casilla e5, torres centrales y ruptura d5 antes de un final simplificado."],"blackPlans":["Bloquear con ...Cd5, cambiar piezas y atacar d4 desde d8, c6 y f6."],"question":"¿Qué plan describe mejor la estructura «Peón aislado en d4»?","options":["Actividad, casilla e5, torres centrales y ruptura d5 antes de un final simplificado.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Actividad, casilla e5, torres centrales y ruptura d5 antes de un final simplificado."}];
const exercises=[{"id":"ESP-E01","kind":"exercise","title":"800–1400 · Cuál es la prioridad después de 1.e4 e5","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5"],"fen":"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2","sideToMove":"white","objective":"¿Cuál es la prioridad después de 1.e4 e5?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Cf3: desarrolla, ataca e5 y acerca el enroque. La respuesta natural de negras es ...Cc6 o ...Cf6; en ambos casos las blancas continúan desarrollando sin exponer la dama.","blackPlan":"Dh5 crea una amenaza pequeña, pero expone la dama a ganar tiempos; Cc3 desarrolla, aunque no presiona e5 con la misma claridad.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P01 y ESP-S01.","manualReference":"ESP-E01","tags":[],"openingId":"espanola"},{"id":"ESP-E02","kind":"exercise","title":"800–1400 · Tras 2.Cf3 Cc6, ¿por qué 3.Ab5","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6"],"fen":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3","sideToMove":"white","objective":"Tras 2.Cf3 Cc6, ¿por qué 3.Ab5?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Presiona al caballo que sostiene e5 y prepara O-O. Después de ...a6, las blancas decidirán entre conservar el alfil con Aa4 o cambiar la estructura con Axc6.","blackPlan":"Cxe5? ignora que el caballo c6 y recursos de dama permiten a negras recuperar el material.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P02 y ESP-S02.","manualReference":"ESP-E02","tags":[],"openingId":"espanola"},{"id":"ESP-E03","kind":"exercise","title":"800–1400 · Tras 3...a6, ¿conservar o cambiar","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6"],"fen":"r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4","sideToMove":"white","objective":"Tras 3...a6, ¿conservar o cambiar?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"4.Aa4 conserva la tensión y el alfil. Aa4 mantiene abiertas más opciones; Axc6 solo es preferible cuando el plan del final justifica entregar la pareja de alfiles.","blackPlan":"Axc6 no es un error, pero cambia de repertorio: si no deseas ese final, has definido la estructura sin necesidad.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P03 y ESP-S03.","manualReference":"ESP-E03","tags":[],"openingId":"espanola"},{"id":"ESP-E04","kind":"exercise","title":"800–1400 · Tras 4...Cf6, ¿cómo responder a la presión sobre e4","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6"],"fen":"r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5","sideToMove":"white","objective":"Tras 4...Cf6, ¿cómo responder a la presión sobre e4?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"5.O-O, aceptando que d4 puede recuperar actividad si ...Cxe4. O-O también conecta la torre con e1 y permite responder a ...Cxe4 con actividad central mediante d4.","blackPlan":"d3 defiende e4, pero cierra temporalmente el alfil c1; O-O mantiene más opciones y resuelve primero la seguridad del rey.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P04 y ESP-S04.","manualReference":"ESP-E04","tags":[],"openingId":"espanola"},{"id":"ESP-E05","kind":"exercise","title":"800–1400 · Qué logra 6.Te1","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7"],"fen":"r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6","sideToMove":"white","objective":"¿Qué logra 6.Te1?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Refuerza e4 con una pieza y coloca la torre en una columna central. La torre mejora sin estorbar a otras piezas y convierte la defensa de e4 en preparación activa de d4.","blackPlan":"De2 defiende, pero ocupa una casilla de la dama y no activa una torre; Te1 cumple dos funciones con una sola jugada.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P05 y ESP-S05.","manualReference":"ESP-E05","tags":[],"openingId":"espanola"},{"id":"ESP-E06","kind":"exercise","title":"800–1400 · Tras ...b5, ¿dónde va el alfil","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5"],"fen":"r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq b6 0 7","sideToMove":"white","objective":"Tras ...b5, ¿dónde va el alfil?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Ab3 mantiene la diagonal b1-h7 y presión sobre f7. Ab3 conserva presión sobre f7 y deja Ac2 como retirada futura si el centro se cierra.","blackPlan":"Ac2 es útil más adelante, pero retirarse allí inmediatamente concede un tiempo sin necesidad concreta.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P06 y ESP-S06.","manualReference":"ESP-E06","tags":[],"openingId":"espanola"},{"id":"ESP-E07","kind":"exercise","title":"800–1400 · Qué prepara c3","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6"],"fen":"r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 0 8","sideToMove":"white","objective":"¿Qué prepara c3?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"d4, además de ofrecer c2 al alfil y controlar d4. c3 es una inversión de un tiempo: no amenaza ganar material, pero hace posible un centro más fuerte y flexible.","blackPlan":"Una jugada lateral como a3 no prepara la ruptura principal y permite a negras completar el desarrollo con comodidad.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P07 y ESP-S01.","manualReference":"ESP-E07","tags":[],"openingId":"espanola"},{"id":"ESP-E08","kind":"exercise","title":"800–1400 · Cuándo es útil h3","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8"],"fen":"r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 1 9","sideToMove":"white","objective":"¿Cuándo es útil h3?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Cuando ...Ag4 clavaría Cf3 y aumentaría presión sobre e4. h3 es útil cuando impide una clavada concreta; si el centro exige acción inmediata, d4 o desarrollo pueden tener prioridad.","blackPlan":"h3 automática puede ser lenta si negras ya amenazan ...d5; la profilaxis debe responder a una idea real.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P08 y ESP-S02.","manualReference":"ESP-E08","tags":[],"openingId":"espanola"},{"id":"ESP-E09","kind":"exercise","title":"800–1400 · Qué pretende ...Cb8","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8"],"fen":"rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10","sideToMove":"white","objective":"¿Qué pretende ...Cb8?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Reorganizar a d7 y liberar c6 para un peón o pieza. Desde d7, el caballo refuerza e5 y deja c6 libre; el retroceso solo tiene sentido porque forma parte de una ruta completa.","blackPlan":"Considerar ...Cb8 una pérdida de tiempo impide ver su objetivo: ...Cbd7 refuerza el centro y mejora la coordinación.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P09 y ESP-S03.","manualReference":"ESP-E09","tags":[],"openingId":"espanola"},{"id":"ESP-E10","kind":"exercise","title":"800–1400 · Por qué d4 es la ruptura temática","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7"],"fen":"r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - - 1 11","sideToMove":"white","objective":"¿Por qué d4 es la ruptura temática?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Desafía e5 y abre líneas para piezas blancas. Antes de jugar d4, comprueba rey seguro, apoyo de e4 y actividad de las piezas que se beneficiarán de las líneas abiertas.","blackPlan":"d4 prematura puede abrir el centro cuando el rey o las piezas blancas todavía no están preparados.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P10 y ESP-S04.","manualReference":"ESP-E10","tags":[],"openingId":"espanola"},{"id":"ESP-E11","kind":"exercise","title":"800–1400 · Por qué Cbd2 y no Cc3","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7","b1d2","c7c5"],"fen":"r1bq1rk1/3nbppp/p2p1n2/1pp1p3/3PP3/1BP2N1P/PP1N1PP1/R1BQR1K1 w - c6 0 12","sideToMove":"white","objective":"¿Por qué Cbd2 y no Cc3?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"No bloquea el peón c y permite Cf1-g3. Cbd2 mantiene libre el peón c y conserva la estructura típica; Cc3 es más directa, pero reduce flexibilidad.","blackPlan":"Cc3 bloquea el peón c y dificulta el esquema c3-d4; no es mala, pero conduce a otro tipo de posición.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P11 y ESP-S05.","manualReference":"ESP-E11","tags":[],"openingId":"espanola"},{"id":"ESP-E12","kind":"exercise","title":"800–1400 · Tras ...c5, ¿qué debe evaluarse","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7","b1d2","c7c5","d4d5","d8c7","d2f1","g7g6","f1g3"],"fen":"r1b2rk1/2qnbp1p/p2p1np1/1ppPp3/4P3/1BP2NNP/PP3PP1/R1BQR1K1 b - - 1 14","sideToMove":"black","objective":"Tras ...c5, ¿qué debe evaluarse?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Mantener tensión, cerrar con d5 o capturar; cada opción crea otra estructura. d5 gana espacio y cierra; dxe5 abre líneas; mantener tensión conserva opciones. La elección depende de qué piezas estén mejor colocadas.","blackPlan":"Capturar o cerrar por reflejo elimina opciones sin comprobar quién se beneficia de la nueva estructura.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P12 y ESP-S06.","manualReference":"ESP-E12","tags":[],"openingId":"espanola"},{"id":"ESP-E13","kind":"exercise","title":"800–1400 · En centro cerrado, ¿qué pieza suele ganar valor","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5"],"fen":"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2","sideToMove":"white","objective":"En centro cerrado, ¿qué pieza suele ganar valor?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"El caballo, porque puede ocupar casillas fuertes y saltar sobre la cadena. El caballo puede saltar sobre las cadenas; el alfil necesita rupturas para recuperar alcance.","blackPlan":"Usar un alfil como si el centro estuviera abierto puede hacerlo golpear contra su propia cadena de peones.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P01 y ESP-S01.","manualReference":"ESP-E13","tags":[],"openingId":"espanola"},{"id":"ESP-E14","kind":"exercise","title":"800–1400 · Cuál es la ruptura liberadora negra","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6"],"fen":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3","sideToMove":"white","objective":"¿Cuál es la ruptura liberadora negra?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"...d5, que desafía e4, libera el alfil c8 y puede igualar espacio. Si ...d5 funciona sin concesiones, negras liberan el alfil c8 y reducen la presión blanca sobre e5.","blackPlan":"Una maniobra lenta que ignore ...d5 permite a negras liberar su posición y neutralizar la presión española.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P02 y ESP-S02.","manualReference":"ESP-E14","tags":[],"openingId":"espanola"},{"id":"ESP-E15","kind":"exercise","title":"800–1400 · Por qué no capturar e5 por reflejo","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6"],"fen":"r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4","sideToMove":"white","objective":"¿Por qué no capturar e5 por reflejo?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Porque la recaptura y el recurso ...Dd4 pueden recuperar el peón con amenazas. Tras Axc6 dxc6 Cxe5, recursos como ...Dd4 pueden atacar rey y caballo; por eso hay que calcular la secuencia completa.","blackPlan":"Contar solo atacantes y defensores de e5 es insuficiente: los jaques y ataques dobles de la dama cambian el cálculo.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P03 y ESP-S03.","manualReference":"ESP-E15","tags":[],"openingId":"espanola"},{"id":"ESP-E16","kind":"exercise","title":"800–1400 · Reconoce la peor pieza blanca en la línea cerrada.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6"],"fen":"r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5","sideToMove":"white","objective":"Reconoce la peor pieza blanca en la línea cerrada.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"El caballo b1; suele mejorar por d2-f1-g3. La ruta d2-f1-g3 mejora el caballo sin debilitar el centro y lo lleva a casillas desde las que apoya e4, f5 y h5.","blackPlan":"Mover la dama o un peón lateral no resuelve la falta de actividad del caballo b1.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P04 y ESP-S04.","manualReference":"ESP-E16","tags":[],"openingId":"espanola"},{"id":"ESP-E17","kind":"exercise","title":"800–1400 · Qué cambia tras d5","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7"],"fen":"r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6","sideToMove":"white","objective":"¿Qué cambia tras d5?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"El centro se cierra; disminuyen las líneas y aumentan las maniobras y rupturas laterales. Con el centro cerrado, el plan pasa de abrir líneas a mejorar piezas, ganar casillas y preparar rupturas laterales.","blackPlan":"Abrir líneas imaginarias con torres o alfiles no funciona mientras la cadena central siga bloqueada.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P05 y ESP-S05.","manualReference":"ESP-E17","tags":[],"openingId":"espanola"},{"id":"ESP-E18","kind":"exercise","title":"800–1400 · Cómo responde el negro al caballo g3","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5"],"fen":"r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq b6 0 7","sideToMove":"white","objective":"¿Cómo responde el negro al caballo g3?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Controla f5 con ...g6, considera ...Ch5 y busca contrajuego central. ...g6 controla f5; ...Ch5 puede cambiar el caballo; y ...d5 sigue siendo la respuesta central que blancas deben vigilar.","blackPlan":"Esperar pasivamente permite Cf5 o Ch5 y concede al blanco la iniciativa sin contrajuego.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P06 y ESP-S06.","manualReference":"ESP-E18","tags":[],"openingId":"espanola"},{"id":"ESP-E19","kind":"exercise","title":"800–1400 · Qué gana el negro con ...a6 y ...b5","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6"],"fen":"r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 0 8","sideToMove":"white","objective":"¿Qué gana el negro con ...a6 y ...b5?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Espacio y tiempos sobre el alfil; a cambio crea casillas y peones avanzados. La expansión gana espacio y tiempos, pero también fija peones que pueden convertirse en objetivos si negras retrasan el desarrollo.","blackPlan":"Expandirse con peones sin desarrollar piezas deja casillas débiles y puede convertir el espacio ganado en objetivos.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P07 y ESP-S01.","manualReference":"ESP-E19","tags":[],"openingId":"espanola"},{"id":"ESP-E20","kind":"exercise","title":"800–1400 · Cuándo cambiar Axc6","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8"],"fen":"r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 1 9","sideToMove":"white","objective":"¿Cuándo cambiar Axc6?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Cuando deseas la estructura del Cambio o existe una razón táctica. El cambio es correcto cuando la estructura resultante favorece el plan blanco o cuando existe una justificación táctica concreta.","blackPlan":"Cambiar solo porque el caballo está clavado confunde una relación táctica temporal con una decisión estructural permanente.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P08 y ESP-S02.","manualReference":"ESP-E20","tags":[],"openingId":"espanola"},{"id":"ESP-E21","kind":"exercise","title":"800–1400 · En la Berlinesa, ¿qué idea práctica sigue a ...Cxe4","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8"],"fen":"rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10","sideToMove":"white","objective":"En la Berlinesa, ¿qué idea práctica sigue a ...Cxe4?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"d4: abre el centro y obliga al caballo a definirse. d4 ataca el soporte central y abre líneas; perseguir al caballo sin cambiar el centro puede permitir que se consolide.","blackPlan":"Te1 por sí sola puede no recuperar el peón; d4 cuestiona inmediatamente el centro y obliga al caballo a decidir.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P09 y ESP-S03.","manualReference":"ESP-E21","tags":[],"openingId":"espanola"},{"id":"ESP-E22","kind":"exercise","title":"800–1400 · Contra 3...f5, ¿qué enfoque es práctico","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7"],"fen":"r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - - 1 11","sideToMove":"white","objective":"Contra 3...f5, ¿qué enfoque es práctico?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"d3, sostener e4, enrocar y atacar el retraso de desarrollo. d3 y O-O reducen el riesgo táctico; aceptar el gambito exige conocer variantes concretas que no son necesarias para este repertorio.","blackPlan":"Aceptar f5 sin cálculo puede abrir líneas contra el rey blanco antes de completar el desarrollo.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P10 y ESP-S04.","manualReference":"ESP-E22","tags":[],"openingId":"espanola"},{"id":"ESP-E23","kind":"exercise","title":"800–1400 · Qué candidato priorizar si existe ...d5 inmediato","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7","b1d2","c7c5"],"fen":"r1bq1rk1/3nbppp/p2p1n2/1pp1p3/3PP3/1BP2N1P/PP1N1PP1/R1BQR1K1 w - c6 0 12","sideToMove":"white","objective":"¿Qué candidato priorizar si existe ...d5 inmediato?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Una jugada que controle o responda a ...d5, antes que una maniobra lenta. Cuando ...d5 es inmediato, una jugada lenta puede perder el momento; primero hay que decidir cómo responder a la ruptura.","blackPlan":"Cf1 o h3 pueden ser buenas, pero son demasiado lentas si ...d5 cambia la posición en la jugada siguiente.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P11 y ESP-S05.","manualReference":"ESP-E23","tags":[],"openingId":"espanola"},{"id":"ESP-E24","kind":"exercise","title":"800–1400 · Qué significa mantener tensión","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7","b1d2","c7c5","d4d5","d8c7","d2f1","g7g6","f1g3"],"fen":"r1b2rk1/2qnbp1p/p2p1np1/1ppPp3/4P3/1BP2NNP/PP3PP1/R1BQR1K1 b - - 1 14","sideToMove":"black","objective":"¿Qué significa mantener tensión?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"No capturar hasta saber a quién favorece la estructura resultante. Mantener tensión significa posponer la captura con una razón: desarrollar, mejorar una pieza o provocar una concesión.","blackPlan":"No capturar sin plan tampoco es virtud: la tensión debe conservarse porque mejora tus opciones, no por indecisión.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P12 y ESP-S06.","manualReference":"ESP-E24","tags":[],"openingId":"espanola"},{"id":"ESP-E25","kind":"exercise","title":"800–1400 · Cómo mejorar el alfil c1","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5"],"fen":"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2","sideToMove":"white","objective":"¿Cómo mejorar el alfil c1?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Tras d4, puede ir a e3, g5 o d2 según la estructura. Ae3 suele apoyar d4 y Dd2; Ag5 aumenta presión; Ad2 conecta torres. La estructura decide qué diagonal es útil.","blackPlan":"Desarrollar el alfil antes de saber qué ocurre en el centro puede obligarlo a perder tiempos o dejarlo mal colocado.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P01 y ESP-S01.","manualReference":"ESP-E25","tags":[],"openingId":"espanola"},{"id":"ESP-E26","kind":"exercise","title":"800–1400 · Qué piezas mejoran en centro abierto","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6"],"fen":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3","sideToMove":"white","objective":"¿Qué piezas mejoran en centro abierto?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Torres y alfiles; necesitan líneas y rey seguro. Torres y alfiles aprovechan columnas y diagonales; por eso el rey debe estar seguro antes de abrir el centro.","blackPlan":"Maniobrar lentamente con caballos desaprovecha columnas y diagonales que exigen actividad inmediata.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P02 y ESP-S02.","manualReference":"ESP-E26","tags":[],"openingId":"espanola"},{"id":"ESP-E27","kind":"exercise","title":"800–1400 · Qué piezas mejoran en centro cerrado","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6"],"fen":"r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4","sideToMove":"white","objective":"¿Qué piezas mejoran en centro cerrado?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Caballos y maniobras; los alfiles esperan rupturas. Los caballos encuentran puestos estables detrás de las cadenas; los alfiles necesitan una ruptura para no quedar limitados.","blackPlan":"Abrir un flanco con peones sin coordinación puede crear debilidades permanentes antes de que las piezas lleguen.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P03 y ESP-S03.","manualReference":"ESP-E27","tags":[],"openingId":"espanola"},{"id":"ESP-E28","kind":"exercise","title":"800–1400 · En la Variante del Cambio, ¿qué compensa los peones doblados negros","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6"],"fen":"r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5","sideToMove":"white","objective":"En la Variante del Cambio, ¿qué compensa los peones doblados negros?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"La pareja de alfiles, columna d y actividad. La pareja de alfiles, la columna d y el desarrollo fluido permiten a negras compensar la debilidad estática de los peones doblados.","blackPlan":"Juzgar solo los peones doblados ignora los factores dinámicos que permiten a negras jugar activamente.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P04 y ESP-S04.","manualReference":"ESP-E28","tags":[],"openingId":"espanola"},{"id":"ESP-E29","kind":"exercise","title":"800–1400 · Cuándo simplificar en la Variante del Cambio","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7"],"fen":"r1bqk2r/1pppbppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQ1RK1 w kq - 4 6","sideToMove":"white","objective":"¿Cuándo simplificar en la Variante del Cambio?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Cuando el final mantiene la mayoría blanca y reduce la actividad de los alfiles. Simplificar favorece a blancas si reduce la actividad de los alfiles negros y conserva la mayoría del flanco de rey.","blackPlan":"Cambiar las piezas activas blancas o permitir que sobrevivan ambos alfiles negros puede eliminar la ventaja estructural.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P05 y ESP-S05.","manualReference":"ESP-E29","tags":[],"openingId":"espanola"},{"id":"ESP-E30","kind":"exercise","title":"800–1400 · Qué busca ...c5 contra d4","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5"],"fen":"r1bqk2r/2ppbppp/p1n2n2/1p2p3/B3P3/5N2/PPPP1PPP/RNBQR1K1 w kq b6 0 7","sideToMove":"white","objective":"¿Qué busca ...c5 contra d4?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Atacar la base central y ganar espacio. ...c5 ataca d4 y disputa espacio; a cambio puede ceder d5 como puesto avanzado si el peón blanco consigue avanzar.","blackPlan":"Responder de forma pasiva a ...c5 permite que negras ataquen la base d4 sin pagar un precio posicional.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P06 y ESP-S06.","manualReference":"ESP-E30","tags":[],"openingId":"espanola"},{"id":"ESP-E31","kind":"exercise","title":"800–1400 · Qué busca ...c4 en centro cerrado","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6"],"fen":"r1bqk2r/2p1bppp/p1np1n2/1p2p3/4P3/1B3N2/PPPP1PPP/RNBQR1K1 w kq - 0 8","sideToMove":"white","objective":"¿Qué busca ...c4 en centro cerrado?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Ganar espacio y expulsar al alfil b3, creando contrajuego en dama. ...c4 gana espacio y puede expulsar Ab3; blancas deben decidir si conservar el alfil o reaccionar en el centro o el flanco de rey.","blackPlan":"Retirar automáticamente el alfil puede perder el momento de golpear en el centro o iniciar juego en el otro flanco.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P07 y ESP-S01.","manualReference":"ESP-E31","tags":[],"openingId":"espanola"},{"id":"ESP-E32","kind":"exercise","title":"800–1400 · Qué busca ...f5","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8"],"fen":"r1bq1rk1/2p1bppp/p1np1n2/1p2p3/4P3/1BP2N2/PP1P1PPP/RNBQR1K1 w - - 1 9","sideToMove":"white","objective":"¿Qué busca ...f5?","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Atacar e4 y abrir el flanco de rey. ...f5 presiona e4 y abre líneas, pero también puede debilitar e6, g6 y el propio rey negro.","blackPlan":"Avanzar peones del rey sin calcular puede abrir líneas que favorezcan a las piezas blancas.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P08 y ESP-S02.","manualReference":"ESP-E32","tags":[],"openingId":"espanola"},{"id":"ESP-E33","kind":"exercise","title":"800–1400 · Compara h3 y d4.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8"],"fen":"rnbq1rk1/2p1bppp/p2p1n2/1p2p3/4P3/1BP2N1P/PP1P1PP1/RNBQR1K1 w - - 1 10","sideToMove":"white","objective":"Compara h3 y d4.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"d4 cambia el centro; h3 es profilaxis. La urgencia central decide. d4 cambia la estructura y exige cálculo; h3 es profilaxis. La urgencia del centro determina cuál debe jugarse primero.","blackPlan":"Tratar h3 y d4 como equivalentes oculta que una es preventiva y la otra transforma el centro.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P09 y ESP-S03.","manualReference":"ESP-E33","tags":[],"openingId":"espanola"},{"id":"ESP-E34","kind":"exercise","title":"800–1400 · Compara Cbd2 y a4.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7"],"fen":"r1bq1rk1/2pnbppp/p2p1n2/1p2p3/3PP3/1BP2N1P/PP3PP1/RNBQR1K1 w - - 1 11","sideToMove":"white","objective":"Compara Cbd2 y a4.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Cbd2 mejora la peor pieza; a4 cuestiona b5. Elige según amenaza y estructura. Cbd2 mejora una pieza; a4 cuestiona la cadena ...a6-b5. Elige según si el problema principal es coordinación o espacio.","blackPlan":"Una jugada temática no es automáticamente prioritaria: primero debe responder al problema concreto de la posición.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P10 y ESP-S04.","manualReference":"ESP-E34","tags":[],"openingId":"espanola"},{"id":"ESP-E35","kind":"exercise","title":"800–1400 · Compara d5 y dxe5.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7","b1d2","c7c5"],"fen":"r1bq1rk1/3nbppp/p2p1n2/1pp1p3/3PP3/1BP2N1P/PP1N1PP1/R1BQR1K1 w - c6 0 12","sideToMove":"white","objective":"Compara d5 y dxe5.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"d5 gana espacio y cierra; dxe5 abre líneas. Elige según piezas y rey. d5 cierra y gana espacio; dxe5 abre líneas. La mejor opción depende de qué bando tiene piezas mejor preparadas para el nuevo centro.","blackPlan":"Elegir por preferencia estética y no por actividad de piezas puede conducir a una estructura favorable al rival.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P11 y ESP-S05.","manualReference":"ESP-E35","tags":[],"openingId":"espanola"},{"id":"ESP-E36","kind":"exercise","title":"800–1400 · Tablero virtual: reproduce hasta 8.c3.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7","b1d2","c7c5","d4d5","d8c7","d2f1","g7g6","f1g3"],"fen":"r1b2rk1/2qnbp1p/p2p1np1/1ppPp3/4P3/1BP2NNP/PP3PP1/R1BQR1K1 b - - 1 14","sideToMove":"black","objective":"Tablero virtual: reproduce hasta 8.c3.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Explica cada pareja: intención blanca, respuesta negra y cambio estructural. Detente después de cada pareja de jugadas y explica qué pieza mejoró, qué casilla cambió y qué plan quedó preparado.","blackPlan":"Reproducir de memoria sin verbalizar las intenciones no entrena reconocimiento ni transferencia a partidas reales.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P12 y ESP-S06.","manualReference":"ESP-E36","tags":[],"openingId":"espanola"},{"id":"ESP-E37","kind":"exercise","title":"800–1400 · Tablero virtual: reproduce la ruta Cbd2-f1-g3.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5"],"fen":"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2","sideToMove":"white","objective":"Tablero virtual: reproduce la ruta Cbd2-f1-g3.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"En cada salto, explica qué casillas gana y qué deja de controlar. En d2 el caballo apoya e4; en f1 se reorganiza; en g3 controla f5 y h5. Si el centro se abre, la maniobra puede ser demasiado lenta.","blackPlan":"Ejecutar la maniobra con el centro a punto de abrirse puede dejar al caballo fuera del juego durante varias jugadas.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P01 y ESP-S01.","manualReference":"ESP-E37","tags":[],"openingId":"espanola"},{"id":"ESP-E38","kind":"exercise","title":"800–1400 · Tablero virtual: practica la Berlinesa con 4.O-O.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6"],"fen":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3","sideToMove":"white","objective":"Tablero virtual: practica la Berlinesa con 4.O-O.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Tras ...Cxe4, usa d4 para crear actividad y compara respuestas. Tras ...Cxe4, d4 busca actividad inmediata. El objetivo de la práctica es reconocer el principio, no memorizar una larga variante.","blackPlan":"Memorizar más movimientos sin entender d4 crea una preparación frágil que desaparece ante la primera desviación.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P02 y ESP-S02.","manualReference":"ESP-E38","tags":[],"openingId":"espanola"},{"id":"ESP-E39","kind":"exercise","title":"800–1400 · Tablero virtual: practica Axc6 dxc6.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6"],"fen":"r1bqkbnr/1ppp1ppp/p1n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 4","sideToMove":"white","objective":"Tablero virtual: practica Axc6 dxc6.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Identifica la mayoría del flanco de rey y la pareja de alfiles negra. Blancas buscan una mayoría útil en el final; negras compensan con pareja de alfiles y actividad. Cada cambio debe evaluarse desde ambos lados.","blackPlan":"Cambiar todas las piezas automáticamente puede conservar los alfiles negros activos o perder la mayoría favorable.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P03 y ESP-S03.","manualReference":"ESP-E39","tags":[],"openingId":"espanola"},{"id":"ESP-E40","kind":"exercise","title":"800–1400 · Revisión global: construye tu plan en una posición desconocida.","chapter":"Parte XIII / Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6"],"fen":"r1bqkb1r/1ppp1ppp/p1n2n2/4p3/B3P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 2 5","sideToMove":"white","objective":"Revisión global: construye tu plan en una posición desconocida.","level":{"label":"800–1400","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Observa amenaza, clasifica centro, mejora peor pieza, compara dos candidatas y calcula la mejor respuesta rival. El plan correcto debe responder a la amenaza rival, encajar con la estructura y mejorar la pieza menos activa antes de buscar una combinación.","blackPlan":"Recordar una jugada de apertura sin justificarla no sirve en una posición nueva; el método debe producir una decisión razonada.","teachingContinuation":"Comparar al menos dos candidatas, anticipar la mejor respuesta rival y revisar ESP-P04 y ESP-S04.","manualReference":"ESP-E40","tags":[],"openingId":"espanola"}];
const games=[{"code":"ESP-M01","title":"Construcción clásica en la Morphy","subtitle":"Blancas didácticas — Negras didácticas","moves":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","d7d6","c2c3","e8g8","h2h3","c6b8","d2d4","b8d7","b1d2","c8b7","b3c2","f8e8","d2f1","e7f8","f1g3","g7g6","a2a4","c7c5","d4d5","c5c4","c1e3","d7c5","d1d2","d8c7","e3h6"],"san":["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","d6","c3","O-O","h3","Nb8","d4","Nbd7","Nbd2","Bb7","Bc2","Re8","Nf1","Bf8","Ng3","g6","a4","c5","d5","c4","Be3","Nc5","Qd2","Qc7","Bh6"],"comments":{"0":"Ocupa el centro, controla d5 y f5 y abre líneas para dama y alfil.","1":"Las negras responden en el centro y reclaman las mismas casillas.","2":"Desarrolla con amenaza sobre e5 y acerca el enroque.","3":"Defiende e5 desarrollando, controla d4 y obliga a las blancas a justificar cualquier captura temprana en el centro.","4":"Presiona indirectamente e5 al atacar el caballo que lo sostiene. No gana un peón de inmediato, pero sí condiciona la estructura negra.","5":"Pregunta al alfil y prepara ...b5, ganando espacio en el flanco de dama.","6":"Conserva el alfil de casillas blancas y mantiene la presión estratégica.","7":"Desarrolla atacando e4, acelera el enroque y pregunta a las blancas cómo sostendrán el centro sin perder tiempos.","8":"El rey queda seguro y la torre se activa antes de discutir el centro.","9":"Desarrolla con modestia, prepara el enroque y evita que una futura clavada sobre f6 condicione la defensa de e5.","10":"Refuerza e4 y prepara d4 en mejores condiciones.","11":"Gana espacio y obliga al alfil a una casilla nueva.","12":"Sigue apuntando a f7 y deja libre la casilla a4 para una posible torre o dama.","13":"Sostiene e5, abre el alfil c8 y deja ...d5 como ruptura liberadora que todavía requiere preparación.","14":"Prepara d4 y construye una base central más sólida.","15":"El negro completa su seguridad y puede maniobrar con libertad.","16":"Evita ...Ag4 y da al rey una casilla de aire.","17":"Recoloca el caballo para apoyar ...Cbd7 y ...c5 o ...d5.","18":"La ruptura temática se produce cuando el blanco ya está coordinado.","19":"Desarrolla la pieza peor colocada y refuerza e5.","20":"Apoya e4, mantiene flexible el peón c y abre la ruta del caballo hacia f1-g3.","21":"El alfil entra en juego por la gran diagonal, aumenta la presión sobre e4 y conecta mejor las piezas negras.","22":"Reubica el alfil hacia b1-h7, donde puede apoyar un ataque futuro sin estorbar la maniobra del caballo.","23":"Apoya e5, mejora la torre y prepara respuestas centrales contra d4 o una apertura de la columna e.","24":"La maniobra típica comienza. El caballo sale de d2 para buscar g3.","25":"Reorganiza el alfil hacia una función defensiva, despeja e7 y prepara una coordinación más flexible.","26":"El caballo ya influye en e4, f5 y h5; su mejora solo es útil si las blancas siguen vigilando el centro.","27":"Controla f5, limita el caballo blanco y prepara un esquema sólido sin renunciar al contrajuego central.","28":"Pregunta al flanco de dama negro y limita ...b4.","29":"Busca contrajuego central y en el flanco de dama, atacando la base d4 y cuestionando el espacio blanco.","30":"Gana espacio y fija la estructura, pero también define casillas que ambos bandos podrán atacar más tarde.","31":"Cierra el ala de dama y crea una casilla para el caballo en c5.","32":"Desarrolla el alfil con idea de Dd2 y Ah6, conectando el plan de piezas con la seguridad del rey negro.","33":"El caballo se activa en c5, ataca e4 y b3 y muestra cómo negras convierten su contrajuego en actividad concreta.","34":"Conecta las torres, prepara Ah6 o Ch2-g4 y obliga a negras a cuidar las casillas oscuras del rey.","35":"Defiende el flanco de rey, sostiene el caballo c5 y mantiene opciones de contrajuego en ambos sectores.","36":"Cambia un defensor del rey negro y refuerza el control de las casillas oscuras."}},{"code":"ESP-M02","title":"Variante del Cambio y final comprensible","subtitle":"Blancas didácticas — Negras didácticas","moves":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5c6","d7c6","e1g1","f7f6","d2d4","e5d4","d1d4","d8d4","f3d4","c8d7","b1c3","e8c8","c1e3","f8d6","d4b3","g8e7","a1d1","h8e8","f2f3","e7g6","b3c5","d7e6","c5e6","e8e6","g2g3","g6e5","g1g2"],"san":["e4","e5","Nf3","Nc6","Bb5","a6","Bxc6","dxc6","O-O","f6","d4","exd4","Qxd4","Qxd4","Nxd4","Bd7","Nc3","O-O-O","Be3","Bd6","Nb3","Ne7","Rad1","Rhe8","f3","Ng6","Nc5","Be6","Nxe6","Rxe6","g3","Ne5","Kg2"],"comments":{"0":"Ocupa el centro, controla d5 y f5 y abre líneas para la dama y el alfil de f1. La jugada también asume la responsabilidad de sostener e4.","1":"Responde en el mismo sector, controla d4 y libera el alfil de f8. La simetría no es pasiva: las negras disputan inmediatamente las casillas centrales.","2":"Desarrolla el caballo hacia su casilla natural, ataca e5 y facilita el enroque. Antes de capturar, las blancas deben comprobar cómo recuperaría el rival.","3":"Defiende e5 desarrollando una pieza, controla d4 y evita que las blancas ocupen el centro sin oposición.","4":"Desarrolla el alfil con una presión indirecta sobre e5: el objetivo inmediato es el caballo c6, no el peón. También deja preparado el enroque.","5":"Obliga al alfil a decidir su futuro y prepara ...b5. A cambio, las negras invierten un tiempo de peón y crean casillas que deberán vigilar.","6":"El blanco elige una decisión estructural: cambia la pareja de alfiles por una mayoría potencial en el flanco de rey.","7":"Las negras aceptan peones doblados a cambio de pareja de alfiles y columnas abiertas.","8":"Pone el rey a salvo y activa la torre de f1 antes de abrir más líneas. La seguridad del rey permite considerar simplificaciones sin riesgos tácticos inmediatos.","9":"Sostiene e5 y prepara un desarrollo sin tácticas inmediatas sobre e5.","10":"El blanco usa su libertad central antes de que las negras se organicen por completo.","11":"Abre líneas y evita quedar restringido; a cambio, las negras deben demostrar que su actividad compensa la estructura.","12":"Recupera el peón, centraliza la dama y propone cambios.","13":"Aceptan el cambio de damas porque confían en la pareja de alfiles y en la actividad de sus piezas para compensar la estructura dañada.","14":"Recaptura desarrollando, centraliza el caballo y orienta la partida hacia un final donde la estructura importa.","15":"Desarrolla el alfil, conecta con el enroque largo y prepara una coordinación activa antes de defender peones.","16":"Apoya e4, controla d5 y b5 y reduce la libertad de los alfiles negros.","17":"Las negras colocan el rey de forma activa y las torres se coordinan.","18":"Desarrolla con idea de Tad1 y control central.","19":"El alfil negro usa la diagonal larga y prepara Ce7-g6.","20":"Reubica el caballo hacia c5 o a5, buscando una casilla activa en lugar de defender pasivamente.","21":"Desarrolla el caballo, conecta las piezas y prepara Cg6 para aumentar la actividad sobre e5 y f4.","22":"La torre se activa en la columna d, presiona d6 y coordina con las piezas centrales. En un final, la actividad concreta vale más que una ventaja estructural abstracta.","23":"Las negras responden con actividad: la torre ocupa una columna útil, apoya e5 y evita quedar reducidas a una defensa pasiva de los peones doblados.","24":"Sostiene e4 y prepara un avance del flanco de rey en el final.","25":"El caballo se dirige a e5, f4 o h4 y crea contrajuego contra la mayoría blanca. Las negras deben activar piezas antes de que el final favorezca la estructura blanca.","26":"Aprovecha una casilla fuerte en c5 y obliga a negras a decidir si toleran la pieza o la cambian.","27":"Expulsa una pieza activa y coordina los alfiles.","28":"Cambia una pieza activa enemiga y clarifica la posición.","29":"La torre recupera con actividad, ocupa una columna útil y evita que la recaptura sea meramente defensiva.","30":"Plan de final: rey seguro, casillas para piezas y mayoría lista para avanzar.","31":"Centraliza el caballo, ataca casillas del flanco de rey y obliga al blanco a vigilar recursos tácticos antes de avanzar su mayoría.","32":"El rey se acerca al centro en previsión del final."}},{"code":"ESP-M03","title":"Repertorio práctico contra la Berlinesa","subtitle":"Blancas didácticas — Negras didácticas","moves":["e2e4","e7e5","g1f3","b8c6","f1b5","g8f6","d2d3","f8c5","e1g1","e8g8","c2c3","d7d6","f1e1","a7a6","b5a4","b7b5","a4b3","c5b6","h2h3","h7h6","b1d2","f8e8","d2f1","c8e6","f1g3","d8d7","d3d4","e6b3","a2b3","e5d4","c3d4"],"san":["e4","e5","Nf3","Nc6","Bb5","Nf6","d3","Bc5","O-O","O-O","c3","d6","Re1","a6","Ba4","b5","Bb3","Bb6","h3","h6","Nbd2","Re8","Nf1","Be6","Ng3","Qd7","d4","Bxb3","axb3","exd4","cxd4"],"comments":{"0":"Ocupa el centro, abre la dama y el alfil y prepara un desarrollo rápido. La estructura aún es simétrica, pero el blanco marca el ritmo.","1":"Las negras responden en el centro, controlan d4 y liberan el alfil de f8. La posición sigue equilibrada y ambos bandos deben desarrollar con precisión.","2":"Desarrolla el caballo hacia su casilla natural, ataca e5 y facilita el enroque. Antes de capturar, las blancas deben comprobar cómo recuperaría el rival.","3":"Defiende e5 con desarrollo, controla d4 y prepara ...Cf6 o ...a6 según el esquema elegido.","4":"El alfil vuelve a presionar indirectamente e5. La defensa cambiará, pero la relación entre Ab5, Cc6 y el peón e5 sigue siendo el hilo conductor.","5":"La Berlinesa ataca e4, acelera el desarrollo y busca una estructura sólida con pocas debilidades.","6":"Repertorio práctico del cuaderno: mantiene el centro, evita teoría excesiva y prepara desarrollo armonioso.","7":"El negro desarrolla el alfil a una diagonal activa.","8":"El blanco enroca antes de abrir el centro. La torre de f1 entra en juego y el rey deja de ser un objetivo táctico.","9":"Las negras completan la seguridad del rey y quedan listas para jugar ...d6, ...Te8 o ...a6 sin temor a una apertura inmediata del centro.","10":"Sostiene d4 y da una casilla de retirada al alfil si hiciera falta.","11":"Refuerza e5 y anuncia una estructura más estable.","12":"Apoya e4 y recuerda a los esquemas cerrados de la Morphy.","13":"Gana espacio, pregunta al alfil y prepara ...b5; la expansión es útil porque está conectada con el desarrollo.","14":"Mantiene el alfil de casillas blancas, conserva la presión estratégica y obliga a las negras a gastar otro tiempo si quieren ganar espacio con ...b5.","15":"Gana espacio y obliga al alfil a retirarse. La expansión es útil, pero deja casillas como a6 y c6 que pueden convertirse en objetivos si el centro se abre.","16":"El alfil se conserva en una diagonal útil, mira f7 y puede retirarse a c2 si la estructura se cierra.","17":"El alfil conserva su diagonal, protege puntos centrales y evita ser cambiado sin necesidad. Las negras mantienen una pieza activa para el futuro medio juego.","18":"Evita ...Ag4, da aire al rey y reduce una posible clavada sobre el caballo f3.","19":"Evita Ag5 y da una casilla de escape al rey, pero también crea un punto de contacto en g6. La jugada es útil porque responde a un motivo concreto.","20":"Desarrolla la peor pieza y abre la ruta hacia f1-g3.","21":"Refuerza e5, mejora la torre y prepara respuestas centrales cuando las blancas jueguen d4.","22":"El caballo abandona una casilla pasiva y se dirige a g3, desde donde apoyará e4 y controlará f5 y h5.","23":"Desarrolla con idea de cambiar el alfil español o controlar c4.","24":"La maniobra culmina: el caballo sostiene e4, presiona f5 y puede colaborar en un ataque solo si el centro está controlado.","25":"Conecta torres y prepara ...d5 si la posición lo permite.","26":"El blanco abre el centro después de completar desarrollo, proteger e4 y mejorar el caballo. Esa preparación convierte d4 en una ruptura sana, no en un gesto automático.","27":"Las negras cambian una pieza activa antes de abrir más líneas.","28":"Recaptura manteniendo mayoría central y columna a potencial.","29":"Reduce la tensión, abre líneas y obliga a ambos bandos a pasar de la maniobra al cálculo concreto.","30":"El blanco obtiene un centro claro y piezas coordinadas para el medio juego."}},{"code":"ESP-M04","title":"Española Abierta · actividad inmediata","subtitle":"La captura en e4 abre el centro y obliga a desarrollar con precisión.","moves":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f6e4","d2d4","b7b5","a4b3","d7d5","d4e5","c8e6","c2c3","f8c5","b1d2","e8g8","b3c2","f7f5","e5f6","d8f6","d2b3","c5b6"],"san":["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Nxe4","d4","b5","Bb3","d5","dxe5","Be6","c3","Bc5","Nbd2","O-O","Bc2","f5","exf6","Qxf6","Nb3","Bb6"],"comments":{"3":"...a6 define la estructura Morphy antes de abrir el centro.","9":"...Cxe4 define la Española Abierta.","14":"dxe5 obliga a las negras a demostrar su actividad.","21":"...f5 sostiene el caballo y gana espacio.","25":"El caballo de b3 y el alfil de b6 compiten por casillas centrales."}},{"code":"ESP-M05","title":"Schliemann · responder al contragolpe","subtitle":"El ataque ...f5 exige desarrollo y cálculo, no defensa automática.","moves":["e2e4","e7e5","g1f3","b8c6","f1b5","f7f5","d2d3","g8f6","e1g1","d7d6","b1c3","f8e7","f1e1","e8g8","b5c6","b7c6","d3d4","e5d4","f3d4","f5e4","c3e4","f6e4","e1e4","c8f5"],"san":["e4","e5","Nf3","Nc6","Bb5","f5","d3","Nf6","O-O","d6","Nc3","Be7","Re1","O-O","Bxc6","bxc6","d4","exd4","Nxd4","fxe4","Nxe4","Nxe4","Rxe4","Bf5"],"comments":{"3":"Cc6 sostiene e5, pero ...f5 cambia inmediatamente la lucha.","5":"...f5 disputa e4 desde el primer momento.","14":"Axc6 acepta una estructura asimétrica para reducir la presión.","19":"...fxe4 abre líneas y cambia el carácter de la posición.","23":"...Af5 desarrolla atacando la torre activa."}},{"code":"ESP-M06","title":"Ruptura ...d5 y transición","subtitle":"Ambos bandos deben cambiar de plan cuando se abre el centro cerrado.","moves":["e2e4","e7e5","g1f3","b8c6","f1b5","a7a6","b5a4","g8f6","e1g1","f8e7","f1e1","b7b5","a4b3","e8g8","h2h3","c8b7","d2d3","d7d6","c2c3","f8e8","b1d2","e7f8","d2f1","h7h6","f1g3","d6d5","e4d5","f6d5","d3d4","e5d4","e1e8","d8e8","c3d4"],"san":["e4","e5","Nf3","Nc6","Bb5","a6","Ba4","Nf6","O-O","Be7","Re1","b5","Bb3","O-O","h3","Bb7","d3","d6","c3","Re8","Nbd2","Bf8","Nf1","h6","Ng3","d5","exd5","Nxd5","d4","exd4","Rxe8","Qxe8","cxd4"],"comments":{"3":"...a6 inicia la construcción de la Española cerrada.","20":"Cbd2 inicia la maniobra española.","25":"...d5 es la ruptura liberadora principal.","29":"...exd4 transforma la estructura y abre la columna e.","32":"cxd4 reconstruye un centro jugable tras la simplificación."}}];
const moveExplanations={"e2e4":"Tras 1.e4 e5, ambos bandos reclaman espacio central y abren líneas para dama y alfil. Continuación recomendada: Cf3. Respuesta esperada: Cc6. Error típico: Mover la dama para atacar e5: crea una amenaza aparente, pero pierde tiempos de desarrollo.","e7e5":"Tras 1.e4 e5, ambos bandos reclaman espacio central y abren líneas para dama y alfil. Continuación recomendada: Cf3. Respuesta esperada: Cc6. Error típico: Mover la dama para atacar e5: crea una amenaza aparente, pero pierde tiempos de desarrollo.","g1f3":"Después de 2.Cf3 Cc6, el peón e5 está defendido y la casilla d4 queda bajo control negro. Continuación recomendada: Ab5. Respuesta esperada: a6. Error típico: 3.Cxe5? Cxe5 entrega una pieza por un peón; atacar no significa que la captura sea posible.","b8c6":"Después de 2.Cf3 Cc6, el peón e5 está defendido y la casilla d4 queda bajo control negro. Continuación recomendada: Ab5. Respuesta esperada: a6. Error típico: 3.Cxe5? Cxe5 entrega una pieza por un peón; atacar no significa que la captura sea posible.","f1b5":"Tras 3.Ab5 a6, el alfil debe decidir entre conservar la tensión o cambiar en c6. Continuación recomendada: Aa4. Respuesta esperada: Cf6. Error típico: 4.Axc6 por automatismo: es jugable, pero cambia por completo el plan y entrega la pareja de alfiles.","a7a6":"Tras 3.Ab5 a6, el alfil debe decidir entre conservar la tensión o cambiar en c6. Continuación recomendada: Aa4. Respuesta esperada: Cf6. Error típico: 4.Axc6 por automatismo: es jugable, pero cambia por completo el plan y entrega la pareja de alfiles.","b5a4":"El alfil está en a4 y el caballo negro de f6 presiona e4. Continuación recomendada: O-O. Respuesta esperada: Ae7. Error típico: Defender e4 con d3 sin comparar: es sólido, pero renuncia momentáneamente al recurso activo d4.","g8f6":"El alfil está en a4 y el caballo negro de f6 presiona e4. Continuación recomendada: O-O. Respuesta esperada: Ae7. Error típico: Defender e4 con d3 sin comparar: es sólido, pero renuncia momentáneamente al recurso activo d4.","e1g1":"Después de 5.O-O Ae7, ambos bandos están cerca de completar el desarrollo del flanco de rey. Continuación recomendada: Te1. Respuesta esperada: b5. Error típico: 6.d4?! antes de Te1: puede ser correcto tácticamente, pero exige más cálculo y ofrece menos margen de error.","f8e7":"Después de 5.O-O Ae7, ambos bandos están cerca de completar el desarrollo del flanco de rey. Continuación recomendada: Te1. Respuesta esperada: b5. Error típico: 6.d4?! antes de Te1: puede ser correcto tácticamente, pero exige más cálculo y ofrece menos margen de error.","f1e1":"Tras ...b5, el alfil debe elegir una diagonal útil. Continuación recomendada: Ab3. Respuesta esperada: d6. Error típico: 7.Ac2?! es posible, pero permite que las negras ganen espacio sin haber obligado aún al alfil a abandonar b3.","b7b5":"Tras ...b5, el alfil debe elegir una diagonal útil. Continuación recomendada: Ab3. Respuesta esperada: d6. Error típico: 7.Ac2?! es posible, pero permite que las negras ganen espacio sin haber obligado aún al alfil a abandonar b3.","a4b3":"Con el centro sostenido por ...d6, las blancas deben decidir cómo construir su ruptura. Continuación recomendada: c3. Respuesta esperada: O-O. Error típico: 8.d4?! sin c3: abre el centro, pero deja menos apoyo al peón d y puede permitir ...exd4 con simplificación cómoda.","d7d6":"Con el centro sostenido por ...d6, las blancas deben decidir cómo construir su ruptura. Continuación recomendada: c3. Respuesta esperada: O-O. Error típico: 8.d4?! sin c3: abre el centro, pero deja menos apoyo al peón d y puede permitir ...exd4 con simplificación cómoda.","c2c3":"Ambos reyes están seguros y la lucha gira alrededor de d4 y ...d5. Continuación recomendada: h3. Respuesta esperada: Cb8. Error típico: 9.a4 por reflejo: puede cuestionar b5, pero primero debe comprobarse si el centro requiere una decisión más urgente.","e8g8":"Ambos reyes están seguros y la lucha gira alrededor de d4 y ...d5. Continuación recomendada: h3. Respuesta esperada: Cb8. Error típico: 9.a4 por reflejo: puede cuestionar b5, pero primero debe comprobarse si el centro requiere una decisión más urgente.","h2h3":"Tras ...Cb8, las negras han concedido un tiempo para reorganizarse. Continuación recomendada: d4. Respuesta esperada: Cbd7. Error típico: 10.Cbd2?! es lógica, pero permite que las negras jueguen ...Ab7 y ...Te8 antes de que el centro sea desafiado.","c6b8":"Tras ...Cb8, las negras han concedido un tiempo para reorganizarse. Continuación recomendada: d4. Respuesta esperada: Cbd7. Error típico: 10.Cbd2?! es lógica, pero permite que las negras jueguen ...Ab7 y ...Te8 antes de que el centro sea desafiado.","d2d4":"El centro está tenso y las negras han reforzado e5. Continuación recomendada: Cbd2. Respuesta esperada: c5. Error típico: 11.Ag5?! desarrolla, pero permite ...h6 y concede a las negras un plan fácil sin resolver el destino del caballo b1.","b8d7":"El centro está tenso y las negras han reforzado e5. Continuación recomendada: Cbd2. Respuesta esperada: c5. Error típico: 11.Ag5?! desarrolla, pero permite ...h6 y concede a las negras un plan fácil sin resolver el destino del caballo b1.","b1d2":"Tras ...c5, las blancas deben decidir la estructura. Continuación recomendada: d5. Respuesta esperada: Dc7. Error típico: 12.dxc5?! resuelve la tensión y puede activar dxc5; se entrega a las negras una columna y casillas sin obtener una ventaja concreta.","c7c5":"Tras ...c5, las blancas deben decidir la estructura. Continuación recomendada: d5. Respuesta esperada: Dc7. Error típico: 12.dxc5?! resuelve la tensión y puede activar dxc5; se entrega a las negras una columna y casillas sin obtener una ventaja concreta.","d4d5":"El centro está cerrado; la apertura ha terminado y comienza la mejora de piezas. Continuación recomendada: Cf1-g3. Respuesta esperada: g6 y ...Te8. Error típico: Atacar con g4 inmediatamente: debilita el rey y no responde al contrajuego central negro.","d8c7":"El centro está cerrado; la apertura ha terminado y comienza la mejora de piezas. Continuación recomendada: Cf1-g3. Respuesta esperada: g6 y ...Te8. Error típico: Atacar con g4 inmediatamente: debilita el rey y no responde al contrajuego central negro.","d2f1":"El centro está cerrado; la apertura ha terminado y comienza la mejora de piezas. Continuación recomendada: Cf1-g3. Respuesta esperada: g6 y ...Te8. Error típico: Atacar con g4 inmediatamente: debilita el rey y no responde al contrajuego central negro.","g7g6":"El centro está cerrado; la apertura ha terminado y comienza la mejora de piezas. Continuación recomendada: Cf1-g3. Respuesta esperada: g6 y ...Te8. Error típico: Atacar con g4 inmediatamente: debilita el rey y no responde al contrajuego central negro.","f1g3":"El centro está cerrado; la apertura ha terminado y comienza la mejora de piezas. Continuación recomendada: Cf1-g3. Respuesta esperada: g6 y ...Te8. Error típico: Atacar con g4 inmediatamente: debilita el rey y no responde al contrajuego central negro."};
const lessonMoveContexts={"ESP-P01":"Cf3 desarrolla con amenaza sobre e5 y acerca el enroque. La alternativa Cc3 es sana, pero no obliga a las negras a explicar cómo sostendrán e5. Las negras han igualado presencia en el centro. Su respuesta natural es ...Cc6: defiende e5, controla d4 y desarrolla una pieza.","ESP-P02":"3.Ab5 desarrolla el alfil, prepara O-O y aumenta la presión sobre el caballo que sostiene e5. No gana el peón todavía: tras Axc6 dxc6 Cxe5, las negras suelen disponer de Dd4. Las negras pueden elegir ...a6, ...Cf6 o ...f5. Para el repertorio principal, ...a6 pregunta al alfil y gana espacio sin resolver todavía la tensión central.","ESP-P03":"4.Aa4 conserva el alfil de casillas blancas, mantiene la presión indirecta sobre e5 y obliga a las negras a invertir otro tiempo si desean ganar espacio con ...b5. 4...Cf6 desarrolla atacando e4. Las negras no temen la clavada porque su rey aún no está enrocado y, en muchas líneas, pueden responder activamente con ...b5 y ...Ae7.","ESP-P04":"5.O-O es prioritario: pone el rey a salvo, activa Tf1 y permite responder a ...Cxe4 con d4, abriendo el centro cuando el caballo negro está expuesto. Las negras deben decidir entre ...Ae7, ...Cxe4 y ...b5. ...Ae7 es la opción más estable: prepara el enroque y elimina cualquier futura clavada sobre el rey.","ESP-P05":"6.Te1 refuerza e4 con una pieza, libera f1 para maniobras y coloca la torre frente al rey negro si el centro se abre. 6...b5 gana espacio y obliga al alfil a retirarse. Las negras obtienen territorio en el flanco de dama, pero crean casillas que pueden debilitarse, especialmente c6 y a6.","ESP-P06":"7.Ab3 conserva la diagonal b1-h7 y mantiene la vista sobre f7. También deja libre a2 para una retirada futura si ...Ca5 gana tiempo. 7...d6 sostiene e5 y abre el alfil de c8. Es sólida, pero bloquea temporalmente ese alfil y hace de ...d5 la ruptura liberadora que las negras deben preparar.","ESP-P07":"8.c3 prepara d4, ofrece c2 al alfil y evita que un caballo negro se instale cómodamente en d4. No amenaza nada inmediato: es una jugada de infraestructura. 8...O-O asegura el rey. A partir de aquí, las negras pueden reorganizarse con ...Cb8-d7, ...Te8 y ...Af8, o buscar ...d5 si la táctica lo permite.","ESP-P08":"9.h3 evita ...Ag4, que podría clavar Cf3 y aumentar la presión sobre e4. También crea una casilla de escape para el rey, pero no debe convertirse en una excusa para lanzar g4. Las negras eligen una reorganización. ...Cb8 parece retroceder, pero libera c6 para un peón y prepara ...Cbd7, reforzando e5 sin bloquear el peón c.","ESP-P09":"10.d4 reclama espacio y desafía e5. Si las negras mantienen la tensión, las blancas ganan libertad; si capturan, se abren líneas para las piezas blancas. 10...Cbd7 completa la idea de ...Cb8: el caballo refuerza e5, controla c5 y f6 y deja c6 disponible para ...c6 o una maniobra de dama.","ESP-P10":"11.Cbd2 desarrolla el caballo por d2 para no bloquear el peón c. Su ruta típica es f1-g3, desde donde apoya f5, h5 y e4. 11...c5 ataca la base d4 y gana espacio en el flanco de dama. A cambio, fija casillas oscuras y puede dejar d5 como puesto avanzado si las blancas cierran.","ESP-P11":"12.d5 gana espacio, fija el caballo d7 y convierte la partida en una lucha de maniobras. La decisión es buena si las blancas aceptan que el ataque no será inmediato. 12...Dc7 conecta torres, apoya ...c4 o ...Te8 y evita que la dama quede atrapada tras una futura apertura de la columna d.","ESP-P12":"13.Cf1 y 14.Cg3 completan la ruta del caballo. Desde g3, defiende e4, mira f5 y h5 y coopera con el alfil de b3 contra el rey. Las negras responden con ...g6 y ...Te8: controlan f5, refuerzan e5 y preparan ...Af8. Su contrajuego principal sigue siendo ...c4, ...Af8-g7 o ...d5 si el centro se abre."};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
const state = {
  completed: new Set(JSON.parse(localStorage.getItem("espanola-progress") || "[]")),
  lesson: 0, lessonPly: 0, challenge: 0, selected: null, streak: 0,
  variant: 0, variantPly: 0, variantFlipped: false,
  variantReviews: JSON.parse(localStorage.getItem("espanola-variant-reviews") || "{}"),
  game: 0, gamePly: 0, exercise: 0, exerciseRevealed: false
};

function parseFen(fen) {
  const board = {};
  fen.split(" ")[0].split("/").forEach((row, r) => {
    let file = 0;
    for (const char of row) {
      if (/\d/.test(char)) file += Number(char);
      else { board["abcdefgh"[file] + (8-r)] = char; file++; }
    }
  });
  return board;
}

function applyMove(board, uci) {
  const from = uci.slice(0,2), to = uci.slice(2,4);
  const movingPiece = board[from];
  if (!movingPiece) return;
  if (movingPiece.toUpperCase() === "P" && from[0] !== to[0] && !board[to]) {
    delete board[to[0] + from[1]];
  }
  board[to] = uci.length > 4 ? (movingPiece === movingPiece.toUpperCase() ? uci[4].toUpperCase() : uci[4]) : movingPiece;
  delete board[from];
  if ((board[to] === "K" || board[to] === "k") && Math.abs("abcdefgh".indexOf(from[0]) - "abcdefgh".indexOf(to[0])) === 2) {
    const rank = from[1];
    if (to[0] === "g") { board["f"+rank] = board["h"+rank]; delete board["h"+rank]; }
    else { board["d"+rank] = board["a"+rank]; delete board["a"+rank]; }
  }
}

function boardAt(moves, ply) {
  const board = parseFen(INITIAL_FEN);
  moves.slice(0, ply).forEach(move => applyMove(board, move));
  return board;
}

function renderBoard(element, board, options={}) {
  element.innerHTML = "";
  const ranks = options.flipped ? [1,2,3,4,5,6,7,8] : [8,7,6,5,4,3,2,1];
  const files = options.flipped ? [7,6,5,4,3,2,1,0] : [0,1,2,3,4,5,6,7];
  for (const rank of ranks) {
    for (const f of files) {
      const squareName = "abcdefgh"[f] + rank;
      const square = document.createElement(options.interactive ? "button" : "div");
      square.className = `square ${(f + rank) % 2 ? "light" : "dark"}`;
      square.dataset.square = squareName;
      if (options.lastMove?.includes(squareName)) square.classList.add("last-move");
      if (options.selected === squareName) square.classList.add("selected");
      if (board[squareName]) {
        const piece = document.createElement("span");
        piece.className = `piece ${board[squareName] === board[squareName].toUpperCase() ? "white-piece" : "black-piece"}`;
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
        icon.setAttribute("viewBox", "0 0 100 100");
        icon.setAttribute("aria-hidden", "true");
        icon.setAttribute("focusable", "false");
        const pieceRef = `#piece-${board[squareName].toUpperCase()}`;
        use.setAttribute("href", pieceRef);
        use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", pieceRef);
        icon.appendChild(use);
        piece.appendChild(icon);
        square.appendChild(piece);
      }
      if ((!options.flipped && f === 0) || (options.flipped && f === 7)) {
        const rankLabel = document.createElement("span");
        rankLabel.className = "coordinate rank-coordinate";
        rankLabel.textContent = rank;
        rankLabel.setAttribute("aria-hidden", "true");
        square.appendChild(rankLabel);
      }
      if ((!options.flipped && rank === 1) || (options.flipped && rank === 8)) {
        const fileLabel = document.createElement("span");
        fileLabel.className = "coordinate file-coordinate";
        fileLabel.textContent = "abcdefgh"[f];
        fileLabel.setAttribute("aria-hidden", "true");
        square.appendChild(fileLabel);
      }
      if (options.interactive) {
        square.type = "button";
        square.setAttribute("aria-label", `${squareName}${board[squareName] ? ", " + PIECES[board[squareName]] : ""}`);
        square.addEventListener("click", () => handlePracticeSquare(squareName));
      }
      element.appendChild(square);
    }
  }
}

function showView(id) {
  document.querySelectorAll(".view").forEach(view => view.classList.toggle("active", view.id === id));
  document.querySelectorAll(".nav-link").forEach(link => link.classList.toggle("active", link.dataset.view === id));
  history.replaceState(null, "", `#${id}`);
  window.scrollTo({top:0, behavior:"smooth"});
}

function updateProgress() {
  const count = state.completed.size;
  document.getElementById("headerProgress").textContent = `${count}/12`;
  document.getElementById("headerProgressBar").style.width = `${count / 12 * 100}%`;
  localStorage.setItem("espanola-progress", JSON.stringify([...state.completed]));
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const button = document.createElement("button");
    button.className = `lesson-list-button ${i === state.lesson ? "active" : ""} ${state.completed.has(lesson.code) ? "done" : ""}`;
    button.innerHTML = `<span class="dot"></span><span>${lesson.code.replace("ESP-","")}</span><span class="lesson-name">${lesson.title}</span>`;
    button.addEventListener("click", () => { state.lesson=i; state.lessonPly=0; renderLesson(); });
    list.appendChild(button);
  });
}

function renderLesson() {
  const lesson = lessons[state.lesson], moves = lesson.uci.split(" ");
  state.lessonPly = Math.min(state.lessonPly, moves.length);
  const last = state.lessonPly ? moves[state.lessonPly-1] : "";
  renderBoard(document.getElementById("lessonBoard"), boardAt(moves, state.lessonPly), {lastMove:[last.slice(0,2), last.slice(2,4)]});
  document.getElementById("lessonCode").textContent = lesson.code;
  document.getElementById("lessonStageLabel").textContent = lesson.stage;
  document.getElementById("lessonTitle").textContent = lesson.title;
  renderLessonSequence(moves, state.lessonPly);
  const activeMove = state.lessonPly ? moves[state.lessonPly - 1] : null;
  const activeSide = state.lessonPly % 2 === 1 ? "BLANCAS" : "NEGRAS";
  document.getElementById("lessonExplanation").textContent = activeMove ? lessonMoveExplanation(lesson, activeMove) : lesson.explanation;
  document.getElementById("lessonIdeaLabel").textContent = activeMove ? `LECTURA TRAS LA JUGADA DE ${activeSide}` : "IDEA CLAVE";
  document.getElementById("lessonIdea").textContent = lesson.idea;
  document.getElementById("lessonMoveCounter").textContent = `${state.lessonPly} / ${moves.length}`;
  document.getElementById("lessonTurnLabel").textContent = state.lessonPly ? `Última: ${formatMove(moves[state.lessonPly-1])}` : "Posición inicial";
  document.getElementById("lessonPrev").disabled = state.lessonPly === 0 && state.lesson === 0;
  document.getElementById("lessonNext").disabled = state.lessonPly === moves.length && state.lesson === lessons.length - 1;
  const complete = document.getElementById("completeLesson");
  const done = state.completed.has(lesson.code);
  complete.classList.toggle("done", done);
  complete.textContent = done ? "✓ Posición comprendida" : "Marcar como comprendida";
  renderLessonList();
}

function formatMove(uci) { return `${uci.slice(0,2)}–${uci.slice(2,4)}`; }

function moveLabel(board, uci) {
  const from = uci.slice(0,2), to = uci.slice(2,4), piece = board[from];
  if ((piece === "K" || piece === "k") && Math.abs("abcdefgh".indexOf(from[0]) - "abcdefgh".indexOf(to[0])) === 2) {
    return to[0] === "g" ? "O-O" : "O-O-O";
  }
  const names = {N:"C", B:"A", R:"T", Q:"D", K:"R"};
  const upper = piece?.toUpperCase();
  const capture = Boolean(board[to]) || (upper === "P" && from[0] !== to[0]);
  if (upper === "P") return `${capture ? from[0] + "x" : ""}${to}${uci[4] ? "=" + uci[4].toUpperCase() : ""}`;
  return `${names[upper] || ""}${capture ? "x" : ""}${to}`;
}

function renderLessonSequence(moves, currentPly, containerId="lessonNotation") {
  const container = document.getElementById(containerId);
  const board = parseFen(INITIAL_FEN);
  container.innerHTML = "";
  moves.forEach((move, index) => {
    if (index % 2 === 0) {
      const number = document.createElement("span");
      number.className = "sequence-number";
      number.textContent = `${Math.floor(index / 2) + 1}.`;
      container.appendChild(number);
    }
    const token = document.createElement("span");
    token.className = `sequence-move ${index < currentPly ? "played" : "pending"} ${index === currentPly - 1 ? "active" : ""}`;
    token.textContent = moveLabel(board, move);
    container.appendChild(token);
    applyMove(board, move);
  });
  const activeToken = container.querySelector(".active");
  if (activeToken) {
    // Keep the active move visible inside the notation strip without moving
    // the document viewport (scrollIntoView also scrolled the mobile page).
    const targetLeft = activeToken.offsetLeft - (container.clientWidth - activeToken.offsetWidth) / 2;
    container.scrollLeft = Math.max(0, targetLeft);
  }
}

function renderLessonStep(updateState) {
  const scrollPosition = window.scrollY;
  updateState();
  renderLesson();
  // Rebuilding the move strip/index can trigger mobile scroll anchoring.
  // Restore the reader's exact viewport so the board never jumps.
  window.scrollTo({top: scrollPosition, left: 0, behavior: "instant"});
  requestAnimationFrame(() => window.scrollTo({top: scrollPosition, left: 0, behavior: "instant"}));
}

function previousLessonStep() {
  renderLessonStep(() => {
    if (state.lessonPly > 0) state.lessonPly--;
    else if (state.lesson > 0) {
      state.lesson--;
      state.lessonPly = lessons[state.lesson].uci.split(" ").length;
    }
  });
}

function nextLessonStep() {
  renderLessonStep(() => {
    const moves = lessons[state.lesson].uci.split(" ");
    if (state.lessonPly < moves.length) state.lessonPly++;
    else if (state.lesson < lessons.length - 1) {
      state.lesson++;
      state.lessonPly = 0;
    }
  });
}

function challengeData() {
  const lesson = lessons[state.challenge], moves = lesson.uci.split(" ");
  return { lesson, moves, target:moves[moves.length-1], board:boardAt(moves, moves.length-1) };
}

const practiceTransitionDelay = 420;

function pausePracticeTransition() {
  return new Promise(resolve => setTimeout(resolve, practiceTransitionDelay));
}

async function nextPracticeChallenge() {
  const currentIndex = state.challenge;
  const nextIndex = (currentIndex + 1) % lessons.length;
  const button = document.getElementById("nextChallenge");
  button.disabled = true;
  button.textContent = "Preparando siguiente posición…";
  document.getElementById("practiceQuestion").textContent = "Avanzando jugada a jugada";
  document.getElementById("showHint").hidden = true;

  if (nextIndex === 0) {
    document.getElementById("practiceContext").textContent = "Recorrido completado. Volvemos claramente a la posición inicial para comenzar de nuevo.";
    renderBoard(document.getElementById("practiceBoard"), parseFen(INITIAL_FEN));
    await pausePracticeTransition();
    state.challenge = 0;
    button.disabled = false;
    renderPractice();
    return;
  }

  const currentMoves = lessons[currentIndex].uci.split(" ");
  const nextMoves = lessons[nextIndex].uci.split(" ");
  const nextStartPly = nextMoves.length - 1;
  let sharedPly = 0;
  while (sharedPly < currentMoves.length && sharedPly < nextStartPly && currentMoves[sharedPly] === nextMoves[sharedPly]) {
    sharedPly++;
  }

  for (let ply = currentMoves.length - 1; ply >= sharedPly; ply--) {
    const move = currentMoves[ply];
    document.getElementById("practiceContext").textContent = "Cambiamos de variante retrocediendo una jugada cada vez, sin saltos de posición.";
    renderBoard(document.getElementById("practiceBoard"), boardAt(currentMoves, ply), {lastMove:[move.slice(0,2), move.slice(2,4)]});
    await pausePracticeTransition();
  }

  for (let ply = sharedPly + 1; ply <= nextStartPly; ply++) {
    const move = nextMoves[ply - 1];
    document.getElementById("practiceContext").textContent = moveExplanations[move] || "La secuencia avanza exactamente una jugada.";
    renderBoard(document.getElementById("practiceBoard"), boardAt(nextMoves, ply), {lastMove:[move.slice(0,2), move.slice(2,4)]});
    await pausePracticeTransition();
  }

  state.challenge = nextIndex;
  button.disabled = false;
  renderPractice();
}

function renderPractice(resetMessage=true) {
  const {lesson, moves, target, board} = challengeData();
  state.selected = null;
  renderBoard(document.getElementById("practiceBoard"), board, {interactive:true});
  document.getElementById("practiceCode").textContent = lesson.code;
  document.getElementById("practiceLevel").textContent = lesson.stage;
  document.getElementById("practiceQuestion").textContent = "¿Puedes repetir la última jugada?";
  document.getElementById("practiceContext").textContent = `Reconstruye la jugada que conduce a «${lesson.title}». Juegan ${moves.length % 2 ? "blancas" : "negras"}.`;
  const feedback = document.getElementById("practiceFeedback");
  feedback.className = "feedback";
  feedback.innerHTML = '<span>PISTA</span><p id="practiceHint"></p>';
  document.getElementById("practiceHint").textContent = resetMessage ? "Visualiza qué pieza cumple la idea central de esta posición." : lesson.hint;
  document.getElementById("showHint").hidden = false;
  const nextButton = document.getElementById("nextChallenge");
  nextButton.hidden = true;
  nextButton.disabled = false;
  nextButton.textContent = state.challenge === lessons.length - 1 ? "Reiniciar práctica →" : "Siguiente posición →";
  document.getElementById("streak").textContent = state.streak;
  const dots = document.getElementById("challengeDots");
  dots.innerHTML = lessons.map((_,i)=>`<i class="${i < state.challenge ? "done" : i === state.challenge ? "active" : ""}"></i>`).join("");
}

function handlePracticeSquare(square) {
  const data = challengeData();
  if (!state.selected) {
    state.selected = square;
    renderBoard(document.getElementById("practiceBoard"), data.board, {interactive:true, selected:square});
    return;
  }
  const attempt = state.selected + square;
  if (attempt === data.target.slice(0,4)) {
    applyMove(data.board, data.target);
    renderBoard(document.getElementById("practiceBoard"), data.board, {interactive:true, lastMove:[state.selected,square]});
    state.streak++;
    document.getElementById("streak").textContent = state.streak;
    document.getElementById("practiceFeedback").className = "feedback success";
    document.getElementById("practiceFeedback").innerHTML = `<span>¡CORRECTO!</span><p>${data.lesson.idea}</p>`;
    document.getElementById("showHint").hidden = true;
    document.getElementById("nextChallenge").hidden = false;
    state.completed.add(data.lesson.code);
    updateProgress();
  } else {
    state.streak = 0;
    document.getElementById("streak").textContent = "0";
    document.getElementById("practiceFeedback").className = "feedback error";
    document.getElementById("practiceFeedback").innerHTML = `<span>REVISA EL PLAN</span><p>Esa jugada no construye esta posición. ${data.lesson.hint}</p>`;
    state.selected = null;
    renderBoard(document.getElementById("practiceBoard"), data.board, {interactive:true});
  }
}

function variantBranch(index) { return index; }

function selectVariant(index) {
  state.variant = index;
  state.variantPly = 0;
  renderVariant();
}

function renderVariantList() {
  const list = document.getElementById("variantList");
  list.innerHTML = "";
  variants.forEach((variant, index) => {
    const button = document.createElement("button");
    button.className = `variant-list-button ${index === state.variant ? "active" : ""}`;
    button.innerHTML = `<span>${variant.code.replace("VAR-", "")}</span><b>${variant.title}</b><small>${variant.response}</small>`;
    button.addEventListener("click", () => selectVariant(index));
    list.appendChild(button);
  });
  if (window.matchMedia("(max-width: 900px)").matches) {
    const scroller = list.closest(".variant-index");
    const activeButton = list.querySelector(".active");
    if (scroller && activeButton) {
      const targetLeft = activeButton.offsetLeft - (scroller.clientWidth - activeButton.offsetWidth) / 2;
      scroller.scrollLeft = Math.max(0, targetLeft);
    }
  }
}

function renderComparison() {
  document.getElementById("comparisonBody").innerHTML = variants.map((variant, index) => `
    <tr data-variant-row="${index}">
      <th><button data-open-variant="${index}">${variant.title}</button></th>
      <td>${variant.risk}</td><td>${variant.theory}</td><td>${variant.central}</td><td>${variant.recommendation}</td>
    </tr>`).join("");
  document.querySelectorAll("[data-open-variant]").forEach(button => button.addEventListener("click", () => {
    selectVariant(Number(button.dataset.openVariant));
    document.querySelector(".variant-shell").scrollIntoView({behavior:"smooth", block:"start"});
  }));
}

function answerVariant(optionIndex) {
  const variant = variants[state.variant];
  const options = document.querySelectorAll("#variantOptions button");
  options.forEach((button, index) => {
    button.disabled = true;
    if (index === variant.correct) button.classList.add("correct");
    else if (index === optionIndex) button.classList.add("wrong");
  });
  const feedback = document.getElementById("variantFeedback");
  feedback.className = `concept-feedback ${optionIndex === variant.correct ? "success" : "error"}`;
  feedback.textContent = `${optionIndex === variant.correct ? "Correcto. " : "Revisa el plan. "}${variant.feedback}`;
}

function updateReviewCard() {
  const variant = variants[state.variant];
  const review = state.variantReviews[variant.code];
  const text = document.getElementById("nextReviewText");
  const button = document.getElementById("recordReview");
  if (!review) {
    text.textContent = "Repásala hoy; después volverá a los 3 y 10 días.";
    button.textContent = "Registrar repaso";
    button.disabled = false;
    return;
  }
  if (review.count >= 3) {
    text.textContent = "Ciclo completado: hoy, +3 días y +10 días.";
    button.textContent = "Ciclo completado";
    button.disabled = true;
    return;
  }
  const nextDate = new Date(review.next);
  text.textContent = `Siguiente repaso: ${new Intl.DateTimeFormat("es-ES", {day:"numeric", month:"long"}).format(nextDate)}.`;
  button.textContent = `Registrar repaso ${review.count + 1}/3`;
  button.disabled = false;
}

function recordVariantReview() {
  const code = variants[state.variant].code;
  const previous = state.variantReviews[code] || {count:0};
  const count = Math.min(previous.count + 1, 3);
  const interval = count === 1 ? 3 : count === 2 ? 10 : 0;
  const next = new Date();
  next.setDate(next.getDate() + interval);
  state.variantReviews[code] = {count, next:next.toISOString()};
  localStorage.setItem("espanola-variant-reviews", JSON.stringify(state.variantReviews));
  updateReviewCard();
}
function renderVariant() {
  const variant = variants[state.variant];
  const moves = variant.moves.split(" ");
  state.variantPly = Math.min(state.variantPly, moves.length);
  const last = state.variantPly ? moves[state.variantPly - 1] : "";
  renderBoard(document.getElementById("variantBoard"), boardAt(moves, state.variantPly), {lastMove:last ? [last.slice(0,2), last.slice(2,4)] : [], flipped:state.variantFlipped});
  document.getElementById("variantFlip").textContent = state.variantFlipped ? "Ver desde blancas" : "Ver desde negras";
  document.getElementById("variantMoveCounter").textContent = `${state.variantPly} / ${moves.length}`;
  document.getElementById("variantTurnLabel").textContent = state.variantPly ? `Última: ${formatMove(last)}` : "Posición inicial";
  document.getElementById("variantStart").disabled = state.variantPly === 0;
  document.getElementById("variantPrev").disabled = state.variantPly === 0;
  document.getElementById("variantNext").disabled = state.variantPly === moves.length;
  document.getElementById("variantEnd").disabled = state.variantPly === moves.length;
  document.getElementById("variantCode").textContent = variant.code;
  document.getElementById("variantLevel").textContent = variant.level;
  document.getElementById("variantTitle").textContent = variant.title;
  document.getElementById("variantSummary").textContent = variant.summary;
  renderLessonSequence(moves, state.variantPly, "variantNotation");
  document.getElementById("variantFacts").innerHTML = `<span><small>RIESGO</small><b>${variant.risk}</b></span><span><small>TEORÍA</small><b>${variant.theory}</b></span><span><small>IDEA CENTRAL</small><b>${variant.central}</b></span>`;
  updateReviewCard();
  document.getElementById("whitePlans").innerHTML = variant.whitePlans.map(plan => `<li>${plan}</li>`).join("");
  document.getElementById("blackPlans").innerHTML = variant.blackPlans.map(plan => `<li>${plan}</li>`).join("");
  document.getElementById("variantQuestion").textContent = variant.question;
  document.getElementById("variantOptions").innerHTML = variant.options.map((option, index) => `<button data-option="${index}"><span>${String.fromCharCode(65 + index)}</span>${option}</button>`).join("");
  document.querySelectorAll("#variantOptions button").forEach(button => button.addEventListener("click", () => answerVariant(Number(button.dataset.option))));
  const feedback = document.getElementById("variantFeedback");
  feedback.className = "concept-feedback";
  feedback.textContent = "Elige una respuesta y contrástala con el plan de la posición.";
  document.querySelectorAll(".decision-branch").forEach(button => button.classList.toggle("active", Number(button.dataset.variant) === variantBranch(state.variant)));
  renderVariantList();
}
function renderGameTabs() {
  const tabs = document.getElementById("gameTabs");
  tabs.innerHTML = "";
  games.forEach((game,i)=>{
    const button = document.createElement("button");
    button.className = `game-tab ${i===state.game ? "active" : ""}`;
    button.innerHTML = `<span>${game.code}</span><b>${game.title}</b>`;
    button.addEventListener("click",()=>{state.game=i; state.gamePly=0; renderGame();});
    tabs.appendChild(button);
  });
}

function spanishSan(game, san) {
  if (game.notation === "es") return san;
  return san.replace(/[KQRBN]/g, (piece) => ({ K:"R", Q:"D", R:"T", B:"A", N:"C" })[piece]);
}

function renderGame() {
  const game = games[state.game];
  state.gamePly = Math.min(state.gamePly, game.moves.length);
  const last = state.gamePly ? game.moves[state.gamePly-1] : "";
  renderBoard(document.getElementById("gameBoard"), boardAt(game.moves,state.gamePly), {lastMove:[last.slice(0,2),last.slice(2,4)]});
  document.getElementById("gameCode").textContent = game.code;
  document.getElementById("gameTitle").textContent = game.title;
  document.getElementById("gameSubtitle").textContent = game.subtitle;
  document.getElementById("gameMoveCounter").textContent = `${state.gamePly} / ${game.moves.length}`;
  document.getElementById("gamePrev").disabled = state.gamePly===0;
  document.getElementById("gameStart").disabled = state.gamePly===0;
  document.getElementById("gameNext").disabled = state.gamePly===game.moves.length;
  document.getElementById("gameEnd").disabled = state.gamePly===game.moves.length;
  const playedMove = state.gamePly ? game.moves[state.gamePly-1] : null;
  document.getElementById("gameComment").textContent = game.comments[state.gamePly-1] || (playedMove ? moveExplanations[playedMove] : null) || "Avanza por la partida para descubrir las ideas clave.";
  const sheet = document.getElementById("moveSheet");
  sheet.innerHTML = "";
  game.san.forEach((san,i)=>{
    const button=document.createElement("button");
    button.className=`move-token ${i===state.gamePly-1 ? "active" : ""}`;
    button.innerHTML = `${i%2===0 ? `<span class="move-num">${Math.floor(i/2)+1}.</span>` : ""}${spanishSan(game, san)}`;
    button.addEventListener("click",()=>{state.gamePly=i+1;renderGame();});
    sheet.appendChild(button);
  });
  sheet.querySelector(".active")?.scrollIntoView({block:"nearest",inline:"nearest"});
  renderGameTabs();
}

function renderExerciseList() {
  const list = document.getElementById("exerciseList");
  list.innerHTML = "";
  exercises.forEach((exercise, index) => {
    const button = document.createElement("button");
    button.className = `exercise-list-button ${index === state.exercise ? "active" : ""}`;
    button.innerHTML = `<span>${String(index + 1).padStart(2, "0")}</span><b>${exercise.title}</b>`;
    button.addEventListener("click", () => selectExercise(index));
    list.appendChild(button);
  });
  list.querySelector(".active")?.scrollIntoView({block:"nearest", inline:"nearest"});
}

function selectExercise(index) {
  state.exercise = Math.max(0, Math.min(index, exercises.length - 1));
  state.exerciseRevealed = false;
  renderExercise();
}

function renderExercise() {
  if (!exercises.length) return;
  const exercise = exercises[state.exercise];
  const board = exercise.fen ? parseFen(exercise.fen) : boardAt(exercise.movesUci || [], (exercise.movesUci || []).length);
  const last = exercise.movesUci?.at(-1) || "";
  renderBoard(document.getElementById("exerciseBoard"), board, {lastMove:last ? [last.slice(0,2), last.slice(2,4)] : []});
  document.getElementById("exerciseCode").textContent = exercise.id;
  document.getElementById("exerciseLevel").textContent = exercise.level?.label || exercise.chapter || "ENTRENAMIENTO";
  document.getElementById("exerciseTitle").textContent = exercise.title;
  document.getElementById("exerciseObjective").textContent = exercise.objective;
  document.getElementById("exerciseWhitePlan").textContent = exercise.whitePlan || "Formula el plan más activo sin descuidar el centro.";
  document.getElementById("exerciseBlackPlan").textContent = exercise.blackPlan || "Anticipa la respuesta más enérgica del rival.";
  document.getElementById("exerciseContinuation").textContent = exercise.teachingContinuation || "Compara tu decisión con la posición guiada relacionada.";
  document.getElementById("exerciseCounter").textContent = `${state.exercise + 1} / ${exercises.length}`;
  document.getElementById("exerciseTurn").textContent = exercise.sideToMove === "black" ? "Juegan negras" : "Juegan blancas";
  document.getElementById("exercisePrev").disabled = state.exercise === 0;
  document.getElementById("exerciseNext").disabled = state.exercise === exercises.length - 1;
  document.getElementById("exerciseSolution").hidden = !state.exerciseRevealed;
  document.getElementById("exerciseReveal").textContent = state.exerciseRevealed ? "Ocultar solución" : "Mostrar solución";
  renderExerciseList();
}
document.querySelectorAll(".nav-link").forEach(button=>button.addEventListener("click",()=>showView(button.dataset.view)));
document.querySelectorAll("[data-go]").forEach(button=>button.addEventListener("click",()=>showView(button.dataset.go)));
document.getElementById("lessonPrev").addEventListener("click", previousLessonStep);
document.getElementById("lessonNext").addEventListener("click", nextLessonStep);
document.getElementById("completeLesson").addEventListener("click",()=>{
  const code=lessons[state.lesson].code;
  state.completed.has(code) ? state.completed.delete(code) : state.completed.add(code);
  updateProgress(); renderLesson();
});
document.getElementById("showHint").addEventListener("click",()=>{document.getElementById("practiceHint").textContent=lessons[state.challenge].hint;});
document.querySelectorAll(".decision-branch").forEach(button=>button.addEventListener("click",()=>selectVariant(Number(button.dataset.variant))));
document.querySelectorAll(".mobile-disclosure").forEach(button => button.addEventListener("click", () => {
  const target = document.getElementById(button.getAttribute("aria-controls"));
  const open = button.getAttribute("aria-expanded") !== "true";
  button.setAttribute("aria-expanded", String(open));
  button.querySelector("b").textContent = open ? "−" : "+";
  target.classList.toggle("mobile-open", open);
}));
document.getElementById("variantFlip").addEventListener("click",()=>{state.variantFlipped=!state.variantFlipped;renderVariant();});
document.getElementById("recordReview").addEventListener("click",recordVariantReview);
document.getElementById("variantStart").addEventListener("click",()=>{state.variantPly=0;renderVariant();});
document.getElementById("variantPrev").addEventListener("click",()=>{state.variantPly--;renderVariant();});
document.getElementById("variantNext").addEventListener("click",()=>{state.variantPly++;renderVariant();});
document.getElementById("variantEnd").addEventListener("click",()=>{state.variantPly=variants[state.variant].moves.split(" ").length;renderVariant();});
document.getElementById("nextChallenge").addEventListener("click", nextPracticeChallenge);
document.getElementById("gamePrev").addEventListener("click",()=>{state.gamePly--;renderGame();});
document.getElementById("gameNext").addEventListener("click",()=>{state.gamePly++;renderGame();});
document.getElementById("gameStart").addEventListener("click",()=>{state.gamePly=0;renderGame();});
document.getElementById("gameEnd").addEventListener("click",()=>{state.gamePly=games[state.game].moves.length;renderGame();});
document.getElementById("exercisePrev").addEventListener("click",()=>selectExercise(state.exercise - 1));
document.getElementById("exerciseNext").addEventListener("click",()=>selectExercise(state.exercise + 1));
document.getElementById("exerciseReveal").addEventListener("click",()=>{state.exerciseRevealed=!state.exerciseRevealed;renderExercise();});
document.addEventListener("keydown", event => {
  const active=document.querySelector(".view.active")?.id;
  if (active==="aprende" && event.key==="ArrowRight" && !document.getElementById("lessonNext").disabled) nextLessonStep();
  if (active==="aprende" && event.key==="ArrowLeft" && !document.getElementById("lessonPrev").disabled) previousLessonStep();
  if (active==="variantes" && event.key==="ArrowRight" && state.variantPly<variants[state.variant].moves.split(" ").length) {state.variantPly++;renderVariant();}
  if (active==="variantes" && event.key==="ArrowLeft" && state.variantPly>0) {state.variantPly--;renderVariant();}
  if (active==="partidas" && event.key==="ArrowRight" && state.gamePly<games[state.game].moves.length) {state.gamePly++;renderGame();}
  if (active==="partidas" && event.key==="ArrowLeft" && state.gamePly>0) {state.gamePly--;renderGame();}
  if (active==="ejercicios" && event.key==="ArrowRight" && state.exercise<exercises.length-1) selectExercise(state.exercise+1);
  if (active==="ejercicios" && event.key==="ArrowLeft" && state.exercise>0) selectExercise(state.exercise-1);
});

renderBoard(document.getElementById("heroBoard"), boardAt(lessons[2].uci.split(" "),lessons[2].uci.split(" ").length));
renderLesson();
renderPractice();
renderVariant();
renderComparison();
renderGame();
renderExercise();
updateProgress();
const initialView=location.hash.slice(1);
if (["inicio","aprende","practica","variantes","partidas","ejercicios","plan"].includes(initialView)) showView(initialView);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", async () => {
    await navigator.serviceWorker.register("./service-worker.js", {updateViaCache:"none"});

  });
}
