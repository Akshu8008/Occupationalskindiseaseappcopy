import { Button } from '../ui/button';
import { Camera, Shield, TrendingUp } from 'lucide-react';

interface Onboarding1Props {
  onNavigate: (screen: number) => void;
}

export function Onboarding1({ onNavigate }: Onboarding1Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col p-8">
      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-8 rounded-3xl">
          <Camera className="w-24 h-24 text-orange-600" />
        </div>

        <div className="text-center space-y-3">
          <h2 className="text-orange-600">Early Detection Saves Lives</h2>
          <p className="text-gray-600 max-w-sm">
            Construction workers face daily exposure to harmful substances. SkinGuard helps you detect skin conditions early.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 w-full max-w-xs">
          <div className="text-center space-y-2">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <Camera className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-xs text-gray-600">Scan</p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-xs text-gray-600">Analyze</p>
          </div>
          <div className="text-center space-y-2">
            <div className="bg-purple-100 p-3 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-xs text-gray-600">Protect</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-center gap-2">
          <div className="w-8 h-1 bg-orange-600 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => onNavigate(4)}
            variant="outline"
            className="flex-1"
          >
            Skip
          </Button>
          <Button
            onClick={() => onNavigate(2)}
            className="flex-1 bg-orange-600 hover:bg-orange-700"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
