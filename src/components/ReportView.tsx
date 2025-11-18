import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';
import { SkinReport } from '../App';
import { 
  AlertTriangle, 
  CheckCircle2, 
  AlertCircle, 
  FileText, 
  Shield, 
  Calendar,
  TrendingUp,
  Download,
  Share2
} from 'lucide-react';

interface ReportViewProps {
  report: SkinReport;
  onNewScan: () => void;
}

export function ReportView({ report, onNewScan }: ReportViewProps) {
  const severityConfig = {
    low: {
      icon: CheckCircle2,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      label: 'Low Risk',
      badgeVariant: 'default' as const,
    },
    medium: {
      icon: AlertCircle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50',
      borderColor: 'border-yellow-200',
      label: 'Medium Risk',
      badgeVariant: 'default' as const,
    },
    high: {
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200',
      label: 'High Risk',
      badgeVariant: 'destructive' as const,
    },
  };

  const config = severityConfig[report.severity];
  const SeverityIcon = config.icon;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="space-y-6">
      <Alert className={`${config.bgColor} ${config.borderColor}`}>
        <SeverityIcon className={`h-4 w-4 ${config.color}`} />
        <AlertDescription className={config.color}>
          {report.severity === 'high' 
            ? 'This condition requires immediate medical attention. Please consult a healthcare professional as soon as possible.'
            : report.severity === 'medium'
            ? 'Monitor this condition closely. If symptoms worsen, seek medical attention.'
            : 'This appears to be a minor condition. Follow the recommendations below.'}
        </AlertDescription>
      </Alert>

      <Card>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Analysis Report
              </CardTitle>
              <CardDescription className="flex items-center gap-2 mt-2">
                <Calendar className="w-4 h-4" />
                {formatDate(report.date)}
              </CardDescription>
            </div>
            <Badge variant={config.badgeVariant} className="ml-2">
              {config.label}
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="mb-3 flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Detected Condition
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="mb-2">{report.detectedCondition}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Confidence:</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-orange-600 h-2 rounded-full"
                      style={{ width: `${report.confidence}%` }}
                    />
                  </div>
                  <span className="text-sm">{report.confidence}%</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-3">Analyzed Image</h3>
              <div className="rounded-lg overflow-hidden border-2 border-gray-200">
                <img 
                  src={report.imageUrl} 
                  alt="Analyzed skin" 
                  className="w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <h3 className="mb-3 flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              Immediate Recommendations
            </h3>
            <ul className="space-y-2">
              {report.recommendations.map((rec, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-orange-600 flex-shrink-0">•</span>
                  <span className="text-gray-700">{rec}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div>
            <h3 className="mb-3 flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Preventive Measures
            </h3>
            <ul className="space-y-2">
              {report.preventiveMeasures.map((measure, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-blue-600 flex-shrink-0">•</span>
                  <span className="text-gray-700">{measure}</span>
                </li>
              ))}
            </ul>
          </div>

          <Alert className="bg-blue-50 border-blue-200">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              <strong>Important:</strong> This analysis is for informational purposes only and does not replace professional medical advice. Always consult with a qualified healthcare provider for proper diagnosis and treatment.
            </AlertDescription>
          </Alert>

          <div className="flex gap-3 pt-4">
            <Button variant="outline" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Download Report
            </Button>
            <Button variant="outline" className="flex-1">
              <Share2 className="w-4 h-4 mr-2" />
              Share with Doctor
            </Button>
            <Button 
              onClick={onNewScan}
              className="flex-1 bg-orange-600 hover:bg-orange-700"
            >
              New Scan
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
