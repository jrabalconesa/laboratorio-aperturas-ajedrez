const PIECES={"P":"♙","N":"♘","B":"♗","R":"♖","Q":"♕","K":"♔","p":"♟","n":"♞","b":"♝","r":"♜","q":"♛","k":"♚"};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=[{"code":"CKB-P01","title":"Tras 2...d5: el centro exige una decisión","fen":"rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq d6 0 3","uci":"","notation":"","stage":"Ampliación A","explanation":"...d5 no solo ataca e4; libera el alfil de c8 y obliga al blanco a declarar su centro. Si llega 3.e5, el plan negro deja de ser «ganar e4» y pasa a atacar la base d4 mediante ...Af5, ...e6 y ...c5, o incluso ...c5 inmediato. El negro busca demostrar que el espacio blanco también puede convertirse en objetivo.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P02","title":"3.e5: espacio y responsabilidad","fen":"rnbqkbnr/pp2pppp/2p5/3pP3/3P4/8/PPP2PPP/RNBQKBNR b KQkq - 0 3","uci":"","notation":"","stage":"Ampliación A","explanation":"el alfil en f5 participa en la presión sobre d3/c2 y, sobre todo, queda fuera de la cadena antes de ...e6. El negro acepta que pueda ser interrogado con h4 o Ad3 porque su objetivo estratégico principal es terminar el desarrollo y jugar ...c5.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P03","title":"...Af5: el alfil escapa de la cadena","fen":"rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 1 4","uci":"","notation":"","stage":"Ampliación A","explanation":"el alfil en f5 participa en la presión sobre d3/c2 y, sobre todo, queda fuera de la cadena antes de ...e6. El negro acepta que pueda ser interrogado con h4 o Ad3 porque su objetivo estratégico principal es terminar el desarrollo y jugar ...c5.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P04","title":"4.Cf3: desarrollo flexible","fen":"rn1qkbnr/pp2pppp/2p5/3pPb2/3P4/5N2/PPP2PPP/RNBQKB1R b KQkq - 2 4","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P05","title":"...e6: llega la estructura típica","fen":"rn1qkbnr/pp3ppp/2p1p3/3pPb2/3P4/5N2/PPP1BPPP/RNBQK2R b KQkq - 1 5","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P06","title":"5.Ae2: preparar el enroque","fen":"rn1qkbnr/pp3ppp/4p3/2ppPb2/3P4/5N2/PPP1BPPP/RNBQK2R w KQkq - 0 6","uci":"","notation":"","stage":"Ampliación A","explanation":"Reconocer la decisión crítica y conectar apertura, estructura y plan.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P07","title":"...c5: ataque a la base d4","fen":"rn1qkbnr/pp3ppp/4p3/2ppPb2/3P4/5N2/PPP1BPPP/RNBQ1RK1 b kq - 1 6","uci":"","notation":"","stage":"Ampliación A","explanation":"el enroque blanco elimina muchos trucos tácticos sobre el rey, de modo que el negro debe justificar ...c5 mediante actividad posicional: Cc6, Db6, Cxd4 o cambios que reduzcan el espacio. El objetivo ya no es «atrapar» al rey, sino transformar el centro en uno donde sus piezas tengan casillas.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P08","title":"6.O-O: rey seguro","fen":"r2qkbnr/pp3ppp/2n1p3/2ppPb2/3P4/5N2/PPP1BPPP/RNBQ1RK1 w kq - 2 7","uci":"","notation":"","stage":"Ampliación A","explanation":"el enroque blanco elimina muchos trucos tácticos sobre el rey, de modo que el negro debe justificar ...c5 mediante actividad posicional: Cc6, Db6, Cxd4 o cambios que reduzcan el espacio. El objetivo ya no es «atrapar» al rey, sino transformar el centro en uno donde sus piezas tengan casillas.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P09","title":"...Cc6 aumenta la presión","fen":"r2qkbnr/pp3ppp/2n1p3/2ppPb2/3P4/4BN2/PPP1BPPP/RN1Q1RK1 b kq - 3 7","uci":"","notation":"","stage":"Ampliación A","explanation":"si el negro mantiene Af5, Ad3 puede cambiar una pieza útil; si el centro se abre, Cxd4 puede activar un caballo; si ...h6 debilita casillas oscuras, esas casillas se convierten en objetivos de medio juego. Error típico: cambiar el alfil de f5 automáticamente cuando el cambio ayuda al negro a completar desarrollo.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P10","title":"7.Ae3 sostiene el centro","fen":"r2qkbnr/pp3ppp/2n1p3/3pPb2/3N4/4B3/PPP1BPPP/RN1Q1RK1 b kq - 0 8","uci":"","notation":"","stage":"Ampliación A","explanation":"si el negro mantiene Af5, Ad3 puede cambiar una pieza útil; si el centro se abre, Cxd4 puede activar un caballo; si ...h6 debilita casillas oscuras, esas casillas se convierten en objetivos de medio juego. Error típico: cambiar el alfil de f5 automáticamente cuando el cambio ayuda al negro a completar desarrollo.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P11","title":"...cxd4 aclara la tensión","fen":"r2qkbnr/pp3ppp/4p3/3pPb2/3n4/4B3/PPP1BPPP/RN1Q1RK1 w kq - 0 9","uci":"","notation":"","stage":"Ampliación A","explanation":"P11 conduce directamente a CKB-S01 y al final derivado 2, donde e5 ya ha desaparecido. El entrenamiento consiste en reconocer cuándo debes abandonar el plan antiguo y construir uno nuevo a partir de las columnas y objetivos restantes.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."},{"code":"CKB-P12","title":"8.Cxd4 activa una pieza","fen":"r2qkbnr/pp3ppp/4p3/3pPb2/3B4/8/PPP1BPPP/RN1Q1RK1 b kq - 0 9","uci":"","notation":"","stage":"Ampliación A","explanation":"P11 conduce directamente a CKB-S01 y al final derivado 2, donde e5 ya ha desaparecido. El entrenamiento consiste en reconocer cuándo debes abandonar el plan antiguo y construir uno nuevo a partir de las columnas y objetivos restantes.","idea":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","hint":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual."}];
const variants=[{"code":"CKB-S01","title":"Ruptura ...f6","level":"800-1400 Elo","response":"Estructura 1","risk":"Medio","theory":"Media","central":"Compara el centro, la actividad de las piezas y la ruptura disponible.","recommendation":"Estudiar primero","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r1bq1rk1/2b5/2n1ppp1/2P5/N2p4/5N2/3B1PPP/1R1QR1K1 w - - 0 21","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Ruptura ...f6»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKB-S02","title":"Pieza activa en e5","level":"800-1400 Elo","response":"Estructura 2","risk":"Medio","theory":"Media","central":"Compara el centro, la actividad de las piezas y la ruptura disponible.","recommendation":"Estudiar primero","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r1bq1rk1/2b3p1/2n1ppp1/2P1P3/N2p4/5N2/3B1PPP/1R1QR1K1 w - - 0 20","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Pieza activa en e5»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKB-S03","title":"Presión sobre casillas oscuras","level":"800-1400 Elo","response":"Estructura 3","risk":"Variable","theory":"Práctica","central":"señala una casilla oscura vulnerable y luego una ruta real de una pieza hacia ella. Si no existe ruta en dos o tres tiempos, el «objetivo» todavía no es práctico.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r1bq1rk1/2b2pp1/2n1p1p1/2P1P3/N2p4/5N2/3B1PPP/1R1QR1K1 b - - 2 19","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Presión sobre casillas oscuras»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKB-S04","title":"Transformación tras Af4","level":"800-1400 Elo","response":"Estructura 4","risk":"Variable","theory":"Práctica","central":"Compara el centro, la actividad de las piezas y la ruptura disponible.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"r1bq1rk1/2b2pp1/2n1p1p1/2P1P3/N2p4/5N2/3B1PPP/R2QR1K1 w - - 1 19","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Transformación tras Af4»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKB-S05","title":"Caballo centralizado","level":"800-1400 Elo","response":"Estructura 5","risk":"Variable","theory":"Práctica","central":"un peón avanzado en b/c puede ganar espacio y fijar objetivos, pero necesita apoyo. La columna detrás del peón puede ser una vía de entrada para la torre. Antes de avanzar más, comprueba si la base del peón queda vulnerable a ...b6 o a una presión de piezas.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"rbbq1rk1/5pp1/2n1p1p1/2P1P3/N2p4/5N2/3B1PPP/R2QR1K1 b - - 0 18","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Caballo centralizado»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."},{"code":"CKB-S06","title":"Ala de dama expandida","level":"800-1400 Elo","response":"Estructura 6","risk":"Variable","theory":"Práctica","central":"un peón avanzado en b/c puede ganar espacio y fijar objetivos, pero necesita apoyo. La columna detrás del peón puede ser una vía de entrada para la torre. Antes de avanzar más, comprueba si la base del peón queda vulnerable a ...b6 o a una presión de piezas.","recommendation":"Incorporar después","summary":"Reproducir la posición, elegir dos candidatas y comparar con la continuación del manual.","moves":"","fen":"rbbq1rk1/5pp1/2n1p1p1/2p1P3/NP1p4/5N2/3B1PPP/R2QR1K1 w - - 0 18","whitePlans":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."],"blackPlans":["Consulta la respuesta activa del rival y la ruptura asociada en el manual."],"question":"¿Qué plan describe mejor «Ala de dama expandida»?","options":["Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual."}];
const exercises=[];
const games=[{"code":"CKB-M01","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","c7c6","d2d4","d7d5","e4e5","c8f5","g1f3","e7e6","f1e2","c6c5","e1g1","b8c6","c1e3","c5d4","f3d4","c6d4","e3d4","g8e7","b1d2","e7c6","d2f3","f8e7","c2c3","e8g8","f1e1","d8c7","e2d3","f5d3","d1d3","b7b5","a2a3","a7a5","h2h4","b5b4","a3b4","a5b4","f3g5","e7g5","h4g5"],"san":["e4","c6","d4","d5","e5","Bf5","Nf3","e6","Be2","c5","O-O","Nc6","Be3","cxd4","Nxd4","Nxd4","Bxd4","Ne7","Nd2","Nc6","Nf3","Be7","c3","O-O","Re1","Qc7","Bd3","Bxd3","Qxd3","b5","a3","a5","h4","b4","axb4","axb4","Ng5","Bxg5","hxg5"],"comments":{"0":"CKB-M01: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"CKB-M01: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"CKB-M01: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"CKB-M01: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"CKB-M01: blancas modifica el espacio o el centro en e5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"CKB-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"CKB-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"CKB-M01: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"CKB-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"CKB-M01: negras modifica el espacio o el centro en c5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"CKB-M01: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"CKB-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"CKB-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"CKB-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"CKB-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"CKB-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"CKB-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"CKB-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"CKB-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"CKB-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"CKB-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"CKB-M01: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"CKB-M01: blancas modifica el espacio o el centro en c3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"CKB-M01: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"CKB-M01: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"CKB-M01: negras coordina la dama con las piezas y crea una pregunta concreta que el rival debe responder. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"CKB-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"CKB-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"CKB-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"CKB-M01: negras modifica el espacio o el centro en b5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"CKB-M01: blancas modifica el espacio o el centro en a3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"CKB-M01: negras modifica el espacio o el centro en a5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"CKB-M01: blancas modifica el espacio o el centro en h4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"CKB-M01: negras modifica el espacio o el centro en b4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"CKB-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","35":"CKB-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","36":"CKB-M01: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","37":"CKB-M01: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","38":"CKB-M01: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual."}},{"code":"CKB-M02","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","c7c6","d2d4","d7d5","e4e5","c8f5","g1f3","h7h6","f1d3","f5d3","d1d3","e7e6","e1g1","c6c5","d4c5","f8c5","c2c4","g8e7","b1c3","e8g8","f1d1","b8c6","c4d5","e6d5","c3d5","e7d5","d3d5","d8d5","d1d5","c5b6","c1d2","f8d8","d5d8","a8d8","d2c3"],"san":["e4","c6","d4","d5","e5","Bf5","Nf3","h6","Bd3","Bxd3","Qxd3","e6","O-O","c5","dxc5","Bxc5","c4","Ne7","Nc3","O-O","Rd1","Nbc6","cxd5","exd5","Nxd5","Nxd5","Qxd5","Qxd5","Rxd5","Bb6","Bd2","Rfd8","Rxd8+","Rxd8","Bc3"],"comments":{"0":"CKB-M02: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"CKB-M02: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"CKB-M02: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"CKB-M02: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"CKB-M02: blancas modifica el espacio o el centro en e5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"CKB-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"CKB-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"CKB-M02: negras modifica el espacio o el centro en h6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"CKB-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"CKB-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"CKB-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"CKB-M02: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"CKB-M02: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"CKB-M02: negras modifica el espacio o el centro en c5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"CKB-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"CKB-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"CKB-M02: blancas modifica el espacio o el centro en c4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"CKB-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"CKB-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"CKB-M02: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"CKB-M02: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"CKB-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"CKB-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"CKB-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"CKB-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"CKB-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"CKB-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"CKB-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"CKB-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"CKB-M02: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"CKB-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"CKB-M02: negras mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"CKB-M02: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"CKB-M02: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"CKB-M02: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual."}},{"code":"CKB-M03","title":"Partida modelo didáctica","subtitle":"Línea didáctica · Blancas — Línea didáctica · Negras","moves":["e2e4","c7c6","d2d4","d7d5","e4e5","c6c5","d4c5","e7e6","g1f3","f8c5","f1d3","b8c6","e1g1","g8e7","f1e1","e7g6","a2a3","a7a5","b1c3","e8g8","c3a4","c5a7","c2c4","d5d4","c1d2","a7b8","d3g6","h7g6","b2b4","a5b4","a3b4","b7b6","c4c5","b6c5","b4c5","b8c7","a1b1","f7f6","e5f6","g7f6"],"san":["e4","c6","d4","d5","e5","c5","dxc5","e6","Nf3","Bxc5","Bd3","Nc6","O-O","Nge7","Re1","Ng6","a3","a5","Nc3","O-O","Na4","Ba7","c4","d4","Bd2","Bb8","Bxg6","hxg6","b4","axb4","axb4","b6","c5","bxc5","bxc5","Bc7","Rb1","f6","exf6","gxf6"],"comments":{"0":"CKB-M03: blancas modifica el espacio o el centro en e4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","1":"CKB-M03: negras modifica el espacio o el centro en c6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","2":"CKB-M03: blancas modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","3":"CKB-M03: negras modifica el espacio o el centro en d5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","4":"CKB-M03: blancas modifica el espacio o el centro en e5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","5":"CKB-M03: negras modifica el espacio o el centro en c5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","6":"CKB-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","7":"CKB-M03: negras modifica el espacio o el centro en e6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","8":"CKB-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","9":"CKB-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","10":"CKB-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","11":"CKB-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","12":"CKB-M03: blancas pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","13":"CKB-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","14":"CKB-M03: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","15":"CKB-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","16":"CKB-M03: blancas modifica el espacio o el centro en a3; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","17":"CKB-M03: negras modifica el espacio o el centro en a5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","18":"CKB-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","19":"CKB-M03: negras pone el rey a salvo y activa una torre; la partida puede pasar a rupturas centrales con menos riesgo. La siguiente decisión se enlaza con las paradas y estructuras del manual.","20":"CKB-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","21":"CKB-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","22":"CKB-M03: blancas modifica el espacio o el centro en c4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","23":"CKB-M03: negras modifica el espacio o el centro en d4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","24":"CKB-M03: blancas desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","25":"CKB-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","26":"CKB-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","27":"CKB-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","28":"CKB-M03: blancas modifica el espacio o el centro en b4; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","29":"CKB-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","30":"CKB-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","31":"CKB-M03: negras modifica el espacio o el centro en b6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","32":"CKB-M03: blancas modifica el espacio o el centro en c5; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","33":"CKB-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","34":"CKB-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","35":"CKB-M03: negras desarrolla o recoloca una pieza menor hacia una casilla útil, aumentando control central y coordinación. La siguiente decisión se enlaza con las paradas y estructuras del manual.","36":"CKB-M03: blancas mejora la posición del rey de acuerdo con la fase de la partida. La siguiente decisión se enlaza con las paradas y estructuras del manual.","37":"CKB-M03: negras modifica el espacio o el centro en f6; la clave es comprobar la mejor respuesta rival antes de seguir. La siguiente decisión se enlaza con las paradas y estructuras del manual.","38":"CKB-M03: blancas aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual.","39":"CKB-M03: negras aclara una tensión concreta y transforma la estructura; conviene revisar qué línea o casilla queda disponible. La siguiente decisión se enlaza con las paradas y estructuras del manual."}}];
const moveExplanations={};
const lessonMoveContexts={"CKB-P01":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. ...d5 no solo ataca e4; libera el alfil de c8 y obliga al blanco a declarar su centro. Si llega 3.e5, el plan negro deja de ser «ganar e4» y pasa a atacar la base d4 mediante ...Af5, ...e6 y ...c5, o incluso ...c5 inmediato. El negro busca demostrar que el espacio blanco también puede convertirse en objetivo.","CKB-P02":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P03":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P04":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P05":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P06":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P07":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P08":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P09":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P10":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P11":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual.","CKB-P12":"Consulta la lectura bilateral y las candidatas específicas de esta posición en el manual. Consulta la respuesta activa del rival y la ruptura asociada en el manual."};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
const state = {
  completed: new Set(JSON.parse(localStorage.getItem("carokann-blancas-progress") || "[]")),
  lesson: 0, lessonPly: 0, challenge: 0, selected: null, streak: 0,
  variant: 0, variantPly: 0, variantFlipped: false,
  variantReviews: JSON.parse(localStorage.getItem("carokann-blancas-variant-reviews") || "{}"),
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
  localStorage.setItem("carokann-blancas-progress", JSON.stringify([...state.completed]));
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const button = document.createElement("button");
    button.className = `lesson-list-button ${i === state.lesson ? "active" : ""} ${state.completed.has(lesson.code) ? "done" : ""}`;
    button.innerHTML = `<span class="dot"></span><span>${lesson.code.replace("CKB-","")}</span><span class="lesson-name">${lesson.title}</span>`;
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
  localStorage.setItem("carokann-blancas-variant-reviews", JSON.stringify(state.variantReviews));
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
