import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { UserData } from '../../App';
import { User, Briefcase, Clock } from 'lucide-react';

interface PrerequisiteScreenProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

export function PrerequisiteScreen({ onNavigate, userData, updateUserData }: PrerequisiteScreenProps) {
  const [name, setName] = useState(userData.name || '');
  const [role, setRole] = useState(userData.role || '');
  const [experience, setExperience] = useState(userData.experience || '');

  const handleContinue = () => {
    updateUserData({ name, role, experience });
    onNavigate(2);
  };

  const isValid = name && role && experience;

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
        <div className="space-y-2">
          <h2 className="text-white">Welcome to SkinGuard!</h2>
          <p className="text-sm text-orange-100">
            Let's get to know you better
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="flex-1 h-2 bg-white rounded-full"></div>
          <div className="flex-1 h-2 bg-white/30 rounded-full"></div>
          <div className="flex-1 h-2 bg-white/30 rounded-full"></div>
          <div className="flex-1 h-2 bg-white/30 rounded-full"></div>
        </div>
      </header>

      <div className="p-6 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <User className="w-5 h-5 text-orange-600" />
              Personal Information
            </CardTitle>
            <CardDescription>Help us personalize your experience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">What's your name?</Label>
              <Input
                id="name"
                placeholder="Enter your first name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Briefcase className="w-5 h-5 text-orange-600" />
              Your Role
            </CardTitle>
            <CardDescription>What type of construction work do you do?</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={role} onValueChange={setRole}>
              <div className="space-y-3">
                {[
                  { value: 'general_laborer', label: 'General Laborer' },
                  { value: 'mason', label: 'Mason / Concrete Worker' },
                  { value: 'carpenter', label: 'Carpenter' },
                  { value: 'electrician', label: 'Electrician' },
                  { value: 'plumber', label: 'Plumber' },
                  { value: 'painter', label: 'Painter / Finisher' },
                  { value: 'roofer', label: 'Roofer' },
                  { value: 'other', label: 'Other Construction Role' },
                ].map(option => (
                  <div
                    key={option.value}
                    onClick={() => setRole(option.value)}
                    className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                      role === option.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="cursor-pointer flex-1">
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
            <CardTitle className="flex items-center gap-2 text-lg">
              <Clock className="w-5 h-5 text-orange-600" />
              Experience Level
            </CardTitle>
            <CardDescription>How long have you worked in construction?</CardDescription>
          </CardHeader>
          <CardContent>
            <RadioGroup value={experience} onValueChange={setExperience}>
              <div className="space-y-3">
                {[
                  { value: 'less_than_1', label: 'Less than 1 year' },
                  { value: '1_3_years', label: '1-3 years' },
                  { value: '4_10_years', label: '4-10 years' },
                  { value: 'more_than_10', label: 'More than 10 years' },
                ].map(option => (
                  <div
                    key={option.value}
                    onClick={() => setExperience(option.value)}
                    className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                      experience === option.value
                        ? 'border-orange-500 bg-orange-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <RadioGroupItem value={option.value} id={`exp-${option.value}`} />
                    <Label htmlFor={`exp-${option.value}`} className="cursor-pointer flex-1">
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
            onClick={handleContinue}
            disabled={!isValid}
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
