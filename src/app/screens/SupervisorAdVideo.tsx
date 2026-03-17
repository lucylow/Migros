import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Play, Download, Share2, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import videoGif from 'figma:asset/ccbcc72e157f3c5a443835191f8ae3e994ccd451.png';

export function SupervisorAdVideo() {
  const [generating, setGenerating] = useState(true);
  const [progress, setProgress] = useState(0);
  const [gifKey, setGifKey] = useState(0);

  useEffect(() => {
    if (generating) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setGenerating(false), 500);
            return 100;
          }
          return prev + 2;
        });
      }, 80);
      return () => clearInterval(interval);
    }
  }, [generating]);

  const specs = [
    'Cinematic zoom durch Migros-Gang',
    'Kundin spricht "Fondue-Set für 6, Freitag Genf"',
    '4 AI-Agenten Orbs mit Partikeln',
    'Holografische Produkt-Animation',
    'Metriken Overlay: 23% Umsatz, CHF 9.5M ROI',
    'Qdrant Dynamic Vector Branding',
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <Link to="/supervisor-ad-preview">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          </Link>
          <div className="text-center flex-1">
            <div className="text-sm text-gray-900">KI-Video Ad</div>
            <div className="text-xs text-[#FF6600]">4s Cinematic Commercial</div>
          </div>
          <div className="w-8" />
        </div>

        {generating ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 pt-12 space-y-6"
          >
            {/* Generation Status */}
            <div className="text-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center"
              >
                <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </motion.div>
              <h3 className="text-xl text-gray-900 mb-2">KI-Video wird generiert...</h3>
              <p className="text-sm text-gray-600">Dynamic Vector erstellt Ihr cinematic Ad</p>
            </div>

            {/* Progress Bar */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-700">Fortschritt</span>
                <span className="text-sm text-[#FF6600] font-medium">{progress}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#FF6600] to-[#FF8533]"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>

            {/* Generation Steps */}
            <div className="space-y-3">
              {[
                { label: 'Supermarkt-Szene rendern', done: progress > 20 },
                { label: 'Shopper-Dialog synchronisieren', done: progress > 40 },
                { label: 'AI-Agenten animieren', done: progress > 60 },
                { label: 'Produkt-Hologramme erstellen', done: progress > 80 },
                { label: 'Metriken & Branding hinzufügen', done: progress > 95 },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-4 border-2 transition-all ${
                    step.done ? 'border-green-300 bg-green-50' : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      step.done ? 'bg-green-500' : 'bg-gray-300'
                    }`}>
                      {step.done ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : (
                        <div className="w-2 h-2 bg-white rounded-full" />
                      )}
                    </div>
                    <span className={`text-sm ${
                      step.done ? 'text-green-900' : 'text-gray-600'
                    }`}>
                      {step.label}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Tech Badge */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-purple-900 font-medium">
                  Powered by Dynamic Vector + Qdrant
                </span>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="space-y-6"
          >
            {/* Success Message */}
            <div className="px-6 pt-6">
              <div className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-1">
                  <Check className="w-6 h-6" />
                  <span className="font-medium">Video erfolgreich generiert!</span>
                </div>
                <p className="text-sm text-green-100">
                  Ihr 4s cinematic Ad ist bereit zur Veröffentlichung
                </p>
              </div>
            </div>

            {/* Video Preview */}
            <div className="px-6">
              <div className="bg-black rounded-2xl overflow-hidden border-2 border-[#FF6600] shadow-2xl relative">
                <img
                  src={videoGif}
                  alt="Video Preview"
                  className="w-full aspect-video object-cover"
                  key={gifKey}
                />
                
                {/* Duration Badge */}
                <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                  4s
                </div>

                {/* Subtitle Preview */}
                <div className="absolute bottom-3 left-3 right-3 bg-black/80 backdrop-blur-sm text-white text-xs px-3 py-2 rounded-lg text-center">
                  Fondue-Set für 6, Freitag Genf
                </div>

                {/* Replay button when playing */}
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 4 }}
                  onClick={() => setGifKey(prev => prev + 1)}
                  className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1.5 rounded-full hover:bg-white transition-all flex items-center gap-1"
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  Wiederholen
                </motion.button>
              </div>

              {/* Video Info */}
              <div className="mt-4 bg-white rounded-xl p-4 border border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-xs text-gray-600">Dauer</div>
                    <div className="text-sm text-gray-900 font-medium">4s</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Format</div>
                    <div className="text-sm text-gray-900 font-medium">16:9</div>
                  </div>
                  <div>
                    <div className="text-xs text-gray-600">Sprache</div>
                    <div className="text-sm text-gray-900 font-medium">DE</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Specs */}
            <div className="px-6">
              <h3 className="text-sm text-gray-900 font-medium mb-3">Video-Elemente</h3>
              <div className="bg-white rounded-xl border border-gray-200 p-4 space-y-2">
                {specs.map((spec, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-xs text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Agents Used */}
            <div className="px-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <h3 className="text-sm text-purple-900 font-medium">AI-Agenten im Video</h3>
                </div>
                <div className="grid grid-cols-4 gap-2">
                  {['Shopper', 'Inventory', 'Pricing', 'Supervisor'].map((agent, index) => (
                    <div key={index} className="bg-white/60 rounded-lg p-2 text-center">
                      <div className="w-8 h-8 mx-auto mb-1 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
                      <div className="text-xs text-purple-900">{agent}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="px-6 space-y-3 pb-6">
              <div className="grid grid-cols-2 gap-3">
                <button className="bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 hover:border-gray-300 transition-all">
                  <Download className="w-5 h-5" />
                  <span className="text-sm">Download</span>
                </button>
                <button className="bg-white border-2 border-gray-200 text-gray-700 py-3 rounded-xl flex items-center justify-center gap-2 hover:border-gray-300 transition-all">
                  <Share2 className="w-5 h-5" />
                  <span className="text-sm">Teilen</span>
                </button>
              </div>

              <Link to="/supervisor-ad-publish">
                <button className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-4 rounded-xl font-medium shadow-lg">
                  Kampagne erstellen
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </MobileFrame>
  );
}