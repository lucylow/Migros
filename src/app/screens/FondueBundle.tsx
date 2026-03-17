import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, ChevronDown, ChevronUp, Sparkles, Check, ShoppingCart, Info, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';
import { BottomNav } from '../components/BottomNav';

export function FondueBundle() {
  const [showAgentDetails, setShowAgentDetails] = useState(false);
  const [showPricing, setShowPricing] = useState(false);

  const bundleItems = [
    {
      name: 'Gruyère AOP, aged 12 months',
      quantity: '400g',
      price: 'CHF 12.80',
      image: 'https://images.unsplash.com/photo-1629136563988-59570ae259d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMHdoZWVscyUyMHllbGxvd3xlbnwxfHx8fDE3NzM3NjAwMzV8MA&ixlib=rb-4.1.0&q=80&w=400',
      inStock: true,
      agent: 'Inventory Agent',
    },
    {
      name: 'Emmentaler AOP',
      quantity: '300g',
      price: 'CHF 9.60',
      image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbW1lbnRhbGVyJTIwY2hlZXNlJTIwd2hlZWx8ZW58MXx8fHwxNzQyNDE5NjIxfDA&ixlib=rb-4.1.0&q=80&w=400',
      inStock: true,
      agent: 'Shopper Agent',
    },
    {
      name: 'Vacherin Fribourgeois',
      quantity: '200g',
      price: 'CHF 8.40',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGNyZWFteXxlbnwxfHx8fDE3NDI0MTk2MjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
      inStock: true,
      agent: 'Shopper Agent',
    },
    {
      name: 'Dry white wine (Fendant)',
      quantity: '300ml',
      price: 'CHF 6.50',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdpbmUlMjBib3R0bGV8ZW58MXx8fHwxNzQyNDE5NjIzfDA&ixlib=rb-4.1.0&q=80&w=400',
      inStock: true,
      agent: 'Pricing Agent',
    },
    {
      name: 'Kirsch (cherry liqueur)',
      quantity: '50ml',
      price: 'CHF 4.20',
      image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVycnklMjBsaXF1ZXVyJTIwYm90dGxlfGVufDF8fHx8MTc0MjQxOTYyNHww&ixlib=rb-4.1.0&q=80&w=400',
      inStock: true,
      agent: 'Shopper Agent',
    },
    {
      name: 'Fresh garlic',
      quantity: '2 cloves',
      price: 'CHF 0.80',
      image: 'https://images.unsplash.com/photo-1619785013029-1bbda3668743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYXJsaWMlMjBjbG92ZXN8ZW58MXx8fHwxNzQyNDE5NjI1fDA&ixlib=rb-4.1.0&q=80&w=400',
      inStock: true,
      agent: 'Inventory Agent',
    },
    {
      name: 'Crusty bread',
      quantity: '500g',
      price: 'CHF 3.50',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBicmVhZCUyMGNydXN0eXxlbnwxfHx8fDE3NDI0MTk2MjZ8MA&ixlib=rb-4.1.0&q=80&w=400',
      inStock: true,
      agent: 'Pricing Agent',
    },
    {
      name: 'Cornstarch',
      quantity: '1 tbsp',
      price: 'CHF 2.00',
      image: 'https://images.unsplash.com/photo-1604908815031-80676bbf9f00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Juc3RhcmNoJTIwcG93ZGVyfGVufDF8fHx8MTc0MjQxOTYyN3ww&ixlib=rb-4.1.0&q=80&w=400',
      inStock: true,
      agent: 'Inventory Agent',
    },
  ];

  const totalPrice = 47.8;
  const originalPrice = 54.0;
  const savings = originalPrice - totalPrice;

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <Link to="/home">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          </Link>
          <div className="text-center flex-1">
            <div className="text-sm text-gray-900">Smart Bundle</div>
            <div className="text-xs text-orange-600">AI-Optimized</div>
          </div>
          <div className="w-8" />
        </div>

        {/* Hero image */}
        <div className="bg-gradient-to-br from-orange-100 to-orange-50 px-6 py-8">
          <img
            src="https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=400"
            alt="Fondue Night Bundle"
            className="w-full h-48 object-cover rounded-2xl"
          />
        </div>

        <div className="px-6 space-y-6 pb-6">
          {/* Title */}
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Fondue Night for 4–6</h1>
            <p className="text-sm text-gray-600">
              Personalized for your household, optimized for Friday availability
            </p>
          </div>

          {/* AI Badge */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5" />
              <span className="font-medium">Created by 4 AI Agents</span>
            </div>
            <p className="text-sm text-purple-100">
              Shopper, Inventory, Pricing, and Supervisor collaborated using Dynamic Vector RAG
            </p>
          </div>

          {/* Items list */}
          <div>
            <h2 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              Bundle items ({bundleItems.length})
            </h2>
            <div className="space-y-3">
              {bundleItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white rounded-xl p-3 flex gap-3 items-center border border-gray-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm text-gray-900 truncate">{item.name}</h3>
                    <p className="text-xs text-gray-600">{item.quantity}</p>
                    {showAgentDetails && (
                      <p className="text-xs text-purple-600 mt-1">
                        Selected by {item.agent}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col items-end">
                    <div className="text-sm text-gray-900">{item.price}</div>
                    {item.inStock && (
                      <div className="text-xs text-green-600 flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        In stock
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Agent details toggle */}
          <button
            onClick={() => setShowAgentDetails(!showAgentDetails)}
            className="w-full bg-gray-100 hover:bg-gray-200 rounded-xl p-3 flex items-center justify-between text-sm text-gray-700 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Info className="w-4 h-4" />
              {showAgentDetails ? 'Hide' : 'Show'} AI agent details
            </span>
            {showAgentDetails ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          {/* Pricing breakdown */}
          <div>
            <button
              onClick={() => setShowPricing(!showPricing)}
              className="w-full bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between mb-3"
            >
              <span className="text-sm text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-orange-500" />
                Pricing breakdown
              </span>
              {showPricing ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>

            {showPricing && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="bg-white border border-gray-200 rounded-xl p-4 space-y-2"
              >
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Original price</span>
                  <span className="text-gray-900">CHF {originalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-green-600">Bundle discount</span>
                  <span className="text-green-600">-CHF {savings.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 pt-2 flex justify-between">
                  <span className="text-gray-900">Total</span>
                  <span className="text-lg text-orange-600">CHF {totalPrice.toFixed(2)}</span>
                </div>
                <div className="bg-green-50 text-green-700 text-xs p-2 rounded-lg">
                  You save 12% compared to buying items separately
                </div>
              </motion.div>
            )}
          </div>

          {/* Add to cart button */}
          <Link to="/customize-bundle">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              Customize & add to cart
            </motion.button>
          </Link>

          {/* How it was created */}
          <div className="bg-gray-50 rounded-2xl p-4">
            <h4 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-orange-500" />
              How this bundle was created
            </h4>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Shopper Agent:</strong> Analyzed your 3 previous fondue orders and preferences</span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Inventory Agent:</strong> Confirmed all items in stock at Geneva Cornavin for Friday</span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Pricing Agent:</strong> Found optimal bundle discount saving you CHF 6.20</span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span><strong>Supervisor Agent:</strong> Verified reasoning and ensured quality recommendations</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom nav */}
        <BottomNav activeTab="home" />
      </div>
    </MobileFrame>
  );
}
