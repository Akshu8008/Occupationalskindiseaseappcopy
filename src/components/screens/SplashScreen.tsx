import { HardHat, Shield } from 'lucide-react';
import { Button } from '../ui/button';

interface SplashScreenProps {
  onNavigate: (screen: number) => void;
}

export function SplashScreen({ onNavigate }: SplashScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-700 flex flex-col items-center justify-center p-8 text-white">
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm p-6 rounded-full border-4 border-white/30">
            <HardHat className="w-20 h-20 text-white" />
          </div>
        </div>
        
        <div className="text-center space-y-2">
          <h1 className="text-white">SkinGuard</h1>
          <p className="text-orange-100">
            Protecting Construction Workers
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-orange-100">
          <Shield className="w-4 h-4" />
          <span>Occupational Skin Disease Detection</span>
        </div>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-8">
        <Button
          onClick={() => onNavigate(1)}
          className="w-full bg-white text-orange-600 hover:bg-orange-50"
          size="lg"
        >
          Get Started
        </Button>
      </div>

      <div className="absolute bottom-4 text-xs text-orange-200">
        Version 1.0.0
      </div>
    </div>
  );
}
