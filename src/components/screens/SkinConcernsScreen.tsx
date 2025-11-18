import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { UserData } from '../../App';
import { Heart, CheckCircle2, ChevronLeft } from 'lucide-react';

interface SkinConcernsScreenProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

const concerns = [
  { id: 'redness', label: 'Redness or irritation', icon: '🔴' },
  { id: 'dryness', label: 'Dry or flaky skin', icon: '❄️' },
  { id: 'itching', label: 'Itching or burning', icon: '🔥' },
  { id: 'cracks', label: 'Cracks or fissures', icon: '💢' },
  { id: 'rash', label: 'Rash or bumps', icon: '🔸' },
  { id: 'discoloration', label: 'Discoloration or dark spots', icon: '⚫' },
  { id: 'pain', label: 'Pain or tenderness', icon: '⚡' },
  { id: 'blisters', label: 'Blisters or swelling', icon: '💧' },
  { id: 'none', label: 'No concerns (just monitoring)', icon: '✅' },
];

export function SkinConcernsScreen({ onNavigate, userData, updateUserData }: SkinConcernsScreenProps) {
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(userData.concerns || []);

  const toggleConcern = (id: string) => {
    if (id === 'none') {
      setSelectedConcerns(prev => prev.includes('none') ? [] : ['none']);
    } else {
      setSelectedConcerns(prev => {
        const filtered = prev.filter(c => c !== 'none');
        return filtered.includes(id) ? filtered.filter(c => c !== id) : [...filtered, id];
      });
    }
  };

  const handleContinue = () => {
    updateUserData({ concerns: selectedConcerns });
    onNavigate(4);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
        <Button
          onClick={() => onNavigate(2)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="space-y-2">
          <h2 className="text-white">Skin Concerns</h2>
          <p className="text-sm text-orange-100">
            Are you experiencing any skin issues?
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="flex-1 h-2 bg-white/50 rounded-full"></div>
          <div className="flex-1 h-2 bg-white/50 rounded-full"></div>
          <div className="flex-1 h-2 bg-white rounded-full"></div>
          <div className="flex-1 h-2 bg-white/30 rounded-full"></div>
        </div>
      </header>

      <div className="p-6 space-y-6 pb-24">
        <Alert className="bg-blue-50 border-blue-200">
          <Heart className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-sm text-blue-800">
            Select all symptoms you're currently experiencing. This helps us prioritize your safety.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Heart className="w-5 h-5 text-orange-600" />
              Current Symptoms
            </CardTitle>
            <CardDescription>
              Select all that apply ({selectedConcerns.length} selected)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {concerns.map(concern => (
                <div
                  key={concern.id}
                  onClick={() => toggleConcern(concern.id)}
                  className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                    selectedConcerns.includes(concern.id)
                      ? concern.id === 'none'
                        ? 'border-green-500 bg-green-50'
                        : 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Checkbox
                    id={concern.id}
                    checked={selectedConcerns.includes(concern.id)}
                    onCheckedChange={() => toggleConcern(concern.id)}
                  />
                  <span className="text-xl">{concern.icon}</span>
                  <Label htmlFor={concern.id} className="cursor-pointer flex-1">
                    {concern.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedConcerns.length > 0 && !selectedConcerns.includes('none') && (
          <Alert className="bg-yellow-50 border-yellow-200">
            <CheckCircle2 className="h-4 w-4 text-yellow-600" />
            <AlertDescription className="text-sm text-yellow-800">
              Thanks for sharing. We'll help you address these concerns with personalized recommendations.
            </AlertDescription>
          </Alert>
        )}

        {selectedConcerns.includes('none') && (
          <Alert className="bg-green-50 border-green-200">
            <CheckCircle2 className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-sm text-green-800">
              Great! Regular monitoring helps catch issues early. Keep up the good work!
            </AlertDescription>
          </Alert>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={handleContinue}
            disabled={selectedConcerns.length === 0}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300"
            size="lg"
          >
            Complete Setup
          </Button>
        </div>
      </div>
    </div>
  );
}
