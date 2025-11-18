import { useState } from 'react';
import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { UserData } from '../../App';
import { 
  Gift,
  Award,
  Search,
  Star,
  ShoppingCart,
  Shield,
  Sun,
  Droplets,
  X
} from 'lucide-react';

interface ProductMarketplaceProps {
  onNavigate: (screen: number) => void;
  userData: UserData;
}

const products = [
  {
    id: 1,
    name: 'Premium Nitrile Gloves',
    points: 150,
    category: 'ppe',
    rating: 4.8,
    stock: 'In Stock',
    icon: Shield,
    description: 'Chemical-resistant, powder-free',
    image: '🧤',
  },
  {
    id: 2,
    name: 'SPF 50+ Sunscreen',
    points: 100,
    category: 'skincare',
    rating: 4.9,
    stock: 'In Stock',
    icon: Sun,
    description: 'Water-resistant, broad spectrum',
    image: '☀️',
  },
  {
    id: 3,
    name: 'Barrier Cream',
    points: 120,
    category: 'skincare',
    rating: 4.7,
    stock: 'In Stock',
    icon: Droplets,
    description: 'Pre-work skin protection',
    image: '🧴',
  },
  {
    id: 4,
    name: 'Safety Goggles',
    points: 180,
    category: 'ppe',
    rating: 4.6,
    stock: 'In Stock',
    icon: Shield,
    description: 'Anti-fog, UV protection',
    image: '🥽',
  },
  {
    id: 5,
    name: 'Moisturizing Hand Cream',
    points: 80,
    category: 'skincare',
    rating: 4.8,
    stock: 'Limited',
    icon: Droplets,
    description: 'Intensive repair formula',
    image: '💧',
  },
  {
    id: 6,
    name: 'Work Glove Set (3 pairs)',
    points: 200,
    category: 'ppe',
    rating: 4.7,
    stock: 'In Stock',
    icon: Shield,
    description: 'Multi-purpose protection',
    image: '🧤',
  },
];

export function ProductMarketplace({ onNavigate, userData }: ProductMarketplaceProps) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const handleClaim = (productId: number) => {
    setSelectedProduct(productId);
    onNavigate(10);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <header className="bg-white border-b p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <Button
              onClick={() => onNavigate(8)}
              variant="ghost"
              size="icon"
            >
              <X className="w-5 h-5" />
            </Button>
            <div>
              <h2 className="flex items-center gap-2">
                <Gift className="w-5 h-5 text-purple-600" />
                Rewards Store
              </h2>
              <p className="text-sm text-gray-600">Redeem points for free products</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 bg-orange-100 px-3 py-2 rounded-full">
              <Award className="w-4 h-4 text-orange-600" />
              <span className="text-orange-600">{userData.points} pts</span>
            </div>
          </div>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search products..."
            className="pl-9"
          />
        </div>
      </header>

      <div className="p-6 space-y-6">
        <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white border-0">
          <CardContent className="p-6">
            <h3 className="text-white mb-2">🎉 Special Offer</h3>
            <p className="text-sm text-purple-100 mb-3">
              Complete 3 more scans this week and get 100 bonus points!
            </p>
            <div className="flex gap-2">
              <div className="flex-1 bg-white/20 rounded-full h-2">
                <div className="bg-white h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
              <span className="text-xs">2/5</span>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="all" className="w-full" onValueChange={setSelectedCategory}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="all">All Items</TabsTrigger>
            <TabsTrigger value="ppe">PPE</TabsTrigger>
            <TabsTrigger value="skincare">Skincare</TabsTrigger>
          </TabsList>

          <TabsContent value={selectedCategory} className="mt-6 space-y-4">
            {filteredProducts.map(product => {
              const canAfford = userData.points >= product.points;
              const ProductIcon = product.icon;

              return (
                <Card key={product.id} className={`hover:shadow-md transition-shadow ${!canAfford ? 'opacity-60' : ''}`}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg flex items-center justify-center text-4xl border">
                          {product.image}
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <h4 className="text-sm truncate mb-1">{product.name}</h4>
                            <p className="text-xs text-gray-600 mb-2">{product.description}</p>
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1">
                                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                                <span className="text-xs">{product.rating}</span>
                              </div>
                              <Badge variant={product.stock === 'In Stock' ? 'default' : 'destructive'} className="text-xs">
                                {product.stock}
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center gap-1">
                            <Award className="w-4 h-4 text-orange-600" />
                            <span className="text-sm text-orange-600">{product.points} pts</span>
                          </div>
                          <Button 
                            onClick={() => handleClaim(product.id)}
                            disabled={!canAfford}
                            size="sm"
                            className={canAfford ? 'bg-purple-600 hover:bg-purple-700' : ''}
                          >
                            <ShoppingCart className="w-3 h-3 mr-2" />
                            {canAfford ? 'Claim' : 'Not Enough Points'}
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </TabsContent>
        </Tabs>

        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-4">
            <h4 className="text-sm mb-2">💡 How to Earn More Points</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Complete daily skin scans: +50 pts</li>
              <li>• Maintain weekly streak: +100 bonus</li>
              <li>• Refer a coworker: +200 pts</li>
              <li>• Complete safety quiz: +30 pts</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
