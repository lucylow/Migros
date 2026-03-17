import { Link } from 'react-router';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function QuickNav() {
  const [isOpen, setIsOpen] = useState(false);

  const sections = [
    {
      title: 'Migros Customer Flow',
      links: [
        { path: '/migros', label: 'Welcome' },
        { path: '/home', label: 'Home' },
        { path: '/fondue-bundle', label: 'Bundle Result' },
        { path: '/in-store', label: 'In-Store Mode' },
      ],
    },
    {
      title: 'Supervisor',
      links: [
        { path: '/supervisor-dashboard', label: 'Dashboard' },
        { path: '/supervisor-review', label: 'Review' },
      ],
    },
    {
      title: 'Navigation',
      links: [
        { path: '/', label: 'App Selector' },
        { path: '/showcase', label: 'All Screens' },
      ],
    },
  ];

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 w-12 h-12 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Menu overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25 }}
              className="fixed right-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-40 overflow-y-auto"
            >
              <div className="p-6">
                <div className="mb-8">
                  <h2 className="text-2xl text-gray-900 mb-2">Quick Navigation</h2>
                  <p className="text-sm text-gray-600">Jump to any screen</p>
                </div>

                <div className="space-y-6">
                  {sections.map((section) => (
                    <div key={section.title}>
                      <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3">
                        {section.title}
                      </h3>
                      <div className="space-y-1">
                        {section.links.map((link) => (
                          <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors"
                          >
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-gray-600">
                    <span className="text-orange-600">Tip:</span> Use this menu to quickly navigate between different user flows and screens.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
