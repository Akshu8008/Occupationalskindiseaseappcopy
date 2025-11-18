import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Alert, AlertDescription } from './ui/alert';
import { SkinReport } from '../App';
import { History, Calendar, AlertCircle, CheckCircle2, AlertTriangle, Eye } from 'lucide-react';
import { useState } from 'react';
import { ReportView } from './ReportView';

interface HistoryViewProps {
  reports: SkinReport[];
}

export function HistoryView({ reports }: HistoryViewProps) {
  const [selectedReport, setSelectedReport] = useState<SkinReport | null>(null);

  if (selectedReport) {
    return (
      <div>
        <Button 
          variant="outline" 
          onClick={() => setSelectedReport(null)}
          className="mb-4"
        >
          ← Back to History
        </Button>
        <ReportView report={selectedReport} onNewScan={() => setSelectedReport(null)} />
      </div>
    );
  }

  const severityConfig = {
    low: {
      icon: CheckCircle2,
      color: 'text-green-600',
      badgeVariant: 'default' as const,
      label: 'Low',
    },
    medium: {
      icon: AlertCircle,
      color: 'text-yellow-600',
      badgeVariant: 'default' as const,
      label: 'Medium',
    },
    high: {
      icon: AlertTriangle,
      color: 'text-red-600',
      badgeVariant: 'destructive' as const,
      label: 'High',
    },
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="w-5 h-5" />
            Scan History
          </CardTitle>
          <CardDescription>
            View and track your previous skin condition assessments
          </CardDescription>
        </CardHeader>
      </Card>

      {reports.length === 0 ? (
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            No scan history yet. Complete your first skin analysis to start tracking your condition over time.
          </AlertDescription>
        </Alert>
      ) : (
        <div className="grid gap-4">
          {reports.map((report) => {
            const config = severityConfig[report.severity];
            const SeverityIcon = config.icon;

            return (
              <Card key={report.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={report.imageUrl} 
                        alt="Skin scan"
                        className="w-24 h-24 object-cover rounded-lg border-2 border-gray-200"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="truncate">
                            {report.detectedCondition}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            {formatDate(report.date)}
                          </div>
                        </div>
                        <Badge variant={config.badgeVariant} className="ml-2">
                          <SeverityIcon className={`w-3 h-3 mr-1 ${config.color}`} />
                          {config.label}
                        </Badge>
                      </div>
                      
                      <div className="text-sm text-gray-600 mb-3">
                        Confidence: {report.confidence}%
                      </div>

                      <Button 
                        onClick={() => setSelectedReport(report)}
                        variant="outline"
                        size="sm"
                      >
                        <Eye className="w-4 h-4 mr-2" />
                        View Full Report
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
