import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { Progress } from '../ui/progress';
import { UserData } from '../../App';
import { 
  Camera, 
  Award, 
  Gift, 
  TrendingUp,
  Sun,
  Shield,
  Flame
} from 'lucide-react';

interface HomeDashboardProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
}

export function HomeDashboard({ onNavigate, userData }: HomeDashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="bg-white shadow-sm border-b p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2>Welcome back, {userData.name}!</h2>
            <p className="text-sm text-gray-600">Stay safe on site today</p>
          </div>
          <div className="flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-full">
            <Award className="w-4 h-4 text-orange-600" />
            <span className="text-orange-600">{userData.points} pts</span>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl p-4 text-white">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-orange-100">Your Safety Score</span>
            <Badge className="bg-white/20 text-white border-0">Level 3</Badge>
          </div>
          <div className="flex items-center gap-3">
            <Progress value={75} className="flex-1 h-2 bg-white/30" />
            <span className="text-sm">75%</span>
          </div>
          <p className="text-xs text-orange-100 mt-2">250 more points to Level 4</p>
        </div>
      </header>

      <div className="p-6 space-y-6">
        <Alert className="bg-yellow-50 border-yellow-200">
          <Sun className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-sm text-yellow-800">
            <strong>UV Alert:</strong> High UV index today (8/10). Apply SPF 30+ sunscreen every 2 hours.
          </AlertDescription>
        </Alert>

        <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-lg">
              <Camera className="w-5 h-5 text-orange-600" />
              Daily Skin Check
            </CardTitle>
            <CardDescription className="text-sm">
              Earn 50 points • Takes 2 minutes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={() => onNavigate(5)}
              className="w-full bg-orange-600 hover:bg-orange-700"
              size="lg"
            >
              Start Scan
            </Button>
          </CardContent>
        </Card>

        <div className="grid grid-cols-3 gap-3">
          <Card className="text-center cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
              <p className="text-xs">7 Day Streak</p>
              <p className="text-sm">🔥</p>
            </CardContent>
          </Card>

          <Card 
            className="text-center cursor-pointer hover:shadow-md transition-shadow"
            onClick={() => onNavigate(9)}
          >
            <CardContent className="p-4">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Gift className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-xs">Free Items</p>
              <Badge variant="destructive" className="text-xs">New</Badge>
            </CardContent>
          </Card>

          <Card className="text-center cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-xs">12 Scans</p>
              <p className="text-sm text-gray-600">Total</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Your Risk Profile</CardTitle>
            <CardDescription className="text-sm">Based on your exposure data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm">Cement Exposure</span>
              </div>
              <Badge variant="destructive" className="text-xs">High Risk</Badge>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">Sun Exposure</span>
              </div>
              <Badge className="bg-yellow-500 text-xs">Medium Risk</Badge>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <Flame className="w-10 h-10 text-orange-500" />
              <div className="flex-1">
                <p className="text-sm mb-1">🎯 Daily Challenge</p>
                <p className="text-xs text-gray-700">Complete 1 scan today</p>
                <p className="text-xs text-purple-600 mt-1">+100 bonus points</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
