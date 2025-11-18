import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Alert, AlertDescription } from '../ui/alert';
import { Upload, Camera, Info, X, CheckCircle2 } from 'lucide-react';

interface ImageUploadScreenProps {
  onNavigate: (screen: number) => void;
}

export function ImageUploadScreen({ onNavigate }: ImageUploadScreenProps) {
  const [hasImage, setHasImage] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white border-b p-4 flex items-center gap-3">
        <Button
          onClick={() => onNavigate(4)}
          variant="ghost"
          size="icon"
        >
          <X className="w-5 h-5" />
        </Button>
        <div>
          <h3>New Skin Scan</h3>
          <p className="text-xs text-gray-600">Step 1 of 3</p>
        </div>
      </header>

      <div className="p-4 space-y-4">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-orange-600 flex items-center justify-center text-white text-sm">
              1
            </div>
            <span className="text-sm">Upload Image</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              2
            </div>
            <span className="text-sm text-gray-500">Symptoms</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-sm">
              3
            </div>
            <span className="text-sm text-gray-500">Results</span>
          </div>
        </div>

        <Alert className="bg-blue-50 border-blue-200">
          <Info className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-blue-800 text-sm">
            <strong>Tips:</strong> Use good lighting, keep camera steady, and clean the area before photographing.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Camera className="w-5 h-5" />
              Capture Skin Image
            </CardTitle>
            <CardDescription className="text-sm">
              Take a clear photo of the affected area
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!hasImage ? (
              <div 
                onClick={() => setHasImage(true)}
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-colors"
              >
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-3" />
                <p className="text-sm text-gray-600 mb-2">Tap to take photo or upload</p>
                <p className="text-xs text-gray-500">Supports JPG, PNG formats</p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                  <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Captured Image Preview</span>
                  </div>
                  <div className="absolute top-2 right-2 bg-green-500 text-white p-1 rounded-full">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                  <p className="text-sm text-green-800 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    Image captured successfully
                  </p>
                </div>

                <Button
                  onClick={() => setHasImage(false)}
                  variant="outline"
                  className="w-full"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Take Different Photo
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="bg-slate-50">
          <CardContent className="p-4">
            <p className="text-sm mb-3">Photo Guidelines:</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Clear, well-lit image</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>Affected area fills frame</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-600">✓</span>
                <span>In focus, not blurry</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">✗</span>
                <span>Avoid shadows or reflections</span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={() => onNavigate(6)}
            disabled={!hasImage}
            className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-gray-300"
          >
            Continue to Symptoms
          </Button>
        </div>
      </div>
    </div>
  );
}
