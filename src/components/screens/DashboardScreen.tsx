import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { 
  Camera, 
  History, 
  BookOpen, 
  User, 
  Bell, 
  AlertTriangle,
  TrendingUp,
  Shield
} from 'lucide-react';

interface DashboardScreenProps {
  onNavigate: (screen: number) => void;
}

export function DashboardScreen({ onNavigate }: DashboardScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="bg-white shadow-sm border-b p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2>Good morning, Alex</h2>
            <p className="text-sm text-gray-600">Stay safe on site</p>
          </div>
          <div className="flex gap-2">
            <Button
              onClick={() => onNavigate(11)}
              variant="outline"
              size="icon"
            >
              <Bell className="w-4 h-4" />
            </Button>
            <Button
              onClick={() => onNavigate(11)}
              variant="outline"
              size="icon"
            >
              <User className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4">
        <Alert className="bg-orange-50 border-orange-200">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800 text-sm">
            UV index is high today. Apply SPF 30+ sunscreen.
          </AlertDescription>
        </Alert>

        <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Camera className="w-5 h-5 text-orange-600" />
              Quick Skin Check
            </CardTitle>
            <CardDescription className="text-sm">
              Scan your skin in less than 2 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => onNavigate(5)}
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              Start New Scan
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Card 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onNavigate(9)}
          >
            <CardContent className="p-4 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <History className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm">History</p>
              <p className="text-xs text-gray-500">3 scans</p>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onNavigate(10)}
          >
            <CardContent className="p-4 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm">Learn</p>
              <p className="text-xs text-gray-500">Prevention tips</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="bg-green-100 p-2 rounded-lg">
                <TrendingUp className="w-4 h-4 text-green-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">Last scan: 2 days ago</p>
                <p className="text-xs text-gray-500">Contact Dermatitis - Low risk</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Shield className="w-4 h-4 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm">Safety streak: 7 days</p>
                <p className="text-xs text-gray-500">Keep protecting your skin!</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4">
            <p className="text-sm mb-2">💡 Did you know?</p>
            <p className="text-sm text-gray-700">
              Wearing nitrile gloves reduces cement dermatitis risk by 90%.
            </p>
          </CardContent>
        </Card>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-md mx-auto flex justify-around p-2">
          <Button variant="ghost" className="flex-col h-auto py-2 text-orange-600">
            <Camera className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(9)}
          >
            <History className="w-5 h-5" />
            <span className="text-xs mt-1">History</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(10)}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs mt-1">Learn</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(11)}
          >
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </div>
      </nav>
    </div>
  );
}
