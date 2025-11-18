import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { X, ChevronLeft } from 'lucide-react';

interface SymptomFormScreenProps {
  onNavigate: (screen: number) => void;
}

const symptoms = [
  { id: 'redness', label: 'Redness' },
  { id: 'itching', label: 'Itching' },
  { id: 'dry_skin', label: 'Dry skin' },
  { id: 'blisters', label: 'Blisters' },
  { id: 'cracking', label: 'Cracking' },
  { id: 'pain', label: 'Pain' },
];

export function SymptomFormScreen({ onNavigate }: SymptomFormScreenProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [duration, setDuration] = useState('');
  const [gloves, setGloves] = useState('');

  const toggleSymptom = (id: string) => {
    setSelectedSymptoms(prev =>
      prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
    );
  };

  const isValid = selectedSymptoms.length > 0 && duration && gloves;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b p-4 flex items-center gap-3">
        <Button
          onClick={() => onNavigate(5)}
          variant="ghost"
          size="icon"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <div>
          <h3>Symptom Assessment</h3>
          <p className="text-xs text-gray-600">Step 2 of 3</p>
        </div>
        <Button
          onClick={() => onNavigate(4)}
          variant="ghost"
          size="icon"
          className="ml-auto"
        >
          <X className="w-5 h-5" />
        </Button>
      </header>

      <div className="p-4 space-y-6 pb-24">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">
              ✓
            </div>
            <span className="text-xs">Image</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-orange-600 flex items-center justify-center text-white text-xs">
              2
            </div>
            <span className="text-xs">Symptoms</span>
          </div>
          <div className="flex items-center gap-2 opacity-50">
            <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs">
              3
            </div>
            <span className="text-xs text-gray-500">Results</span>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">What symptoms do you have?</CardTitle>
            <CardDescription className="text-sm">Select all that apply</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {symptoms.map(symptom => (
                <div
                  key={symptom.id}
                  onClick={() => toggleSymptom(symptom.id)}
                  className={`flex items-center gap-2 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
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
                  <Label htmlFor={symptom.id} className="cursor-pointer text-sm">
                    {symptom.label}
                  </Label>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">How long have you had these symptoms?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={duration} onValueChange={setDuration}>
              <div className="space-y-3">
                {[
                  { value: 'less_than_day', label: 'Less than a day' },
                  { value: '1_3_days', label: '1-3 days' },
                  { value: '4_7_days', label: '4-7 days' },
                  { value: '1_2_weeks', label: '1-2 weeks' },
                  { value: 'more_than_2_weeks', label: 'More than 2 weeks' },
                ].map(option => (
                  <div
                    key={option.value}
                    className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer ${
                      duration === option.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200'
                    }`}
                    onClick={() => setDuration(option.value)}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer flex-1 text-sm">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Were you wearing protective gloves?</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup value={gloves} onValueChange={setGloves}>
              <div className="space-y-3">
                {[
                  { value: 'yes', label: 'Yes, appropriate gloves' },
                  { value: 'yes_unsure', label: 'Yes, but not sure if appropriate' },
                  { value: 'no', label: 'No gloves' },
                ].map(option => (
                  <div
                    key={option.value}
                    className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer ${
                      gloves === option.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200'
                    }`}
                    onClick={() => setGloves(option.value)}
                  >
                    <RadioGroupItem value={option.value} id={`glove-${option.value}`} />
                    <Label htmlFor={`glove-${option.value}`} className="cursor-pointer flex-1 text-sm">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={() => onNavigate(7)}
            disabled={!isValid}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300"
          >
            Analyze Condition
          </Button>
        </div>
      </div>
    </div>
  );
}
