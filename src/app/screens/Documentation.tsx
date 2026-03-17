import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Book, Code, Zap, Users, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';

export function Documentation() {
  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-8">
          <Link to="/">
            <button className="mb-6 p-2 hover:bg-white/10 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <Book className="w-8 h-8" />
            <h1 className="text-2xl">Documentation</h1>
          </div>
          <p className="text-white/90 text-sm">
            Complete guide to Dynamic Vector AI retail system
          </p>
        </div>

        <div className="px-6 pt-6 space-y-8">
          {/* Overview */}
          <section>
            <h2 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              Overview
            </h2>
            <div className="prose prose-sm text-gray-700">
              <p className="mb-3">
                Dynamic Vector is an AI-powered retail supervision system that uses <strong>Qdrant vector database</strong> with <strong>agentic RAG (Retrieval Augmented Generation)</strong> to create personalized shopping bundles in real-time.
              </p>
              <p>
                The system demonstrates how modern vector search combined with multi-agent AI can transform traditional ecommerce into an intelligent, context-aware shopping experience.
              </p>
            </div>
          </section>

          {/* User Flows */}
          <section>
            <h2 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-500" />
              User Flows
            </h2>
            <div className="space-y-3">
              <div className="bg-orange-50 border-2 border-orange-200 rounded-xl p-4">
                <h3 className="text-orange-900 mb-2">Customer Flow</h3>
                <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Onboarding & preference collection</li>
                  <li>Natural language search ("fondue for 6")</li>
                  <li>AI bundle creation with 3-agent pipeline</li>
                  <li>Bundle customization & alternatives</li>
                  <li>In-store mode with visual search</li>
                </ol>
              </div>

              <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-4">
                <h3 className="text-gray-900 mb-2">Supervisor Flow</h3>
                <ol className="text-sm text-gray-700 space-y-2 list-decimal list-inside">
                  <li>Dashboard with KPIs & analytics</li>
                  <li>Bundle review queue</li>
                  <li>AI reasoning transparency</li>
                  <li>Approve/modify/reject workflow</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Agent Architecture */}
          <section>
            <h2 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
              <Code className="w-5 h-5 text-orange-500" />
              4-Agent Architecture
            </h2>
            <div className="space-y-3">
              {[
                {
                  name: 'Shopper Agent',
                  color: 'blue',
                  description: 'Interprets natural language queries, extracts intent (occasion, count, dietary needs)',
                },
                {
                  name: 'Inventory Agent',
                  color: 'green',
                  description: 'Queries Qdrant for stock availability, checks delivery windows, finds alternatives',
                },
                {
                  name: 'Pricing Agent',
                  color: 'purple',
                  description: 'Optimizes bundle pricing, calculates savings, adjusts for promotions',
                },
                {
                  name: 'Supervisor Agent',
                  color: 'orange',
                  description: 'Coordinates other agents, validates bundles, flags edge cases for human review',
                },
              ].map((agent) => (
                <div
                  key={agent.name}
                  className={`bg-${agent.color}-50 border-2 border-${agent.color}-200 rounded-xl p-4`}
                >
                  <h4 className={`text-${agent.color}-900 mb-1`}>{agent.name}</h4>
                  <p className="text-sm text-gray-700">{agent.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Qdrant Features */}
          <section>
            <h2 className="text-xl text-gray-900 mb-4">Qdrant Integration</h2>
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 border-2 border-purple-200 rounded-xl p-4 space-y-3">
              <div>
                <h4 className="text-purple-900 mb-1">BM42 Hybrid Search</h4>
                <p className="text-sm text-gray-700">
                  Combines sparse (BM42 keyword) + dense (semantic) vectors for best recall and precision
                </p>
              </div>
              <div>
                <h4 className="text-purple-900 mb-1">Episode Learning</h4>
                <p className="text-sm text-gray-700">
                  Learns from successful order patterns - "users who bought X also bought Y"
                </p>
              </div>
              <div>
                <h4 className="text-purple-900 mb-1">Multimodal Embeddings</h4>
                <p className="text-sm text-gray-700">
                  Visual search uses image embeddings to find similar products from photos
                </p>
              </div>
              <div>
                <h4 className="text-purple-900 mb-1">Real-Time Indexing</h4>
                <p className="text-sm text-gray-700">
                  Stock levels update vectors in <100ms for instant availability checks
                </p>
              </div>
            </div>
          </section>

          {/* Screens */}
          <section>
            <h2 className="text-xl text-gray-900 mb-4 flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-orange-500" />
              Key Screens
            </h2>
            <div className="space-y-2 text-sm">
              <Link to="/home" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors">
                <div className="text-gray-900">Home & Smart Bundles</div>
                <div className="text-gray-600 text-xs">AI-suggested bundles with savings</div>
              </Link>
              <Link to="/search-active" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors">
                <div className="text-gray-900">Agentic Search</div>
                <div className="text-gray-600 text-xs">Live 3-agent processing visualization</div>
              </Link>
              <Link to="/fondue-bundle" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors">
                <div className="text-gray-900">Bundle Result</div>
                <div className="text-gray-600 text-xs">Detailed bundle with AI explanations</div>
              </Link>
              <Link to="/in-store" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors">
                <div className="text-gray-900">In-Store Mode</div>
                <div className="text-gray-600 text-xs">Checklist + optimized path</div>
              </Link>
              <Link to="/visual-search" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors">
                <div className="text-gray-900">Visual Search</div>
                <div className="text-gray-600 text-xs">Multimodal product identification</div>
              </Link>
              <Link to="/supervisor-dashboard" className="block bg-gray-50 hover:bg-gray-100 rounded-lg p-3 transition-colors">
                <div className="text-gray-900">Supervisor Dashboard</div>
                <div className="text-gray-600 text-xs">KPIs & bundle review queue</div>
              </Link>
            </div>
          </section>

          {/* Tech Stack */}
          <section>
            <h2 className="text-xl text-gray-900 mb-4">Technology Stack</h2>
            <div className="bg-gray-50 rounded-xl p-4 space-y-3 text-sm">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="text-gray-600 mb-1">Frontend</div>
                  <div className="text-gray-900">React 18 + TypeScript</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Styling</div>
                  <div className="text-gray-900">Tailwind CSS v4</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Animation</div>
                  <div className="text-gray-900">Motion (Framer Motion)</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Routing</div>
                  <div className="text-gray-900">React Router 7</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">Vector DB</div>
                  <div className="text-gray-900">Qdrant</div>
                </div>
                <div>
                  <div className="text-gray-600 mb-1">AI Pattern</div>
                  <div className="text-gray-900">Agentic RAG</div>
                </div>
              </div>
            </div>
          </section>

          {/* Links */}
          <section className="space-y-2">
            <Link to="/showcase">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl transition-colors">
                View All Screens
              </button>
            </Link>
            <Link to="/features">
              <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-2xl hover:bg-gray-50 transition-colors">
                Technical Features
              </button>
            </Link>
            <Link to="/">
              <button className="w-full border-2 border-gray-300 text-gray-700 py-4 rounded-2xl hover:bg-gray-50 transition-colors">
                Back to App Selector
              </button>
            </Link>
          </section>
        </div>
      </div>
    </MobileFrame>
  );
}
