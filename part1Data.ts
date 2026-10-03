import {
  ConectorItem,
  QuienDijoItem,
  ContinuaFraseItem,
  CambiaConectorItem,
  GramaticaItem,
  VerdaderoFalsoItem,
  ProfesorProvocaItem,
  DebateItem,
  CompletaItem,
  RetoC1Data,
} from './types';

export const JUEGO1_CONECTORES: ConectorItem[] = [
  {
    id: 'c1',
    categoryEs: 'Contraste — Contraste',
    categoryAm: 'Հակադրություն',
    questionEs: '¿Cuál es el conector de contraste?',
    questionAm: 'Ո՞ր կապակցիչն է ցույց տալիս հակադրություն։',
    answerEs: 'Sin embargo',
    answerAm: 'սակայն / այնուամենայնիվ',
    distractors: ['Por eso', 'Además', 'Con tal de que']
  },
  {
    id: 'c2',
    categoryEs: 'Consecuencia',
    categoryAm: 'Հետևանք',
    questionEs: '¿Cuál es el conector de consecuencia?',
    questionAm: 'Ո՞ր կապակցիչն է ցույց տալիս հետևանք։',
    answerEs: 'Por eso',
    answerAm: 'դրա համար / այդ պատճառով',
    distractors: ['Sin embargo', 'Además', 'En definitiva']
  },
  {
    id: 'c3',
    categoryEs: 'Añadir información',
    categoryAm: 'Լրացուցիչ տեղեկություն ավելացնել',
    questionEs: '¿Cuál es el conector para añadir información?',
    questionAm: 'Ո՞ր կապակցիչն է ավելացնում տեղեկություն։',
    answerEs: 'Además',
    answerAm: 'բացի այդ',
    distractors: ['De ahí que', 'Aun así', 'Por eso']
  },
  {
    id: 'c4',
    categoryEs: 'Condición',
    categoryAm: 'Պայման',
    questionEs: '¿Cuál es el conector de condición?',
    questionAm: 'Ո՞ր կապակցիչն է ցույց տալիս պայման։',
    answerEs: 'Con tal de que',
    answerAm: 'պայմանով, որ',
    distractors: ['En definitiva', 'No obstante', 'Por lo tanto']
  },
  {
    id: 'c5',
    categoryEs: 'Conclusión',
    categoryAm: 'Եզրակացություն',
    questionEs: '¿Cuál es el conector de conclusión?',
    questionAm: 'Ո՞ր կապակցիչն է ցույց տալիս եզրակացություն։',
    answerEs: 'En definitiva',
    answerAm: 'ի վերջո / ընդհանուր առմամբ',
    distractors: ['Siempre que', 'Sin embargo', 'Para que']
  },
  {
    id: 'c6',
    categoryEs: 'Consecuencia + Subjuntivo',
    categoryAm: 'Հետևանք + Subjuntivo',
    questionEs: '¿Cuál es el conector de consecuencia que exige Subjuntivo?',
    questionAm: 'Ո՞ր հետևանքի կապակցիչն է պահանջում Subjuntivo։',
    answerEs: 'De ahí que',
    answerAm: 'այստեղից էլ այն, որ / դրա հետևանքով',
    distractors: ['Por eso', 'Además', 'Aunque']
  }
];

