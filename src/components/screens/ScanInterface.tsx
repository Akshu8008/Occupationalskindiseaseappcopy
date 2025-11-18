import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Upload, Camera, Info, X, CheckCircle2, Image } from 'lucide-react';

interface ScanInterfaceProps {
  onNavigate: (screen: number) => void;
}

export function ScanInterface({ onNavigate }: ScanInterfaceProps) {
  const [hasImage, setHasImage] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6">
        <Button
          onClick={() => onNavigate(4)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4"
        >
          <X className="w-4 h-4 mr-2" />
          Cancel
        </Button>
        <div className="space-y-2">
          <h2 className="text-white">Skin Scan</h2>
          <p className="text-sm text-orange-100">
            Take or upload a photo of the affected area
          </p>
        </div>
      </header>

      <div className="p-6 space-y-6 pb-24">
        <Alert className="bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-sm text-blue-800">
            <strong>For best results:</strong> Use natural lighting, keep camera steady, ensure the affected area is clearly visible.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Camera className="w-5 h-5 text-orange-600" />
              Capture Image
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {!hasImage ? (
              <div 
                onClick={() => setHasImage(true)}
                className="border-2 border-dashed border-gray-300 rounded-xl p-16 text-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-colors"
              >
                <Upload className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Tap to take photo or upload</p>
                <p className="text-sm text-gray-500">JPG, PNG formats supported</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-xl overflow-hidden border-2 border-green-300">
                  <div className="w-full aspect-video bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <div className="text-center">
                      <Image className="w-12 h-12 mx-auto text-gray-400 mb-2" />
                      <span className="text-sm text-gray-500">Captured Image</span>
                    </div>
                  </div>
                  <div className="absolute top-3 right-3 bg-green-500 text-white p-2 rounded-full shadow-lg">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                </div>
                
                <Alert className="bg-green-50 border-green-200">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-sm text-green-800">
                    Image captured successfully! Quality check passed.
                  </AlertDescription>
                </Alert>

                <Button
                  onClick={() => setHasImage(false)}
                  variant="outline"
                  className="w-full"
                >
                  <Camera className="w-4 h-4 mr-2" />
                  Retake Photo
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {!hasImage && (
          <Card className="bg-slate-50">
            <CardContent className="p-4">
              <p className="text-sm mb-3">📸 Photo Guidelines:</p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Well-lit, clear image</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Affected area fills the frame</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-green-600">✓</span>
                  <span>Clean skin before photographing</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-red-600">✗</span>
                  <span>Avoid shadows or blurriness</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={() => onNavigate(6)}
            disabled={!hasImage}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300"
            size="lg"
          >
            Continue to Questions
          </Button>
        </div>
      </div>
    </div>
  );
}
