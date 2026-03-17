import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, AlertTriangle, Check, RefreshCw } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function StockoutCase() {
  const items = [
    {
      name: 'Emmentaler AOP 400g',
      quantity: 3,
      inStock: true,
      status: 'normal',
      image: 'https://images.unsplash.com/photo-1629136563988-59570ae259d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMHdoZWVscyUyMHllbGxvd3xlbnwxfHx8fDE3NzM3NjAwMzV8MA&ixlib=rb-4.1.0&q=80&w=200',
    },
    {
      name: 'Bio Vollmilch 1L',
      quantity: 3,
      inStock: true,
      status: 'normal',
      image: 'https://images.unsplash.com/photo-1768850418251-17480117ac9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1pbGslMjBib3R0bGUlMjBvcmdhbmljfGVufDF8fHx8MTc3Mzc2MDAzMXww&ixlib=rb-4.1.0&q=80&w=200',
    },
    {
      name: 'Baguette Rustique',
      quantity: 2,
      inStock: false,
      status: 'replaced',
      replacement: 'Ciabatta Classic',
      image: 'https://images.unsplash.com/photo-1768203633352-d505840c81d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBiYWd1ZXR0ZSUyMGJyZWFkJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzM3NjAwMzF8MA&ixlib=rb-4.1.0&q=80&w=200',
    },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-[44px] z-10">
          <Link to="/home">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-900">Fondue Kit for 6</div>
            <div className="text-xs text-orange-600">Updated by AI</div>
          </div>
          <div className="w-10" />
        </div>

        <div className="px-6 pt-6 space-y-4 pb-32">
          {/* Alert banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-4 text-white shadow-lg"
          >
            <div className="flex gap-3 items-start">
              <div className="bg-white/20 rounded-full p-2 flex-shrink-0">
                <RefreshCw className="w-5 h-5" />
              </div>
              <div>
                <h3 className="mb-1">Bundle auto-updated</h3>
                <p className="text-sm text-white/90">
                  Dynamic Vector updated your bundle to avoid stockouts. You still save <span className="font-semibold">9.2%</span>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Hero image */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=600"
              alt="Fondue"
              className="w-full h-56 object-cover"
            />
          </div>

          {/* Items with stock status */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-4 ${
                  item.status === 'replaced' ? 'border-2 border-orange-300' : ''
                }`}
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <h3 className={`text-gray-900 mb-1 ${item.status === 'replaced' ? 'line-through text-gray-500' : ''}`}>
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">× {item.quantity}</p>
                    
                    {item.status === 'normal' && (
                      <div className="flex items-center gap-2 text-green-600 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        In stock
                      </div>
                    )}
                    
                    {item.status === 'replaced' && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-orange-600 text-sm">
                          <AlertTriangle className="w-4 h-4" />
                          Limited for Friday
                        </div>
                        <div className="bg-orange-50 rounded-xl p-3 mt-2">
                          <div className="flex items-center gap-2 mb-1">
                            <RefreshCw className="w-4 h-4 text-orange-600" />
                            <span className="text-sm text-orange-900">Suggested alternative</span>
                          </div>
                          <div className="text-gray-900">{item.replacement}</div>
                          <div className="flex items-center gap-2 text-green-600 text-sm mt-1">
                            <Check className="w-4 h-4" />
                            In stock · Similar quality
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* AI explanation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4"
          >
            <h4 className="text-gray-900 mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Why this change?
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Baguette Rustique has limited availability for Friday 18–20h delivery in Geneva.</span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Ciabatta Classic is a top-rated alternative based on 2,500+ similar substitutions.</span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Same price point, similar texture for fondue dipping.</span>
              </li>
            </ul>
          </motion.div>

          {/* Alternative action */}
          <div className="bg-white rounded-2xl p-4">
            <h4 className="text-gray-900 mb-3">Not happy with the change?</h4>
            <div className="space-y-2">
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                <RefreshCw className="w-4 h-4" />
                See other bread options
              </button>
              <button className="w-full border-2 border-gray-300 text-gray-700 py-3 rounded-xl hover:bg-gray-50 transition-colors">
                Keep original (may arrive Saturday)
              </button>
            </div>
          </div>
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3 text-sm">
            <span className="text-gray-600">New total</span>
            <div className="text-right">
              <div className="text-2xl text-gray-900">CHF 84.70</div>
              <div className="text-xs text-green-600">Save 9.2%</div>
            </div>
          </div>
          <Link to="/home">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl transition-colors shadow-lg">
              Accept changes & add to cart
            </button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
