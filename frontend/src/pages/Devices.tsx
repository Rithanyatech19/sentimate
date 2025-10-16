import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/Card";
import { DeviceStatusCard } from "@/components/DeviceStatusCard";
import { Button } from "@/components/ui/button";
import { Plus, Smartphone, Watch, Home, Activity } from "lucide-react";

const Devices = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Connected Devices</h1>
            <p className="text-muted-foreground mt-1">Manage and monitor all SentiMate devices</p>
          </div>
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            Add Device
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <DeviceStatusCard
            name="Smart Watch Pro"
            type="Wearable Monitor"
            status="online"
            battery={87}
            lastActive="2 min ago"
          />
          <DeviceStatusCard
            name="Home Hub Central"
            type="Central Control"
            status="online"
            battery={100}
            lastActive="Just now"
          />
          <DeviceStatusCard
            name="Motion Sensor - Living Room"
            type="Safety Device"
            status="online"
            lastActive="5 min ago"
          />
          <DeviceStatusCard
            name="Emergency Button"
            type="Safety Device"
            status="online"
            battery={92}
            lastActive="1 hour ago"
          />
          <DeviceStatusCard
            name="Smart Watch Mini"
            type="Backup Wearable"
            status="offline"
            battery={15}
            lastActive="2 days ago"
          />
        </div>

        <Card variant="glass" className="p-8">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center justify-center rounded-2xl bg-primary/10 p-4">
              <Smartphone className="h-12 w-12 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground">Device Pairing Wizard</h3>
            <p className="text-muted-foreground max-w-md mx-auto">
              Need to connect a new device? Our simple pairing wizard will guide you through the process in just a few steps.
            </p>
            <Button size="lg">Start Pairing Process</Button>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Devices;
