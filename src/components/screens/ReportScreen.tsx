import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  AlertTriangle,
  FileText,
  Shield,
  Calendar,
  Download,
  Share2,
  X,
  CheckCircle2
} from 'lucide-react';

interface ReportScreenProps {
  onNavigate: (screen: number) => void;
}

export function ReportScreen({ onNavigate }: ReportScreenProps) {
  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b p-4 flex items-center justify-between">
        <h3>Analysis Results</h3>
        <Button
          onClick={() => onNavigate(4)}
          variant="ghost"
          size="icon"
        >
          <X className="w-5 h-5" />
        </Button>
      </header>

      <div className="p-4 space-y-4 pb-24">
        <Alert className="bg-yellow-50 border-yellow-200">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800 text-sm">
            Medium risk detected. Monitor closely and follow recommendations below.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <FileText className="w-5 h-5" />
                  Analysis Report
                </CardTitle>
                <CardDescription className="flex items-center gap-2 mt-1 text-xs">
                  <Calendar className="w-3 h-3" />
                  November 2, 2025 at 10:30 AM
                </CardDescription>
              </div>
              <Badge variant="default" className="bg-yellow-500">
                Medium Risk
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="mb-2">Detected Condition</h4>
              <div className="bg-slate-50 p-4 rounded-lg">
                <p className="mb-2">Allergic Contact Dermatitis</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-600">Confidence:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: '82%' }}
                    />
                  </div>
                  <span className="text-xs">82%</span>
                </div>
              </div>
            </div>

            <div>
              <div className="w-full h-32 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center border">
                <span className="text-sm text-gray-500">Analyzed Image</span>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                Immediate Actions
              </h4>
              <ul className="space-y-2">
                {[
                  'Avoid contact with suspected irritant immediately',
                  'Wash affected area with mild soap and water',
                  'Apply fragrance-free moisturizer',
                  'Monitor condition for next 48 hours',
                  'Take photos to track changes',
                ].map((rec, index) => (
                  <li key={index} className="flex gap-2 text-sm">
                    <span className="text-orange-600 flex-shrink-0">•</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Separator />

            <div>
              <h4 className="mb-3 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Prevention Tips
              </h4>
              <ul className="space-y-2">
                {[
                  'Wear nitrile gloves when handling chemicals',
                  'Use barrier creams before work',
                  'Apply moisturizer during breaks',
                  'Avoid touching face with contaminated hands',
                ].map((measure, index) => (
                  <li key={index} className="flex gap-2 text-sm">
                    <span className="text-blue-600 flex-shrink-0">•</span>
                    <span className="text-gray-700">{measure}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Alert className="bg-blue-50 border-blue-200">
              <CheckCircle2 className="h-4 w-4 text-blue-600" />
              <AlertDescription className="text-blue-800 text-xs">
                <strong>Note:</strong> This analysis is for screening purposes only. Consult a healthcare provider for proper diagnosis.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" className="flex-col h-auto py-3">
            <Download className="w-5 h-5 mb-1" />
            <span className="text-xs">Download</span>
          </Button>
          <Button variant="outline" className="flex-col h-auto py-3">
            <Share2 className="w-5 h-5 mb-1" />
            <span className="text-xs">Share</span>
          </Button>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto space-y-2">
          <Button
            onClick={() => onNavigate(4)}
            className="w-full bg-orange-600 hover:bg-orange-700"
          >
            Back to Home
          </Button>
          <Button
            onClick={() => onNavigate(5)}
            variant="outline"
            className="w-full"
          >
            Start New Scan
          </Button>
        </div>
      </div>
    </div>
  );
}
