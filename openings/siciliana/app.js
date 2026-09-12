const PIECES={"P":"♙","N":"♘","B":"♗","R":"♖","Q":"♕","K":"♔","p":"♟","n":"♞","b":"♝","r":"♜","q":"♛","k":"♚"};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=[{"code":"SIC-P01","title":"Punto de partida del repertorio. 1...c5 no ocupa e5: ataca d4 con un peón de flanco y crea una lucha asimétrica desde la primera jugada.","fen":"rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2","uci":"e2e4 c7c5","notation":"e2e4 c7c5","stage":"Ampliación A","explanation":"2.c3 para preparar d4, reducir la teoría de la Siciliana Abierta y llegar a estructuras repetibles.","idea":"2.c3 para preparar d4, reducir la teoría de la Siciliana Abierta y llegar a estructuras repetibles.","hint":"SIC-P02, SIC-P03, SIC-P05 · SIC-E01, SIC-E02 · Repertorio práctico de la Parte XII."},{"code":"SIC-P02","title":"Las blancas han jugado 2.c3. Ahora d4 está preparado, pero c3 queda ocupado y el caballo b1 no puede desarrollarse por su casilla natural.","fen":"rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2","uci":"e2e4 c7c5 c2c3","notation":"e2e4 c7c5 c2c3","stage":"Ampliación A","explanation":"Jugar d4 en cuanto el negro no lo impida; contra ...Cf6 responder con e5 y contra ...d5 aclarar el centro con exd5.","idea":"Jugar d4 en cuanto el negro no lo impida; contra ...Cf6 responder con e5 y contra ...d5 aclarar el centro con exd5.","hint":"SIC-P03, SIC-P05, SIC-P07 · SIC-E02, SIC-E03, SIC-E04."},{"code":"SIC-P03","title":"2...Cf6 desarrolla una pieza y ataca e4 antes de que el blanco haya jugado d4. El negro usa el pequeño retraso creado por c3.","fen":"rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 1 3","uci":"e2e4 c7c5 c2c3 g8f6","notation":"e2e4 c7c5 c2c3 g8f6","stage":"Ampliación A","explanation":"3.e5, después d4, Cf3 y desarrollo. No perseguir al caballo d5 con peones hasta asegurar la base de la cadena.","idea":"3.e5, después d4, Cf3 y desarrollo. No perseguir al caballo d5 con peones hasta asegurar la base de la cadena.","hint":"SIC-P04 · SIC-S01 · SIC-M01-P1 · SIC-E03, SIC-E16."},{"code":"SIC-P04","title":"El blanco ya ha ganado espacio con e5 y ha jugado d4; las negras han cambiado en d4. El peón negro en d4 ocupa temporalmente el centro.","fen":"rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 1 5","uci":"e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 d2d4 c5d4 g1f3","notation":"e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 d2d4 c5d4 g1f3","stage":"Ampliación A","explanation":"Recapturar cxd4 cuando corresponda, desarrollar Ac4/Ae2, enrocar y sostener d4 antes de pensar en c4 o f4.","idea":"Recapturar cxd4 cuando corresponda, desarrollar Ac4/Ae2, enrocar y sostener d4 antes de pensar en c4 o f4.","hint":"SIC-S01 · SIC-M01-P2 · SIC-E06, SIC-E17."},{"code":"SIC-P05","title":"Las negras han respondido 2...d5 y, tras exd5, recuperan con la dama en d5. La tensión central se aclara antes de que el blanco construya d4","fen":"rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 4","uci":"e2e4 c7c5 c2c3 d7d5 e4d5 d8d5","notation":"e2e4 c7c5 c2c3 d7d5 e4d5 d8d5","stage":"Ampliación A","explanation":"4.d4, seguido de Cf3, Ae2 y O-O. c4 solo cuando gane espacio sin crear debilidades mayores.","idea":"4.d4, seguido de Cf3, Ae2 y O-O. c4 solo cuando gane espacio sin crear debilidades mayores.","hint":"SIC-P06 · SIC-S02 · SIC-M02-P1/P2 · SIC-E04, SIC-E20."},{"code":"SIC-P06","title":"Blancas ya tienen d4 y Cf3; negras han desarrollado Cf6 y reforzado el centro con ...e6. La apertura entra en una fase de desarrollo normal.","fen":"rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 6","uci":"e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 g8f6 g1f3 e7e6","notation":"e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 g8f6 g1f3 e7e6","stage":"Ampliación A","explanation":"Ae2, O-O, y después c4 o Ae3 según la colocación negra. Si c4 gana un tiempo, preparar Cc3 y torres centrales.","idea":"Ae2, O-O, y después c4 o Ae3 según la colocación negra. Si c4 gana un tiempo, preparar Cc3 y torres centrales.","hint":"SIC-S02, SIC-S04 · SIC-M02-P3 · SIC-E12, SIC-E22."},{"code":"SIC-P07","title":"Las negras eligieron ...Cc6 en vez de ...Cf6 o ...d5. El blanco aprovechó el tiempo con d4 y, tras ...cxd4, cxd4 construyó e4-d4.","fen":"r1bqkbnr/pp1ppppp/2n5/8/3PP3/8/PP3PPP/RNBQKBNR b KQkq - 0 4","uci":"e2e4 c7c5 c2c3 b8c6 d2d4 c5d4 c3d4","notation":"e2e4 c7c5 c2c3 b8c6 d2d4 c5d4 c3d4","stage":"Ampliación A","explanation":"Cf3, Cc3, Ae3/Ac4 y O-O; responder a ...d5 con cálculo, no con defensa pasiva.","idea":"Cf3, Cc3, Ae3/Ac4 y O-O; responder a ...d5 con cálculo, no con defensa pasiva.","hint":"SIC-M03-P1/P2 · SIC-E05, SIC-E20 · Parte V, Plan A."},{"code":"SIC-P08","title":"Las negras adoptan ...d6 y ...g6. El centro blanco e4-d4 está construido y el fianchetto negro prepara presión sobre d4 por la diagonal g7-a","fen":"rnbqkb1r/pp2pp1p/3p1np1/8/3PP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 6","uci":"e2e4 c7c5 c2c3 d7d6 d2d4 c5d4 c3d4 g8f6 b1c3 g7g6","notation":"e2e4 c7c5 c2c3 d7d6 d2d4 c5d4 c3d4 g8f6 b1c3 g7g6","stage":"Ampliación A","explanation":"Cf3, Ae3/Ae2, O-O y decidir entre f3 o d5 solo después de neutralizar la ruptura ...d5.","idea":"Cf3, Ae3/Ae2, O-O y decidir entre f3 o d5 solo después de neutralizar la ruptura ...d5.","hint":"SIC-E10, SIC-E21 · Parte IV, esquema ...d6/...g6 · Plan D."},{"code":"SIC-P09","title":"La estructura se ha cerrado con e5-d4 contra e6-d5. El carácter de la partida deja de ser abierto y se aproxima a una Francesa con c3.","fen":"r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5","uci":"e2e4 c7c5 c2c3 e7e6 d2d4 d7d5 e4e5 b8c6 g1f3","notation":"e2e4 c7c5 c2c3 e7e6 d2d4 d7d5 e4e5 b8c6 g1f3","stage":"Ampliación A","explanation":"Desarrollar, enrocar y preparar c4 contra d5. Ab5 puede aumentar presión sobre c6 antes de resolver el centro.","idea":"Desarrollar, enrocar y preparar c4 contra d5. Ab5 puede aumentar presión sobre c6 antes de resolver el centro.","hint":"SIC-S05 · SIC-E09, SIC-E23 · Parte V, Plan D."},{"code":"SIC-P10","title":"Tras ...g6 y la liquidación central, el blanco tiene un peón avanzado en d5; negras desarrollan Cf6 y preparan ...Ag7.","fen":"rnbqkb1r/pp2pp1p/5np1/3P4/3P4/8/PP3PPP/RNBQKBNR w KQkq - 1 6","uci":"e2e4 c7c5 c2c3 g7g6 d2d4 c5d4 c3d4 d7d5 e4d5 g8f6","notation":"e2e4 c7c5 c2c3 g7g6 d2d4 c5d4 c3d4 d7d5 e4d5 g8f6","stage":"Ampliación A","explanation":"Cf3, Cc3 y desarrollo rápido. Si el peón d5 cae, usar el tiempo para activar piezas y ocupar columnas.","idea":"Cf3, Cc3 y desarrollo rápido. Si el peón d5 cae, usar el tiempo para activar piezas y ocupar columnas.","hint":"SIC-E08, SIC-E24 · Parte IV, 2...g6 · Finales de peón aislado."},{"code":"SIC-P11","title":"Las negras jugaron ...e5 y han cerrado el centro. El blanco enrocó y colocó el alfil en b5; d5 queda como casilla estratégica.","fen":"r1bqkb1r/pp1pnppp/2n5/1Bp1p3/4P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq - 5 5","uci":"e2e4 c7c5 c2c3 e7e5 g1f3 b8c6 f1b5 g8e7 e1g1","notation":"e2e4 c7c5 c2c3 e7e5 g1f3 b8c6 f1b5 g8e7 e1g1","stage":"Ampliación A","explanation":"Mantener la presión, completar Te1/d3 o d4 según la respuesta negra y usar d5 como casilla de entrada.","idea":"Mantener la presión, completar Te1/d3 o d4 según la respuesta negra y usar d5 como casilla de entrada.","hint":"SIC-E14, SIC-E25 · Parte IV, 2...e5 · Método O.P.E.R.A."},{"code":"SIC-P12","title":"Las negras invirtieron un tiempo en ...a6; el blanco respondió ocupando d4. Tras los cambios y ...Cf6, el peón d5 blanco gana espacio.","fen":"rnbqkb1r/1p2pppp/p4n2/3P4/3P4/8/PP3PPP/RNBQKBNR w KQkq - 1 6","uci":"e2e4 c7c5 c2c3 a7a6 d2d4 c5d4 c3d4 d7d5 e4d5 g8f6","notation":"e2e4 c7c5 c2c3 a7a6 d2d4 c5d4 c3d4 d7d5 e4d5 g8f6","stage":"Ampliación A","explanation":"Cf3, Cc3 y Ae2/Ac4; aceptar devolver d5 si el negro gana demasiados tiempos atacándolo.","idea":"Cf3, Cc3 y Ae2/Ac4; aceptar devolver d5 si el negro gana demasiados tiempos atacándolo.","hint":"SIC-E15, SIC-E25 · Parte IV, 2...a6 · Parte XII, mapa de memoria."}];
const variants=[{"code":"SIC-S01","title":"SIC-S01","level":"800–1400","response":"Estructura 1","risk":"Medio","theory":"Media","central":"Blancas: sostener d4, desarrollar y usar f4 o Ac4 solo cuando el rey esté seguro.","recommendation":"Estudiar primero","summary":"Identifica la tensión central antes de elegir un plan.","moves":"e2e4 c7c5 c2c3 g8f6 e4e5 f6d5 d2d4 c5d4 c3d4 d7d6 g1f3","fen":"rnbqkb1r/pp2pppp/3p4/3nP3/3P4/5N2/PP3PPP/RNBQKB1R b KQkq - 1 6","whitePlans":["Blancas: sostener d4, desarrollar y usar f4 o Ac4 solo cuando el rey esté seguro."],"blackPlans":["Negras: golpear la base con ...d6, ...Cc6 y, si es posible, ...dxe5 o ...d5."],"question":"¿Qué plan describe mejor «SIC-S01»?","options":["Blancas: sostener d4, desarrollar y usar f4 o Ac4 solo cuando el rey esté seguro.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Blancas: sostener d4, desarrollar y usar f4 o Ac4 solo cuando el rey esté seguro."},{"code":"SIC-S02","title":"SIC-S02","level":"800–1400","response":"Estructura 2","risk":"Medio","theory":"Media","central":"Blancas: Cf3, Ae2, O-O; mantener opciones de c4 o dxc5 cuando la táctica lo permita.","recommendation":"Estudiar primero","summary":"Identifica la tensión central antes de elegir un plan.","moves":"e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 g8f6 g1f3 e7e6","fen":"rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 6","whitePlans":["Blancas: Cf3, Ae2, O-O; mantener opciones de c4 o dxc5 cuando la táctica lo permita."],"blackPlans":["Negras: acelerar desarrollo y buscar presión sobre d4 antes de que el espacio blanco se estabilice."],"question":"¿Qué plan describe mejor «SIC-S02»?","options":["Blancas: Cf3, Ae2, O-O; mantener opciones de c4 o dxc5 cuando la táctica lo permita.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Blancas: Cf3, Ae2, O-O; mantener opciones de c4 o dxc5 cuando la táctica lo permita."},{"code":"SIC-S03","title":"SIC-S03","level":"800–1400","response":"Estructura 3","risk":"Variable","theory":"Práctica","central":"Blancas: actividad, ejes e5/c5 y torres centrales; evitar una defensa puramente estática.","recommendation":"Incorporar después","summary":"Identifica la tensión central antes de elegir un plan.","moves":"e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 c5d4 c3d4 b8c6 g1f3 c8g4","fen":"r3kbnr/pp2pppp/2n5/3q4/3P2b1/5N2/PP3PPP/RNBQKB1R w KQkq - 3 7","whitePlans":["Blancas: actividad, ejes e5/c5 y torres centrales; evitar una defensa puramente estática."],"blackPlans":["Negras: bloquear d4, cambiar piezas y atacar el peón desde d8, c6 y f6."],"question":"¿Qué plan describe mejor «SIC-S03»?","options":["Blancas: actividad, ejes e5/c5 y torres centrales; evitar una defensa puramente estática.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Blancas: actividad, ejes e5/c5 y torres centrales; evitar una defensa puramente estática."},{"code":"SIC-S04","title":"SIC-S04","level":"800–1400","response":"Estructura 4","risk":"Variable","theory":"Práctica","central":"Blancas: completar desarrollo y preparar d5 o c5 cuando el rival no pueda bloquear.","recommendation":"Incorporar después","summary":"Identifica la tensión central antes de elegir un plan.","moves":"e2e4 c7c5 c2c3 d7d5 e4d5 d8d5 d2d4 g8f6 g1f3 e7e6 f1e2 f8e7 e1g1 e8g8 c3c4","fen":"rnb2rk1/pp2bppp/4pn2/2pq4/2PP4/5N2/PP2BPPP/RNBQ1RK1 b - - 0 8","whitePlans":["Blancas: completar desarrollo y preparar d5 o c5 cuando el rival no pueda bloquear."],"blackPlans":["Negras: provocar avances prematuros, instalar piezas en d5/c6 y buscar cambios."],"question":"¿Qué plan describe mejor «SIC-S04»?","options":["Blancas: completar desarrollo y preparar d5 o c5 cuando el rival no pueda bloquear.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Blancas: completar desarrollo y preparar d5 o c5 cuando el rival no pueda bloquear."},{"code":"SIC-S05","title":"SIC-S05","level":"800–1400","response":"Estructura 5","risk":"Variable","theory":"Práctica","central":"Blancas: preparar c4, Ab5 o h4 solo después de desarrollar; buscar presión sobre d5.","recommendation":"Incorporar después","summary":"Identifica la tensión central antes de elegir un plan.","moves":"e2e4 c7c5 c2c3 e7e6 d2d4 d7d5 e4e5 b8c6 g1f3 g8e7 f1d3 e7g6","fen":"r1bqkb1r/pp3ppp/2n1p1n1/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R w KQkq - 5 7","whitePlans":["Blancas: preparar c4, Ab5 o h4 solo después de desarrollar; buscar presión sobre d5."],"blackPlans":["Negras: ...f6 o ...cxd4 según la colocación de las piezas, y contrajuego en c-file si se abre."],"question":"¿Qué plan describe mejor «SIC-S05»?","options":["Blancas: preparar c4, Ab5 o h4 solo después de desarrollar; buscar presión sobre d5.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Blancas: preparar c4, Ab5 o h4 solo después de desarrollar; buscar presión sobre d5."},{"code":"SIC-S06","title":"SIC-S06","level":"800–1400","response":"Estructura 6","risk":"Variable","theory":"Práctica","central":"Blancas: activar rey y torres, fijar c6 y crear una segunda debilidad sin precipitar e6.","recommendation":"Incorporar después","summary":"Identifica la tensión central antes de elegir un plan.","moves":"e2e4 c7c5 c2c3 b8c6 d2d4 c5d4 c3d4 d7d5 e4d5 d8d5 g1f3 e7e5 b1c3 f8b4 c1d2 b4c3 d2c3 e5e4 f3e5 c6e5 d4e5 d5d1 e1d1 g8e7 f1b5 e7c6 b5c6 b7c6","fen":"r1b1k2r/p4ppp/2p5/4P3/4p3/2B5/PP3PPP/R2K3R w kq - 0 15","whitePlans":["Blancas: activar rey y torres, fijar c6 y crear una segunda debilidad sin precipitar e6."],"blackPlans":["Negras: usar columnas abiertas y la pareja de alfiles/casillas para compensar la estructura."],"question":"¿Qué plan describe mejor «SIC-S06»?","options":["Blancas: activar rey y torres, fijar c6 y crear una segunda debilidad sin precipitar e6.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Blancas: activar rey y torres, fijar c6 y crear una segunda debilidad sin precipitar e6."}];
const exercises=[{"id":"SIC-E01","kind":"exercise","title":"¿Qué cambia estratégicamente después de 1...c5?","chapter":"Parte XIII","movesUci":["e2e4","c7c5"],"fen":"rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq c6 0 2","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P01","manualReference":"SIC-E01","tags":[],"openingId":"siciliana"},{"id":"SIC-E02","kind":"exercise","title":"¿Cuál es el objetivo concreto de 2.c3 y cuál es su precio?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3"],"fen":"rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P02","manualReference":"SIC-E02","tags":[],"openingId":"siciliana"},{"id":"SIC-E03","kind":"exercise","title":"Tras 2...Cf6, ¿por qué 3.e5 es más coherente que una defensa pasiva de e4?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","g8f6"],"fen":"rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 1 3","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P03","manualReference":"SIC-E03","tags":[],"openingId":"siciliana"},{"id":"SIC-E04","kind":"exercise","title":"Tras 2...d5 3.exd5 Dxd5, ¿qué debe priorizar el blanco?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5"],"fen":"rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 4","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P05","manualReference":"SIC-E04","tags":[],"openingId":"siciliana"},{"id":"SIC-E05","kind":"exercise","title":"Si las negras han jugado ...Cc6 sin golpear e4, ¿qué oportunidad tiene el blanco?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","b8c6","d2d4","c5d4","c3d4"],"fen":"r1bqkbnr/pp1ppppp/2n5/8/3PP3/8/PP3PPP/RNBQKBNR b KQkq - 0 4","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P07","manualReference":"SIC-E05","tags":[],"openingId":"siciliana"},{"id":"SIC-E06","kind":"exercise","title":"En la cadena d4-e5, ¿qué peón es la base que el negro quiere atacar?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","g8f6","e4e5","f6d5","d2d4","c5d4","c3d4","d7d6","g1f3"],"fen":"rnbqkb1r/pp2pppp/3p4/3nP3/3P4/5N2/PP3PPP/RNBQKB1R b KQkq - 1 6","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S01","manualReference":"SIC-E06","tags":[],"openingId":"siciliana"},{"id":"SIC-E07","kind":"exercise","title":"¿Cómo debe jugar el bando que tiene el peón aislado d4?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5","d2d4","c5d4","c3d4","b8c6","g1f3","c8g4"],"fen":"r3kbnr/pp2pppp/2n5/3q4/3P2b1/5N2/PP3PPP/RNBQKB1R w KQkq - 3 7","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S03","manualReference":"SIC-E07","tags":[],"openingId":"siciliana"},{"id":"SIC-E08","kind":"exercise","title":"¿Cuál es la condición para que los peones colgantes c4-d4 sean una fuerza?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5","d2d4","g8f6","g1f3","e7e6","f1e2","f8e7","e1g1","e8g8","c3c4"],"fen":"rnb2rk1/pp2bppp/4pn2/2pq4/2PP4/5N2/PP2BPPP/RNBQ1RK1 b - - 0 8","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S04","manualReference":"SIC-E08","tags":[],"openingId":"siciliana"},{"id":"SIC-E09","kind":"exercise","title":"La posición se ha cerrado con e5-d4 contra e6-d5. ¿Qué plan cambia?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","e7e6","d2d4","d7d5","e4e5","b8c6","g1f3"],"fen":"r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P09","manualReference":"SIC-E09","tags":[],"openingId":"siciliana"},{"id":"SIC-E10","kind":"exercise","title":"Contra ...d6 y ...g6, ¿qué debe vigilar el blanco antes de atacar en el flanco de rey?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","d7d6","d2d4","c5d4","c3d4","g8f6","b1c3","g7g6"],"fen":"rnbqkb1r/pp2pp1p/3p1np1/8/3PP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P08","manualReference":"SIC-E10","tags":[],"openingId":"siciliana"},{"id":"SIC-E11","kind":"exercise","title":"Tras la simplificación del centro, ¿por qué el enroque adquiere prioridad?","chapter":"Parte XIII","movesUci":[],"fen":"r2qkb1r/pp1bpppp/1nn5/1B2N3/3P4/8/PP3PPP/RNBQK2R w KQkq - 1 10","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M01-P3","manualReference":"SIC-E11","tags":[],"openingId":"siciliana"},{"id":"SIC-E12","kind":"exercise","title":"Con peones c4-d4 y piezas desarrolladas, ¿qué avance debe calcular el blanco?","chapter":"Parte XIII","movesUci":[],"fen":"r2r2k1/ppq1bppp/2b1pn2/8/2P5/2N1B3/PPQ1BPPP/R2R2K1 w - - 4 15","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M02-P4","manualReference":"SIC-E12","tags":[],"openingId":"siciliana"},{"id":"SIC-E13","kind":"exercise","title":"Tras provocar peones c doblados negros, ¿qué cambia con el cambio de damas?","chapter":"Parte XIII","movesUci":[],"fen":"r1b1k2r/p4ppp/2p5/4P3/4p3/2B5/PP3PPP/R2K3R w kq - 0 15","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M03-P4","manualReference":"SIC-E13","tags":[],"openingId":"siciliana"},{"id":"SIC-E14","kind":"exercise","title":"Contra ...e5, ¿qué casilla central se convierte en objetivo natural?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","e7e5","g1f3","b8c6","f1b5","g8e7","e1g1"],"fen":"r1bqkb1r/pp1pnppp/2n5/1Bp1p3/4P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq - 5 5","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P11","manualReference":"SIC-E14","tags":[],"openingId":"siciliana"},{"id":"SIC-E15","kind":"exercise","title":"Si el negro invierte un tiempo en ...a6, ¿cómo se 'castiga' correctamente?","chapter":"Parte XIII","movesUci":["e2e4","c7c5","c2c3","a7a6","d2d4","c5d4","c3d4","d7d5","e4d5","g8f6"],"fen":"rnbqkb1r/1p2pppp/p4n2/3P4/3P4/8/PP3PPP/RNBQKBNR w KQkq - 1 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P12","manualReference":"SIC-E15","tags":[],"openingId":"siciliana"},{"id":"SIC-E16","kind":"exercise","title":"Compara 3.e5 con 3.d3: ¿qué respuesta negra debes temer si eliges la opción lenta?","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","g8f6"],"fen":"rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 1 3","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P03","manualReference":"SIC-E16","tags":[],"openingId":"siciliana"},{"id":"SIC-E17","kind":"exercise","title":"¿Conviene perseguir el caballo d5 con c4 inmediatamente o terminar desarrollo? Explica la casilla que puede cederse.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","g8f6","e4e5","f6d5","d2d4","c5d4","g1f3"],"fen":"rnbqkb1r/pp1ppppp/8/3nP3/3p4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 1 5","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P04","manualReference":"SIC-E17","tags":[],"openingId":"siciliana"},{"id":"SIC-E18","kind":"exercise","title":"Propón dos candidatas de desarrollo y explica por qué una salida temprana de dama blanca sería inferior.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5"],"fen":"rnb1kbnr/pp2pppp/8/2pq4/8/2P5/PP1P1PPP/RNBQKBNR w KQkq - 0 4","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P05","manualReference":"SIC-E18","tags":[],"openingId":"siciliana"},{"id":"SIC-E19","kind":"exercise","title":"¿Qué debe hacer el blanco si las negras añaden ...Cc6 contra d4? Diseña una secuencia de tres jugadas por ideas, no por memoria.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5","d2d4","g8f6","g1f3","e7e6"],"fen":"rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P06","manualReference":"SIC-E19","tags":[],"openingId":"siciliana"},{"id":"SIC-E20","kind":"exercise","title":"¿Qué ruptura negra es más importante anticipar: ...d5 o ...b5? Justifica por el centro.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","b8c6","d2d4","c5d4","c3d4"],"fen":"r1bqkbnr/pp1ppppp/2n5/8/3PP3/8/PP3PPP/RNBQKBNR b KQkq - 0 4","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P07","manualReference":"SIC-E20","tags":[],"openingId":"siciliana"},{"id":"SIC-E21","kind":"exercise","title":"Construye un plan de cinco jugadas blancas que incluya seguridad del rey y una ruptura central.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","d7d6","d2d4","c5d4","c3d4","g8f6","b1c3","g7g6"],"fen":"rnbqkb1r/pp2pp1p/3p1np1/8/3PP3/2N5/PP3PPP/R1BQKBNR w KQkq - 0 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P08","manualReference":"SIC-E21","tags":[],"openingId":"siciliana"},{"id":"SIC-E22","kind":"exercise","title":"¿Qué pieza blanca es la peor y qué ruta concreta puede mejorarla antes de jugar c4?","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","e7e6","d2d4","d7d5","e4e5","b8c6","g1f3"],"fen":"r1bqkbnr/pp3ppp/2n1p3/2ppP3/3P4/2P2N2/PP3PPP/RNBQKB1R b KQkq - 2 5","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P09","manualReference":"SIC-E22","tags":[],"openingId":"siciliana"},{"id":"SIC-E23","kind":"exercise","title":"¿Debe defenderse d5 con más piezas o devolverse el peón para ganar desarrollo? Explica el criterio.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","g7g6","d2d4","c5d4","c3d4","d7d5","e4d5","g8f6"],"fen":"rnbqkb1r/pp2pp1p/5np1/3P4/3P4/8/PP3PPP/RNBQKBNR w KQkq - 1 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P10","manualReference":"SIC-E23","tags":[],"openingId":"siciliana"},{"id":"SIC-E24","kind":"exercise","title":"Compara d4 inmediato con O-O/Ae3: ¿qué cambia si el centro se abre con el rey en e1?","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","e7e5","g1f3","b8c6","f1b5","g8e7","e1g1"],"fen":"r1bqkb1r/pp1pnppp/2n5/1Bp1p3/4P3/2P2N2/PP1P1PPP/RNBQ1RK1 b kq - 5 5","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P11","manualReference":"SIC-E24","tags":[],"openingId":"siciliana"},{"id":"SIC-E25","kind":"exercise","title":"¿Cómo aprovechar ...a6 sin sobreextender el centro? Nombra una secuencia natural de desarrollo.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","a7a6","d2d4","c5d4","c3d4","d7d5","e4d5","g8f6"],"fen":"rnbqkb1r/1p2pppp/p4n2/3P4/3P4/8/PP3PPP/RNBQKBNR w KQkq - 1 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-P12","manualReference":"SIC-E25","tags":[],"openingId":"siciliana"},{"id":"SIC-E26","kind":"exercise","title":"Señala una ruptura blanca y una negra en la cadena d4-e5; explica qué pieza debe estar lista antes.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","g8f6","e4e5","f6d5","d2d4","c5d4","c3d4","d7d6","g1f3"],"fen":"rnbqkb1r/pp2pppp/3p4/3nP3/3P4/5N2/PP3PPP/RNBQKB1R b KQkq - 1 6","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S01","manualReference":"SIC-E26","tags":[],"openingId":"siciliana"},{"id":"SIC-E27","kind":"exercise","title":"¿Cuándo es útil c4 en el centro tenso de Barmen y qué casilla puede debilitar?","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5","d2d4","g8f6","g1f3","e7e6"],"fen":"rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S02","manualReference":"SIC-E27","tags":[],"openingId":"siciliana"},{"id":"SIC-E28","kind":"exercise","title":"Propón un plan activo para el peón aislado d4 y una simplificación que deberías evitar.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5","d2d4","c5d4","c3d4","b8c6","g1f3","c8g4"],"fen":"r3kbnr/pp2pppp/2n5/3q4/3P2b1/5N2/PP3PPP/RNBQKB1R w KQkq - 3 7","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S03","manualReference":"SIC-E28","tags":[],"openingId":"siciliana"},{"id":"SIC-E29","kind":"exercise","title":"¿Qué ocurre si juegas c5 y permites ...Cd5? Evalúa espacio frente a puesto avanzado.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5","d2d4","g8f6","g1f3","e7e6","f1e2","f8e7","e1g1","e8g8","c3c4"],"fen":"rnb2rk1/pp2bppp/4pn2/2pq4/2PP4/5N2/PP2BPPP/RNBQ1RK1 b - - 0 8","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S04","manualReference":"SIC-E29","tags":[],"openingId":"siciliana"},{"id":"SIC-E30","kind":"exercise","title":"Diseña el plan contra el centro tipo Francesa: ¿c4, f4 o ataque directo? Ordena prioridades.","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","e7e6","d2d4","d7d5","e4e5","b8c6","g1f3","g8e7","f1d3","e7g6"],"fen":"r1bqkb1r/pp3ppp/2n1p1n1/2ppP3/3P4/2PB1N2/PP3PPP/RNBQK2R w KQkq - 5 7","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S05","manualReference":"SIC-E30","tags":[],"openingId":"siciliana"},{"id":"SIC-E31","kind":"exercise","title":"En el final sin damas, ¿qué objetivo debe fijar el blanco antes de avanzar e6?","chapter":"Ampliación D","movesUci":["e2e4","c7c5","c2c3","b8c6","d2d4","c5d4","c3d4","d7d5","e4d5","d8d5","g1f3","e7e5","b1c3","f8b4","c1d2","b4c3","d2c3","e5e4","f3e5","c6e5","d4e5","d5d1","e1d1","g8e7","f1b5","e7c6","b5c6","b7c6"],"fen":"r1b1k2r/p4ppp/2p5/4P3/4p3/2B5/PP3PPP/R2K3R w kq - 0 15","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-S06","manualReference":"SIC-E31","tags":[],"openingId":"siciliana"},{"id":"SIC-E32","kind":"exercise","title":"Tras 2...Cf6, encuentra el mecanismo que conserva e4 y gana espacio sin perder un tiempo.","chapter":"Ampliación D","movesUci":[],"fen":"rnbqkb1r/pp1ppppp/5n2/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq - 1 3","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M01-P1","manualReference":"SIC-E32","tags":[],"openingId":"siciliana"},{"id":"SIC-E33","kind":"exercise","title":"Después de ...Cc6, ¿por qué d6 es el contragolpe lógico del negro y cómo debe prepararse el blanco?","chapter":"Ampliación D","movesUci":[],"fen":"r1bqkb1r/pp1ppppp/2n5/3nP3/3p4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 2 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M01-P2","manualReference":"SIC-E33","tags":[],"openingId":"siciliana"},{"id":"SIC-E34","kind":"exercise","title":"Con ambos reyes seguros, ¿qué columna semiabierta explica la colocación de la torre negra?","chapter":"Ampliación D","movesUci":[],"fen":"r4rk1/pp1qbppp/1nn1p3/1B6/3P4/2N1B3/PP3PPP/R2Q1RK1 w - - 4 14","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M01-P4","manualReference":"SIC-E34","tags":[],"openingId":"siciliana"},{"id":"SIC-E35","kind":"exercise","title":"Después de 2...d5, ¿por qué exd5 no 'regala el centro' al negro?","chapter":"Ampliación D","movesUci":[],"fen":"rnbqkbnr/pp2pppp/8/2pp4/4P3/2P5/PP1P1PPP/RNBQKBNR w KQkq d6 0 3","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M02-P1","manualReference":"SIC-E35","tags":[],"openingId":"siciliana"},{"id":"SIC-E36","kind":"exercise","title":"Con la dama negra en d5, ¿qué ganancias de tiempo son reales y cuáles imaginarias?","chapter":"Ampliación D","movesUci":[],"fen":"rnb1kb1r/pp3ppp/4pn2/2pq4/3P4/2P2N2/PP3PPP/RNBQKB1R w KQkq - 0 6","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M02-P2","manualReference":"SIC-E36","tags":[],"openingId":"siciliana"},{"id":"SIC-E37","kind":"exercise","title":"Antes de c4, identifica qué piezas deben estar desarrolladas para que los peones colgantes no sean débiles.","chapter":"Ampliación D","movesUci":[],"fen":"rnbq1rk1/pp2bppp/4pn2/8/2Pp4/2N2N2/PP2BPPP/R1BQ1RK1 w - - 0 10","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M02-P3","manualReference":"SIC-E37","tags":[],"openingId":"siciliana"},{"id":"SIC-E38","kind":"exercise","title":"Tras c5 y ...Cd5, decide si Cxd5 es cambio favorable y explica qué pieza negra mejora al recapturar.","chapter":"Ampliación D","movesUci":[],"fen":"2rr2k1/1pq2ppp/p3pb2/2Pb4/PP1B4/8/2Q1BPPP/2RR2K1 b - - 2 20","sideToMove":"black","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M02-P5","manualReference":"SIC-E38","tags":[],"openingId":"siciliana"},{"id":"SIC-E39","kind":"exercise","title":"Después de 11...Dxd1+, ¿por qué Rxd1 no es una tragedia pese a perder el derecho de enroque?","chapter":"Ampliación D","movesUci":[],"fen":"r1b1k1nr/pp3ppp/8/3qn3/3Pp3/2B5/PP3PPP/R2QKB1R w KQkq - 0 11","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M03-P3","manualReference":"SIC-E39","tags":[],"openingId":"siciliana"},{"id":"SIC-E40","kind":"exercise","title":"En el final finalizado por ...Rxd8, formula un plan de tres objetivos para cada bando.","chapter":"Ampliación D","movesUci":[],"fen":"3k4/p4ppp/2p1b3/4P3/4p3/1PB5/P3KPPP/8 w - - 0 20","sideToMove":"white","objective":"Comparar dos candidatas y anticipar la mejor respuesta rival.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Resolver desde la perspectiva del repertorio blanco.","blackPlan":"Calcular la respuesta negra más incómoda antes de decidir.","teachingContinuation":"SIC-M03-P5","manualReference":"SIC-E40","tags":[],"openingId":"siciliana"}];
const games=[{"code":"SIC-M01","title":"Mi Repertorio de Ajedrez · Cuaderno 4","subtitle":"Repertorio Alapin — Respuesta modelo","moves":["e2e4","c7c5","c2c3","g8f6","e4e5","f6d5","d2d4","c5d4","g1f3","b8c6","c3d4","d7d6","f1c4","d5b6","c4b5","d6e5","f3e5","c8d7","e5d7","d8d7","e1g1","e7e6","b1c3","f8e7","c1e3","e8g8","d1g4","f7f5","g4e2","a7a6","b5d3","b6d5","e3d2","a8c8"],"san":["e4","c5","c3","Nf6","e5","Nd5","d4","cxd4","Nf3","Nc6","cxd4","d6","Bc4","Nb6","Bb5","dxe5","Nxe5","Bd7","Nxd7","Qxd7","O-O","e6","Nc3","Be7","Be3","O-O","Qg4","f5","Qe2","a6","Bd3","Nd5","Bd2","Rac8"],"comments":{"0":"El peón negro gana espacio y expulsa al caballo, pero también fija casillas detrás de la cadena.","1":"Avanza el peón colgante para ganar espacio; el coste es entregar d5 como puesto avanzado.","2":"Prepara d4 con recaptura de peón; el precio es bloquear temporalmente la casilla c3 del caballo b1.","3":"Desarrolla atacando e4 antes de que d4 consolide el centro blanco.","4":"Las negras disputan el centro de inmediato y aceptan dejar d5 como casilla sensible.","5":"El caballo usa la casilla cedida por c5 y se convierte en bloqueador central.","6":"Ejecuta la idea de la Alapin: el blanco construye el centro antes de iniciar planes de flanco.","7":"El negro aclara el centro y busca demostrar que los peones blancos pueden convertirse en objetivos.","8":"Desarrolla, sostiene el centro y acelera el enroque; es una respuesta de coordinación, no de persecución.","9":"Interpone y desarrolla; el caballo busca bloquear e5 y sostener la estructura.","10":"El negro aclara el centro y busca demostrar que los peones blancos pueden convertirse en objetivos.","11":"Golpea la cadena desde su base, libera el alfil c8 y obliga al blanco a decidir cómo sostener e5.","12":"Desarrolla hacia una diagonal activa y aumenta la coordinación sin comprometer la estructura.","13":"El caballo abandona d5 sin perder función: ataca c4 y prepara reagrupación mientras el negro cuestiona e5.","14":"Conserva el alfil activo y añade presión sobre c6 antes de que el centro se liquide.","15":"La recaptura crea un peón avanzado que puede convertirse en espacio o en objetivo de bloqueo.","16":"El negro elimina el caballo central y fuerza una recaptura de peón que abre líneas.","17":"Desarrolla y conecta el flanco de dama, apoyando ...Bc6 o ...Rfd8 según la tensión.","18":"Elimina un defensor y reduce la coordinación negra antes de completar el desarrollo propio.","19":"La dama recupera sin perder material y deja al negro listo para ...e6 y ...Be7.","20":"Pone el rey a salvo y activa una torre; la apertura empieza a transformarse en medio juego.","21":"Consolida casillas centrales y libera el alfil f8, preparando un desarrollo completo.","22":"Ahora la casilla c3 está libre: el caballo entra en juego y aumenta presión sobre d5/e4.","23":"Completa el desarrollo del flanco de rey y prepara el enroque sin crear nuevas debilidades.","24":"Desarrolla con propósito: sostiene d4, conecta piezas y disputa casillas centrales.","25":"Pone el rey a salvo y activa una torre; la apertura empieza a transformarse en medio juego.","26":"La dama busca actividad sobre g7/e6, pero solo funciona porque el rey blanco ya está seguro.","27":"Las negras expulsan la dama y refuerzan e4, ganando espacio a cambio de cierta rigidez en el ala de rey.","28":"La dama se retira manteniendo apoyo central y dejando las torres libres para ocupar columnas.","29":"Gana espacio y pregunta al alfil dónde quedará; no resuelve el centro por sí sola.","30":"Reubica el alfil hacia h7 y mantiene influencia central con el rey ya a salvo.","31":"El caballo usa la casilla cedida por c5 y se convierte en bloqueador central.","32":"Rompe la clavada y prepara recapturar con el alfil para conservar una estructura limpia.","33":"La torre negra ocupa la columna c para aumentar presión sobre el ala de dama y el centro residual."}},{"code":"SIC-M02","title":"Mi Repertorio de Ajedrez · Cuaderno 4","subtitle":"Repertorio Alapin — Respuesta modelo","moves":["e2e4","c7c5","c2c3","d7d5","e4d5","d8d5","d2d4","g8f6","g1f3","e7e6","f1e2","f8e7","e1g1","e8g8","c3c4","d5d8","b1c3","c5d4","f3d4","c8d7","c1e3","b8c6","d4c6","d7c6","d1c2","d8c7","f1d1","f8d8","a1c1","a7a6","b2b4","a8c8","c4c5","f6d5","c3d5","c6d5","a2a4","e7f6","e3d4"],"san":["e4","c5","c3","d5","exd5","Qxd5","d4","Nf6","Nf3","e6","Be2","Be7","O-O","O-O","c4","Qd8","Nc3","cxd4","Nxd4","Bd7","Be3","Nc6","Nxc6","Bxc6","Qc2","Qc7","Rfd1","Rfd8","Rac1","a6","b4","Rac8","c5","Nd5","Nxd5","Bxd5","a4","Bf6","Bd4"],"comments":{"0":"El peón negro gana espacio y expulsa al caballo, pero también fija casillas detrás de la cadena.","1":"Avanza el peón colgante para ganar espacio; el coste es entregar d5 como puesto avanzado.","2":"Prepara d4 con recaptura de peón; el precio es bloquear temporalmente la casilla c3 del caballo b1.","3":"El peón modifica la estructura y obliga a reevaluar rupturas y casillas.","4":"Aclara el centro y obliga a la dama a recuperar; el objetivo es usar d4 para desarrollar con tiempo.","5":"Recupera el peón y acepta una dama temprana; como Cc3 está bloqueado, el blanco no gana un tempo automático.","6":"Ejecuta la idea de la Alapin: el blanco construye el centro antes de iniciar planes de flanco.","7":"Desarrolla atacando e4 antes de que d4 consolide el centro blanco.","8":"Desarrolla, sostiene el centro y acelera el enroque; es una respuesta de coordinación, no de persecución.","9":"Consolida casillas centrales y libera el alfil f8, preparando un desarrollo completo.","10":"Desarrolla sin crear blancos y prepara el enroque; prioriza coordinación antes de expandirse.","11":"Completa el desarrollo del flanco de rey y prepara el enroque sin crear nuevas debilidades.","12":"Pone el rey a salvo y activa una torre; la apertura empieza a transformarse en medio juego.","13":"Pone el rey a salvo y activa una torre; la apertura empieza a transformarse en medio juego.","14":"Gana espacio y obliga a la dama a retroceder, pero crea una estructura que deberá sostenerse con piezas.","15":"La dama vuelve a una casilla segura; el negro acepta la pérdida de tempo a cambio de una estructura sana.","16":"Ahora la casilla c3 está libre: el caballo entra en juego y aumenta presión sobre d5/e4.","17":"El negro aclara el centro y busca demostrar que los peones blancos pueden convertirse en objetivos.","18":"Recupera el peón central con una pieza activa y evita fijar de inmediato un peón aislado.","19":"Desarrolla y conecta el flanco de dama, apoyando ...Bc6 o ...Rfd8 según la tensión.","20":"Desarrolla con propósito: sostiene d4, conecta piezas y disputa casillas centrales.","21":"Interpone y desarrolla; el caballo busca bloquear e5 y sostener la estructura.","22":"Cambia una pieza negra activa y transforma la estructura antes de que el caballo consolide d4.","23":"El alfil recaptura activándose en una diagonal útil y mantiene una estructura flexible.","24":"Coordina dama y alfil sobre h7 y apoya las torres centrales.","25":"Iguala la presión en la columna c y sostiene posibles rupturas sin abandonar el centro.","26":"La torre ocupa la columna del peón central, donde la tensión puede abrir líneas.","27":"La torre negra se opone directamente en d y convierte d4 en objetivo estratégico.","28":"La otra torre ocupa c1 y completa la coordinación de piezas mayores.","29":"Gana espacio y pregunta al alfil dónde quedará; no resuelve el centro por sí sola.","30":"Gana espacio y sostiene c5, pero solo porque el desarrollo ya está completo.","31":"La torre negra ocupa la columna c para aumentar presión sobre el ala de dama y el centro residual.","32":"Avanza el peón colgante para ganar espacio; el coste es entregar d5 como puesto avanzado.","33":"El caballo usa la casilla cedida por c5 y se convierte en bloqueador central.","34":"El blanco elimina el bloqueador antes de que el caballo domine la posición.","35":"El alfil recaptura y gana actividad; el blanco debe valorar si el cambio del caballo compensó esta diagonal.","36":"Fija espacio en el ala de dama y prepara una estructura donde b5 puede ser controlado.","37":"El alfil se activa sobre la diagonal y presiona d4, buscando contrajuego antes de quedar restringido.","38":"El alfil blanco ocupa una casilla central para discutir la diagonal del alfil negro."}},{"code":"SIC-M03","title":"Mi Repertorio de Ajedrez · Cuaderno 4","subtitle":"Repertorio Alapin — Respuesta modelo","moves":["e2e4","c7c5","c2c3","b8c6","d2d4","c5d4","c3d4","d7d5","e4d5","d8d5","g1f3","e7e5","b1c3","f8b4","c1d2","b4c3","d2c3","e5e4","f3e5","c6e5","d4e5","d5d1","e1d1","g8e7","f1b5","e7c6","b5c6","b7c6","d1e2","c8e6","b2b3","e8c8","h1d1","d8d1","a1d1","h8d8","d1d8","c8d8"],"san":["e4","c5","c3","Nc6","d4","cxd4","cxd4","d5","exd5","Qxd5","Nf3","e5","Nc3","Bb4","Bd2","Bxc3","Bxc3","e4","Ne5","Nxe5","dxe5","Qxd1+","Kxd1","Ne7","Bb5+","Nc6","Bxc6+","bxc6","Ke2","Be6","b3","O-O-O","Rhd1","Rxd1","Rxd1","Rd8","Rxd8+","Kxd8"],"comments":{"0":"El peón negro gana espacio y expulsa al caballo, pero también fija casillas detrás de la cadena.","1":"Avanza el peón colgante para ganar espacio; el coste es entregar d5 como puesto avanzado.","2":"Prepara d4 con recaptura de peón; el precio es bloquear temporalmente la casilla c3 del caballo b1.","3":"Interpone y desarrolla; el caballo busca bloquear e5 y sostener la estructura.","4":"Ejecuta la idea de la Alapin: el blanco construye el centro antes de iniciar planes de flanco.","5":"El negro aclara el centro y busca demostrar que los peones blancos pueden convertirse en objetivos.","6":"El negro aclara el centro y busca demostrar que los peones blancos pueden convertirse en objetivos.","7":"El peón modifica la estructura y obliga a reevaluar rupturas y casillas.","8":"Aclara el centro y obliga a la dama a recuperar; el objetivo es usar d4 para desarrollar con tiempo.","9":"Recupera el peón y acepta una dama temprana; como Cc3 está bloqueado, el blanco no gana un tempo automático.","10":"Desarrolla, sostiene el centro y acelera el enroque; es una respuesta de coordinación, no de persecución.","11":"Las negras disputan el centro de inmediato y aceptan dejar d5 como casilla sensible.","12":"Ahora la casilla c3 está libre: el caballo entra en juego y aumenta presión sobre d5/e4.","13":"Clava y desarrolla con tempo, explotando que el rey blanco sigue en el centro.","14":"Rompe la clavada y prepara recapturar con el alfil para conservar una estructura limpia.","15":"El alfil recupera y mantiene piezas activas, aunque la estructura central ya ha cambiado.","16":"El alfil recupera y mantiene piezas activas, aunque la estructura central ya ha cambiado.","17":"El peón negro gana espacio y expulsa al caballo, pero también fija casillas detrás de la cadena.","18":"El caballo busca una casilla central donde puede ser cambiado sin perder tiempos.","19":"El negro elimina el caballo central y fuerza una recaptura de peón que abre líneas.","20":"La recaptura crea un peón avanzado que puede convertirse en espacio o en objetivo de bloqueo.","21":"El cambio de damas reduce la importancia del rey blanco en el centro y prepara una transición técnica.","22":"Sin damas, el rey puede recapturar activamente; perder el derecho de enroque ya pesa mucho menos.","23":"Desarrolla con idea de ...Nc6 y evita bloquear el alfil c8.","24":"El jaque obliga a una decisión y busca simplificar una pieza defensora antes del final.","25":"Interpone y desarrolla; el caballo busca bloquear e5 y sostener la estructura.","26":"El blanco elimina el caballo bloqueador y fuerza una estructura de peones doblados.","27":"La recaptura mantiene material, pero deja peones c6-c7 como objetivo potencial.","28":"El rey entra en juego: sin damas, centralizarlo es una mejora real, no un riesgo.","29":"El alfil se desarrolla sosteniendo c4/d5 y prepara la coordinación de torres.","30":"Frena ...c5 y prepara fijar la debilidad de c6 sin crear una ruptura inmediata.","31":"El rey negro se pone a salvo y la torre entra en d8, donde la columna abierta es útil.","32":"La torre blanca disputa la columna d y conecta la transición hacia un final de actividad.","33":"La torre blanca recupera manteniendo la columna y evitando quedar pasiva.","34":"La torre blanca recupera manteniendo la columna y evitando quedar pasiva.","35":"La torre negra fuerza otra simplificación y reduce las opciones tácticas.","36":"El blanco acepta el cambio porque el final favorece un plan de fijar peones débiles.","37":"El rey negro recaptura y se centraliza; ahora la actividad del rey decide más que la seguridad."}}];
const moveExplanations={"e2e4":"SIC-P02, SIC-P03, SIC-P05 · SIC-E01, SIC-E02 · Repertorio práctico de la Parte XII.","c7c5":"SIC-P02, SIC-P03, SIC-P05 · SIC-E01, SIC-E02 · Repertorio práctico de la Parte XII.","c2c3":"SIC-P03, SIC-P05, SIC-P07 · SIC-E02, SIC-E03, SIC-E04.","g8f6":"SIC-P04 · SIC-S01 · SIC-M01-P1 · SIC-E03, SIC-E16.","e4e5":"SIC-S01 · SIC-M01-P2 · SIC-E06, SIC-E17.","f6d5":"SIC-S01 · SIC-M01-P2 · SIC-E06, SIC-E17.","d2d4":"SIC-S01 · SIC-M01-P2 · SIC-E06, SIC-E17.","c5d4":"SIC-S01 · SIC-M01-P2 · SIC-E06, SIC-E17.","g1f3":"SIC-S01 · SIC-M01-P2 · SIC-E06, SIC-E17.","d7d5":"SIC-P06 · SIC-S02 · SIC-M02-P1/P2 · SIC-E04, SIC-E20.","e4d5":"SIC-P06 · SIC-S02 · SIC-M02-P1/P2 · SIC-E04, SIC-E20.","d8d5":"SIC-P06 · SIC-S02 · SIC-M02-P1/P2 · SIC-E04, SIC-E20.","e7e6":"SIC-S02, SIC-S04 · SIC-M02-P3 · SIC-E12, SIC-E22.","b8c6":"SIC-M03-P1/P2 · SIC-E05, SIC-E20 · Parte V, Plan A.","c3d4":"SIC-M03-P1/P2 · SIC-E05, SIC-E20 · Parte V, Plan A.","d7d6":"SIC-E10, SIC-E21 · Parte IV, esquema ...d6/...g6 · Plan D.","b1c3":"SIC-E10, SIC-E21 · Parte IV, esquema ...d6/...g6 · Plan D.","g7g6":"SIC-E10, SIC-E21 · Parte IV, esquema ...d6/...g6 · Plan D.","e7e5":"SIC-E14, SIC-E25 · Parte IV, 2...e5 · Método O.P.E.R.A.","f1b5":"SIC-E14, SIC-E25 · Parte IV, 2...e5 · Método O.P.E.R.A.","g8e7":"SIC-E14, SIC-E25 · Parte IV, 2...e5 · Método O.P.E.R.A.","e1g1":"SIC-E14, SIC-E25 · Parte IV, 2...e5 · Método O.P.E.R.A.","a7a6":"SIC-E15, SIC-E25 · Parte IV, 2...a6 · Parte XII, mapa de memoria."};
const lessonMoveContexts={"SIC-P01":"2.c3 para preparar d4, reducir la teoría de la Siciliana Abierta y llegar a estructuras repetibles. Responder con ...Cf6 o ...d5 antes de que e4-d4 se estabilice; si el blanco juega lento, golpear el centro.","SIC-P02":"Jugar d4 en cuanto el negro no lo impida; contra ...Cf6 responder con e5 y contra ...d5 aclarar el centro con exd5. 2...Cf6 ataca e4 con desarrollo; 2...d5 rompe de inmediato. 2...Cc6 es jugable, pero permite al blanco ocupar d4 con comodidad.","SIC-P03":"3.e5, después d4, Cf3 y desarrollo. No perseguir al caballo d5 con peones hasta asegurar la base de la cadena. Tras 3.e5 Cd5, preparar ...d6 para atacar la cadena e5-d4 y abrir el alfil c8.","SIC-P04":"Recapturar cxd4 cuando corresponda, desarrollar Ac4/Ae2, enrocar y sostener d4 antes de pensar en c4 o f4. ...Cc6 aumenta presión sobre d4/e5; ...d6 ataca la cadena; ...e6 prepara desarrollo y apoyo central.","SIC-P05":"4.d4, seguido de Cf3, Ae2 y O-O. c4 solo cuando gane espacio sin crear debilidades mayores. Desarrollar ...Cf6 y ...e6; retirar la dama si c4 la ataca, sin gastar más tiempos de los necesarios.","SIC-P06":"Ae2, O-O, y después c4 o Ae3 según la colocación negra. Si c4 gana un tiempo, preparar Cc3 y torres centrales. ...Ae7, ...O-O y ...Cc6; presionar d4 y aprovechar d5 si el centro blanco se fija.","SIC-P07":"Cf3, Cc3, Ae3/Ac4 y O-O; responder a ...d5 con cálculo, no con defensa pasiva. 4...d5 es el golpe principal; ...Nf6 también aumenta presión. ...e5 gana espacio pero deja d5 como casilla.","SIC-P08":"Cf3, Ae3/Ae2, O-O y decidir entre f3 o d5 solo después de neutralizar la ruptura ...d5. ...Ag7, ...O-O y ...d5. La presión central es más importante que una expansión de peones en el flanco de dama.","SIC-P09":"Desarrollar, enrocar y preparar c4 contra d5. Ab5 puede aumentar presión sobre c6 antes de resolver el centro. ...Nge7, ...Bd7 y luego ...f6 o ...cxd4 según la colocación blanca. El objetivo es atacar la cadena, no defender pasivamente.","SIC-P10":"Cf3, Cc3 y desarrollo rápido. Si el peón d5 cae, usar el tiempo para activar piezas y ocupar columnas. ...Ag7, O-O y presión sobre d5/d4. La prioridad es actividad, no bloquear el peón con demasiadas piezas.","SIC-P11":"Mantener la presión, completar Te1/d3 o d4 según la respuesta negra y usar d5 como casilla de entrada. ...d6, ...g6 o ...a6 para completar desarrollo y reducir presión. Evitar abrir el centro con el rey todavía en e8.","SIC-P12":"Cf3, Cc3 y Ae2/Ac4; aceptar devolver d5 si el negro gana demasiados tiempos atacándolo. ...e6 o ...g6, seguido de desarrollo y presión sobre d5. ...b5 solo cuando el centro ya no requiera atención inmediata."};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
const state = {
  completed: new Set(JSON.parse(localStorage.getItem("siciliana-progress") || "[]")),
  lesson: 0, lessonPly: 0, challenge: 0, selected: null, streak: 0,
  variant: 0, variantPly: 0, variantFlipped: false,
  variantReviews: JSON.parse(localStorage.getItem("siciliana-variant-reviews") || "{}"),
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

function lessonMoves(lesson) {
  return String(lesson.uci || "").split(/\s+/).filter(Boolean);
}

function lessonBoardAt(lesson, ply) {
  const moves = lessonMoves(lesson);
  return moves.length ? boardAt(moves, ply) : parseFen(lesson.fen || INITIAL_FEN);
}

function variantMoves(variant) {
  return String(variant.moves || "").split(/\s+/).filter(Boolean);
}

const practiceLessons = lessons.some(lesson => lessonMoves(lesson).length)
  ? lessons.filter(lesson => lessonMoves(lesson).length)
  : lessons;

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
  localStorage.setItem("siciliana-progress", JSON.stringify([...state.completed]));
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const button = document.createElement("button");
    button.className = `lesson-list-button ${i === state.lesson ? "active" : ""} ${state.completed.has(lesson.code) ? "done" : ""}`;
    button.innerHTML = `<span class="dot"></span><span>${lesson.code.replace("SIC-","")}</span><span class="lesson-name">${lesson.title}</span>`;
    button.addEventListener("click", () => { state.lesson=i; state.lessonPly=0; renderLesson(); });
    list.appendChild(button);
  });
}

