import { MobileFrame } from '../components/MobileFrame';
import { ShoppingCart, Package, DollarSign, BrainCircuit, Check } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function OnboardingSuccess() {
  const agents = [
    {
      icon: ShoppingCart,
      name: 'Shopper',
      description: 'Understands your needs',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-600',
    },
    {
      icon: Package,
      name: 'Inventory',
      description: 'Checks real-time stock',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100',
      textColor: 'text-green-600',
    },
    {
      icon: DollarSign,
      name: 'Pricing',
      description: 'Optimizes your savings',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-600',
    },
    {
      icon: BrainCircuit,
      name: 'Supervisor',
      description: 'Coordinates everything',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100',
      textColor: 'text-orange-600',
    },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] px-6 pb-20 min-h-full bg-white flex flex-col">
        {/* Progress */}
        <div className="py-4">
          <div className="flex gap-2 justify-center">
            <div className="w-8 h-1 bg-orange-500 rounded-full" />
            <div className="w-8 h-1 bg-orange-500 rounded-full" />
            <div className="w-8 h-1 bg-orange-500 rounded-full" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex-1 flex flex-col"
        >
          {/* Success icon */}
          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="bg-green-100 rounded-full p-6"
            >
              <Check className="w-16 h-16 text-green-600" />
            </motion.div>
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <h1 className="text-2xl text-gray-900 mb-2">You're all set!</h1>
            <p className="text-gray-600">Your AI agents are ready to help</p>
          </div>

          {/* Agents */}
          <div className="space-y-3 mb-8">
            {agents.map((agent, index) => (
              <motion.div
                key={agent.name}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-2xl p-4 flex items-center gap-4"
              >
                <div className={`${agent.bgColor} rounded-xl p-3`}>
                  <agent.icon className={`w-6 h-6 ${agent.textColor}`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900">{agent.name}</h3>
                  <p className="text-sm text-gray-600">{agent.description}</p>
                </div>
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="w-4 h-4 text-green-600" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-4 border-2 border-orange-200"
          >
            <p className="text-sm text-gray-700 text-center">
              <span className="text-orange-600">Dynamic Vector AI</span> uses Qdrant vector database with agentic RAG to create personalized shopping bundles in real-time.
            </p>
          </motion.div>
        </motion.div>

        {/* Continue button */}
        <div className="pt-8">
          <Link to="/home">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl transition-colors shadow-lg">
              Go to Home
            </button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
