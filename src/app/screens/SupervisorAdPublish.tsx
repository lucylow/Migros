import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Check, Smartphone, Monitor, Calendar, Clock, Save, Rocket } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function SupervisorAdPublish() {
  const [placements, setPlacements] = useState({
    app: true,
    display: true,
    story: false,
  });

  const togglePlacement = (key: string) => {
    setPlacements((prev) => ({ ...prev, [key]: !prev[key as keyof typeof prev] }));
  };

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <Link to="/supervisor-ad-detail">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          </Link>
          <div className="text-center flex-1">
            <div className="text-sm text-gray-900">Veröffentlichen</div>
            <div className="text-xs text-[#FF6600]">Platzierung & Zeitplan</div>
          </div>
          <div className="w-8" />
        </div>

        <div className="px-6 pt-6 space-y-6 pb-6">
          {/* Ad Preview Small */}
          <div className="bg-white rounded-xl border border-gray-200 p-3 flex gap-3">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=400"
                alt="Ad"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-sm text-gray-900 mb-1">Fondue-Abend für 6!</h3>
              <p className="text-xs text-gray-600">Käse-Bundle mit 12% Rabatt</p>
            </div>
          </div>

          {/* Placements */}
          <div>
            <h2 className="text-lg text-gray-900 mb-3">Platzierungen auswählen</h2>
            <div className="space-y-3">
              <button
                onClick={() => togglePlacement('app')}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  placements.app
                    ? 'border-[#FF6600] bg-orange-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      placements.app ? 'bg-[#FF6600]' : 'bg-gray-100'
                    }`}>
                      <Smartphone className={`w-5 h-5 ${
                        placements.app ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-900">Migros App Home</div>
                      <div className="text-xs text-gray-600">Banner + Push</div>
                    </div>
                  </div>
                  {placements.app && (
                    <Check className="w-5 h-5 text-[#FF6600]" />
                  )}
                </div>
              </button>

              <button
                onClick={() => togglePlacement('display')}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  placements.display
                    ? 'border-[#FF6600] bg-orange-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      placements.display ? 'bg-[#FF6600]' : 'bg-gray-100'
                    }`}>
                      <Monitor className={`w-5 h-5 ${
                        placements.display ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-900">Genf Filiale Bildschirm</div>
                      <div className="text-xs text-gray-600">Digital Signage</div>
                    </div>
                  </div>
                  {placements.display && (
                    <Check className="w-5 h-5 text-[#FF6600]" />
                  )}
                </div>
              </button>

              <button
                onClick={() => togglePlacement('story')}
                className={`w-full p-4 rounded-xl border-2 transition-all ${
                  placements.story
                    ? 'border-[#FF6600] bg-orange-50'
                    : 'border-gray-200 bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      placements.story ? 'bg-[#FF6600]' : 'bg-gray-100'
                    }`}>
                      <Smartphone className={`w-5 h-5 ${
                        placements.story ? 'text-white' : 'text-gray-600'
                      }`} />
                    </div>
                    <div className="text-left">
                      <div className="text-sm text-gray-900">App Stories</div>
                      <div className="text-xs text-gray-600">Vertical Format</div>
                    </div>
                  </div>
                  {placements.story && (
                    <Check className="w-5 h-5 text-[#FF6600]" />
                  )}
                </div>
              </button>
            </div>
          </div>

          {/* Schedule */}
          <div>
            <h2 className="text-lg text-gray-900 mb-3">Zeitplan</h2>
            <div className="bg-white rounded-xl border-2 border-gray-200 p-4">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-5 h-5 text-[#FF6600]" />
                <div className="flex-1">
                  <div className="text-sm text-gray-900">15. März - 21. März</div>
                  <div className="text-xs text-gray-600">7 Tage Kampagne</div>
                </div>
                <button className="text-xs text-[#FF6600] underline">Ändern</button>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FF6600]" />
                <div className="flex-1">
                  <div className="text-sm text-gray-900">08:00 - 20:00</div>
                  <div className="text-xs text-gray-600">Öffnungszeiten</div>
                </div>
                <button className="text-xs text-[#FF6600] underline">Ändern</button>
              </div>
            </div>
          </div>

          {/* Budget Summary */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4">
            <h3 className="text-sm text-blue-900 font-medium mb-3">Budget-Zusammenfassung</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-800">Tagesbudget</span>
                <span className="text-blue-900 font-medium">CHF 357</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-800">Gesamtbudget (7 Tage)</span>
                <span className="text-blue-900 font-medium">CHF 2'500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-blue-800">Geschätzte Reichweite</span>
                <span className="text-blue-900 font-medium">12'000+ Kunden</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 py-4 rounded-xl flex items-center justify-center gap-2 hover:border-gray-300 transition-all">
              <Save className="w-5 h-5" />
              Entwurf speichern
            </button>
            <Link to="/supervisor-ad-analytics" className="flex-1">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-4 rounded-xl font-medium shadow-lg flex items-center justify-center gap-2"
              >
                <Rocket className="w-5 h-5" />
                Aktivieren
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </MobileFrame>
  );
}
