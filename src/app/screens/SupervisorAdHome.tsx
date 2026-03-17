import { MobileFrame } from '../components/MobileFrame';
import { TrendingUp, AlertTriangle, Target, Plus, Home, BarChart3, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function SupervisorAdHome() {
  const kpis = [
    { label: 'Umsatz heute', value: 'CHF 124k', icon: TrendingUp, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Promo-CTR', value: '4.2%', icon: Target, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Stockout-Alarm', value: 'Käse (-18%)', icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Link to="/supervisor-dashboard">
                <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
                  <ArrowLeft className="w-6 h-6 text-gray-700" />
                </button>
              </Link>
              <div className="w-10 h-10 bg-[#FF6600] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">M</span>
              </div>
              <div>
                <h1 className="text-sm text-gray-900">Migros Manager</h1>
                <div className="text-xs text-[#FF6600]">GenAI Werbung</div>
              </div>
            </div>
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 space-y-6 pb-6">
          {/* Greeting */}
          <div>
            <h2 className="text-2xl text-gray-900 mb-1">Guten Tag, Hans Müller</h2>
            <p className="text-sm text-gray-600">Filiale Genf Cornavin</p>
          </div>

          {/* KPI Cards */}
          <div className="space-y-3">
            {kpis.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${kpi.bg} rounded-2xl p-4 border border-gray-200`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`${kpi.bg} rounded-xl p-2`}>
                      <kpi.icon className={`w-5 h-5 ${kpi.color}`} />
                    </div>
                    <div>
                      <div className="text-xs text-gray-600">{kpi.label}</div>
                      <div className={`text-lg ${kpi.color}`}>{kpi.value}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Main CTA */}
          <Link to="/supervisor-ad-brief">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-[#FF6600] to-[#FF8533] text-white py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-center gap-3">
                <Plus className="w-6 h-6" />
                <span className="text-lg font-medium">Neue KI-Werbung erstellen</span>
              </div>
              <div className="text-xs text-orange-100 mt-1">Powered by Dynamic Vector</div>
            </motion.button>
          </Link>

          {/* Recent Activity */}
          <div>
            <h3 className="text-sm text-gray-700 mb-3">Aktuelle Kampagnen</h3>
            <div className="space-y-3">
              {[
                { title: 'Oster-Fondue Special', status: 'Aktiv', ctr: '+6.8%', color: 'text-green-600' },
                { title: 'Milchprodukte-Rabatt', status: 'Entwurf', ctr: '—', color: 'text-gray-500' },
              ].map((campaign, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="bg-white rounded-xl p-4 border border-gray-200"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-sm text-gray-900 mb-1">{campaign.title}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{campaign.status}</span>
                        <span className={`text-xs ${campaign.color}`}>{campaign.ctr}</span>
                      </div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dynamic Vector Badge */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <div className="w-6 h-6 bg-[#FF6600] rounded-md flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-full" />
            </div>
            <span className="text-xs text-gray-500">Powered by Dynamic Vector AI</span>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-[#FF6600]">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Target className="w-6 h-6" />
            <span className="text-xs">Promos</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <BarChart3 className="w-6 h-6" />
            <span className="text-xs">Analytics</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Profil</span>
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}