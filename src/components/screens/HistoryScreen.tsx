import { Button } from '../ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { Input } from '../ui/input';
import { 
  History, 
  Search,
  Calendar,
  AlertCircle,
  CheckCircle2,
  AlertTriangle,
  Eye,
  Filter,
  ChevronLeft
} from 'lucide-react';

interface HistoryScreenProps {
  onNavigate: (screen: number) => void;
}

const mockReports = [
  {
    id: 1,
    date: 'Nov 2, 2025',
    condition: 'Allergic Contact Dermatitis',
    severity: 'medium' as const,
    confidence: 82,
  },
  {
    id: 2,
    date: 'Oct 30, 2025',
    condition: 'Contact Dermatitis',
    severity: 'low' as const,
    confidence: 75,
  },
  {
    id: 3,
    date: 'Oct 25, 2025',
    condition: 'Occupational Xerosis',
    severity: 'low' as const,
    confidence: 78,
  },
];

export function HistoryScreen({ onNavigate }: HistoryScreenProps) {
  const severityConfig = {
    low: {
      icon: CheckCircle2,
      color: 'text-green-600',
      bg: 'bg-green-100',
      label: 'Low',
    },
    medium: {
      icon: AlertCircle,
      color: 'text-yellow-600',
      bg: 'bg-yellow-100',
      label: 'Medium',
    },
    high: {
      icon: AlertTriangle,
      color: 'text-red-600',
      bg: 'bg-red-100',
      label: 'High',
    },
  };

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
              <History className="w-5 h-5" />
              Scan History
            </h2>
            <p className="text-sm text-gray-600">View past assessments</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              placeholder="Search scans..."
              className="pl-9"
            />
          </div>
          <Button variant="outline" size="icon">
            <Filter className="w-4 h-4" />
          </Button>
        </div>
      </header>

      <div className="p-4 space-y-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl mb-1">3</div>
                <div className="text-xs text-gray-600">Total Scans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-green-600 mb-1">2</div>
                <div className="text-xs text-gray-600">Low Risk</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-yellow-600 mb-1">1</div>
                <div className="text-xs text-gray-600">Medium Risk</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div>
          <h3 className="mb-3">Recent Scans</h3>
          <div className="space-y-3">
            {mockReports.map((report) => {
              const config = severityConfig[report.severity];
              const SeverityIcon = config.icon;

              return (
                <Card key={report.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-br from-slate-100 to-slate-200 rounded-lg border flex items-center justify-center">
                          <span className="text-xs text-gray-500">Image</span>
                        </div>
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h4 className="text-sm truncate">
                              {report.condition}
                            </h4>
                            <div className="flex items-center gap-1 mt-1 text-xs text-gray-600">
                              <Calendar className="w-3 h-3" />
                              {report.date}
                            </div>
                          </div>
                          <Badge className={`${config.bg} ${config.color} text-xs`}>
                            {config.label}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3">
                          <div className="flex-1 bg-gray-200 rounded-full h-1.5">
                            <div 
                              className="bg-orange-600 h-1.5 rounded-full"
                              style={{ width: `${report.confidence}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-600">{report.confidence}%</span>
                        </div>

                        <Button 
                          onClick={() => onNavigate(8)}
                          variant="outline"
                          size="sm"
                          className="w-full"
                        >
                          <Eye className="w-3 h-3 mr-2" />
                          View Report
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-md mx-auto flex justify-around p-2">
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(4)}
          >
            <History className="w-5 h-5" />
            <span className="text-xs mt-1">Home</span>
          </Button>
          <Button variant="ghost" className="flex-col h-auto py-2 text-blue-600">
            <History className="w-5 h-5" />
            <span className="text-xs mt-1">History</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(10)}
          >
            <History className="w-5 h-5" />
            <span className="text-xs mt-1">Learn</span>
          </Button>
          <Button 
            variant="ghost" 
            className="flex-col h-auto py-2"
            onClick={() => onNavigate(11)}
          >
            <History className="w-5 h-5" />
            <span className="text-xs mt-1">Profile</span>
          </Button>
        </div>
      </nav>
    </div>
  );
}
