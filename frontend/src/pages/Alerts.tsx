import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/Card";
import { Badge } from "@/components/ui/badge";
import { AlertTriangle, Activity, Heart, Bell } from "lucide-react";

const alerts = [
  {
    id: 1,
    type: "Motion Detected",
    severity: "info",
    message: "Motion detected in living room - 2:34 AM",
    time: "2 hours ago",
    icon: Activity,
  },
  {
    id: 2,
    type: "Low Battery",
    severity: "warning",
    message: "Smart Watch Mini battery at 15%",
    time: "2 days ago",
    icon: AlertTriangle,
  },
  {
    id: 3,
    type: "Vital Sign Alert",
    severity: "info",
    message: "Heart rate slightly elevated - 88 BPM",
    time: "3 days ago",
    icon: Heart,
  },
  {
    id: 4,
    type: "Medication Reminder",
    severity: "info",
    message: "Morning medication taken on time",
    time: "1 week ago",
    icon: Bell,
  },
];

const Alerts = () => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critical":
        return "bg-destructive";
      case "warning":
        return "bg-yellow-500";
      case "info":
        return "bg-primary";
      default:
        return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Safety Alerts</h1>
          <p className="text-muted-foreground mt-1">Monitor motion, falls, and safety events</p>
        </div>

        <div className="grid gap-4">
          {alerts.map((alert) => {
            const Icon = alert.icon;
            return (
              <Card key={alert.id} variant="glass" className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`rounded-2xl ${getSeverityColor(alert.severity)}/10 p-3`}>
                    <Icon className={`h-6 w-6 ${getSeverityColor(alert.severity).replace('bg-', 'text-')}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-foreground">{alert.type}</h3>
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground mb-2">{alert.message}</p>
                    <span className="text-xs text-muted-foreground">{alert.time}</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Alerts;
