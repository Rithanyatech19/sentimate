import { Activity, Wifi, WifiOff } from "lucide-react";
import { Card } from "./Card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

interface DeviceStatusCardProps {
  name: string;
  type: string;
  status: "online" | "offline";
  battery?: number;
  lastActive?: string;
}

export function DeviceStatusCard({ name, type, status, battery, lastActive }: DeviceStatusCardProps) {
  return (
    <Card variant="glass" hover className="p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <div className="rounded-xl bg-primary/10 p-2.5">
            <Activity className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">{name}</h3>
            <p className="text-sm text-muted-foreground">{type}</p>
            {lastActive && (
              <p className="mt-1 text-xs text-muted-foreground">Last active: {lastActive}</p>
            )}
          </div>
        </div>
        <Badge
          variant={status === "online" ? "default" : "secondary"}
          className={status === "online" ? "bg-success" : ""}
        >
          {status === "online" ? (
            <Wifi className="mr-1 h-3 w-3" />
          ) : (
            <WifiOff className="mr-1 h-3 w-3" />
          )}
          {status}
        </Badge>
      </div>
      
      {battery !== undefined && (
        <div className="mt-4 space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Battery</span>
            <span className="font-medium text-foreground">{battery}%</span>
          </div>
          <div className="h-2 w-full rounded-full bg-secondary overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
              style={{ width: `${battery}%` }}
            />
          </div>
        </div>
      )}

      <Button variant="outline" size="sm" className="mt-4 w-full">
        View Details
      </Button>
    </Card>
  );
}
