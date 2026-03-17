import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Plus, Minus, RefreshCw, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function CustomizeBundle() {
  const [items, setItems] = useState([
    {
      name: 'Emmentaler AOP 400g',
      quantity: 3,
      price: 12.90,
      image: 'https://images.unsplash.com/photo-1629136563988-59570ae259d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMHdoZWVscyUyMHllbGxvd3xlbnwxfHx8fDE3NzM3NjAwMzV8MA&ixlib=rb-4.1.0&q=80&w=200',
      successRate: 92,
    },
    {
      name: 'Bio Vollmilch 1L',
      quantity: 3,
      price: 2.40,
      image: 'https://images.unsplash.com/photo-1768850418251-17480117ac9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1pbGslMjBib3R0bGUlMjBvcmdhbmljfGVufDF8fHx8MTc3Mzc2MDAzMXww&ixlib=rb-4.1.0&q=80&w=200',
      successRate: 89,
    },
    {
      name: 'Baguette Rustique',
      quantity: 2,
      price: 3.20,
      image: 'https://images.unsplash.com/photo-1768203633352-d505840c81d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBiYWd1ZXR0ZSUyMGJyZWFkJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzM3NjAwMzF8MA&ixlib=rb-4.1.0&q=80&w=200',
      successRate: 95,
    },
  ]);

  const [showAlternatives, setShowAlternatives] = useState<number | null>(null);

  const updateQuantity = (index: number, delta: number) => {
    setItems(prev => prev.map((item, i) => 
      i === index ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
    ));
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-[44px] z-10">
          <Link to="/fondue-bundle">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-900">Customize Bundle</div>
            <div className="text-xs text-orange-600">Adjust items & quantities</div>
          </div>
          <div className="w-10" />
        </div>

        <div className="px-6 pt-6 space-y-4 pb-32">
          {/* Info banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-blue-50 border border-blue-200 rounded-2xl p-4 flex gap-3"
          >
            <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-700">
              Items marked with success rates show how often this combination works well for fondue nights like yours.
            </p>
          </motion.div>

          {/* Items */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden"
              >
                <div className="p-4">
                  <div className="flex gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-xl"
                    />
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{item.name}</h3>
                      <p className="text-sm text-gray-600 mb-2">CHF {item.price.toFixed(2)} each</p>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-50 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                          <TrendingUp className="w-3 h-3" />
                          {item.successRate}% match
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() => updateQuantity(index, -1)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
                    >
                      <Minus className="w-5 h-5 text-gray-700" />
                    </button>
                    <div className="flex-1 bg-gray-50 rounded-xl py-2 text-center">
                      <span className="text-lg text-gray-900">{item.quantity}</span>
                    </div>
                    <button
                      onClick={() => updateQuantity(index, 1)}
                      className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
                    >
                      <Plus className="w-5 h-5 text-gray-700" />
                    </button>
                    <button
                      onClick={() => setShowAlternatives(showAlternatives === index ? null : index)}
                      className="flex-1 flex items-center justify-center gap-2 bg-orange-50 text-orange-600 py-2 rounded-xl hover:bg-orange-100 transition-colors"
                    >
                      <RefreshCw className="w-4 h-4" />
                      Replace
                    </button>
                  </div>
                </div>

                {/* Alternatives */}
                {showAlternatives === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="border-t border-gray-100 p-4 bg-gray-50 space-y-2"
                  >
                    <h4 className="text-sm text-gray-700 mb-3">Alternative cheeses for fondue</h4>
                    {[
                      { name: 'Gruyère AOP 400g', price: 13.50, match: 94 },
                      { name: 'Vacherin Fribourgeois 400g', price: 14.20, match: 88 },
                      { name: 'Appenzeller Classic 400g', price: 12.50, match: 86 },
                    ].map((alt, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center justify-between p-3 bg-white rounded-xl hover:bg-orange-50 border border-gray-200 hover:border-orange-200 transition-colors"
                      >
                        <div className="text-left">
                          <div className="text-sm text-gray-900">{alt.name}</div>
                          <div className="text-xs text-gray-600">CHF {alt.price.toFixed(2)}</div>
                        </div>
                        <div className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          {alt.match}% match
                        </div>
                      </button>
                    ))}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Budget level */}
          <div className="bg-white rounded-2xl p-4">
            <h3 className="text-gray-900 mb-3">Budget level</h3>
            <div className="flex gap-2">
              {['Value', 'Standard', 'Premium'].map((level, i) => (
                <button
                  key={level}
                  className={`flex-1 py-3 rounded-xl border-2 transition-colors ${
                    i === 1
                      ? 'bg-orange-50 border-orange-500 text-orange-700'
                      : 'border-gray-300 text-gray-600 hover:border-gray-400'
                  }`}
                >
                  <div className="text-sm">{level}</div>
                </button>
              ))}
            </div>
          </div>

          {/* AI suggestion */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200 rounded-2xl p-4"
          >
            <div className="flex gap-3">
              <div className="bg-purple-100 rounded-full p-2 h-fit">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="text-gray-900 mb-1">AI Suggestion</h4>
                <p className="text-sm text-gray-700">
                  Adding 1 bottle of Fendant white wine increases success rate to 96% for Geneva fondue nights.
                </p>
                <button className="text-sm text-purple-600 hover:underline mt-2">
                  Add to bundle
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-gray-200 p-4">
          <div className="flex items-center justify-between mb-3 text-sm">
            <span className="text-gray-600">New total</span>
            <span className="text-2xl text-gray-900">CHF {total.toFixed(2)}</span>
          </div>
          <Link to="/fondue-bundle">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl transition-colors shadow-lg">
              Update bundle
            </button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
