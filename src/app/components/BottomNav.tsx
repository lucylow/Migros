import { Home, Compass, ShoppingCart, Sparkles, User } from 'lucide-react';

interface BottomNavProps {
  activeTab?: 'home' | 'browse' | 'cart' | 'vector' | 'profile';
}

export function BottomNav({ activeTab = 'home' }: BottomNavProps) {
  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'browse', icon: Compass, label: 'Browse' },
    { id: 'cart', icon: ShoppingCart, label: 'Cart' },
    { id: 'vector', icon: Sparkles, label: 'Vector', hasNotification: true },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-[390px] bg-white border-t border-gray-200 px-6 py-3 flex justify-around items-center">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        const Icon = tab.icon;
        return (
          <button
            key={tab.id}
            className={`flex flex-col items-center gap-1 ${
              isActive ? 'text-orange-500' : 'text-gray-400'
            }`}
          >
            {tab.hasNotification && (
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            )}
            <div className="relative">
              {tab.hasNotification && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              )}
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs">{tab.label}</span>
          </button>
        );
      })}
    </div>
  );
}
