import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Label } from './ui/label';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { ClipboardList, ChevronLeft } from 'lucide-react';

interface SymptomFormProps {
  onSubmit: (symptoms: string[]) => void;
  onBack: () => void;
}

const symptomOptions = [
  { id: 'redness', label: 'Redness or inflammation' },
  { id: 'itching', label: 'Itching or burning sensation' },
  { id: 'dry_skin', label: 'Dry, flaky skin' },
  { id: 'cracking', label: 'Cracking or fissures' },
  { id: 'blisters', label: 'Blisters or fluid-filled bumps' },
  { id: 'swelling', label: 'Swelling' },
  { id: 'pain', label: 'Pain or tenderness' },
  { id: 'burning', label: 'Burning sensation' },
];

const exposureOptions = [
  { id: 'cement', label: 'Cement or concrete' },
  { id: 'chemicals', label: 'Solvents or chemicals' },
  { id: 'sun', label: 'Prolonged sun exposure' },
  { id: 'dust', label: 'Dust or particulates' },
  { id: 'metals', label: 'Metals (nickel, chromium)' },
  { id: 'oils', label: 'Oils or lubricants' },
];

export function SymptomForm({ onSubmit, onBack }: SymptomFormProps) {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [selectedExposures, setSelectedExposures] = useState<string[]>([]);
  const [duration, setDuration] = useState<string>('');
  const [glovesUsed, setGlovesUsed] = useState<string>('');

  const handleSymptomToggle = (symptomId: string) => {
    setSelectedSymptoms(prev => 
      prev.includes(symptomId) 
        ? prev.filter(s => s !== symptomId)
        : [...prev, symptomId]
    );
  };

  const handleExposureToggle = (exposureId: string) => {
    setSelectedExposures(prev => 
      prev.includes(exposureId) 
        ? prev.filter(e => e !== exposureId)
        : [...prev, exposureId]
    );
  };

  const handleSubmit = () => {
    const allData = [
      ...selectedSymptoms,
      ...selectedExposures.map(e => `exposure_${e}`),
      `duration_${duration}`,
      `gloves_${glovesUsed}`,
    ];
    onSubmit(allData);
  };

  const isValid = selectedSymptoms.length > 0 && duration && glovesUsed;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ClipboardList className="w-5 h-5" />
          Symptom Assessment
        </CardTitle>
        <CardDescription>
          Help us understand your condition better by answering these questions
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <Label>What symptoms are you experiencing? (Select all that apply)</Label>
          <div className="grid md:grid-cols-2 gap-3">
            {symptomOptions.map(symptom => (
              <div key={symptom.id} className="flex items-center space-x-2">
                <Checkbox
                  id={symptom.id}
                  checked={selectedSymptoms.includes(symptom.id)}
                  onCheckedChange={() => handleSymptomToggle(symptom.id)}
                />
                <Label
                  htmlFor={symptom.id}
                  className="cursor-pointer"
                >
                  {symptom.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>What have you been exposed to recently? (Select all that apply)</Label>
          <div className="grid md:grid-cols-2 gap-3">
            {exposureOptions.map(exposure => (
              <div key={exposure.id} className="flex items-center space-x-2">
                <Checkbox
                  id={`exposure-${exposure.id}`}
                  checked={selectedExposures.includes(exposure.id)}
                  onCheckedChange={() => handleExposureToggle(exposure.id)}
                />
                <Label
                  htmlFor={`exposure-${exposure.id}`}
                  className="cursor-pointer"
                >
                  {exposure.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>How long have you had these symptoms?</Label>
          <RadioGroup value={duration} onValueChange={setDuration}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="less_than_day" id="less_than_day" />
              <Label htmlFor="less_than_day" className="cursor-pointer">Less than a day</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1_3_days" id="1_3_days" />
              <Label htmlFor="1_3_days" className="cursor-pointer">1-3 days</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="4_7_days" id="4_7_days" />
              <Label htmlFor="4_7_days" className="cursor-pointer">4-7 days</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="1_2_weeks" id="1_2_weeks" />
              <Label htmlFor="1_2_weeks" className="cursor-pointer">1-2 weeks</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="more_than_2_weeks" id="more_than_2_weeks" />
              <Label htmlFor="more_than_2_weeks" className="cursor-pointer">More than 2 weeks</Label>
            </div>
          </RadioGroup>
        </div>

        <Separator />

        <div className="space-y-3">
          <Label>Were you wearing protective gloves when exposed?</Label>
          <RadioGroup value={glovesUsed} onValueChange={setGlovesUsed}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes_appropriate" id="yes_appropriate" />
              <Label htmlFor="yes_appropriate" className="cursor-pointer">Yes, appropriate gloves for the task</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes_not_sure" id="yes_not_sure" />
              <Label htmlFor="yes_not_sure" className="cursor-pointer">Yes, but not sure if appropriate</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no" className="cursor-pointer">No gloves</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="flex gap-3 pt-4">
          <Button
            onClick={onBack}
            variant="outline"
            className="flex-1"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={!isValid}
            className="flex-1 bg-orange-600 hover:bg-orange-700"
          >
            Analyze Condition
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
