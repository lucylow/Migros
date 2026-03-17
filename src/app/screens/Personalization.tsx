import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Leaf, Fish, Milk, Users } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState } from 'react';

export function Personalization() {
  const [dietary, setDietary] = useState<string[]>([]);
  const [languages, setLanguages] = useState<string[]>(['EN']);
  const [household, setHousehold] = useState(3);

  const toggleDietary = (value: string) => {
    setDietary(prev => 
      prev.includes(value) ? prev.filter(v => v !== value) : [...prev, value]
    );
  };

  const toggleLanguage = (lang: string) => {
    setLanguages(prev => 
      prev.includes(lang) ? prev.filter(l => l !== lang) : [...prev, lang]
    );
  };

  return (
    <MobileFrame>
      <div className="pt-[44px] px-6 pb-20 min-h-full bg-white">
        {/* Header */}
        <div className="flex items-center gap-4 py-4">
          <Link to="/">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6" />
            </button>
          </Link>
          <div className="flex-1">
            <div className="flex gap-2 justify-center">
              <div className="w-8 h-1 bg-orange-500 rounded-full" />
              <div className="w-8 h-1 bg-gray-200 rounded-full" />
              <div className="w-8 h-1 bg-gray-200 rounded-full" />
            </div>
          </div>
          <div className="w-10" /> {/* Spacer */}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-8"
        >
          {/* Title */}
          <div>
            <h1 className="text-2xl text-gray-900 mb-2">Help us personalize your shop</h1>
            <p className="text-gray-600">Your preferences help our AI create better bundles</p>
          </div>

          {/* Dietary preferences */}
          <div className="space-y-3">
            <label className="text-sm text-gray-700">Dietary preferences</label>
            <div className="flex flex-wrap gap-2">
              {[
                { value: 'vegan', label: 'Vegan', icon: Leaf },
                { value: 'vegetarian', label: 'Vegetarian', icon: Leaf },
                { value: 'pescatarian', label: 'Pescatarian', icon: Fish },
                { value: 'lactose-free', label: 'Lactose-free', icon: Milk },
              ].map(({ value, label, icon: Icon }) => (
                <button
                  key={value}
                  onClick={() => toggleDietary(value)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 transition-all ${
                    dietary.includes(value)
                      ? 'bg-orange-100 border-orange-500 text-orange-700'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-3">
            <label className="text-sm text-gray-700">Languages you speak</label>
            <div className="flex gap-2">
              {['DE', 'FR', 'IT', 'EN'].map((lang) => (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className={`flex-1 py-3 rounded-xl border-2 transition-all ${
                    languages.includes(lang)
                      ? 'bg-orange-500 border-orange-500 text-white'
                      : 'bg-white border-gray-300 text-gray-700 hover:border-gray-400'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Household size */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-sm text-gray-700 flex items-center gap-2">
                <Users className="w-4 h-4" />
                Household size
              </label>
              <span className="text-2xl text-orange-600">{household}</span>
            </div>
            <input
              type="range"
              min="1"
              max="6"
              value={household}
              onChange={(e) => setHousehold(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
            </div>
          </div>
        </motion.div>

        {/* Continue button */}
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[342px]">
          <Link to="/privacy">
            <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl transition-colors shadow-lg">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </MobileFrame>
  );
}
