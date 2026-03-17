import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
  showStatusBar?: boolean;
}

export function MobileFrame({ children, showStatusBar = true }: MobileFrameProps) {
  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="relative w-[390px] h-[844px] bg-white rounded-[50px] shadow-2xl overflow-hidden border-8 border-gray-800">
        {/* Phone notch */}
        {showStatusBar && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[30px] bg-gray-800 rounded-b-3xl z-50" />
        )}
        
        {/* Status bar */}
        {showStatusBar && (
          <div className="absolute top-0 left-0 right-0 h-[44px] flex items-center justify-between px-6 text-xs z-40">
            <span>9:41</span>
            <div className="flex gap-1 items-center">
              <div className="w-4 h-3 border border-gray-800 rounded-sm" />
              <div className="w-3 h-3 border border-gray-800 rounded-sm" />
              <div className="w-2 h-3 bg-gray-800 rounded-sm" />
            </div>
          </div>
        )}
        
        {/* Content */}
        <div className="h-full overflow-y-auto">
          {children}
        </div>
        
        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-800 rounded-full" />
      </div>
    </div>
  );
}
