import { DialogueLine } from './types';

export const DIALOGUE_TITLE = {
  es: 'Conversación real: «¿Podrías vivir sin redes sociales?»',
  am: 'Իրական զրույց․ «Կկարողանա՞յիր ապրել առանց սոցիալական ցանցերի»'
};

export const DIALOGUE_LINES: DialogueLine[] = [
  {
    id: 1,
    speaker: 'Laura',
    textEs: 'Últimamente intento usar menos las redes sociales. Aunque me sirven para mantenerme en contacto con mis amigos, me doy cuenta de que pierdo demasiado tiempo mirando el móvil.',
    textAm: 'Վերջերս փորձում եմ ավելի քիչ օգտվել սոցիալական ցանցերից։ Թեև դրանք օգնում են կապ պահպանել ընկերներիս հետ, նկատում եմ, որ չափազանց շատ ժամանակ եմ կորցնում հեռախոսին նայելով։',
    connectors: ['Aunque']
  },
  {
    id: 2,
    speaker: 'Diego',
    textEs: 'A mí me ocurre lo mismo. De hecho, a veces entro en Instagram para responder a un mensaje y, cuando me doy cuenta, ha pasado casi una hora.',
    textAm: 'Ինձ մոտ էլ նույնն է։ Իրականում, երբեմն Instagram եմ մտնում պարզապես հաղորդագրության պատասխանելու համար, իսկ երբ նկատում եմ՝ արդեն գրեթե մեկ ժամ է անցել։',
    connectors: ['De hecho']
  },
  {
    id: 3,
    speaker: 'Laura',
    textEs: 'Exactamente. Por eso, he decidido no mirar el teléfono durante la primera hora del día.',
    textAm: 'Ճիշտ այդպես։ Այդ պատճառով որոշել եմ օրվա առաջին մեկ ժամվա ընթացքում հեռախոսին չնայել։',
    connectors: ['Por eso']
  },
  {
    id: 4,
    speaker: 'Diego',
    textEs: 'Me parece una buena idea. Sin embargo, para mí sería difícil porque también utilizo las redes para trabajar.',
    textAm: 'Լավ գաղափար է թվում։ Սակայն ինձ համար դա դժվար կլիներ, որովհետև սոցիալական ցանցերն օգտագործում եմ նաև աշխատանքի համար։',
    connectors: ['Sin embargo']
  },
  {
    id: 5,
    speaker: 'Laura',
    textEs: 'Claro. No creo que sea necesario eliminarlas por completo. Más bien, se trata de aprender a utilizarlas de una manera más consciente.',
    textAm: 'Իհարկե։ Չեմ կարծում, որ անհրաժեշտ է դրանք ամբողջությամբ ջնջել։ Ավելի շուտ, հարցն այն է, որ սովորենք դրանք ավելի գիտակցված օգտագործել։',
    connectors: ['Más bien']
  },
  {
    id: 6,
    speaker: 'Diego',
    textEs: 'Estoy de acuerdo. Además, las redes tienen muchas ventajas. Gracias a ellas puedes aprender, descubrir proyectos interesantes e incluso encontrar oportunidades de trabajo.',
    textAm: 'Համաձայն եմ։ Բացի այդ, սոցիալական ցանցերը բազմաթիվ առավելություններ ունեն։ Դրանց շնորհիվ կարելի է սովորել, հետաքրքիր նախագծեր գտնել և նույնիսկ աշխատանքի հնարավորություններ բացահայտել։',
    connectors: ['Además']
  },
  {
    id: 7,
    speaker: 'Laura',
    textEs: 'Sí, pero también muestran una imagen poco realista de la vida. Hay personas que comparan constantemente su vida con la de los demás; de ahí que se sientan insatisfechas.',
    textAm: 'Այո, բայց դրանք նաև կյանքի ոչ այնքան իրական պատկեր են ցույց տալիս։ Որոշ մարդիկ մշտապես իրենց կյանքը համեմատում են ուրիշների կյանքի հետ, այստեղից էլ այն, որ նրանք իրենց դժգոհ են զգում։',
    connectors: ['de ahí que']
  },
  {
    id: 8,
    speaker: 'Diego',
    textEs: 'Eso es cierto. Aun así, creo que el problema no son únicamente las redes, sino la manera en que las usamos.',
    textAm: 'Դա ճիշտ է։ Նույնիսկ այդ դեպքում, կարծում եմ՝ խնդիրը միայն սոցիալական ցանցերը չեն, այլ այն, թե ինչպես ենք մենք դրանք օգտագործում։',
    connectors: ['Aun así']
  },
  {
    id: 9,
    speaker: 'Laura',
    textEs: 'Puede ser. Yo intentaría establecer ciertos límites, con tal de que no me impidieran comunicarme con las personas que me importan.',
    textAm: 'Հնարավոր է։ Ես կփորձեի որոշ սահմանափակումներ սահմանել՝ պայմանով, որ դրանք չխանգարեին ինձ շփվել այն մարդկանց հետ, որոնք կարևոր են ինձ համար։',
    connectors: ['con tal de que']
  },
  {
    id: 10,
    speaker: 'Diego',
    textEs: 'Yo también. En definitiva, quizá no sea necesario abandonar las redes sociales, sino aprender a controlar el tiempo que les dedicamos.',
    textAm: 'Ես նույնպես։ Ի վերջո, գուցե պետք չէ հրաժարվել սոցիալական ցանցերից, այլ պետք է սովորել վերահսկել դրանց վրա ծախսվող ժամանակը։',
    connectors: ['En definitiva']
  }
];
