import { MobileFrame } from '../components/MobileFrame';
import { ArrowLeft, Sparkles, Smartphone, Monitor, Image as ImageIcon, TrendingUp } from 'lucide-react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

export function SupervisorAdPreview() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const adVariants = [
    {
      title: 'Fondue-Abend für 6!',
      text: 'Emmentaler + Gruyère + Baguette = 12% günstiger',
      cta: 'Jetzt bestellen',
      tag: '+18% CTR | Lagerbewusst',
      image: 'https://images.unsplash.com/photo-1661234331372-512ebfa009e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGZvbmR1ZSUyMHBvdCUyMG1lbHRlZHxlbnwxfHx8fDE3NzM3NjAwMjl8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Schweizer Käse-Festival',
      text: '3 Premium-Käsesorten im Bundle',
      cta: 'Bundle ansehen',
      tag: '+14% CTR | Saisonoptimiert',
      image: 'https://images.unsplash.com/photo-1629136563988-59570ae259d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMHdoZWVscyUyMHllbGxvd3xlbnwxfHx8fDE3NzM3NjAwMzV8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Genfer Spezialität',
      text: 'Fondue-Zutaten aus lokaler Produktion',
      cta: 'Mehr erfahren',
      tag: '+16% CTR | Regional',
      image: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGNoZWVzZSUyMGNyZWFteXxlbnwxfHx8fDE3NDI0MTk2MjJ8MA&ixlib=rb-4.1.0&q=80&w=400',
    },
    {
      title: 'Wochenend-Special',
      text: 'Fondue-Set mit Fendant-Wein',
      cta: 'Set kaufen',
      tag: '+20% CTR | Combo-Deal',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGl0ZSUyMHdpbmUlMjBib3R0bGV8ZW58MXx8fHwxNzQyNDE5NjIzfDA&ixlib=rb-4.1.0&q=80&w=400',
    },
  ];

  return (
    <MobileFrame>
      <div className="pt-[44px] pb-24 min-h-full bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
          <Link to="/supervisor-ad-brief">
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <ArrowLeft className="w-6 h-6 text-gray-700" />
            </button>
          </Link>
          <div className="text-center flex-1">
            <div className="text-sm text-gray-900">KI-Werbevarianten</div>
            <div className="text-xs text-[#FF6600]">4 Optionen generiert</div>
          </div>
          <div className="w-8" />
        </div>

        {loading ? (
          <div className="px-6 pt-12 space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                className="w-16 h-16 mx-auto mb-4 border-4 border-[#FF6600] border-t-transparent rounded-full"
              />
              <h3 className="text-gray-900 mb-2">Dynamic Vector generiert...</h3>
              <p className="text-sm text-gray-600">Analysiere Lagerbestand & Kaufverhalten</p>
            </motion.div>

            {/* Skeleton cards */}
            <div className="space-y-3 pt-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl p-4 border border-gray-200 animate-pulse">
                  <div className="flex gap-3">
                    <div className="w-20 h-20 bg-gray-200 rounded-lg" />
                    <div className="flex-1 space-y-2">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="space-y-4"
          >
            {/* Success badge */}
            <div className="px-6 pt-6">
              <div className="bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-green-600" />
                  <span className="text-sm text-green-900 font-medium">4 Varianten erfolgreich erstellt</span>
                </div>
              </div>
            </div>

            {/* Ad variants */}
            <div className="px-6 space-y-3 pb-6">
              {adVariants.map((ad, index) => (
                <Link key={index} to="/supervisor-ad-detail">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-[#FF6600] transition-all shadow-sm hover:shadow-md"
                  >
                    <div className="flex gap-4 p-4">
                      <div className="w-24 h-24 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl overflow-hidden flex-shrink-0">
                        <img
                          src={ad.image}
                          alt={ad.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 space-y-2">
                        <h3 className="text-sm text-gray-900 font-medium">{ad.title}</h3>
                        <p className="text-xs text-gray-600 leading-relaxed">{ad.text}</p>
                        <div className="flex items-center justify-between">
                          <div className="text-xs text-[#FF6600] font-medium">{ad.cta}</div>
                          <div className="bg-purple-50 text-purple-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            {ad.tag.split(' | ')[0]}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Smartphone className="w-3 h-3" />
                            App
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <Monitor className="w-3 h-3" />
                            Display
                          </div>
                          <div className="flex items-center gap-1 text-xs text-gray-500">
                            <ImageIcon className="w-3 h-3" />
                            Story
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </MobileFrame>
  );
}
