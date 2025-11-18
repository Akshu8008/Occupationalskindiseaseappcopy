import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { UserData } from '../../App';
import { 
  AlertTriangle,
  FileText,
  Shield,
  Award,
  Gift,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';

interface AnalysisResultsScreenProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export function AnalysisResultsScreen({ onNavigate, userData, updateUserData }: AnalysisResultsScreenProps) {
  const pointsEarned = 50;
  const newPoints = userData.points + pointsEarned;

  const handleViewRewards = () => {
    updateUserData({ points: newPoints });
    onNavigate(9);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-green-500 to-green-600 text-white p-6 text-center">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-3">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-white mb-2">Analysis Complete!</h2>
          <p className="text-sm text-green-100">Your scan has been processed</p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Award className="w-5 h-5" />
            <span className="text-lg">+{pointsEarned} Points Earned!</span>
          </div>
          <p className="text-xs text-green-100">Keep up your safety streak for bonus points</p>
        </div>
      </header>

      <div className="p-6 space-y-6 pb-24">
        <Alert className="bg-yellow-50 border-yellow-200">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-sm text-yellow-800">
            <strong>Medium Risk Detected:</strong> Allergic Contact Dermatitis likely. Follow recommendations below.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="w-5 h-5" />
                  Analysis Results
                </CardTitle>
                <CardDescription className="text-sm mt-1">
                  Based on image and symptom analysis
                </CardDescription>
              </div>
              <Badge className="bg-yellow-500">Medium Risk</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2">Detected Condition</h4>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="mb-2">Allergic Contact Dermatitis</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Confidence:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: '84%' }}
                    />
                  </div>
                  <span className="text-xs">84%</span>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Immediate Actions
              </h4>
              <ul className="space-y-2">
                {[
                  'Wash affected area with mild soap and cool water',
                  'Apply fragrance-free moisturizer or prescribed cream',
                  'Avoid contact with cement and chemicals',
                  'Monitor for worsening symptoms over 48 hours',
                  'Consult healthcare provider if condition worsens',
                ].map((rec, index) => (
                  <li key={index} className="flex gap-2 text-sm">
                    <span className="text-orange-600 flex-shrink-0">•</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Prevention Tips
              </h4>
              <ul className="space-y-2">
                {[
                  'Always wear nitrile gloves when handling cement',
                  'Use barrier creams before each work shift',
                  'Wash hands gently and apply moisturizer regularly',
                  'Change wet or contaminated clothing immediately',
                ].map((measure, index) => (
                  <li key={index} className="flex gap-2 text-sm">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span className="text-gray-700">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-white">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-purple-100 p-3 rounded-full">
                <Sparkles className="w-6 h-6 text-purple-600" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg">Rewards Unlocked!</h3>
                <p className="text-sm text-gray-600">You've earned {pointsEarned} points for completing this scan</p>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-3 mb-4">
              <div className="text-center p-3 bg-white rounded-lg border">
                <TrendingUp className="w-5 h-5 mx-auto text-orange-600 mb-1" />
                <p className="text-xs text-gray-600">Level 3</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border">
                <Award className="w-5 h-5 mx-auto text-orange-600 mb-1" />
                <p className="text-xs text-gray-600">{newPoints} pts</p>
              </div>
              <div className="text-center p-3 bg-white rounded-lg border">
                <Gift className="w-5 h-5 mx-auto text-orange-600 mb-1" />
                <p className="text-xs text-gray-600">8 Day Streak</p>
              </div>
            </div>

            <Button
              onClick={handleViewRewards}
              className="w-full bg-purple-600 hover:bg-purple-700"
            >
              <Gift className="w-4 h-4 mr-2" />
              Claim Free Safety Products
            </Button>
          </CardContent>
        </Card>

        <Alert className="bg-blue-50 border-blue-200">
          <CheckCircle2 className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-xs text-blue-800">
            <strong>Reminder:</strong> This analysis is for screening purposes only. Always consult a healthcare professional for medical advice.
          </AlertDescription>
        </Alert>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={() => onNavigate(4)}
            variant="outline"
            className="w-full"
          >
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
}
