const PIECES={"P":"♙","N":"♘","B":"♗","R":"♖","Q":"♕","K":"♔","p":"♟","n":"♞","b":"♝","r":"♜","q":"♛","k":"♚"};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=[{"code":"SLA-P01","title":"La identidad de la Eslava","fen":"rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3","uci":"d2d4 d7d5 c2c4 c7c6","notation":"d2d4 d7d5 c2c4 c7c6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P02","title":"Desarrollar antes de decidir el centro","fen":"rnbqkb1r/pppppppp/5n2/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 2 2","uci":"g1f3 g8f6","notation":"g1f3 g8f6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"SLA-E01, E20 y E35."},{"code":"SLA-P03","title":"La captura en c4 cambia la estructura","fen":"rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P04","title":"5.a4 impide la expansión fácil","fen":"rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"SLA-M01-P1."},{"code":"SLA-P05","title":"Centro estable, rey aún en el centro","fen":"rnbqkbnr/pppp1ppp/4p3/8/8/4P3/PPPP1PPP/RNBQKBNR w KQkq - 0 2","uci":"e2e3 e7e6","notation":"e2e3 e7e6","stage":"Ampliación A","explanation":"estructura negra sana; ligera iniciativa blanca por el primer movimiento, sin objetivo fijo.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P06","title":"La clavada ...Ab4","fen":"rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQK2R w KQkq - 1 8","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P07","title":"Enroque y transición","fen":"rnbq1rk1/pppppppp/8/8/8/8/PPPPPPPP/RNBQ1RK1 w - - 2 2","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P08","title":"Cambio simétrico: crear diferencias con piezas","fen":"rnbqkb1r/pppppppp/5n2/8/8/2N5/PPPPPPPP/R1BQKBNR w KQkq - 2 2","uci":"b1c3 g8f6","notation":"b1c3 g8f6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P09","title":"Alfiles activos en la Variante del Cambio","fen":"r2qkb1r/pp2pppp/2n2n2/3p1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R w KQkq - 6 7","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P10","title":"Sistema tranquilo con e3","fen":"rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 1 5","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P11","title":"Peón g6 tras Cxg6 hxg6","fen":"rn1qkb1r/pp3pp1/2p1pnp1/3p4/2PP4/2N1P3/PP3PPP/R1BQKB1R w KQkq - 0 8","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"SLA-P12","title":"La ruptura ...e5","fen":"r4rk1/pp1nqpp1/2pb1np1/3pp3/2PP4/1PNBP2P/PB3PP1/R2Q1RK1 w - - 0 13","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."}];
const variants=[{"code":"SLA-S01","title":"Juegan las blancas","level":"800-1400 Elo","response":"Estructura 1","risk":"Medio","theory":"Media","central":"si el centro se aclara, la actividad de piezas pesa más que la pequeña diferencia de espacio. Error: retirar el alfil varias veces sin ganar nada.","recommendation":"Estudiar primero","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r2q1rk1/pp1n1ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 w - - 5 10","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Juegan las blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SLA-S02","title":"Juegan las blancas","level":"800-1400 Elo","response":"Estructura 2","risk":"Medio","theory":"Media","central":"si el centro se aclara, la actividad de piezas pesa más que la pequeña diferencia de espacio. Error: retirar el alfil varias veces sin ganar nada.","recommendation":"Estudiar primero","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r2q1rk1/pp1n1ppp/2p1pn2/7b/Pb1PP3/2NB1N2/1P2QPPP/R1B2RK1 w - - 3 12","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Juegan las blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SLA-S03","title":"Juegan las blancas","level":"800-1400 Elo","response":"Estructura 3","risk":"Variable","theory":"Práctica","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r2qkb1r/pp3ppp/2n1pn2/3p1b2/3P1B2/2N1PN2/PP3PPP/R2QKB1R w KQkq - 0 8","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Juegan las blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SLA-S04","title":"Juegan las blancas","level":"800-1400 Elo","response":"Estructura 4","risk":"Variable","theory":"Práctica","central":"g6 puede ser débil, pero la mayoría de peones sigue sana y la torre h puede activarse. Error: jugar ...g5 o ...h5 antes de enrocar.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r3k2r/pp3ppp/2nqpn2/3p4/3P4/2NQPN2/PP3PPP/R3K2R w KQkq - 0 11","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Juegan las blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SLA-S05","title":"Juegan las blancas","level":"800-1400 Elo","response":"Estructura 5","risk":"Variable","theory":"Práctica","central":"g6 puede ser débil, pero la mayoría de peones sigue sana y la torre h puede activarse. Error: jugar ...g5 o ...h5 antes de enrocar.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r2qkb1r/pp1n1pp1/2p1pnp1/3p4/2PP4/2NBP3/PP3PPP/R1BQK2R w KQkq - 2 9","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Juegan las blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"SLA-S06","title":"Juegan las blancas","level":"800-1400 Elo","response":"Estructura 6","risk":"Variable","theory":"Práctica","central":"calcula si Db3 ataca dos objetivos.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r4rk1/pp1nqpp1/3b1np1/3pp3/3P4/1PNBP2P/PB3PP1/R2Q1RK1 w - - 0 14","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Juegan las blancas»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."}];
const exercises=[{"id":"SLA-E25","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r2q1rk1/pp1n1ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 w - - 5 10","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E25","tags":[],"openingId":"eslava"},{"id":"SLA-E40","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r2q1rk1/pp1n1ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 w - - 5 10","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E40","tags":[],"openingId":"eslava"},{"id":"SLA-E26","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r2q1rk1/pp1n1ppp/2p1pn2/7b/Pb1PP3/2NB1N2/1P2QPPP/R1B2RK1 w - - 3 12","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E26","tags":[],"openingId":"eslava"},{"id":"SLA-E27","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r2qkb1r/pp3ppp/2n1pn2/3p1b2/3P1B2/2N1PN2/PP3PPP/R2QKB1R w KQkq - 0 8","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E27","tags":[],"openingId":"eslava"},{"id":"SLA-E28","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r3k2r/pp3ppp/2nqpn2/3p4/3P4/2NQPN2/PP3PPP/R3K2R w KQkq - 0 11","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E28","tags":[],"openingId":"eslava"},{"id":"SLA-E29","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r2qkb1r/pp1n1pp1/2p1pnp1/3p4/2PP4/2NBP3/PP3PPP/R1BQK2R w KQkq - 2 9","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E29","tags":[],"openingId":"eslava"},{"id":"SLA-E30","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r4rk1/pp1nqpp1/3b1np1/3pp3/3P4/1PNBP2P/PB3PP1/R2Q1RK1 w - - 0 14","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E30","tags":[],"openingId":"eslava"},{"id":"SLA-E01","kind":"exercise","title":"Solución","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r2q1rk1/pp1n1ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P2QPPP/R1B2RK1 w - - 5 10","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E01","tags":[],"openingId":"eslava"},{"id":"SLA-E13","kind":"exercise","title":"SLA-S03","chapter":"Parte X/XI/XIII","movesUci":["d2d4","d7d5","c2c4","c7c6"],"fen":"rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E13","tags":[],"openingId":"eslava"},{"id":"SLA-E14","kind":"exercise","title":"SLA-S05","chapter":"Parte X/XI/XIII","movesUci":["d2d4","d7d5","c2c4","c7c6"],"fen":"rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E14","tags":[],"openingId":"eslava"},{"id":"SLA-E15","kind":"exercise","title":"SLA-S06","chapter":"Parte X/XI/XIII","movesUci":["d2d4","d7d5","c2c4","c7c6"],"fen":"rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E15","tags":[],"openingId":"eslava"},{"id":"SLA-E16","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E16","tags":[],"openingId":"eslava"},{"id":"SLA-E17","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E17","tags":[],"openingId":"eslava"},{"id":"SLA-E18","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQK2R w KQkq - 1 8","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E18","tags":[],"openingId":"eslava"},{"id":"SLA-E19","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 w - - 3 9","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E19","tags":[],"openingId":"eslava"},{"id":"SLA-E20","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rnbqkb1r/pp2pppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 5","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E20","tags":[],"openingId":"eslava"},{"id":"SLA-E21","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r2qkb1r/pp2pppp/2n2n2/3p1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R w KQkq - 6 7","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E21","tags":[],"openingId":"eslava"},{"id":"SLA-E22","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E22","tags":[],"openingId":"eslava"},{"id":"SLA-E23","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1qkb1r/pp3pp1/2p1pnp1/3p4/2PP4/2N1P3/PP3PPP/R1BQKB1R w KQkq - 0 8","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E23","tags":[],"openingId":"eslava"},{"id":"SLA-E24","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r4rk1/pp1nqpp1/2pb1np1/3pp3/2PP4/1PNBP2P/PB3PP1/R2Q1RK1 w - - 0 13","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E24","tags":[],"openingId":"eslava"},{"id":"SLA-E31","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rnbqkb1r/pp2pppp/2p2n2/8/2pP4/2N2N2/PP2PPPP/R1BQKB1R w KQkq - 0 5","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E31","tags":[],"openingId":"eslava"},{"id":"SLA-E32","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1qkb1r/pp2pppp/2p2n2/5b2/P1pP4/2N2N2/1P2PPPP/R1BQKB1R w KQkq - 1 6","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E32","tags":[],"openingId":"eslava"},{"id":"SLA-E33","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1qk2r/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQK2R w KQkq - 1 8","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E33","tags":[],"openingId":"eslava"},{"id":"SLA-E34","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1q1rk1/pp3ppp/2p1pn2/5b2/PbBP4/2N1PN2/1P3PPP/R1BQ1RK1 w - - 3 9","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E34","tags":[],"openingId":"eslava"},{"id":"SLA-E35","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rnbqkb1r/pp2pppp/5n2/3p4/3P4/2N5/PP2PPPP/R1BQKBNR w KQkq - 2 5","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E35","tags":[],"openingId":"eslava"},{"id":"SLA-E36","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r2qkb1r/pp2pppp/2n2n2/3p1b2/3P1B2/2N2N2/PP2PPPP/R2QKB1R w KQkq - 6 7","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E36","tags":[],"openingId":"eslava"},{"id":"SLA-E37","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1qkb1r/pp2pppp/2p2n2/3p1b2/2PP4/4PN2/PP3PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E37","tags":[],"openingId":"eslava"},{"id":"SLA-E38","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"rn1qkb1r/pp3pp1/2p1pnp1/3p4/2PP4/2N1P3/PP3PPP/R1BQKB1R w KQkq - 0 8","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E38","tags":[],"openingId":"eslava"},{"id":"SLA-E39","kind":"exercise","title":"misma FEN","chapter":"Parte X/XI/XIII","movesUci":[],"fen":"r4rk1/pp1nqpp1/2pb1np1/3pp3/2PP4/1PNBP2P/PB3PP1/R2Q1RK1 w - - 0 13","sideToMove":"white","objective":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","level":{"label":"800-1400 Elo","minRating":800,"maxRating":1400,"stage":null},"whitePlan":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","blackPlan":"Consulta la respuesta activa del rival y la ruptura asociada en el manual.","teachingContinuation":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","manualReference":"SLA-E39","tags":[],"openingId":"eslava"}];
const games=[{"code":"SLA-M01","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["d2d4","d7d5","c2c4","c7c6","g1f3","g8f6","b1c3","d5c4","a2a4","c8f5","e2e3","e7e6","f1c4","f8b4","e1g1","e8g8","d1e2","b8d7","e3e4","f5g6","c4d3","g6h5","e4e5","f6d5","e2e4","h5g6","e4e2"],"san":["d4","d5","c4","c6","Nf3","Nf6","Nc3","dxc4","a4","Bf5","e3","e6","Bxc4","Bb4","O-O","O-O","Qe2","Nbd7","e4","Bg6","Bd3","Bh5","e5","Nd5","Qe4","Bg6","Qe2"],"comments":{"0":"SLA-M01: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"SLA-M01: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"SLA-M01: blancas modifica el espacio o el centro en c4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"SLA-M01: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"SLA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"SLA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"SLA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"SLA-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"SLA-M01: blancas modifica el espacio o el centro en a4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"SLA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"SLA-M01: blancas modifica el espacio o el centro en e3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"SLA-M01: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"SLA-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"SLA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"SLA-M01: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"SLA-M01: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"SLA-M01: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"SLA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"SLA-M01: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"SLA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"SLA-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"SLA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"SLA-M01: blancas modifica el espacio o el centro en e5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"SLA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"SLA-M01: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"SLA-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"SLA-M01: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual."}},{"code":"SLA-M02","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["d2d4","d7d5","c2c4","c7c6","c4d5","c6d5","b1c3","g8f6","g1f3","b8c6","c1f4","c8f5","e2e3","e7e6","f1d3","f5d3","d1d3","f8d6","f4d6","d8d6","e1g1","e8g8","a1c1","a8c8","c3b5","d6e7","b5c3","f8d8"],"san":["d4","d5","c4","c6","cxd5","cxd5","Nc3","Nf6","Nf3","Nc6","Bf4","Bf5","e3","e6","Bd3","Bxd3","Qxd3","Bd6","Bxd6","Qxd6","O-O","O-O","Rac1","Rac8","Nb5","Qe7","Nc3","Rfd8"],"comments":{"0":"SLA-M02: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"SLA-M02: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"SLA-M02: blancas modifica el espacio o el centro en c4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"SLA-M02: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"SLA-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"SLA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"SLA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"SLA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"SLA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"SLA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"SLA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"SLA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"SLA-M02: blancas modifica el espacio o el centro en e3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"SLA-M02: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"SLA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"SLA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"SLA-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"SLA-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"SLA-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"SLA-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"SLA-M02: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"SLA-M02: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"SLA-M02: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"SLA-M02: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"SLA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"SLA-M02: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"SLA-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"SLA-M02: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual."}},{"code":"SLA-M03","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["d2d4","d7d5","c2c4","c7c6","g1f3","g8f6","e2e3","c8f5","b1c3","e7e6","f3h4","f5g6","h4g6","h7g6","f1d3","b8d7","e1g1","f8d6","h2h3","e8g8","b2b3","d8e7","c1b2","e6e5","c4d5","c6d5","c3b5","d6b8","a1c1","e5e4","d3e2","a7a6","b5c3","b8d6"],"san":["d4","d5","c4","c6","Nf3","Nf6","e3","Bf5","Nc3","e6","Nh4","Bg6","Nxg6","hxg6","Bd3","Nbd7","O-O","Bd6","h3","O-O","b3","Qe7","Bb2","e5","cxd5","cxd5","Nb5","Bb8","Rc1","e4","Be2","a6","Nc3","Bd6"],"comments":{"0":"SLA-M03: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"SLA-M03: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"SLA-M03: blancas modifica el espacio o el centro en c4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"SLA-M03: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"SLA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"SLA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"SLA-M03: blancas modifica el espacio o el centro en e3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"SLA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"SLA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"SLA-M03: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"SLA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"SLA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"SLA-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"SLA-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"SLA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"SLA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"SLA-M03: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"SLA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"SLA-M03: blancas modifica el espacio o el centro en h3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"SLA-M03: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"SLA-M03: blancas modifica el espacio o el centro en b3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"SLA-M03: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"SLA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"SLA-M03: negras modifica el espacio o el centro en e5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"SLA-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"SLA-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"SLA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"SLA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"SLA-M03: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"SLA-M03: negras modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"SLA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"SLA-M03: negras modifica el espacio o el centro en a6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"SLA-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"SLA-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual."}}];
const moveExplanations={"d2d4":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","d7d5":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","c2c4":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","c7c6":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","g1f3":"SLA-E01, E20 y E35.","g8f6":"SLA-E01, E20 y E35.","e2e3":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","e7e6":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","b1c3":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."};
const lessonMoveContexts={"SLA-P01":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P02":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P03":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P04":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P05":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P06":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P07":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P08":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P09":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P10":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P11":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","SLA-P12":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual."};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
const state = {
  completed: new Set(JSON.parse(localStorage.getItem("eslava-progress") || "[]")),
  lesson: 0, lessonPly: 0, challenge: 0, selected: null, streak: 0,
  variant: 0, variantPly: 0, variantFlipped: false,
  variantReviews: JSON.parse(localStorage.getItem("eslava-variant-reviews") || "{}"),
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
  localStorage.setItem("eslava-progress", JSON.stringify([...state.completed]));
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const button = document.createElement("button");
    button.className = `lesson-list-button ${i === state.lesson ? "active" : ""} ${state.completed.has(lesson.code) ? "done" : ""}`;
    button.innerHTML = `<span class="dot"></span><span>${lesson.code.replace("SLA-","")}</span><span class="lesson-name">${lesson.title}</span>`;
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
  localStorage.setItem("eslava-variant-reviews", JSON.stringify(state.variantReviews));
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

renderBoard(document.getElementById("heroBoard"), parseFen("rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 3"));
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
