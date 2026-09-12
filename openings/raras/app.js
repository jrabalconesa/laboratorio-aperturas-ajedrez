const PIECES={"P":"♙","N":"♘","B":"♗","R":"♖","Q":"♕","K":"♔","p":"♟","n":"♞","b":"♝","r":"♜","q":"♛","k":"♚"};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=[{"code":"RAR-P01","title":"Inglesa · 1.c4 e5","fen":"rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq e6 0 2","uci":"c2c4 e7e5","notation":"c2c4 e7e5","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"Cc3, g3, Ag2 y presión sobre d5/e5.","hint":"1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5."},{"code":"RAR-P02","title":"Inglesa · desarrollo y ...d5","fen":"r1bqkb1r/ppp2ppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 4 7","uci":"c2c4 e7e5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5b6 g1f3 b8c6","notation":"c2c4 e7e5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5b6 g1f3 b8c6","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"d3, Ae3, Tc1 y Ce4-c5/d6.","hint":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8."},{"code":"RAR-P03","title":"Réti · 1.Cf3 d5","fen":"rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq d6 0 2","uci":"g1f3 d7d5","notation":"g1f3 d7d5","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"g3/Ag2, c4 o d4, retrasando compromisos.","hint":"1.Cf3 d5 2.g3 Cf6 3.Ag2 g6 4.O-O Ag7."},{"code":"RAR-P04","title":"Réti · centro flexible","fen":"r1bq1rk1/pp2ppbp/2n2np1/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQ1RK1 w - - 1 8","uci":"g1f3 d7d5 g2g3 g8f6 f1g2 g7g6 e1g1 f8g7 d2d3 e8g8 b1d2 c7c5 e2e4 b8c6","notation":"g1f3 d7d5 g2g3 g8f6 f1g2 g7g6 e1g1 f8g7 d2d3 e8g8 b1d2 c7c5 e2e4 b8c6","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"c3, d4 o Cc4; presionar d6/e5.","hint":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8."},{"code":"RAR-P05","title":"Bird · 1.f4 d5","fen":"rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq d6 0 2","uci":"f2f4 d7d5","notation":"f2f4 d7d5","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"Cf3, e3, b3, Ab2, Ae2, O-O y Ce5.","hint":"1.f4 d5 2.Cf3 Cf6 3.e3 g6 4.b3 Ag7."},{"code":"RAR-P06","title":"Bird · ...c5 contra d4","fen":"r1bq1rk1/pp2ppbp/2n2np1/2pp4/5P2/1P2PN2/PBPPB1PP/RN1Q1RK1 w - - 2 8","uci":"f2f4 d7d5 g1f3 g8f6 e2e3 g7g6 b2b3 f8g7 c1b2 e8g8 f1e2 c7c5 e1g1 b8c6","notation":"f2f4 d7d5 g1f3 g8f6 e2e3 g7g6 b2b3 f8g7 c1b2 e8g8 f1e2 c7c5 e1g1 b8c6","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"Ce5, Af3, d3 y f5 cuando el centro esté estable.","hint":"8.Ce5 Ad7 9.Af3 Tc8 10.d3 d4."},{"code":"RAR-P07","title":"Larsen · 1.b3 e5","fen":"rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR w KQkq e6 0 2","uci":"b2b3 e7e5","notation":"b2b3 e7e5","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"Ab2, e3, Cf3, Ab5 y d4.","hint":"1.b3 e5 2.Ab2 Cc6 3.e3 Cf6 4.Ab5 Ad6."},{"code":"RAR-P08","title":"Larsen · ...e4 con apoyo","fen":"r1bqr1k1/pppp1ppp/2nb1n2/1B6/3Pp3/1P2PN2/PBP2PPP/RN1Q1RK1 w - - 0 8","uci":"b2b3 e7e5 c1b2 b8c6 e2e3 g8f6 f1b5 f8d6 g1f3 e8g8 e1g1 f8e8 d2d4 e5e4","notation":"b2b3 e7e5 c1b2 b8c6 e2e3 g8f6 f1b5 f8d6 g1f3 e8g8 e1g1 f8e8 d2d4 e5e4","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"Cfd2, c4 y ataque a e4/d5.","hint":"7.d4 e4 8.Cfd2 d5 9.c4 Af5."},{"code":"RAR-P09","title":"Sokolsky · 1.b4 e5","fen":"rnbqkbnr/pppp1ppp/8/4p3/1P6/8/P1PPPPPP/RNBQKBNR w KQkq e6 0 2","uci":"b2b4 e7e5","notation":"b2b4 e7e5","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"Ab2, e3, Cf3, d4 y a3 para ganar tiempo al alfil.","hint":"1.b4 e5 2.Ab2 Axb4 3.e3 d6 4.Cf3 Cf6."},{"code":"RAR-P10","title":"Sokolsky · centro y desarrollo","fen":"r1bq1rk1/ppp2ppp/2np1n2/b7/3p4/P3PN2/1BP1BPPP/RN1Q1RK1 w - - 0 9","uci":"b2b4 e7e5 c1b2 f8b4 e2e3 d7d6 g1f3 g8f6 f1e2 e8g8 e1g1 b8c6 a2a3 b4a5 d2d4 e5d4","notation":"b2b4 e7e5 c1b2 f8b4 e2e3 d7d6 g1f3 g8f6 f1e2 e8g8 e1g1 b8c6 a2a3 b4a5 d2d4 e5d4","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"Cxd4, Af3 y c4; ganar tiempos al alfil.","hint":"8.d4 exd4 9.Cxd4 Te8 10.c4 Ab6."},{"code":"RAR-P11","title":"Nimzowitsch · 1.Cc3 d5","fen":"rnbqkbnr/ppp1pppp/8/3p4/8/2N5/PPPPPPPP/R1BQKBNR w KQkq d6 0 2","uci":"b1c3 d7d5","notation":"b1c3 d7d5","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"d4/e4 y desarrollo rápido.","hint":"1.Cc3 d5 2.d4 Cf6 3.Af4 c5."},{"code":"RAR-P12","title":"Fianchetto · 1.g3 e5","fen":"r1bqk2r/ppp1bppp/2n2n2/3pp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq - 5 6","uci":"g2g3 e7e5 f1g2 d7d5 d2d3 g8f6 g1f3 b8c6 e1g1 f8e7","notation":"g2g3 e7e5 f1g2 d7d5 d2d3 g8f6 g1f3 b8c6 e1g1 f8e7","stage":"BASE","explanation":"Comprender la decisión concreta de la posición","idea":"Ag2, d3, Cf3, O-O y c4/e4.","hint":"1.g3 e5 2.Ag2 d5 3.d3 Cf6 4.Cf3 Cc6 5.O-O Ae7."}];
const variants=[{"code":"RAR-S01","title":"Inglesa: Siciliana con colores cambiados","level":"intermedio","response":"Estructura 1","risk":"Medio","theory":"Media","central":"Reconocer estructura, casilla crítica y ruptura","recommendation":"Estudiar primero","summary":"Identifica la tensión central antes de elegir un plan.","moves":"c2c4 e7e5 b1c3 g8f6 g2g3 d7d5 c4d5 f6d5 f1g2 d5b6 g1f3 b8c6","fen":"r1bqkb1r/ppp2ppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 4 7","whitePlans":["Fianchettar Ag2, enrocar, jugar d3 y buscar d4 o una maniobra Ce4-c5/d6.","Si las negras colocan piezas pasivamente, el espacio del centro se convierte en objetivos."],"blackPlans":["Coordinar las piezas y buscar contrajuego sin debilitar el centro."],"question":"¿Qué plan describe mejor «Inglesa: Siciliana con colores cambiados»?","options":["Fianchettar Ag2, enrocar, jugar d3 y buscar d4 o una maniobra Ce4-c5/d6.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Fianchettar Ag2, enrocar, jugar d3 y buscar d4 o una maniobra Ce4-c5/d6."},{"code":"RAR-S02","title":"Réti: centro d5-e5","level":"intermedio","response":"Estructura 2","risk":"Medio","theory":"Media","central":"Reconocer estructura, casilla crítica y ruptura","recommendation":"Estudiar primero","summary":"Identifica la tensión central antes de elegir un plan.","moves":"g1f3 d7d5 g2g3 g8f6 f1g2 g7g6 e1g1 f8g7 d2d3 e8g8 b1d2 c7c5 e2e4 b8c6","fen":"r1bq1rk1/pp2ppbp/2n2np1/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQ1RK1 w - - 1 8","whitePlans":["Preparar c3 y d4, o cerrar con e4 y maniobrar Cf1-e3.","El fianchetto Ag2 presiona el centro si las negras avanzan sin apoyo."],"blackPlans":["Enrocar primero; después ...Cc6 y ...e5 si el caballo f6 sostiene d5.","Cuando el blanco juega c3, ...d4 gana espacio solo si no entrega c4/e4 a un caballo."],"question":"¿Qué plan describe mejor «Réti: centro d5-e5»?","options":["Preparar c3 y d4, o cerrar con e4 y maniobrar Cf1-e3.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Preparar c3 y d4, o cerrar con e4 y maniobrar Cf1-e3."},{"code":"RAR-S03","title":"Bird: peón f adelantado","level":"intermedio","response":"Estructura 3","risk":"Variable","theory":"Práctica","central":"Reconocer estructura, casilla crítica y ruptura","recommendation":"Incorporar después","summary":"Identifica la tensión central antes de elegir un plan.","moves":"f2f4 d7d5 g1f3 g8f6 e2e3 g7g6 b2b3 f8g7 c1b2 e8g8 f1e2 c7c5 e1g1 b8c6","fen":"r1bq1rk1/pp2ppbp/2n2np1/2pp4/5P2/1P2PN2/PBPPB1PP/RN1Q1RK1 w - - 2 8","whitePlans":["Instalar Ce5, apoyar d3/d4 y usar f5 para ganar espacio contra el rey.","Si el centro negro queda fijo, Ab2 y Cf3 pueden concentrarse en e5/g7."],"blackPlans":["Enrocar, jugar ...c5 y ...Cc6; si el blanco juega d3, considerar ...d4 para limitar Ab2.","Contra f5-f6, priorizar bloqueo y coordinación antes que capturar peones."],"question":"¿Qué plan describe mejor «Bird: peón f adelantado»?","options":["Instalar Ce5, apoyar d3/d4 y usar f5 para ganar espacio contra el rey.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Instalar Ce5, apoyar d3/d4 y usar f5 para ganar espacio contra el rey."},{"code":"RAR-S04","title":"Larsen: alfil b2 contra centro","level":"intermedio","response":"Estructura 4","risk":"Variable","theory":"Práctica","central":"Reconocer estructura, casilla crítica y ruptura","recommendation":"Incorporar después","summary":"Identifica la tensión central antes de elegir un plan.","moves":"b2b3 e7e5 c1b2 b8c6 e2e3 g8f6 f1b5 f8d6 g1f3 e8g8 e1g1 f8e8 d2d4 e5e4","fen":"r1bqr1k1/pppp1ppp/2nb1n2/1B6/3Pp3/1P2PN2/PBP2PPP/RN1Q1RK1 w - - 0 8","whitePlans":["Atacar e5 con Ab2, Cf3 y d4; si ...e4 avanza, usar d4 y Ce5/d2 para atacar la cadena por su base."],"blackPlans":["Desarrollar ...Cc6, ...Cf6, ...Ad6, enrocar y solo entonces ...e4.","Tras el salto del caballo blanco, sostener e4 con piezas y preparar ...d5."],"question":"¿Qué plan describe mejor «Larsen: alfil b2 contra centro»?","options":["Atacar e5 con Ab2, Cf3 y d4; si ...e4 avanza, usar d4 y Ce5/d2 para atacar la cadena por su base.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Atacar e5 con Ab2, Cf3 y d4; si ...e4 avanza, usar d4 y Ce5/d2 para atacar la cadena por su base."},{"code":"RAR-S05","title":"Sokolsky: peón b4 como objetivo","level":"intermedio","response":"Estructura 5","risk":"Variable","theory":"Práctica","central":"Reconocer estructura, casilla crítica y ruptura","recommendation":"Incorporar después","summary":"Identifica la tensión central antes de elegir un plan.","moves":"b2b4 e7e5 c1b2 f8b4 e2e3 d7d6 g1f3 g8f6 f1e2 e8g8 e1g1 b8c6 a2a3 b4a5 d2d4 e5d4","fen":"r1bq1rk1/ppp2ppp/2np1n2/b7/3p4/P3PN2/1BP1BPPP/RN1Q1RK1 w - - 0 9","whitePlans":["Recuperar tiempos sobre el alfil con a3, desarrollar Ab2 y usar d4 para cuestionar e5.","El peón b avanzado busca espacio, no debe convertirse en una obsesión negra."],"blackPlans":["Ocupar e5, capturar b4 cuando sea seguro, jugar ...d6, ...Cf6 y enrocar.","Tras a3 ...Aa5, responder a d4 con ...exd4 si abre líneas para las piezas."],"question":"¿Qué plan describe mejor «Sokolsky: peón b4 como objetivo»?","options":["Recuperar tiempos sobre el alfil con a3, desarrollar Ab2 y usar d4 para cuestionar e5.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Recuperar tiempos sobre el alfil con a3, desarrollar Ab2 y usar d4 para cuestionar e5."},{"code":"RAR-S06","title":"Irregulares: centro clásico","level":"intermedio","response":"Estructura 6","risk":"Variable","theory":"Práctica","central":"Reconocer estructura, casilla crítica y ruptura","recommendation":"Incorporar después","summary":"Identifica la tensión central antes de elegir un plan.","moves":"g2g3 e7e5 f1g2 d7d5 d2d3 g8f6 g1f3 b8c6 e1g1 f8e7","fen":"r1bqk2r/ppp1bppp/2n2n2/3pp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq - 5 6","whitePlans":["Atacar el centro con c4/d4 o fianchettar Ag2.","Al no haber definido el peón c/d, el blanco conserva transposiciones; las negras deben responder a la estructura, no al nombre."],"blackPlans":["Desarrollar ...Cf6, ...Cc6, ...Ae7 y enrocar.","Mantener la opción ...d4 contra c3/e3 o ...e4 contra Cf3 solo si el avance gana tiempo."],"question":"¿Qué plan describe mejor «Irregulares: centro clásico»?","options":["Atacar el centro con c4/d4 o fianchettar Ag2.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Atacar el centro con c4/d4 o fianchettar Ag2."}];
const exercises=[{"id":"RAR-E01","kind":"exercise","title":"base · Juegan blancas tras 1.c4 e5. Si 2.Cc3, ¿qué respuesta negra desarrolla y pr…","chapter":"Parte XIII","movesUci":["c2c4","e7e5"],"fen":"rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq e6 0 2","sideToMove":"white","objective":"Juegan blancas tras 1.c4 e5. Si 2.Cc3, ¿qué respuesta negra desarrolla y prepara la ruptura temática?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: Juegan blancas tras 1.c4 e5. Si 2.Cc3, ¿qué respuesta negra desarrolla y prepara la ruptura temática?","blackPlan":"2...Cf6. Ataca e4, apoya ...d5 y permite ...Cc6. 2...f5?! gana espacio, pero mueve otro peón, debilita e6/g6 y deja el rey en e8. La continuación de repertorio es 2.Cc3 Cf6 3.g3 d5.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E01","tags":[],"openingId":"raras"},{"id":"RAR-E02","kind":"exercise","title":"base · En la Inglesa desarrollada, ¿qué debe hacer el negro si el blanco prepara d…","chapter":"Parte XIII","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6"],"fen":"r1bqkb1r/ppp2ppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 4 7","sideToMove":"white","objective":"En la Inglesa desarrollada, ¿qué debe hacer el negro si el blanco prepara d4 o Ce4?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En la Inglesa desarrollada, ¿qué debe hacer el negro si el blanco prepara d4 o Ce4?","blackPlan":"prioriza ...Ae7 y ...O-O, seguido de ...Te8; si Ce4 aparece, ...Cd4 es una respuesta concreta. ...f5 inmediato es inferior porque abre el ala de rey antes de completar el desarrollo.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E02","tags":[],"openingId":"raras"},{"id":"RAR-E03","kind":"exercise","title":"base · Tras 1.Cf3 d5, ¿qué respuesta negra conserva flexibilidad frente a 2.g3","chapter":"Parte XIII","movesUci":["g1f3","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/8/5N2/PPPPPPPP/RNBQKB1R w KQkq d6 0 2","sideToMove":"white","objective":"Tras 1.Cf3 d5, ¿qué respuesta negra conserva flexibilidad frente a 2.g3?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: Tras 1.Cf3 d5, ¿qué respuesta negra conserva flexibilidad frente a 2.g3?","blackPlan":"2...Cf6. Desarrolla, controla e4 y deja abiertas ...g6, ...e6 y ...c5. 2...d4?! avanzaría sin saber dónde estarán c3/e3 y puede regalar c4 como casilla de bloqueo.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E03","tags":[],"openingId":"raras"},{"id":"RAR-E04","kind":"exercise","title":"base · En el centro Réti con d5-c5 frente a e4-d3, ¿cuándo encaja ...d4","chapter":"Parte XIII","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5","e2e4","b8c6"],"fen":"r1bq1rk1/pp2ppbp/2n2np1/2pp4/4P3/3P1NP1/PPPN1PBP/R1BQ1RK1 w - - 1 8","sideToMove":"white","objective":"En el centro Réti con d5-c5 frente a e4-d3, ¿cuándo encaja ...d4?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En el centro Réti con d5-c5 frente a e4-d3, ¿cuándo encaja ...d4?","blackPlan":"...d4 encaja después de c3, porque gana espacio y obliga a decidir cxd4. Sin c3, mantener tensión o jugar ...e5 suele ser más preciso. La respuesta negra debe prever Cc4 como puesto de bloqueo.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E04","tags":[],"openingId":"raras"},{"id":"RAR-E05","kind":"exercise","title":"base · Tras 1.f4 d5, ¿qué debilidad blanca debes recordar sin buscar una táctica a…","chapter":"Parte XIII","movesUci":["f2f4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/5P2/8/PPPPP1PP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras 1.f4 d5, ¿qué debilidad blanca debes recordar sin buscar una táctica artificial?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: Tras 1.f4 d5, ¿qué debilidad blanca debes recordar sin buscar una táctica artificial?","blackPlan":"e3 y la diagonal e1-h4 son más sensibles, pero el método correcto es ...Cf6, ...g6, ...Ag7 y enroque. ...Dh4+ prematuro puede perder tiempos frente a g3/Cf3.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E05","tags":[],"openingId":"raras"},{"id":"RAR-E06","kind":"exercise","title":"base · En Bird con ...c5 y ...Cc6, el blanco puede jugar Ce5. ¿Qué preparación neg…","chapter":"Parte XIII","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6"],"fen":"r1bq1rk1/pp2ppbp/2n2np1/2pp4/5P2/1P2PN2/PBPPB1PP/RN1Q1RK1 w - - 2 8","sideToMove":"white","objective":"En Bird con ...c5 y ...Cc6, el blanco puede jugar Ce5. ¿Qué preparación negra hace útil ...d4?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En Bird con ...c5 y ...Cc6, el blanco puede jugar Ce5. ¿Qué preparación negra hace útil ...d4?","blackPlan":"...Ad7 y ...Tc8. Esas jugadas coordinan las piezas antes de ...d4. El negro no necesita expulsar Ce5 de inmediato; necesita que la ruptura central abra líneas para piezas ya activas.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E06","tags":[],"openingId":"raras"},{"id":"RAR-E07","kind":"exercise","title":"base · Tras 1.b3 e5, ¿por qué ...e4 no debe jugarse en la segunda jugada","chapter":"Parte XIII","movesUci":["b2b3","e7e5"],"fen":"rnbqkbnr/pppp1ppp/8/4p3/8/1P6/P1PPPPPP/RNBQKBNR w KQkq e6 0 2","sideToMove":"white","objective":"Tras 1.b3 e5, ¿por qué ...e4 no debe jugarse en la segunda jugada?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: Tras 1.b3 e5, ¿por qué ...e4 no debe jugarse en la segunda jugada?","blackPlan":"porque todavía no existen ...Cf6, ...Cc6 ni ...Te8. El avance convertiría e4 en un objetivo y cedería d4. Primero 2.Ab2 Cc6 3.e3 Cf6; más tarde, con desarrollo y rey seguro, ...e4 puede ser temático.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E07","tags":[],"openingId":"raras"},{"id":"RAR-E08","kind":"exercise","title":"base · En la estructura Larsen con ...Te8 y d4, ¿cuándo sí es concreto ...e4","chapter":"Parte XIII","movesUci":["b2b3","e7e5","c1b2","b8c6","e2e3","g8f6","f1b5","f8d6","g1f3","e8g8","e1g1","f8e8","d2d4","e5e4"],"fen":"r1bqr1k1/pppp1ppp/2nb1n2/1B6/3Pp3/1P2PN2/PBP2PPP/RN1Q1RK1 w - - 0 8","sideToMove":"white","objective":"En la estructura Larsen con ...Te8 y d4, ¿cuándo sí es concreto ...e4?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En la estructura Larsen con ...Te8 y d4, ¿cuándo sí es concreto ...e4?","blackPlan":"cuando ...e4 gana un tiempo sobre Cf3 y el centro puede sostenerse con ...d5. Después el negro debe desarrollar el alfil c8; defender e4 con ...f5 por reflejo debilitaría demasiado el rey.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E08","tags":[],"openingId":"raras"},{"id":"RAR-E09","kind":"exercise","title":"base · Tras 1.b4 e5, ¿qué condición debe cumplir ...Axb4","chapter":"Parte XIII","movesUci":["b2b4","e7e5"],"fen":"rnbqkbnr/pppp1ppp/8/4p3/1P6/8/P1PPPPPP/RNBQKBNR w KQkq e6 0 2","sideToMove":"white","objective":"Tras 1.b4 e5, ¿qué condición debe cumplir ...Axb4?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: Tras 1.b4 e5, ¿qué condición debe cumplir ...Axb4?","blackPlan":"el alfil debe poder retirarse a a5/e7 y el negro no debe retrasar el enroque. Si la captura obliga a varios movimientos del mismo alfil mientras el blanco juega d4, el peón extra pierde valor práctico.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E09","tags":[],"openingId":"raras"},{"id":"RAR-E10","kind":"exercise","title":"base · En Sokolsky, después de a3 ...Aa5 y d4, ¿qué cambio central ayuda a activar…","chapter":"Parte XIII","movesUci":["b2b4","e7e5","c1b2","f8b4","e2e3","d7d6","g1f3","g8f6","f1e2","e8g8","e1g1","b8c6","a2a3","b4a5","d2d4","e5d4"],"fen":"r1bq1rk1/ppp2ppp/2np1n2/b7/3p4/P3PN2/1BP1BPPP/RN1Q1RK1 w - - 0 9","sideToMove":"white","objective":"En Sokolsky, después de a3 ...Aa5 y d4, ¿qué cambio central ayuda a activar las torres negras?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En Sokolsky, después de a3 ...Aa5 y d4, ¿qué cambio central ayuda a activar las torres negras?","blackPlan":"...exd4. Aclara el centro y permite ...Te8/Ab6. ...e4 cerraría la posición y podría dejar d4 como casilla fuerte blanca, además de mantener al alfil a5 fuera de juego.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E10","tags":[],"openingId":"raras"},{"id":"RAR-E11","kind":"exercise","title":"base · Tras 1.Cc3 d5, ¿qué desarrollo negro protege d5 y controla e4","chapter":"Parte XIII","movesUci":["b1c3","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/8/2N5/PPPPPPPP/R1BQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras 1.Cc3 d5, ¿qué desarrollo negro protege d5 y controla e4?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: Tras 1.Cc3 d5, ¿qué desarrollo negro protege d5 y controla e4?","blackPlan":"...Cf6. Es la pieza natural: sostiene d5, controla e4 y deja ...c5/e6 disponibles. ...d4 inmediato gana espacio pero puede ceder e4 y crear una cadena rígida.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E11","tags":[],"openingId":"raras"},{"id":"RAR-E12","kind":"exercise","title":"base · En 1.g3 e5 2.Ag2 d5, ¿qué pieza negra debe salir antes de avanzar el centro…","chapter":"Parte XIII","movesUci":["g2g3","e7e5","f1g2","d7d5","d2d3","g8f6","g1f3","b8c6","e1g1","f8e7"],"fen":"r1bqk2r/ppp1bppp/2n2n2/3pp3/8/3P1NP1/PPP1PPBP/RNBQ1RK1 w kq - 5 6","sideToMove":"white","objective":"En 1.g3 e5 2.Ag2 d5, ¿qué pieza negra debe salir antes de avanzar el centro otra vez?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En 1.g3 e5 2.Ag2 d5, ¿qué pieza negra debe salir antes de avanzar el centro otra vez?","blackPlan":"...Cf6, seguido de ...Cc6 y ...Ae7. Avanzar ...d4 o ...e4 sin desarrollo puede convertir el espacio en objetivos. El rey debe estar cerca del enroque antes de abrir el centro.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E12","tags":[],"openingId":"raras"},{"id":"RAR-E13","kind":"exercise","title":"base · En la Inglesa, ¿qué pieza negra sostiene simultáneamente e5 y d4 tras el de…","chapter":"Parte XIII","movesUci":["c2c4","e7e5","b1c3","g8f6"],"fen":"rnbqkb1r/pppp1ppp/5n2/4p3/2P5/2N5/PP1PPPPP/R1BQKBNR w KQkq - 2 3","sideToMove":"white","objective":"En la Inglesa, ¿qué pieza negra sostiene simultáneamente e5 y d4 tras el desarrollo?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En la Inglesa, ¿qué pieza negra sostiene simultáneamente e5 y d4 tras el desarrollo?","blackPlan":"el caballo de c6. Su coordinación con Cf6 permite ...d5 y frena d4. Si se cambia sin razón, el blanco puede ocupar d5/d4 con más facilidad.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E13","tags":[],"openingId":"raras"},{"id":"RAR-E14","kind":"exercise","title":"base · En una posición Réti cerrada, ¿conviene cambiar en d4 automáticamente","chapter":"Parte XIII","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5"],"fen":"rnbqkb1r/ppp2ppp/8/3np3/8/2N3P1/PP1PPP1P/R1BQKBNR w KQkq - 0 5","sideToMove":"white","objective":"En una posición Réti cerrada, ¿conviene cambiar en d4 automáticamente?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En una posición Réti cerrada, ¿conviene cambiar en d4 automáticamente?","blackPlan":"no. El cambio solo es útil si deja un peón blanco objetivo o elimina un bloqueador. Si cxd4 abre c4 para un caballo blanco fuerte, mantener tensión puede ser mejor. La estructura, no la etiqueta, decide.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E14","tags":[],"openingId":"raras"},{"id":"RAR-E15","kind":"exercise","title":"base · En Bird, ¿qué casilla central controla el peón f4 y cómo afecta al plan negro","chapter":"Parte XIII","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6"],"fen":"r1bqkb1r/ppp2ppp/1nn5/4p3/8/2N2NP1/PP1PPPBP/R1BQK2R w KQkq - 4 7","sideToMove":"white","objective":"En Bird, ¿qué casilla central controla el peón f4 y cómo afecta al plan negro?","level":{"label":"base","minRating":null,"maxRating":null,"stage":"base"},"whitePlan":"Decisión a reconocer: En Bird, ¿qué casilla central controla el peón f4 y cómo afecta al plan negro?","blackPlan":"e5. El negro suele atacar por ...c5 y ...d4, usando ...d5 como base. Forzar ...e5 contra un peón f4 bien apoyado puede regalar e5 a un caballo blanco y perder coordinación.","teachingContinuation":"Ejercicio básico con solución específica y descarte de alternativa.","manualReference":"RAR-E15","tags":[],"openingId":"raras"},{"id":"RAR-E16","kind":"exercise","title":"progresivo · Juegan blancas tras el enroque negro. ¿Qué plan blanco debes anticipar y qu…","chapter":"Ampliación D","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6","e1g1","f8e7","d2d3","e8g8"],"fen":"r1bq1rk1/ppp1bppp/1nn5/4p3/8/2NP1NP1/PP2PPBP/R1BQ1RK1 w - - 1 9","sideToMove":"white","objective":"Juegan blancas tras el enroque negro. ¿Qué plan blanco debes anticipar y qué respuesta negra mantiene e5?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Juegan blancas tras el enroque negro. ¿Qué plan blanco debes anticipar y qué respuesta negra mantiene e5?","blackPlan":"espera 9.Ae3 y responde 9...Te8. La torre sostiene e5 y prepara ...Af8. 9...f5?! crea debilidades sin necesidad. La segunda candidata es ...Ae6, pero permite d4 con más libertad.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E16","tags":[],"openingId":"raras"},{"id":"RAR-E17","kind":"exercise","title":"progresivo · El blanco puede 11.Ce4. Compara ...Cd4 y ...f5 como respuesta.","chapter":"Ampliación D","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6","e1g1","f8e7","d2d3","e8g8","c1e3","f8e8","a1c1","e7f8"],"fen":"r1bqrbk1/ppp2ppp/1nn5/4p3/8/2NPBNP1/PP2PPBP/2RQ1RK1 w - - 5 11","sideToMove":"white","objective":"El blanco puede 11.Ce4. Compara ...Cd4 y ...f5 como respuesta.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: El blanco puede 11.Ce4. Compara ...Cd4 y ...f5 como respuesta.","blackPlan":"11...Cd4. Centraliza el caballo y prepara ...exd4 si hay cambio. ...f5 es inferior: debilita e6 y la diagonal del rey, y Ce4 puede seguir bien colocado.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E17","tags":[],"openingId":"raras"},{"id":"RAR-E18","kind":"exercise","title":"progresivo · Tras 12.Cxd4 exd4, ¿qué jugada negra sostiene el peón avanzado y limita Cc5","chapter":"Ampliación D","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6","e1g1","f8e7","d2d3","e8g8","c1e3","f8e8","a1c1","e7f8","c3e4","c6d4","f3d4","e5d4"],"fen":"r1bqrbk1/ppp2ppp/1n6/8/3pN3/3PB1P1/PP2PPBP/2RQ1RK1 w - - 0 13","sideToMove":"white","objective":"Tras 12.Cxd4 exd4, ¿qué jugada negra sostiene el peón avanzado y limita Cc5?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras 12.Cxd4 exd4, ¿qué jugada negra sostiene el peón avanzado y limita Cc5?","blackPlan":"13...c6. Sostiene d5, limita saltos y prepara ...Cd5. ...c5 inmediatamente fijaría d4 pero dejaría d5 más vulnerable y c-file sin preparación.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E18","tags":[],"openingId":"raras"},{"id":"RAR-E19","kind":"exercise","title":"progresivo · Con un caballo blanco en c5, ¿por qué ...Cd5 es una mejora de pieza","chapter":"Ampliación D","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6","e1g1","f8e7","d2d3","e8g8","c1e3","f8e8","a1c1","e7f8","c3e4","c6d4","f3d4","e5d4","e3f4","c7c6","e4c5","b6d5"],"fen":"r1bqrbk1/pp3ppp/2p5/2Nn4/3p1B2/3P2P1/PP2PPBP/2RQ1RK1 w - - 2 15","sideToMove":"white","objective":"Con un caballo blanco en c5, ¿por qué ...Cd5 es una mejora de pieza?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con un caballo blanco en c5, ¿por qué ...Cd5 es una mejora de pieza?","blackPlan":"...Cd5 controla b4, c3, e3 y f4 y desafía la presión blanca. ...b6 solo expulsa una pieza y crea huecos; ...Cd5 primero mejora la coordinación.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E19","tags":[],"openingId":"raras"},{"id":"RAR-E20","kind":"exercise","title":"progresivo · Después de ...b6, el blanco vuelve con Ce4. ¿Qué ruptura negra fija el cent…","chapter":"Ampliación D","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6","e1g1","f8e7","d2d3","e8g8","c1e3","f8e8","a1c1","e7f8","c3e4","c6d4","f3d4","e5d4","e3f4","c7c6","e4c5","b6d5","f4d2","a7a5","f1e1","b7b6"],"fen":"r1bqrbk1/5ppp/1pp5/p1Nn4/3p4/3P2P1/PP1BPPBP/2RQR1K1 w - - 0 17","sideToMove":"white","objective":"Después de ...b6, el blanco vuelve con Ce4. ¿Qué ruptura negra fija el centro y gana espacio?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Después de ...b6, el blanco vuelve con Ce4. ¿Qué ruptura negra fija el centro y gana espacio?","blackPlan":"...c5. Fija d4, gana espacio en ala de dama y restringe d3-d4. ...f5 sería menos coherente porque abre el rey y no resuelve el peón d4.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E20","tags":[],"openingId":"raras"},{"id":"RAR-E21","kind":"exercise","title":"progresivo · Con peones negros c5-d4 y piezas coordinadas, el blanco juega e3. ¿Qué resp…","chapter":"Ampliación D","movesUci":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6","e1g1","f8e7","d2d3","e8g8","c1e3","f8e8","a1c1","e7f8","c3e4","c6d4","f3d4","e5d4","e3f4","c7c6","e4c5","b6d5","f4d2","a7a5","f1e1","b7b6","c5e4","c6c5","a2a3","c8e6"],"fen":"r2qrbk1/5ppp/1p2b3/p1pn4/3pN3/P2P2P1/1P1BPPBP/2RQR1K1 w - - 1 19","sideToMove":"white","objective":"Con peones negros c5-d4 y piezas coordinadas, el blanco juega e3. ¿Qué respuesta transforma la estructura?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con peones negros c5-d4 y piezas coordinadas, el blanco juega e3. ¿Qué respuesta transforma la estructura?","blackPlan":"...dxe3. El cambio elimina la base e3 y abre líneas para las torres. Tras Axe3, el centro se simplifica hacia un final donde la actividad de torres pesa más que conservar espacio.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E21","tags":[],"openingId":"raras"},{"id":"RAR-E22","kind":"exercise","title":"progresivo · Tras 1.Cf3 d5 2.g3 Cf6, ¿qué desarrollo blanco esperas y cómo completa el n…","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6"],"fen":"rnbqkb1r/ppp1pppp/5n2/3p4/8/5NP1/PPPPPP1P/RNBQKB1R w KQkq - 1 3","sideToMove":"white","objective":"Tras 1.Cf3 d5 2.g3 Cf6, ¿qué desarrollo blanco esperas y cómo completa el negro el fianchetto?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras 1.Cf3 d5 2.g3 Cf6, ¿qué desarrollo blanco esperas y cómo completa el negro el fianchetto?","blackPlan":"3.Ag2 g6. Las negras mantienen d5, preparan ...Ag7 y enroque. 3...c5 también es posible, pero el repertorio prefiere terminar la seguridad del rey antes de definir el centro.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E22","tags":[],"openingId":"raras"},{"id":"RAR-E23","kind":"exercise","title":"progresivo · Con ambos alfiles fianchettados, ¿qué jugada blanca debes permitir antes de…","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7"],"fen":"rnbqk2r/ppp1ppbp/5np1/3p4/8/5NP1/PPPPPPBP/RNBQ1RK1 w kq - 2 5","sideToMove":"white","objective":"Con ambos alfiles fianchettados, ¿qué jugada blanca debes permitir antes de decidir ...c5?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con ambos alfiles fianchettados, ¿qué jugada blanca debes permitir antes de decidir ...c5?","blackPlan":"5.d3 O-O. Enrocar es más preciso que 5...d4?! porque el blanco aún no ha jugado c3/e4 y podría atacar la cadena con c4.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E23","tags":[],"openingId":"raras"},{"id":"RAR-E24","kind":"exercise","title":"progresivo · Tras ...c5, el blanco juega e4. ¿Qué pieza negra debe desarrollar para sost…","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5"],"fen":"rnbq1rk1/pp2ppbp/5np1/2pp4/8/3P1NP1/PPPNPPBP/R1BQ1RK1 w - c6 0 7","sideToMove":"white","objective":"Tras ...c5, el blanco juega e4. ¿Qué pieza negra debe desarrollar para sostener la presión sobre d4/e5?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras ...c5, el blanco juega e4. ¿Qué pieza negra debe desarrollar para sostener la presión sobre d4/e5?","blackPlan":"...Cc6. Desarrolla, sostiene d4 y prepara ...e5. ...d4 inmediato fijaría la posición sin haber decidido dónde va el caballo.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E24","tags":[],"openingId":"raras"},{"id":"RAR-E25","kind":"exercise","title":"progresivo · Con ...e5 jugado, el blanco prepara c3. ¿Cuál es la señal concreta para ...d4","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5","e2e4","b8c6","f1e1","e7e5"],"fen":"r1bq1rk1/pp3pbp/2n2np1/2ppp3/4P3/3P1NP1/PPPN1PBP/R1BQR1K1 w - e6 0 9","sideToMove":"white","objective":"Con ...e5 jugado, el blanco prepara c3. ¿Cuál es la señal concreta para ...d4?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con ...e5 jugado, el blanco prepara c3. ¿Cuál es la señal concreta para ...d4?","blackPlan":"tras c3, ...d4 gana espacio y obliga a decidir cxd4. Si el blanco no juega c3, mantener tensión conserva más flexibilidad. El negro debe anticipar Cc4 como bloqueador.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E25","tags":[],"openingId":"raras"},{"id":"RAR-E26","kind":"exercise","title":"progresivo · Después de cxd4 ...cxd4, el caballo blanco llega a c4. ¿Qué maniobra negra…","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5","e2e4","b8c6","f1e1","e7e5","c2c3","d5d4","c3d4","c5d4"],"fen":"r1bq1rk1/pp3pbp/2n2np1/4p3/3pP3/3P1NP1/PP1N1PBP/R1BQR1K1 w - - 0 11","sideToMove":"white","objective":"Después de cxd4 ...cxd4, el caballo blanco llega a c4. ¿Qué maniobra negra prepara su cambio?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Después de cxd4 ...cxd4, el caballo blanco llega a c4. ¿Qué maniobra negra prepara su cambio?","blackPlan":"...Ce8 seguido de ...Cd6. Desde d6 desafía Cc4 y sostiene f5/e4. ...b5 para expulsarlo sería más debilitante y no desarrolla una pieza.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E26","tags":[],"openingId":"raras"},{"id":"RAR-E27","kind":"exercise","title":"progresivo · Con Cc4 y a4, ¿qué desarrollo negro apunta a cambiar el bloqueador blanco","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5","e2e4","b8c6","f1e1","e7e5","c2c3","d5d4","c3d4","c5d4","d2c4","f6e8","a2a4","c8e6"],"fen":"r2qnrk1/pp3pbp/2n1b1p1/4p3/P1NpP3/3P1NP1/1P3PBP/R1BQR1K1 w - - 1 13","sideToMove":"white","objective":"Con Cc4 y a4, ¿qué desarrollo negro apunta a cambiar el bloqueador blanco?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con Cc4 y a4, ¿qué desarrollo negro apunta a cambiar el bloqueador blanco?","blackPlan":"...Ae6, seguido de ...Cd6 y ...Cxc4 si conviene. La idea es transformar una casilla fuerte blanca en un peón c4 objetivo tras bxc4.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E27","tags":[],"openingId":"raras"},{"id":"RAR-E28","kind":"exercise","title":"progresivo · Tras ...Cxc4 y bxc4, ¿qué torre negra debe ocupar una columna activa","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5","e2e4","b8c6","f1e1","e7e5","c2c3","d5d4","c3d4","c5d4","d2c4","f6e8","a2a4","c8e6","b2b3","e8d6","c1a3","d6c4"],"fen":"r2q1rk1/pp3pbp/2n1b1p1/4p3/P1npP3/BP1P1NP1/5PBP/R2QR1K1 w - - 0 15","sideToMove":"white","objective":"Tras ...Cxc4 y bxc4, ¿qué torre negra debe ocupar una columna activa?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras ...Cxc4 y bxc4, ¿qué torre negra debe ocupar una columna activa?","blackPlan":"...Te8. La torre presiona e4 y prepara ...Dd7. Una torre en c8 tendría menos objetivos inmediatos porque el peón c4 está bloqueado.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E28","tags":[],"openingId":"raras"},{"id":"RAR-E29","kind":"exercise","title":"progresivo · Con ...Dd7 y la torre en e8, el blanco juega Cg5. ¿Qué maniobra de alfil fu…","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5","e2e4","b8c6","f1e1","e7e5","c2c3","d5d4","c3d4","c5d4","d2c4","f6e8","a2a4","c8e6","b2b3","e8d6","c1a3","d6c4","b3c4","f8e8","a1b1","d8d7"],"fen":"r3r1k1/pp1q1pbp/2n1b1p1/4p3/P1PpP3/B2P1NP1/5PBP/1R1QR1K1 w - - 3 17","sideToMove":"white","objective":"Con ...Dd7 y la torre en e8, el blanco juega Cg5. ¿Qué maniobra de alfil fuerza una concesión?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con ...Dd7 y la torre en e8, el blanco juega Cg5. ¿Qué maniobra de alfil fuerza una concesión?","blackPlan":"...Ag4, provocando f3 y regresando a e6 si es necesario. El objetivo no es ganar material, sino debilitar casillas y mantener e-file activa.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E29","tags":[],"openingId":"raras"},{"id":"RAR-E30","kind":"exercise","title":"progresivo · Tras f3 ...Ae6, el blanco puede Cxe6. ¿Con qué pieza recaptura el negro y q…","chapter":"Ampliación D","movesUci":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5","e2e4","b8c6","f1e1","e7e5","c2c3","d5d4","c3d4","c5d4","d2c4","f6e8","a2a4","c8e6","b2b3","e8d6","c1a3","d6c4","b3c4","f8e8","a1b1","d8d7","f3g5","e6g4","f2f3","g4e6"],"fen":"r3r1k1/pp1q1pbp/2n1b1p1/4p1N1/P1PpP3/B2P1PP1/6BP/1R1QR1K1 w - - 1 19","sideToMove":"white","objective":"Tras f3 ...Ae6, el blanco puede Cxe6. ¿Con qué pieza recaptura el negro y qué plan nace?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras f3 ...Ae6, el blanco puede Cxe6. ¿Con qué pieza recaptura el negro y qué plan nace?","blackPlan":"...Txe6. La torre queda activa en sexta fila/e-file y puede doblarse o atacar c4. Recapturar con la dama, si fuera posible, sería más pasivo y expondría la dama a tiempos.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E30","tags":[],"openingId":"raras"},{"id":"RAR-E31","kind":"exercise","title":"progresivo · Tras 1.f4 d5 2.Cf3 Cf6, ¿qué estructura negra eliges frente a e3","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6"],"fen":"rnbqkb1r/ppp1pppp/5n2/3p4/5P2/5N2/PPPPP1PP/RNBQKB1R w KQkq - 2 3","sideToMove":"white","objective":"Tras 1.f4 d5 2.Cf3 Cf6, ¿qué estructura negra eliges frente a e3?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras 1.f4 d5 2.Cf3 Cf6, ¿qué estructura negra eliges frente a e3?","blackPlan":"...g6. Prepara ...Ag7 y enroque; después ...c5 cuestionará d4. ...e5 sería menos natural porque el peón f4 ya controla e5.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E31","tags":[],"openingId":"raras"},{"id":"RAR-E32","kind":"exercise","title":"progresivo · Con b3 y ...Ag7, ¿qué jugada blanca natural debes anticipar y qué sigue par…","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7"],"fen":"rnbqk2r/ppp1ppbp/5np1/3p4/5P2/1P2PN2/P1PP2PP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"Con b3 y ...Ag7, ¿qué jugada blanca natural debes anticipar y qué sigue para el negro?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con b3 y ...Ag7, ¿qué jugada blanca natural debes anticipar y qué sigue para el negro?","blackPlan":"5.Ab2 O-O. El negro no necesita atacar b2: enroca y prepara ...c5. La prioridad es completar desarrollo antes de romper.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E32","tags":[],"openingId":"raras"},{"id":"RAR-E33","kind":"exercise","title":"progresivo · Tras ...c5, ¿qué jugada blanca completa desarrollo y qué caballo negro debe…","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5"],"fen":"rnbq1rk1/pp2ppbp/5np1/2pp4/5P2/1P2PN2/PBPPB1PP/RN1QK2R w KQ c6 0 7","sideToMove":"white","objective":"Tras ...c5, ¿qué jugada blanca completa desarrollo y qué caballo negro debe salir?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras ...c5, ¿qué jugada blanca completa desarrollo y qué caballo negro debe salir?","blackPlan":"7.O-O Cc6. El caballo aumenta presión sobre d4/e5 y permite responder a Ce5. ...b6 sería más lento y no cuestiona el centro.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E33","tags":[],"openingId":"raras"},{"id":"RAR-E34","kind":"exercise","title":"progresivo · Con Ce5 en el centro, compara ...Ad7 y ...Cd7.","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6","f3e5","c8d7"],"fen":"r2q1rk1/pp1bppbp/2n2np1/2ppN3/5P2/1P2P3/PBPPB1PP/RN1Q1RK1 w - - 4 9","sideToMove":"white","objective":"Con Ce5 en el centro, compara ...Ad7 y ...Cd7.","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con Ce5 en el centro, compara ...Ad7 y ...Cd7.","blackPlan":"...Ad7. Desarrolla el alfil c8 y prepara ...Tc8. ...Cd7 puede desafiar Ce5, pero bloquea el alfil y coordina peor las piezas.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E34","tags":[],"openingId":"raras"},{"id":"RAR-E35","kind":"exercise","title":"progresivo · Con Tc8 y d3, ¿por qué ...d4 es ahora una ruptura bien preparada","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6","f3e5","c8d7","e2f3","a8c8","d2d3","d5d4"],"fen":"2rq1rk1/pp1bppbp/2n2np1/2p1N3/3p1P2/1P1PPB2/PBP3PP/RN1Q1RK1 w - - 0 11","sideToMove":"white","objective":"Con Tc8 y d3, ¿por qué ...d4 es ahora una ruptura bien preparada?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con Tc8 y d3, ¿por qué ...d4 es ahora una ruptura bien preparada?","blackPlan":"...d4 gana espacio y, tras exd4 cxd4, abre la columna c para la torre. Antes de ...Tc8/Ad7 la misma ruptura habría producido menos actividad.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E35","tags":[],"openingId":"raras"},{"id":"RAR-E36","kind":"exercise","title":"progresivo · Tras cambios en d4 y el cambio de caballos en d7, ¿qué casilla debe ocupar…","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6","f3e5","c8d7","e2f3","a8c8","d2d3","d5d4","e3d4","c5d4","e5d7","d8d7"],"fen":"2r2rk1/pp1qppbp/2n2np1/8/3p1P2/1P1P1B2/PBP3PP/RN1Q1RK1 w - - 0 13","sideToMove":"white","objective":"Tras cambios en d4 y el cambio de caballos en d7, ¿qué casilla debe ocupar el caballo negro restante?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras cambios en d4 y el cambio de caballos en d7, ¿qué casilla debe ocupar el caballo negro restante?","blackPlan":"...Cd5. El caballo centralizado presiona f4/e3/c3 y sostiene el peón d4. Un salto al borde como ...h5 no participa en la lucha central.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E36","tags":[],"openingId":"raras"},{"id":"RAR-E37","kind":"exercise","title":"progresivo · Después de Bxd5 ...Dxd5, el blanco juega a3. ¿Qué ruptura negra responde al…","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6","f3e5","c8d7","e2f3","a8c8","d2d3","d5d4","e3d4","c5d4","e5d7","d8d7","b1d2","f6d5","f3d5","d7d5"],"fen":"2r2rk1/pp2ppbp/2n3p1/3q4/3p1P2/1P1P4/PBPN2PP/R2Q1RK1 w - - 0 15","sideToMove":"white","objective":"Después de Bxd5 ...Dxd5, el blanco juega a3. ¿Qué ruptura negra responde al plan f5?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Después de Bxd5 ...Dxd5, el blanco juega a3. ¿Qué ruptura negra responde al plan f5?","blackPlan":"...e5. Cuestiona f4 y gana casillas centrales. ...h5 solo intentaría frenar f5 y dejaría al blanco jugar b4/f5 con comodidad.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E37","tags":[],"openingId":"raras"},{"id":"RAR-E38","kind":"exercise","title":"progresivo · Tras f5 ...Ce7, el blanco avanza f6. ¿Qué retirada del alfil conserva la di…","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6","f3e5","c8d7","e2f3","a8c8","d2d3","d5d4","e3d4","c5d4","e5d7","d8d7","b1d2","f6d5","f3d5","d7d5","a2a3","e7e5","f4f5","c6e7"],"fen":"2r2rk1/pp2npbp/6p1/3qpP2/3p4/PP1P4/1BPN2PP/R2Q1RK1 w - - 1 17","sideToMove":"white","objective":"Tras f5 ...Ce7, el blanco avanza f6. ¿Qué retirada del alfil conserva la diagonal y prepara un recurso de jaque?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Tras f5 ...Ce7, el blanco avanza f6. ¿Qué retirada del alfil conserva la diagonal y prepara un recurso de jaque?","blackPlan":"...Ah6. Evita quedar encerrado por f6-f7 y prepara ...Ae3+ cuando el peón capture en e7. ...Af8 sería más pasivo y bloquearía una torre.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E38","tags":[],"openingId":"raras"},{"id":"RAR-E39","kind":"exercise","title":"progresivo · Con peón blanco en e7 y ...Ae3+ disponible, ¿por qué el jaque es más fuerte…","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6","f3e5","c8d7","e2f3","a8c8","d2d3","d5d4","e3d4","c5d4","e5d7","d8d7","b1d2","f6d5","f3d5","d7d5","a2a3","e7e5","f4f5","c6e7","f5f6","g7h6","f6e7","h6e3"],"fen":"2r2rk1/pp2Pp1p/6p1/3qp3/3p4/PP1Pb3/1BPN2PP/R2Q1RK1 w - - 1 19","sideToMove":"white","objective":"Con peón blanco en e7 y ...Ae3+ disponible, ¿por qué el jaque es más fuerte que capturar un peón lateral?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Con peón blanco en e7 y ...Ae3+ disponible, ¿por qué el jaque es más fuerte que capturar un peón lateral?","blackPlan":"...Ae3+ obliga al rey a moverse y permite ...Tfe8. La prioridad es bloquear e7; cualquier captura lateral que ignore la promoción es estratégicamente incorrecta.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E39","tags":[],"openingId":"raras"},{"id":"RAR-E40","kind":"exercise","title":"progresivo · Después de ...Txe7, el peón pasado ha desaparecido. ¿Cuál es el plan de fin…","chapter":"Ampliación D","movesUci":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6","f3e5","c8d7","e2f3","a8c8","d2d3","d5d4","e3d4","c5d4","e5d7","d8d7","b1d2","f6d5","f3d5","d7d5","a2a3","e7e5","f4f5","c6e7","f5f6","g7h6","f6e7","h6e3","g1h1","f8e8","d2e4","e8e7"],"fen":"2r3k1/pp2rp1p/6p1/3qp3/3pN3/PP1Pb3/1BP3PP/R2Q1R1K w - - 0 21","sideToMove":"white","objective":"Después de ...Txe7, el peón pasado ha desaparecido. ¿Cuál es el plan de final de las negras?","level":{"label":"progresivo","minRating":null,"maxRating":null,"stage":"progresivo"},"whitePlan":"Plan/candidata blanca de la posición: Después de ...Txe7, el peón pasado ha desaparecido. ¿Cuál es el plan de final de las negras?","blackPlan":"centralizar la torre por e-file, cambiar damas si el cambio no cede actividad y atacar d3/a3. El negro ya no necesita tácticas contra el rey: debe convertir la coordinación en un final estable.","teachingContinuation":"Derivado de las partidas modelo; respuesta concreta posición por posición.","manualReference":"RAR-E40","tags":[],"openingId":"raras"}];
const games=[{"code":"RAR-M01","title":"Mi Repertorio de Ajedrez · RAR-M01","subtitle":"Blancas didácticas — Repertorio RAR","moves":["c2c4","e7e5","b1c3","g8f6","g2g3","d7d5","c4d5","f6d5","f1g2","d5b6","g1f3","b8c6","e1g1","f8e7","d2d3","e8g8","c1e3","f8e8","a1c1","e7f8","c3e4","c6d4","f3d4","e5d4","e3f4","c7c6","e4c5","b6d5","f4d2","a7a5","f1e1","b7b6","c5e4","c6c5","a2a3","c8e6","e2e3","d4e3","d2e3"],"san":["c4","e5","Nc3","Nf6","g3","d5","cxd5","Nxd5","Bg2","Nb6","Nf3","Nc6","O-O","Be7","d3","O-O","Be3","Re8","Rc1","Bf8","Ne4","Nd4","Nxd4","exd4","Bf4","c6","Nc5","Nd5","Bd2","a5","Re1","b6","Ne4","c5","a3","Be6","e3","dxe3","Bxe3"],"comments":{"0":"Ocupa d5 desde el flanco y conserva d/e peones flexibles.","1":"Reclama d4 y establece el centro negro del repertorio.","2":"Aumenta presión sobre d5 y prepara g3.","3":"Desarrolla atacando e4 y apoya la ruptura ...d5.","4":"Prepara Ag2 contra el centro negro.","5":"Golpea c4 antes de que d4 blanco consolide el centro.","6":"Aclara la tensión y obliga al negro a elegir recaptura.","7":"Recaptura desarrollando; la dama no sale temprano y d5 queda bajo control.","8":"Activa la diagonal larga hacia d5/b7.","9":"Retira el caballo sin perder coordinación y deja d5 libre.","10":"Desarrolla, controla e5 y prepara el enroque.","11":"Refuerza e5 y controla d4, la ruptura blanca principal.","12":"Pone el rey a salvo antes de d4/maniobras.","13":"Completa desarrollo y prepara un enroque sin concesiones.","14":"Sostiene e4/c4 y prepara Ae3.","15":"El rey queda seguro antes de abrir el centro.","16":"Desarrolla y mira b6/d4.","17":"Coloca la torre detrás de e5 y prepara ...Af8.","18":"La torre entra en la columna que puede abrirse con cambios centrales.","19":"Refuerza e7/g7 y libera e7 para maniobras sin tocar peones.","20":"Busca c5/d6 y aumenta presión central.","21":"Ocupa una casilla fuerte y obliga al blanco a resolver la tensión.","22":"Elimina el caballo avanzado antes de que domine c2/e2.","23":"Recaptura creando un peón avanzado y abre la columna e.","24":"Ataca d6/c7 y desarrolla con un objetivo concreto.","25":"Sostiene d5 y limita los saltos del caballo blanco.","26":"Aprovecha la casilla c5 para presionar b7/d7.","27":"Centraliza el caballo y neutraliza el salto sin debilitar peones.","28":"Retira el alfil conservando la diagonal y conecta torres.","29":"Fija espacio en el ala de dama y prepara ...b6 con más control.","30":"La torre enfrenta el peón e-file y apoya e3.","31":"Expulsa al caballo c5 ahora que d5 está bien controlada.","32":"Regresa al centro y bloquea d4.","33":"Fija la cadena c5-d4 y restringe d3-d4.","34":"Gana aire en el ala de dama y evita ...Bb4.","35":"Desarrolla la pieza menor restante hacia una diagonal útil.","36":"Ataca la base d4 y busca simplificar el centro.","37":"Transforma la cadena y abre líneas para las torres.","38":"Recupera el peón y entra en una transición de final."}},{"code":"RAR-M02","title":"Mi Repertorio de Ajedrez · RAR-M02","subtitle":"Blancas didácticas — Repertorio RAR","moves":["g1f3","d7d5","g2g3","g8f6","f1g2","g7g6","e1g1","f8g7","d2d3","e8g8","b1d2","c7c5","e2e4","b8c6","f1e1","e7e5","c2c3","d5d4","c3d4","c5d4","d2c4","f6e8","a2a4","c8e6","b2b3","e8d6","c1a3","d6c4","b3c4","f8e8","a1b1","d8d7","f3g5","e6g4","f2f3","g4e6","g5e6","e8e6","g2h3"],"san":["Nf3","d5","g3","Nf6","Bg2","g6","O-O","Bg7","d3","O-O","Nbd2","c5","e4","Nc6","Re1","e5","c3","d4","cxd4","cxd4","Nc4","Ne8","a4","Be6","b3","Nd6","Ba3","Nxc4","bxc4","Re8","Rb1","Qd7","Ng5","Bg4","f3","Be6","Nxe6","Rxe6","Bh3"],"comments":{"0":"Desarrolla sin comprometer peones y frena ...e5.","1":"Ocupa el centro y conserva abiertas ...c5 y ...e6.","2":"Prepara el fianchetto y mantiene c/d flexibles.","3":"Controla e4 y sostiene d5.","4":"Apunta al centro desde la diagonal larga.","5":"Prepara ...Ag7 y un enroque seguro.","6":"Protege el rey antes de definir el centro.","7":"Completa el fianchetto y aumenta presión sobre d4.","8":"Sostiene e4 y deja c-pawn libre.","9":"El negro asegura el rey antes de expandirse.","10":"Prepara e4 y maniobras a c4.","11":"Ataca d4 antes de que el blanco construya un centro estable.","12":"Ocupa el centro y restringe ...e5.","13":"Desarrolla y aumenta el control de d4/e5.","14":"Sostiene e4 y prepara c3.","15":"Fija el centro y limita d4 blanco.","16":"Prepara d4 y controla b4.","17":"Gana espacio porque c3 ya ha definido la estructura.","18":"Elimina la cuña antes de que se consolide.","19":"Recaptura conservando un peón avanzado en d4.","20":"Instala un bloqueador activo contra e5/d6.","21":"Reorienta el caballo hacia d6 para desafiar c4.","22":"Frena ...b5 y sostiene c4.","23":"Desarrolla con presión sobre c4 y prepara ...Nd6.","24":"Sostiene a4/c4 pero crea un posible objetivo en c4 tras cambio.","25":"Ataca c4 y mejora el caballo.","26":"Activa el alfil sobre d6/f8.","27":"Elimina el mejor bloqueador y busca inducir bxc4.","28":"Recaptura manteniendo material pero acepta un peón c4 vulnerable.","29":"Activa la torre contra e4 y la columna semiabierta.","30":"Activa la torre contra b7 y libera a-file.","31":"Conecta piezas y apoya maniobras de alfil/torre.","32":"Ataca e6 y busca presión táctica.","33":"Fuerza f3 o una concesión antes de volver a e6.","34":"Expulsa el alfil pero debilita e3/g3.","35":"Regresa manteniendo presión sobre c4 y d5.","36":"Elimina el defensor para reducir presión.","37":"Recaptura activando la torre en sexta fila.","38":"Ataca e6 y fuerza al negro a concretar el plan de final."}},{"code":"RAR-M03","title":"Mi Repertorio de Ajedrez · RAR-M03","subtitle":"Blancas didácticas — Repertorio RAR","moves":["f2f4","d7d5","g1f3","g8f6","e2e3","g7g6","b2b3","f8g7","c1b2","e8g8","f1e2","c7c5","e1g1","b8c6","f3e5","c8d7","e2f3","a8c8","d2d3","d5d4","e3d4","c5d4","e5d7","d8d7","b1d2","f6d5","f3d5","d7d5","a2a3","e7e5","f4f5","c6e7","f5f6","g7h6","f6e7","h6e3","g1h1","f8e8","d2e4","e8e7"],"san":["f4","d5","Nf3","Nf6","e3","g6","b3","Bg7","Bb2","O-O","Be2","c5","O-O","Nc6","Ne5","Bd7","Bf3","Rc8","d3","d4","exd4","cxd4","Nxd7","Qxd7","Nd2","Nd5","Bxd5","Qxd5","a3","e5","f5","Ne7","f6","Bh6","fxe7","Be3+","Kh1","Rfe8","Ne4","Rxe7"],"comments":{"0":"Controla e5 y gana espacio, a costa de debilitar e3/diagonales del rey.","1":"Responde con centro estable en vez de tácticas prematuras.","2":"Desarrolla y prepara e3/enroque.","3":"Desarrolla, controla e4 y sostiene d5.","4":"Abre el alfil f1 y consolida f4.","5":"Prepara un fianchetto seguro; ...e5 no es prioritario porque f4 controla e5.","6":"Prepara Ab2 contra el centro.","7":"Desarrolla hacia la diagonal larga.","8":"Apunta a e5 y g7.","9":"Pone el rey a salvo antes de ...c5.","10":"Prepara enroque y coordina piezas.","11":"Cuestiona d4 antes de que el blanco consolide el centro.","12":"Completa seguridad del rey.","13":"Aumenta presión sobre d4/e5.","14":"Instala el caballo en la casilla controlada por f4.","15":"Desarrolla la pieza peor situada y prepara ...Rc8.","16":"Refuerza e4/d5 y mira c6.","17":"Coloca la torre en la columna que se abrirá tras cambios en d4.","18":"Sostiene e4 y prepara un centro compacto.","19":"Gana espacio ahora que las piezas negras están coordinadas.","20":"Aclara la cuña antes de quedar restringido.","21":"Recaptura abriendo la columna c para la torre.","22":"Cambia una pieza defensora y reduce presión.","23":"Recaptura manteniendo la torre c8 activa.","24":"Ataca d4 y prepara c4/e4.","25":"Centraliza el caballo para sostener d4 y tocar f4/e3.","26":"Elimina el bloqueador antes de consolidarse.","27":"Recaptura manteniendo presión central.","28":"Da aire al ala de dama y prepara b4.","29":"Responde en el centro antes de que el ala blanca avance.","30":"Gana espacio y amenaza f6.","31":"Reubica el caballo para bloquear y controlar f5/g8.","32":"Avanza con intención de encerrar al alfil.","33":"Conserva el alfil y prepara un recurso de jaque en e3.","34":"Crea un peón pasado en séptima.","35":"Gana un tiempo sobre el rey antes de bloquear el peón.","36":"Sale del jaque manteniendo el peón e7.","37":"Coloca una torre delante del peón pasado, prioridad defensiva absoluta.","38":"Centraliza para apoyar e7 y d6.","39":"Elimina el peón pasado y entra en un final estable."}}];
const moveExplanations={"c2c4":"1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5. | Perseguir c4 con ...b5 sin completar desarrollo.","e7e5":"1.c4 e5 2.Cc3 Cf6 3.g3 d5 4.cxd5 Cxd5. | Perseguir c4 con ...b5 sin completar desarrollo.","b1c3":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","g8f6":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","g2g3":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","d7d5":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","c4d5":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","f6d5":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","f1g2":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","d5b6":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","g1f3":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","b8c6":"6...Cc6 7.O-O Ae7 8.d3 O-O 9.Ae3 Te8. | Dejar un caballo blanco en d5 sin posibilidad de cambio.","g7g6":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8. | Jugar ...d4 demasiado pronto y regalar c4 a un caballo estable.","e1g1":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8. | Jugar ...d4 demasiado pronto y regalar c4 a un caballo estable.","f8g7":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8. | Jugar ...d4 demasiado pronto y regalar c4 a un caballo estable.","d2d3":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8. | Jugar ...d4 demasiado pronto y regalar c4 a un caballo estable.","e8g8":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8. | Jugar ...d4 demasiado pronto y regalar c4 a un caballo estable.","b1d2":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8. | Jugar ...d4 demasiado pronto y regalar c4 a un caballo estable.","c7c5":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8. | Jugar ...d4 demasiado pronto y regalar c4 a un caballo estable.","e2e4":"8...e5 9.c3 d4 10.cxd4 cxd4 11.Cc4 Ce8. | Jugar ...d4 demasiado pronto y regalar c4 a un caballo estable.","f2f4":"1.f4 d5 2.Cf3 Cf6 3.e3 g6 4.b3 Ag7. | Intentar explotar f4 con ...Dh4+ sin comprobar g3/Cf3.","e2e3":"8.Ce5 Ad7 9.Af3 Tc8 10.d3 d4. | Jugar ...d4 sin tener Tc8/Ad7 y permitir Cxc6 seguido de exd4.","b2b3":"8.Ce5 Ad7 9.Af3 Tc8 10.d3 d4. | Jugar ...d4 sin tener Tc8/Ad7 y permitir Cxc6 seguido de exd4.","c1b2":"8.Ce5 Ad7 9.Af3 Tc8 10.d3 d4. | Jugar ...d4 sin tener Tc8/Ad7 y permitir Cxc6 seguido de exd4.","f1e2":"8.Ce5 Ad7 9.Af3 Tc8 10.d3 d4. | Jugar ...d4 sin tener Tc8/Ad7 y permitir Cxc6 seguido de exd4.","f1b5":"7.d4 e4 8.Cfd2 d5 9.c4 Af5. | Defender e4 con ...f5 y debilitar el rey cuando ...d5 basta.","f8d6":"7.d4 e4 8.Cfd2 d5 9.c4 Af5. | Defender e4 con ...f5 y debilitar el rey cuando ...d5 basta.","f8e8":"7.d4 e4 8.Cfd2 d5 9.c4 Af5. | Defender e4 con ...f5 y debilitar el rey cuando ...d5 basta.","d2d4":"7.d4 e4 8.Cfd2 d5 9.c4 Af5. | Defender e4 con ...f5 y debilitar el rey cuando ...d5 basta.","e5e4":"7.d4 e4 8.Cfd2 d5 9.c4 Af5. | Defender e4 con ...f5 y debilitar el rey cuando ...d5 basta.","b2b4":"1.b4 e5 2.Ab2 Axb4 3.e3 d6 4.Cf3 Cf6. | Perseguir el peón con ...a5/...b6 y abandonar el centro.","f8b4":"8.d4 exd4 9.Cxd4 Te8 10.c4 Ab6. | Conservar el peón de más a costa de una pieza fuera de juego.","d7d6":"8.d4 exd4 9.Cxd4 Te8 10.c4 Ab6. | Conservar el peón de más a costa de una pieza fuera de juego.","a2a3":"8.d4 exd4 9.Cxd4 Te8 10.c4 Ab6. | Conservar el peón de más a costa de una pieza fuera de juego.","b4a5":"8.d4 exd4 9.Cxd4 Te8 10.c4 Ab6. | Conservar el peón de más a costa de una pieza fuera de juego.","e5d4":"8.d4 exd4 9.Cxd4 Te8 10.c4 Ab6. | Conservar el peón de más a costa de una pieza fuera de juego.","f8e7":"1.g3 e5 2.Ag2 d5 3.d3 Cf6 4.Cf3 Cc6 5.O-O Ae7. | Creer que el centro grande justifica un ataque antes de enrocar."};
const lessonMoveContexts={"RAR-P01":"Cc3, g3, Ag2 y presión sobre d5/e5. ...Cf6, ...Cc6 y ...d5; si cambia cxd5, recapturar con caballo.","RAR-P02":"d3, Ae3, Tc1 y Ce4-c5/d6. Enrocar, ...Te8, ...Af8 y, si hace falta, ...c6.","RAR-P03":"g3/Ag2, c4 o d4, retrasando compromisos. ...d5, ...Cf6, enroque; adaptar ...c5/e5 a la transposición.","RAR-P04":"c3, d4 o Cc4; presionar d6/e5. ...e5, ...d4 si c3, y ...Ce8-d6.","RAR-P05":"Cf3, e3, b3, Ab2, Ae2, O-O y Ce5. ...d5, ...Cf6, ...g6, ...Ag7, ...O-O y ...c5.","RAR-P06":"Ce5, Af3, d3 y f5 cuando el centro esté estable. ...Ad7, ...Tc8 y ...d4; cambiar Ce5 si favorece la estructura.","RAR-P07":"Ab2, e3, Cf3, Ab5 y d4. ...Cc6, ...Cf6, ...Ad6, O-O, ...Te8.","RAR-P08":"Cfd2, c4 y ataque a e4/d5. ...d5, ...Af5 y sostener e4; cambiar en d4 si abre líneas favorables.","RAR-P09":"Ab2, e3, Cf3, d4 y a3 para ganar tiempo al alfil. ...e5, posible ...Axb4, ...d6, ...Cf6, O-O.","RAR-P10":"Cxd4, Af3 y c4; ganar tiempos al alfil. ...Te8, ...Ab6 y presión sobre d4/e3.","RAR-P11":"d4/e4 y desarrollo rápido. ...d5, ...Cf6, ...e6/c5 según centro.","RAR-P12":"Ag2, d3, Cf3, O-O y c4/e4. ...e5, ...d5, ...Cf6, ...Cc6, ...Ae7, O-O."};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
const state = {
  completed: new Set(JSON.parse(localStorage.getItem("raras-progress") || "[]")),
  lesson: 0, lessonPly: 0, challenge: 0, selected: null, streak: 0,
  variant: 0, variantPly: 0, variantFlipped: false,
  variantReviews: JSON.parse(localStorage.getItem("raras-variant-reviews") || "{}"),
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
  localStorage.setItem("raras-progress", JSON.stringify([...state.completed]));
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const button = document.createElement("button");
    button.className = `lesson-list-button ${i === state.lesson ? "active" : ""} ${state.completed.has(lesson.code) ? "done" : ""}`;
    button.innerHTML = `<span class="dot"></span><span>${lesson.code.replace("RAR-","")}</span><span class="lesson-name">${lesson.title}</span>`;
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
  localStorage.setItem("raras-variant-reviews", JSON.stringify(state.variantReviews));
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

renderBoard(document.getElementById("heroBoard"), parseFen("rnbqkbnr/pppp1ppp/8/4p3/2P5/8/PP1PPPPP/RNBQKBNR w KQkq e6 0 2"));
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