export const JUEGO2_QUIEN_DIJO: QuienDijoItem[] = [
  {
    id: 1,
    questionEs: '¿Quién intenta usar menos las redes sociales?',
    questionAm: 'Ո՞վ է փորձում ավելի քիչ օգտվել սոցիալական ցանցերից։',
    options: [
      { key: 'a', textEs: 'Diego', textAm: 'Դիեգոն' },
      { key: 'b', textEs: 'Laura', textAm: 'Լաուրան' },
      { key: 'c', textEs: 'Los dos', textAm: 'Երկուսն էլ' },
      { key: 'd', textEs: 'Ninguno', textAm: 'Ոչ մեկը' }
    ],
    correct: 'b'
  },
  {
    id: 2,
    questionEs: '¿Quién utiliza las redes sociales también para trabajar?',
    questionAm: 'Ո՞վ է սոցիալական ցանցերն օգտագործում նաև աշխատանքի համար։',
    options: [
      { key: 'a', textEs: 'Laura', textAm: 'Լաուրան' },
      { key: 'b', textEs: 'Diego', textAm: 'Դիեգոն' },
      { key: 'c', textEs: 'Ambos', textAm: 'Երկուսն էլ' },
      { key: 'd', textEs: 'No se dice', textAm: 'Տեքստում չի նշվում' }
    ],
    correct: 'b'
  },
  {
    id: 3,
    questionEs: '¿Quién decide no mirar el móvil durante la primera hora del día?',
    questionAm: 'Ո՞վ է որոշել օրվա առաջին ժամին չնայել հեռախոսին։',
    options: [
      { key: 'a', textEs: 'Laura', textAm: 'Լաուրան' },
      { key: 'b', textEs: 'Diego', textAm: 'Դիեգոն' },
      { key: 'c', textEs: 'Ambos', textAm: 'Երկուսն էլ' },
      { key: 'd', textEs: 'Ninguno', textAm: 'Ոչ մեկը' }
    ],
    correct: 'a'
  },
  {
    id: 4,
    questionEs: '¿Quién cree que el problema depende de cómo usamos las redes?',
    questionAm: 'Ո՞վ է կարծում, որ խնդիրը կախված է նրանից, թե ինչպես ենք օգտագործում սոցիալական ցանցերը։',
    options: [
      { key: 'a', textEs: 'Laura', textAm: 'Լաուրան' },
      { key: 'b', textEs: 'Diego', textAm: 'Դիեգոն' },
      { key: 'c', textEs: 'Ninguno', textAm: 'Ոչ մեկը' },
      { key: 'd', textEs: 'El profesor', textAm: 'Ուսուցիչը' }
    ],
    correct: 'b'
  }
];

export const JUEGO3_CONTINUA: ContinuaFraseItem[] = [
  {
    id: 1,
    connector: 'Aunque',
    phraseEs: 'Aunque las redes sociales son útiles, pueden hacernos perder mucho tiempo.',
    phraseAm: 'Թեև սոցիալական ցանցերն օգտակար են, դրանք կարող են մեզնից շատ ժամանակ խլել։'
  },
  {
    id: 2,
    connector: 'Sin embargo',
    phraseEs: 'Sin embargo, no creo que debamos eliminarlas completamente.',
    phraseAm: 'Այնուամենայնիվ, չեմ կարծում, որ պետք է դրանք ամբողջությամբ ջնջենք։'
  },
  {
    id: 3,
    connector: 'Además',
    phraseEs: 'Además, nos permiten mantener el contacto con personas que viven lejos.',
    phraseAm: 'Բացի այդ, դրանք մեզ հնարավորություն են տալիս կապ պահպանել հեռու ապրող մարդկանց հետ։'
  },
  {
    id: 4,
    connector: 'Aun así',
    phraseEs: 'Aun así, debemos aprender a controlar el tiempo que pasamos con el móvil.',
    phraseAm: 'Նույնիսկ այդ դեպքում, մենք պետք է սովորենք վերահսկել հեռախոսով անցկացրած ժամանակը։'
  },
  {
    id: 5,
    connector: 'En definitiva',
    phraseEs: 'En definitiva, las redes sociales pueden ser positivas si sabemos utilizarlas bien.',
    phraseAm: 'Ի վերջո, սոցիալական ցանցերը կարող են օգտակար լինել, եթե գիտենք՝ ինչպես ճիշտ օգտագործել դրանք։'
  }
];

