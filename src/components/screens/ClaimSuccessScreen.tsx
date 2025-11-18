import { Button } from '../ui/button';
import { Card, CardContent } from '../ui/card';
import { Badge } from '../ui/badge';
import { UserData } from '../../App';
import { 
  CheckCircle2,
  Gift,
  Award,
  Mail,
  Package,
  TrendingUp,
  Sparkles
} from 'lucide-react';

interface ClaimSuccessScreenProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export function ClaimSuccessScreen({ onNavigate, userData, updateUserData }: ClaimSuccessScreenProps) {
  const pointsSpent = 150;
  const newBalance = userData.points - pointsSpent;

  const handleBackHome = () => {
    updateUserData({ points: newBalance });
    onNavigate(4);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-purple-50 to-pink-50 flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-8">
        <div className="relative mb-6">
          <div className="absolute inset-0 bg-green-200 rounded-full blur-3xl animate-pulse opacity-50"></div>
          <div className="relative bg-gradient-to-br from-green-500 to-green-600 p-6 rounded-full">
            <CheckCircle2 className="w-20 h-20 text-white" />
          </div>
        </div>

        <h1 className="text-green-600 mb-3 text-center">Claim Successful!</h1>
        <p className="text-gray-600 text-center max-w-sm mb-8">
          Your free safety product has been claimed and will be delivered soon
        </p>

        <Card className="w-full max-w-md mb-6">
          <CardContent className="p-6 space-y-6">
            <div className="text-center pb-4 border-b">
              <div className="text-5xl mb-3">🧤</div>
              <h3 className="mb-1">Premium Nitrile Gloves</h3>
              <p className="text-sm text-gray-600">Order #SG{Date.now().toString().slice(-6)}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
                <div className="bg-green-500 p-2 rounded-lg">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">Order Confirmed</p>
                  <p className="text-xs text-gray-600">Confirmation sent to your email</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                <div className="bg-blue-500 p-2 rounded-lg">
                  <Package className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">Processing</p>
                  <p className="text-xs text-gray-600">Will ship within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-purple-50 rounded-lg">
                <div className="bg-purple-500 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">Tracking Info</p>
                  <p className="text-xs text-gray-600">Sent to your email soon</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-600">Points Used</span>
                <div className="flex items-center gap-1">
                  <Award className="w-4 h-4 text-orange-600" />
                  <span className="text-sm">-{pointsSpent} pts</span>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Remaining Balance</span>
                <Badge className="bg-orange-100 text-orange-700 border-orange-200">
                  {newBalance} points
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="w-full max-w-md bg-gradient-to-br from-purple-100 to-pink-100 border-purple-200">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="bg-white p-2 rounded-lg">
                <Sparkles className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm mb-1">🎉 Keep Earning!</p>
                <p className="text-xs text-gray-700">
                  Complete your next scan to earn more points and unlock more free products
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="p-6 space-y-3">
        <Button
          onClick={handleBackHome}
          className="w-full bg-green-600 hover:bg-green-700"
          size="lg"
        >
          Back to Home
        </Button>
        <Button
          onClick={() => onNavigate(9)}
          variant="outline"
          className="w-full"
        >
          <Gift className="w-4 h-4 mr-2" />
          Browse More Products
        </Button>
      </div>
    </div>
  );
}
