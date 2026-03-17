import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, ChevronDown, Sparkles, Calendar } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function SupervisorAdBrief() {
  const [step, setStep] = useState(1);
  const [goal, setGoal] = useState('');
  const [category, setCategory] = useState('');
  const [budget, setBudget] = useState(2500);
  const [language, setLanguage] = useState('DE');
  const [generateVideo, setGenerateVideo] = useState(false);

  const goals = ['Überbestände verkaufen', 'Neues Bundle', 'Saison-Promo'];
  const categories = ['Käse', 'Milch', 'Obst', 'PowerBar'];
  const languages = ['DE', 'FR', 'IT'];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <Link to="/supervisor-ad-home">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          </Link>
          <div className="text-center flex-1">
            <div className="text-sm text-gray-900">Neue Werbung</div>
            <div className="text-xs text-[#FF6600]">Schritt {step} von 3</div>
          </div>
          <div className="w-8" />
        </div>

        {/* Progress Bar */}
        <div className="bg-white px-6 py-3">
          <div className="flex gap-2">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`flex-1 h-2 rounded-full ${
                  s <= step ? 'bg-[#FF6600]' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="px-6 pt-6 space-y-6 pb-6">
          {/* Step 1: Goal */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              <div>
                <h2 className="text-xl text-gray-900 mb-2">Werbeziel auswählen</h2>
                <p className="text-sm text-gray-600">Was möchten Sie erreichen?</p>
              </div>

              <div className="space-y-3">
                {goals.map((g) => (
                  <button
                    key={g}
                    onClick={() => setGoal(g)}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                      goal === g
                        ? 'border-[#FF6600] bg-orange-50'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div className="text-sm text-gray-900">{g}</div>
                  </button>
                ))}
              </div>

              <button
                onClick={() => setStep(2)}
                disabled={!goal}
                className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Weiter
              </button>
            </motion.div>
          )}

          {/* Step 2: Category & Budget */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl text-gray-900 mb-2">Kategorie & Budget</h2>
                <p className="text-sm text-gray-600">Wählen Sie Produktkategorie</p>
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-2 block">Kategorie</label>
                <div className="flex gap-2 flex-wrap">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setCategory(cat)}
                      className={`px-4 py-2 rounded-full text-sm transition-all ${
                        category === cat
                          ? 'bg-[#FF6600] text-white'
                          : 'bg-white text-gray-700 border border-gray-300 hover:border-gray-400'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-2 block">
                  Budget: CHF {budget}
                </label>
                <input
                  type="range"
                  min="500"
                  max="5000"
                  step="100"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full accent-[#FF6600]"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>CHF 500</span>
                  <span>CHF 5'000</span>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl"
                >
                  Zurück
                </button>
                <button
                  onClick={() => setStep(3)}
                  disabled={!category}
                  className="flex-1 bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-4 rounded-xl disabled:opacity-50"
                >
                  Weiter
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Details */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-xl text-gray-900 mb-2">Kampagnendetails</h2>
                <p className="text-sm text-gray-600">Zeitraum und Sprache</p>
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-2 block">Datum</label>
                <button className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 flex items-center justify-between">
                  <span className="text-sm text-gray-900">15. März - 21. März</span>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-2 block">Sprache</label>
                <div className="flex gap-2">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => setLanguage(lang)}
                      className={`flex-1 py-3 rounded-xl text-sm transition-all ${
                        language === lang
                          ? 'bg-[#FF6600] text-white'
                          : 'bg-white text-gray-700 border border-gray-300'
                      }`}
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-gray-700 mb-2 block">KI-Prompt (optional)</label>
                <textarea
                  placeholder="z.B. Fondue-Set für 6, Genf Wochenende"
                  className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 text-sm text-gray-900 placeholder-gray-400 resize-none h-24"
                />
              </div>

              {/* Video Generation Toggle */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <div className="text-sm text-blue-900 font-medium">KI-Video generieren</div>
                      <div className="text-xs text-blue-700">4s cinematic commercial</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setGenerateVideo(!generateVideo)}
                    className={`w-12 h-7 rounded-full transition-all ${
                      generateVideo ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 bg-white rounded-full shadow-md transition-transform ${
                        generateVideo ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                {generateVideo && (
                  <p className="text-xs text-blue-700">
                    Erzeugt 4s Video mit Shopper-Dialog, AI-Agenten, Produktanimation & Metriken
                  </p>
                )}
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="text-sm text-purple-900 font-medium">Dynamic Vector Vorschlag</span>
                </div>
                <p className="text-xs text-purple-700">
                  Basierend auf Lagerbestand: "Käse-Überschuss, Fondue-Saison, lokale Präferenz"
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 bg-gray-200 text-gray-700 py-4 rounded-xl"
                >
                  Zurück
                </button>
                <Link to="/supervisor-ad-preview" className="flex-1">
                  <button className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-4 rounded-xl shadow-lg">
                    Generieren
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </MobileFrame>
  );
}