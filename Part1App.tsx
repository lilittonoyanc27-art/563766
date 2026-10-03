import React, { useState } from 'react';
import {
  JUEGO1_CONECTORES,
  JUEGO2_QUIEN_DIJO,
  JUEGO3_CONTINUA,
  JUEGO4_CAMBIA,
  JUEGO5_GRAMATICA,
  JUEGO6_VERDADERO_FALSO,
  JUEGO7_PROFESOR,
  JUEGO8_DEBATE,
  JUEGO9_COMPLETA,
  RETO_C1_DATA,
} from './part1Data';
import {
  Check,
  Eye,
  Languages,
  Volume2,
  CheckCircle2,
  XCircle,
  Lightbulb,
  Award,
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { soundManager, speakSpanish } from './audioUtils';

interface Props {
  onGoToDialogue?: () => void;
}

const CONNECTOR_TRANSLATIONS: Record<string, string> = {
  'Sin embargo': 'սակայն / այնուամենայնիվ',
  'Por eso': 'դրա համար / այդ պատճառով',
  'Además': 'բացի այդ',
  'Con tal de que': 'պայմանով, որ',
  'En definitiva': 'ի վերջո / ընդհանուր առմամբ',
  'De ahí que': 'այստեղից էլ այն, որ / դրա հետևանքով',
  'Aun así': 'նույնիսկ այդ դեպքում',
  'No obstante': 'այնուամենայնիվ',
  'Por lo tanto': 'հետևաբար',
  'Siempre que': 'պայմանով, որ',
  'Para que': 'որպեսզի',
  'Aunque': 'թեև / չնայած',
  'Asimismo': 'ինչպես նաև / բացի այդ',
  'De hecho': 'իրականում / փաստացի',
  'En conclusión': 'եզրափակելով'
};

export default function Part1App({ onGoToDialogue }: Props) {
  const [activeGame, setActiveGame] = useState<number>(1);
  const [globalShowArm, setGlobalShowArm] = useState<boolean>(false);
  const [revealedItems, setRevealedItems] = useState<Record<string, boolean>>({});
  const [optTrans, setOptTrans] = useState<Record<string, boolean>>({});

  // Game states
  const [g1Selected, setG1Selected] = useState<Record<string, string>>({});
  const [g2Selected, setG2Selected] = useState<Record<number, string>>({});
  const [g4Selected, setG4Selected] = useState<Record<number, string>>({});
  const [g5Selected, setG5Selected] = useState<Record<number, string>>({});
  const [g6Selected, setG6Selected] = useState<Record<number, boolean>>({});

  const toggleItemReveal = (key: string) => {
    setRevealedItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const isRevealed = (key: string) => {
    return globalShowArm || !!revealedItems[key];
  };

  const toggleOptTrans = (id: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setOptTrans(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const isOptTrans = (id: string) => {
    return globalShowArm || !!optTrans[id];
  };

  const gamesList = [
    { id: 1, nameEs: '1. Encuentra el conector', nameAm: 'Գտի՛ր կապակցիչը' },
    { id: 2, nameEs: '2. ¿Quién lo dijo?', nameAm: 'Ո՞վ ասաց' },
    { id: 3, nameEs: '3. Continúa la frase', nameAm: 'Շարունակի՛ր նախադասությունը' },
    { id: 4, nameEs: '4. Cambia el conector', nameAm: 'Փոխի՛ր կապակցիչը' },
    { id: 5, nameEs: '5. Indicativo o Subjuntivo', nameAm: 'Indicativo թե՞ Subjuntivo' },
    { id: 6, nameEs: '6. Verdadero o falso', nameAm: 'Ճիշտ թե սխալ' },
    { id: 7, nameEs: '7. Profesor provoca', nameAm: 'Ուսուցիչը վիճելի կարծիք է ասում' },
    { id: 8, nameEs: '8. Debate rápido', nameAm: 'Արագ բանավեճ' },
    { id: 9, nameEs: '9. Completa libremente', nameAm: 'Ազատ լրացրու' },
    { id: 10, nameEs: '10. Reto C1', nameAm: 'C1 մարտահրավեր' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Top Header for Part 1 */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 bg-gradient-to-r from-[#0c1f44] via-[#0d2656] to-[#102d66] border border-sky-500/40 rounded-2xl p-5 md:p-6 shadow-xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-md bg-orange-500/20 border border-orange-500/40 text-xs font-bold uppercase tracking-wider text-orange-300">
              Մաս 1 · 10 Խաղեր
            </span>
            {onGoToDialogue && (
              <button
                onClick={onGoToDialogue}
                className="text-xs text-sky-300 hover:text-yellow-300 flex items-center gap-1 font-semibold transition-colors underline decoration-sky-400/50"
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>Կարդալ սկզբնական զրույցը (Laura & Diego)</span>
              </button>
            )}
          </div>
          <h1 className="text-xl md:text-2xl font-black text-white flex flex-wrap items-center gap-2">
            <span>🎮 Juegos después del texto</span>
            <span className="text-sky-400 font-normal">/</span>
            <span className="text-yellow-300 text-lg md:text-xl font-bold">Խաղեր տեքստից հետո</span>
          </h1>
          <p className="text-xs md:text-sm text-sky-100/90 mt-1">
            Կտտացրեք իսպաներեն ցանկացած տեքստի վրա՝ հայերեն թարգմանությունն ու պատասխանը բացելու համար։
          </p>
        </div>

        {/* Global Translation Reveal Toggle */}
        <div className="flex items-center gap-3 relative z-10">
          <button
            onClick={() => setGlobalShowArm(prev => !prev)}
            className={`px-4 py-2.5 rounded-xl border text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
              globalShowArm
                ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-950 border-yellow-300 shadow-md shadow-yellow-500/20'
                : 'bg-sky-500/20 text-sky-200 border-sky-400/40 hover:bg-sky-500/30'
            }`}
          >
            <Languages className="w-4 h-4" />
            <span>{globalShowArm ? 'Թաքցնել թարգմանությունները' : 'Բացել բոլոր թարգմանությունները'}</span>
          </button>
        </div>
      </div>

      {/* Horizontal Game Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-thin scrollbar-thumb-sky-800">
        {gamesList.map(g => (
          <button
            key={g.id}
            onClick={() => setActiveGame(g.id)}
            className={`px-3.5 py-2 rounded-xl border text-xs font-semibold whitespace-nowrap transition-all flex flex-col items-start gap-0.5 ${
              activeGame === g.id
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 border-orange-400 text-slate-950 shadow-md shadow-orange-500/20 font-bold scale-[1.02]'
                : 'bg-[#0a1838] border-sky-900/60 text-sky-200/80 hover:text-white hover:border-sky-600/50'
            }`}
          >
            <span>{g.nameEs}</span>
            <span className={`text-[11px] ${activeGame === g.id ? 'text-slate-900/90 font-medium' : 'text-sky-300/60'}`}>
              {g.nameAm}
            </span>
          </button>
        ))}
      </div>

      {/* GAME 1: Encuentra el conector */}
      {activeGame === 1 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">1.</span> Encuentra el conector — Գտի՛ր կապակցիչը
            </h2>
            <p className="text-xs text-sky-200/80">
              Ընտրեք ճիշտ կապակցիչը յուրաքանչյուր կատեգորիայի համար կամ կտտացրեք քարտին՝ հայերեն թարգմանությունն ու բացատրությունը տեսնելու համար։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {JUEGO1_CONECTORES.map(item => {
              const revealed = isRevealed(`g1_${item.id}`);
              const selected = g1Selected[item.id];
              const isCorrect = selected === item.answerEs;
              const allOptions = [item.answerEs, ...(item.distractors || [])].sort();

              return (
                <div
                  key={item.id}
                  className="bg-[#0b1a38] border border-sky-800/60 rounded-xl p-5 flex flex-col justify-between hover:border-sky-500/50 transition-all shadow-lg"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-orange-400">
                        🇪🇸 {item.categoryEs}
                      </span>
                      <button
                        onClick={() => speakSpanish(`${item.categoryEs}. ${item.answerEs}`)}
                        className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                        title="Լսել իսպաներեն"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {revealed && (
                      <div className="text-xs font-medium text-yellow-300 mb-3 animate-in fade-in">
                        🇦🇲 {item.categoryAm}
                      </div>
                    )}

                    <div
                      onClick={() => toggleItemReveal(`g1_${item.id}`)}
                      className="cursor-pointer group text-sm text-sky-100 hover:text-white mb-4 p-2.5 rounded-lg bg-[#07132b] border border-sky-900/80"
                    >
                      <p className="font-semibold text-white group-hover:text-yellow-200 transition-colors">
                        {item.questionEs || `¿Cuál es el conector?`}
                      </p>
                      {revealed && (
                        <p className="text-xs text-yellow-300/90 mt-1 font-medium">
                          {item.questionAm || `Ո՞րն է կապակցիչը։`}
                        </p>
                      )}
                    </div>

                    {/* Interactive Multiple Choice */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      {allOptions.map(opt => {
                        const optSelected = selected === opt;
                        const optIsRight = opt === item.answerEs;
                        const transKey = `g1_${item.id}_${opt}`;
                        const isTransShown = isOptTrans(transKey);
                        let btnStyle = 'border-sky-900/80 bg-[#07132b] hover:border-sky-600 text-sky-100';
                        if (selected) {
                          if (optIsRight) {
                            btnStyle = 'border-yellow-400 bg-yellow-400/20 text-yellow-300 font-bold';
                          } else if (optSelected) {
                            btnStyle = 'border-orange-500 bg-orange-950/40 text-orange-300';
                          }
                        }

                        return (
                          <div
                            key={opt}
                            className={`p-2 rounded-lg border text-xs flex flex-col justify-between transition-all ${btnStyle}`}
                          >
                            <div className="flex items-center justify-between gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  setG1Selected(prev => ({ ...prev, [item.id]: opt }));
                                  if (opt === item.answerEs) soundManager.playCorrect();
                                  else soundManager.playWrong();
                                }}
                                className="font-semibold text-left flex-1 hover:text-yellow-200 transition-colors"
                              >
                                {opt}
                              </button>

                              <button
                                type="button"
                                onClick={(e) => toggleOptTrans(transKey, e)}
                                title="Թարգմանել"
                                className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                                  isTransShown
                                    ? 'bg-amber-400 text-blue-950 border-amber-300'
                                    : 'bg-blue-950 text-sky-300 border-sky-800 hover:text-white'
                                }`}
                              >
                                🇦🇲
                              </button>
                            </div>

                            {isTransShown && (
                              <div className="text-[10px] text-yellow-300 font-medium mt-1.5 pt-1 border-t border-sky-900/60 animate-in fade-in">
                                {CONNECTOR_TRANSLATIONS[opt] || opt}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Answer & Armenian Details */}
                  <div className="pt-3 border-t border-sky-900/60">
                    <button
                      onClick={() => toggleItemReveal(`g1_${item.id}`)}
                      className="w-full flex items-center justify-between text-xs text-orange-400 hover:text-orange-300 font-bold"
                    >
                      <span>{revealed ? 'Թաքցնել պատասխանը' : 'Տեսնել ճիշտ պատասխանը'}</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {revealed && (
                      <div className="mt-2.5 p-3 rounded-lg bg-sky-950/80 border border-sky-400/40 animate-in fade-in">
                        <div className="text-xs font-bold text-yellow-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                          <span>✅ {item.answerEs}</span>
                        </div>
                        <div className="text-xs text-sky-100 mt-1 font-medium">
                          🇦🇲 {item.answerEs} — {item.answerAm}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 2: ¿Quién lo dijo? */}
      {activeGame === 2 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">2.</span> ¿Quién lo dijo? — Ո՞վ ասաց
            </h2>
            <p className="text-xs text-sky-200/80">
              Հարցեր Լաուրայի և Դիեգոյի զրույցի մասին։ Կտտացրեք հարցին կամ տարբերակներին՝ հայերեն թարգմանությունը տեսնելու համար։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JUEGO2_QUIEN_DIJO.map(item => {
              const revealed = isRevealed(`g2_${item.id}`);
              const userPick = g2Selected[item.id];

              return (
                <div
                  key={item.id}
                  className="bg-[#0b1a38] border border-sky-800/60 rounded-xl p-5 hover:border-sky-500/50 transition-all shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div
                        onClick={() => toggleItemReveal(`g2_${item.id}`)}
                        className="cursor-pointer group flex-1"
                      >
                        <h3 className="text-base font-bold text-white group-hover:text-yellow-200 transition-colors">
                          {item.id}. 🇪🇸 {item.questionEs}
                        </h3>
                        {revealed && (
                          <p className="text-xs text-yellow-300 font-medium mt-1 animate-in fade-in">
                            🇦🇲 {item.questionAm}
                          </p>
                        )}
                      </div>

                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          onClick={() => speakSpanish(item.questionEs)}
                          className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                          title="Լսել իսպաներեն"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => toggleItemReveal(`g2_${item.id}`)}
                          className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                          title="Բացել հայերենը"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Options list */}
                    <div className="space-y-2 mt-4">
                      {item.options.map(opt => {
                        const isPicked = userPick === opt.key;
                        const isCorrect = opt.key === item.correct;
                        const transKey = `g2_${item.id}_${opt.key}`;
                        const isTransShown = isOptTrans(transKey) || revealed;
                        let optStyle = 'border-sky-900/80 bg-[#07132b] hover:border-sky-600 text-sky-100';

                        if (userPick) {
                          if (isCorrect) {
                            optStyle = 'border-yellow-400 bg-yellow-400/20 text-yellow-300 font-bold';
                          } else if (isPicked) {
                            optStyle = 'border-orange-500 bg-orange-950/40 text-orange-300';
                          }
                        }

                        return (
                          <div
                            key={opt.key}
                            className={`p-3 rounded-lg border text-xs flex items-center justify-between transition-all ${optStyle}`}
                          >
                            <div
                              onClick={() => {
                                setG2Selected(prev => ({ ...prev, [item.id]: opt.key }));
                                if (opt.key === item.correct) soundManager.playCorrect();
                                else soundManager.playWrong();
                              }}
                              className="flex items-center gap-2 flex-1 cursor-pointer"
                            >
                              <span className="font-mono font-bold text-orange-400">
                                {opt.key})
                              </span>
                              <span className="font-semibold">{opt.textEs}</span>
                              {isTransShown && (
                                <span className="text-yellow-300 font-medium animate-in fade-in">
                                  — {opt.textAm}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center gap-2 shrink-0" onClick={(e) => e.stopPropagation()}>
                              <button
                                type="button"
                                onClick={(e) => toggleOptTrans(transKey, e)}
                                className={`px-2 py-1 rounded text-[10px] font-bold border transition-colors ${
                                  isTransShown
                                    ? 'bg-amber-400 text-blue-950 border-amber-300'
                                    : 'bg-blue-950 text-sky-300 border-sky-800 hover:text-white'
                                }`}
                                title="Թարգմանել"
                              >
                                {isTransShown ? '🇦🇲 Հայերեն' : '🇦🇲 Թարգմանել'}
                              </button>

                              {userPick && isCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {userPick && (
                    <div className="mt-4 pt-3 border-t border-sky-900/60 text-xs">
                      {userPick === item.correct ? (
                        <span className="text-yellow-300 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-yellow-400" /> ✅ Respuesta correcta: {item.correct}){' '}
                          {item.options.find(o => o.key === item.correct)?.textEs}
                        </span>
                      ) : (
                        <span className="text-orange-400 font-bold flex items-center gap-1.5">
                          <Lightbulb className="w-4 h-4" /> Ճիշտ պատասխան՝ {item.correct}){' '}
                          {item.options.find(o => o.key === item.correct)?.textAm}
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 3: Continúa la frase */}
      {activeGame === 3 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">3.</span> Continúa la frase — Շարունակի՛ր նախադասությունը
            </h2>
            <p className="text-xs text-sky-200/80">
              Ուսումնասիրեք կապակցիչներով նախադասությունները։ Կտտացրեք քարտին՝ հայերեն թարգմանությունը բացելու համար։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JUEGO3_CONTINUA.map(item => {
              const revealed = isRevealed(`g3_${item.id}`);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleItemReveal(`g3_${item.id}`)}
                  className="bg-[#0b1a38] border border-sky-800/60 hover:border-orange-500/50 rounded-xl p-5 cursor-pointer transition-all shadow-lg group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-orange-400">
                      Կապակցիչ՝ {item.connector}
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakSpanish(item.phraseEs);
                        }}
                        className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                        title="Լսել իսպաներեն"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <Eye className="w-3.5 h-3.5 text-sky-400 group-hover:text-yellow-300 transition-colors" />
                    </div>
                  </div>

                  <p className="text-sm md:text-base font-semibold text-white leading-relaxed group-hover:text-yellow-200 transition-colors">
                    🇪🇸 {item.phraseEs}
                  </p>

                  {revealed && (
                    <div className="mt-3 pt-3 border-t border-sky-900/60 text-xs md:text-sm text-yellow-300 leading-relaxed animate-in fade-in font-medium">
                      🇦🇲 {item.phraseAm}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 4: Cambia el conector */}
      {activeGame === 4 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">4.</span> Cambia el conector — Փոխի՛ր կապակցիչը
            </h2>
            <p className="text-xs text-sky-200/80">
              Փոխարինեք ընդգծված կապակցիչը համարժեք հոմանիշով։ Կտտացրեք թարգմանությունը տեսնելու համար։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JUEGO4_CAMBIA.map(item => {
              const revealed = isRevealed(`g4_${item.id}`);
              const userSelection = g4Selected[item.id];
              const isCorrect = userSelection === item.replacementConnectorEs;

              return (
                <div
                  key={item.id}
                  className="bg-[#0b1a38] border border-sky-800/60 rounded-xl p-5 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="text-xs font-bold text-orange-400">
                        Փոխարինիր՝ «{item.targetConnectorEs}» ({item.targetConnectorAm})
                      </span>
                      <button
                        onClick={() => speakSpanish(item.originalEs)}
                        className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                        title="Լսել իսպաներեն"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div
                      onClick={() => toggleItemReveal(`g4_${item.id}`)}
                      className="cursor-pointer group p-3 rounded-lg bg-[#07132b] border border-sky-900/80 mb-3"
                    >
                      <p className="text-sm font-semibold text-white group-hover:text-yellow-200 transition-colors">
                        🇪🇸 {item.originalEs}
                      </p>
                      {revealed && (
                        <p className="text-xs text-yellow-300 mt-1.5 animate-in fade-in font-medium">
                          🇦🇲 {item.originalAm}
                        </p>
                      )}
                    </div>

                    {/* Replacement buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-3">
                      {item.options?.map(opt => {
                        const optPicked = userSelection === opt;
                        const optRight = opt === item.replacementConnectorEs;
                        const transKey = `g4_${item.id}_${opt}`;
                        const isTransShown = isOptTrans(transKey);
                        let btnClass = 'border-sky-900/80 bg-[#07132b] hover:border-sky-600 text-sky-100';
                        if (userSelection) {
                          if (optRight) {
                            btnClass = 'border-yellow-400 bg-yellow-400/20 text-yellow-300 font-bold';
                          } else if (optPicked) {
                            btnClass = 'border-orange-500 bg-orange-950/40 text-orange-300';
                          }
                        }

                        return (
                          <div
                            key={opt}
                            className={`p-2 rounded-lg border text-xs flex flex-col justify-between transition-all ${btnClass}`}
                          >
                            <div className="flex items-center justify-between gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  setG4Selected(prev => ({ ...prev, [item.id]: opt }));
                                  if (opt === item.replacementConnectorEs) soundManager.playCorrect();
                                  else soundManager.playWrong();
                                }}
                                className="font-semibold text-left flex-1 hover:text-yellow-200 transition-colors"
                              >
                                {opt}
                              </button>

                              <button
                                type="button"
                                onClick={(e) => toggleOptTrans(transKey, e)}
                                title="Թարգմանել"
                                className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                                  isTransShown
                                    ? 'bg-amber-400 text-blue-950 border-amber-300'
                                    : 'bg-blue-950 text-sky-300 border-sky-800 hover:text-white'
                                }`}
                              >
                                🇦🇲
                              </button>
                            </div>

                            {isTransShown && (
                              <div className="text-[10px] text-yellow-300 font-medium mt-1.5 pt-1 border-t border-sky-900/60 animate-in fade-in">
                                {CONNECTOR_TRANSLATIONS[opt] || opt}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Reveal answer button */}
                  <div className="pt-3 border-t border-sky-900/60">
                    <button
                      onClick={() => toggleItemReveal(`g4_${item.id}`)}
                      className="w-full flex items-center justify-between text-xs text-orange-400 hover:text-orange-300 font-bold"
                    >
                      <span>{revealed ? 'Թաքցնել լուծումը' : 'Տեսնել ճիշտ տարբերակը'}</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {revealed && (
                      <div className="mt-2.5 p-3 rounded-lg bg-sky-950/90 border border-yellow-400/40 animate-in fade-in">
                        <div className="text-xs font-bold text-yellow-300">
                          ✅ Հոմանիշ՝ {item.replacementConnectorEs}
                        </div>
                        <div className="text-xs text-sky-100 mt-1">
                          🇪🇸 {item.fullRevisedEs}
                        </div>
                        <div className="text-xs text-yellow-300 mt-1 font-medium">
                          🇦🇲 {item.fullRevisedAm}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 5: Indicativo o Subjuntivo */}
      {activeGame === 5 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">5.</span> Indicativo o Subjuntivo — Indicativo թե՞ Subjuntivo
            </h2>
            <p className="text-xs text-sky-200/80">
              Ընտրեք բայի ճիշտ քերականական ձևը։ Կտտացրեք հարցին կամ տարբերակներին՝ կանոնի բացատրությունն ու հայերենը տեսնելու համար։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JUEGO5_GRAMATICA.map(item => {
              const revealed = isRevealed(`g5_${item.id}`);
              const userPick = g5Selected[item.id];

              return (
                <div
                  key={item.id}
                  className="bg-[#0b1a38] border border-sky-800/60 rounded-xl p-5 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div
                        onClick={() => toggleItemReveal(`g5_${item.id}`)}
                        className="cursor-pointer group flex-1"
                      >
                        <h3 className="text-sm md:text-base font-bold text-white group-hover:text-yellow-200 transition-colors leading-relaxed">
                          {item.id}. 🇪🇸 {item.sentenceEs}
                        </h3>
                        {revealed && (
                          <p className="text-xs text-yellow-300 font-medium mt-1 animate-in fade-in">
                            🇦🇲 {item.sentenceAm}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => speakSpanish(item.sentenceEs.replace('______', ''))}
                        className="p-1 text-sky-400 hover:text-yellow-300 transition-colors shrink-0"
                        title="Լսել իսպաներեն"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* 4 Grammar options */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4 mb-3">
                      {item.options.map(opt => {
                        const isPicked = userPick === opt.key;
                        const isCorrect = opt.key === item.correct;
                        const transKey = `g5_${item.id}_${opt.key}`;
                        const isTransShown = isOptTrans(transKey);
                        let optStyle = 'border-sky-900/80 bg-[#07132b] hover:border-sky-600 text-sky-100';

                        if (userPick) {
                          if (isCorrect) {
                            optStyle = 'border-yellow-400 bg-yellow-400/20 text-yellow-300 font-bold';
                          } else if (isPicked) {
                            optStyle = 'border-orange-500 bg-orange-950/40 text-orange-300';
                          }
                        }

                        return (
                          <div
                            key={opt.key}
                            className={`p-2.5 rounded-lg border text-xs flex flex-col justify-between font-semibold transition-all ${optStyle}`}
                          >
                            <div className="flex items-center justify-between gap-1">
                              <button
                                type="button"
                                onClick={() => {
                                  setG5Selected(prev => ({ ...prev, [item.id]: opt.key }));
                                  if (opt.key === item.correct) soundManager.playCorrect();
                                  else soundManager.playWrong();
                                }}
                                className="flex-1 text-left hover:text-yellow-200 transition-colors"
                              >
                                <span>
                                  {opt.key}) {opt.textEs}
                                </span>
                              </button>

                              <div className="flex items-center gap-1.5 shrink-0" onClick={(e) => e.stopPropagation()}>
                                <button
                                  type="button"
                                  onClick={(e) => toggleOptTrans(transKey, e)}
                                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold border transition-colors ${
                                    isTransShown
                                      ? 'bg-amber-400 text-blue-950 border-amber-300'
                                      : 'bg-blue-950 text-sky-300 border-sky-800 hover:text-white'
                                  }`}
                                  title="Թարգմանել"
                                >
                                  🇦🇲
                                </button>
                                {userPick && isCorrect && <Check className="w-3.5 h-3.5 text-yellow-400" />}
                              </div>
                            </div>

                            {isTransShown && opt.textAm && (
                              <div className="text-[10px] text-yellow-300 font-medium mt-1.5 pt-1 border-t border-sky-900/60 animate-in fade-in">
                                🇦🇲 {opt.textAm}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Grammar Rule explanation */}
                  <div className="pt-3 border-t border-sky-900/60">
                    <button
                      onClick={() => toggleItemReveal(`g5_${item.id}`)}
                      className="w-full flex items-center justify-between text-xs text-orange-400 hover:text-orange-300 font-bold"
                    >
                      <span>{revealed ? 'Թաքցնել կանոնը' : 'Տեսնել քերականական կանոնը'}</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {revealed && (
                      <div className="mt-2.5 p-3 rounded-lg bg-[#07132b] border border-sky-500/40 text-xs animate-in fade-in">
                        <div className="font-bold text-yellow-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-yellow-400" />
                          <span>✅ {item.ruleExplanationEs}</span>
                        </div>
                        <div className="text-sky-100 mt-1 font-medium">
                          🇦🇲 {item.ruleExplanationAm}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 6: Verdadero o falso */}
      {activeGame === 6 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">6.</span> Verdadero o falso — Ճիշտ թե սխալ
            </h2>
            <p className="text-xs text-sky-200/80">
              Որոշեք՝ պնդումը ճիշտ է (Verdadero), թե սխալ (Falso)։ Կտտացրեք քարտին՝ հայերեն թարգմանությունն ու բացատրությունը տեսնելու համար։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {JUEGO6_VERDADERO_FALSO.map(item => {
              const revealed = isRevealed(`g6_${item.id}`);
              const userChoice = g6Selected[item.id];
              const isAnswered = userChoice !== undefined;

              return (
                <div
                  key={item.id}
                  className="bg-[#0b1a38] border border-sky-800/60 rounded-xl p-5 shadow-lg flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div
                        onClick={() => toggleItemReveal(`g6_${item.id}`)}
                        className="cursor-pointer group flex-1"
                      >
                        <p className="text-sm md:text-base font-bold text-white group-hover:text-yellow-200 transition-colors leading-relaxed">
                          {item.id}. 🇪🇸 {item.statementEs}
                        </p>
                        {revealed && (
                          <p className="text-xs text-yellow-300 font-medium mt-1 animate-in fade-in">
                            🇦🇲 {item.statementAm}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => speakSpanish(item.statementEs)}
                        className="p-1 text-sky-400 hover:text-yellow-300 transition-colors shrink-0"
                        title="Լսել իսպաներեն"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* True / False Buttons */}
                    <div className="grid grid-cols-2 gap-3 my-3">
                      <button
                        onClick={() => {
                          setG6Selected(prev => ({ ...prev, [item.id]: true }));
                          if (item.isTrue) soundManager.playCorrect();
                          else soundManager.playWrong();
                        }}
                        className={`p-2.5 rounded-lg border text-xs font-bold transition-all ${
                          isAnswered && item.isTrue
                            ? 'border-yellow-400 bg-yellow-400/20 text-yellow-300'
                            : userChoice === true && !item.isTrue
                            ? 'border-orange-500 bg-orange-950/40 text-orange-300'
                            : 'border-sky-900/80 bg-[#07132b] hover:border-sky-600 text-sky-100'
                        }`}
                      >
                        ✅ Verdadero (Ճիշտ)
                      </button>

                      <button
                        onClick={() => {
                          setG6Selected(prev => ({ ...prev, [item.id]: false }));
                          if (!item.isTrue) soundManager.playCorrect();
                          else soundManager.playWrong();
                        }}
                        className={`p-2.5 rounded-lg border text-xs font-bold transition-all ${
                          isAnswered && !item.isTrue
                            ? 'border-yellow-400 bg-yellow-400/20 text-yellow-300'
                            : userChoice === false && item.isTrue
                            ? 'border-orange-500 bg-orange-950/40 text-orange-300'
                            : 'border-sky-900/80 bg-[#07132b] hover:border-sky-600 text-sky-100'
                        }`}
                      >
                        ❌ Falso (Սխալ)
                      </button>
                    </div>
                  </div>

                  {/* Explanation Section */}
                  <div className="pt-3 border-t border-sky-900/60">
                    <button
                      onClick={() => toggleItemReveal(`g6_${item.id}`)}
                      className="w-full flex items-center justify-between text-xs text-orange-400 hover:text-orange-300 font-bold"
                    >
                      <span>{revealed ? 'Թաքցնել բացատրությունը' : 'Տեսնել բացատրությունը'}</span>
                      <Eye className="w-3.5 h-3.5" />
                    </button>

                    {revealed && (
                      <div className="mt-2.5 p-3 rounded-lg bg-[#07132b] border border-sky-800/80 text-xs animate-in fade-in">
                        <div className="font-bold text-white flex items-center gap-1.5">
                          {item.isTrue ? (
                            <span className="text-yellow-300">✅ Verdadero (Ճիշտ)</span>
                          ) : (
                            <span className="text-orange-400">❌ Falso (Սխալ)</span>
                          )}
                        </div>
                        <p className="text-sky-100 mt-1">
                          🇪🇸 {item.explanationEs}
                        </p>
                        <p className="text-yellow-300 mt-0.5 font-medium">
                          🇦🇲 {item.explanationAm}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 7: Profesor provoca */}
      {activeGame === 7 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">7.</span> Profesor provoca — Ուսուցիչը վիճելի կարծիք է ասում
            </h2>
            <p className="text-xs text-sky-200/80">
              Ուսուցիչը հայտնում է արմատական կարծիք։ Աշակերտը հակադարձում է կապակցիչով։ Կտտացրեք պատասխանը բացելու համար։
            </p>
          </div>

          <div className="space-y-4">
            {JUEGO7_PROFESOR.map(item => {
              const revealed = isRevealed(`g7_${item.id}`);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleItemReveal(`g7_${item.id}`)}
                  className="bg-[#0b1a38] border border-sky-800/60 hover:border-orange-500/50 rounded-xl p-5 cursor-pointer transition-all shadow-lg group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-orange-400">
                      Իրավիճակ {item.id} · Օգտագործված կապակցիչ՝ «{item.connectorUsed}»
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakSpanish(`${item.teacherEs}. ${item.studentEs}`);
                        }}
                        className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                        title="Լսել երկխոսությունը"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <Eye className="w-3.5 h-3.5 text-sky-400 group-hover:text-yellow-300" />
                    </div>
                  </div>

                  {/* Teacher statement */}
                  <div className="p-3 rounded-lg bg-orange-950/30 border border-orange-700/40 mb-3">
                    <p className="text-xs font-bold text-orange-400 mb-0.5">
                      🇪🇸 Profesor / 🇦🇲 Ուսուցիչ․
                    </p>
                    <p className="text-sm font-semibold text-white">
                      «{item.teacherEs}»
                    </p>
                    {revealed && (
                      <p className="text-xs text-yellow-300 mt-1 font-medium">
                        «{item.teacherAm}»
                      </p>
                    )}
                  </div>

                  {/* Student counterargument */}
                  <div className="p-3 rounded-lg bg-blue-950/60 border border-sky-500/40">
                    <p className="text-xs font-bold text-sky-300 mb-0.5">
                      🇪🇸 Alumno / 🇦🇲 Աշակերտ․
                    </p>
                    <p className="text-sm font-semibold text-white">
                      {item.studentEs}
                    </p>
                    {revealed && (
                      <p className="text-xs text-yellow-300 mt-1 font-medium">
                        {item.studentAm}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 8: Debate rápido */}
      {activeGame === 8 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">8.</span> Debate rápido — Արագ բանավեճ
            </h2>
            <p className="text-xs text-sky-200/80">
              Բանավեճի հարցեր և մոդելային պատասխաններ։ Կտտացրեք հարցին՝ պատասխանն ու հայերեն թարգմանությունը կարդալու համար։
            </p>
          </div>

          <div className="space-y-4">
            {JUEGO8_DEBATE.map(item => {
              const revealed = isRevealed(`g8_${item.id}`);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleItemReveal(`g8_${item.id}`)}
                  className="bg-[#0b1a38] border border-sky-800/60 hover:border-orange-500/50 rounded-xl p-5 cursor-pointer transition-all shadow-lg group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-orange-400">
                      {item.id}. Կապակցիչ՝ «{item.connector}»
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakSpanish(`${item.questionEs} ${item.responseEs}`);
                        }}
                        className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                        title="Լսել իսպաներեն"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <Eye className="w-3.5 h-3.5 text-sky-400 group-hover:text-yellow-300" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-yellow-200 transition-colors mb-2">
                    🇪🇸 {item.questionEs}
                  </h3>

                  {revealed && (
                    <p className="text-xs md:text-sm text-yellow-300 font-medium mb-3 animate-in fade-in">
                      🇦🇲 {item.questionAm}
                    </p>
                  )}

                  <div className="p-3.5 rounded-lg bg-[#07132b] border border-sky-800/80 text-xs md:text-sm leading-relaxed">
                    <span className="font-bold text-yellow-400 block mb-1">
                      ✅ Respuesta posible / Հնարավոր պատասխան․
                    </span>
                    <p className="text-sky-100">
                      🇪🇸 {item.responseEs}
                    </p>
                    {revealed && (
                      <p className="text-yellow-300 mt-2 font-medium">
                        🇦🇲 {item.responseAm}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 9: Completa libremente */}
      {activeGame === 9 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">9.</span> Completa libremente — Ազատ լրացրու
            </h2>
            <p className="text-xs text-sky-200/80">
              Շարունակեք նախադասությունները։ Կտտացրեք՝ մոդելային ավարտն ու հայերեն թարգմանությունը տեսնելու համար։
            </p>
          </div>

          <div className="space-y-3">
            {JUEGO9_COMPLETA.map(item => {
              const revealed = isRevealed(`g9_${item.id}`);

              return (
                <div
                  key={item.id}
                  onClick={() => toggleItemReveal(`g9_${item.id}`)}
                  className="bg-[#0b1a38] border border-sky-800/60 hover:border-orange-500/50 rounded-xl p-5 cursor-pointer transition-all shadow-lg group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-orange-400">
                      {item.id}. Կապակցիչ՝ «{item.connector}»
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          speakSpanish(`${item.leadEs} ${item.completionEs}`);
                        }}
                        className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                        title="Լսել իսպաներեն"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                      <Eye className="w-3.5 h-3.5 text-sky-400 group-hover:text-yellow-300" />
                    </div>
                  </div>

                  <p className="text-sm md:text-base font-semibold text-sky-100">
                    🇪🇸 {item.leadEs} <span className="text-yellow-300 font-bold underline decoration-yellow-400/50">{revealed ? item.completionEs : '......'}</span>
                  </p>

                  {revealed && (
                    <p className="text-xs md:text-sm text-yellow-300 font-medium mt-2 animate-in fade-in">
                      🇦🇲 {item.leadAm} <span className="font-bold underline">{item.completionAm}</span>
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* GAME 10: Reto C1 */}
      {activeGame === 10 && (
        <div className="space-y-4">
          <div className="bg-[#0b1b3d] border border-sky-800/60 rounded-xl p-4 mb-4">
            <h2 className="text-lg font-bold text-white mb-1 flex items-center gap-2">
              <span className="text-yellow-400">10.</span> Reto C1 — C1 մարտահրավեր
            </h2>
            <p className="text-xs text-sky-200/80">
              Բարձր մակարդակի խոսակցական մարտահրավեր՝ բոլոր հիմնական կապակցիչների կիրառմամբ։
            </p>
          </div>

          {/* Prompt card */}
          <div className="bg-[#0b1a38] border border-orange-500/50 rounded-xl p-5 md:p-6 shadow-xl">
            <h3 className="text-base md:text-lg font-bold text-white mb-1">
              🇪🇸 {RETO_C1_DATA.promptEs}
            </h3>
            <p className="text-xs md:text-sm text-yellow-300 font-medium mb-4">
              🇦🇲 {RETO_C1_DATA.promptAm}
            </p>

            <div className="mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-sky-300 block mb-2">
                Պարտադիր կապակցիչներ (Conectores obligatorios):
              </span>
              <div className="flex flex-wrap gap-2">
                {RETO_C1_DATA.requiredConnectors.map((c, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-orange-500/20 border border-orange-500/40 text-orange-300 font-bold text-xs"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-sky-900/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-yellow-400 flex items-center gap-1.5">
                  <Award className="w-4 h-4" />
                  <span>✅ Respuesta modelo (Մոդելային պատասխան)</span>
                </span>
                <button
                  onClick={() => speakSpanish(RETO_C1_DATA.modelResponseEs)}
                  className="p-1.5 rounded-lg bg-sky-900/50 hover:bg-sky-800 text-sky-200 flex items-center gap-1 text-xs"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Լսել</span>
                </button>
              </div>

              <p className="text-sm md:text-base text-sky-100 leading-relaxed font-sans p-4 rounded-xl bg-[#07132b] border border-sky-900/80">
                {RETO_C1_DATA.modelResponseEs}
              </p>

              {/* Armenian Translation */}
              <div className="mt-4 pt-3 border-t border-sky-900/60">
                <button
                  onClick={() => toggleItemReveal('reto_c1')}
                  className="flex items-center gap-1.5 text-xs font-bold text-orange-400 hover:text-orange-300 mb-2"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>{isRevealed('reto_c1') ? 'Թաքցնել հայերեն թարգմանությունը' : 'Տեսնել հայերեն թարգմանությունը'}</span>
                </button>

                {isRevealed('reto_c1') && (
                  <p className="text-xs md:text-sm text-yellow-300 leading-relaxed font-medium p-4 rounded-xl bg-[#07132b] border border-yellow-400/30 animate-in fade-in">
                    🇦🇲 {RETO_C1_DATA.modelResponseAm}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
