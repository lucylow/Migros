import { MobileFrame } from '../components/MobileFrame';
import { TrendingUp, TrendingDown, Package, DollarSign, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function SupervisorDashboard() {
  const flaggedBundles = [
    {
      id: 'B-3421',
      customer: 'Customer #8742',
      type: 'Fondue Kit for 8',
      reason: 'Unusual quantity combination',
      time: '2 min ago',
      priority: 'medium',
    },
    {
      id: 'B-3418',
      customer: 'Customer #8739',
      type: 'BBQ Bundle for 12',
      reason: 'High margin variance',
      time: '5 min ago',
      priority: 'low',
    },
    {
      id: 'B-3416',
      customer: 'Customer #8735',
      type: 'Vegan Dinner Kit',
      reason: 'Stock conflict detected',
      time: '8 min ago',
      priority: 'high',
    },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white px-6 py-6">
          <div className="flex items-center justify-between mb-2">
            <div>
              <div className="text-sm text-gray-300">Store Supervisor</div>
              <div className="text-xl">Migros Geneva Cornavin</div>
            </div>
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-sm">MS</span>
            </div>
          </div>
          <div className="text-xs text-gray-400">March 17, 2026 · Live monitoring</div>
        </div>

        <div className="px-6 pt-6 space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-blue-600" />
                <div className="text-xs text-gray-600">Bundles Today</div>
              </div>
              <div className="text-2xl text-gray-900">124</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+18% vs yesterday</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <div className="text-xs text-gray-600">Auto-approved</div>
              </div>
              <div className="text-2xl text-gray-900">92%</div>
              <div className="flex items-center gap-1 text-xs text-gray-600 mt-1">
                <span>114 of 124 bundles</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-4 h-4 text-orange-600" />
                <div className="text-xs text-gray-600">Human Review</div>
              </div>
              <div className="text-2xl text-gray-900">8%</div>
              <div className="flex items-center gap-1 text-xs text-orange-600 mt-1">
                <span>10 pending</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-4 h-4 text-purple-600" />
                <div className="text-xs text-gray-600">Avg Margin</div>
              </div>
              <div className="text-2xl text-gray-900">14.2%</div>
              <div className="flex items-center gap-1 text-xs text-green-600 mt-1">
                <TrendingUp className="w-3 h-3" />
                <span>+2.1% improvement</span>
              </div>
            </motion.div>
          </div>

          {/* Performance chart placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-2xl p-4 shadow-sm"
          >
            <h3 className="text-sm text-gray-900 mb-4">Bundle Creation Over Time</h3>
            <div className="h-32 flex items-end justify-between gap-2">
              {[45, 62, 58, 73, 68, 81, 92, 87, 95, 88, 102, 94].map((height, i) => (
                <div key={i} className="flex-1 bg-orange-100 rounded-t relative group">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${height}%` }}
                    transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                    className="bg-gradient-to-t from-orange-500 to-orange-400 rounded-t absolute bottom-0 w-full"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-2">
              <span>8 AM</span>
              <span>12 PM</span>
              <span>4 PM</span>
              <span>Now</span>
            </div>
          </motion.div>

          {/* Flagged for review */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg text-gray-900">Bundles Flagged for Review</h3>
              <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs">
                {flaggedBundles.length} pending
              </div>
            </div>

            <div className="space-y-3">
              {flaggedBundles.map((bundle, index) => (
                <Link key={bundle.id} to="/supervisor-review">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="bg-white rounded-2xl p-4 border-2 border-gray-200 hover:border-orange-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        bundle.priority === 'high' ? 'bg-red-500' :
                        bundle.priority === 'medium' ? 'bg-orange-500' :
                        'bg-yellow-500'
                      }`} />
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <div className="text-gray-900">{bundle.type}</div>
                          <div className="text-xs text-gray-500">{bundle.id}</div>
                        </div>
                        <div className="text-sm text-gray-600 mb-2">{bundle.customer}</div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="bg-orange-50 text-orange-700 px-2 py-1 rounded-full text-xs">
                            {bundle.reason}
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Clock className="w-3 h-3" />
                            {bundle.time}
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <button className="flex-1 bg-green-50 text-green-700 py-2 rounded-xl text-sm hover:bg-green-100 transition-colors">
                            Quick Approve
                          </button>
                          <button className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-xl text-sm hover:bg-gray-200 transition-colors">
                            Review Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* System status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-2xl p-4"
          >
            <h4 className="text-blue-900 mb-3">AI System Status</h4>
            <div className="space-y-2">
              {[
                { name: 'Qdrant Vector DB', status: 'Healthy', latency: '23ms' },
                { name: 'Agentic RAG Pipeline', status: 'Running', latency: '340ms' },
                { name: 'Inventory Sync', status: 'Live', latency: '1.2s' },
              ].map((system, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-gray-700">{system.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-gray-600">{system.latency}</span>
                    <span className="text-green-700 text-xs">{system.status}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </MobileFrame>
  );
}
