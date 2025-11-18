import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { Alert, AlertDescription } from '../ui/alert';
import { Input } from '../ui/input';
import { 
  BookOpen, 
  Search,
  AlertTriangle,
  Shield,
  Sun,
  Droplets,
  ChevronLeft,
  ExternalLink
} from 'lucide-react';

interface EducationScreenProps {
  onNavigate: (screen: number) => void;
}

export function EducationScreen({ onNavigate }: EducationScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <header className="bg-white border-b p-4">
        <div className="flex items-center gap-3 mb-4">
          <Button
            onClick={() => onNavigate(4)}
            variant="ghost"
            size="icon"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          <div>
            <h2 className="flex items-center gap-2">
              <BookOpen className="w-5 h-5" />
              Education Center
            </h2>
            <p className="text-sm text-gray-600">Learn about skin safety</p>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search topics..."
            className="pl-9"
          />
        </div>
      </header>

      <div className="p-4 space-y-4 pb-20">
        <Alert className="bg-orange-50 border-orange-200">
          <AlertTriangle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-orange-800 text-sm">
            25-40% of work-related illnesses in construction are skin diseases. Prevention is key!
          </AlertDescription>
        </Alert>

        <div className="grid grid-cols-2 gap-3">
          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Droplets className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-sm">Contact Dermatitis</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Sun className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-sm">Sun Protection</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-sm">Chemical Burns</p>
            </CardContent>
          </Card>

          <Card className="cursor-pointer hover:shadow-md transition-shadow">
            <CardContent className="p-4 text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-sm">PPE Guide</p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Common Conditions</CardTitle>
            <CardDescription className="text-sm">Learn about workplace skin hazards</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="dermatitis">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Droplets className="w-4 h-4 text-blue-600" />
                    Contact Dermatitis
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700 space-y-2">
                  <p>Most common occupational skin disease caused by irritants or allergens.</p>
                  <p><strong>Symptoms:</strong> Redness, itching, dry/cracked skin, blisters</p>
                  <p><strong>Prevention:</strong> Wear proper gloves, use barrier creams</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cement">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-600" />
                    Cement Burns
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700 space-y-2">
                  <p>Wet cement is highly alkaline (pH 12-13) and causes chemical burns.</p>
                  <p><strong>First Aid:</strong> Rinse with water for 20+ minutes, seek medical care</p>
                  <p><strong>Prevention:</strong> Never kneel in wet cement, wear waterproof boots</p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="sun">
                <AccordionTrigger>
                  <div className="flex items-center gap-2">
                    <Sun className="w-4 h-4 text-yellow-600" />
                    Sun Damage
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-sm text-gray-700 space-y-2">
                  <p>Outdoor workers have increased skin cancer risk from UV exposure.</p>
                  <p><strong>Protection:</strong> SPF 30+ sunscreen every 2 hours, long sleeves, hat</p>
                  <p><strong>Watch for:</strong> New growths, changing moles, non-healing sores</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Daily Protection Checklist
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm">
              {[
                'Apply barrier cream before starting work',
                'Wear appropriate gloves for each task',
                'Reapply sunscreen every 2 hours',
                'Wash hands gently after exposure',
                'Moisturize during breaks',
                'Inspect skin daily for changes',
              ].map((item, idx) => (
                <li key={idx} className="flex gap-2 items-center">
                  <div className="w-5 h-5 border-2 border-gray-300 rounded flex-shrink-0"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm mb-1">Need more information?</p>
              <p className="text-xs text-gray-600">Access safety resources</p>
            </div>
            <Button size="sm" variant="outline">
              <ExternalLink className="w-4 h-4 mr-2" />
              Resources
            </Button>
          </CardContent>
        </Card>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-md mx-auto flex justify-around p-2">
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(4)}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(9)}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs mt-1">History</span>
          </Button>
          <Button variant="ghost" className="flex-col h-auto py-2 text-green-600">
            <BookOpen className="w-5 h-5" />
            <span className="text-xs mt-1">Learn</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(11)}
          >
            <BookOpen className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </div>
      </nav>
    </div>
  );
}
