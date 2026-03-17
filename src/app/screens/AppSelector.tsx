import { MobileFrame } from '../components/MobileFrame';
import { ShoppingBasket, Store, Zap, ArrowRight, Grid, Info } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function AppSelector() {
  return (
    <MobileFrame>
      <div className="pt-[44px] px-6 pb-20 min-h-full flex flex-col bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        {/* Logo/Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="py-12 text-center"
        >
          <div className="inline-block bg-gradient-to-br from-orange-500 to-purple-600 rounded-3xl p-4 mb-6">
            <Zap className="w-16 h-16 text-white" strokeWidth={1.5} />
          </div>
          <h1 className="text-3xl mb-2">Dynamic Vector</h1>
          <p className="text-gray-400">AI-Powered Retail Solutions</p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-center text-gray-300 text-sm">
            Choose a demo to explore Qdrant vector database with agentic RAG in action
          </p>
        </motion.div>

        {/* App options */}
        <div className="space-y-4 flex-1">
          <Link to="/migros">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-3xl p-6 shadow-xl"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white/20 rounded-2xl p-3">
                  <ShoppingBasket className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl mb-1">Migros Supermarket</h2>
                  <p className="text-orange-100 text-sm">Customer shopping experience</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/80" />
              </div>
              <ul className="space-y-2 text-sm text-orange-50">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Smart bundle creation with AI agents</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>In-store mode with visual search</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span>Real-time stock optimization</span>
                </li>
              </ul>
            </motion.div>
          </Link>

          <Link to="/supervisor-dashboard">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-6 shadow-xl border-2 border-gray-600"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-white/10 rounded-2xl p-3">
                  <Store className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl mb-1">Store Supervisor</h2>
                  <p className="text-gray-300 text-sm">Merchant & operations dashboard</p>
                </div>
                <ArrowRight className="w-6 h-6 text-white/60" />
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  <span>Bundle approval workflow</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  <span>Performance analytics & KPIs</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                  <span>AI reasoning transparency</span>
                </li>
              </ul>
            </motion.div>
          </Link>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-3xl p-6 shadow-xl border-2 border-gray-600 opacity-50"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-white/10 rounded-2xl p-3">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl mb-1">DV-Shop Commerce</h2>
                <p className="text-gray-300 text-sm">Generic B2B ecommerce demo</p>
              </div>
            </div>
            <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-xl px-3 py-2 text-xs text-yellow-200">
              Coming soon - Advanced Qdrant dataset integration
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 text-center"
        >
          <Link to="/showcase">
            <button className="text-sm text-gray-400 hover:text-gray-300 transition-colors mb-4 flex items-center gap-2 mx-auto">
              <Grid className="w-4 h-4" />
              <span>View all screens</span>
            </button>
          </Link>
          <Link to="/features">
            <button className="text-sm text-gray-400 hover:text-gray-300 transition-colors mb-4 flex items-center gap-2 mx-auto">
              <Info className="w-4 h-4" />
              <span>Technical features</span>
            </button>
          </Link>
          <p className="text-xs text-gray-500 mb-2">
            Powered by Qdrant Vector Database + Agentic RAG
          </p>
          <div className="flex gap-4 justify-center text-xs text-gray-600">
            <span>BM42 Hybrid Search</span>
            <span>•</span>
            <span>Dynamic Embeddings</span>
            <span>•</span>
            <span>Episode Learning</span>
          </div>
        </motion.div>
      </div>
    </MobileFrame>
  );
}