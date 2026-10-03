import React, { useState } from 'react';
import {
  Volume2,
  VolumeX,
  Phone,
  Users,
  Percent,
  CheckCircle2,
  XCircle,
  RotateCcw,
  Eye,
  Languages,
  ArrowRight,
  Trophy,
  Sparkles,
} from 'lucide-react';
import { MILLIONAIRE_QUESTIONS, PRIZE_LADDER } from './millionaireData';
import { soundManager, speakSpanish } from './audioUtils';

export default function MillionaireApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [earnedPrize, setEarnedPrize] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  // Lifelines
  const [used5050, setUsed5050] = useState(false);
  const [hiddenOptions, setHiddenOptions] = useState<string[]>([]);
  const [usedAudience, setUsedAudience] = useState(false);
  const [audienceVotes, setAudienceVotes] = useState<Record<string, number> | null>(null);
  const [usedFriend, setUsedFriend] = useState(false);
  const [friendHint, setFriendHint] = useState<string | null>(null);

  // Reveal states (per user requirement: click on Spanish to reveal Armenian)
  const [showQuestionArm, setShowQuestionArm] = useState(false);
  const [showOptionsArm, setShowOptionsArm] = useState<Record<string, boolean>>({});
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [showLadderMobile, setShowLadderMobile] = useState(false);

  const currentQ = MILLIONAIRE_QUESTIONS[currentIndex];
  const isLastQuestion = currentIndex === MILLIONAIRE_QUESTIONS.length - 1;

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.enabled = next;
  };

  const handleSelectOption = (key: 'a' | 'b' | 'c' | 'd') => {
    if (isAnswered) return;
    setSelectedKey(key);
    setIsAnswered(true);

    const isCorrect = key === currentQ.correctAnswer;
    if (isCorrect) {
      soundManager.playCorrect();
      setCorrectCount(prev => prev + 1);
      const prize = PRIZE_LADDER[Math.min(currentIndex, PRIZE_LADDER.length - 1)];
      setEarnedPrize(prize);
    } else {
      soundManager.playWrong();
      // Per user prompt requirement: if wrong, continue anyway!
    }

    // Automatically reveal Armenian for question and choices upon answering
    setShowQuestionArm(true);
    setShowOptionsArm({ a: true, b: true, c: true, d: true });
  };

  const handleNextQuestion = () => {
    if (isLastQuestion) {
      soundManager.playMillionaireFanfare();
      setIsGameOver(true);
      return;
    }

    setCurrentIndex(prev => prev + 1);
    setSelectedKey(null);
    setIsAnswered(false);
    setShowQuestionArm(false);
    setShowOptionsArm({});
    setHiddenOptions([]);
    setAudienceVotes(null);
    setFriendHint(null);
  };

  const handleResetGame = () => {
    setCurrentIndex(0);
    setSelectedKey(null);
    setIsAnswered(false);
    setEarnedPrize(0);
    setCorrectCount(0);
    setIsGameOver(false);
    setUsed5050(false);
    setHiddenOptions([]);
    setUsedAudience(false);
    setAudienceVotes(null);
    setUsedFriend(false);
    setFriendHint(null);
    setShowQuestionArm(false);
    setShowOptionsArm({});
  };

  // Lifeline 50:50
  const handleUse5050 = () => {
    if (used5050 || isAnswered) return;
    soundManager.playLifeline();
    setUsed5050(true);

    const incorrectKeys = currentQ.options
      .map(o => o.key)
      .filter(k => k !== currentQ.correctAnswer);

    const shuffled = [...incorrectKeys].sort(() => 0.5 - Math.random());
    setHiddenOptions(shuffled.slice(0, 2));
  };

  // Lifeline Audience
  const handleUseAudience = () => {
    if (usedAudience || isAnswered) return;
    soundManager.playLifeline();
    setUsedAudience(true);

    const correct = currentQ.correctAnswer;
    const votes: Record<string, number> = { a: 0, b: 0, c: 0, d: 0 };
    const correctShare = Math.floor(65 + Math.random() * 20);
    votes[correct] = correctShare;
    let remaining = 100 - correctShare;

    const others = (['a', 'b', 'c', 'd'] as const).filter(k => k !== correct);
    const p1 = Math.floor(Math.random() * remaining);
    votes[others[0]] = p1;
    remaining -= p1;
    const p2 = Math.floor(Math.random() * remaining);
    votes[others[1]] = p2;
    votes[others[2]] = remaining - p2;

    setAudienceVotes(votes);
  };

  // Lifeline Friend Call
  const handleUseFriend = () => {
    if (usedFriend || isAnswered) return;
    soundManager.playLifeline();
    setUsedFriend(true);

    const correctText = currentQ.options.find(o => o.key === currentQ.correctAnswer);
    setFriendHint(
      `🇪🇸 Amigo: "Estoy casi seguro de que la opción correcta es la ${currentQ.correctAnswer.toUpperCase()}) ${correctText?.textEs}"\n🇦🇲 Ընկեր: «Համոզված եմ, որ ճիշտ տարբերակն է՝ ${currentQ.correctAnswer.toUpperCase()}) ${correctText?.textAm}»`
    );
  };

  const toggleOptionArm = (key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setShowOptionsArm(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleAllTranslations = () => {
    const nextState = !showQuestionArm;
    setShowQuestionArm(nextState);
    setShowOptionsArm({
      a: nextState,
      b: nextState,
      c: nextState,
      d: nextState
    });
  };

  return (
    <div className="min-h-[calc(100vh-4.5rem)] flex flex-col justify-between max-w-7xl mx-auto px-2 sm:px-4 py-4 md:py-6 relative select-none">
      {/* Studio Radial Background Spotlight */}
      <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_center,_#0f1738_0%,_#05091a_55%,_#02040c_100%)]" />

      {/* Top TV Studio Header: Lifelines & Status */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 bg-gradient-to-r from-[#070e28]/90 via-[#0a153a]/90 to-[#070e28]/90 border-2 border-[#1e3a8a] rounded-2xl p-3 sm:p-4 shadow-[0_0_30px_rgba(30,58,138,0.4)] backdrop-blur">
        {/* TV Show Logo & Question Badge */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e40af] via-[#0284c7] to-[#0f172a] border-2 border-[#60a5fa] flex items-center justify-center shadow-[0_0_15px_rgba(96,165,250,0.5)]">
              <span className="text-sm font-black text-amber-300 font-mono">
                {currentIndex + 1}
              </span>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm sm:text-base font-black tracking-wide bg-gradient-to-r from-amber-300 via-yellow-200 to-amber-400 bg-clip-text text-transparent uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                ¿Quién quiere ser millonario?
              </span>
            </div>
            <p className="text-xs text-sky-300 font-medium">
              Հարց {currentIndex + 1} / {MILLIONAIRE_QUESTIONS.length} · Խաղադրույք՝{' '}
              <span className="text-amber-400 font-bold font-mono text-sm tracking-wider">
                {PRIZE_LADDER[Math.min(currentIndex, PRIZE_LADDER.length - 1)].toLocaleString()} €
              </span>
            </p>
          </div>
        </div>

        {/* 3 Iconic Circular TV Show Lifelines (Comodines) */}
        <div className="flex items-center gap-3">
          {/* 50:50 Lifeline */}
          <button
            onClick={handleUse5050}
            disabled={used5050 || isAnswered}
            title="50:50 - Հեռացնել 2 սխալ պատասխան"
            className={`group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 transition-all flex items-center justify-center shadow-lg ${
              used5050
                ? 'border-slate-800 bg-[#060a1c] text-slate-600 cursor-not-allowed opacity-50'
                : 'border-[#38bdf8] bg-gradient-to-b from-[#1e3a8a] to-[#091133] hover:from-[#2563eb] hover:to-[#0f1d4f] text-amber-300 hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
            }`}
          >
            <span className="text-[11px] sm:text-xs font-black tracking-tighter">50:50</span>
            {used5050 && (
              <span className="absolute inset-0 flex items-center justify-center text-rose-500 font-black text-xl">✕</span>
            )}
          </button>

          {/* Ask the Audience Lifeline */}
          <button
            onClick={handleUseAudience}
            disabled={usedAudience || isAnswered}
            title="Լսարանի օգնություն (Consulta al público)"
            className={`group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 transition-all flex items-center justify-center shadow-lg ${
              usedAudience
                ? 'border-slate-800 bg-[#060a1c] text-slate-600 cursor-not-allowed opacity-50'
                : 'border-[#38bdf8] bg-gradient-to-b from-[#1e3a8a] to-[#091133] hover:from-[#2563eb] hover:to-[#0f1d4f] text-sky-200 hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
            }`}
          >
            <Users className="w-5 h-5 text-sky-300 group-hover:text-amber-300 transition-colors" />
            {usedAudience && (
              <span className="absolute inset-0 flex items-center justify-center text-rose-500 font-black text-xl">✕</span>
            )}
          </button>

          {/* Phone a Friend Lifeline */}
          <button
            onClick={handleUseFriend}
            disabled={usedFriend || isAnswered}
            title="Ընկերոջ հուշում (Llamada al amigo)"
            className={`group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full border-2 transition-all flex items-center justify-center shadow-lg ${
              usedFriend
                ? 'border-slate-800 bg-[#060a1c] text-slate-600 cursor-not-allowed opacity-50'
                : 'border-[#38bdf8] bg-gradient-to-b from-[#1e3a8a] to-[#091133] hover:from-[#2563eb] hover:to-[#0f1d4f] text-amber-300 hover:scale-105 shadow-[0_0_15px_rgba(56,189,248,0.4)]'
            }`}
          >
            <Phone className="w-4 h-4 text-amber-300 group-hover:text-yellow-200 transition-colors" />
            {usedFriend && (
              <span className="absolute inset-0 flex items-center justify-center text-rose-500 font-black text-xl">✕</span>
            )}
          </button>

          <div className="h-6 w-px bg-blue-900 mx-1 hidden sm:block" />

          {/* Translation and sound controls */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={toggleAllTranslations}
              title="Բացել / թաքցնել հայերեն թարգմանությունները"
              className="p-2 rounded-xl border border-sky-600/40 bg-[#0a1738] hover:bg-[#122659] text-sky-300 hover:text-white transition-colors"
            >
              <Languages className="w-4 h-4" />
            </button>

            <button
              onClick={toggleSound}
              title={soundEnabled ? 'Ձայնն անջատել' : 'Ձայնը միացնել'}
              className="p-2 rounded-xl border border-sky-600/40 bg-[#0a1738] hover:bg-[#122659] text-sky-300 hover:text-white transition-colors"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-amber-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-sky-700" />
              )}
            </button>

            <button
              onClick={() => setShowLadderMobile(prev => !prev)}
              className="lg:hidden px-2.5 py-1.5 rounded-xl border border-sky-600/40 bg-[#0a1738] text-xs font-bold text-amber-300"
            >
              {showLadderMobile ? 'Փակել' : '€ Սանդուղք'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Studio Arena: Question / Options / Ladder */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start flex-1">
        {/* Left 3 columns: Authentic TV Show Question & Hexagonal Options */}
        <div className="lg:col-span-3 flex flex-col justify-center gap-5">
          {/* Lifeline Modals */}
          {audienceVotes && (
            <div className="bg-gradient-to-b from-[#09153a] to-[#04091a] border-2 border-[#38bdf8] rounded-2xl p-4 shadow-[0_0_25px_rgba(56,189,248,0.3)] animate-in fade-in">
              <div className="flex items-center justify-between mb-3 border-b border-blue-900 pb-2">
                <span className="text-xs font-bold text-sky-300 flex items-center gap-2">
                  <Users className="w-4 h-4 text-sky-400" /> Լսարանի քվեարկության արդյունքներ (Votación del público)
                </span>
                <button
                  onClick={() => setAudienceVotes(null)}
                  className="text-xs text-sky-400 hover:text-white font-bold px-2 py-0.5"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-4 gap-3 text-center">
                {(['a', 'b', 'c', 'd'] as const).map(k => (
                  <div key={k} className="bg-[#060c22] rounded-xl p-2.5 border border-blue-900">
                    <span className="text-xs font-black text-amber-400 font-mono">{k.toUpperCase()}</span>
                    <div className="text-base font-black text-white font-mono">{audienceVotes[k]}%</div>
                    <div className="w-full bg-slate-900 h-2 rounded-full mt-1.5 overflow-hidden border border-blue-950">
                      <div
                        className="bg-gradient-to-r from-sky-400 to-blue-500 h-full rounded-full transition-all duration-700"
                        style={{ width: `${audienceVotes[k]}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {friendHint && (
            <div className="bg-gradient-to-b from-[#09153a] to-[#04091a] border-2 border-amber-400/80 rounded-2xl p-4 shadow-[0_0_25px_rgba(251,191,36,0.25)] animate-in fade-in">
              <div className="flex items-center justify-between mb-2 border-b border-blue-900 pb-2">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <Phone className="w-4 h-4 text-amber-400" /> Ընկերոջ հուշում (Llamada al amigo)
                </span>
                <button
                  onClick={() => setFriendHint(null)}
                  className="text-xs text-amber-300 hover:text-white font-bold px-2 py-0.5"
                >
                  ✕
                </button>
              </div>
              <p className="text-sm text-sky-100 whitespace-pre-line leading-relaxed font-sans">
                {friendHint}
              </p>
            </div>
          )}

          {/* Iconic Millionaire Question Bar with Horizontal Crossbars */}
          <div className="relative py-2 px-1">
            {/* Horizontal TV connecting beams extending left and right */}
            <div className="absolute top-1/2 left-0 w-4 h-1 bg-gradient-to-r from-transparent to-[#38bdf8] -translate-y-1/2 hidden md:block" />
            <div className="absolute top-1/2 right-0 w-4 h-1 bg-gradient-to-l from-transparent to-[#38bdf8] -translate-y-1/2 hidden md:block" />

            <div
              onClick={() => setShowQuestionArm(prev => !prev)}
              className="relative cursor-pointer group rounded-2xl border-2 border-[#38bdf8] bg-gradient-to-b from-[#0e1c45] via-[#070e28] to-[#040716] p-6 md:p-8 shadow-[0_0_25px_rgba(56,189,248,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.45)] hover:border-amber-400 transition-all text-center"
            >
              {/* Top and Bottom Metallic Trim */}
              <div className="absolute top-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#93c5fd] to-transparent" />
              <div className="absolute bottom-0 left-1/4 right-1/4 h-[2px] bg-gradient-to-r from-transparent via-[#93c5fd] to-transparent" />

              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="text-amber-400 font-bold uppercase tracking-widest font-mono">
                  ՀԱՐՑ {currentIndex + 1} · {currentQ.prizeAmount.toLocaleString()} €
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowQuestionArm(prev => !prev);
                    }}
                    className={`px-2.5 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      showQuestionArm
                        ? 'bg-amber-400 text-blue-950 border-amber-300 font-bold shadow-sm'
                        : 'bg-blue-950/90 text-sky-200 border-sky-600/50 hover:bg-blue-900 hover:text-amber-300'
                    }`}
                  >
                    <Languages className="w-3.5 h-3.5" />
                    <span>{showQuestionArm ? 'Թաքցնել' : 'Հարցի թարգմանություն'}</span>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      speakSpanish(currentQ.questionEs);
                    }}
                    title="Լսել իսպաներեն"
                    className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-amber-400/20 text-sky-300 hover:text-amber-300 transition-colors"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Spanish Question text (Pure crisp white in true TV show fashion) */}
              <h2 className="text-lg md:text-2xl font-bold text-white leading-relaxed tracking-tight group-hover:text-amber-100 transition-colors">
                {currentQ.questionEs}
              </h2>

              {/* Armenian Translation Reveal */}
              {showQuestionArm && (
                <div className="mt-4 pt-4 border-t border-blue-900/80 text-sm md:text-lg font-medium text-amber-300 leading-relaxed animate-in fade-in slide-in-from-top-2">
                  🇦🇲 {currentQ.questionAm}
                </div>
              )}
            </div>
          </div>

          {/* 4 Iconic Hexagonal TV Show Options (A, B, C, D) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentQ.options.map(opt => {
              const isHidden = hiddenOptions.includes(opt.key);
              if (isHidden) {
                return (
                  <div
                    key={opt.key}
                    className="h-20 rounded-xl border border-dashed border-blue-950 bg-[#030612]/60 flex items-center justify-center text-blue-900 text-xs font-mono"
                  >
                    50:50 — Տարբերակը հեռացված է
                  </div>
                );
              }

              const isSelected = selectedKey === opt.key;
              const isCorrectAnswer = opt.key === currentQ.correctAnswer;
              const isArmVisible = showOptionsArm[opt.key] || showQuestionArm;

              // Classic TV Show state styles:
              // 1. Default: Deep metallic dark navy with cyan-silver border
              let containerStyle =
                'border-2 border-[#1e40af] bg-gradient-to-b from-[#0b1638] via-[#050b20] to-[#020612] hover:border-[#38bdf8] hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] text-white';
              let letterStyle = 'text-amber-400 font-black';

              if (isAnswered) {
                if (isCorrectAnswer) {
                  // The legendary Millionaire Glowing Green
                  containerStyle =
                    'border-2 border-emerald-400 bg-gradient-to-r from-emerald-700 via-green-600 to-emerald-700 text-slate-950 font-black shadow-[0_0_30px_rgba(34,197,94,0.8)] animate-pulse';
                  letterStyle = 'text-slate-950 font-black';
                } else if (isSelected) {
                  // The legendary Millionaire Wrong Red
                  containerStyle =
                    'border-2 border-rose-500 bg-gradient-to-r from-rose-800 via-red-700 to-rose-800 text-white font-black shadow-[0_0_25px_rgba(239,68,68,0.7)]';
                  letterStyle = 'text-yellow-200 font-black';
                } else {
                  containerStyle = 'border-2 border-slate-900 bg-[#020510] opacity-40 text-slate-500';
                  letterStyle = 'text-slate-600';
                }
              } else if (isSelected) {
                // The legendary Millionaire Final Answer Glowing Orange/Amber
                containerStyle =
                  'border-2 border-amber-300 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 text-slate-950 font-black shadow-[0_0_30px_rgba(245,158,11,0.8)]';
                letterStyle = 'text-slate-950 font-black';
              }

              return (
                <div
                  key={opt.key}
                  className={`relative p-4 rounded-xl transition-all flex flex-col justify-between min-h-[96px] shadow-lg group ${containerStyle}`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div
                      onClick={() => handleSelectOption(opt.key)}
                      className="flex items-start gap-3 flex-1 cursor-pointer"
                      title={isAnswered ? '' : 'Կտտացրեք՝ ընտրելու որպես պատասխան'}
                    >
                      {/* Iconic Orange Letter Badge */}
                      <span className={`text-base sm:text-lg font-mono tracking-wider shrink-0 ${letterStyle}`}>
                        {opt.key.toUpperCase()}:
                      </span>

                      {/* Spanish option text */}
                      <div className="flex-1">
                        <p className={`text-sm sm:text-base font-semibold leading-snug ${isAnswered && isCorrectAnswer ? 'text-slate-950 font-extrabold' : 'text-slate-100 group-hover:text-amber-200'}`}>
                          {opt.textEs}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons on the right: Dedicated Translation button + Audio */}
                    <div className="flex items-center gap-1.5 shrink-0 pt-0.5" onClick={(e) => e.stopPropagation()}>
                      {/* Dedicated Translation Button */}
                      <button
                        type="button"
                        onClick={(e) => toggleOptionArm(opt.key, e)}
                        title={isArmVisible ? 'Թաքցնել հայերեն թարգմանությունը' : 'Տեսնել հայերեն թարգմանությունը'}
                        className={`px-2 py-1 rounded-lg border text-xs font-semibold flex items-center gap-1 transition-all ${
                          isArmVisible
                            ? 'bg-amber-400 text-blue-950 border-amber-300 font-bold shadow-sm'
                            : 'bg-blue-950/90 text-sky-200 border-sky-600/50 hover:bg-blue-900 hover:text-amber-300'
                        }`}
                      >
                        <Languages className="w-3.5 h-3.5" />
                        <span className="text-[11px]">{isArmVisible ? 'Հայերեն' : 'Թարգմանել'}</span>
                      </button>

                      {/* Speech button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakSpanish(opt.textEs);
                        }}
                        title="Լսել տարբերակը"
                        className="p-1.5 rounded-lg bg-blue-950/80 border border-sky-800/60 text-sky-400 hover:text-amber-300 transition-colors"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Armenian translation row (clicking inside doesn't select answer) */}
                  {isArmVisible && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className={`mt-2.5 pt-2.5 border-t border-blue-900/60 text-xs sm:text-sm font-medium leading-snug animate-in fade-in cursor-default ${
                        isAnswered && isCorrectAnswer ? 'text-slate-900 font-bold' : 'text-amber-300'
                      }`}
                    >
                      🇦🇲 {opt.textAm}
                    </div>
                  )}

                  {/* Selection Click Bar if not answered yet */}
                  {!isAnswered && (
                    <div
                      onClick={() => handleSelectOption(opt.key)}
                      className="mt-2 pt-2 border-t border-blue-950/60 flex items-center justify-between text-[11px] text-sky-400/80 hover:text-amber-300 cursor-pointer transition-colors"
                    >
                      <span className="font-mono text-amber-400/80">Տարբերակ {opt.key.toUpperCase()}</span>
                      <span className="font-semibold underline decoration-sky-600/40">Ընտրել որպես պատասխան ➔</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Feedback & Continue Action (Player continues even if incorrect!) */}
          {isAnswered && (
            <div className="mt-2 p-5 rounded-2xl border-2 border-[#38bdf8] bg-gradient-to-r from-[#071333] via-[#091b48] to-[#071333] shadow-[0_0_30px_rgba(56,189,248,0.3)] animate-in fade-in">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  {selectedKey === currentQ.correctAnswer ? (
                    <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 border-2 border-emerald-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(52,211,153,0.5)]">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-rose-500/20 text-rose-400 border-2 border-rose-400 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(244,63,94,0.5)]">
                      <XCircle className="w-6 h-6" />
                    </div>
                  )}

                  <div>
                    <h3 className="text-base sm:text-lg font-black text-white">
                      {selectedKey === currentQ.correctAnswer ? (
                        <span className="text-emerald-400 tracking-wide">
                          ¡RESPUESTA CORRECTA! ՃԻՇՏ Է (+{currentQ.prizeAmount.toLocaleString()} €)
                        </span>
                      ) : (
                        <span className="text-amber-400 tracking-wide">
                          Ճիշտ պատասխանն էր՝ {currentQ.correctAnswer.toUpperCase()}) {currentQ.options.find(o => o.key === currentQ.correctAnswer)?.textEs}
                        </span>
                      )}
                    </h3>
                    <p className="text-xs sm:text-sm text-sky-100 mt-1 leading-relaxed">
                      {currentQ.explanationEs}
                    </p>
                    <p className="text-xs sm:text-sm text-amber-300 mt-1 leading-relaxed font-medium">
                      🇦🇲 {currentQ.explanationAm}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleNextQuestion}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-black text-sm flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all shrink-0 cursor-pointer uppercase tracking-wider"
                >
                  <span>{isLastQuestion ? 'Ավարտել' : 'Շարունակել (Հաջորդը)'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right 1 column: Authentic Millionaire Money Ladder */}
        <div className={`lg:block ${showLadderMobile ? 'block' : 'hidden'} bg-gradient-to-b from-[#081230] to-[#04091a] border-2 border-[#1e3a8a] rounded-2xl p-4 shadow-[0_0_25px_rgba(30,58,138,0.5)]`}>
          <div className="flex items-center justify-between border-b-2 border-blue-900 pb-3 mb-3">
            <div className="flex items-center gap-2 text-xs font-black text-amber-400 tracking-widest uppercase">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>ՄՐՑԱՆԱԿԱՅԻՆ ՍԱՆԴՈՒՂՔ</span>
            </div>
            <span className="text-xs font-mono text-amber-300 font-black">
              {earnedPrize.toLocaleString()} €
            </span>
          </div>

          <div className="space-y-1 font-mono">
            {[...MILLIONAIRE_QUESTIONS].reverse().map((q, revIdx) => {
              const actualIdx = MILLIONAIRE_QUESTIONS.length - 1 - revIdx;
              const isCurrent = actualIdx === currentIndex;
              const isPast = actualIdx < currentIndex;
              const isMilestone = q.prizeAmount === 5000 || q.prizeAmount === 100000 || q.prizeAmount === 1000000;

              // Authentic TV Show ladder rules:
              // - Milestones (5,000, 100,000, 1,000,000) are WHITE text
              // - Standard questions are ORANGE text
              // - Current question is in glowing ORANGE/GOLD solid background with BLACK text
              let rowStyle = 'text-[#ea580c] hover:text-amber-300';
              if (isMilestone) {
                rowStyle = 'text-white font-black';
              }
              if (isPast) {
                rowStyle = 'text-emerald-400 font-bold';
              }
              if (isCurrent) {
                rowStyle =
                  'bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black rounded-lg shadow-[0_0_15px_rgba(245,158,11,0.6)] scale-[1.03]';
              }

              return (
                <div
                  key={q.id}
                  onClick={() => {
                    setCurrentIndex(actualIdx);
                    setSelectedKey(null);
                    setIsAnswered(false);
                    setShowQuestionArm(false);
                    setShowOptionsArm({});
                  }}
                  className={`flex items-center justify-between px-3 py-1.5 text-xs transition-all cursor-pointer ${rowStyle}`}
                >
                  <span className="flex items-center gap-2 font-bold">
                    <span className="w-5 text-right">{actualIdx + 1}</span>
                    <span className={isMilestone ? 'text-amber-400' : 'opacity-60'}>◆</span>
                    <span>Հարց {q.originalNumber}</span>
                  </span>
                  <span className="font-bold tracking-wider">{q.prizeAmount.toLocaleString()} €</span>
                </div>
              );
            })}
          </div>

          <div className="mt-4 pt-3 border-t border-blue-900 text-center">
            <button
              onClick={handleResetGame}
              className="text-xs text-sky-400 hover:text-amber-300 flex items-center justify-center gap-1.5 mx-auto transition-colors font-bold uppercase tracking-wider"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Սկսել նորից (Reiniciar)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Game Over Screen */}
      {isGameOver && (
        <div className="fixed inset-0 z-50 bg-[#020512]/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gradient-to-b from-[#0a1844] to-[#04081c] border-2 border-amber-400 rounded-3xl max-w-lg w-full p-6 md:p-8 text-center shadow-[0_0_50px_rgba(251,191,36,0.4)] relative">
            <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-500 via-yellow-300 to-amber-500 text-slate-950 flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(245,158,11,0.6)]">
              <Trophy className="w-10 h-10" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-white mb-2 uppercase tracking-wide">
              ¡ENHORABUENA! ՇՆՈՐՀԱՎՈՐՈՒՄ ԵՆՔ։
            </h2>
            <p className="text-sm text-sky-200 mb-6">
              Դուք անցաք բոլոր 19 իրավիճակային հարցերը և ձեռք բերեցիք կարևոր իսպաներեն հմտություններ։
            </p>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-[#050c26] rounded-2xl p-4 border border-blue-900">
                <span className="text-xs text-sky-300 block mb-1">Ճիշտ պատասխաններ</span>
                <span className="text-2xl font-black text-amber-300 font-mono">
                  {correctCount} / {MILLIONAIRE_QUESTIONS.length}
                </span>
              </div>
              <div className="bg-[#050c26] rounded-2xl p-4 border border-blue-900">
                <span className="text-xs text-sky-300 block mb-1">Ընդհանուր շահում</span>
                <span className="text-2xl font-black text-amber-400 font-mono">
                  {earnedPrize.toLocaleString()} €
                </span>
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={handleResetGame}
                className="flex-1 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 font-black text-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.5)] hover:scale-105 uppercase tracking-wider"
              >
                Խաղալ նորից (Jugar de nuevo)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
