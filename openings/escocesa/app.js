const PIECES={"P":"♙","N":"♘","B":"♗","R":"♖","Q":"♕","K":"♔","p":"♟","n":"♞","b":"♝","r":"♜","q":"♛","k":"♚"};
const INITIAL_FEN="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";
const lessons=[{"code":"ESC-P01","title":"Centro simétrico antes de la ruptura","fen":"rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq e6 0 2","uci":"e2e4 e7e5","notation":"e2e4 e7e5","stage":"PROGRESIVO","explanation":"Igualdad dinámica inicial; las blancas eligen el momento de abrir.","idea":"Jugar Cf3, d4 y recuperar con Cxd4, manteniendo piezas activas.","hint":"2.Cf3 Cc6 3.d4: desarrollo con amenaza y ruptura inmediata."},{"code":"ESC-P02","title":"Desarrollo con presión sobre e5","fen":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3","uci":"e2e4 e7e5 g1f3 b8c6","notation":"e2e4 e7e5 g1f3 b8c6","stage":"PROGRESIVO","explanation":"Ligera iniciativa blanca por llevar la mano, sin ventaja material.","idea":"Abrir el centro con d4 antes de mover peones laterales.","hint":"3.d4 exd4 4.Cxd4: el caballo recupera con actividad."},{"code":"ESC-P03","title":"La ruptura 3.d4 obliga a decidir","fen":"r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4","stage":"PROGRESIVO","explanation":"Centro abierto inminente; el desarrollo rápido vale más que un peón lateral.","idea":"Recuperar con Cxd4; evitar 4.Dxd4, que permite ...Cxd4 con ganancia de tiempo en muchas desviaciones.","hint":"4.Cxd4 Cf6: conservar la dama y desarrollar con tempo."},{"code":"ESC-P04","title":"Recaptura activa y respuesta 4...Cf6","fen":"r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6","stage":"PROGRESIVO","explanation":"Posición principal de la Escocesa: actividad equilibrada y decisiones concretas.","idea":"Responder a ...Cf6 con Cxc6 para alterar la estructura y después desarrollar Ad3.","hint":"5.Cxc6 bxc6 6.Ad3: crear un objetivo estructural y preparar el enroque."},{"code":"ESC-P05","title":"Estructura asimétrica tras Cxc6 y ...bxc6","fen":"r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 0 6","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6","stage":"PROGRESIVO","explanation":"Desequilibrio sano: blancas tienen estructura más limpia; negras, pareja de alfiles y columnas.","idea":"Desarrollar Ad3, enrocar y decidir si conviene e5 o exd5 según la preparación negra.","hint":"6.Ad3 d5 7.exd5: obligar a las negras a definir su centro."},{"code":"ESC-P06","title":"Preparar la transformación con Ad3 y ...d5","fen":"r1bqkb1r/p1p2ppp/2p2n2/3p4/4P3/3B4/PPP2PPP/RNBQK2R w KQkq d6 0 7","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5","stage":"PROGRESIVO","explanation":"Tensión central crítica. Quien calcule mejor la secuencia de capturas coordinará antes.","idea":"Calcular exd5; si las negras recapturan con el peón c, atacar d5 con Cc3, Te1 y Df3.","hint":"7.exd5 cxd5 8.O-O: abrir líneas solo después de asegurar el rey."},{"code":"ESC-P07","title":"Peón negro en d5 y líneas abiertas","fen":"r1bqkb1r/p1p2ppp/5n2/3p4/8/3B4/PPP2PPP/RNBQK2R w KQkq - 0 8","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5","stage":"PROGRESIVO","explanation":"Medio juego abierto con objetivo estable en d5, pero buena actividad negra.","idea":"Enrocar, colocar una torre en e1 y desarrollar el caballo b1 sin bloquear el alfil c1.","hint":"8.O-O Ae7 9.Te1: la torre ocupa una columna útil."},{"code":"ESC-P08","title":"Enroque blanco y desarrollo negro","fen":"r1bqk2r/p1p1bppp/5n2/3p4/8/3B4/PPP2PPP/RNBQ1RK1 w kq - 2 9","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7","stage":"PROGRESIVO","explanation":"Blancas listas para Te1; negras aún deben enrocar antes de emprender acciones centrales.","idea":"Jugar Te1 y Cd2; no iniciar un ataque en h7 mientras el caballo b1 siga en casa.","hint":"9.Te1 O-O 10.Cd2: completar desarrollo antes de atacar."},{"code":"ESC-P09","title":"Torres activas en la columna e","fen":"r1bq1rk1/p1p1bppp/5n2/3p4/8/3B4/PPP2PPP/RNBQR1K1 w - - 4 10","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7 f1e1 e8g8","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7 f1e1 e8g8","stage":"PROGRESIVO","explanation":"Equilibrio activo. La columna e y la casilla d5 organizan los planes.","idea":"Desarrollar Cd2, b3 y Ab2; presionar d5 con Df3 o c4 cuando sea seguro.","hint":"10.Cd2 c5 11.b3: preparar Ab2 y reforzar el control de d4/e5."},{"code":"ESC-P10","title":"Contrajuego negro con ...c5","fen":"r1bq1rk1/p3bppp/5n2/2pp4/8/3B4/PPPN1PPP/R1BQR1K1 w - c6 0 11","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7 f1e1 e8g8 b1d2 c7c5","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7 f1e1 e8g8 b1d2 c7c5","stage":"PROGRESIVO","explanation":"Las negras obtienen contrajuego real; las blancas deben completar su desarrollo sin defender pasivamente.","idea":"Responder a ...c5 con desarrollo: b3, Ab2 y Df3; reservar c4 para cuando no debilite d4.","hint":"11.b3 Te8 12.Ab2: enfrentar el alfil al peón d5."},{"code":"ESC-P11","title":"Fianchetto del alfil y presión central","fen":"r1bqr1k1/p3bppp/5n2/2pp4/8/1P1B4/P1PN1PPP/R1BQR1K1 w - - 1 12","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7 f1e1 e8g8 b1d2 c7c5 b2b3 f8e8","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7 f1e1 e8g8 b1d2 c7c5 b2b3 f8e8","stage":"PROGRESIVO","explanation":"La posición es jugable para ambos bandos: blancas presionan d5 y negras buscan ...d4.","idea":"Completar Ab2 y Df3; si ...d4, buscar Cc4 y una presión sobre la diagonal a1-h8.","hint":"12.Ab2 Ae6 13.Df3: sumar presión sin exponer la dama a un tempo fácil."},{"code":"ESC-P12","title":"Posición de medio juego: planes concretos","fen":"r2qr1k1/p3bppp/4bn2/2pp4/8/1P1B4/PBPN1PPP/R2QR1K1 w - - 3 13","uci":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7 f1e1 e8g8 b1d2 c7c5 b2b3 f8e8 c1b2 c8e6","notation":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5 e1g1 f8e7 f1e1 e8g8 b1d2 c7c5 b2b3 f8e8 c1b2 c8e6","stage":"PROGRESIVO","explanation":"Equilibrio complejo, con planes claros y sin necesidad de memorizar una continuación larga.","idea":"Comparar Df3, c4 y Cf3-e5; elegir según la amenaza ...d4 y la colocación de las piezas negras.","hint":"13.Df3 Tc8 14.Tad1: coordinar torres y responder a ...d4 con Cc4."}];
const variants=[{"code":"ESC-S01","title":"Centro abierto tras 3...exd4 4.Cxd4","level":"intermedio","response":"Estructura 1","risk":"Medio","theory":"Media","central":"Los peones e han desaparecido del centro y la columna d queda despejada. Las piezas menores entran con tiempos y cualquier rey sin enrocar puede convertirse en objetivo.","recommendation":"Estudiar primero","summary":"Piezas: Alfiles y torres mejoran; la dama temprana suele ser una pieza problemática. Rupturas: d4, e5 y e-file. La ruptura ...d5 iguala si está bien preparada. Mini ejercicio: Juegan negras: compare 4...Cf6 y 4...Ac5. Ambas desarrollan atacando; elija según el tipo de medio juego que desea.","moves":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4","whitePlans":["Desarrollar Cc3, Ae3 o Ad3 y enrocar.","La prioridad es aprovechar las líneas antes de iniciar avances laterales."],"blackPlans":["Atacar el caballo d4 con ...Cf6 o ...Ac5, completar el enroque y devolver la presión sobre e4."],"question":"¿Qué plan describe mejor la estructura «Centro abierto tras 3...exd4 4.Cxd4»?","options":["Desarrollar Cc3, Ae3 o Ad3 y enrocar.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Desarrollar Cc3, Ae3 o Ad3 y enrocar."},{"code":"ESC-S02","title":"Peones negros doblados en c6 y c7","level":"intermedio","response":"Estructura 2","risk":"Medio","theory":"Media","central":"El peón b recaptura en c6 y queda delante del peón c7. No es una debilidad perdida por sí sola: abre la columna b y sostiene d5.","recommendation":"Estudiar primero","summary":"Piezas: El alfil c8 puede salir por e6 o g4; el caballo blanco c3 y el alfil d3 apuntan al centro. Rupturas: d5 es la casilla de liberación negra; b-file puede ser útil si las torres se conectan. Mini ejercicio: ¿Debe el blanco ganar c6 de inmediato? No: primero debe forzar que las piezas negras pierdan actividad.","moves":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6","whitePlans":["Atacar la base c6 con Ad3, O-O, Te1 y Df3; provocar ...d5 y convertir el peón avanzado en objetivo."],"blackPlans":["Usar la pareja de alfiles, jugar ...d5 y activar Tb8 o Tc8.","La estructura pide actividad inmediata."],"question":"¿Qué plan describe mejor la estructura «Peones negros doblados en c6 y c7»?","options":["Atacar la base c6 con Ad3, O-O, Te1 y Df3; provocar ...d5 y convertir el peón avanzado en objetivo.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Atacar la base c6 con Ad3, O-O, Te1 y Df3; provocar ...d5 y convertir el peón avanzado en objetivo."},{"code":"ESC-S03","title":"Peón negro aislado en d5","level":"intermedio","response":"Estructura 3","risk":"Variable","theory":"Práctica","central":"El peón de c6 ha llegado a d5 y carece de un peón vecino que lo defienda de forma estable. Da espacio, pero necesita piezas activas.","recommendation":"Incorporar después","summary":"Piezas: Un caballo blanco en c4 puede ser excelente; el alfil negro de casillas oscuras apoya el avance ...d4. Rupturas: c4 y e4 son puestos derivados. Las rupturas ...c5 y c4 son decisiones centrales. Mini ejercicio: Tras ...c5, la respuesta práctica es desarrollar b3 y Ab2 antes de capturar o empujar.","moves":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 g8f6 d4c6 b7c6 f1d3 d7d5 e4d5 c6d5","whitePlans":["Bloquear o presionar d5 con Cc3, Te1, Df3 y Tad1; evitar que avance a d4 en buenas condiciones."],"blackPlans":["Jugar ...c5, ...Ae6, ...Tc8 y, si es posible, ...d4.","La iniciativa compensa el defecto estático."],"question":"¿Qué plan describe mejor la estructura «Peón negro aislado en d5»?","options":["Bloquear o presionar d5 con Cc3, Te1, Df3 y Tad1; evitar que avance a d4 en buenas condiciones.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Bloquear o presionar d5 con Cc3, Te1, Df3 y Tad1; evitar que avance a d4 en buenas condiciones."},{"code":"ESC-S04","title":"Clásica con c3 y tensión sobre d4","level":"intermedio","response":"Estructura 4","risk":"Variable","theory":"Práctica","central":"El peón c3 sostiene al caballo d4 y prepara desarrollo flexible. Las negras concentran presión sobre d4 con alfil, dama y caballo.","recommendation":"Incorporar después","summary":"Piezas: El alfil e3 es útil, pero puede ser blanco de ...d5; el caballo e7 puede ir g6 o c6. Rupturas: d4, e5 y f2. La ruptura ...d5 es el liberador principal. Mini ejercicio: ¿Por qué 7.Ac4 es útil? Desarrolla, controla f7 y permite O-O sin mover de nuevo el alfil e3.","moves":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8c5 c1e3 d8f6 c2c3 g8e7","whitePlans":["Desarrollar Ac4 o Ae2, enrocar y retirar el caballo a c2 solo cuando la presión lo exija."],"blackPlans":["Añadir ...O-O y ...d5; si el caballo se retira, ocupar el centro con ...d5 sin perder tiempos de dama."],"question":"¿Qué plan describe mejor la estructura «Clásica con c3 y tensión sobre d4»?","options":["Desarrollar Ac4 o Ae2, enrocar y retirar el caballo a c2 solo cuando la presión lo exija.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Desarrollar Ac4 o Ae2, enrocar y retirar el caballo a c2 solo cuando la presión lo exija."},{"code":"ESC-S05","title":"Dama blanca central tras 4...Cxd4 5.Dxd4","level":"intermedio","response":"Estructura 5","risk":"Variable","theory":"Práctica","central":"Las piezas centrales se han cambiado y la dama blanca ocupa d4. La estructura es sana, pero el negro puede ganar tiempos desarrollando.","recommendation":"Incorporar después","summary":"Piezas: La dama blanca es activa pero vulnerable. Los caballos negros ganan valor si atacan d4 y e4. Rupturas: d4 y e5. El control de d5 decide si las blancas conservan espacio. Mini ejercicio: La jugada negra más lógica es ...Cf6: desarrolla y obliga a la dama a justificar su posición.","moves":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 c6d4 d1d4","whitePlans":["Colocar Cc3, Ae3 o Ag5 y enrocar largo solo si la dama encuentra una casilla estable."],"blackPlans":["Jugar ...Cf6, ...d6 y ...Ae7 con tempos sobre la dama; evitar ataques de peones que creen debilidades."],"question":"¿Qué plan describe mejor la estructura «Dama blanca central tras 4...Cxd4 5.Dxd4»?","options":["Colocar Cc3, Ae3 o Ag5 y enrocar largo solo si la dama encuentra una casilla estable.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Colocar Cc3, Ae3 o Ag5 y enrocar largo solo si la dama encuentra una casilla estable."},{"code":"ESC-S06","title":"Cadena blanca e5 frente a c6-d5","level":"intermedio","response":"Estructura 6","risk":"Variable","theory":"Práctica","central":"El peón e5 gana espacio y restringe f6, mientras el centro negro c6-d5 busca romper con ...c5 o ...f6.","recommendation":"Incorporar después","summary":"Piezas: El alfil blanco d3 mira h7; el caballo negro d7 necesita c5 o f8 para no quedar pasivo. Rupturas: f6, e5 y c5. Las rupturas ...f6 y ...c5 no deben jugarse sin respaldo. Mini ejercicio: Antes de 12...f6, negras deben enrocar; abrir la columna f con el rey en e8 sería arriesgado.","moves":"e2e4 e7e5 g1f3 b8c6 d2d4 e5d4 f3d4 f8b4 c2c3 b4e7 d4c6 b7c6 f1d3 d7d5 e1g1 g8f6 e4e5 f6d7","whitePlans":["Sostener e5, jugar Te1 y preparar c4 o f4 solo después de completar el desarrollo."],"blackPlans":["Atacar la base e5 con ...f6 y usar ...c5 para cuestionar d4.","El caballo puede maniobrar c5-e6."],"question":"¿Qué plan describe mejor la estructura «Cadena blanca e5 frente a c6-d5»?","options":["Sostener e5, jugar Te1 y preparar c4 o f4 solo después de completar el desarrollo.","Mover la dama repetidamente sin completar el desarrollo.","Atacar en un flanco sin comprobar el centro ni la seguridad del rey."],"correct":0,"feedback":"Sostener e5, jugar Te1 y preparar c4 o f4 solo después de completar el desarrollo."}];
const exercises=[{"id":"ESC-E01","kind":"exercise","title":"Ruptura central · ¿Qué ruptura blanca aprovecha mejor el desarrollo de Cf3?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6"],"fen":"r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 2 3","sideToMove":"white","objective":"¿Qué ruptura blanca aprovecha mejor el desarrollo de Cf3?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 3.d4","blackPlan":"Mejor recurso rival incluido en la solución: 3.Ac4 y 3.Ab5 son buenas aperturas, pero aquí el repertorio busca 3.d4 para obligar a decidir el centro. Además, d4 obliga a las negras a aclarar e5 antes de completar ...Cf6 y ...Ac5; por eso convierte el tiempo de ventaja en una decisión central.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 3.f3? debilita e3 y no desarrolla. Referencias: ESC-P02; repertorio práctico","manualReference":"ESC-E01 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E02","kind":"exercise","title":"Desarrollo con tempo · Tras 3...exd4, ¿con qué pieza conviene recuperar?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4"],"fen":"r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4","sideToMove":"white","objective":"Tras 3...exd4, ¿con qué pieza conviene recuperar?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 4.Cxd4","blackPlan":"Mejor recurso rival incluido en la solución: El caballo recupera el peón y gana una casilla central sin exponer la dama. 4.Dxd4 permite ...Cc6 con tiempo. Desde d4 el caballo controla c6, e6, f5 y b5; la dama queda libre para coordinarse y no ofrece al rival una jugada de desarrollo con ataque.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 4.Dxd4?! mueve la dama demasiado pronto. Referencias: ESC-P03; repertorio práctico","manualReference":"ESC-E02 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E03","kind":"exercise","title":"Estructura c6-c7 · ¿Qué jugada crea una asimetría estable contra 4...Cf6?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6"],"fen":"r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"¿Qué jugada crea una asimetría estable contra 4...Cf6?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 5.Cxc6","blackPlan":"Mejor recurso rival incluido en la solución: El cambio elimina al defensor c6 y obliga ...bxc6; después las blancas pueden atacar c6/d5. 5.Cc3 es jugable, pero conserva una posición más simétrica. El cambio no busca ganar c6 inmediatamente: crea una estructura que solo será favorable si las blancas desarrollan Ad3, enrocan y vigilan la ruptura ...d5.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 5.e5? puede ser prematura sin conocer ...Cxe4 o ...De7. Referencias: ESC-P04; repertorio práctico","manualReference":"ESC-E03 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E04","kind":"exercise","title":"Compensación estructural · ¿Qué recibe el negro a cambio de los peones doblados?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6"],"fen":"r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 0 6","sideToMove":"white","objective":"¿Qué recibe el negro a cambio de los peones doblados?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: Pareja de alfiles y columna b","blackPlan":"Mejor recurso rival incluido en la solución: Los peones c6-c7 son objetivos, pero ...bxc6 abre la columna b y conserva ambos alfiles. No existe ganancia automática para las blancas. La compensación negra es dinámica, no material: dos alfiles, columna b y posibilidad de ...d5. El blanco debe impedir que esa actividad elimine la debilidad.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: Creer que c6 se gana sin completar desarrollo. Referencias: ESC-P05; repertorio práctico","manualReference":"ESC-E04 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E05","kind":"exercise","title":"Transformación del centro · ¿Qué decisión central es más clara tras 6...d5?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5"],"fen":"r1bqkb1r/p1p2ppp/2p2n2/3p4/4P3/3B4/PPP2PPP/RNBQK2R w KQkq d6 0 7","sideToMove":"white","objective":"¿Qué decisión central es más clara tras 6...d5?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 7.exd5","blackPlan":"Mejor recurso rival incluido en la solución: La captura obliga al peón c6 a ir a d5, creando un objetivo aislado. 7.e5 gana espacio, pero permite ...Cd7 y ...c5 con juego más complejo. Tras exd5 y ...cxd5, el objetivo queda definido. Mantener la tensión permitiría ...dxe4 o ...d4 en condiciones más cómodas para las negras.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 7.O-O? no es mala, pero deja a negras elegir ...dxe4. Referencias: ESC-P06; repertorio práctico","manualReference":"ESC-E05 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E06","kind":"exercise","title":"Seguridad del rey · Antes de presionar d5, ¿qué debe hacer el blanco?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5"],"fen":"r1bqkb1r/p1p2ppp/5n2/3p4/8/3B4/PPP2PPP/RNBQK2R w KQkq - 0 8","sideToMove":"white","objective":"Antes de presionar d5, ¿qué debe hacer el blanco?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 8.O-O","blackPlan":"Mejor recurso rival incluido en la solución: Con el centro abierto, el rey seguro es prioritario. 8.Df3?! aumenta presión, pero permite ...Ag4 y mantiene el rey en e1. El enroque activa la torre de f1 y evita que ...Ag4 o ...d4 abran líneas contra e1. La presión sobre d5 puede esperar un movimiento.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 8.Ab5+?! es un jaque sin mejora real. Referencias: ESC-P07; repertorio práctico","manualReference":"ESC-E06 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E07","kind":"exercise","title":"Peor pieza concreta · ¿Cuál es la pieza blanca menos desarrollada?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8"],"fen":"r1bq1rk1/p1p1bppp/5n2/3p4/8/3B4/PPP2PPP/RNBQR1K1 w - - 4 10","sideToMove":"white","objective":"¿Cuál es la pieza blanca menos desarrollada?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: El caballo b1; 10.Cd2","blackPlan":"Mejor recurso rival incluido en la solución: La torre ya está activa y el rey seguro. Cd2 prepara c4/f3 y deja libre el peón c para otras decisiones. Cd2 no es pasivo: prepara c4 para bloquear d5 y libera c1 para el alfil. Desarrollar la peor pieza mejora todo el plan blanco.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 10.Df3?! repite la idea de presión sin completar desarrollo. Referencias: ESC-P09; repertorio práctico","manualReference":"ESC-E07 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E08","kind":"exercise","title":"Control de la casilla d4 · ¿Cómo responder a 10...c5 sin apresurarse a capturar?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8","b1d2","c7c5"],"fen":"r1bq1rk1/p3bppp/5n2/2pp4/8/3B4/PPPN1PPP/R1BQR1K1 w - c6 0 11","sideToMove":"white","objective":"¿Cómo responder a 10...c5 sin apresurarse a capturar?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 11.b3","blackPlan":"Mejor recurso rival incluido en la solución: b3 prepara Ab2 contra d4/e5 y sostiene la coordinación. 11.c4?! fija el centro, pero puede ceder d4 a las negras. b3 controla c4, prepara Ab2 y responde a ...d4 desde una diagonal larga. c4 inmediato puede fijar d4 como casilla fuerte para el peón negro.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 11.Cf5?! permite ...Axf5. Referencias: ESC-P10; repertorio práctico","manualReference":"ESC-E08 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E09","kind":"exercise","title":"Plan rival · ¿Cuál es la ruptura liberadora principal de las negras?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8c5","c1e3","d8f6","c2c3","g8e7"],"fen":"r1b1k2r/ppppnppp/2n2q2/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R w KQkq - 1 7","sideToMove":"white","objective":"¿Cuál es la ruptura liberadora principal de las negras?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: ...d5","blackPlan":"Mejor recurso rival incluido en la solución: En la Clásica, ...d5 desafía el caballo d4 y abre el alfil c8. Las blancas deben enrocar y calcular capturas. ...d5 libera el alfil de c8 y cuestiona e4. Si el blanco la ignora, las negras resuelven su principal problema de apertura con una sola jugada.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: ...f5? debilita el rey antes de enrocar. Referencias: ESC-S04; repertorio práctico","manualReference":"ESC-E09 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E10","kind":"exercise","title":"Defensa activa · Contra 4...Ac5, ¿qué desarrollo protege el caballo d4?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8c5"],"fen":"r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"Contra 4...Ac5, ¿qué desarrollo protege el caballo d4?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 5.Ae3","blackPlan":"Mejor recurso rival incluido en la solución: Ae3 interpone una pieza y prepara c3. 5.Cb3 es sólido, pero concede parte de la iniciativa central. Ae3 añade un defensor a d4 y desarrolla el alfil. Cb3 retira una pieza activa y permite a las negras completar el desarrollo sin nuevas dificultades.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 5.Cxc6?! puede entregar la tensión sin obtener el plan deseado. Referencias: ESC-X01; repertorio práctico","manualReference":"ESC-E10 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E11","kind":"exercise","title":"Ataque a c7 · ¿Qué recurso castiga la salida temprana 4...Dh4?!","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","d8h4"],"fen":"r1b1kbnr/pppp1ppp/2n5/8/3NP2q/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"¿Qué recurso castiga la salida temprana 4...Dh4?!","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 5.Cb5","blackPlan":"Mejor recurso rival incluido en la solución: 5.Cb5 amenaza Cxc7+, un tenedor de rey y torre, y aprovecha que la dama no ha contribuido al desarrollo. Cb5 es fuerte porque c7 está unido a la torre a8 y la dama negra ha perdido tiempo. Sin esa doble condición, el salto sería solo una excursión lateral.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 5.g3?! debilita casillas y permite ...Dxe4+. Referencias: ESC-M02-P1; repertorio práctico","manualReference":"ESC-E11 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E12","kind":"exercise","title":"Respuesta al jaque · ¿Cómo bloquear 4...Ab4+ de forma útil?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8b4"],"fen":"r1bqk1nr/pppp1ppp/2n5/8/1b1NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"¿Cómo bloquear 4...Ab4+ de forma útil?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: 5.c3","blackPlan":"Mejor recurso rival incluido en la solución: c3 corta el jaque, sostiene d4 y obliga al alfil a retirarse. 5.Cc3 bloquea, pero permite una clavada sobre el caballo d4. c3 no solo corta el jaque: sostiene d4 y obliga al alfil a decidir. El caballo b1 irá después por d2, de modo que la estructura sigue siendo coherente.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: 5.Ad2?! desarrolla, pero cambia un alfil útil sin ganar espacio. Referencias: ESC-M03-P1; repertorio práctico","manualReference":"ESC-E12 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E13","kind":"exercise","title":"Ataque a la base · ¿Qué ruptura debe preparar el negro contra la cadena e5?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8b4","c2c3","b4e7","d4c6","b7c6","f1d3","d7d5","e1g1","g8f6","e4e5","f6d7"],"fen":"r1bqk2r/p1pnbppp/2p5/3pP3/8/2PB4/PP3PPP/RNBQ1RK1 w kq - 1 10","sideToMove":"white","objective":"¿Qué ruptura debe preparar el negro contra la cadena e5?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: ...f6","blackPlan":"Mejor recurso rival incluido en la solución: La base de la cadena es e5. Tras enrocar, ...f6 cuestiona ese peón y activa la torre f8 si se abre la columna. ...f6 ataca la base e5 y abre la columna f. El blanco debe comprobar si exf6 deja una pieza negra activa o si conviene mantener la tensión.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: ...g5? crea debilidades sin atacar la base. Referencias: ESC-S06; repertorio práctico","manualReference":"ESC-E13 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E14","kind":"exercise","title":"Bloqueo activo · ¿Qué casilla de bloqueo busca el caballo blanco?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5"],"fen":"r1bqkb1r/p1p2ppp/5n2/3p4/8/3B4/PPP2PPP/RNBQK2R w KQkq - 0 8","sideToMove":"white","objective":"¿Qué casilla de bloqueo busca el caballo blanco?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: c4","blackPlan":"Mejor recurso rival incluido en la solución: Un caballo en c4 frena d4 y ataca d6/e5. Bloquear con una pieza pasiva en d3 no genera contrajuego. Cc4 bloquea d5 desde una casilla activa y controla d6 y e5. El bloqueo funciona porque el caballo no puede ser expulsado inmediatamente por un peón.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: Atacar d5 solo con la dama. Referencias: ESC-S03; repertorio práctico","manualReference":"ESC-E14 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E15","kind":"exercise","title":"Control final · Antes de mover, ¿qué avance negro debe calcular el blanco?","chapter":"Parte XIII","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8","b1d2","c7c5","b2b3","f8e8","c1b2","c8e6"],"fen":"r2qr1k1/p3bppp/4bn2/2pp4/8/1P1B4/PBPN1PPP/R2QR1K1 w - - 3 13","sideToMove":"white","objective":"Antes de mover, ¿qué avance negro debe calcular el blanco?","level":{"label":"Básico","minRating":null,"maxRating":null,"stage":"básico"},"whitePlan":"Candidata o respuesta esperada: ...d4","blackPlan":"Mejor recurso rival incluido en la solución: La estructura y las piezas negras apuntan a ...d4. Las candidatas blancas deben responder a ese avance, en especial Df3, c4 o Cf3. Antes de mover, el blanco debe responder a ...d4 con una pieza o cambiar la tensión. Df3 y Cc4 son candidatas porque atacan el peón y mejoran coordinación.","teachingContinuation":"Pista: Revisa centro, desarrollo y amenaza rival. Error típico: Jugar 13.Dg4?! sin mirar ...d4. Referencias: ESC-P12; repertorio práctico","manualReference":"ESC-E15 · Parte XIII","tags":[],"openingId":"escocesa"},{"id":"ESC-E16","kind":"exercise","title":"Reconocer · ¿Qué tipo de centro aparece y qué piezas ganan valor?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4"],"fen":"r1bqkbnr/pppp1ppp/2n5/8/3NP3/8/PPP2PPP/RNBQKB1R b KQkq - 0 4","sideToMove":"black","objective":"¿Qué tipo de centro aparece y qué piezas ganan valor?","level":{"label":"Reconocer","minRating":null,"maxRating":null,"stage":"reconocer"},"whitePlan":"Analizar la respuesta blanca antes de decidir.","blackPlan":"Mejor recurso rival incluido en la solución: La desaparición del peón e negro y del peón d blanco abre columnas y diagonales. Los alfiles y torres se activan; por eso la prioridad es desarrollar y enrocar, no mover peones de flanco.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Llamarlo centro cerrado por ver un caballo en d4. Referencias: ESC-S01; ESC-M01-P1","manualReference":"ESC-E16 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E17","kind":"exercise","title":"Reconocer · ¿Cuál es la debilidad negra y cuál es su compensación?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6"],"fen":"r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 0 6","sideToMove":"white","objective":"¿Cuál es la debilidad negra y cuál es su compensación?","level":{"label":"Reconocer","minRating":null,"maxRating":null,"stage":"reconocer"},"whitePlan":"Candidata o respuesta esperada: c6 es objetivo; alfiles y columna b compensan","blackPlan":"Mejor recurso rival incluido en la solución: El peón c6 puede fijarse, pero la recaptura ...bxc6 abre b-file y conserva la pareja de alfiles. Blancas deben impedir ...d5 sin perder tiempos.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Suponer que los peones doblados pierden por sí solos. Referencias: ESC-S02; ESC-P05","manualReference":"ESC-E17 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E18","kind":"exercise","title":"Reconocer · ¿Qué define esta estructura después de ...cxd5?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5"],"fen":"r1bqkb1r/p1p2ppp/5n2/3p4/8/3B4/PPP2PPP/RNBQK2R w KQkq - 0 8","sideToMove":"white","objective":"¿Qué define esta estructura después de ...cxd5?","level":{"label":"Reconocer","minRating":null,"maxRating":null,"stage":"reconocer"},"whitePlan":"Candidata o respuesta esperada: Peón aislado negro en d5","blackPlan":"Mejor recurso rival incluido en la solución: El peón d5 da espacio y puede avanzar, pero carece de apoyo de otro peón. Blancas lo bloquean; negras buscan ...c5 y ...d4.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Cambiar todas las piezas sin controlar d4. Referencias: ESC-S03; ESC-M01","manualReference":"ESC-E18 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E19","kind":"exercise","title":"Reconocer · ¿Dónde está la base de la cadena blanca?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8b4","c2c3","b4e7","d4c6","b7c6","f1d3","d7d5","e1g1","g8f6","e4e5","f6d7"],"fen":"r1bqk2r/p1pnbppp/2p5/3pP3/8/2PB4/PP3PPP/RNBQ1RK1 w kq - 1 10","sideToMove":"white","objective":"¿Dónde está la base de la cadena blanca?","level":{"label":"Reconocer","minRating":null,"maxRating":null,"stage":"reconocer"},"whitePlan":"Candidata o respuesta esperada: e5","blackPlan":"Mejor recurso rival incluido en la solución: El peón e5 sostiene el espacio blanco y es atacable con ...f6. El negro no debe golpear la punta con ...g5, sino la base.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Confundir la casilla f6 con la base de la cadena. Referencias: ESC-S06; ESC-M03","manualReference":"ESC-E19 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E20","kind":"exercise","title":"Reconocer · ¿Qué problema práctico tiene la dama blanca en d4?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","c6d4","d1d4"],"fen":"r1bqkbnr/pppp1ppp/8/8/3QP3/8/PPP2PPP/RNB1KB1R b KQkq - 0 5","sideToMove":"black","objective":"¿Qué problema práctico tiene la dama blanca en d4?","level":{"label":"Reconocer","minRating":null,"maxRating":null,"stage":"reconocer"},"whitePlan":"Analizar la respuesta blanca antes de decidir.","blackPlan":"Mejor recurso rival incluido en la solución: La dama es activa, pero una pieza menor puede atacarla mientras desarrolla. Blancas deben buscar una casilla estable y no defender e4 con más movimientos de dama.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Considerar toda centralización de dama como ventaja. Referencias: ESC-S05","manualReference":"ESC-E20 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E21","kind":"exercise","title":"Decidir · El negro juega 4...Ac5. Compare 5.Ae3 y 5.Cb3.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8c5"],"fen":"r1bqk1nr/pppp1ppp/2n5/2b5/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"El negro juega 4...Ac5. Compare 5.Ae3 y 5.Cb3.","level":{"label":"Decidir","minRating":null,"maxRating":null,"stage":"decidir"},"whitePlan":"Candidata o respuesta esperada: 5.Ae3","blackPlan":"Mejor recurso rival incluido en la solución: Ae3 protege d4, desarrolla y prepara c3. Cb3 evita la presión, pero mueve de nuevo el caballo y concede a negras un desarrollo cómodo.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 5.Cxc6 sin valorar ...dxc6 y pareja de alfiles. Referencias: ESC-S04","manualReference":"ESC-E21 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E22","kind":"exercise","title":"Decidir · Tras ...Cge7, ¿qué jugada completa el esquema blanco?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8c5","c1e3","d8f6","c2c3","g8e7","f1c4"],"fen":"r1b1k2r/ppppnppp/2n2q2/2b5/2BNP3/2P1B3/PP3PPP/RN1QK2R b KQkq - 2 7","sideToMove":"black","objective":"Tras ...Cge7, ¿qué jugada completa el esquema blanco?","level":{"label":"Decidir","minRating":null,"maxRating":null,"stage":"decidir"},"whitePlan":"Analizar la respuesta blanca antes de decidir.","blackPlan":"Mejor recurso rival incluido en la solución: Ac4 desarrolla con presión en f7 y deja el rey listo para O-O. 7.Cc2 es posible, pero retira el caballo antes de que sea necesario.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 7.f4?! abre el rey y deja e3 bajo presión. Referencias: ESC-S04; repertorio","manualReference":"ESC-E22 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E23","kind":"exercise","title":"Decidir · Después de 5...bxc6, compare 6.Ad3 y 6.e5.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6"],"fen":"r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 0 6","sideToMove":"white","objective":"Después de 5...bxc6, compare 6.Ad3 y 6.e5.","level":{"label":"Decidir","minRating":null,"maxRating":null,"stage":"decidir"},"whitePlan":"Candidata o respuesta esperada: 6.Ad3","blackPlan":"Mejor recurso rival incluido en la solución: Ad3 desarrolla y conserva la opción de e5 o exd5. 6.e5 expulsa al caballo, pero exige conocer ...De7 y ...Cd5; para el nivel objetivo, el desarrollo primero es más robusto.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 6.Ab5 repite pieza sin impedir ...d5. Referencias: ESC-P05; ESC-S02","manualReference":"ESC-E23 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E24","kind":"exercise","title":"Decidir · Tras 6...d5, compare 7.exd5 y 7.e5.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5"],"fen":"r1bqkb1r/p1p2ppp/2p2n2/3p4/4P3/3B4/PPP2PPP/RNBQK2R w KQkq d6 0 7","sideToMove":"white","objective":"Tras 6...d5, compare 7.exd5 y 7.e5.","level":{"label":"Decidir","minRating":null,"maxRating":null,"stage":"decidir"},"whitePlan":"Candidata o respuesta esperada: 7.exd5","blackPlan":"Mejor recurso rival incluido en la solución: exd5 conduce al peón c6 a d5 y crea un objetivo claro. e5 gana espacio, pero entrega a negras el plan ...Cd7, ...c5 y ...f6.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 7.Cc3?! permite ...dxe4 y cambia la estructura sin decisión propia. Referencias: ESC-P06; ESC-S03","manualReference":"ESC-E24 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E25","kind":"exercise","title":"Decidir · Tras 10...c5, compare 11.b3 y 11.c4.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8","b1d2","c7c5"],"fen":"r1bq1rk1/p3bppp/5n2/2pp4/8/3B4/PPPN1PPP/R1BQR1K1 w - c6 0 11","sideToMove":"white","objective":"Tras 10...c5, compare 11.b3 y 11.c4.","level":{"label":"Decidir","minRating":null,"maxRating":null,"stage":"decidir"},"whitePlan":"Candidata o respuesta esperada: 11.b3","blackPlan":"Mejor recurso rival incluido en la solución: b3 desarrolla Ab2 y controla la casilla de avance d4. c4 fija el centro, pero deja d4 como puesto y puede bloquear al alfil c1.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 11.Cf3? abandona d2 sin resolver ...d4. Referencias: ESC-P10; ESC-M01-P4","manualReference":"ESC-E25 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E26","kind":"exercise","title":"Continuar · Encuentre una secuencia de tres jugadas para completar el desarrollo blanco.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8","b1d2","c7c5"],"fen":"r1bq1rk1/p3bppp/5n2/2pp4/8/3B4/PPPN1PPP/R1BQR1K1 w - c6 0 11","sideToMove":"white","objective":"Encuentre una secuencia de tres jugadas para completar el desarrollo blanco.","level":{"label":"Continuar","minRating":null,"maxRating":null,"stage":"continuar"},"whitePlan":"Candidata o respuesta esperada: 11.b3 Te8 12.Ab2","blackPlan":"Mejor recurso rival incluido en la solución: b3 da una diagonal al alfil; ...Te8 aumenta presión central; Ab2 enfrenta el alfil al peón d4/d5. La secuencia responde al plan negro, no solo mejora piezas.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 11.c4 d4 12.Cf3 permite ...Ad6 con espacio. Referencias: ESC-M01-P4; ESC-P11","manualReference":"ESC-E26 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E27","kind":"exercise","title":"Continuar · El peón negro está en d4. ¿Cómo se bloquea activamente?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8","b1d2","c7c5","b2b3","f8e8","c1b2","c8e6","d1f3","a8c8","a1d1","d5d4","d2c4","e6d5"],"fen":"2rqr1k1/p3bppp/5n2/2pb4/2Np4/1P1B1Q2/PBP2PPP/3RR1K1 w - - 2 16","sideToMove":"white","objective":"El peón negro está en d4. ¿Cómo se bloquea activamente?","level":{"label":"Continuar","minRating":null,"maxRating":null,"stage":"continuar"},"whitePlan":"Candidata o respuesta esperada: 15.Cc4","blackPlan":"Mejor recurso rival incluido en la solución: Cc4 frena d3, ataca d6/e5 y obliga al alfil e6 a decidir. 15.Cf1 deja c4 libre para una pieza negra y no presiona el centro.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 15.c4? fija el peón, pero puede permitir ...Ad6 y ...Ce4 con piezas blancas mal colocadas. Referencias: ESC-M01-P5; ESC-S03","manualReference":"ESC-E27 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E28","kind":"exercise","title":"Continuar · Tras ...Rd8, encuentre la secuencia que pone todas las piezas blancas en juego.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","d8h4","d4b5","h4e4","f1e2","e8d8"],"fen":"r1bk1bnr/pppp1ppp/2n5/1N6/4q3/8/PPP1BPPP/RNBQK2R w KQ - 2 7","sideToMove":"white","objective":"Tras ...Rd8, encuentre la secuencia que pone todas las piezas blancas en juego.","level":{"label":"Continuar","minRating":null,"maxRating":null,"stage":"continuar"},"whitePlan":"Candidata o respuesta esperada: 7.O-O a6 8.C1c3","blackPlan":"Mejor recurso rival incluido en la solución: O-O activa la torre y C1c3 suma presión en d5/c7. Salvar el caballo b5 primero permite a la dama negra reorganizarse.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 7.Ca3?! pierde la ocasión de enrocar con iniciativa. Referencias: ESC-M02-P2","manualReference":"ESC-E28 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E29","kind":"exercise","title":"Continuar · Después de 9...Rxc7, ¿qué jaque mantiene la iniciativa?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","d8h4","d4b5","h4e4","f1e2","e8d8","e1g1","a7a6","b1c3","e4g6","b5c7","d8c7"],"fen":"r1b2bnr/1pkp1ppp/p1n3q1/8/8/2N5/PPP1BPPP/R1BQ1RK1 w - - 0 10","sideToMove":"white","objective":"Después de 9...Rxc7, ¿qué jaque mantiene la iniciativa?","level":{"label":"Continuar","minRating":null,"maxRating":null,"stage":"continuar"},"whitePlan":"Candidata o respuesta esperada: 10.Cd5+","blackPlan":"Mejor recurso rival incluido en la solución: 10.Cd5+ desarrolla el caballo c3 con jaque y obliga al rey a responder. 10.Af4+ también es legal, pero ...d6 corta la diagonal y facilita el desarrollo negro.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 10.Af4+?! no es jaque porque el alfil queda bloqueado por e3/d2. Referencias: ESC-M02-P3","manualReference":"ESC-E29 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E30","kind":"exercise","title":"Continuar · Tras ...f6, ¿cómo refuerza el blanco e5 sin cerrar sus piezas?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8b4","c2c3","b4e7","d4c6","b7c6","f1d3","d7d5","e1g1","g8f6","e4e5","f6d7","f1e1","d7c5","d3c2","e8g8","b1d2","f7f6"],"fen":"r1bq1rk1/p1p1b1pp/2p2p2/2npP3/8/2P5/PPBN1PPP/R1BQR1K1 w - - 0 13","sideToMove":"white","objective":"Tras ...f6, ¿cómo refuerza el blanco e5 sin cerrar sus piezas?","level":{"label":"Continuar","minRating":null,"maxRating":null,"stage":"continuar"},"whitePlan":"Candidata o respuesta esperada: 13.Cf3","blackPlan":"Mejor recurso rival incluido en la solución: Cf3 defiende e5, prepara h3 y permite que la dama siga conectada con el centro. 13.exf6 entrega el espacio antes de obligar a las negras a recapturar con una pieza concreta.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 13.f4?! deja e3 y g1 sensibles. Referencias: ESC-M03-P4; ESC-S06","manualReference":"ESC-E30 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E31","kind":"exercise","title":"Explicar · Explique por qué 3.d4 es coherente aunque el peón vaya a ser capturado.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4"],"fen":"r1bqkbnr/pppp1ppp/2n5/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 4","sideToMove":"white","objective":"Explique por qué 3.d4 es coherente aunque el peón vaya a ser capturado.","level":{"label":"Explicar","minRating":null,"maxRating":null,"stage":"explicar"},"whitePlan":"Candidata o respuesta esperada: Obliga a definir el centro","blackPlan":"Mejor recurso rival incluido en la solución: d4 ataca e5 y abre la columna d. Tras ...exd4 Cxd4, las blancas recuperan el material con una pieza activa y obtienen líneas para los alfiles.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Decir solo «controla el centro» sin mencionar la secuencia de capturas. Referencias: ESC-P03","manualReference":"ESC-E31 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E32","kind":"exercise","title":"Explicar · Explique la finalidad de 5.Cxc6 contra ...Cf6.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6"],"fen":"r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"Explique la finalidad de 5.Cxc6 contra ...Cf6.","level":{"label":"Explicar","minRating":null,"maxRating":null,"stage":"explicar"},"whitePlan":"Candidata o respuesta esperada: Cambiar estructura y eliminar defensor","blackPlan":"Mejor recurso rival incluido en la solución: Cxc6 elimina el caballo que sostiene e5 y obliga ...bxc6. El objetivo no es ganar un peón de inmediato, sino crear c6/d5 como blancos y reducir el control negro de d4.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Afirmar que los peones doblados son siempre débiles. Referencias: ESC-P05; ESC-S02","manualReference":"ESC-E32 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E33","kind":"exercise","title":"Explicar · ¿Por qué ...d5 es la liberación negra más importante?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5"],"fen":"r1bqkb1r/p1p2ppp/2p2n2/3p4/4P3/3B4/PPP2PPP/RNBQK2R w KQkq d6 0 7","sideToMove":"white","objective":"¿Por qué ...d5 es la liberación negra más importante?","level":{"label":"Explicar","minRating":null,"maxRating":null,"stage":"explicar"},"whitePlan":"Candidata o respuesta esperada: Abre el alfil c8 y disputa e4","blackPlan":"Mejor recurso rival incluido en la solución: ...d5 ataca el centro blanco, libera el alfil de c8 y puede transformar c6 en un peón activo en d5. Si negras no logra esa ruptura, c6 queda más fácil de fijar.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Describir ...d5 como simple avance de espacio. Referencias: ESC-P06; ESC-S03","manualReference":"ESC-E33 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E34","kind":"exercise","title":"Explicar · ¿Qué tres funciones cumple 5.c3 ante ...Ab4+?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8b4"],"fen":"r1bqk1nr/pppp1ppp/2n5/8/1b1NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"¿Qué tres funciones cumple 5.c3 ante ...Ab4+?","level":{"label":"Explicar","minRating":null,"maxRating":null,"stage":"explicar"},"whitePlan":"Candidata o respuesta esperada: Bloquea, sostiene d4 y gana espacio","blackPlan":"Mejor recurso rival incluido en la solución: c3 corta la diagonal b4-e1, protege el caballo d4 frente a cambios y obliga al alfil a gastar otro tiempo. Además reserva c2 para el alfil si la estructura lo permite.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Jugar c3 sin notar que limita Cb1-c3. Referencias: ESC-M03-P1","manualReference":"ESC-E34 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E35","kind":"exercise","title":"Explicar · ¿Por qué ...f6 solo es correcta después del enroque?","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8b4","c2c3","b4e7","d4c6","b7c6","f1d3","d7d5","e1g1","g8f6","e4e5","f6d7","f1e1","d7c5","d3c2","e8g8","b1d2","f7f6"],"fen":"r1bq1rk1/p1p1b1pp/2p2p2/2npP3/8/2P5/PPBN1PPP/R1BQR1K1 w - - 0 13","sideToMove":"white","objective":"¿Por qué ...f6 solo es correcta después del enroque?","level":{"label":"Explicar","minRating":null,"maxRating":null,"stage":"explicar"},"whitePlan":"Candidata o respuesta esperada: Abre la columna f con la torre preparada","blackPlan":"Mejor recurso rival incluido en la solución: La captura exf6 permite ...Txf6, activando una torre. Con el rey en e8, abrir f-file podría dejar diagonales y jaques; tras O-O, la torre recaptura y el rey queda detrás de peones.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Jugar ...f6 como reflejo sin comprobar e6/g6. Referencias: ESC-S06; ESC-M03","manualReference":"ESC-E35 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E36","kind":"exercise","title":"Tablero virtual · Desde esta FEN, reproduce el plan estructural de cuatro medias jugadas.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6"],"fen":"r1bqkb1r/p1pp1ppp/2p2n2/8/4P3/8/PPP2PPP/RNBQKB1R w KQkq - 0 6","sideToMove":"white","objective":"Desde esta FEN, reproduce el plan estructural de cuatro medias jugadas.","level":{"label":"Tablero virtual","minRating":null,"maxRating":null,"stage":"tablero virtual"},"whitePlan":"Candidata o respuesta esperada: 6.Ad3 d5 7.exd5 cxd5","blackPlan":"Mejor recurso rival incluido en la solución: La secuencia desarrolla, fuerza la ruptura y crea el peón d5. Después detén el tablero y verbaliza: objetivo blanco d5; contrajuego negro ...c5.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Mover 6.e5 sin estudiar la respuesta ...De7. Referencias: ESC-P05; ESC-P07","manualReference":"ESC-E36 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E37","kind":"exercise","title":"Tablero virtual · Reproduce una continuación segura de la Clásica.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8c5","c1e3","d8f6","c2c3","g8e7"],"fen":"r1b1k2r/ppppnppp/2n2q2/2b5/3NP3/2P1B3/PP3PPP/RN1QKB1R w KQkq - 1 7","sideToMove":"white","objective":"Reproduce una continuación segura de la Clásica.","level":{"label":"Tablero virtual","minRating":null,"maxRating":null,"stage":"tablero virtual"},"whitePlan":"Candidata o respuesta esperada: 7.Ac4 O-O 8.O-O","blackPlan":"Mejor recurso rival incluido en la solución: Ac4 completa el flanco de rey; ...O-O asegura al negro; O-O pone a salvo al blanco. La prioridad común es terminar desarrollo antes de ...d5.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 7.f4?! d5 abre el centro con el rey blanco en e1. Referencias: ESC-S04","manualReference":"ESC-E37 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E38","kind":"exercise","title":"Tablero virtual · La dama negra acaba de capturar e4 con jaque. Reproduce la defensa activa.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","d8h4","d4b5","h4e4","f1e2"],"fen":"r1b1kbnr/pppp1ppp/2n5/1N6/4q3/8/PPP1BPPP/RNBQK2R b KQkq - 1 6","sideToMove":"black","objective":"La dama negra acaba de capturar e4 con jaque. Reproduce la defensa activa.","level":{"label":"Tablero virtual","minRating":null,"maxRating":null,"stage":"tablero virtual"},"whitePlan":"Analizar la respuesta blanca antes de decidir.","blackPlan":"Mejor recurso rival incluido en la solución: Ae2 bloquea desarrollando, el rey negro pierde el enroque y O-O activa la torre. La secuencia muestra por qué el peón e4 no era gratis.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 6.Rd2? bloquea la dama y mantiene el rey expuesto. Referencias: ESC-M02","manualReference":"ESC-E38 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E39","kind":"exercise","title":"Tablero virtual · Desde la cadena e5, reproduce el plan de coordinación blanco.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8b4","c2c3","b4e7","d4c6","b7c6","f1d3","d7d5","e1g1","g8f6","e4e5","f6d7"],"fen":"r1bqk2r/p1pnbppp/2p5/3pP3/8/2PB4/PP3PPP/RNBQ1RK1 w kq - 1 10","sideToMove":"white","objective":"Desde la cadena e5, reproduce el plan de coordinación blanco.","level":{"label":"Tablero virtual","minRating":null,"maxRating":null,"stage":"tablero virtual"},"whitePlan":"Candidata o respuesta esperada: 10.Te1 Cc5 11.Ac2","blackPlan":"Mejor recurso rival incluido en la solución: Te1 sostiene e5; ...Cc5 busca d3/e4; Ac2 conserva el alfil y mantiene la diagonal h7. Después el caballo b1 irá a d2-f3.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: 10.f4?! permite ...d6 y ...f6 con el rey aún vulnerable. Referencias: ESC-M03; ESC-S06","manualReference":"ESC-E39 · Ampliación D","tags":[],"openingId":"escocesa"},{"id":"ESC-E40","kind":"exercise","title":"Revisión global · Construya el repertorio mínimo contra las tres respuestas principales del negro.","chapter":"Ampliación D","movesUci":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6"],"fen":"r1bqkb1r/pppp1ppp/2n2n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 1 5","sideToMove":"white","objective":"Construya el repertorio mínimo contra las tres respuestas principales del negro.","level":{"label":"Revisión global","minRating":null,"maxRating":null,"stage":"revisión global"},"whitePlan":"Candidata o respuesta esperada: ...Cf6: Cxc6; ...Ac5: Ae3; ...Ab4+: c3","blackPlan":"Mejor recurso rival incluido en la solución: Las tres respuestas comparten una lógica: crear una estructura contra ...Cf6, proteger el caballo desarrollando contra ...Ac5 y bloquear con utilidad contra el jaque. Después, enrocar y reconocer ...d5.","teachingContinuation":"Pista: Genera dos candidatas concretas y calcula la mejor respuesta rival. Error típico: Memorizar variantes sin asociarlas a una estructura. Referencias: Repertorio práctico; ESC-S01 a S06","manualReference":"ESC-E40 · Ampliación D","tags":[],"openingId":"escocesa"}];
const games=[{"code":"ESC-M01","title":"ESC-M01","subtitle":"Blancas - repertorio Escocesa — Negras - estructura 4...Cf6","moves":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8","b1d2","c7c5","b2b3","f8e8","c1b2","c8e6","d1f3","a8c8","a1d1","d5d4","d2c4","e6d5","f3g3","e7f8","b2c1","f6e4","d3e4","e8e4","e1e4","d5e4","d1e1"],"san":["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Nf6","Nxc6","bxc6","Bd3","d5","exd5","cxd5","O-O","Be7","Re1","O-O","Nd2","c5","b3","Re8","Bb2","Be6","Qf3","Rc8","Rad1","d4","Nc4","Bd5","Qg3","Bf8","Bc1","Ne4","Bxe4","Rxe4","Rxe4","Bxe4","Re1"],"comments":{"0":"Ocupa e4, abre la diagonal del alfil f1 y reserva d4 como ruptura inmediata.","1":"Responde en el centro y crea una posición simétrica en la que el tiempo de desarrollo será decisivo.","2":"Desarrolla con ataque sobre e5 y aproxima el enroque.","3":"Defiende e5 mientras controla d4, precisamente la casilla que las blancas quieren ocupar.","4":"Rompe antes de mover el alfil: obliga a las negras a aclarar la tensión central.","5":"Captura en d4 para que las blancas gasten un tiempo en recuperar y para eliminar el dúo e4-d4.","6":"El caballo recupera y queda activo en el centro; la dama permanece protegida en d1.","7":"Ataca e4, desarrolla una pieza y prepara ...d5 sin exponer la dama.","8":"Elimina al defensor de e5 y crea una estructura asimétrica que será el tema de la partida.","9":"Recaptura con el peón b: acepta c6-c7 doblados, pero abre la columna b y conserva la pareja de alfiles.","10":"Coloca el alfil en una diagonal útil, vigila h7 y facilita O-O.","11":"Golpea el centro antes de que las blancas terminen el desarrollo; también libera el alfil c8.","12":"Decide la tensión y evita que ...dxe4 gane espacio con tiempo.","13":"El peón c6 recaptura en d5: obtiene espacio y una casilla de apoyo, aunque se convierte en objetivo estable.","14":"Asegura el rey antes de aumentar la presión sobre d5.","15":"Desarrolla el alfil y prepara el enroque; evita que la torre blanca encuentre al rey en e8.","16":"La torre ocupa e1, sostiene e4 y mira al rey negro mientras la columna siga abierta.","17":"Enroca a tiempo. Desde ahora las negras pueden jugar ...c5 sin temer un golpe inmediato contra e8.","18":"Desarrolla la última pieza menor hacia una ruta flexible c4-f3.","19":"Ataca la base del centro y prepara ...d4; no defiende pasivamente el peón d5.","20":"Prepara Ab2, desde donde el alfil presionará d4 y e5.","21":"La torre se coloca frente a e4 y deja f8 libre para reagrupar el alfil.","22":"Activa el alfil largo contra d4 y g7; la jugada da sentido al avance b3.","23":"Desarrolla con tempo estratégico: sostiene d5 y disputa c4.","24":"La dama añade presión sobre d5 y h7 sin quedar expuesta a ...Ag4.","25":"La torre ocupa la columna semiabierta c, preparando ...d4 con apoyo lateral.","26":"Conecta las torres y refuerza d4; la torre a1 encuentra una columna real.","27":"Avanza el peón para ganar espacio y expulsar piezas blancas de las casillas centrales.","28":"El caballo entra en c4, ataca d6/e5 y bloquea el avance del peón.","29":"El alfil se centraliza, protege e4 y obliga a la dama blanca a elegir una casilla estable.","30":"La dama conserva presión sobre c7 y g7, y evita quedar encerrada por ...Ae4.","31":"El alfil retrocede a f8 para sostener g7 y dejar e7 libre a la torre o dama.","32":"El alfil se repliega a c1 para conservarse y preparar Af4 o Ag5; renuncia momentáneamente a presionar d4, que bloquea la diagonal b2-g7.","33":"El caballo salta a e4, usando la casilla creada por el avance ...d4 y atacando g3/c3.","34":"Cambia el caballo central antes de que consolide la presión; el alfil d3 cumple una misión concreta.","35":"La torre recaptura con actividad y penetra en la cuarta fila, amenazando capturas sobre c4.","36":"Elimina la torre invasora y reduce el contrajuego negro.","37":"El alfil recupera en e4, conserva una pieza activa y deja a las negras con pareja de alfiles.","38":"La última torre vuelve a e1, ataca el alfil e4 y mantiene un medio juego equilibrado con planes comprensibles."}},{"code":"ESC-M02","title":"ESC-M02","subtitle":"Blancas - repertorio Escocesa — Negras - 4...Qh4?!","moves":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","d8h4","d4b5","h4e4","f1e2","e8d8","e1g1","a7a6","b1c3","e4g6","b5c7","d8c7","c3d5","c7d8","c1e3","g8f6","e3b6","d8e8","d5c7","e8e7","c7a8","d7d5","f1e1","c8e6","a8c7","e7d7","c7e6","f7e6","c2c4","d5d4","b6d4","c6d4","d1d4"],"san":["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Qh4","Nb5","Qxe4+","Be2","Kd8","O-O","a6","N1c3","Qg6","Nxc7","Kxc7","Nd5+","Kd8","Be3","Nf6","Bb6+","Ke8","Nc7+","Ke7","Nxa8","d5","Re1","Be6","Nc7","Kd7","Nxe6","fxe6","c4","d4","Bxd4","Nxd4","Qxd4+"],"comments":{"0":"Ocupa el centro y abre líneas; en una línea táctica, cada tiempo de desarrollo contará.","1":"Acepta el reto central y mantiene la estructura clásica.","2":"Ataca e5 mientras prepara el enroque.","3":"Defiende e5 y controla d4.","4":"Abre el centro de inmediato para impedir que las negras jueguen un esquema cómodo.","5":"Captura y fuerza al caballo a invertir un segundo movimiento.","6":"Recupera con el caballo y deja la dama protegida.","7":"La dama sale a h4 buscando e4 y un jaque. Parece activa, pero retrasa el desarrollo y deja al rey sin cobertura.","8":"El caballo salta a b5 y amenaza Nxc7+, un tenedor de rey y torre a8. La idea aprovecha el retraso de desarrollo negro.","9":"La dama toma e4 con jaque y gana un peón, pero obliga al rey negro a resolver amenazas sin piezas desarrolladas.","10":"Interpone el alfil, desarrolla y permite enrocar en la jugada siguiente.","11":"El rey va a d8 para defender c7 y neutralizar el tenedor inmediato Nxc7+. A cambio pierde el enroque y ocupa una casilla que dificulta el desarrollo.","12":"Enroca y pone la torre f1 en juego con tempo sobre la columna abierta.","13":"Crea una casilla de escape en a7 y pregunta al caballo b5, aunque sigue sin sacar piezas del flanco de rey.","14":"Desarrolla el segundo caballo y aumenta la presión sobre c7/d5.","15":"La dama se retira a g6 y ataca c2 por la diagonal g6-f5-e4-d3-c2, pero continúa expuesta a jugadas de desarrollo con tiempo.","16":"El caballo captura c7 y ataca la torre a8. No da jaque: el rey de d8 defiende c7 y puede recapturar, aunque quedará expuesto.","17":"El rey recaptura porque perder la torre a8 sería peor; queda expuesto en c7.","18":"El otro caballo entra en d5 con jaque y coordina con el alfil e2.","19":"El rey retrocede a d8; cada desplazamiento sustituye una jugada de desarrollo.","20":"El alfil ocupa e3, controla b6-c5-d4 y prepara un jaque en b6.","21":"Por fin desarrolla el caballo y protege d5/e4, pero la iniciativa blanca ya es concreta.","22":"El alfil da jaque desde b6 y fija al rey en el centro.","23":"El rey vuelve a e8; la torre h8 y el alfil f8 siguen sin jugar.","24":"El caballo salta a c7 con nuevo jaque y ataca a8.","25":"El rey elige e7, evitando d8, pero bloquea el alfil f8 y la dama.","26":"El caballo captura la torre a8. La ganancia material es consecuencia del desarrollo, no de una trampa memorizada.","27":"Juega ...d5 para abrir líneas y tratar de atrapar al caballo a8.","28":"La torre centraliza en e1 y aprovecha la posición del rey.","29":"El alfil sale a e6, desarrolla con ganancia de coordinación, sostiene d5 y limita la presión de la torre sobre la columna e.","30":"El caballo regresa a c7, escapa del borde y ataca el alfil e6, que sostiene el centro negro.","31":"El rey va a d7 para sostener e6 y conectar las piezas restantes.","32":"El caballo captura e6 sin dar jaque: elimina el alfil que sostiene d5 y obliga al peón f a recapturar, debilitando e6 y la cobertura del rey.","33":"El peón f recaptura: repara el material, pero deja e6 débil y el rey sin escudo.","34":"c4 ataca d5 y abre la dama a4-e8; las blancas golpean antes de que negras coordinen.","35":"El peón avanza a d4 buscando espacio y un tempo sobre el alfil e3.","36":"El alfil captura d4 y elimina el peón pasado que sostenía la iniciativa negra.","37":"El caballo c6 recaptura, activándose y atacando e2/c2.","38":"La dama recupera en d4 con jaque; las blancas consolidan la ventaja material y mantienen al rey negro expuesto."}},{"code":"ESC-M03","title":"ESC-M03","subtitle":"Blancas - repertorio Escocesa — Negras - 4...Bb4+","moves":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8b4","c2c3","b4e7","d4c6","b7c6","f1d3","d7d5","e1g1","g8f6","e4e5","f6d7","f1e1","d7c5","d3c2","e8g8","b1d2","f7f6","d2f3","c8g4","h2h3","g4h5","b2b4","c5e6","e5f6","f8f6","d1d3","h5g6","d3e2","e7d6","c2g6","f6g6","c1e3"],"san":["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Bb4+","c3","Be7","Nxc6","bxc6","Bd3","d5","O-O","Nf6","e5","Nd7","Re1","Nc5","Bc2","O-O","Nd2","f6","Nf3","Bg4","h3","Bh5","b4","Ne6","exf6","Rxf6","Qd3","Bg6","Qe2","Bd6","Bxg6","Rxg6","Be3"],"comments":{"0":"Ocupa e4 y prepara el golpe d4.","1":"Contesta de forma simétrica y abre el alfil f8.","2":"Desarrolla con amenaza sobre e5.","3":"Defiende e5 y controla d4.","4":"Rompe el centro antes de elegir la casilla del alfil.","5":"Captura para eliminar el dúo central blanco.","6":"El caballo recupera y ocupa una casilla activa.","7":"El alfil da jaque en b4. Busca obligar c3 y desviar al caballo b1 de su casilla natural.","8":"c3 bloquea el jaque, sostiene d4 y pregunta al alfil dónde será útil.","9":"El alfil vuelve a e7: ha provocado c3, pero ha gastado dos tiempos.","10":"El caballo cambia en c6 para crear una estructura que pueda atacarse en el medio juego.","11":"El peón b recaptura y abre la columna b; las negras aceptan c6-c7 doblados.","12":"El alfil desarrolla a d3, apunta a h7 y prepara el enroque.","13":"La ruptura ...d5 libera el alfil c8 y exige una decisión al peón e4.","14":"El rey queda seguro; las blancas conservan la tensión central.","15":"El caballo desarrolla hacia f6 y ataca e4.","16":"e5 gana espacio, expulsa al caballo y fija la estructura c6-d5.","17":"El caballo retrocede a d7, desde donde prepara ...c5 o ...f6.","18":"La torre llega a e1 para sostener e5 y usar la columna si el centro se abre.","19":"El caballo se activa en c5, atacando d3 y e4.","20":"El alfil se conserva en c2, mantiene la diagonal hacia h7 y evita el cambio en d3.","21":"Las negras enrocan antes de abrir la columna f.","22":"El caballo b1 desarrolla a d2, apoyando f3 y e4.","23":"La ruptura ...f6 ataca la base e5 y busca abrir la torre f8.","24":"El caballo mejora a f3, añade defensa a e5 y prepara saltos g5/e5.","25":"El alfil clava el caballo respecto de la dama y aumenta la presión sobre e2.","26":"h3 pregunta al alfil y evita que la clavada se mantenga sin decisión.","27":"El alfil conserva la diagonal y prepara ...Ag6 tras una captura en f6.","28":"b4 gana espacio y expulsa el caballo c5, pero se juega solo porque el centro está estable.","29":"El caballo vuelve a e6 y apunta a f4/d4/c5.","30":"Las blancas capturan en f6 para abrir la columna y obligar a las negras a definir qué pieza recaptura.","31":"La torre recaptura, gana actividad en f6 y mantiene el peón g intacto.","32":"La dama sale a d3, ataca h7 y coordina con el alfil c2.","33":"El alfil retrocede a g6, corta la diagonal c2-h7 y ataca d3.","34":"La dama va a e2, protege e5 y mantiene la opción de Tad1.","35":"El alfil se coloca en d6, desafía h2 y completa la coordinación.","36":"El alfil cambia en g6 para reducir la actividad de la torre f6.","37":"La torre recaptura y queda activa en g6, pero la pareja de alfiles desaparece.","38":"Ae3 completa el desarrollo y conecta la torre a1. El medio juego gira ahora alrededor de c6, e5 y la columna g."}},{"code":"ESC-M04","title":"4...Ac5 · desarrollo con presión","subtitle":"Las negras atacan d4 y el blanco responde desarrollando con ganancia de tiempo.","moves":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","f8c5","c1e3","d8f6","c2c3","g8e7","f1c4","e8g8","e1g1","c5b6","b1a3","d7d6","a3c2","c6e5","c4e2","d6d5","f2f4","e5c4","e2c4","d5c4"],"san":["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Bc5","Be3","Qf6","c3","Nge7","Bc4","O-O","O-O","Bb6","Na3","d6","Nac2","Ne5","Be2","d5","f4","Nc4","Bxc4","dxc4"],"comments":{"3":"Cc6 controla d4 antes de que la Escocesa abra el centro.","7":"...Ac5 desarrolla atacando el caballo central.","10":"c3 sostiene d4 y prepara un desarrollo estable.","19":"...Ce5 centraliza con presión sobre c4 y d3.","25":"...dxc4 aclara la tensión y crea una nueva estructura."}},{"code":"ESC-M05","title":"Mieses · peones doblados y actividad","subtitle":"La estructura negra parece débil, pero la pareja de alfiles aporta contrajuego.","moves":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","e4e5","d8e7","d1e2","f6d5","c2c4","c8a6","b2b3","g7g6","f2f4","f8g7","e2f2","d5b6","c1a3","d7d6","b1d2","e8g8"],"san":["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Nf6","Nxc6","bxc6","e5","Qe7","Qe2","Nd5","c4","Ba6","b3","g6","f4","Bg7","Qf2","Nb6","Ba3","d6","Nd2","O-O"],"comments":{"3":"Cc6 prepara la respuesta central a d4.","9":"...bxc6 acepta peones doblados a cambio de columna b y pareja de alfiles.","13":"...Cd5 bloquea e5 y ocupa una casilla central.","20":"Df2 protege el centro y prepara el desarrollo del flanco de dama.","25":"El enroque completa la coordinación negra."}},{"code":"ESC-M06","title":"Centro abierto hacia un final","subtitle":"La actividad de piezas pesa más que la apariencia estática de la estructura.","moves":["e2e4","e7e5","g1f3","b8c6","d2d4","e5d4","f3d4","g8f6","d4c6","b7c6","f1d3","d7d5","e4d5","c6d5","e1g1","f8e7","f1e1","e8g8","b1d2","c7c5","d2f3","c8b7","c2c3","f8e8","c1f4","h7h6","f3e5","e7d6"],"san":["e4","e5","Nf3","Nc6","d4","exd4","Nxd4","Nf6","Nxc6","bxc6","Bd3","d5","exd5","cxd5","O-O","Be7","Re1","O-O","Nd2","c5","Nf3","Bb7","c3","Re8","Bf4","h6","Ne5","Bd6"],"comments":{"3":"Cc6 disputa d4 y sostiene e5.","11":"...d5 libera las piezas antes de defender debilidades.","17":"Ambos reyes seguros permiten activar las torres.","23":"...Te8 disputa la columna abierta.","27":"...Ad6 desafía al caballo y prepara cambios hacia el final."}}];
const moveExplanations={"e2e4":"2.Cf3 Cc6 3.d4: desarrollo con amenaza y ruptura inmediata. Error a evitar: 2.Dh5?! expone la dama a ...Cc6 y no desarrolla una pieza.","e7e5":"2.Cf3 Cc6 3.d4: desarrollo con amenaza y ruptura inmediata. Error a evitar: 2.Dh5?! expone la dama a ...Cc6 y no desarrolla una pieza.","g1f3":"3.d4 exd4 4.Cxd4: el caballo recupera con actividad. Error a evitar: 3.Cxe5? permite ...Cxe5 y pierde el caballo tras la secuencia de cambios.","b8c6":"3.d4 exd4 4.Cxd4: el caballo recupera con actividad. Error a evitar: 3.Cxe5? permite ...Cxe5 y pierde el caballo tras la secuencia de cambios.","d2d4":"4.Cxd4 Cf6: conservar la dama y desarrollar con tempo. Error a evitar: 4.Dxd4?! deja la dama vulnerable a ...Cc6 y obliga a gastar tiempos.","e5d4":"4.Cxd4 Cf6: conservar la dama y desarrollar con tempo. Error a evitar: 4.Dxd4?! deja la dama vulnerable a ...Cc6 y obliga a gastar tiempos.","f3d4":"5.Cxc6 bxc6 6.Ad3: crear un objetivo estructural y preparar el enroque. Error a evitar: 5.Cxc6 sin plan posterior y luego e5 prematuro puede dejar al rey en el centro.","g8f6":"5.Cxc6 bxc6 6.Ad3: crear un objetivo estructural y preparar el enroque. Error a evitar: 5.Cxc6 sin plan posterior y luego e5 prematuro puede dejar al rey en el centro.","d4c6":"6.Ad3 d5 7.exd5: obligar a las negras a definir su centro. Error a evitar: 6.f3?! debilita e3 y retrasa el enroque sin resolver el desarrollo.","b7c6":"6.Ad3 d5 7.exd5: obligar a las negras a definir su centro. Error a evitar: 6.f3?! debilita e3 y retrasa el enroque sin resolver el desarrollo.","f1d3":"7.exd5 cxd5 8.O-O: abrir líneas solo después de asegurar el rey. Error a evitar: 7.e5?! cuando ...Cd7 y ...c5 permiten a las negras atacar la cadena.","d7d5":"7.exd5 cxd5 8.O-O: abrir líneas solo después de asegurar el rey. Error a evitar: 7.e5?! cuando ...Cd7 y ...c5 permiten a las negras atacar la cadena.","e4d5":"8.O-O Ae7 9.Te1: la torre ocupa una columna útil. Error a evitar: 8.Ab5+?! busca un jaque decorativo y deja el rey blanco sin enrocar.","c6d5":"8.O-O Ae7 9.Te1: la torre ocupa una columna útil. Error a evitar: 8.Ab5+?! busca un jaque decorativo y deja el rey blanco sin enrocar.","e1g1":"9.Te1 O-O 10.Cd2: completar desarrollo antes de atacar. Error a evitar: 9.c4?! antes de Te1 puede dejar d4 débil y dificultar el desarrollo del caballo.","f8e7":"9.Te1 O-O 10.Cd2: completar desarrollo antes de atacar. Error a evitar: 9.c4?! antes de Te1 puede dejar d4 débil y dificultar el desarrollo del caballo.","f1e1":"10.Cd2 c5 11.b3: preparar Ab2 y reforzar el control de d4/e5. Error a evitar: 10.Cf5?! parece agresivo, pero ...Axf5 y ...c5 neutralizan la presión.","e8g8":"10.Cd2 c5 11.b3: preparar Ab2 y reforzar el control de d4/e5. Error a evitar: 10.Cf5?! parece agresivo, pero ...Axf5 y ...c5 neutralizan la presión.","b1d2":"11.b3 Te8 12.Ab2: enfrentar el alfil al peón d5. Error a evitar: 11.c4?! sin calcular ...d4 concede un puesto fuerte en e4 al caballo negro.","c7c5":"11.b3 Te8 12.Ab2: enfrentar el alfil al peón d5. Error a evitar: 11.c4?! sin calcular ...d4 concede un puesto fuerte en e4 al caballo negro.","b2b3":"12.Ab2 Ae6 13.Df3: sumar presión sin exponer la dama a un tempo fácil. Error a evitar: 12.c4?! puede abrir la diagonal negra hacia e4 si el caballo blanco sigue descoordinado.","f8e8":"12.Ab2 Ae6 13.Df3: sumar presión sin exponer la dama a un tempo fácil. Error a evitar: 12.c4?! puede abrir la diagonal negra hacia e4 si el caballo blanco sigue descoordinado.","c1b2":"13.Df3 Tc8 14.Tad1: coordinar torres y responder a ...d4 con Cc4. Error a evitar: 13.Dg4?! se expone a ...Axg4 o ...Cxg4 según la táctica; la presión debe construirse, no anunciarse.","c8e6":"13.Df3 Tc8 14.Tad1: coordinar torres y responder a ...d4 con Cc4. Error a evitar: 13.Dg4?! se expone a ...Axg4 o ...Cxg4 según la táctica; la presión debe construirse, no anunciarse."};
const lessonMoveContexts={"ESC-P01":"Jugar Cf3, d4 y recuperar con Cxd4, manteniendo piezas activas. Desarrollar Cc6 y contestar d4 con ...exd4 para evitar que las blancas mantengan dos peones centrales.","ESC-P02":"Abrir el centro con d4 antes de mover peones laterales. Aceptar la ruptura con ...exd4 y desarrollar ...Cf6 o ...Ac5.","ESC-P03":"Recuperar con Cxd4; evitar 4.Dxd4, que permite ...Cxd4 con ganancia de tiempo en muchas desviaciones. Atacar e4 con ...Cf6 o presionar el caballo d4 con ...Ac5.","ESC-P04":"Responder a ...Cf6 con Cxc6 para alterar la estructura y después desarrollar Ad3. Tras Cxc6, recapturar ...bxc6 para conservar la pareja de alfiles y preparar ...d5.","ESC-P05":"Desarrollar Ad3, enrocar y decidir si conviene e5 o exd5 según la preparación negra. Jugar ...d5 con apoyo, desarrollar ...Ae7 y enrocar antes de usar la columna b.","ESC-P06":"Calcular exd5; si las negras recapturan con el peón c, atacar d5 con Cc3, Te1 y Df3. Si exd5, recapturar ...cxd5 para activar la torre c8 y sostener un centro móvil.","ESC-P07":"Enrocar, colocar una torre en e1 y desarrollar el caballo b1 sin bloquear el alfil c1. Desarrollar ...Ae7 y enrocar; luego ...c5 para fijar el peón d5 o empujarlo a d4.","ESC-P08":"Jugar Te1 y Cd2; no iniciar un ataque en h7 mientras el caballo b1 siga en casa. Enrocar y jugar ...c5; evitar ...d4 si deja e4 o c4 sin control.","ESC-P09":"Desarrollar Cd2, b3 y Ab2; presionar d5 con Df3 o c4 cuando sea seguro. Activar ...c5 y ...Te8; buscar ...d4 cuando el caballo blanco no pueda ocupar c4.","ESC-P10":"Responder a ...c5 con desarrollo: b3, Ab2 y Df3; reservar c4 para cuando no debilite d4. Completar ...Te8 y ...Ae6; presionar e2/e1 si la torre blanca queda expuesta.","ESC-P11":"Completar Ab2 y Df3; si ...d4, buscar Cc4 y una presión sobre la diagonal a1-h8. Jugar ...Ae6, ...Tc8 y ...d4; la pareja de alfiles necesita líneas, no defensa pasiva.","ESC-P12":"Comparar Df3, c4 y Cf3-e5; elegir según la amenaza ...d4 y la colocación de las piezas negras. Preparar ...Tc8 y ...d4; si las blancas juegan c4, valorar ...d4 y la casilla e4 para el caballo."};
function lessonMoveExplanation(lesson,move){return [moveExplanations[move]||lesson.explanation,lessonMoveContexts[lesson.code]].filter(Boolean).join(" ");}
const state = {
  completed: new Set(JSON.parse(localStorage.getItem("escocesa-progress") || "[]")),
  lesson: 0, lessonPly: 0, challenge: 0, selected: null, streak: 0,
  variant: 0, variantPly: 0, variantFlipped: false,
  variantReviews: JSON.parse(localStorage.getItem("escocesa-variant-reviews") || "{}"),
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
        use.setAttribute("href", `assets/chess-pieces-modern.svg#piece-${board[squareName].toUpperCase()}`);
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
  localStorage.setItem("escocesa-progress", JSON.stringify([...state.completed]));
}

function renderLessonList() {
  const list = document.getElementById("lessonList");
  list.innerHTML = "";
  lessons.forEach((lesson, i) => {
    const button = document.createElement("button");
    button.className = `lesson-list-button ${i === state.lesson ? "active" : ""} ${state.completed.has(lesson.code) ? "done" : ""}`;
    button.innerHTML = `<span class="dot"></span><span>${lesson.code.replace("ESC-","")}</span><span class="lesson-name">${lesson.title}</span>`;
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
  localStorage.setItem("escocesa-variant-reviews", JSON.stringify(state.variantReviews));
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
    button.innerHTML = `${i%2===0 ? `<span class="move-num">${Math.floor(i/2)+1}.</span>` : ""}${san}`;
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
