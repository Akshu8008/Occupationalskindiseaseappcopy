import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { UserData } from '../../App';
import { Clock, Shield, ChevronLeft } from 'lucide-react';

interface DurationQuestionsScreenProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export function DurationQuestionsScreen({ onNavigate, userData, updateUserData }: DurationQuestionsScreenProps) {
  const [duration, setDuration] = useState(userData.duration || '');
  const [hasGloves, setHasGloves] = useState(userData.hasGloves || '');

  const handleAnalyze = () => {
    updateUserData({ duration, hasGloves });
    onNavigate(8);
  };

  const isValid = duration && hasGloves;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
        <Button
          onClick={() => onNavigate(6)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="space-y-2">
          <h2 className="text-white">Additional Details</h2>
          <p className="text-sm text-orange-100">
            Help us understand the timeline
          </p>
        </div>
      </header>

      <div className="p-6 space-y-6 pb-24">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-orange-600" />
              Symptom Duration
            </CardTitle>
            <CardDescription>
              How long have you had these symptoms?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={duration} onValueChange={setDuration}>
              <div className="space-y-3">
                {[
                  { value: 'less_than_day', label: 'Less than 24 hours', desc: 'Just noticed today' },
                  { value: '1_3_days', label: '1-3 days', desc: 'Started this week' },
                  { value: '4_7_days', label: '4-7 days', desc: 'About a week' },
                  { value: '1_2_weeks', label: '1-2 weeks', desc: 'Ongoing for a while' },
                  { value: 'more_than_2_weeks', label: 'More than 2 weeks', desc: 'Chronic condition' },
                ].map(option => (
                  <div
                    key={option.value}
                    onClick={() => setDuration(option.value)}
                    className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      duration === option.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={option.value} className="mt-1" />
                    <div className="flex-1">
                      <Label htmlFor={option.value} className="cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-xs text-gray-500 mt-1">{option.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RadioGroup>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Shield className="w-5 h-5 text-orange-600" />
              Protective Equipment
            </CardTitle>
            <CardDescription>
              Were you wearing protective gloves during exposure?
            </CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={hasGloves} onValueChange={setHasGloves}>
              <div className="space-y-3">
                {[
                  { value: 'yes_appropriate', label: 'Yes, appropriate gloves', desc: 'Right PPE for the job', icon: '✅' },
                  { value: 'yes_unsure', label: 'Yes, but unsure if appropriate', desc: 'Had gloves but not certain', icon: '❓' },
                  { value: 'partial', label: 'Partially protected', desc: 'Gloves removed temporarily', icon: '⚠️' },
                  { value: 'no', label: 'No gloves worn', desc: 'Direct skin contact', icon: '❌' },
                ].map(option => (
                  <div
                    key={option.value}
                    onClick={() => setHasGloves(option.value)}
                    className={`flex items-start gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                      hasGloves === option.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={`gloves-${option.value}`} className="mt-1" />
                    <span className="text-xl mt-0.5">{option.icon}</span>
                    <div className="flex-1">
                      <Label htmlFor={`gloves-${option.value}`} className="cursor-pointer">
                        {option.label}
                      </Label>
                      <p className="text-xs text-gray-500 mt-1">{option.desc}</p>
                    </div>
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
            onClick={handleAnalyze}
            disabled={!isValid}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300"
            size="lg"
          >
            Analyze Results
          </Button>
        </div>
      </div>
    </div>
  );
}
