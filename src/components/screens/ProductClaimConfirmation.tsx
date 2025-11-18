import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Alert, AlertDescription } from '../ui/alert';
import { Badge } from '../ui/badge';
import { UserData } from '../../App';
import { 
  Gift,
  Award,
  MapPin,
  User,
  Phone,
  Mail,
  ChevronLeft,
  ShoppingCart,
  Star
} from 'lucide-react';

interface ProductClaimConfirmationProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
}

export function ProductClaimConfirmation({ onNavigate, userData }: ProductClaimConfirmationProps) {
  const product = {
    name: 'Premium Nitrile Gloves',
    points: 150,
    rating: 4.8,
    description: 'Chemical-resistant, powder-free protective gloves',
    image: '🧤',
  };

  const handleConfirm = () => {
    onNavigate(11);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6">
        <Button
          onClick={() => onNavigate(9)}
          variant="ghost"
          size="sm"
          className="text-white hover:bg-white/20 mb-4"
        >
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <div className="space-y-2">
          <h2 className="text-white">Confirm Your Claim</h2>
          <p className="text-sm text-purple-100">
            Review and confirm delivery details
          </p>
        </div>
      </header>

      <div className="p-6 space-y-6 pb-24">
        <Card className="border-2 border-purple-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <ShoppingCart className="w-5 h-5 text-purple-600" />
              Selected Product
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-5xl border">
                  {product.image}
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm">{product.rating}</span>
                  </div>
                  <Badge className="bg-green-100 text-green-700 border-green-200">
                    Free Item
                  </Badge>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-600" />
                <span className="text-sm">Cost: <strong>{product.points} points</strong></span>
              </div>
              <div className="text-sm text-gray-600">
                Balance after: <strong>{userData.points - product.points} pts</strong>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <MapPin className="w-5 h-5 text-purple-600" />
              Delivery Information
            </CardTitle>
            <CardDescription>Where should we send your free product?</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullname">Full Name</Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="fullname"
                  placeholder="Enter your full name"
                  className="pl-9"
                  defaultValue={userData.name}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="phone"
                  placeholder="Enter your phone number"
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-9"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Delivery Address</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <textarea
                  id="address"
                  placeholder="Enter your complete delivery address"
                  className="w-full pl-9 p-2 border rounded-md min-h-[80px] text-sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <Alert className="bg-blue-50 border-blue-200">
          <Gift className="h-4 w-4 text-blue-600" />
          <AlertDescription className="text-sm text-blue-800">
            <strong>Free shipping!</strong> Your product will be delivered within 5-7 business days at no cost.
          </AlertDescription>
        </Alert>

        <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
          <CardContent className="p-4">
            <h4 className="text-sm mb-2">📦 What happens next?</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Confirmation email sent immediately</li>
              <li>• Product shipped within 24 hours</li>
              <li>• Track your order via email link</li>
              <li>• Points deducted upon confirmation</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
        <div className="max-w-md mx-auto">
          <Button
            onClick={handleConfirm}
            className="w-full bg-purple-600 hover:bg-purple-700"
            size="lg"
          >
            <Gift className="w-4 h-4 mr-2" />
            Confirm Claim ({product.points} points)
          </Button>
        </div>
      </div>
    </div>
  );
}
