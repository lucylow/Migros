import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Edit3, Globe, Sparkles, RefreshCw } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function SupervisorAdDetail() {
  const [language, setLanguage] = useState('DE');
  const [editing, setEditing] = useState(false);

  const translations = {
    DE: {
      title: 'Fondue-Abend für 6!',
      text: 'Emmentaler + Gruyère + Baguette = 12% günstiger',
      cta: 'Jetzt bestellen',
    },
    FR: {
      title: 'Soirée fondue pour 6!',
      text: 'Emmental + Gruyère + Baguette = 12% moins cher',
      cta: 'Commander maintenant',
    },
    IT: {
      title: 'Serata fonduta per 6!',
      text: 'Emmental + Gruyère + Baguette = 12% più economico',
      cta: 'Ordina ora',
    },
  };

  const currentAd = translations[language as keyof typeof translations];

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
            <div className="text-sm text-gray-900">Werbung bearbeiten</div>
            <div className="text-xs text-[#FF6600]">Variante 1</div>
          </div>
          <button
            onClick={() => setEditing(!editing)}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <Edit3 className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        <div className="px-6 pt-6 space-y-6 pb-6">
          {/* Language Toggle */}
          <div className="flex gap-2">
            {['DE', 'FR', 'IT'].map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`flex-1 py-2 rounded-xl text-sm transition-all ${
                  language === lang
                    ? 'bg-[#FF6600] text-white'
                    : 'bg-white text-gray-700 border border-gray-300'
                }`}
              >
                <Globe className="w-4 h-4 inline mr-1" />
                {lang}
              </button>
            ))}
          </div>

          {/* Ad Preview */}
          <motion.div
            key={language}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl overflow-hidden border-2 border-[#FF6600] shadow-lg"
          >
            <div className="relative h-64 bg-gradient-to-br from-orange-100 to-orange-50">
              <img
                src="https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Fondue"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 right-3 bg-[#FF6600]/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3" />
                KI-generiert
              </div>
            </div>
            <div className="p-6 space-y-4">
              {editing ? (
                <>
                  <input
                    type="text"
                    defaultValue={currentAd.title}
                    className="w-full text-xl text-gray-900 border-2 border-gray-200 rounded-lg p-3"
                  />
                  <textarea
                    defaultValue={currentAd.text}
                    className="w-full text-sm text-gray-600 border-2 border-gray-200 rounded-lg p-3 resize-none"
                    rows={2}
                  />
                  <input
                    type="text"
                    defaultValue={currentAd.cta}
                    className="w-full text-sm border-2 border-gray-200 rounded-lg p-3"
                  />
                </>
              ) : (
                <>
                  <h2 className="text-xl text-gray-900">{currentAd.title}</h2>
                  <p className="text-sm text-gray-600 leading-relaxed">{currentAd.text}</p>
                  <button className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-3 rounded-xl font-medium">
                    {currentAd.cta}
                  </button>
                </>
              )}
            </div>
          </motion.div>

          {/* Regenerate Text */}
          <button className="w-full bg-white border-2 border-gray-200 rounded-xl p-4 flex items-center justify-center gap-2 text-gray-700 hover:border-[#FF6600] transition-all">
            <RefreshCw className="w-5 h-5" />
            Text neu generieren
          </button>

          {/* AI Reasoning Panel */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-600" />
              <h3 className="text-sm text-purple-900 font-medium">KI-Begründung</h3>
            </div>
            <div className="space-y-2 text-xs text-purple-800">
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                <p><strong>Shopper Agent:</strong> Fondue-Episoden zeigen 92% Erfolgsrate für 6-Personen-Bundles</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                <p><strong>Inventory Agent:</strong> Käse-Lagerbestand 18% über Soll, Priorität: Emmentaler</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                <p><strong>Pricing Agent:</strong> 12% Rabatt optimiert CTR ohne Margenverlust</p>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                <p><strong>Supervisor:</strong> Genf-Präferenz für Fondue-Wein-Kombos verifiziert</p>
              </div>
            </div>
          </div>

          {/* Performance Estimate */}
          <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4">
            <h3 className="text-sm text-green-900 font-medium mb-3">Geschätzte Performance</h3>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <div className="text-xs text-green-700">CTR</div>
                <div className="text-lg text-green-900 font-medium">+18%</div>
              </div>
              <div>
                <div className="text-xs text-green-700">Klicks</div>
                <div className="text-lg text-green-900 font-medium">2.4k</div>
              </div>
              <div>
                <div className="text-xs text-green-700">Umsatz</div>
                <div className="text-lg text-green-900 font-medium">CHF 18k</div>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <Link to="/supervisor-ad-publish">
            <button className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-4 rounded-xl font-medium shadow-lg">
              Weiter zur Veröffentlichung
            </button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
