import { HexagonBackground } from '@/components/HexagonBackground';

export const HexagonTest = () => {
  return (
    <div className="min-h-screen w-full relative">
      <HexagonBackground className="absolute inset-0" />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen pointer-events-none">
        <div className="text-center p-8 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-2xl shadow-2xl max-w-2xl mx-4 pointer-events-auto">
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Hexagon Background Test
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            This is a demonstration of the hexagon background component.
            Hover over the hexagons to see the interactive effects.
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-4 bg-gray-100 dark:bg-neutral-800 rounded-lg">
              <div className="font-semibold text-gray-900 dark:text-white mb-2">Features</div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li>• Responsive grid</li>
                <li>• Dark/light mode support</li>
                <li>• Hover interactions</li>
                <li>• Customizable size</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-100 dark:bg-neutral-800 rounded-lg">
              <div className="font-semibold text-gray-900 dark:text-white mb-2">Customization</div>
              <ul className="text-gray-700 dark:text-gray-300 space-y-1">
                <li>• hexagonSize prop</li>
                <li>• hexagonMargin prop</li>
                <li>• Custom className</li>
                <li>• Hexagon styling</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
