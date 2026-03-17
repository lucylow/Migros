import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Camera, Sparkles, Check, Zap } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function VisualSearch() {
  const [captured, setCaptured] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleCapture = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setAnalyzing(false);
      setCaptured(true);
    }, 2000);
  };

  return (
    <MobileFrame>
      <div className="pt-[44px] min-h-full bg-black relative">
        {/* Camera view */}
        {!captured && !analyzing && (
          <>
            {/* Header */}
            <div className="absolute top-[44px] left-0 right-0 p-6 z-10 flex items-center justify-between">
              <Link to="/in-store">
                <button className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center text-white">
                  <ArrowLeft className="w-6 h-6" />
                </button>
              </Link>
              <div className="bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
                Visual Search
              </div>
              <div className="w-10" />
            </div>

            {/* Camera viewfinder */}
            <div className="h-full flex items-center justify-center relative">
              {/* Simulated camera view with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900" />
              
              {/* Scanning frame */}
              <div className="relative z-10 w-80 h-80">
                <div className="absolute inset-0 border-4 border-white/30 rounded-3xl" />
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-orange-500 rounded-tl-3xl" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-orange-500 rounded-tr-3xl" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-orange-500 rounded-bl-3xl" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-orange-500 rounded-br-3xl" />
                
                {/* Center icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-white/50" />
                </div>
              </div>

              {/* Scanning line animation */}
              <motion.div
                className="absolute inset-x-20 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent"
                animate={{ y: [0, 320, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              />
            </div>

            {/* Instructions */}
            <div className="absolute bottom-32 left-0 right-0 px-6 z-10">
              <div className="bg-black/70 backdrop-blur-md rounded-2xl p-6 text-white">
                <h3 className="text-lg mb-2">Take a photo of any cheese</h3>
                <p className="text-sm text-white/80">
                  We'll suggest the best fondue mix using Dynamic Vector multimodal RAG
                </p>
              </div>
            </div>

            {/* Capture button */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
              <button
                onClick={handleCapture}
                className="w-20 h-20 bg-white rounded-full border-4 border-gray-300 flex items-center justify-center hover:scale-105 transition-transform active:scale-95"
              >
                <div className="w-16 h-16 bg-white rounded-full border-2 border-gray-400" />
              </button>
            </div>
          </>
        )}

        {/* Analyzing state */}
        {analyzing && (
          <div className="h-full flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 mx-auto mb-6 border-4 border-orange-500 border-t-transparent rounded-full"
              />
              <h3 className="text-white text-xl mb-2">Analyzing cheese...</h3>
              <p className="text-white/70 text-sm">Using multimodal vector search</p>
            </motion.div>
          </div>
        )}

        {/* Results */}
        {captured && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full bg-white overflow-y-auto"
          >
            <div className="pt-6 pb-20">
              {/* Header */}
              <div className="px-6 mb-6 flex items-center justify-between">
                <Link to="/in-store">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <ArrowLeft className="w-6 h-6" />
                  </button>
                </Link>
                <div className="text-center flex-1">
                  <div className="text-sm text-gray-900">Visual Search Result</div>
                  <div className="text-xs text-orange-600">Multimodal RAG</div>
                </div>
                <div className="w-10" />
              </div>

              {/* Scanned image */}
              <div className="px-6 mb-6">
                <div className="bg-gradient-to-br from-orange-100 to-orange-50 rounded-2xl p-8 flex items-center justify-center">
                  <img
                    src="https://images.unsplash.com/photo-1629136563988-59570ae259d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMHdoZWVscyUyMHllbGxvd3xlbnwxfHx8fDE3NzM3NjAwMzV8MA&ixlib=rb-4.1.0&q=80&w=400"
                    alt="Scanned cheese"
                    className="w-full h-48 object-cover rounded-xl"
                  />
                </div>
              </div>

              {/* Identified product */}
              <div className="px-6 mb-6">
                <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-4 flex gap-3">
                  <div className="bg-green-100 rounded-full p-2 h-fit">
                    <Check className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-green-900 mb-1">Identified: Gruyère AOP</h3>
                    <p className="text-sm text-green-700">
                      Perfect for fondue! Found in Aisle 5, Shelf 3
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Suggestions */}
              <div className="px-6 space-y-4">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-orange-500" />
                  <h3 className="text-lg text-gray-900">Suggested fondue mix</h3>
                </div>

                <div className="bg-white border-2 border-orange-200 rounded-2xl p-4 space-y-3">
                  <h4 className="text-gray-900">Recommended combination:</h4>
                  
                  {[
                    { cheese: 'Gruyère AOP', amount: '50%', note: 'You found this!' },
                    { cheese: 'Emmentaler AOP', amount: '30%', note: 'In your bundle' },
                    { cheese: 'Vacherin Fribourgeois', amount: '20%', note: 'Add for richness' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between pb-3 border-b border-gray-100 last:border-0">
                      <div className="flex-1">
                        <div className="text-gray-900">{item.cheese}</div>
                        <div className="text-xs text-gray-600">{item.note}</div>
                      </div>
                      <div className="text-orange-600">{item.amount}</div>
                    </div>
                  ))}
                </div>

                {/* Bundle modification suggestion */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <Zap className="w-6 h-6 flex-shrink-0" />
                    <div>
                      <h4 className="mb-1">Update your bundle?</h4>
                      <p className="text-sm text-purple-100">
                        Replace some Emmentaler with Gruyère for a more authentic Geneva-style fondue
                      </p>
                    </div>
                  </div>
                  <button className="w-full bg-white text-purple-600 py-3 rounded-xl hover:bg-purple-50 transition-colors">
                    Update bundle
                  </button>
                </motion.div>

                {/* How it works */}
                <div className="bg-gray-50 rounded-2xl p-4">
                  <h4 className="text-sm text-gray-700 mb-3 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-gray-600" />
                    Powered by Dynamic Vector
                  </h4>
                  <ul className="space-y-2 text-xs text-gray-600">
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Image analyzed using multimodal vector embeddings</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Matched against 5,000+ cheese products in Qdrant</span>
                    </li>
                    <li className="flex gap-2">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                      <span>Recipe suggestions from 10,000+ successful fondue orders</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </MobileFrame>
  );
}
