import { MobileFrame } from '../components/MobileFrame';
import { Search, Mic, Scan, List, ShoppingBag, Tag, Home as HomeIcon, Compass, ShoppingCart, Sparkles, User, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function Home() {
  const bundles = [
    {
      title: 'Fondue Night for 4–6',
      description: 'Calculated from your past orders and today\'s stock',
      tag: 'Bundle · Saves 12% vs buying separately',
      image: 'https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=400',
      link: '/fondue-bundle',
    },
    {
      title: 'Weekly family staples',
      description: 'Essentials for your household of 3',
      tag: 'Bundle · Based on your routine',
      image: 'https://images.unsplash.com/photo-1516039151472-959504eb759c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9jZXJ5JTIwc2hvcHBpbmclMjBiYXNrZXQlMjBvcmFuZ2V8ZW58MXx8fHwxNzczNzYwMDMwfDA&ixlib=rb-4.1.0&q=80&w=400',
      link: '/home',
    },
    {
      title: 'Veggie Friday dinner',
      description: 'Fresh ingredients for tonight',
      tag: 'Bundle · Seasonal picks',
      image: 'https://images.unsplash.com/photo-1768850418251-17480117ac9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1pbGslMjBib3R0bGUlMjBvcmdhbmljfGVufDF8fHx8MTc3Mzc2MDAzMXww&ixlib=rb-4.1.0&q=80&w=400',
      link: '/home',
    },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gray-50">
        {/* App bar */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs">M</span>
            </div>
            <div>
              <div className="text-sm text-gray-900">Migros</div>
              <div className="text-xs text-orange-600">Dynamic Vector</div>
            </div>
          </div>
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-600" />
          </div>
        </div>

        <div className="px-6 pt-6 space-y-6">
          {/* In-store mode banner */}
          <Link to="/in-store">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-4 flex items-center gap-3 shadow-lg"
            >
              <MapPin className="w-6 h-6 flex-shrink-0" />
              <div className="flex-1">
                <div className="text-sm mb-0.5">You're near Migros Geneva Cornavin</div>
                <div className="text-xs text-blue-100">Switch to In-Store Mode?</div>
              </div>
              <div className="bg-white/20 rounded-full px-3 py-1 text-xs">
                Try it
              </div>
            </motion.div>
          </Link>

          {/* Search bar */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link to="/search-active">
              <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 p-4 flex items-center gap-3 hover:border-orange-300 transition-colors">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Describe what you need… ('fondue for 6 on Friday')"
                  className="flex-1 outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                  readOnly
                />
                <Mic className="w-5 h-5 text-orange-500" />
              </div>
            </Link>

            {/* Language chips */}
            <div className="flex gap-2 mt-3">
              {['DE', 'FR', 'IT', 'EN'].map((lang, i) => (
                <button
                  key={lang}
                  className={`px-3 py-1 rounded-full text-xs ${
                    i === 3
                      ? 'bg-orange-500 text-white'
                      : 'bg-white text-gray-600 border border-gray-300'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Smart bundles */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Smart bundles for you
              </h2>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 -mx-6 px-6 scrollbar-hide">
              {bundles.map((bundle, index) => (
                <Link key={index} to={bundle.link}>
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-64 bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 flex-shrink-0 hover:shadow-md transition-shadow"
                  >
                    <div className="h-40 bg-gradient-to-br from-orange-100 to-orange-50 relative overflow-hidden">
                      <img
                        src={bundle.image}
                        alt={bundle.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-gray-900">{bundle.title}</h3>
                      <p className="text-xs text-gray-600">{bundle.description}</p>
                      <div className="bg-orange-50 text-orange-700 text-xs px-2 py-1 rounded-full inline-block">
                        {bundle.tag}
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick actions */}
          <div>
            <h2 className="text-sm text-gray-600 mb-3">Quick actions</h2>
            <div className="grid grid-cols-4 gap-4">
              {[
                { icon: Scan, label: 'Scan', color: 'text-blue-600', bg: 'bg-blue-100' },
                { icon: List, label: 'My lists', color: 'text-green-600', bg: 'bg-green-100' },
                { icon: ShoppingBag, label: 'Orders', color: 'text-purple-600', bg: 'bg-purple-100' },
                { icon: Tag, label: 'Deals', color: 'text-red-600', bg: 'bg-red-100' },
              ].map((action) => (
                <button
                  key={action.label}
                  className="flex flex-col items-center gap-2 p-4 bg-white rounded-2xl hover:bg-gray-50 transition-colors"
                >
                  <div className={`${action.bg} rounded-xl p-3`}>
                    <action.icon className={`w-6 h-6 ${action.color}`} />
                  </div>
                  <span className="text-xs text-gray-700">{action.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
          <button className="flex flex-col items-center gap-1 text-orange-500">
            <HomeIcon className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <Compass className="w-6 h-6" />
            <span className="text-xs">Browse</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <ShoppingCart className="w-6 h-6" />
            <span className="text-xs">Cart</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400 relative">
            <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <Sparkles className="w-6 h-6" />
            <span className="text-xs">Vector</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-gray-400">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </div>
    </MobileFrame>
  );
}