export const JUEGO4_CAMBIA: CambiaConectorItem[] = [
  {
    id: 1,
    originalEs: 'Las redes sociales son útiles. Sin embargo, pueden crear dependencia.',
    originalAm: 'Սոցիալական ցանցերն օգտակար են։ Այնուամենայնիվ, դրանք կարող են կախվածություն առաջացնել։',
    targetConnectorEs: 'Sin embargo',
    targetConnectorAm: 'սակայն / այնուամենայնիվ',
    replacementConnectorEs: 'No obstante',
    fullRevisedEs: 'Las redes sociales son útiles. No obstante, pueden crear dependencia.',
    fullRevisedAm: 'Սոցիալական ցանցերն օգտակար են։ Այնուամենայնիվ, դրանք կարող են կախվածություն առաջացնել։',
    options: ['No obstante', 'Por eso', 'Además']
  },
  {
    id: 2,
    originalEs: 'Además, permiten mantener el contacto con otras personas.',
    originalAm: 'Բացի այդ, դրանք հնարավորություն են տալիս կապ պահպանել ուրիշների հետ։',
    targetConnectorEs: 'Además',
    targetConnectorAm: 'բացի այդ',
    replacementConnectorEs: 'Asimismo',
    fullRevisedEs: 'Asimismo, permiten mantener el contacto con otras personas.',
    fullRevisedAm: 'Բացի այդ / ինչպես նաև, դրանք հնարավորություն են տալիս կապ պահպանել ուրիշների հետ։',
    options: ['Asimismo', 'Sin embargo', 'Por lo tanto']
  },
  {
    id: 3,
    originalEs: 'Pasamos demasiado tiempo con el móvil; por eso, necesitamos establecer límites.',
    originalAm: 'Մենք չափազանց շատ ժամանակ ենք անցկացնում հեռախոսով; դրա համար, պետք է սահմաններ դնենք։',
    targetConnectorEs: 'Por eso',
    targetConnectorAm: 'դրա համար / այդ պատճառով',
    replacementConnectorEs: 'Por lo tanto',
    fullRevisedEs: 'Pasamos demasiado tiempo con el móvil; por lo tanto, necesitamos establecer límites.',
    fullRevisedAm: 'Մենք չափազանց շատ ժամանակ ենք անցկացնում հեռախոսով, հետևաբար, պետք է սահմաններ դնենք։',
    options: ['Por lo tanto', 'Aun así', 'De hecho']
  },
  {
    id: 4,
    originalEs: 'En definitiva, debemos usar las redes de manera responsable.',
    originalAm: 'Ի վերջո, մենք պետք է սոցիալական ցանցերը պատասխանատու կերպով օգտագործենք։',
    targetConnectorEs: 'En definitiva',
    targetConnectorAm: 'ի վերջո / ընդհանուր առմամբ',
    replacementConnectorEs: 'En conclusión',
    fullRevisedEs: 'En conclusión, debemos usar las redes de manera responsable.',
    fullRevisedAm: 'Եզրափակելով՝, մենք պետք է սոցիալական ցանցերը պատասխանատու կերպով օգտագործենք։',
    options: ['En conclusión', 'Con tal de que', 'Aunque']
  }
];

export const JUEGO5_GRAMATICA: GramaticaItem[] = [
  {
    id: 1,
    sentenceEs: 'Laura quiere poner límites con tal de que estos no ______ su comunicación.',
    sentenceAm: 'Լաուրան ուզում է սահմաններ դնել՝ պայմանով, որ դրանք չխանգարեն իր շփմանը։',
    options: [
      { key: 'a', textEs: 'impiden', textAm: 'արգելում են (Indicativo)' },
      { key: 'b', textEs: 'impedirán', textAm: 'կարգելեն (Futuro)' },
      { key: 'c', textEs: 'impidan', textAm: 'արգելեն (Subjuntivo)' },
      { key: 'd', textEs: 'impedían', textAm: 'արգելում էին (Imperfecto)' }
    ],
    correct: 'c',
    ruleExplanationEs: 'Con tal de que + Subjuntivo (impidan)',
    ruleExplanationAm: 'Con tal de que արտահայտությունից հետո միշտ գործածվում է Subjuntivo'
  },
  {
    id: 2,
    sentenceEs: 'Algunas personas se comparan demasiado con otros; de ahí que ______ insatisfechas.',
    sentenceAm: 'Որոշ մարդիկ իրենց չափազանց շատ են համեմատում ուրիշների հետ, դրա հետևանքով իրենց դժգոհ են զգում։',
    options: [
      { key: 'a', textEs: 'se sienten', textAm: 'զգում են (Indicativo)' },
      { key: 'b', textEs: 'se sientan', textAm: 'զգան (Subjuntivo)' },
      { key: 'c', textEs: 'se sentirán', textAm: 'կզգան (Futuro)' },
      { key: 'd', textEs: 'sentirse', textAm: 'զգալ (Infinitivo)' }
    ],
    correct: 'b',
    ruleExplanationEs: 'De ahí que + Subjuntivo (se sientan)',
    ruleExplanationAm: 'De ahí que կապակցիչից հետո պահանջվում է Subjuntivo'
  },
  {
    id: 3,
    sentenceEs: 'Puedes utilizar las redes sociales siempre que no ______ demasiado tiempo.',
    sentenceAm: 'Կարող ես օգտվել սոցիալական ցանցերից՝ պայմանով, որ չափազանց շատ ժամանակ չկորցնես։',
    options: [
      { key: 'a', textEs: 'pierdes', textAm: 'կորցնում ես (Indicativo)' },
      { key: 'b', textEs: 'perderás', textAm: 'կկորցնես (Futuro)' },
      { key: 'c', textEs: 'pierdas', textAm: 'կորցնես (Subjuntivo)' },
      { key: 'd', textEs: 'perdías', textAm: 'կորցնում էիր (Imperfecto)' }
    ],
    correct: 'c',
    ruleExplanationEs: 'Siempre que + Subjuntivo (pierdas), cuando expresa condición.',
    ruleExplanationAm: 'Siempre que + Subjuntivo, երբ այն արտահայտում է պայման։'
  },
  {
    id: 4,
    sentenceEs: 'Voy a desactivar algunas notificaciones para que el móvil no me ______ constantemente.',
    sentenceAm: 'Ես անջատելու եմ որոշ ծանուցումներ, որպեսզի հեռախոսը մշտապես չշեղի ինձ։',
    options: [
      { key: 'a', textEs: 'distrae', textAm: 'շեղում է (Indicativo)' },
      { key: 'b', textEs: 'distraiga', textAm: 'շեղի (Subjuntivo)' },
      { key: 'c', textEs: 'distrajo', textAm: 'շեղեց (Indefinido)' },
      { key: 'd', textEs: 'distraerá', textAm: 'կշեղի (Futuro)' }
    ],
    correct: 'b',
    ruleExplanationEs: 'Para que + Subjuntivo (distraiga)',
    ruleExplanationAm: 'Para que կապակցիչից հետո գործածվում է Subjuntivo (նպատակ)'
  }
];

