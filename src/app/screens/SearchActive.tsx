import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Search, ShoppingCart, Package, DollarSign, Sparkles, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { BottomNav } from '../components/BottomNav';

export function SearchActive() {
  const [query, setQuery] = useState('fondue for 6 on Friday');
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const suggestions = [
    {
      title: 'Fondue Night Bundle for 6',
      description: 'Complete fondue ingredients optimized for Friday availability',
      items: 8,
      price: 'CHF 47.80',
      savings: 'Save CHF 6.20',
      tag: 'Perfect Match',
      image: 'https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=400',
      link: '/fondue-bundle',
    },
    {
      title: 'Swiss Cheese Selection (Alternative)',
      description: 'Similar cheeses if Gruyère is out of stock',
      items: 5,
      price: 'CHF 38.50',
      savings: '',
      tag: 'Backup Option',
      image: 'https://images.unsplash.com/photo-1629136563988-59570ae259d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMHdoZWVscyUyMHllbGxvd3xlbnwxfHx8fDE3NzM3NjAwMzV8MA&ixlib=rb-4.1.0&q=80&w=400',
      link: '/home',
    },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center gap-3">
            <Link to="/home">
              <button className="p-1 hover:bg-gray-100 rounded-full">
                <ArrowLeft className="w-6 h-6 text-gray-700" />
              </button>
            </Link>
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-100 rounded-xl outline-none text-gray-900 placeholder-gray-500"
                placeholder="Describe what you need..."
                autoFocus
              />
            </div>
          </div>
        </div>

        {/* Searching state */}
        {isSearching && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-6 py-8"
          >
            <div className="bg-white rounded-2xl p-6 text-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 mx-auto mb-4 border-4 border-orange-500 border-t-transparent rounded-full"
              />
              <h3 className="text-gray-900 mb-2">Searching 50,000+ products...</h3>
              <p className="text-sm text-gray-600">Using BM42 hybrid vector search</p>
            </div>
          </motion.div>
        )}

        {/* Results */}
        {!isSearching && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Search insights */}
            <div className="px-6 pt-6">
              <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 text-white">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-medium">4 AI agents analyzed your request</h3>
                </div>
                <p className="text-sm text-orange-100">
                  Shopper, Inventory, Pricing, and Supervisor worked together to create personalized bundles
                </p>
              </div>
            </div>

            {/* Suggestions */}
            <div className="px-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-5 h-5 text-orange-500" />
                <h2 className="text-lg text-gray-900">Suggested bundles</h2>
              </div>

              {suggestions.map((suggestion, index) => (
                <Link key={index} to={suggestion.link}>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex gap-4 p-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={suggestion.image}
                          alt={suggestion.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="text-gray-900 leading-tight">{suggestion.title}</h3>
                          {index === 0 && (
                            <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full whitespace-nowrap">
                              {suggestion.tag}
                            </div>
                          )}
                        </div>
                        <p className="text-xs text-gray-600">{suggestion.description}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="text-xs text-gray-500">{suggestion.items} items</div>
                            <div className="text-gray-900">{suggestion.price}</div>
                          </div>
                          {suggestion.savings && (
                            <div className="text-xs text-green-600">{suggestion.savings}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* Why these suggestions */}
            <div className="px-6 pb-6">
              <div className="bg-gray-100 rounded-2xl p-4">
                <h4 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-orange-500" />
                  Why these suggestions?
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li className="flex gap-2">
                    <Clock className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>You've ordered fondue ingredients 3x in the past 2 months (episode learning)</span>
                  </li>
                  <li className="flex gap-2">
                    <ShoppingCart className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>All items confirmed in stock for Friday pickup at Geneva Cornavin</span>
                  </li>
                  <li className="flex gap-2">
                    <DollarSign className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span>Pricing agent found 12% savings compared to individual purchases</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* Bottom nav */}
        <BottomNav activeTab="home" />
      </div>
    </MobileFrame>
  );
}
