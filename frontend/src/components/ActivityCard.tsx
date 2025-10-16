import { Card } from "./Card";
import { Badge } from "./ui/badge";
import { Clock } from "lucide-react";

interface ActivityCardProps {
  title: string;
  time: string;
  status: "completed" | "pending" | "missed";
  description?: string;
}

export function ActivityCard({ title, time, status, description }: ActivityCardProps) {
  const statusColors = {
    completed: "bg-success",
    pending: "bg-primary",
    missed: "bg-destructive",
  };

  return (
    <Card variant="glass" className="p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="font-medium text-foreground">{title}</h4>
            <Badge className={statusColors[status]}>{status}</Badge>
          </div>
          {description && (
            <p className="text-sm text-muted-foreground mb-2">{description}</p>
          )}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            <span>{time}</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
