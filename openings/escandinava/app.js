const PIECES={"P":"♙","N":"♘","B":"♗","R":"♖","Q":"♕","K":"♔","p":"♟","n":"♞","b":"♝","r":"♜","q":"♛","k":"♚"};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=[{"code":"SCA-P01","title":"1...d5 cambia la pregunta central","fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","uci":"e2e4 d7d5","notation":"e2e4 d7d5","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P02","title":"La dama recupera, pero queda expuesta","fen":"rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 3","uci":"e2e4 d7d5 e4d5 d8d5","notation":"e2e4 d7d5 e4d5 d8d5","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P03","title":"3...Da5 estabiliza la dama","fen":"rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P04","title":"...Cf6 empieza a devolver el tiempo","fen":"rnb1kb1r/ppp1pppp/5n2/q7/3P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 1 5","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P05","title":"...c6 fija el esqueleto","fen":"rnb1kb1r/pp2pppp/2p2n2/q7/3P4/2N2N2/PPP2PPP/R1BQKB1R w KQkq - 0 6","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P06","title":"...Af5 justifica el orden de jugadas","fen":"rn2kb1r/pp2pppp/2p2n2/q4b2/2BP4/2N2N2/PPP2PPP/R1BQK2R w KQkq - 2 7","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P07","title":"...e6 consolida sin encerrar al alfil","fen":"rn2kb1r/pp3ppp/2p1pn2/q4b2/2BP4/2N2N2/PPPB1PPP/R2QK2R w KQkq - 0 8","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P08","title":"...Ab4 crea una decisión concreta","fen":"rn2k2r/pp3ppp/2p1pn2/q4b2/1bBP4/2N2N2/PPPBQPPP/R3K2R w KQkq - 2 9","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P09","title":"O-O-O cambia la geometría del rey","fen":"r3k2r/pp1n1ppp/2p1pn2/q4b2/1bBP4/2N2N2/PPPBQPPP/2KR3R w kq - 4 10","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P10","title":"h3 anuncia la expansión","fen":"r3k2r/pp1n1ppp/2p1pn2/q4b2/1bBP4/2N2N1P/PPPBQPP1/2KR3R b kq - 0 10","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7 h2h3","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7 h2h3","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P11","title":"...O-O completa la fase de apertura","fen":"r4rk1/pp1n1ppp/2p1pn2/q4b2/1bBP4/2N2N1P/PPPBQPP1/2KR3R w - - 1 11","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7 h2h3 e8g8","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7 h2h3 e8g8","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SCA-P12","title":"g4 convierte el alfil en una decisión","fen":"r4rk1/pp1n1ppp/2p1pnb1/q7/1bBP2P1/2N2N1P/PPPBQP2/2KR3R w - - 1 12","uci":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7 h2h3 e8g8 g2g4 f5g6","notation":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7 h2h3 e8g8 g2g4 f5g6","stage":"Ampliación A","explanation":"11.g4 ataca Af5 y fija peones blancos en casillas que también pueden convertirse en objetivos si el ataque se frena.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."}];
const variants=[{"code":"SCA-S01","title":"Blancas","level":"800-1400 Elo","response":"Estructura 1","risk":"Medio","theory":"Media","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Estudiar primero","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5","fen":"rnb1kbnr/ppp1pppp/8/q7/8/2N5/PPPP1PPP/R1BQKBNR w KQkq - 2 4","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SCA-S02","title":"Blancas","level":"800-1400 Elo","response":"Estructura 2","risk":"Medio","theory":"Media","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Estudiar primero","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5","fen":"rn2kb1r/pp2pppp/2p2n2/q4b2/2BP4/2N2N2/PPP2PPP/R1BQK2R w KQkq - 2 7","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SCA-S03","title":"Blancas","level":"800-1400 Elo","response":"Estructura 3","risk":"Variable","theory":"Práctica","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4","fen":"rn2k2r/pp3ppp/2p1pn2/q4b2/1bBP4/2N2N2/PPPBQPPP/R3K2R w KQkq - 2 9","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SCA-S04","title":"Negras","level":"800-1400 Elo","response":"Estructura 4","risk":"Variable","theory":"Práctica","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 f1c4 c8f5 c1d2 e7e6 d1e2 f8b4 e1c1 b8d7 h2h3","fen":"r3k2r/pp1n1ppp/2p1pn2/q4b2/1bBP4/2N2N1P/PPPBQPP1/2KR3R b kq - 0 10","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Negras»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SCA-S05","title":"Blancas","level":"800-1400 Elo","response":"Estructura 5","risk":"Variable","theory":"Práctica","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 c1d2 c8f5 f1c4 e7e6 c3d5 a5d8 d5f6 d8f6 d2c3 f5g4 c4e2 f6d8 f3e5 g4e2 d1e2 f8e7 e2e4 d8d5 e4d5 c6d5","fen":"rn2k2r/pp2bppp/4p3/3pN3/3P4/2B5/PPP2PPP/R3K2R w KQkq - 0 16","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SCA-S06","title":"Blancas","level":"800-1400 Elo","response":"Estructura 6","risk":"Variable","theory":"Práctica","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"e2e4 d7d5 e4d5 d8d5 b1c3 d5a5 d2d4 g8f6 g1f3 c7c6 c1d2 c8f5 f1c4 e7e6 c3d5 a5d8 d5f6 d8f6 d2c3 f5g4 c4e2 f6d8 f3e5 g4e2 d1e2 f8e7 e2e4 d8d5 e4d5 c6d5 e1c1 e8g8 h1e1 b8c6 f2f3 a8c8 c1b1 b7b5 e1e3 a7a5 a2a3 b5b4 a3b4 a5b4","fen":"2r2rk1/4bppp/2n1p3/3pN3/1p1P4/2B1RP2/1PP3PP/1K1R4 w - - 0 23","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."}];
const exercises=[{"id":"SCA-E10","kind":"exercise","title":"800-1400 Elo · Tras c6, juegan las blancas. Compara Ac4 con Ad2: ¿qué candidata responde m…","chapter":"Parte X/XI/XIII","movesUci":["e2e4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras c6, juegan las blancas. Compara Ac4 con Ad2: ¿qué candidata responde mejor a la prioridad de peor pieza y qué réplica rival debes prever?","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Ac4. La jugada activa o cambia el alfil en c4; la decisión afecta a la presión sobre c3, e5 y el rey. Prevé Af5: es el recurso rival que debe entrar en el cálculo. Ad2 también es legal, pero aquí pospone peor pieza; por eso el orden concreto favorece Ac4.","manualReference":"SCA-E10","tags":[],"openingId":"escandinava"},{"id":"SCA-E08","kind":"exercise","title":"800-1400 Elo · Tras Cf6, juegan las blancas. Compara Cf3 con Ac4: ¿qué candidata responde…","chapter":"Parte X/XI/XIII","movesUci":["e2e4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras Cf6, juegan las blancas. Compara Cf3 con Ac4: ¿qué candidata responde mejor a la prioridad de cambio de piezas y qué réplica rival debes prever?","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Cf3. La jugada desarrolla el caballo hacia f3; además controla casillas centrales sin debilitar la estructura. Prevé c6: es el recurso rival que debe entrar en el cálculo. Ac4 también es legal, pero aquí pospone cambio de piezas; por eso el orden concreto favorece Cf3.","manualReference":"SCA-E08","tags":[],"openingId":"escandinava"},{"id":"SCA-E09","kind":"exercise","title":"800-1400 Elo · Tras Cf3, juegan las negras. Compara c6 con Af5: ¿qué candidata responde me…","chapter":"Parte X/XI/XIII","movesUci":["e2e4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras Cf3, juegan las negras. Compara c6 con Af5: ¿qué candidata responde mejor a la prioridad de ruptura central y qué réplica rival debes prever?","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"c6. La jugada usa el peón c para sostener o atacar d5 y controlar b5; es una jugada estructural, no un simple movimiento de espera. Prevé Ac4: es el recurso rival que debe entrar en el cálculo. Af5 también es legal, pero aquí pospone ruptura central; por eso el orden concreto favorece c6.","manualReference":"SCA-E09","tags":[],"openingId":"escandinava"},{"id":"SCA-E11","kind":"exercise","title":"800-1400 Elo · Tras Ac4, juegan las negras. Compara Af5 con e6: ¿qué candidata responde me…","chapter":"Parte X/XI/XIII","movesUci":["e2e4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras Ac4, juegan las negras. Compara Af5 con e6: ¿qué candidata responde mejor a la prioridad de tiempo de desarrollo y qué réplica rival debes prever?","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Af5. La jugada resuelve el problema del alfil de c8 antes de ...e6 y lo activa en la diagonal que pasa por f5. Prevé Ad2: es el recurso rival que debe entrar en el cálculo. e6 también es legal, pero aquí pospone tiempo de desarrollo; por eso el orden concreto favorece Af5.","manualReference":"SCA-E11","tags":[],"openingId":"escandinava"},{"id":"SCA-E15","kind":"exercise","title":"800-1400 Elo · Tras De2, juegan las negras. Compara Ab4 con Cbd7: ¿qué candidata responde…","chapter":"Parte X/XI/XIII","movesUci":["e2e4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras De2, juegan las negras. Compara Ab4 con Cbd7: ¿qué candidata responde mejor a la prioridad de casilla e5 y qué réplica rival debes prever?","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Ab4. La jugada activa o cambia el alfil en b4; la decisión afecta a la presión sobre c3, e5 y el rey. Prevé O-O-O: es el recurso rival que debe entrar en el cálculo. Cbd7 también es legal, pero aquí pospone casilla e5; por eso el orden concreto favorece Ab4.","manualReference":"SCA-E15","tags":[],"openingId":"escandinava"},{"id":"SCA-E12","kind":"exercise","title":"800-1400 Elo · Tras Af5, juegan las blancas. Compara Ad2 con De2: ¿qué candidata responde…","chapter":"Parte X/XI/XIII","movesUci":["e2e4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras Af5, juegan las blancas. Compara Ad2 con De2: ¿qué candidata responde mejor a la prioridad de seguridad del rey y qué réplica rival debes prever?","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Ad2. La jugada activa o cambia el alfil en d2; la decisión afecta a la presión sobre c3, e5 y el rey. Prevé e6: es el recurso rival que debe entrar en el cálculo. De2 también es legal, pero aquí pospone seguridad del rey; por eso el orden concreto favorece Ad2.","manualReference":"SCA-E12","tags":[],"openingId":"escandinava"},{"id":"SCA-E13","kind":"exercise","title":"800-1400 Elo · Tras Ad2, juegan las negras. Compara e6 con Cbd7: ¿qué candidata responde m…","chapter":"Parte X/XI/XIII","movesUci":["e2e4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras Ad2, juegan las negras. Compara e6 con Cbd7: ¿qué candidata responde mejor a la prioridad de alfil de c8 y qué réplica rival debes prever?","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"e6. La jugada modifica directamente el centro con el peón de la columna e, por lo que hay que calcular las líneas que se abren. Prevé De2: es el recurso rival que debe entrar en el cálculo. Cbd7 también es legal, pero aquí pospone alfil de c8; por eso el orden concreto favorece e6.","manualReference":"SCA-E13","tags":[],"openingId":"escandinava"},{"id":"SCA-E14","kind":"exercise","title":"800-1400 Elo · Tras e6, juegan las blancas. Compara De2 con O-O: ¿qué candidata responde m…","chapter":"Parte X/XI/XIII","movesUci":["e2e4","d7d5"],"fen":"rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2","sideToMove":"white","objective":"Tras e6, juegan las blancas. Compara De2 con O-O: ¿qué candidata responde mejor a la prioridad de presión sobre d5 y qué réplica rival debes prever?","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"De2. La jugada lleva la dama a e2, donde deja de conceder un nuevo tiempo de desarrollo y mantiene contacto con el centro. Prevé Ab4: es el recurso rival que debe entrar en el cálculo. O-O también es legal, pero aquí pospone presión sobre d5; por eso el orden concreto favorece De2.","manualReference":"SCA-E14","tags":[],"openingId":"escandinava"}];
const games=[{"code":"SCA-M01","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","d7d5","e4d5","d8d5","b1c3","d5a5","d2d4","g8f6","g1f3","c7c6","c1d2","c8f5","f1c4","e7e6","c3d5","a5d8","d5f6","d8f6","d2c3","f5g4","c4e2","f6d8","f3e5","g4e2","d1e2","f8e7","e2e4","d8d5","e4d5","c6d5","e1c1","e8g8","h1e1","b8c6","f2f3","a8c8"],"san":["e4","d5","exd5","Qxd5","Nc3","Qa5","d4","Nf6","Nf3","c6","Bd2","Bf5","Bc4","e6","Nd5","Qd8","Nxf6+","Qxf6","Bc3","Bg4","Be2","Qd8","Ne5","Bxe2","Qxe2","Be7","Qe4","Qd5","Qxd5","cxd5","O-O-O","O-O","Rhe1","Nc6","f3","Rac8"],"comments":{"0":"SCA-M01: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"SCA-M01: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"SCA-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"SCA-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"SCA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"SCA-M01: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"SCA-M01: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"SCA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"SCA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"SCA-M01: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"SCA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"SCA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"SCA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"SCA-M01: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"SCA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"SCA-M01: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"SCA-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"SCA-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"SCA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"SCA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"SCA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"SCA-M01: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"SCA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"SCA-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"SCA-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"SCA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"SCA-M01: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"SCA-M01: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"SCA-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"SCA-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"SCA-M01: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"SCA-M01: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"SCA-M01: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"SCA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"SCA-M01: blancas modifica el espacio o el centro en f3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","35":"SCA-M01: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual."}},{"code":"SCA-M02","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","d7d5","e4d5","d8d5","b1c3","d5a5","f1c4","g8f6","d2d3","c7c6","c1d2","c8f5","d1e2","e7e6","g1f3","f8b4","e1g1","b8d7","a2a3","b4c3","d2c3","a5c7","f3e5","e8g8","f2f4","f6d5","c4d5","c6d5","g2g4","f5g6","f4f5","e6f5","g4f5","g6f5","e5g4","f5g6","g4f6","d7f6","c3f6","g7f6","a1e1","a8e8"],"san":["e4","d5","exd5","Qxd5","Nc3","Qa5","Bc4","Nf6","d3","c6","Bd2","Bf5","Qe2","e6","Nf3","Bb4","O-O","Nbd7","a3","Bxc3","Bxc3","Qc7","Ne5","O-O","f4","Nd5","Bxd5","cxd5","g4","Bg6","f5","exf5","gxf5","Bxf5","Ng4","Bg6","Nf6+","Nxf6","Bxf6","gxf6","Rae1","Rae8"],"comments":{"0":"SCA-M02: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"SCA-M02: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"SCA-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"SCA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"SCA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"SCA-M02: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"SCA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"SCA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"SCA-M02: blancas modifica el espacio o el centro en d3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"SCA-M02: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"SCA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"SCA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"SCA-M02: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"SCA-M02: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"SCA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"SCA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"SCA-M02: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"SCA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"SCA-M02: blancas modifica el espacio o el centro en a3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"SCA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"SCA-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"SCA-M02: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"SCA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"SCA-M02: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"SCA-M02: blancas modifica el espacio o el centro en f4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"SCA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"SCA-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"SCA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"SCA-M02: blancas modifica el espacio o el centro en g4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"SCA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"SCA-M02: blancas modifica el espacio o el centro en f5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"SCA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"SCA-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"SCA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"SCA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","35":"SCA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","36":"SCA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","37":"SCA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","38":"SCA-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","39":"SCA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","40":"SCA-M02: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","41":"SCA-M02: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual."}},{"code":"SCA-M03","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","d7d5","e4d5","d8d5","b1c3","d5a5","d2d4","g8f6","g1f3","c7c6","f1c4","c8f5","c1d2","e7e6","d1e2","f8b4","e1c1","b8d7","h2h3","e8g8","g2g4","f5g6","f3e5","d7e5","d4e5","f6d5","h3h4","d5c3","d2c3","b4c3","b2c3","g6e4","h1h3","e4d5","c4d3","d5e4","d3e4","a5e5","e2e3","f7f5"],"san":["e4","d5","exd5","Qxd5","Nc3","Qa5","d4","Nf6","Nf3","c6","Bc4","Bf5","Bd2","e6","Qe2","Bb4","O-O-O","Nbd7","h3","O-O","g4","Bg6","Ne5","Nxe5","dxe5","Nd5","h4","Nxc3","Bxc3","Bxc3","bxc3","Be4","Rh3","Bd5","Bd3","Be4","Bxe4","Qxe5","Qe3","f5"],"comments":{"0":"SCA-M03: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"SCA-M03: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"SCA-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"SCA-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"SCA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"SCA-M03: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"SCA-M03: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"SCA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"SCA-M03: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"SCA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"SCA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"SCA-M03: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"SCA-M03: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"SCA-M03: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"SCA-M03: blancas modifica el espacio o el centro en h3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"SCA-M03: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"SCA-M03: blancas modifica el espacio o el centro en g4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"SCA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"SCA-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"SCA-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"SCA-M03: blancas modifica el espacio o el centro en h4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"SCA-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"SCA-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"SCA-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"SCA-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"SCA-M03: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"SCA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","35":"SCA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","36":"SCA-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","37":"SCA-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","38":"SCA-M03: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","39":"SCA-M03: negras modifica el espacio o el centro en f5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual."}}];
const moveExplanations={"e2e4":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","d7d5":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","e4d5":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","d8d5":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","b1c3":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","d5a5":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","d2d4":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","g8f6":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","g1f3":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","c7c6":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","f1c4":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","c8f5":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","c1d2":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","e7e6":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","d1e2":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","f8b4":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","e1c1":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","b8d7":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","h2h3":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","e8g8":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","g2g4":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","f5g6":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."};
const lessonMoveContexts={"SCA-P01":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P02":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P03":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P04":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P05":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P06":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P07":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P08":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P09":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P10":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P11":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SCA-P12":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual."};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
const state = {
  completed: new Set(JSON.parse(localStorage.getItem("escandinava-progress") || "[]")),
  lesson: 0, lessonPly: 0, challenge: 0, selected: null, streak: 0,
  variant: 0, variantPly: 0, variantFlipped: false,
  variantReviews: JSON.parse(localStorage.getItem("escandinava-variant-reviews") || "{}"),
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
  localStorage.setItem("escandinava-progress", JSON.stringify([...state.completed]));
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const button = document.createElement("button");
    button.className = `lesson-list-button ${i === state.lesson ? "active" : ""} ${state.completed.has(lesson.code) ? "done" : ""}`;
    button.innerHTML = `<span class="dot"></span><span>${lesson.code.replace("SCA-","")}</span><span class="lesson-name">${lesson.title}</span>`;
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
  localStorage.setItem("escandinava-variant-reviews", JSON.stringify(state.variantReviews));
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

renderBoard(document.getElementById("heroBoard"), parseFen("rnbqkbnr/ppp1pppp/8/3p4/4P3/8/PPPP1PPP/RNBQKBNR w KQkq d6 0 2"));
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
