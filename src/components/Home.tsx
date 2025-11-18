import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Shield, Camera, FileText, TrendingUp, AlertTriangle } from 'lucide-react';

interface HomeProps {
  onStartScan: () => void;
}

export function Home({ onStartScan }: HomeProps) {
  return (
    <div className="space-y-6">
      <Alert className="bg-orange-50 border-orange-200">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800">
          Construction workers are at high risk for occupational skin diseases. Regular monitoring can help detect issues early.
        </AlertDescription>
      </Alert>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Camera className="w-5 h-5 text-orange-600" />
              Quick Skin Check
            </CardTitle>
            <CardDescription>
              Upload a photo and answer a few questions to get an instant analysis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              onClick={onStartScan} 
              className="w-full bg-orange-600 hover:bg-orange-700"
            >
              Start New Scan
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-blue-600" />
              Why Screen?
            </CardTitle>
            <CardDescription>
              Early detection is key to preventing serious skin conditions
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm text-gray-600">
              Construction workers face daily exposure to cement, chemicals, UV radiation, and irritants that can cause:
            </p>
            <ul className="text-sm text-gray-600 space-y-1 list-disc list-inside">
              <li>Contact dermatitis</li>
              <li>Chemical burns</li>
              <li>Sun damage and skin cancer</li>
              <li>Allergic reactions</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
              <Camera className="w-6 h-6 text-blue-600" />
            </div>
            <CardTitle className="text-lg">1. Capture</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Take a clear photo of the affected skin area
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
              <FileText className="w-6 h-6 text-green-600" />
            </div>
            <CardTitle className="text-lg">2. Analyze</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Answer questions about symptoms and exposure
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-2">
              <TrendingUp className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle className="text-lg">3. Track</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-600">
              Get personalized recommendations and track progress
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
