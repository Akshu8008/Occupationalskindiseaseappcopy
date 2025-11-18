import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Alert, AlertDescription } from './ui/alert';
import { BookOpen, AlertTriangle, Shield, Droplets, Sun, HardHat } from 'lucide-react';

export function EducationView() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="w-5 h-5" />
            Education & Prevention
          </CardTitle>
          <CardDescription>
            Learn about common occupational skin diseases and how to prevent them
          </CardDescription>
        </CardHeader>
      </Card>

      <Alert className="bg-orange-50 border-orange-200">
        <AlertTriangle className="h-4 w-4 text-orange-600" />
        <AlertDescription className="text-orange-800">
          Occupational skin diseases account for 25-40% of all work-related illnesses in construction. Prevention is key!
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Common Conditions in Construction Workers</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="contact-dermatitis">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-blue-600" />
                  Contact Dermatitis
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-gray-700">
                <p>
                  The most common occupational skin disease, caused by direct contact with irritants or allergens.
                </p>
                <div className="pl-4 space-y-1">
                  <p><strong>Irritant Contact Dermatitis:</strong> Caused by exposure to cement, solvents, acids, or alkalis</p>
                  <p><strong>Allergic Contact Dermatitis:</strong> Delayed allergic reaction to substances like chromium in cement</p>
                </div>
                <p className="text-sm"><strong>Symptoms:</strong> Redness, itching, dry/cracked skin, blisters</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="cement-burns">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-red-600" />
                  Cement Burns
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-gray-700">
                <p>
                  Wet cement is highly alkaline (pH 12-13) and can cause chemical burns.
                </p>
                <p><strong>Risk factors:</strong> Prolonged contact with wet cement, especially if it gets inside boots or gloves</p>
                <p className="text-sm"><strong>Symptoms:</strong> Burning sensation, redness, blisters, deep ulcers in severe cases</p>
                <p className="text-sm text-red-600"><strong>Action:</strong> Rinse immediately with water for 20+ minutes and seek medical attention</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="sun-damage">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Sun className="w-4 h-4 text-yellow-600" />
                  Sun Damage & Skin Cancer
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-gray-700">
                <p>
                  Construction workers have increased risk of skin cancer due to prolonged outdoor UV exposure.
                </p>
                <p><strong>Types:</strong> Basal cell carcinoma, squamous cell carcinoma, melanoma</p>
                <p className="text-sm"><strong>Prevention:</strong> Use broad-spectrum SPF 30+ sunscreen, wear long sleeves and wide-brimmed hats, take shade breaks</p>
                <p className="text-sm"><strong>Warning signs:</strong> New growths, changing moles, non-healing sores</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="occupational-acne">
              <AccordionTrigger>
                <div className="flex items-center gap-2">
                  <Droplets className="w-4 h-4 text-purple-600" />
                  Occupational Acne
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-2 text-gray-700">
                <p>
                  Caused by contact with oils, tar, pitch, or other substances that block pores.
                </p>
                <p><strong>Common in:</strong> Workers exposed to cutting oils, coal tar, petroleum products</p>
                <p className="text-sm"><strong>Prevention:</strong> Wash skin regularly, avoid touching face with contaminated hands, use barrier creams</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Prevention Best Practices
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="flex items-center gap-2 mb-2">
                <HardHat className="w-4 h-4 text-blue-600" />
                Personal Protective Equipment
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Wear appropriate gloves (nitrile for chemicals, leather for rough work)</li>
                <li>• Use long-sleeved shirts and pants</li>
                <li>• Wear wide-brimmed hard hats when possible</li>
                <li>• Use safety goggles to prevent splashes</li>
              </ul>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="flex items-center gap-2 mb-2">
                <Droplets className="w-4 h-4 text-green-600" />
                Skin Care Routine
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Apply barrier cream before work</li>
                <li>• Wash hands regularly but gently</li>
                <li>• Use fragrance-free moisturizer after washing</li>
                <li>• Avoid harsh soaps and solvents</li>
              </ul>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="flex items-center gap-2 mb-2">
                <Sun className="w-4 h-4 text-yellow-600" />
                Sun Protection
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Apply SPF 30+ sunscreen every 2 hours</li>
                <li>• Seek shade during peak sun (10am-4pm)</li>
                <li>• Wear UV-protective clothing</li>
                <li>• Use lip balm with SPF</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="flex items-center gap-2 mb-2">
                <AlertTriangle className="w-4 h-4 text-purple-600" />
                When to Seek Help
              </h4>
              <ul className="text-sm space-y-1 text-gray-700">
                <li>• Symptoms lasting more than a few days</li>
                <li>• Severe pain, blistering, or burning</li>
                <li>• Signs of infection (pus, fever)</li>
                <li>• Symptoms affecting work ability</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      <Alert className="bg-blue-50 border-blue-200">
        <BookOpen className="h-4 w-4 text-blue-600" />
        <AlertDescription className="text-blue-800">
          <strong>Remember:</strong> Your employer is responsible for providing appropriate PPE and training. Don't hesitate to speak up about safety concerns.
        </AlertDescription>
      </Alert>
    </div>
  );
}