export const JUEGO6_VERDADERO_FALSO: VerdaderoFalsoItem[] = [
  {
    id: 1,
    statementEs: 'Laura quiere eliminar todas sus redes sociales.',
    statementAm: 'Լաուրան ցանկանում է ջնջել իր բոլոր սոցիալական ցանցերը։',
    isTrue: false,
    explanationEs: 'Ella quiere usarlas de manera más consciente.',
    explanationAm: 'Նա ուզում է դրանք ավելի գիտակցված օգտագործել։'
  },
  {
    id: 2,
    statementEs: 'Diego piensa que las redes solo tienen aspectos negativos.',
    statementAm: 'Դիեգոն կարծում է, որ սոցիալական ցանցերը միայն բացասական կողմեր ունեն։',
    isTrue: false,
    explanationEs: 'También habla de sus ventajas.',
    explanationAm: 'Նա խոսում է նաև դրանց առավելությունների մասին։'
  },
  {
    id: 3,
    statementEs: 'Laura intenta no mirar el móvil durante la primera hora del día.',
    statementAm: 'Լաուրան փորձում է օրվա առաջին ժամին հեռախոսին չնայել։',
    isTrue: true,
    explanationEs: 'Verdadero. Es su nueva regla personal por la mañana.',
    explanationAm: 'Ճիշտ է։ Դա նրա նոր անձնական առավոտյան կանոնն է։'
  },
  {
    id: 4,
    statementEs: 'Diego utiliza las redes sociales para trabajar.',
    statementAm: 'Դիեգոն սոցիալական ցանցերն օգտագործում է աշխատանքի համար։',
    isTrue: true,
    explanationEs: 'Verdadero. Para él son herramientas de trabajo.',
    explanationAm: 'Ճիշտ է։ Նրա համար դրանք աշխատանքային գործիքներ են։'
  },
  {
    id: 5,
    statementEs: 'Laura piensa que las redes siempre muestran una imagen realista de la vida.',
    statementAm: 'Լաուրան կարծում է, որ սոցիալական ցանցերը միշտ կյանքի իրական պատկեր են ցույց տալիս։',
    isTrue: false,
    explanationEs: 'No siempre muestran la realidad, a menudo están idealizadas.',
    explanationAm: 'Դրանք միշտ չէ, որ իրականությունն են ցույց տալիս, հաճախ իդեալականացված են։'
  }
];

