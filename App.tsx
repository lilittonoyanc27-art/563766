import React, { useState } from 'react';
import { GameTab } from './types';
import DialogueView from './DialogueView';
import Part1App from './Part1App';
import MillionaireApp from './MillionaireApp';
import ReferenceCheatSheet from './ReferenceCheatSheet';
import { BookOpen, Trophy, Gamepad2, Volume2, VolumeX, MessageSquareText } from 'lucide-react';
import { soundManager } from './audioUtils';

export default function App() {
  const [activeTab, setActiveTab] = useState<GameTab>('dialogue');
  const [showCheatSheet, setShowCheatSheet] = useState<boolean>(false);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundManager.enabled = next;
  };

  return (
    <div className="min-h-screen bg-[#070e1f] text-slate-100 flex flex-col selection:bg-orange-500/30 selection:text-yellow-200">
      {/* Top Bar following Top Bar Contract (3 zones) */}
      <header className="sticky top-0 z-40 bg-[#091530]/95 backdrop-blur-md border-b border-sky-800/50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
          {/* Zone 1: Single text element Brand */}
          <div className="flex items-center gap-2">
            <span className="text-base sm:text-lg font-black tracking-tight bg-gradient-to-r from-sky-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Español-Armenio
            </span>
          </div>

          {/* Zone 2: Navigation controls between Dialogue, Part 1 & Millionaire */}
          <nav className="flex items-center gap-1 sm:gap-1.5 p-1 bg-[#0b1b3d] border border-sky-700/40 rounded-xl overflow-x-auto">
            {/* Tab 1: Dialogue text */}
            <button
              onClick={() => setActiveTab('dialogue')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'dialogue'
                  ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white shadow-md shadow-sky-500/25'
                  : 'text-sky-200/80 hover:text-white hover:bg-sky-900/40'
              }`}
            >
              <MessageSquareText className="w-3.5 h-3.5" />
              <span>Տեքստ / Զրույց</span>
            </button>

            {/* Tab 2: 10 Games */}
            <button
              onClick={() => setActiveTab('part1')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'part1'
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 shadow-md shadow-orange-500/25'
                  : 'text-orange-200/80 hover:text-white hover:bg-orange-950/40'
              }`}
            >
              <Gamepad2 className="w-3.5 h-3.5" />
              <span>10 Խաղեր</span>
            </button>

            {/* Tab 3: Millionaire */}
            <button
              onClick={() => setActiveTab('millionaire')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap ${
                activeTab === 'millionaire'
                  ? 'bg-gradient-to-r from-yellow-400 to-amber-500 text-blue-950 shadow-md shadow-yellow-500/25'
                  : 'text-yellow-200/80 hover:text-white hover:bg-yellow-950/40'
              }`}
            >
              <Trophy className="w-3.5 h-3.5" />
              <span>Միլիոնատեր</span>
            </button>
          </nav>

          {/* Zone 3: Actions (Cheat sheet dictionary & audio toggle) */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowCheatSheet(true)}
              className="px-3 py-1.5 rounded-lg border border-sky-600/40 bg-[#0c1f46] hover:bg-[#10295d] text-xs font-semibold text-sky-200 hover:text-white flex items-center gap-1.5 transition-colors shadow-sm"
              title="Կապակցիչների տեղեկատու"
            >
              <BookOpen className="w-3.5 h-3.5 text-yellow-400" />
              <span className="hidden sm:inline">Կապակցիչներ</span>
            </button>

            <button
              onClick={toggleSound}
              className="p-2 rounded-lg border border-sky-800/60 bg-[#0c1f46] hover:bg-[#10295d] text-sky-300 hover:text-white transition-colors"
              title={soundEnabled ? 'Անջատել ձայնային էֆեկտները' : 'Միացնել ձայնային էֆեկտները'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-yellow-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-sky-500/60" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'dialogue' && (
          <DialogueView
            onGoToGames={() => setActiveTab('part1')}
            onGoToMillionaire={() => setActiveTab('millionaire')}
          />
        )}
        {activeTab === 'part1' && (
          <Part1App onGoToDialogue={() => setActiveTab('dialogue')} />
        )}
        {activeTab === 'millionaire' && <MillionaireApp />}
      </main>

      {/* Footer */}
      <footer className="border-t border-sky-900/60 bg-[#070e1f] py-4 px-4 text-center text-xs text-sky-300/70">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>Իսպաներեն-Հայերեն Ինտերակտիվ Ուսումնական Խաղեր · B2/C1 Práctica</span>
          <span className="text-yellow-400/90 font-medium">
            Առանց ժամանակային սահմանափակման (Sin límite de tiempo)
          </span>
        </div>
      </footer>

      {/* Cheat Sheet Modal */}
      <ReferenceCheatSheet
        isOpen={showCheatSheet}
        onClose={() => setShowCheatSheet(false)}
      />
    </div>
  );
}
