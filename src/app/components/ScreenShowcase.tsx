import { Link } from 'react-router';
import { motion } from 'motion/react';
import { 
  Home, 
  ShoppingCart, 
  Search, 
  Package, 
  MapPin, 
  Camera, 
  BarChart3, 
  FileCheck,
  ArrowLeft
} from 'lucide-react';

export function ScreenShowcase() {
  const migrosScreens = [
    { path: '/migros', name: 'Welcome', icon: Home, color: 'orange' },
    { path: '/personalization', name: 'Personalization', icon: ShoppingCart, color: 'orange' },
    { path: '/privacy', name: 'Privacy', icon: FileCheck, color: 'orange' },
    { path: '/onboarding-success', name: 'Success', icon: Package, color: 'orange' },
    { path: '/home', name: 'Home', icon: Home, color: 'orange' },
    { path: '/search-active', name: 'Search Active', icon: Search, color: 'orange' },
    { path: '/fondue-bundle', name: 'Bundle Result', icon: Package, color: 'orange' },
    { path: '/customize-bundle', name: 'Customize', icon: ShoppingCart, color: 'orange' },
    { path: '/stockout-case', name: 'Stockout', icon: Package, color: 'orange' },
    { path: '/in-store', name: 'In-Store Mode', icon: MapPin, color: 'blue' },
    { path: '/visual-search', name: 'Visual Search', icon: Camera, color: 'purple' },
  ];

  const supervisorScreens = [
    { path: '/supervisor-dashboard', name: 'Dashboard', icon: BarChart3, color: 'gray' },
    { path: '/supervisor-review', name: 'Review Bundle', icon: FileCheck, color: 'gray' },
  ];

  const colorClasses = {
    orange: 'bg-orange-100 text-orange-600 border-orange-200',
    blue: 'bg-blue-100 text-blue-600 border-blue-200',
    purple: 'bg-purple-100 text-purple-600 border-purple-200',
    gray: 'bg-gray-200 text-gray-700 border-gray-300',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Link to="/">
            <button className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to App Selector</span>
            </button>
          </Link>
          <h1 className="text-4xl mb-4">Dynamic Vector Demos</h1>
          <p className="text-gray-400">Explore all available screens across both applications</p>
        </div>

        {/* Migros Screens */}
        <div className="mb-12">
          <h2 className="text-2xl mb-6 text-orange-500">Migros Supermarket App</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {migrosScreens.map((screen) => (
              <Link key={screen.path} to={screen.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colorClasses[screen.color as keyof typeof colorClasses]} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <screen.icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-sm">{screen.name}</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Supervisor Screens */}
        <div>
          <h2 className="text-2xl mb-6 text-gray-400">Store Supervisor App</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {supervisorScreens.map((screen) => (
              <Link key={screen.path} to={screen.path}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${colorClasses[screen.color as keyof typeof colorClasses]} border-2 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow`}
                >
                  <screen.icon className="w-8 h-8 mx-auto mb-3" />
                  <div className="text-sm text-gray-800">{screen.name}</div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Tech info */}
        <div className="mt-12 p-6 bg-gray-800/50 border border-gray-700 rounded-2xl">
          <h3 className="text-lg mb-4">Technology Stack</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-400">
            <div>
              <div className="text-orange-500 mb-1">Vector DB</div>
              <div>Qdrant</div>
            </div>
            <div>
              <div className="text-orange-500 mb-1">Search</div>
              <div>BM42 Hybrid</div>
            </div>
            <div>
              <div className="text-orange-500 mb-1">AI Pattern</div>
              <div>Agentic RAG</div>
            </div>
            <div>
              <div className="text-orange-500 mb-1">Framework</div>
              <div>React + Motion</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