function renderLesson() {
  const lesson = lessons[state.lesson], moves = lessonMoves(lesson);
  state.lessonPly = Math.min(state.lessonPly, moves.length);
  const last = state.lessonPly ? moves[state.lessonPly-1] : "";
  renderBoard(document.getElementById("lessonBoard"), lessonBoardAt(lesson, state.lessonPly), {lastMove:last ? [last.slice(0,2), last.slice(2,4)] : []});
  document.getElementById("lessonCode").textContent = lesson.code;
  document.getElementById("lessonStageLabel").textContent = lesson.stage;
  document.getElementById("lessonTitle").textContent = lesson.title;
  renderLessonSequence(moves, state.lessonPly);
  const activeMove = state.lessonPly ? moves[state.lessonPly - 1] : null;
  const activeSide = state.lessonPly % 2 === 1 ? "BLANCAS" : "NEGRAS";
  document.getElementById("lessonExplanation").textContent = activeMove ? lessonMoveExplanation(lesson, activeMove) : lesson.explanation;
  document.getElementById("lessonIdeaLabel").textContent = activeMove ? `LECTURA TRAS LA JUGADA DE ${activeSide}` : "IDEA CLAVE";
  document.getElementById("lessonIdea").textContent = lesson.idea;
  document.getElementById("lessonMoveCounter").textContent = moves.length ? `${state.lessonPly} / ${moves.length}` : "Diagrama";
  document.getElementById("lessonTurnLabel").textContent = moves.length ? (state.lessonPly ? `Última: ${formatMove(moves[state.lessonPly-1])}` : "Posición inicial") : "Posición editorial";
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
      state.lessonPly = lessonMoves(lessons[state.lesson]).length;
    }
  });
}

