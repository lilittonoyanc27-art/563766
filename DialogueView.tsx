import React, { useState } from 'react';
import { DIALOGUE_LINES, DIALOGUE_TITLE } from './dialogueData';
import { Volume2, Eye, Languages, Sparkles, MessageCircle, Play, ArrowRight } from 'lucide-react';
import { speakSpanish } from './audioUtils';

interface Props {
  onGoToGames: () => void;
  onGoToMillionaire: () => void;
}

export default function DialogueView({ onGoToGames, onGoToMillionaire }: Props) {
  const [revealedIds, setRevealedIds] = useState<Record<number, boolean>>({});
  const [showAllArm, setShowAllArm] = useState<boolean>(false);

  const toggleLine = (id: number) => {
    setRevealedIds(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleAll = () => {
    const next = !showAllArm;
    setShowAllArm(next);
    if (!next) {
      setRevealedIds({});
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      {/* Title & Introduction Banner */}
      <div className="bg-gradient-to-r from-blue-950 via-blue-900 to-indigo-950 border border-sky-500/30 rounded-2xl p-6 md:p-8 shadow-2xl mb-8 relative overflow-hidden">
        {/* Glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-lg bg-orange-500/20 text-orange-300 border border-orange-500/40 text-xs font-bold uppercase tracking-wider">
              Հիմնական տեքստ · Texto Base
            </span>
            <span className="text-sky-300/80 text-xs">B2 / C1 Իրական երկխոսություն</span>
          </div>

          <h1 className="text-xl md:text-3xl font-extrabold text-white tracking-tight mb-2">
            🇪🇸 {DIALOGUE_TITLE.es}
          </h1>
          <h2 className="text-base md:text-xl font-bold text-amber-300 mb-4">
            🇦🇲 {DIALOGUE_TITLE.am}
          </h2>

          <p className="text-xs md:text-sm text-sky-100/90 max-w-3xl leading-relaxed mb-6">
            Կտտացրեք յուրաքանչյուր իսպաներեն արտահայտության վրա՝ հայերեն թարգմանությունը բացելու համար։
            Լսեք իրական արտասանությունը բարձրախոսի կոճակով։
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={toggleAll}
              className={`px-4 py-2.5 rounded-xl border text-xs md:text-sm font-bold transition-all flex items-center gap-2 ${
                showAllArm
                  ? 'bg-amber-400 text-blue-950 border-amber-300 shadow-lg shadow-amber-500/20'
                  : 'bg-sky-500/20 hover:bg-sky-500/30 text-sky-200 border-sky-400/40'
              }`}
            >
              <Languages className="w-4 h-4" />
              <span>{showAllArm ? 'Թաքցնել բոլոր թարգմանությունները' : 'Բացել բոլոր թարգմանությունները'}</span>
            </button>

            <button
              onClick={onGoToGames}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-400 hover:to-amber-400 text-slate-950 font-bold text-xs md:text-sm transition-all flex items-center gap-2 shadow-md shadow-orange-500/25"
            >
              <span>Անցնել 10 խաղերին</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Dialogue Conversation Flow */}
      <div className="space-y-4">
        {DIALOGUE_LINES.map(line => {
          const isLaura = line.speaker === 'Laura';
          const isArmVisible = showAllArm || !!revealedIds[line.id];

          return (
            <div
              key={line.id}
              className={`flex flex-col ${isLaura ? 'items-start' : 'items-end'} w-full`}
            >
              {/* Speaker identifier */}
              <div className="flex items-center gap-2 mb-1 px-2">
                <span
                  className={`text-xs font-bold uppercase tracking-wider ${
                    isLaura ? 'text-sky-300' : 'text-orange-300'
                  }`}
                >
                  {isLaura ? '👩 Laura / Լաուրա' : '👨 Diego / Դիեգո'}
                </span>
                {line.connectors?.map((c, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md bg-yellow-400/15 border border-yellow-400/40 text-[11px] font-semibold text-yellow-300"
                  >
                    կապակցիչ՝ {c}
                  </span>
                ))}
              </div>

              {/* Chat Bubble with interactive reveal on click */}
              <div
                onClick={() => toggleLine(line.id)}
                className={`max-w-2xl w-full p-4 md:p-5 rounded-2xl border transition-all cursor-pointer shadow-lg group relative ${
                  isLaura
                    ? 'bg-blue-950/80 border-sky-500/40 hover:border-sky-400 text-slate-100 rounded-tl-sm'
                    : 'bg-slate-900 border-orange-500/40 hover:border-orange-400 text-slate-100 rounded-tr-sm'
                }`}
              >
                {/* Spanish text */}
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm md:text-base font-semibold leading-relaxed group-hover:text-amber-200 transition-colors">
                    {line.textEs}
                  </p>

                  <div className="flex items-center gap-1 shrink-0 pt-0.5">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakSpanish(line.textEs);
                      }}
                      title="Լսել իսպաներեն արտասանությունը"
                      className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-amber-400/20 text-sky-300 hover:text-amber-300 transition-colors"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleLine(line.id);
                      }}
                      title="Բացել հայերեն թարգմանությունը"
                      className="p-1.5 rounded-lg bg-blue-900/60 hover:bg-amber-400/20 text-sky-300 hover:text-amber-300 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Hint if hidden */}
                {!isArmVisible && (
                  <div className="mt-2 flex items-center gap-1.5 text-[11px] text-sky-300/60 group-hover:text-amber-300 transition-colors">
                    <Eye className="w-3 h-3" />
                    <span>Կտտացրեք հայերեն թարգմանության համար</span>
                  </div>
                )}

                {/* Armenian translation reveal */}
                {isArmVisible && (
                  <div className="mt-3 pt-3 border-t border-sky-800/60 text-xs md:text-sm font-medium text-amber-200 leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                    🇦🇲 {line.textAm}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Action Footer */}
      <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 border border-sky-500/30 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div>
          <h3 className="text-base font-bold text-white">
            Պատրա՞ստ եք ստուգել ձեր գիտելիքները։
          </h3>
          <p className="text-xs text-sky-200/80 mt-0.5">
            Տեքստը կարդալուց հետո խաղացեք 10 վարժությունները կամ «Միլիոնատեր» խաղը։
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={onGoToGames}
            className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-400 text-slate-950 font-bold text-xs md:text-sm transition-all shadow-md shadow-orange-500/20"
          >
            🎮 10 Խաղեր
          </button>
          <button
            onClick={onGoToMillionaire}
            className="px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-blue-950 font-bold text-xs md:text-sm transition-all shadow-md shadow-amber-400/20"
          >
            💰 Միլիոնատեր
          </button>
        </div>
      </div>
    </div>
  );
}
