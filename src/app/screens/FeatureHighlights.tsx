import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Zap, Database, BrainCircuit, TrendingUp, Shield, Gauge, Users, Package } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { QdrantBadge } from '../components/QdrantBadge';

export function FeatureHighlights() {
  const features = [
    {
      icon: Database,
      title: 'Qdrant Vector Database',
      description: '50,000+ products indexed with embeddings',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-50',
      badges: ['hybrid'],
    },
    {
      icon: BrainCircuit,
      title: 'Agentic RAG Pipeline',
      description: '4 specialized AI agents working together',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-50',
      badges: ['dense'],
    },
    {
      icon: Zap,
      title: 'BM42 Hybrid Search',
      description: 'Combines keyword + semantic search',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-50',
      badges: ['bm42', 'hybrid'],
    },
    {
      icon: TrendingUp,
      title: 'Episode Learning',
      description: 'Learns from 10,000+ successful orders',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50',
      badges: ['episode'],
    },
    {
      icon: Shield,
      title: 'Privacy-First AI',
      description: 'No personal data in training, vectors only',
      color: 'from-gray-700 to-gray-800',
      bgColor: 'bg-gray-50',
      badges: [],
    },
    {
      icon: Gauge,
      title: 'Real-Time Performance',
      description: '340ms avg query latency, 23ms vector lookup',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-50',
      badges: [],
    },
  ];

  const stats = [
    { label: 'Products Indexed', value: '50,000+', icon: Package },
    { label: 'Vector Dimensions', value: '384', icon: Database },
    { label: 'Avg Query Time', value: '340ms', icon: Gauge },
    { label: 'Success Rate', value: '92%', icon: TrendingUp },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-8">
          <Link to="/">
            <button className="mb-6 p-2 hover:bg-white/10 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <h1 className="text-2xl mb-2">Dynamic Vector Features</h1>
          <p className="text-orange-100 text-sm">
            Powered by Qdrant + Agentic RAG
          </p>
        </div>

        <div className="px-6 pt-6 space-y-6">
          {/* Feature cards */}
          <div className="space-y-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-200"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className={`bg-gradient-to-br ${feature.color} rounded-xl p-3`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
                {feature.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {feature.badges.map((badge) => (
                      <QdrantBadge key={badge} type={badge as any} />
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Stats grid */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-200">
            <h3 className="text-gray-900 mb-4">System Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 text-center"
                >
                  <stat.icon className="w-6 h-6 text-orange-600 mx-auto mb-2" />
                  <div className="text-2xl text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technical architecture */}
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-5 text-white shadow-lg">
            <h3 className="mb-4 flex items-center gap-2">
              <BrainCircuit className="w-5 h-5" />
              <span>Architecture</span>
            </h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-purple-100 text-xs mb-1">Frontend</div>
                <div>React 18 + Motion + Tailwind v4</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-purple-100 text-xs mb-1">Vector Database</div>
                <div>Qdrant with 384-dim embeddings</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-purple-100 text-xs mb-1">Search Strategy</div>
                <div>BM42 + Dense Hybrid Fusion</div>
              </div>
              <div className="bg-white/10 rounded-xl p-3">
                <div className="text-purple-100 text-xs mb-1">AI Pattern</div>
                <div>Multi-Agent RAG with Supervisor</div>
              </div>
            </div>
          </div>

          {/* Use cases */}
          <div className="bg-white rounded-2xl p-5 shadow-sm border-2 border-gray-200">
            <h3 className="text-gray-900 mb-4">Key Use Cases</h3>
            <div className="space-y-3 text-sm">
              {[
                'Natural language bundle creation ("fondue for 6")',
                'Real-time stock-aware recommendations',
                'Visual search with multimodal embeddings',
                'Episode learning from order patterns',
                'Dynamic pricing optimization',
                'Supervisor review workflow',
              ].map((useCase, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-700">{useCase}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <Link to="/">
            <motion.button
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-4 rounded-2xl shadow-lg"
            >
              Explore the demos
            </motion.button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
