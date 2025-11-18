import { useState } from 'react';
import { Card, CardContent } from './components/ui/card';
import { Button } from './components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { OnboardingScreen } from './components/screens/OnboardingScreen';
import { PrerequisiteScreen } from './components/screens/PrerequisiteScreen';
import { MaterialExposureScreen } from './components/screens/MaterialExposureScreen';
import { SkinConcernsScreen } from './components/screens/SkinConcernsScreen';
import { HomeDashboard } from './components/screens/HomeDashboard';
import { ScanInterface } from './components/screens/ScanInterface';
import { SymptomQuestionsScreen } from './components/screens/SymptomQuestionsScreen';
import { DurationQuestionsScreen } from './components/screens/DurationQuestionsScreen';
import { AnalysisResultsScreen } from './components/screens/AnalysisResultsScreen';
import { ProductMarketplace } from './components/screens/ProductMarketplace';
import { ProductClaimConfirmation } from './components/screens/ProductClaimConfirmation';
import { ClaimSuccessScreen } from './components/screens/ClaimSuccessScreen';

export interface UserData {
  name: string;
  role: string;
  experience: string;
  materials: string[];
  concerns: string[];
  symptoms: string[];
  duration: string;
  hasGloves: string;
  points: number;
}

const screens = [
  { id: 1, name: 'Onboarding', component: OnboardingScreen },
  { id: 2, name: 'Prerequisites', component: PrerequisiteScreen },
  { id: 3, name: 'Material Exposure', component: MaterialExposureScreen },
  { id: 4, name: 'Skin Concerns', component: SkinConcernsScreen },
  { id: 5, name: 'Home Dashboard', component: HomeDashboard },
  { id: 6, name: 'Scan Interface', component: ScanInterface },
  { id: 7, name: 'Symptom Questions', component: SymptomQuestionsScreen },
  { id: 8, name: 'Duration Questions', component: DurationQuestionsScreen },
  { id: 9, name: 'Analysis & Rewards', component: AnalysisResultsScreen },
  { id: 10, name: 'Product Marketplace', component: ProductMarketplace },
  { id: 11, name: 'Claim Confirmation', component: ProductClaimConfirmation },
  { id: 12, name: 'Claim Success', component: ClaimSuccessScreen },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(0);
  const [prototypeMode, setPrototypeMode] = useState(true);
  const [userData, setUserData] = useState<UserData>({
    name: 'Alex',
    role: '',
    experience: '',
    materials: [],
    concerns: [],
    symptoms: [],
    duration: '',
    hasGloves: '',
    points: 250,
  });

  const CurrentScreenComponent = screens[currentScreen].component;

  const goToScreen = (screenIndex: number) => {
    setCurrentScreen(screenIndex);
  };

  const nextScreen = () => {
    setCurrentScreen((prev) => (prev + 1) % screens.length);
  };

  const prevScreen = () => {
    setCurrentScreen((prev) => (prev - 1 + screens.length) % screens.length);
  };

  const updateUserData = (data: Partial<UserData>) => {
    setUserData((prev) => ({ ...prev, ...data }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200">
      {prototypeMode && (
        <div className="bg-slate-900 text-white py-3 px-4 sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-4">
              <span className="text-sm">Prototype Mode</span>
              <span className="text-xs bg-slate-700 px-2 py-1 rounded">
                Screen {currentScreen + 1} of {screens.length}: {screens[currentScreen].name}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                onClick={prevScreen}
                size="sm"
                variant="outline"
                className="bg-slate-800 border-slate-600 hover:bg-slate-700"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                onClick={nextScreen}
                size="sm"
                variant="outline"
                className="bg-slate-800 border-slate-600 hover:bg-slate-700"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
              <Button
                onClick={() => setPrototypeMode(false)}
                size="sm"
                variant="outline"
                className="ml-4 bg-slate-800 border-slate-600 hover:bg-slate-700"
              >
                Exit Prototype
              </Button>
            </div>
          </div>
        </div>
      )}

      {prototypeMode && (
        <div className="bg-white border-b shadow-sm">
          <div className="max-w-7xl mx-auto px-4 py-3 overflow-x-auto">
            <div className="flex gap-2 min-w-max">
              {screens.map((screen, index) => (
                <button
                  key={screen.id}
                  onClick={() => goToScreen(index)}
                  className={`px-3 py-1 rounded text-sm whitespace-nowrap transition-colors ${
                    currentScreen === index
                      ? 'bg-orange-600 text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {screen.id}. {screen.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="max-w-md mx-auto p-4">
        <Card className="shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <CurrentScreenComponent 
              onNavigate={goToScreen} 
              userData={userData}
              updateUserData={updateUserData}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
