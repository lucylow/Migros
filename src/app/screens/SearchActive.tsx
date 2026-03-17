import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Search, ShoppingCart, Package, DollarSign } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function SearchActive() {
  const [step, setStep] = useState(0);
  
  const steps = [
    { icon: ShoppingCart, label: 'Understanding request', agent: 'Shopper', color: 'text-blue-600', bg: 'bg-blue-500' },
    { icon: Package, label: 'Checking stock & bundles', agent: 'Inventory', color: 'text-green-600', bg: 'bg-green-500' },
    { icon: DollarSign, label: 'Optimizing price', agent: 'Pricing', color: 'text-purple-600', bg: 'bg-purple-500' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setStep((prev) => {
        if (prev < 2) return prev + 1;
        return prev;
      });
    }, 1500);

    const redirect = setTimeout(() => {
      window.location.href = '/fondue-bundle';
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirect);
    };
  }, []);

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-white">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center gap-4">
          <Link to="/home">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
            <Search className="w-5 h-5 text-orange-500" />
            <span className="text-gray-700">Fondue for 6, Geneva, Friday evening</span>
          </div>
        </div>

        <div className="px-6 pt-8 space-y-8">
          {/* Agentic thinking indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-lg text-gray-900 mb-6 text-center">Agents working on your request</h2>
            
            {/* Progress steps */}
            <div className="space-y-4">
              {steps.map((stepItem, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                    step >= index
                      ? 'bg-white border-orange-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className={`relative rounded-xl p-3 ${step >= index ? stepItem.bg : 'bg-gray-300'}`}>
                    <stepItem.icon className="w-6 h-6 text-white" />
                    {step === index && (
                      <motion.div
                        className="absolute inset-0 rounded-xl border-4 border-orange-500"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <div className="text-sm text-gray-600">{stepItem.agent} Agent</div>
                    <div className="text-gray-900">{stepItem.label}</div>
                  </div>

                  {step > index && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-green-100 rounded-full p-1"
                    >
                      <svg className="w-5 h-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                  )}
                  
                  {step === index && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      className="w-6 h-6 border-3 border-orange-500 border-t-transparent rounded-full"
                    />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Loading suggestions */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-gray-600">Preparing your bundle</h3>
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-2 h-2 bg-orange-500 rounded-full"
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
            </div>

            {/* Skeleton cards */}
            <div className="space-y-3">
              {[1, 2, 3].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.2 }}
                  className="bg-gray-50 rounded-2xl p-4 flex gap-4"
                >
                  <div className="w-16 h-16 bg-gray-200 rounded-xl animate-pulse" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4" />
                    <div className="h-3 bg-gray-200 rounded animate-pulse w-1/2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-4 border border-orange-200"
          >
            <p className="text-sm text-gray-700 text-center">
              <span className="text-orange-600">Dynamic Vector</span> is analyzing {'>'}50,000 products in real-time using Qdrant vector search
            </p>
          </motion.div>
        </div>
      </div>
    </MobileFrame>
  );
}
