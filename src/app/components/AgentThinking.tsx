import { motion } from 'motion/react';
import { ShoppingCart, Package, DollarSign, BrainCircuit } from 'lucide-react';

interface AgentThinkingProps {
  currentStep?: number;
  compact?: boolean;
}

export function AgentThinking({ currentStep = 0, compact = false }: AgentThinkingProps) {
  const agents = [
    { 
      icon: ShoppingCart, 
      name: 'Shopper', 
      description: 'Understanding request',
      color: 'bg-blue-500',
      lightColor: 'bg-blue-100',
      textColor: 'text-blue-600'
    },
    { 
      icon: Package, 
      name: 'Inventory', 
      description: 'Checking stock & bundles',
      color: 'bg-green-500',
      lightColor: 'bg-green-100',
      textColor: 'text-green-600'
    },
    { 
      icon: DollarSign, 
      name: 'Pricing', 
      description: 'Optimizing price',
      color: 'bg-purple-500',
      lightColor: 'bg-purple-100',
      textColor: 'text-purple-600'
    },
    { 
      icon: BrainCircuit, 
      name: 'Supervisor', 
      description: 'Coordinating',
      color: 'bg-orange-500',
      lightColor: 'bg-orange-100',
      textColor: 'text-orange-600'
    },
  ];

  if (compact) {
    return (
      <div className="flex items-center gap-2">
        {agents.map((agent, index) => (
          <div
            key={agent.name}
            className={`relative w-8 h-8 rounded-full flex items-center justify-center transition-all ${
              currentStep >= index ? agent.color : 'bg-gray-200'
            }`}
          >
            <agent.icon className="w-4 h-4 text-white" />
            {currentStep === index && (
              <motion.div
                className={`absolute inset-0 rounded-full ${agent.color} opacity-50`}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {agents.slice(0, 3).map((agent, index) => (
        <motion.div
          key={agent.name}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
            currentStep >= index
              ? 'bg-white border-orange-200'
              : 'bg-gray-50 border-gray-200'
          }`}
        >
          <div className={`relative rounded-xl p-3 ${currentStep >= index ? agent.color : 'bg-gray-300'}`}>
            <agent.icon className="w-6 h-6 text-white" />
            {currentStep === index && (
              <motion.div
                className="absolute inset-0 rounded-xl border-4 border-orange-500"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              />
            )}
          </div>
          
          <div className="flex-1">
            <div className="text-sm text-gray-600">{agent.name} Agent</div>
            <div className="text-gray-900">{agent.description}</div>
          </div>

          {currentStep > index && (
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
          
          {currentStep === index && (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
              className="w-6 h-6 border-3 border-orange-500 border-t-transparent rounded-full"
            />
          )}
        </motion.div>
      ))}
    </div>
  );
}