export const JUEGO7_PROFESOR: ProfesorProvocaItem[] = [
  {
    id: 1,
    teacherEs: 'Las redes sociales no tienen ninguna ventaja.',
    teacherAm: 'Սոցիալական ցանցերը ոչ մի առավելություն չունեն։',
    studentEs: 'No estoy del todo de acuerdo. De hecho, pueden ser muy útiles para aprender, trabajar y comunicarse.',
    studentAm: 'Լիովին համաձայն չեմ։ Իրականում, դրանք կարող են շատ օգտակար լինել սովորելու, աշխատելու և շփվելու համար։',
    connectorUsed: 'De hecho'
  },
  {
    id: 2,
    teacherEs: 'Todo el mundo debería borrar Instagram.',
    teacherAm: 'Բոլորը պետք է ջնջեն Instagram-ը։',
    studentEs: 'Sin embargo, para muchas personas es también una herramienta de trabajo y comunicación.',
    studentAm: 'Սակայն, շատ մարդկանց համար այն նաև աշխատանքի և շփման գործիք է։',
    connectorUsed: 'Sin embargo'
  },
  {
    id: 3,
    teacherEs: 'Pasar varias horas al día con el móvil no tiene consecuencias.',
    teacherAm: 'Օրական մի քանի ժամ հեռախոս օգտագործելը հետևանքներ չունի։',
    studentEs: 'No estoy de acuerdo. Por el contrario, puede afectar a nuestra concentración y hacernos perder tiempo.',
    studentAm: 'Համաձայն չեմ։ Ընդհակառակը, դա կարող է ազդել մեր կենտրոնացման վրա և մեզնից ժամանակ խլել։',
    connectorUsed: 'Por el contrario'
  },
  {
    id: 4,
    teacherEs: 'Las redes sociales solo sirven para entretenerse.',
    teacherAm: 'Սոցիալական ցանցերը միայն զվարճանալու համար են։',
    studentEs: 'Aun así, también pueden utilizarse para estudiar, encontrar información y buscar trabajo.',
    studentAm: 'Նույնիսկ այդ դեպքում, դրանք կարելի է օգտագործել նաև սովորելու, տեղեկություն գտնելու և աշխատանք փնտրելու համար։',
    connectorUsed: 'Aun así'
  }
];

export const JUEGO8_DEBATE: DebateItem[] = [
  {
    id: 1,
    connector: 'Sin embargo',
    questionEs: '¿Las redes sociales nos acercan o nos alejan de las personas?',
    questionAm: 'Սոցիալական ցանցերը մեզ մոտեցնո՞ւմ են մարդկանց, թե՞ հեռացնում։',
    responseEs: 'Las redes sociales nos permiten mantener el contacto con personas que viven lejos. Sin embargo, a veces reducen la comunicación cara a cara. Creo que todo depende de cómo las utilicemos.',
    responseAm: 'Սոցիալական ցանցերը մեզ հնարավորություն են տալիս կապ պահպանել հեռու ապրող մարդկանց հետ։ Սակայն, երբեմն դրանք նվազեցնում են անմիջական շփումը։ Կարծում եմ՝ ամեն ինչ կախված է նրանից, թե ինչպես ենք դրանք օգտագործում։'
  },
  {
    id: 2,
    connector: 'Aunque',
    questionEs: '¿Podrías pasar una semana sin Instagram, TikTok o Facebook?',
    questionAm: 'Կկարողանա՞յիր մեկ շաբաթ ապրել առանց Instagram-ի, TikTok-ի կամ Facebook-ի։',
    responseEs: 'Aunque al principio sería difícil, creo que podría pasar una semana sin redes sociales. Tendría más tiempo para leer, salir y hacer otras actividades.',
    responseAm: 'Թեև սկզբում դժվար կլիներ, կարծում եմ՝ կարող էի մեկ շաբաթ ապրել առանց սոցիալական ցանցերի։ Ավելի շատ ժամանակ կունենայի կարդալու, դուրս գալու և այլ զբաղմունքների համար։'
  },
  {
    id: 3,
    connector: 'Por lo tanto',
    questionEs: '¿Deberían los jóvenes limitar el tiempo que pasan con el móvil?',
    questionAm: 'Երիտասարդները պե՞տք է սահմանափակեն հեռախոսով անցկացրած ժամանակը։',
    responseEs: 'Muchos jóvenes pasan demasiadas horas delante de una pantalla. Por lo tanto, sería conveniente establecer ciertos límites.',
    responseAm: 'Շատ երիտասարդներ չափազանց շատ ժամեր են անցկացնում էկրանի առջև։ Հետևաբար, օգտակար կլիներ որոշ սահմանափակումներ դնել։'
  }
];

