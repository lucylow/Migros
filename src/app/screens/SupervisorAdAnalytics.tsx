import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, TrendingUp, MousePointerClick, DollarSign, Users, Copy, Home, Target, BarChart3, User } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function SupervisorAdAnalytics() {
  const metrics = [
    { label: 'Klicks', value: '2.4k', icon: MousePointerClick, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Umsatz', value: 'CHF 18k', icon: DollarSign, color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Conversion', value: '14%', icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const topAds = [
    {
      title: 'Fondue-Abend für 6',
      ctr: '+18%',
      clicks: '2.4k',
      badge: 'Best Performer',
      image: 'https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Schweizer Käse-Festival',
      ctr: '+14%',
      clicks: '1.8k',
      badge: 'Aktiv',
      image: 'https://images.unsplash.com/photo-1629136563988-59570ae259d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMHdoZWVscyUyMHllbGxvd3xlbnwxfHx8fDE3NzM3NjAwMzV8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Wochenend-Special',
      ctr: '+20%',
      clicks: '3.1k',
      badge: 'Trending',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdpbmUlMjBib3R0bGV8ZW58MXx8fHwxNzQyNDE5NjIzfDA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

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
            <div className="text-sm text-gray-900">Kampagnen-Analytics</div>
            <div className="text-xs text-[#FF6600]">Letzte 7 Tage</div>
          </div>
          <div className="w-8" />
        </div>

        <div className="px-6 pt-6 space-y-6 pb-6">
          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-green-500 to-green-600 text-white rounded-2xl p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-6 h-6" />
              <span className="font-medium">Kampagne erfolgreich aktiviert!</span>
            </div>
            <p className="text-sm text-green-100">
              Ihre Werbung ist jetzt live und erreicht Kunden in der Migros App und Filiale
            </p>
          </motion.div>

          {/* CTR Chart */}
          <div className="bg-white rounded-2xl p-4 border border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-gray-900">Click-Through-Rate</h3>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+63%</span>
              </div>
            </div>
            
            {/* Simple Line Chart Visualization */}
            <div className="relative h-32">
              <svg viewBox="0 0 300 100" className="w-full h-full">
                <defs>
                  <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FF6600" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="#FF6600" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M 0 70 Q 50 65, 75 50 T 150 40 T 225 25 T 300 15"
                  fill="none"
                  stroke="#FF6600"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
                <path
                  d="M 0 70 Q 50 65, 75 50 T 150 40 T 225 25 T 300 15 L 300 100 L 0 100 Z"
                  fill="url(#chartGradient)"
                />
              </svg>
              <div className="absolute bottom-2 left-0 text-xs text-gray-500">4.2%</div>
              <div className="absolute bottom-2 right-0 text-xs text-[#FF6600] font-medium">6.8%</div>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-3">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
                className={`${metric.bg} rounded-xl p-3 border border-gray-200`}
              >
                <metric.icon className={`w-5 h-5 ${metric.color} mb-2`} />
                <div className="text-xs text-gray-600 mb-1">{metric.label}</div>
                <div className={`text-lg font-medium ${metric.color}`}>{metric.value}</div>
              </motion.div>
            ))}
          </div>

          {/* Top Performing Ads */}
          <div>
            <h3 className="text-lg text-gray-900 mb-3">Top-Performance Ads</h3>
            <div className="space-y-3">
              {topAds.map((ad, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white rounded-xl border border-gray-200 p-4"
                >
                  <div className="flex gap-3">
                    <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={ad.image}
                        alt={ad.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-sm text-gray-900">{ad.title}</h4>
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">
                          {ad.badge}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex gap-3 text-xs text-gray-600">
                          <span>CTR: <span className="text-[#FF6600] font-medium">{ad.ctr}</span></span>
                          <span>Klicks: <span className="text-gray-900">{ad.clicks}</span></span>
                        </div>
                        <button className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors">
                          <Copy className="w-4 h-4 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Insights */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-2xl p-4">
            <h3 className="text-sm text-purple-900 font-medium mb-3">KI-Insights</h3>
            <ul className="space-y-2 text-xs text-purple-800">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                <span>Wochenend-Placements zeigen 35% höhere Conversion als Werktags</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                <span>Fondue-Bundles performen 2x besser als Einzelprodukt-Ads</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-purple-600 rounded-full mt-1.5 flex-shrink-0" />
                <span>Empfehlung: Mehr Budget für In-Store Display (beste CTR)</span>
              </li>
            </ul>
          </div>

          {/* Dynamic Vector Badge */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="w-6 h-6 bg-[#FF6600] rounded-md flex items-center justify-center">
              <div className="w-3 h-3 border-2 border-white rounded-full" />
            </div>
            <span className="text-xs text-gray-500">Analytics powered by Dynamic Vector</span>
          </div>
        </div>

        {/* Bottom Nav */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
          <Link to="/supervisor-ad-home">
            <button className="flex flex-col items-center gap-1 text-gray-400">
              <Home className="w-6 h-6" />
              <span className="text-xs">Home</span>
            </button>
          </Link>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Target className="w-6 h-6" />
            <span className="text-xs">Promos</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-[#FF6600]">
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
