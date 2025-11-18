import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { UserData } from '../../App';
import { AlertTriangle, Package, ChevronLeft } from 'lucide-react';

interface MaterialExposureScreenProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
  updateUserData: (data: Partial<UserData>) => void;
}

const materials = [
  { id: 'cement', label: 'Cement / Concrete', risk: 'high', icon: '🏗️' },
  { id: 'chemicals', label: 'Solvents / Chemicals', risk: 'high', icon: '⚗️' },
  { id: 'sun', label: 'Direct Sunlight (Outdoor)', risk: 'high', icon: '☀️' },
  { id: 'dust', label: 'Dust / Particulates', risk: 'medium', icon: '💨' },
  { id: 'metals', label: 'Metals (Nickel, Chromium)', risk: 'medium', icon: '🔩' },
  { id: 'oils', label: 'Oils / Lubricants', risk: 'medium', icon: '🛢️' },
  { id: 'paint', label: 'Paint / Coatings', risk: 'medium', icon: '🎨' },
  { id: 'wood', label: 'Wood / Wood Dust', risk: 'low', icon: '🪵' },
  { id: 'adhesives', label: 'Adhesives / Glues', risk: 'medium', icon: '📦' },
  { id: 'fiberglass', label: 'Fiberglass / Insulation', risk: 'medium', icon: '🧱' },
];

export function MaterialExposureScreen({ onNavigate, userData, updateUserData }: MaterialExposureScreenProps) {
  const [selectedMaterials, setSelectedMaterials] = useState<string[]>(userData.materials || []);

  const toggleMaterial = (id: string) => {
    setSelectedMaterials(prev =>
      prev.includes(id) ? prev.filter(m => m !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    updateUserData({ materials: selectedMaterials });
    onNavigate(3);
  };

  const riskColor = {
    high: 'text-red-600 bg-red-50 border-red-200',
    medium: 'text-yellow-600 bg-yellow-50 border-yellow-200',
    low: 'text-green-600 bg-green-50 border-green-200',
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
        <Button
          onClick={() => onNavigate(1)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="space-y-2">
          <h2 className="text-white">Material Exposure</h2>
          <p className="text-sm text-orange-100">
            Which materials do you work with regularly?
          </p>
        </div>
        <div className="mt-4 flex gap-2">
          <div className="flex-1 h-2 bg-white/50 rounded-full"></div>
          <div className="flex-1 h-2 bg-white rounded-full"></div>
          <div className="flex-1 h-2 bg-white/30 rounded-full"></div>
          <div className="flex-1 h-2 bg-white/30 rounded-full"></div>
        </div>
      </header>

      <div className="p-6 space-y-6 pb-24">
        <Alert className="bg-blue-50 border-blue-200">
          <AlertTriangle className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-sm text-blue-800">
            Select all materials you're regularly exposed to. This helps us provide personalized safety recommendations.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Package className="w-5 h-5 text-orange-600" />
              Common Materials
            </CardTitle>
            <CardDescription>
              Select all that apply ({selectedMaterials.length} selected)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {materials.map(material => (
                <div
                  key={material.id}
                  onClick={() => toggleMaterial(material.id)}
                  className={`flex items-center gap-3 p-3 border-2 rounded-lg cursor-pointer transition-colors ${
                    selectedMaterials.includes(material.id)
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Checkbox
                    id={material.id}
                    checked={selectedMaterials.includes(material.id)}
                    onCheckedChange={() => toggleMaterial(material.id)}
                  />
                  <span className="text-xl">{material.icon}</span>
                  <div className="flex-1">
                    <Label htmlFor={material.id} className="cursor-pointer">
                      {material.label}
                    </Label>
                  </div>
                  <span className={`text-xs px-2 py-1 rounded border ${riskColor[material.risk]}`}>
                    {material.risk} risk
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {selectedMaterials.length > 0 && (
          <Alert className="bg-orange-50 border-orange-200">
            <AlertTriangle className="h-4 w-4 text-orange-600" />
            <AlertDescription className="text-sm text-orange-800">
              <strong>Good to know!</strong> You're exposed to {selectedMaterials.length} different materials. We'll provide specific safety tips for each.
            </AlertDescription>
          </Alert>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={handleContinue}
            disabled={selectedMaterials.length === 0}
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
