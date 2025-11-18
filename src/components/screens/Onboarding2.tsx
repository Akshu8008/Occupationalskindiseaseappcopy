import { Button } from '../ui/button';
import { FileText, Bell, History } from 'lucide-react';

interface Onboarding2Props {
  onNavigate: (screen: number) => void;
}

export function Onboarding2({ onNavigate }: Onboarding2Props) {
  return (
    <div className="min-h-screen bg-white flex flex-col p-8">
      <div className="flex-1 flex flex-col items-center justify-center space-y-8">
        <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-8 rounded-3xl">
          <FileText className="w-24 h-24 text-blue-600" />
        </div>

        <div className="text-center space-y-3">
          <h2 className="text-blue-600">Track Your Skin Health</h2>
          <p className="text-gray-600 max-w-sm">
            Keep a comprehensive history of your scans, monitor changes over time, and receive personalized recommendations.
          </p>
        </div>

        <div className="space-y-4 w-full max-w-sm">
          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
            <div className="bg-green-100 p-2 rounded-lg">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-sm">Detailed Reports</p>
              <p className="text-xs text-gray-500">Get instant analysis results</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
            <div className="bg-purple-100 p-2 rounded-lg">
              <History className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <p className="text-sm">History Tracking</p>
              <p className="text-xs text-gray-500">Monitor your progress</p>
            </div>
          </div>
          <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-lg">
            <div className="bg-orange-100 p-2 rounded-lg">
              <Bell className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <p className="text-sm">Smart Reminders</p>
              <p className="text-xs text-gray-500">Never miss a check-up</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-center gap-2">
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
          <div className="w-8 h-1 bg-blue-600 rounded-full"></div>
          <div className="w-8 h-1 bg-gray-200 rounded-full"></div>
        </div>
        <div className="flex gap-2">
          <Button
            onClick={() => onNavigate(1)}
            variant="outline"
            className="flex-1"
          >
            Back
          </Button>
          <Button
            onClick={() => onNavigate(3)}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
