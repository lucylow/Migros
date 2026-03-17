import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, ChevronDown, ChevronUp, Sparkles, Check } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function FondueBundle() {
  const [showExplanation, setShowExplanation] = useState(false);
  const [headcount, setHeadcount] = useState(6);

  const items = [
    {
      name: 'Emmentaler AOP 400g',
      quantity: 3,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1629136563988-59570ae259d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMHdoZWVscyUyMHllbGxvd3xlbnwxfHx8fDE3NzM3NjAwMzV8MA&ixlib=rb-4.1.0&q=80&w=200',
    },
    {
      name: 'Bio Vollmilch 1L',
      quantity: 3,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1768850418251-17480117ac9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMG1pbGslMjBib3R0bGUlMjBvcmdhbmljfGVufDF8fHx8MTc3Mzc2MDAzMXww&ixlib=rb-4.1.0&q=80&w=200',
    },
    {
      name: 'Baguette Rustique',
      quantity: 2,
      inStock: true,
      image: 'https://images.unsplash.com/photo-1768203633352-d505840c81d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVuY2glMjBiYWd1ZXR0ZSUyMGJyZWFkJTIwYXJ0aXNhbnxlbnwxfHx8fDE3NzM3NjAwMzF8MA&ixlib=rb-4.1.0&q=80&w=200',
    },
  ];

  const extras = [
    { name: 'Cornichons', included: true },
    { name: 'White wine (Fendant)', included: true },
    { name: 'Fresh garlic', included: false },
  ];

  const basePrice = 82.40;
  const savings = 11.6;

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-[44px] z-10">
          <Link to="/search-active">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="text-center">
            <div className="text-sm text-gray-900">Dynamic Bundle</div>
            <div className="text-xs text-orange-600">AI-Generated</div>
          </div>
          <div className="w-10" />
        </div>

        <div className="px-6 pt-6 space-y-6 pb-32">
          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-3xl overflow-hidden shadow-sm"
          >
            <img
              src="https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=600"
              alt="Fondue"
              className="w-full h-56 object-cover"
            />
          </motion.div>

          {/* Title */}
          <div>
            <div className="flex items-start gap-3 mb-2">
              <h1 className="text-2xl text-gray-900 flex-1">Fondue Kit for {headcount}</h1>
              <Sparkles className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-sm text-gray-600">Friday, Geneva · 18–20h delivery available</p>
          </div>

          {/* Summary card */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-white shadow-lg"
          >
            <div className="flex items-end justify-between mb-4">
              <div>
                <div className="text-sm opacity-90 mb-1">Total price</div>
                <div className="text-4xl">CHF {basePrice.toFixed(2)}</div>
              </div>
              <div className="text-right">
                <div className="bg-white/20 rounded-full px-3 py-1 text-sm">
                  Save {savings}%
                </div>
              </div>
            </div>
            <div className="flex gap-6 text-sm">
              <div>
                <div className="opacity-90">Items</div>
                <div className="text-lg">7</div>
              </div>
              <div>
                <div className="opacity-90">Serves</div>
                <div className="text-lg">{headcount}</div>
              </div>
              <div>
                <div className="opacity-90">Status</div>
                <div className="text-lg flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full" />
                  In stock
                </div>
              </div>
            </div>
          </motion.div>

          {/* Headcount adjuster */}
          <div className="bg-white rounded-2xl p-4">
            <label className="text-sm text-gray-600 block mb-3">Adjust headcount</label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setHeadcount(Math.max(4, headcount - 1))}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
              >
                <span className="text-xl text-gray-700">−</span>
              </button>
              <div className="flex-1">
                <input
                  type="range"
                  min="4"
                  max="8"
                  value={headcount}
                  onChange={(e) => setHeadcount(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                />
              </div>
              <button
                onClick={() => setHeadcount(Math.min(8, headcount + 1))}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center"
              >
                <span className="text-xl text-gray-700">+</span>
              </button>
            </div>
          </div>

          {/* Items list */}
          <div className="bg-white rounded-2xl p-4 space-y-3">
            <h3 className="text-gray-900 mb-3">What's included</h3>
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-4 pb-3 border-b border-gray-100 last:border-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div className="flex-1">
                  <div className="text-gray-900">{item.name}</div>
                  <div className="text-sm text-gray-600">× {item.quantity}</div>
                </div>
                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  In stock
                </div>
              </div>
            ))}
          </div>

          {/* Optional extras */}
          <div className="bg-white rounded-2xl p-4 space-y-3">
            <h3 className="text-gray-900 mb-3">Optional extras</h3>
            {extras.map((extra, index) => (
              <div key={index} className="flex items-center justify-between">
                <span className="text-gray-700">{extra.name}</span>
                <button
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    extra.included
                      ? 'bg-orange-100 text-orange-600'
                      : 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {extra.included ? 'Included' : 'Add'}
                </button>
              </div>
            ))}
          </div>

          {/* Explanation */}
          <div className="bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setShowExplanation(!showExplanation)}
              className="w-full p-4 flex items-center justify-between hover:bg-gray-50"
            >
              <span className="text-gray-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-orange-500" />
                Why this bundle?
              </span>
              {showExplanation ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            {showExplanation && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                className="px-4 pb-4 space-y-3 border-t border-gray-100"
              >
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Optimized for 6 adults with 300g cheese per person based on traditional Swiss fondue ratios.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Selected products from your usual Migros branch in Geneva with confirmed stock for Friday delivery.
                  </p>
                </div>
                <div className="flex gap-3 items-start">
                  <Check className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700">
                    Calculated using 50,000+ similar orders via Qdrant vector similarity search.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Fixed bottom CTA */}
        <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-gray-200 p-4 space-y-2">
          <Link to="/home">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl transition-colors shadow-lg">
              Add all to cart · CHF {basePrice.toFixed(2)}
            </button>
          </Link>
          <Link to="/customize-bundle">
            <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-2xl hover:bg-gray-50 transition-colors">
              Customize bundle
            </button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
