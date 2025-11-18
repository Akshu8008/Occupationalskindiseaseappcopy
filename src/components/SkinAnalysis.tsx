import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Progress } from './ui/progress';
import { ImageUpload } from './ImageUpload';
import { SymptomForm } from './SymptomForm';
import { ReportView } from './ReportView';
import { SkinReport } from '../App';
import { Loader2 } from 'lucide-react';

interface SkinAnalysisProps {
  onReportGenerated: (report: SkinReport) => void;
}

type Step = 'upload' | 'symptoms' | 'analyzing' | 'report';

export function SkinAnalysis({ onReportGenerated }: SkinAnalysisProps) {
  const [step, setStep] = useState<Step>('upload');
  const [imageUrl, setImageUrl] = useState<string>('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [currentReport, setCurrentReport] = useState<SkinReport | null>(null);

  const progress = {
    upload: 25,
    symptoms: 50,
    analyzing: 75,
    report: 100,
  }[step];

  const handleImageUpload = (url: string) => {
    setImageUrl(url);
    setStep('symptoms');
  };

  const handleSymptomsSubmit = (selectedSymptoms: string[]) => {
    setSymptoms(selectedSymptoms);
    setStep('analyzing');
    
    // Simulate AI analysis
    setTimeout(() => {
      const report = generateReport(imageUrl, selectedSymptoms);
      setCurrentReport(report);
      onReportGenerated(report);
      setStep('report');
    }, 3000);
  };

  const generateReport = (image: string, symptomsData: string[]): SkinReport => {
    // Mock AI analysis based on symptoms
    let condition = 'Contact Dermatitis';
    let severity: 'low' | 'medium' | 'high' = 'low';
    let confidence = 75;
    let recommendations: string[] = [];
    let preventiveMeasures: string[] = [];

    if (symptomsData.includes('redness') && symptomsData.includes('itching')) {
      condition = 'Allergic Contact Dermatitis';
      severity = 'medium';
      confidence = 82;
    }
    
    if (symptomsData.includes('blisters') || symptomsData.includes('burning')) {
      condition = 'Chemical Burn / Irritant Contact Dermatitis';
      severity = 'high';
      confidence = 88;
    }

    if (symptomsData.includes('dry_skin') && symptomsData.includes('cracking')) {
      condition = 'Occupational Xerosis (Dry Skin)';
      severity = 'medium';
      confidence = 79;
    }

    // Generate recommendations based on condition
    recommendations = [
      'Avoid direct contact with the suspected irritant immediately',
      'Wash the affected area with mild soap and lukewarm water',
      'Apply a fragrance-free moisturizer regularly',
      severity === 'high' ? 'Seek medical attention from a dermatologist within 24 hours' : 'Monitor the condition for the next 48 hours',
      'Document the condition with photos for your healthcare provider',
    ];

    preventiveMeasures = [
      'Always wear appropriate PPE including nitrile gloves when handling chemicals',
      'Use barrier creams before work shifts',
      'Wash hands regularly but avoid over-washing',
      'Apply moisturizer during breaks and after work',
      'Avoid touching eyes and face with contaminated hands',
      'Change wet or contaminated clothing immediately',
    ];

    return {
      id: Date.now().toString(),
      date: new Date().toISOString(),
      imageUrl: image,
      symptoms: symptomsData,
      severity,
      detectedCondition: condition,
      confidence,
      recommendations,
      preventiveMeasures,
    };
  };

  const handleReset = () => {
    setStep('upload');
    setImageUrl('');
    setSymptoms([]);
    setCurrentReport(null);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Skin Analysis Progress</CardTitle>
          <CardDescription>Complete all steps for a comprehensive analysis</CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={progress} className="w-full" />
          <div className="mt-2 text-sm text-gray-600">
            Step {step === 'upload' ? '1' : step === 'symptoms' ? '2' : step === 'analyzing' ? '3' : '4'} of 4
          </div>
        </CardContent>
      </Card>

      {step === 'upload' && <ImageUpload onImageSelect={handleImageUpload} />}
      
      {step === 'symptoms' && (
        <SymptomForm 
          onSubmit={handleSymptomsSubmit} 
          onBack={() => setStep('upload')} 
        />
      )}

      {step === 'analyzing' && (
        <Card>
          <CardContent className="py-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <Loader2 className="w-12 h-12 animate-spin text-orange-600" />
              <h3>Analyzing Skin Condition...</h3>
              <p className="text-sm text-gray-600 text-center max-w-md">
                Our system is evaluating the image and symptoms to provide you with accurate results
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {step === 'report' && currentReport && (
        <ReportView report={currentReport} onNewScan={handleReset} />
      )}
    </div>
  );
}
