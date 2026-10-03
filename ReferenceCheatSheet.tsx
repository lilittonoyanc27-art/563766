import React from 'react';
import { X, BookOpen, Volume2 } from 'lucide-react';
import { speakSpanish } from './audioUtils';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CONNECTOR_REFERENCE = [
  { es: 'Sin embargo', am: 'սակայն / այնուամենայնիվ', use: 'Contraste (Հակադրություն)', ex: 'Las redes son útiles. Sin embargo, crean dependencia.' },
  { es: 'No obstante', am: 'այնուամենայնիվ / չնայած դրան', use: 'Contraste (Sin embargo-ի հոմանիշ)', ex: 'No obstante, debemos tener cuidado.' },
  { es: 'Por eso', am: 'դրա համար / այդ պատճառով', use: 'Consecuencia (Հետևանք)', ex: 'Pasamos mucho tiempo con el móvil; por eso, ponemos límites.' },
  { es: 'Por lo tanto', am: 'հետևաբար', use: 'Consecuencia (Por eso-ի հոմանիշ)', ex: 'Por lo tanto, necesitamos descansar.' },
  { es: 'Además', am: 'բացի այդ', use: 'Añadir información (Լրացուցիչ տեղեկություն)', ex: 'Además, nos permite aprender.' },
  { es: 'Asimismo', am: 'ինչպես նաև / բացի այդ', use: 'Añadir información (Además-ի հոմանիշ)', ex: 'Asimismo, fomenta la comunicación.' },
  { es: 'Con tal de que (+ Subj.)', am: 'պայմանով, որ (+ Subjuntivo)', use: 'Condición (Պայման)', ex: 'Con tal de que no impidan tu trabajo.' },
  { es: 'Siempre que (+ Subj.)', am: 'պայմանով, որ (+ Subjuntivo)', use: 'Condición (Պայման)', ex: 'Siempre que no pierdas el tiempo.' },
  { es: 'Para que (+ Subj.)', am: 'որպեսզի (+ Subjuntivo)', use: 'Finalidad (Նպատակ)', ex: 'Para que no me distraiga constantemente.' },
  { es: 'De ahí que (+ Subj.)', am: 'այստեղից էլ այն, որ / դրա հետևանքով', use: 'Consecuencia + Subjuntivo', ex: 'De ahí que se sientan insatisfechas.' },
  { es: 'En definitiva', am: 'ի վերջո / ընդհանուր առմամբ', use: 'Conclusión (Եզրակացություն)', ex: 'En definitiva, todo depende del uso.' },
  { es: 'En conclusión', am: 'եզրափակելով', use: 'Conclusión (En definitiva-ի հոմանիշ)', ex: 'En conclusión, debemos ser responsables.' },
  { es: 'Aun así', am: 'նույնիսկ այդ դեպքում / այնուամենայնիվ', use: 'Concesión / Contraste', ex: 'Aun así, debemos aprender a controlarnos.' },
  { es: 'Por el contrario', am: 'ընդհակառակը', use: 'Oposición fuerte (Ուժեղ հակադրություն)', ex: 'Por el contrario, puede afectar la concentración.' },
  { es: 'De hecho', am: 'իրականում / փաստացի', use: 'Aclaración / Énfasis', ex: 'De hecho, son muy útiles para trabajar.' }
];

export default function ReferenceCheatSheet({ isOpen, onClose }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#070e1f]/85 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-[#0b1b3d] border border-sky-400/50 rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-sky-800/80 bg-[#07132b]">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-yellow-400" />
            <h3 className="text-base font-bold text-white">
              Կապակցիչների տեղեկատու (Guía de Conectores)
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-sky-400 hover:text-white hover:bg-sky-900/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content table */}
        <div className="p-4 overflow-y-auto space-y-2.5">
          {CONNECTOR_REFERENCE.map((item, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#07132b] border border-sky-900/80 hover:border-sky-600 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-yellow-300 text-sm">
                    {item.es}
                  </span>
                  <span className="text-sky-600">·</span>
                  <span className="text-xs text-orange-300 font-medium">
                    {item.am}
                  </span>
                  <button
                    onClick={() => speakSpanish(item.es)}
                    className="p-1 text-sky-400 hover:text-yellow-300 transition-colors"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="text-[11px] text-sky-300/80 mt-0.5">
                  Գործառույթ՝ <span className="text-sky-200 font-semibold">{item.use}</span>
                </div>
                <div className="text-xs text-sky-100 italic mt-1 bg-[#0b1a38] px-2 py-1 rounded border border-sky-950">
                  «{item.ex}»
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
