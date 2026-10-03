import { MillionaireQuestion } from './types';

export const PRIZE_LADDER = [
  500,
  1000,
  2000,
  3000,
  5000,
  10000,
  15000,
  25000,
  50000,
  75000,
  100000,
  150000,
  250000,
  500000,
  1000000
];

export const MILLIONAIRE_QUESTIONS: MillionaireQuestion[] = [
  {
    id: 1,
    originalNumber: 1,
    prizeAmount: 500,
    questionEs: 'Recibes un mensaje importante mientras estás conduciendo. ¿Qué haces?',
    questionAm: 'Մեքենա վարելիս կարևոր հաղորդագրություն ես ստանում։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Respondo inmediatamente.', textAm: 'Անմիջապես պատասխանում եմ։' },
      { key: 'b', textEs: 'Paro en un lugar seguro y después respondo.', textAm: 'Կանգնում եմ անվտանգ վայրում և հետո պատասխանում։' },
      { key: 'c', textEs: 'Escribo mientras conduzco.', textAm: 'Գրում եմ մեքենա վարելիս։' },
      { key: 'd', textEs: 'Miro el móvil cada minuto.', textAm: 'Ամեն րոպե նայում եմ հեռախոսին։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'La seguridad vial es prioritaria: siempre hay que detenerse en una zona segura antes de responder al teléfono.',
    explanationAm: 'Ճանապարհային անվտանգությունը առաջնային է․ հեռախոսին պատասխանելուց առաջ միշտ պետք է կանգ առնել անվտանգ տեղում։'
  },
  {
    id: 2,
    originalNumber: 2,
    prizeAmount: 1000,
    questionEs: 'Una persona desconocida te pide tu contraseña por Internet. ¿Qué haces?',
    questionAm: 'Անծանոթ մարդը համացանցով խնդրում է քո գաղտնաբառը։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Se la envío.', textAm: 'Ուղարկում եմ նրան։' },
      { key: 'b', textEs: 'Le doy solo una parte.', textAm: 'Տալիս եմ միայն մի մասը։' },
      { key: 'c', textEs: 'No comparto mi contraseña.', textAm: 'Չեմ հայտնում իմ գաղտնաբառը։' },
      { key: 'd', textEs: 'La publico en el chat.', textAm: 'Հրապարակում եմ չաթում։' }
    ],
    correctAnswer: 'c',
    explanationEs: 'Las contraseñas son estrictamente personales y confidenciales; nunca se deben compartir con desconocidos.',
    explanationAm: 'Գաղտնաբառերը խիստ անձնական են և գաղտնի․ երբեք չպետք է դրանք կիսել անծանոթների հետ։'
  },
  {
    id: 3,
    originalNumber: 3,
    prizeAmount: 2000,
    questionEs: 'Ves una noticia sorprendente en una red social. ¿Qué haces antes de compartirla?',
    questionAm: 'Սոցիալական ցանցում զարմանալի լուր ես տեսնում։ Ի՞նչ ես անում այն տարածելուց առաջ։',
    options: [
      { key: 'a', textEs: 'La comparto sin leerla.', textAm: 'Տարածում եմ առանց կարդալու։' },
      { key: 'b', textEs: 'Compruebo la fuente y la información.', textAm: 'Ստուգում եմ աղբյուրը և տեղեկությունը։' },
      { key: 'c', textEs: 'Cambio el título.', textAm: 'Փոխում եմ վերնագիրը։' },
      { key: 'd', textEs: 'Se la envío a todo el mundo.', textAm: 'Ուղարկում եմ բոլորին։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'Para evitar desinformación y noticias falsas, es fundamental verificar las fuentes fiables antes de difundir.',
    explanationAm: 'Ապատեղեկատվությունից և կեղծ լուրերից խուսափելու համար անհրաժեշտ է ստուգել հավաստի աղբյուրները։'
  },
  {
    id: 4,
    originalNumber: 4,
    prizeAmount: 3000,
    questionEs: 'Llevas dos horas mirando el móvil y tienes trabajo pendiente. ¿Qué haces?',
    questionAm: 'Երկու ժամ է՝ հեռախոսին ես նայում, իսկ աշխատանք ունես անելու։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Sigo otra hora.', textAm: 'Շարունակում եմ ևս մեկ ժամ։' },
      { key: 'b', textEs: 'Apago algunas notificaciones y empiezo a trabajar.', textAm: 'Անջատում եմ որոշ ծանուցումներ և սկսում աշխատել։' },
      { key: 'c', textEs: 'Abro otra red social.', textAm: 'Բացում եմ մեկ այլ սոցիալական ցանց։' },
      { key: 'd', textEs: 'Dejo todo para mañana.', textAm: 'Ամեն ինչ թողնում եմ վաղվան։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'Desactivar distractores digitales ayuda a recuperar el foco y la productividad sin postergar las obligaciones.',
    explanationAm: 'Ծանուցումների անջատումը օգնում է վերականգնել կենտրոնացումը և արտադրողականությունը։'
  },
  {
    id: 5,
    originalNumber: 7,
    prizeAmount: 5000,
    questionEs: 'Tienes una reunión importante y el móvil no deja de sonar. ¿Qué haces?',
    questionAm: 'Կարևոր հանդիպում ունես, իսկ հեռախոսդ անընդհատ զանգում է։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Lo dejo sonar.', textAm: 'Թողնում եմ, որ զանգի։' },
      { key: 'b', textEs: 'Activo el modo silencio.', textAm: 'Միացնում եմ անձայն ռեժիմը։' },
      { key: 'c', textEs: 'Respondo a todos los mensajes.', textAm: 'Պատասխանում եմ բոլոր հաղորդագրություններին։' },
      { key: 'd', textEs: 'Interrumpo la reunión.', textAm: 'Ընդհատում եմ հանդիպումը։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'Por respeto a los asistentes de la reunión, se silencia el dispositivo para mantener la profesionalidad.',
    explanationAm: 'Հանդիպման մասնակիցների հանդեպ հարգանքից ելնելով՝ սարքը դրվում է անձայն ռեժիմի։'
  },
  {
    id: 6,
    originalNumber: 8,
    prizeAmount: 10000,
    questionEs: 'Una aplicación te pide acceso a todos tus contactos sin una razón clara. ¿Qué haces?',
    questionAm: 'Հավելվածը առանց հստակ պատճառի խնդրում է մուտք քո բոլոր կոնտակտներին։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Acepto todo.', textAm: 'Ամեն ինչ թույլատրում եմ։' },
      { key: 'b', textEs: 'Reviso los permisos antes de aceptarlos.', textAm: 'Ստուգում եմ թույլտվությունները նախքան համաձայնվելը։' },
      { key: 'c', textEs: 'Le doy también mi contraseña.', textAm: 'Տալիս եմ նաև գաղտնաբառս։' },
      { key: 'd', textEs: 'No leo nada.', textAm: 'Ոչինչ չեմ կարդում։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'Proteger la privacidad propia y de nuestros conocidos exige revisar qué permisos realmente necesita la aplicación.',
    explanationAm: 'Սեփական և մտերիմների անձնական տվյալների պաշտպանությունը պահանջում է թույլտվությունների ստուգում։'
  },
  {
    id: 7,
    originalNumber: 9,
    prizeAmount: 15000,
    questionEs: 'Tu compañero no entiende una tarea. ¿Qué haces?',
    questionAm: 'Գործընկերդ չի հասկանում առաջադրանքը։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Me río de él.', textAm: 'Ծիծաղում եմ նրա վրա։' },
      { key: 'b', textEs: 'Se lo explico con calma.', textAm: 'Հանգիստ բացատրում եմ նրան։' },
      { key: 'c', textEs: 'Le digo que es su problema.', textAm: 'Ասում եմ, որ դա իր խնդիրն է։' },
      { key: 'd', textEs: 'Ignoro su pregunta.', textAm: 'Անտեսում եմ հարցը։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'El trabajo en equipo y la empatía consisten en ayudar a los compañeros a comprender los objetivos comunes.',
    explanationAm: 'Թիմային աշխատանքն ու կարեկցանքը ենթադրում են հանգիստ աջակցություն ընդհանուր նպատակներին հասնելու համար։'
  },
  {
    id: 8,
    originalNumber: 10,
    prizeAmount: 25000,
    questionEs: 'Llegas tarde a una cita. ¿Qué haces?',
    questionAm: 'Հանդիպումից ուշանում ես։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'No digo nada.', textAm: 'Ոչինչ չեմ ասում։' },
      { key: 'b', textEs: 'Aviso y pido disculpas.', textAm: 'Տեղեկացնում եմ և ներողություն խնդրում։' },
      { key: 'c', textEs: 'Apago el teléfono.', textAm: 'Անջատում եմ հեռախոսը։' },
      { key: 'd', textEs: 'Culpo a la otra persona.', textAm: 'Մեղադրում եմ մյուսին։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'La cortesía básica exige comunicar los retrasos con antelación y pedir disculpas sinceras.',
    explanationAm: 'Տարրական քաղաքավարությունը պահանջում է նախապես տեղեկացնել ուշացման մասին և ներողություն խնդրել։'
  },
  {
    id: 9,
    originalNumber: 11,
    prizeAmount: 50000,
    questionEs: 'No estás de acuerdo con la opinión de un compañero. ¿Qué haces?',
    questionAm: 'Համաձայն չես գործընկերոջդ կարծիքի հետ։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Lo interrumpo constantemente.', textAm: 'Անընդհատ ընդհատում եմ նրան։' },
      { key: 'b', textEs: 'Escucho su opinión y explico la mía con respeto.', textAm: 'Լսում եմ նրա կարծիքը և հարգալից բացատրում իմը։' },
      { key: 'c', textEs: 'Me enfado inmediatamente.', textAm: 'Անմիջապես զայրանում եմ։' },
      { key: 'd', textEs: 'Me voy sin hablar.', textAm: 'Առանց խոսելու հեռանում եմ։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'La comunicación asertiva se basa en la escucha activa y la exposición respetuosa de argumentos.',
    explanationAm: 'Արդյունավետ շփման հիմքը ակտիվ լսելն ու սեփական տեսակետը հարգանքով ներկայացնելն է։'
  },
  {
    id: 10,
    originalNumber: 16,
    prizeAmount: 75000,
    questionEs: 'Alguien te explica algo que ya sabes. ¿Qué haces?',
    questionAm: 'Ինչ-որ մեկը քեզ բացատրում է մի բան, որը դու արդեն գիտես։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Le digo bruscamente que se calle.', textAm: 'Կոպիտ ասում եմ՝ լռի։' },
      { key: 'b', textEs: 'Escucho y respondo con educación.', textAm: 'Լսում եմ և քաղաքավարի պատասխանում։' },
      { key: 'c', textEs: 'Me río.', textAm: 'Ծիծաղում եմ։' },
      { key: 'd', textEs: 'Me voy inmediatamente.', textAm: 'Անմիջապես հեռանում եմ։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'Responder con tacto y educación evita hacer sentir incómoda a la otra persona.',
    explanationAm: 'Քաղաքավարի արձագանքը թույլ է տալիս պահպանել ջերմ և հաճելի մթնոլորտը։'
  },
  {
    id: 11,
    originalNumber: 17,
    prizeAmount: 100000,
    questionEs: 'Tienes que tomar una decisión importante. ¿Qué haces?',
    questionAm: 'Կարևոր որոշում պետք է կայացնես։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Decido sin pensar.', textAm: 'Որոշում եմ առանց մտածելու։' },
      { key: 'b', textEs: 'Analizo las ventajas y los inconvenientes.', textAm: 'Վերլուծում եմ առավելություններն ու թերությունները։' },
      { key: 'c', textEs: 'Hago lo primero que me dicen.', textAm: 'Անում եմ առաջին ասվածը։' },
      { key: 'd', textEs: 'Evito decidir para siempre.', textAm: 'Ընդմիշտ խուսափում եմ որոշումից։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'El pensamiento crítico y la toma de decisiones madura requieren ponderar pros y contras.',
    explanationAm: 'Հասուն որոշումներ կայացնելու համար անհրաժեշտ է կշռադատել դրական և բացասական կողմերը։'
  },
  {
    id: 12,
    originalNumber: 18,
    prizeAmount: 150000,
    questionEs: 'Tu amigo está hablando y tú recibes muchos mensajes. ¿Qué haces?',
    questionAm: 'Ընկերդ խոսում է, իսկ դու շատ հաղորդագրություններ ես ստանում։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Miro el móvil todo el tiempo.', textAm: 'Ամբողջ ժամանակ նայում եմ հեռախոսին։' },
      { key: 'b', textEs: 'Guardo el móvil y presto atención a mi amigo.', textAm: 'Հեռախոսը մի կողմ եմ դնում և ուշադրություն եմ դարձնում ընկերոջս։' },
      { key: 'c', textEs: 'Le digo que espere.', textAm: 'Ասում եմ՝ սպասի։' },
      { key: 'd', textEs: 'Respondo mensajes mientras habla.', textAm: 'Պատասխանում եմ հաղորդագրություններին, մինչ նա խոսում է։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'Estar presente en la conversación cara a cara demuestra respeto y aprecio hacia la otra persona.',
    explanationAm: 'Անմիջական շփման մեջ ներկա լինելը ցույց է տալիս հարգանք և ուշադրություն ընկերոջ հանդեպ։'
  },
  {
    id: 13,
    originalNumber: 21,
    prizeAmount: 250000,
    questionEs: 'Un amigo cancela una cita por un problema familiar. ¿Qué haces?',
    questionAm: 'Ընկերդ ընտանեկան խնդրի պատճառով չեղարկում է հանդիպումը։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Me enfado inmediatamente.', textAm: 'Անմիջապես զայրանում եմ։' },
      { key: 'b', textEs: 'Muestro comprensión y proponemos otro día.', textAm: 'Ըմբռնումով եմ մոտենում և ուրիշ օր ենք առաջարկում։' },
      { key: 'c', textEs: 'No vuelvo a hablarle.', textAm: 'Այլևս չեմ խոսում նրա հետ։' },
      { key: 'd', textEs: 'Lo critico en Internet.', textAm: 'Քննադատում եմ նրան համացանցում։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'La empatía ante imprevistos familiares fortalece las relaciones personales duraderas.',
    explanationAm: 'Ընտանեկան անկանխատեսելի հանգամանքների հանդեպ ըմբռնումը ամրապնդում է մարդկային հարաբերությունները։'
  },
  {
    id: 14,
    originalNumber: 22,
    prizeAmount: 500000,
    questionEs: 'Te das cuenta de que has enviado un mensaje a la persona equivocada. ¿Qué haces?',
    questionAm: 'Հասկանում ես, որ հաղորդագրությունը սխալ մարդու ես ուղարկել։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Lo ignoro.', textAm: 'Անտեսում եմ։' },
      { key: 'b', textEs: 'Explico el error y pido disculpas.', textAm: 'Բացատրում եմ սխալը և ներողություն խնդրում։' },
      { key: 'c', textEs: 'Culpo al teléfono.', textAm: 'Մեղադրում եմ հեռախոսը։' },
      { key: 'd', textEs: 'Envío más mensajes.', textAm: 'Ավելի շատ հաղորդագրություններ եմ ուղարկում։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'Aclarar la confusión con cortesía y rapidez resuelve malentendidos al instante.',
    explanationAm: 'Սխալն արագ ու քաղաքավարի բացատրելը կանխում է ցանկացած թյուրիմացություն։'
  },
  {
    id: 15,
    originalNumber: 23,
    prizeAmount: 600000,
    questionEs: 'Ves que un compañero está siendo tratado injustamente. ¿Qué haces?',
    questionAm: 'Տեսնում ես, որ գործընկերոջդ հետ անարդար են վարվում։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Me río.', textAm: 'Ծիծաղում եմ։' },
      { key: 'b', textEs: 'Intento apoyarlo de manera adecuada.', textAm: 'Փորձում եմ պատշաճ ձևով աջակցել նրան։' },
      { key: 'c', textEs: 'Grabo un vídeo para divertirme.', textAm: 'Զվարճանալու համար տեսանյութ եմ նկարում։' },
      { key: 'd', textEs: 'Empiezo a criticarlo también.', textAm: 'Ես էլ եմ սկսում նրան քննադատել։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'La solidaridad y la justicia en el entorno de estudio o trabajo exigen prestar apoyo constructivo.',
    explanationAm: 'Ուսումնական կամ աշխատանքային միջավայրում համերաշխությունն ու արդարությունը պահանջում են աջակցել ընկերոջը։'
  },
  {
    id: 16,
    originalNumber: 24,
    prizeAmount: 700000,
    questionEs: 'Recibes un correo que parece sospechoso y contiene un enlace. ¿Qué haces?',
    questionAm: 'Կասկածելի նամակ ես ստանում, որի մեջ հղում կա։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Abro el enlace inmediatamente.', textAm: 'Անմիջապես բացում եմ հղումը։' },
      { key: 'b', textEs: 'Compruebo el remitente y no abro enlaces sospechosos.', textAm: 'Ստուգում եմ ուղարկողին և կասկածելի հղումներ չեմ բացում։' },
      { key: 'c', textEs: 'Envío mi contraseña.', textAm: 'Ուղարկում եմ գաղտնաբառս։' },
      { key: 'd', textEs: 'Reenvío el correo a todos.', textAm: 'Նամակն ուղարկում եմ բոլորին։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'La prevención del phishing cibernético consiste en no abrir enlaces no verificados ni proporcionar credenciales.',
    explanationAm: 'Կիբեռանվտանգության և ֆիշինգի դեմ պայքարի հիմնական կանոնն է չբացել կասկածելի հղումները։'
  },
  {
    id: 17,
    originalNumber: 25,
    prizeAmount: 800000,
    questionEs: 'Estás cansado y tienes que estudiar. ¿Qué haces?',
    questionAm: 'Հոգնած ես, բայց պետք է սովորես։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Estudio toda la noche sin descansar.', textAm: 'Ամբողջ գիշեր սովորում եմ առանց հանգստանալու։' },
      { key: 'b', textEs: 'Organizo el tiempo y hago una pausa razonable.', textAm: 'Կազմակերպում եմ ժամանակս և նորմալ դադար եմ անում։' },
      { key: 'c', textEs: 'No estudio nunca.', textAm: 'Ընդհանրապես չեմ սովորում։' },
      { key: 'd', textEs: 'Paso cinco horas viendo vídeos.', textAm: 'Հինգ ժամ տեսանյութ եմ դիտում։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'Un descanso estratégico y una gestión consciente del tiempo mejoran la retención cerebral mucho más que el agotamiento.',
    explanationAm: 'Ժամանակի ճիշտ կառավարումն ու հանգիստը բարելավում են հիշողությունն ու ուսման արդյունավետությունը։'
  },
  {
    id: 18,
    originalNumber: 30,
    prizeAmount: 900000,
    questionEs: 'Tienes que elegir entre dos opciones importantes. ¿Cuál es la mejor estrategia?',
    questionAm: 'Պետք է ընտրես երկու կարևոր տարբերակների միջև։ Ո՞րն է լավագույն մոտեցումը։',
    options: [
      { key: 'a', textEs: 'Elegir al azar.', textAm: 'Պատահական ընտրել։' },
      { key: 'b', textEs: 'Comparar las consecuencias, ventajas y riesgos de cada opción.', textAm: 'Համեմատել յուրաքանչյուր տարբերակի հետևանքները, առավելություններն ու ռիսկերը։' },
      { key: 'c', textEs: 'Elegir siempre la opción más cara.', textAm: 'Միշտ ընտրել ամենաթանկ տարբերակը։' },
      { key: 'd', textEs: 'Dejar que otra persona decida todo.', textAm: 'Թողնել, որ ուրիշը ամեն ինչ որոշի։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'La evaluación multidimensional de riesgos y consecuencias proporciona claridad objetiva para decidir.',
    explanationAm: 'Ռիսկերի, հետևանքների և առավելությունների բազմակողմանի վերլուծությունն ապահովում է ճիշտ որոշում։'
  },
  {
    id: 19,
    originalNumber: 31,
    prizeAmount: 1000000,
    questionEs: 'Estás en una biblioteca y recibes una llamada. ¿Qué haces?',
    questionAm: 'Գրադարանում ես և զանգ ես ստանում։ Ի՞նչ ես անում։',
    options: [
      { key: 'a', textEs: 'Hablo muy alto.', textAm: 'Շատ բարձր եմ խոսում։' },
      { key: 'b', textEs: 'Salgo o pongo el móvil en silencio.', textAm: 'Դուրս եմ գալիս կամ հեռախոսը դնում եմ անձայն ռեժիմի։' },
      { key: 'c', textEs: 'Pongo música.', textAm: 'Երաժշտություն եմ միացնում։' },
      { key: 'd', textEs: 'Dejo sonar el teléfono.', textAm: 'Թողնում եմ, որ հեռախոսը շարունակի զանգել։' }
    ],
    correctAnswer: 'b',
    explanationEs: 'En las bibliotecas rige la regla del silencio para permitir la concentración y el estudio de todos.',
    explanationAm: 'Գրադարանում գործում է լռության կանոնը՝ բոլորի համար հանգիստ ուսումնական միջավայր ապահովելու նպատակով։'
  }
];
