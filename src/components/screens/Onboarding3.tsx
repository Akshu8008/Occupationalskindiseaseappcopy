import { Button } from '../ui/button';
import { Shield, Lock, UserCheck } from 'lucide-react';
import { Alert, AlertDescription } from '../ui/alert';

interface Onboarding3Props {
  onNavigate: (screen: number) => void;
}

export function Onboarding3({ onNavigate }: Onboarding3Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col p-8">
      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="bg-gradient-to-br from-green-100 to-green-200 p-8 rounded-3xl">
          <Shield className="w-24 h-24 text-green-600" />
        </div>

        <div className="text-center space-y-3">
          <h2 className="text-green-600">Your Privacy Matters</h2>
          <p className="text-gray-600 max-w-sm">
            Your health data is encrypted and stored securely. We never share your information without consent.
          </p>
        </div>

        <div className="space-y-3 w-full max-w-sm">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <Lock className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">End-to-end encryption</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <Shield className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">HIPAA compliant storage</span>
          </div>
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
            <UserCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
            <span className="text-sm text-gray-700">You control your data</span>
          </div>
        </div>

        <Alert className="w-full max-w-sm bg-yellow-50 border-yellow-200">
          <AlertDescription className="text-sm text-yellow-800">
            <strong>Important:</strong> This app provides screening support only and does not replace professional medical advice.
          </AlertDescription>
        </Alert>
      </div>

      <div className="space-y-3">
        <div className="flex justify-center gap-2">
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-1 bg-green-600 rounded-full"></div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => onNavigate(2)}
            variant="outline"
            className="flex-1"
          >
            Back
          </Button>
          <Button
            onClick={() => onNavigate(4)}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