function nextLessonStep() {
  renderLessonStep(() => {
    const moves = lessonMoves(lessons[state.lesson]);
    if (state.lessonPly < moves.length) state.lessonPly++;
    else if (state.lesson < lessons.length - 1) {
      state.lesson++;
      state.lessonPly = 0;
    }
  });
}

function challengeData() {
  const lesson = practiceLessons[state.challenge], moves = lessonMoves(lesson);
  const target = moves.at(-1) || null;
  return { lesson, moves, target, board:target ? boardAt(moves, moves.length-1) : parseFen(lesson.fen || INITIAL_FEN) };
}

const practiceTransitionDelay = 420;

function pausePracticeTransition() {
  return new Promise(resolve => setTimeout(resolve, practiceTransitionDelay));
}

async function nextPracticeChallenge() {
  const currentIndex = state.challenge;
  const nextIndex = (currentIndex + 1) % practiceLessons.length;
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

  const currentMoves = lessonMoves(practiceLessons[currentIndex]);
  const nextMoves = lessonMoves(practiceLessons[nextIndex]);
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
  renderBoard(document.getElementById("practiceBoard"), board, {interactive:Boolean(target)});
  document.getElementById("practiceCode").textContent = lesson.code;
  document.getElementById("practiceLevel").textContent = lesson.stage;
  document.getElementById("practiceQuestion").textContent = target ? "¿Puedes repetir la última jugada?" : "¿Qué plan exige esta posición?";
  document.getElementById("practiceContext").textContent = target
    ? `Reconstruye la jugada que conduce a «${lesson.title}». Juegan ${moves.length % 2 ? "blancas" : "negras"}.`
    : `Observa «${lesson.title}», formula dos candidatas y contrástalas con la pista editorial.`;
  const feedback = document.getElementById("practiceFeedback");
  feedback.className = "feedback";
  feedback.innerHTML = '<span>PISTA</span><p id="practiceHint"></p>';
  document.getElementById("practiceHint").textContent = resetMessage ? "Visualiza qué pieza cumple la idea central de esta posición." : lesson.hint;
  document.getElementById("showHint").hidden = false;
  const nextButton = document.getElementById("nextChallenge");
  nextButton.hidden = Boolean(target);
  nextButton.disabled = false;
  nextButton.textContent = state.challenge === practiceLessons.length - 1 ? "Reiniciar práctica →" : "Siguiente posición →";
  document.getElementById("streak").textContent = state.streak;
  const dots = document.getElementById("challengeDots");
  dots.innerHTML = practiceLessons.map((_,i)=>`<i class="${i < state.challenge ? "done" : i === state.challenge ? "active" : ""}"></i>`).join("");
}

