import { MobileFrame } from '../components/MobileFrame';
import { ShoppingBasket, Zap, Globe, BarChart3, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function Welcome() {
  return (
    <MobileFrame>
      <div className="pt-[44px] px-6 pb-20 min-h-full flex flex-col bg-white">
        {/* Back button */}
        <div className="py-4">
          <Link to="/">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
        </div>

        {/* Hero illustration */}
        <motion.div 
          className="flex items-center justify-center py-12 relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {/* Dynamic particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-orange-500 rounded-full"
                style={{
                  left: `${Math.random() * 200 - 50}px`,
                  top: `${Math.random() * 200 - 50}px`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
            
            {/* Shopping basket icon */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-12 shadow-xl">
              <ShoppingBasket className="w-24 h-24 text-white" strokeWidth={1.5} />
            </div>
          </div>
        </motion.div>

        {/* Header text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="space-y-4"
        >
          <h1 className="text-3xl text-center">
            <span className="block text-gray-900">Migros</span>
            <span className="block text-orange-500">Dynamic Vector</span>
          </h1>
          
          <p className="text-center text-gray-600 text-lg">
            Smart bundles, less waste, faster shopping.
          </p>
        </motion.div>

        {/* Features list */}
        <motion.div 
          className="space-y-4 mt-8 flex-1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex gap-3 items-start">
            <div className="bg-orange-100 rounded-full p-2 mt-1">
              <Zap className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-gray-700 flex-1">
              Ask for <span className="text-orange-600">'fondue for 6 in Geneva on Friday'</span> and get everything in one tap.
            </p>
          </div>
          
          <div className="flex gap-3 items-start">
            <div className="bg-orange-100 rounded-full p-2 mt-1">
              <BarChart3 className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-gray-700 flex-1">
              Real-time stock-aware suggestions.
            </p>
          </div>
          
          <div className="flex gap-3 items-start">
            <div className="bg-orange-100 rounded-full p-2 mt-1">
              <Globe className="w-5 h-5 text-orange-600" />
            </div>
            <p className="text-gray-700 flex-1">
              Multilingual: <span className="text-orange-600">DE / FR / IT / EN</span>
            </p>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div 
          className="space-y-3 mt-8"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          <Link to="/personalization">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl transition-colors shadow-lg shadow-orange-200">
              Get started
            </button>
          </Link>
          
          <Link to="/home">
            <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-2xl hover:bg-gray-50 transition-colors">
              Browse as guest
            </button>
          </Link>
        </motion.div>

        {/* Version */}
        <p className="text-center text-gray-400 text-xs mt-4">v1.0.0</p>
      </div>
    </MobileFrame>
  );
}