import { Button } from '../ui/button';
import { HardHat, Shield, Award, Gift } from 'lucide-react';

interface OnboardingScreenProps {
  onNavigate: (screen: number) => void;
}

export function OnboardingScreen({ onNavigate }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-500 to-orange-700 flex flex-col items-center justify-between p-8 text-white">
      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="relative">
          <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="relative bg-white/10 backdrop-blur-sm p-8 rounded-full border-4 border-white/30">
            <HardHat className="w-24 h-24 text-white" />
          </div>
        </div>
        
        <div className="text-center space-y-3">
          <h1 className="text-white">SkinGuard</h1>
          <p className="text-lg text-orange-100">
            Protecting Construction Workers
          </p>
          <p className="text-sm text-orange-200 max-w-sm">
            AI-powered skin disease detection with rewards for staying safe
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center">
            <Shield className="w-8 h-8 mx-auto mb-2 text-white" />
            <p className="text-sm">Early Detection</p>
            <p className="text-xs text-orange-100">Catch issues early</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center">
            <Award className="w-8 h-8 mx-auto mb-2 text-white" />
            <p className="text-sm">Earn Rewards</p>
            <p className="text-xs text-orange-100">Get safety points</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center">
            <Gift className="w-8 h-8 mx-auto mb-2 text-white" />
            <p className="text-sm">Free Products</p>
            <p className="text-xs text-orange-100">Claim PPE items</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center">
            <HardHat className="w-8 h-8 mx-auto mb-2 text-white" />
            <p className="text-sm">Stay Protected</p>
            <p className="text-xs text-orange-100">Expert guidance</p>
          </div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <Button
          onClick={() => onNavigate(1)}
          className="w-full bg-white text-orange-600 hover:bg-orange-50"
          size="lg"
        >
          Get Started
        </Button>
        <p className="text-xs text-center text-orange-200">
          Takes less than 3 minutes • Completely free
        </p>
      </div>
    </div>
  );
}
