import { MobileFrame } from '../components/MobileFrame';
import { MapPin, Check, ArrowRight, Navigation, Clock, X } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function InStoreMode() {
  const [checkedItems, setCheckedItems] = useState<number[]>([]);
  const [showOptimize, setShowOptimize] = useState(false);

  const items = [
    { name: 'Emmentaler AOP 400g', quantity: 3, aisle: 'Aisle 5', shelf: 'Shelf 3', order: 1 },
    { name: 'Bio Vollmilch 1L', quantity: 3, aisle: 'Aisle 8', shelf: 'Shelf 2', order: 3 },
    { name: 'Baguette Rustique', quantity: 2, aisle: 'Aisle 1', shelf: 'Shelf 1', order: 0 },
    { name: 'Cornichons', quantity: 1, aisle: 'Aisle 4', shelf: 'Shelf 5', order: 2 },
  ];

  const optimizedOrder = [2, 0, 3, 1]; // Bread -> Cheese -> Pickles -> Milk

  const [currentOrder, setCurrentOrder] = useState(items.map((_, i) => i));

  const toggleItem = (index: number) => {
    setCheckedItems(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const optimizePath = () => {
    setCurrentOrder(optimizedOrder);
    setShowOptimize(true);
  };

  const progress = Math.round((checkedItems.length / items.length) * 100);

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-20 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <div className="bg-orange-100 rounded-full p-2">
                <MapPin className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <div className="text-sm text-gray-900">In-Store Mode</div>
                <div className="text-xs text-gray-600">Migros Geneva Cornavin</div>
              </div>
            </div>
            <Link to="/home">
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </Link>
          </div>

          {/* Progress bar */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-gray-600">
              <span>Fondue Kit Progress</span>
              <span>{checkedItems.length} of {items.length} items</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>

        <div className="px-6 pt-6 space-y-4">
          {/* Optimize path button */}
          {!showOptimize && (
            <motion.button
              onClick={optimizePath}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2"
            >
              <Navigation className="w-5 h-5" />
              Optimize path for shortest route
            </motion.button>
          )}

          {showOptimize && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-blue-50 border-2 border-blue-200 rounded-2xl p-4 flex gap-3"
            >
              <Navigation className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-blue-900 mb-1">Route optimized!</h4>
                <p className="text-sm text-blue-700">
                  Reordered to minimize walking distance. Follow the list from top to bottom.
                </p>
              </div>
            </motion.div>
          )}

          {/* Estimated time */}
          <div className="bg-white rounded-2xl p-4 flex items-center gap-3">
            <Clock className="w-5 h-5 text-gray-600" />
            <div className="flex-1">
              <div className="text-sm text-gray-600">Estimated collection time</div>
              <div className="text-lg text-gray-900">~8 minutes</div>
            </div>
          </div>

          {/* Checklist */}
          <div className="space-y-3">
            {currentOrder.map((itemIndex, position) => {
              const item = items[itemIndex];
              const isChecked = checkedItems.includes(itemIndex);
              
              return (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: position * 0.1 }}
                  className={`bg-white rounded-2xl p-4 border-2 transition-all ${
                    isChecked 
                      ? 'border-green-200 bg-green-50/50' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex gap-4">
                    {/* Checkbox */}
                    <button
                      onClick={() => toggleItem(itemIndex)}
                      className={`flex-shrink-0 w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${
                        isChecked
                          ? 'bg-green-500 border-green-500'
                          : 'border-gray-300 hover:border-orange-400'
                      }`}
                    >
                      {isChecked && <Check className="w-5 h-5 text-white" />}
                    </button>

                    {/* Item info */}
                    <div className="flex-1">
                      <div className={`text-gray-900 mb-1 ${isChecked ? 'line-through text-gray-500' : ''}`}>
                        {item.name}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">Quantity: {item.quantity}</div>
                      
                      {/* Location */}
                      <div className="flex items-center gap-4">
                        <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs flex items-center gap-2">
                          <MapPin className="w-3 h-3" />
                          {item.aisle}
                        </div>
                        <div className="text-xs text-gray-600">{item.shelf}</div>
                      </div>
                    </div>

                    {/* Step indicator */}
                    <div className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center ${
                      isChecked
                        ? 'bg-green-500 border-green-500 text-white'
                        : 'border-orange-500 text-orange-600 bg-orange-50'
                    }`}>
                      {position + 1}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Visual search CTA */}
          <Link to="/visual-search">
            <motion.div
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg"
            >
              <h3 className="text-lg mb-2">Not sure which cheese?</h3>
              <p className="text-sm text-purple-100 mb-4">
                Use Visual Search to scan any cheese and get AI suggestions for your fondue.
              </p>
              <div className="flex items-center gap-2 text-sm">
                <span>Try Visual Search</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