function handlePracticeSquare(square) {
  const data = challengeData();
  if (!data.target) return;
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
  localStorage.setItem("siciliana-variant-reviews", JSON.stringify(state.variantReviews));
  updateReviewCard();
}
function renderVariant() {
  const variant = variants[state.variant];
  const moves = variantMoves(variant);
  state.variantPly = Math.min(state.variantPly, moves.length);
  const last = state.variantPly ? moves[state.variantPly - 1] : "";
  const board = moves.length ? boardAt(moves, state.variantPly) : parseFen(variant.fen || INITIAL_FEN);
  renderBoard(document.getElementById("variantBoard"), board, {lastMove:last ? [last.slice(0,2), last.slice(2,4)] : [], flipped:state.variantFlipped});
  document.getElementById("variantFlip").textContent = state.variantFlipped ? "Ver desde blancas" : "Ver desde negras";
  document.getElementById("variantMoveCounter").textContent = moves.length ? `${state.variantPly} / ${moves.length}` : "Diagrama";
  document.getElementById("variantTurnLabel").textContent = moves.length ? (state.variantPly ? `Última: ${formatMove(last)}` : "Posición inicial") : "Posición editorial";
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
  if (!exercises.length) {
    document.getElementById("exerciseTitle").textContent = "Ejercicios en preparación editorial";
    document.getElementById("exerciseObjective").textContent = "Este paquete conserva las posiciones y estructuras, pero no incluye todavía la colección completa de ejercicios en el CSV.";
    document.getElementById("exerciseCounter").textContent = "0 / 0";
    document.getElementById("exercisePrev").disabled = true;
    document.getElementById("exerciseNext").disabled = true;
    document.getElementById("exerciseReveal").disabled = true;
    return;
  }
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
document.getElementById("showHint").addEventListener("click",()=>{document.getElementById("practiceHint").textContent=practiceLessons[state.challenge].hint;});
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
document.getElementById("variantEnd").addEventListener("click",()=>{state.variantPly=variantMoves(variants[state.variant]).length;renderVariant();});
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
  if (active==="variantes" && event.key==="ArrowRight" && state.variantPly<variantMoves(variants[state.variant]).length) {state.variantPly++;renderVariant();}
  if (active==="variantes" && event.key==="ArrowLeft" && state.variantPly>0) {state.variantPly--;renderVariant();}
  if (active==="partidas" && event.key==="ArrowRight" && state.gamePly<games[state.game].moves.length) {state.gamePly++;renderGame();}
  if (active==="partidas" && event.key==="ArrowLeft" && state.gamePly>0) {state.gamePly--;renderGame();}
  if (active==="ejercicios" && event.key==="ArrowRight" && state.exercise<exercises.length-1) selectExercise(state.exercise+1);
  if (active==="ejercicios" && event.key==="ArrowLeft" && state.exercise>0) selectExercise(state.exercise-1);
});

renderBoard(document.getElementById("heroBoard"), parseFen("rnbqkbnr/pp1ppppp/8/2p5/4P3/2P5/PP1P1PPP/RNBQKBNR b KQkq - 0 2"));
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
