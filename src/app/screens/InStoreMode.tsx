import { MobileFrame } from '../components/MobileFrame';
import { MapPin, Check, ArrowRight, Navigation, Clock, X, Camera, Sparkles, ShoppingCart, Package } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';
import { BottomNav } from '../components/BottomNav';

export function InStoreMode() {
  const [selectedLocation, setSelectedLocation] = useState('cornavin');
  const [showLocationPicker, setShowLocationPicker] = useState(false);

  const locations = [
    {
      id: 'cornavin',
      name: 'Migros Geneva Cornavin',
      address: 'Rue du Mont-Blanc 30, 1201 Geneva',
      distance: '0.2 km',
      isOpen: true,
      closesAt: '21:00',
    },
    {
      id: 'carouge',
      name: 'Migros Carouge',
      address: 'Rue Saint-Joseph 24, 1227 Carouge',
      distance: '2.5 km',
      isOpen: true,
      closesAt: '20:00',
    },
  ];

  const currentStore = locations.find((loc) => loc.id === selectedLocation) || locations[0];

  const inStoreFeatures = [
    {
      icon: Navigation,
      title: 'Smart Navigation',
      description: 'Find your fondue items with aisle-by-aisle guidance',
      color: 'text-blue-600',
      bg: 'bg-blue-100',
      link: '/home',
    },
    {
      icon: Camera,
      title: 'Visual Search',
      description: 'Take a photo of any product to get instant info',
      color: 'text-purple-600',
      bg: 'bg-purple-100',
      link: '/visual-search',
    },
    {
      icon: Package,
      title: 'Stock Check',
      description: 'Real-time inventory with exact shelf locations',
      color: 'text-green-600',
      bg: 'bg-green-100',
      link: '/home',
    },
    {
      icon: Sparkles,
      title: 'Instant Bundles',
      description: 'Get AI suggestions based on what you see',
      color: 'text-orange-600',
      bg: 'bg-orange-100',
      link: '/fondue-bundle',
    },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gradient-to-b from-blue-50 to-white">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <MapPin className="w-5 h-5" />
                <span className="text-sm text-blue-100">In-Store Mode Active</span>
              </div>
              <h1 className="text-xl mb-1">{currentStore.name}</h1>
              <p className="text-sm text-blue-100">{currentStore.address}</p>
            </div>
            <Link to="/home">
              <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <X className="w-5 h-5" />
              </button>
            </Link>
          </div>

          <div className="flex items-center justify-between bg-white/20 backdrop-blur-sm rounded-xl p-3">
            <div className="flex items-center gap-3">
              <div className="bg-green-400 rounded-full p-1.5">
                <Check className="w-3 h-3 text-white" />
              </div>
              <div>
                <div className="text-sm font-medium">Store is open</div>
                <div className="text-xs text-blue-100">Closes at {currentStore.closesAt}</div>
              </div>
            </div>
            <button
              onClick={() => setShowLocationPicker(!showLocationPicker)}
              className="text-sm text-white underline"
            >
              Change
            </button>
          </div>
        </div>

        {/* Location picker */}
        {showLocationPicker && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="bg-white border-b border-gray-200 px-6 py-4 space-y-3"
          >
            <h3 className="text-sm text-gray-700">Select a store:</h3>
            {locations.map((location) => (
              <button
                key={location.id}
                onClick={() => {
                  setSelectedLocation(location.id);
                  setShowLocationPicker(false);
                }}
                className={`w-full text-left p-3 rounded-xl border-2 transition-all ${
                  selectedLocation === location.id
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h4 className="text-sm text-gray-900 mb-1">{location.name}</h4>
                    <p className="text-xs text-gray-600">{location.address}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="text-xs text-gray-500">{location.distance} away</div>
                      {location.isOpen && (
                        <div className="text-xs text-green-600 flex items-center gap-1">
                          <Check className="w-3 h-3" />
                          Open until {location.closesAt}
                        </div>
                      )}
                    </div>
                  </div>
                  {selectedLocation === location.id && (
                    <Check className="w-5 h-5 text-orange-500 flex-shrink-0 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </motion.div>
        )}

        <div className="px-6 pt-6 space-y-6">
          {/* Active shopping list */}
          <div className="bg-white rounded-2xl p-4 border-2 border-orange-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-orange-500" />
                <h2 className="text-gray-900">Your fondue bundle</h2>
              </div>
              <div className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full">
                8 items
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              We'll guide you through the store to collect all items
            </p>
            <Link to="/home">
              <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:shadow-md transition-shadow">
                Start shopping navigation
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
          </div>

          {/* In-store features */}
          <div>
            <h2 className="text-lg text-gray-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-orange-500" />
              In-store features
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {inStoreFeatures.map((feature, index) => (
                <Link key={index} to={feature.link}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-4 border border-gray-200 hover:shadow-md transition-all"
                  >
                    <div className={`${feature.bg} rounded-xl p-3 w-fit mb-3`}>
                      <feature.icon className={`w-6 h-6 ${feature.color}`} />
                    </div>
                    <h3 className="text-sm text-gray-900 mb-1">{feature.title}</h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>

          {/* How it works */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-4 border border-gray-200">
            <h3 className="text-sm text-gray-900 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4 text-orange-500" />
              How In-Store Mode works
            </h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Real-time inventory check across 50,000+ products at this location</span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>AI agents optimize your shopping route by aisle to save time</span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Visual search powered by multimodal vector embeddings in Qdrant</span>
              </li>
              <li className="flex gap-2">
                <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>Instant bundle suggestions based on your location and browsing</span>
              </li>
            </ul>
          </div>

          {/* Stockout handling */}
          <div className="bg-yellow-50 border-2 border-yellow-200 rounded-2xl p-4">
            <h3 className="text-sm text-yellow-900 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Out of stock? No problem
            </h3>
            <p className="text-xs text-yellow-800 mb-3">
              If any item is unavailable, our AI agents will instantly suggest alternatives based on your preferences and what's in stock.
            </p>
            <Link to="/stockout-case">
              <button className="text-xs text-yellow-900 underline flex items-center gap-1">
                See how it works
                <ArrowRight className="w-3 h-3" />
              </button>
            </Link>
          </div>
        </div>

        {/* Bottom nav */}
        <BottomNav activeTab="home" />
      </div>
    </MobileFrame>
  );
}
