import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { UserData } from '../../App';
import { ClipboardList, ChevronLeft } from 'lucide-react';

interface SymptomQuestionsScreenProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

const symptoms = [
  { id: 'redness', label: 'Redness or inflammation', icon: '🔴' },
  { id: 'itching', label: 'Itching sensation', icon: '🔥' },
  { id: 'burning', label: 'Burning feeling', icon: '⚡' },
  { id: 'dry_skin', label: 'Dry, flaky skin', icon: '❄️' },
  { id: 'cracking', label: 'Cracking or fissures', icon: '💢' },
  { id: 'blisters', label: 'Blisters or bumps', icon: '💧' },
  { id: 'swelling', label: 'Swelling or puffiness', icon: '🔸' },
  { id: 'pain', label: 'Pain or tenderness', icon: '💥' },
  { id: 'bleeding', label: 'Bleeding or oozing', icon: '🩸' },
];

export function SymptomQuestionsScreen({ onNavigate, userData, updateUserData }: SymptomQuestionsScreenProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>(userData.symptoms || []);

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    updateUserData({ symptoms: selectedSymptoms });
    onNavigate(7);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
        <Button
          onClick={() => onNavigate(5)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="space-y-2">
          <h2 className="text-white">Symptom Assessment</h2>
          <p className="text-sm text-orange-100">
            What symptoms are you experiencing?
          </p>
        </div>
      </header>

      <div className="p-6 space-y-6 pb-24">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ClipboardList className="w-5 h-5 text-orange-600" />
              Current Symptoms
            </CardTitle>
            <CardDescription>
              Select all that apply ({selectedSymptoms.length} selected)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {symptoms.map(symptom => (
                <div
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    selectedSymptoms.includes(symptom.id)
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Checkbox
                    id={symptom.id}
                    checked={selectedSymptoms.includes(symptom.id)}
                    onCheckedChange={() => toggleSymptom(symptom.id)}
                  />
                  <span className="text-xl">{symptom.icon}</span>
                  <Label htmlFor={symptom.id} className="cursor-pointer flex-1">
                    {symptom.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedSymptoms.length > 0 && (
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-4">
              <p className="text-sm text-blue-800">
                You've selected <strong>{selectedSymptoms.length} symptom{selectedSymptoms.length > 1 ? 's' : ''}</strong>. 
                This will help us provide accurate analysis.
              </p>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={handleContinue}
            disabled={selectedSymptoms.length === 0}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300"
            size="lg"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}