export const JUEGO9_COMPLETA: CompletaItem[] = [
  {
    id: 1,
    connector: 'Aunque',
    leadEs: 'Aunque uso las redes sociales todos los días,',
    leadAm: 'Չնայած ամեն օր օգտվում եմ սոցիալական ցանցերից,',
    completionEs: 'intento no pasar demasiado tiempo con el móvil.',
    completionAm: 'փորձում եմ չափազանց շատ ժամանակ չանցկացնել հեռախոսով։'
  },
  {
    id: 2,
    connector: 'sin embargo',
    leadEs: 'Paso bastante tiempo con el móvil;',
    leadAm: 'Բավական շատ ժամանակ եմ անցկացնում հեռախոսով,',
    completionEs: 'sin embargo, intento desconectarme por la noche.',
    completionAm: 'սակայն երեկոյան փորձում եմ անջատվել դրանից։'
  },
  {
    id: 3,
    connector: 'siempre que',
    leadEs: 'Las redes sociales pueden ser útiles,',
    leadAm: 'Սոցիալական ցանցերը կարող են օգտակար լինել,',
    completionEs: 'siempre que las utilicemos de forma responsable.',
    completionAm: 'պայմանով, որ դրանք պատասխատու կերպով օգտագործենք։'
  },
  {
    id: 4,
    connector: 'de ahí que',
    leadEs: 'Algunas personas pasan horas mirando el móvil;',
    leadAm: 'Որոշ մարդիկ ժամերով նայում են հեռախոսին,',
    completionEs: 'de ahí que tengan menos tiempo para otras actividades.',
    completionAm: 'դրա հետևանքով նրանք ավելի քիչ ժամանակ են ունենում այլ զբաղմունքների համար։'
  },
  {
    id: 5,
    connector: 'además',
    leadEs: 'Las redes permiten comunicarnos rápidamente;',
    leadAm: 'Սոցիալական ցանցերը թույլ են տալիս արագ շփվել,',
    completionEs: 'además, podemos encontrar mucha información útil.',
    completionAm: 'բացի այդ՝ կարող ենք շատ օգտակար տեղեկություն գտնել։'
  }
];

export const RETO_C1_DATA: RetoC1Data = {
  promptEs: '¿Qué relación tienes tú con las redes sociales? ¿Qué ventajas y problemas ves?',
  promptAm: 'Ի՞նչ հարաբերություն ունես դու սոցիալական ցանցերի հետ։ Ի՞նչ առավելություններ և խնդիրներ ես տեսնում։',
  requiredConnectors: [
    'por un lado... por otro lado...',
    'además',
    'sin embargo',
    'aun así',
    'en definitiva'
  ],
  modelResponseEs:
    'Por un lado, las redes sociales me parecen muy útiles porque permiten comunicarnos rápidamente y encontrar información. Además, pueden servir para estudiar y trabajar. Por otro lado, es fácil pasar demasiado tiempo mirando el móvil. Sin embargo, no creo que sea necesario dejar de utilizarlas por completo. Aun así, considero importante establecer ciertos límites. En definitiva, las redes sociales son útiles siempre que sepamos utilizarlas de forma responsable.',
  modelResponseAm:
    'Մի կողմից, սոցիալական ցանցերն ինձ շատ օգտակար են թվում, որովհետև դրանք հնարավորություն են տալիս արագ շփվել և տեղեկություն գտնել։ Բացի այդ, դրանք կարող են ծառայել սովորելու և աշխատելու համար։ Մյուս կողմից, հեշտ է չափազանց շատ ժամանակ անցկացնել հեռախոսին նայելով։ Սակայն, չեմ կարծում, որ անհրաժեշտ է ամբողջությամբ դադարել դրանք օգտագործել։ Նույնիսկ այդ դեպքում, կարևոր եմ համարում որոշ սահմաններ դնել։ Ի վերջո, սոցիալական ցանցերն օգտակար են, պայմանով, որ կարողանանք դրանք պատասխանատու կերպով օգտագործել։'
};
