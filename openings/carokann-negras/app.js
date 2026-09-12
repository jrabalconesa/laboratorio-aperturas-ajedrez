const PIECES={"P":"♙","N":"♘","B":"♗","R":"♖","Q":"♕","K":"♔","p":"♟","n":"♞","b":"♝","r":"♜","q":"♛","k":"♚"};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=[{"code":"CKN-P01","title":"La firma de la defensa","fen":"rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 2","uci":"e2e4 c7c6","notation":"e2e4 c7c6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Blancas buscan ocupar d4 y ganar espacio.","hint":"Conectar con P02: el centro se desafía en la segunda jugada."},{"code":"CKN-P02","title":"El golpe ...d5","fen":"rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3","uci":"e2e4 c7c6 d2d4 d7d5","notation":"e2e4 c7c6 d2d4 d7d5","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Blancas deben elegir entre Avance, cambio o desarrollo que sostenga e4.","hint":"Desde aquí se bifurca todo el repertorio."},{"code":"CKN-P03","title":"Clásica: alfil fuera de la cadena","fen":"rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 1 5","uci":"e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5","notation":"e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Blancas centralizan Cxe4 y ganan espacio temporal.","hint":"Continuar con ...Ag6, ...Cd7 y ...e6."},{"code":"CKN-P04","title":"Clásica: coordinación antes de enrocar","fen":"r2qkbnr/pp1npppp/2p3b1/8/3P4/5NN1/PPP2PPP/R1BQKB1R w KQkq - 5 7","uci":"e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 g1f3 b8d7","notation":"e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 g1f3 b8d7","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Blancas pueden ganar espacio con h4-h5, pero ese avance no desarrolla piezas.","hint":"P05 muestra cómo absorber el acoso al alfil."},{"code":"CKN-P05","title":"Clásica: estructura sana y rey seguro","fen":"r2qkbnr/pp1n1pp1/2p1p2p/7P/3P4/3Q1NN1/PPP2PP1/R1B1K2R w KQkq - 0 11","uci":"e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 g1f3 b8d7 h2h4 h7h6 h4h5 g6h7 f1d3 h7d3 d1d3 e7e6","notation":"e2e4 c7c6 d2d4 d7d5 b1c3 d5e4 c3e4 c8f5 e4g3 f5g6 g1f3 b8d7 h2h4 h7h6 h4h5 g6h7 f1d3 h7d3 d1d3 e7e6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Blancas han cambiado el alfil de casillas claras y pueden usar la dama activa.","hint":"Preparar ...Cgf6, ...Ae7 y enroque."},{"code":"CKN-P06","title":"Avance: 3...Af5","fen":"rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4","uci":"e2e4 c7c6 d2d4 d7d5 e4e5 c8f5","notation":"e2e4 c7c6 d2d4 d7d5 e4e5 c8f5","stage":"Ampliación A","explanation":"el objetivo sigue siendo d4.","idea":"Blancas ganan espacio con e5 y restringen Cf6.","hint":"P07 introduce el contragolpe que justifica la defensa."},{"code":"CKN-P07","title":"Avance: ...c5 a tiempo","fen":"rn1qkbnr/pp3ppp/4p3/2ppPb2/3P4/5N2/PPP1BPPP/RNBQK2R w KQkq - 0 6","uci":"e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 c6c5","notation":"e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 c6c5","stage":"Ampliación A","explanation":"Negras usan el peón c6 como ariete; ...c5 convierte la ventaja de espacio blanca en objetivo.","idea":"Blancas quieren completar desarrollo y sostener e5-d4.","hint":"Comparar captura en d4 con mantener tensión."},{"code":"CKN-P08","title":"Avance: caballo por e7-c8-b6","fen":"r2qkb1r/pp2nppp/2n1p3/3pPb2/3P4/5N2/PP2BPPP/RNBQ1RK1 w kq - 1 9","uci":"e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 c6c5 e1g1 b8c6 c2c3 c5d4 c3d4 g8e7","notation":"e2e4 c7c6 d2d4 d7d5 e4e5 c8f5 g1f3 e7e6 f1e2 c6c5 e1g1 b8c6 c2c3 c5d4 c3d4 g8e7","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Blancas ya tienen un centro estable y buscan Cc3/Ae3.","hint":"Conectar con S02 y M02."},{"code":"CKN-P09","title":"Cambio: simetría con tarea concreta","fen":"rnbqkbnr/pp2pppp/8/3p4/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 4","uci":"e2e4 c7c6 d2d4 d7d5 e4d5 c6d5","notation":"e2e4 c7c6 d2d4 d7d5 e4d5 c6d5","stage":"Ampliación A","explanation":"el aislado como objetivo dinámico","idea":"Blancas desarrollan Ad3 y pueden buscar c4 o Af4.","hint":"Preparar ...Cc6, ...Cf6 y actividad del alfil c8."},{"code":"CKN-P10","title":"Panov: el aislado como objetivo dinámico","fen":"rnbqkb1r/pp3ppp/4pn2/3p4/2PP4/2N5/PP3PPP/R1BQKBNR w KQkq - 0 6","uci":"e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 c2c4 g8f6 b1c3 e7e6","notation":"e2e4 c7c6 d2d4 d7d5 e4d5 c6d5 c2c4 g8f6 b1c3 e7e6","stage":"Ampliación A","explanation":"el aislado como objetivo dinámico","idea":"Blancas aceptan un futuro peón d aislado para ganar actividad.","hint":"S04 muestra el final deseable para negras."},{"code":"CKN-P11","title":"Fantasy: no capturar por reflejo","fen":"rnbqkbnr/pp3ppp/2p1p3/3p4/3PP3/5P2/PPP3PP/RNBQKBNR w KQkq - 0 4","uci":"e2e4 c7c6 d2d4 d7d5 f2f3 e7e6","notation":"e2e4 c7c6 d2d4 d7d5 f2f3 e7e6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Blancas sostienen e4 y sueñan con e5/f4.","hint":"Desarrollar ...Cf6 y cuestionar e5 en buenas condiciones."},{"code":"CKN-P12","title":"Dos caballos: desarrollo activo","fen":"rn1qkbnr/pp3ppp/2p1p3/3p4/4P3/2N2Q1P/PPPP1PP1/R1B1KB1R w KQkq - 0 6","uci":"e2e4 c7c6 g1f3 d7d5 b1c3 c8g4 h2h3 g4f3 d1f3 e7e6","notation":"e2e4 c7c6 g1f3 d7d5 b1c3 c8g4 h2h3 g4f3 d1f3 e7e6","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Blancas retrasan d4 y desarrollan rápido.","hint":"Volver al plan base: desarrollo, rey seguro, ...c5."}];
const variants=[{"code":"CKN-S01","title":"En CKN-S01, tras el cambio de damas y con un caballo negro instalado en e4, compara el plan blanco 19.Ae3 con 19.Cxe4. ¿Qué quiere conservar negras?","level":"800-1400 Elo","response":"Estructura 1","risk":"Medio","theory":"Media","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Estudiar primero","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r4rk1/pp2bpp1/2p1p2p/4N2P/2PPn3/6N1/PP1B1PP1/1K1R3R w - - 0 19","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «En CKN-S01, tras el cambio de damas y con un caballo negro instalado en e4, compara el plan blanco 19.Ae3 con 19.Cxe4. ¿Qué quiere conservar negras?»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKN-S02","title":"En CKN-S02, el caballo g8 no puede ir cómodamente a f6. Elige entre ...Cge7 y ...Ch6 como plan de desarrollo y justifica la ruta posterior.","level":"800-1400 Elo","response":"Estructura 2","risk":"Medio","theory":"Media","central":"11.a3 Ae7 conserva el alfil y completa desarrollo. El peón d4 solo será un objetivo estable si las blancas pierden actividad. Atacarlo antes con ...Db6 puede permitir Ae3 y d5 con tiempos; primero se bloquea y se termina el desarrollo.","recommendation":"Estudiar primero","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r2qkb1r/pp2nppp/2n1p3/3pPb2/3P4/5N2/PP2BPPP/RNBQ1RK1 w kq - 0 9","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «En CKN-S02, el caballo g8 no puede ir cómodamente a f6. Elige entre ...Cge7 y ...Ch6 como plan de desarrollo y justifica la ruta posterior.»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKN-S03","title":"En CKN-S03, con la columna c abierta y ambas coronas seguras, compara 16.Dd2 y 16.a3 para blancas. ¿Qué respuesta negra coordina mejor las piezas?","level":"800-1400 Elo","response":"Estructura 3","risk":"Variable","theory":"Práctica","central":"11.a3 Ae7 conserva el alfil y completa desarrollo. El peón d4 solo será un objetivo estable si las blancas pierden actividad. Atacarlo antes con ...Db6 puede permitir Ae3 y d5 con tiempos; primero se bloquea y se termina el desarrollo.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"2rq1rk1/pp1n1ppp/2n1p3/3pPb2/3P4/4BN2/PP2BPPP/2RQ1RK1 w - - 0 16","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «En CKN-S03, con la columna c abierta y ambas coronas seguras, compara 16.Dd2 y 16.a3 para blancas. ¿Qué respuesta negra coordina mejor las piezas?»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKN-S04","title":"En CKN-S04, después de 10...Cf6, compara 11.a3 y 11.Ae3. ¿Por qué el modelo acepta 11.a3 Ae7 sin intentar ganar d4 ya?","level":"800-1400 Elo","response":"Estructura 4","risk":"Variable","theory":"Práctica","central":"11.a3 Ae7 conserva el alfil y completa desarrollo. El peón d4 solo será un objetivo estable si las blancas pierden actividad. Atacarlo antes con ...Db6 puede permitir Ae3 y d5 con tiempos; primero se bloquea y se termina el desarrollo.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r1bq1rk1/pp3ppp/2n1pn2/8/1b1P4/2NB1N2/PP1B1PPP/R2Q1RK1 w - - 0 11","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «En CKN-S04, después de 10...Cf6, compara 11.a3 y 11.Ae3. ¿Por qué el modelo acepta 11.a3 Ae7 sin intentar ganar d4 ya?»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKN-S05","title":"En la Variante del Cambio CKN-S05, blancas dispone de 6.Cf3 y 6.Af4. Propón un desarrollo negro que cree desequilibrio sin alterar la estructura de peones.","level":"800-1400 Elo","response":"Estructura 5","risk":"Variable","theory":"Práctica","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r1bqkb1r/pp2pppp/2n2n2/3p4/3P4/2PB4/PP3PPP/RNBQK1NR w KQkq - 0 6","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «En la Variante del Cambio CKN-S05, blancas dispone de 6.Cf3 y 6.Af4. Propón un desarrollo negro que cree desequilibrio sin alterar la estructura de peones.»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKN-S06","title":"En CKN-S06, la cadena blanca e5-d4 ya está fijada. ¿Por qué ...c5 es una candidata más urgente que ...f6?","level":"800-1400 Elo","response":"Estructura 6","risk":"Variable","theory":"Práctica","central":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"rnbqkb1r/pp1n1ppp/2p1p3/3pP3/3P4/2N2P2/PPP3PP/R1BQKBNR w KQkq - 0 6","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «En CKN-S06, la cadena blanca e5-d4 ya está fijada. ¿Por qué ...c5 es una candidata más urgente que ...f6?»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."}];
const exercises=[];
const games=[{"code":"CKN-M01","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","c7c6","d2d4","d7d5","b1c3","d5e4","c3e4","c8f5","e4g3","f5g6","g1f3","b8d7","h2h4","h7h6","h4h5","g6h7","f1d3","h7d3","d1d3","e7e6","c1d2","g8f6","e1c1","f8e7","c1b1","e8g8","f3e5","f6e4","d3e4","d7f6","e4e2","d8d5","c2c4","d5e4","e2e4","f6e4","d2e3","f8d8","b1c2","f7f5","h1e1","e7f6","f2f4","d8d7","b2b3","a8d8"],"san":["e4","c6","d4","d5","Nc3","dxe4","Nxe4","Bf5","Ng3","Bg6","Nf3","Nd7","h4","h6","h5","Bh7","Bd3","Bxd3","Qxd3","e6","Bd2","Ngf6","O-O-O","Be7","Kb1","O-O","Ne5","Ne4","Qxe4","Nf6","Qe2","Qd5","c4","Qe4+","Qxe4","Nxe4","Be3","Rfd8","Kc2","f5","Rhe1","Bf6","f4","Rd7","b3","Rad8"],"comments":{"0":"CKN-M01: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"CKN-M01: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"CKN-M01: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"CKN-M01: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"CKN-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"CKN-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"CKN-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"CKN-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"CKN-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"CKN-M01: blancas modifica el espacio o el centro en h4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"CKN-M01: negras modifica el espacio o el centro en h6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"CKN-M01: blancas modifica el espacio o el centro en h5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"CKN-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"CKN-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"CKN-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"CKN-M01: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"CKN-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"CKN-M01: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"CKN-M01: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"CKN-M01: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"CKN-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"CKN-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"CKN-M01: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"CKN-M01: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"CKN-M01: blancas modifica el espacio o el centro en c4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"CKN-M01: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"CKN-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","35":"CKN-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","36":"CKN-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","37":"CKN-M01: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","38":"CKN-M01: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","39":"CKN-M01: negras modifica el espacio o el centro en f5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","40":"CKN-M01: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","41":"CKN-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","42":"CKN-M01: blancas modifica el espacio o el centro en f4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","43":"CKN-M01: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","44":"CKN-M01: blancas modifica el espacio o el centro en b3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","45":"CKN-M01: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual."}},{"code":"CKN-M02","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","c7c6","d2d4","d7d5","e4d5","c6d5","c2c4","g8f6","b1c3","e7e6","g1f3","f8b4","c4d5","f6d5","c1d2","e8g8","f1d3","b8c6","e1g1","d5f6","a2a3","b4e7","d2e3","b7b6","a1c1","c8b7","d1e2","a8c8","f1d1","c6a5","f3e5","f6d5","e2h5","f7f5","c3d5","e6d5","c1c8","d8c8","d1c1","c8e6","d3f5","e6f5","h5f5","f8f5"],"san":["e4","c6","d4","d5","exd5","cxd5","c4","Nf6","Nc3","e6","Nf3","Bb4","cxd5","Nxd5","Bd2","O-O","Bd3","Nc6","O-O","Nf6","a3","Be7","Be3","b6","Rc1","Bb7","Qe2","Rc8","Rfd1","Na5","Ne5","Nd5","Qh5","f5","Nxd5","exd5","Rxc8","Qxc8","Rc1","Qe6","Bxf5","Qxf5","Qxf5","Rxf5"],"comments":{"0":"CKN-M02: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"CKN-M02: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"CKN-M02: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"CKN-M02: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"CKN-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"CKN-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"CKN-M02: blancas modifica el espacio o el centro en c4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"CKN-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"CKN-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"CKN-M02: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"CKN-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"CKN-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"CKN-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"CKN-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"CKN-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"CKN-M02: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"CKN-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"CKN-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"CKN-M02: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"CKN-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"CKN-M02: blancas modifica el espacio o el centro en a3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"CKN-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"CKN-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"CKN-M02: negras modifica el espacio o el centro en b6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"CKN-M02: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"CKN-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"CKN-M02: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"CKN-M02: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"CKN-M02: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"CKN-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"CKN-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"CKN-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"CKN-M02: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"CKN-M02: negras modifica el espacio o el centro en f5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"CKN-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","35":"CKN-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","36":"CKN-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","37":"CKN-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","38":"CKN-M02: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","39":"CKN-M02: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","40":"CKN-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","41":"CKN-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","42":"CKN-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","43":"CKN-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual."}},{"code":"CKN-M03","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","c7c6","d2d4","d7d5","e4e5","c8f5","g1f3","e7e6","f1e2","c6c5","e1g1","b8c6","c2c3","c5d4","c3d4","g8e7","b1c3","e7c8","c1e3","f8e7","a1c1","e8g8","c3a4","c8b6","a4c5","e7c5","c1c5","b6d7","c5c1","a8c8","d1d2","d8e7","a2a3","d7b6","b2b4","b6c4","e2c4","d5c4","c1c4","f5e4"],"san":["e4","c6","d4","d5","e5","Bf5","Nf3","e6","Be2","c5","O-O","Nc6","c3","cxd4","cxd4","Nge7","Nc3","Nc8","Be3","Be7","Rc1","O-O","Na4","Nb6","Nc5","Bxc5","Rxc5","Nd7","Rc1","Rc8","Qd2","Qe7","a3","Nb6","b4","Nc4","Bxc4","dxc4","Rxc4","Be4"],"comments":{"0":"CKN-M03: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"CKN-M03: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"CKN-M03: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"CKN-M03: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"CKN-M03: blancas modifica el espacio o el centro en e5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"CKN-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"CKN-M03: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"CKN-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"CKN-M03: negras modifica el espacio o el centro en c5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"CKN-M03: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"CKN-M03: blancas modifica el espacio o el centro en c3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"CKN-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"CKN-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"CKN-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"CKN-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"CKN-M03: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"CKN-M03: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"CKN-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"CKN-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"CKN-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"CKN-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"CKN-M03: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"CKN-M03: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"CKN-M03: blancas coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"CKN-M03: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"CKN-M03: blancas modifica el espacio o el centro en a3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"CKN-M03: blancas modifica el espacio o el centro en b4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","35":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","36":"CKN-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","37":"CKN-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","38":"CKN-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","39":"CKN-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual."}}];
const moveExplanations={"e2e4":"Conectar con P02: el centro se desafía en la segunda jugada.","c7c6":"Conectar con P02: el centro se desafía en la segunda jugada.","d2d4":"Desde aquí se bifurca todo el repertorio.","d7d5":"Desde aquí se bifurca todo el repertorio.","b1c3":"Continuar con ...Ag6, ...Cd7 y ...e6.","d5e4":"Continuar con ...Ag6, ...Cd7 y ...e6.","c3e4":"Continuar con ...Ag6, ...Cd7 y ...e6.","c8f5":"Continuar con ...Ag6, ...Cd7 y ...e6.","e4g3":"P05 muestra cómo absorber el acoso al alfil.","f5g6":"P05 muestra cómo absorber el acoso al alfil.","g1f3":"P05 muestra cómo absorber el acoso al alfil.","b8d7":"P05 muestra cómo absorber el acoso al alfil.","h2h4":"Preparar ...Cgf6, ...Ae7 y enroque.","h7h6":"Preparar ...Cgf6, ...Ae7 y enroque.","h4h5":"Preparar ...Cgf6, ...Ae7 y enroque.","g6h7":"Preparar ...Cgf6, ...Ae7 y enroque.","f1d3":"Preparar ...Cgf6, ...Ae7 y enroque.","h7d3":"Preparar ...Cgf6, ...Ae7 y enroque.","d1d3":"Preparar ...Cgf6, ...Ae7 y enroque.","e7e6":"Preparar ...Cgf6, ...Ae7 y enroque.","e4e5":"P07 introduce el contragolpe que justifica la defensa.","f1e2":"Comparar captura en d4 con mantener tensión.","c6c5":"Comparar captura en d4 con mantener tensión.","e1g1":"Conectar con S02 y M02.","b8c6":"Conectar con S02 y M02.","c2c3":"Conectar con S02 y M02.","c5d4":"Conectar con S02 y M02.","c3d4":"Conectar con S02 y M02.","g8e7":"Conectar con S02 y M02.","e4d5":"Preparar ...Cc6, ...Cf6 y actividad del alfil c8.","c6d5":"Preparar ...Cc6, ...Cf6 y actividad del alfil c8.","c2c4":"S04 muestra el final deseable para negras.","g8f6":"S04 muestra el final deseable para negras.","f2f3":"Desarrollar ...Cf6 y cuestionar e5 en buenas condiciones.","c8g4":"Volver al plan base: desarrollo, rey seguro, ...c5.","h2h3":"Volver al plan base: desarrollo, rey seguro, ...c5.","g4f3":"Volver al plan base: desarrollo, rey seguro, ...c5.","d1f3":"Volver al plan base: desarrollo, rey seguro, ...c5."};
const lessonMoveContexts={"CKN-P01":"Blancas buscan ocupar d4 y ganar espacio. Negras todavía no luchan por e4 con una pieza: preparan un golpe de peón estable.","CKN-P02":"Blancas deben elegir entre Avance, cambio o desarrollo que sostenga e4. Negras atacan e4 y pretenden definir la estructura antes de desarrollar de forma automática.","CKN-P03":"Blancas centralizan Cxe4 y ganan espacio temporal. Negras desarrollan con tiempo sobre e4 y evitan encerrar el alfil con ...e6.","CKN-P04":"Blancas pueden ganar espacio con h4-h5, pero ese avance no desarrolla piezas. Negras refuerzan f6/e5/c5 y dejan g8 libre para el caballo natural.","CKN-P05":"Blancas han cambiado el alfil de casillas claras y pueden usar la dama activa. Negras aceptan el cambio del alfil para reducir presión y consolidan d5/f5 con ...e6.","CKN-P06":"Blancas ganan espacio con e5 y restringen Cf6. Negras colocan el alfil fuera de la cadena y señalan d3/c2 antes de atacar d4.","CKN-P07":"Blancas quieren completar desarrollo y sostener e5-d4. Negras usan el peón c6 como ariete; ...c5 convierte la ventaja de espacio blanca en objetivo.","CKN-P08":"Blancas ya tienen un centro estable y buscan Cc3/Ae3. Negras evitan bloquear la diagonal del alfil y preparan ...Cc8-b6 o ...Cf5 según la estructura.","CKN-P09":"Blancas desarrollan Ad3 y pueden buscar c4 o Af4. Negras recapturan con c6xd5 para mantener presencia central y abrir la columna c.","CKN-P10":"Blancas aceptan un futuro peón d aislado para ganar actividad. Negras juegan ...Cf6 y ...e6; primero bloquean y desarrollan, después atacan d4.","CKN-P11":"Blancas sostienen e4 y sueñan con e5/f4. Negras usan ...e6 para mantener d5 y no abrir líneas cuando el rival tiene más peones en el centro.","CKN-P12":"Blancas retrasan d4 y desarrollan rápido. Negras clavan con ...Ag4, aclaran el alfil y después juegan ...e6 sin perder su pieza activa."};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
const state = {
  completed: new Set(JSON.parse(localStorage.getItem("carokann-negras-progress") || "[]")),
  lesson: 0, lessonPly: 0, challenge: 0, selected: null, streak: 0,
  variant: 0, variantPly: 0, variantFlipped: false,
  variantReviews: JSON.parse(localStorage.getItem("carokann-negras-variant-reviews") || "{}"),
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
  localStorage.setItem("carokann-negras-progress", JSON.stringify([...state.completed]));
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const button = document.createElement("button");
    button.className = `lesson-list-button ${i === state.lesson ? "active" : ""} ${state.completed.has(lesson.code) ? "done" : ""}`;
    button.innerHTML = `<span class="dot"></span><span>${lesson.code.replace("CKN-","")}</span><span class="lesson-name">${lesson.title}</span>`;
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
  localStorage.setItem("carokann-negras-variant-reviews", JSON.stringify(state.variantReviews));
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

renderBoard(document.getElementById("heroBoard"), parseFen("rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3"));
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
