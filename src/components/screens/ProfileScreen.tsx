import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback } from '../ui/avatar';
import { Switch } from '../ui/switch';
import { Label } from '../ui/label';
import { Separator } from '../ui/separator';
import { 
  User,
  Bell,
  Shield,
  HelpCircle,
  Settings,
  ChevronRight,
  ChevronLeft,
  Camera,
  Mail,
  Phone,
  Briefcase,
  LogOut
} from 'lucide-react';

interface ProfileScreenProps {
  onNavigate: (screen: number) => void;
}

export function ProfileScreen({ onNavigate }: ProfileScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="bg-white border-b p-4">
        <div className="flex items-center gap-3">
          <Button
            onClick={() => onNavigate(4)}
            variant="ghost"
            size="icon"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2>Profile & Settings</h2>
            <p className="text-sm text-gray-600">Manage your account</p>
          </div>
        </div>
      </header>

      <div className="p-4 space-y-4 pb-20">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  <AvatarFallback className="bg-orange-500 text-white text-2xl">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <button className="absolute bottom-0 right-0 bg-white rounded-full p-1 shadow-md border">
                  <Camera className="w-3 h-3 text-gray-600" />
                </button>
              </div>
              <div className="flex-1">
                <h3>Alex Johnson</h3>
                <p className="text-sm text-gray-600">Construction Worker</p>
                <p className="text-xs text-gray-500 mt-1">Member since Oct 2025</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 text-sm">
              <Mail className="w-4 h-4 text-gray-400" />
              <span>alex.johnson@construction.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Phone className="w-4 h-4 text-gray-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <Briefcase className="w-4 h-4 text-gray-400" />
              <span>ABC Construction Co.</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
            <CardDescription className="text-sm">Manage your alert preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="scan-reminders">Scan Reminders</Label>
                <p className="text-xs text-gray-500">Weekly check-up notifications</p>
              </div>
              <Switch id="scan-reminders" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="safety-alerts">Safety Alerts</Label>
                <p className="text-xs text-gray-500">UV warnings and hazard notices</p>
              </div>
              <Switch id="safety-alerts" defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="health-tips">Health Tips</Label>
                <p className="text-xs text-gray-500">Daily prevention advice</p>
              </div>
              <Switch id="health-tips" />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-1">
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Settings className="w-5 h-5 text-gray-600" />
                <span className="text-sm">App Preferences</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-600" />
                <span className="text-sm">Privacy & Security</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
            <button className="w-full flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-gray-600" />
                <span className="text-sm">Help & Support</span>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </CardContent>
        </Card>

        <Card className="border-red-200">
          <CardContent className="p-4">
            <Button variant="ghost" className="w-full justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" />
              Sign Out
            </Button>
          </CardContent>
        </Card>

        <p className="text-xs text-center text-gray-500 py-4">
          SkinGuard v1.0.0 • Terms • Privacy Policy
        </p>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-md mx-auto flex justify-around p-2">
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(4)}
          >
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(9)}
          >
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">History</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(10)}
          >
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">Learn</span>
          </Button>
          <Button variant="ghost" className="flex-col h-auto py-2 text-purple-600">
            <User className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </div>
      </nav>
    </div>
  );
}
