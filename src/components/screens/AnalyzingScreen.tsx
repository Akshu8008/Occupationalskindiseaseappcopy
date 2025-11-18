import { useEffect, useState } from 'react';
import { Card, CardContent } from '../ui/card';
import { Progress } from '../ui/progress';
import { Loader2, Camera, FileText, TrendingUp } from 'lucide-react';

interface AnalyzingScreenProps {
  onNavigate: (screen: number) => void;
}

export function AnalyzingScreen({ onNavigate }: AnalyzingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [step, setStep] = useState(0);

  const steps = [
    { icon: Camera, text: 'Analyzing image...', progress: 33 },
    { icon: FileText, text: 'Processing symptoms...', progress: 66 },
    { icon: TrendingUp, text: 'Generating report...', progress: 100 },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onNavigate(8), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onNavigate]);

  useEffect(() => {
    if (progress < 33) setStep(0);
    else if (progress < 66) setStep(1);
    else setStep(2);
  }, [progress]);

  const CurrentIcon = steps[step].icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex flex-col items-center justify-center p-8">
      <Card className="w-full max-w-md">
        <CardContent className="py-12 space-y-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="relative">
              <div className="absolute inset-0 bg-orange-200 rounded-full animate-ping opacity-75"></div>
              <div className="relative bg-gradient-to-br from-orange-500 to-orange-600 p-6 rounded-full">
                <CurrentIcon className="w-12 h-12 text-white" />
              </div>
            </div>
            
            <div className="text-center space-y-2">
              <h2 className="text-orange-600">Analyzing Your Skin</h2>
              <p className="text-gray-600">{steps[step].text}</p>
            </div>

            <div className="w-full space-y-2">
              <Progress value={progress} className="w-full h-2" />
              <p className="text-sm text-gray-500 text-center">{Math.round(progress)}% complete</p>
            </div>
          </div>

          <div className="space-y-3">
            {steps.map((s, idx) => {
              const StepIcon = s.icon;
              const isComplete = progress >= s.progress;
              const isCurrent = idx === step;
              
              return (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    isCurrent
                      ? 'bg-orange-100 border-2 border-orange-300'
                      : isComplete
                      ? 'bg-green-50'
                      : 'bg-gray-50'
                  }`}
                >
                  <div
                    className={`p-2 rounded-lg ${
                      isCurrent
                        ? 'bg-orange-500'
                        : isComplete
                        ? 'bg-green-500'
                        : 'bg-gray-300'
                    }`}
                  >
                    {isCurrent ? (
                      <Loader2 className="w-4 h-4 text-white animate-spin" />
                    ) : (
                      <StepIcon className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="text-sm">{s.text}</span>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-gray-500 text-center">
            This may take a few seconds. Please don't close the app.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
