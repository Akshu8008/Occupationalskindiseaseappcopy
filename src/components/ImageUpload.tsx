import { useState, useRef } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Upload, Camera, Info } from 'lucide-react';

interface ImageUploadProps {
  onImageSelect: (imageUrl: string) => void;
}

export function ImageUpload({ onImageSelect }: ImageUploadProps) {
  const [preview, setPreview] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setPreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (preview) {
      onImageSelect(preview);
    }
  };

  return (
    <div className="space-y-4">
      <Alert className="bg-blue-50 border-blue-200">
        <Info className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <strong>Tips for best results:</strong> Take photos in good lighting, keep the camera steady, and ensure the affected area is clearly visible. Clean the area gently before photographing.
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Camera className="w-5 h-5" />
            Upload Skin Image
          </CardTitle>
          <CardDescription>
            Take or upload a clear photo of the affected skin area
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />

          {preview ? (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden border-2 border-gray-200">
                <img 
                  src={preview} 
                  alt="Preview" 
                  className="w-full h-auto max-h-96 object-contain bg-gray-50"
                />
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={() => fileInputRef.current?.click()}
                  variant="outline"
                  className="flex-1"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  Choose Different Image
                </Button>
                <Button
                  onClick={handleSubmit}
                  className="flex-1 bg-orange-600 hover:bg-orange-700"
                >
                  Continue to Symptoms
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition-colors"
              >
                <Upload className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600 mb-2">Click to upload or take a photo</p>
                <p className="text-sm text-gray-500">Supports JPG, PNG formats</p>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
