import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/Card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell, Shield, Volume2, Smartphone } from "lucide-react";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Settings</h1>
          <p className="text-muted-foreground mt-1">Customize your SentiMate experience</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-2xl bg-primary/10 p-2.5">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Notifications</h3>
                  <p className="text-sm text-muted-foreground">Manage alert preferences</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notif" className="text-foreground">Push Notifications</Label>
                  <Switch id="push-notif" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notif" className="text-foreground">Email Alerts</Label>
                  <Switch id="email-notif" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="critical-only" className="text-foreground">Critical Alerts Only</Label>
                  <Switch id="critical-only" />
                </div>
              </div>
            </Card>

            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-2xl bg-primary/10 p-2.5">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Privacy & Security</h3>
                  <p className="text-sm text-muted-foreground">Control data and access</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="location" className="text-foreground">Location Tracking</Label>
                  <Switch id="location" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="health-data" className="text-foreground">Health Data Sync</Label>
                  <Switch id="health-data" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="two-factor" className="text-foreground">Two-Factor Authentication</Label>
                  <Switch id="two-factor" />
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-6">
            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-2xl bg-primary/10 p-2.5">
                  <Volume2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Sound & Voice</h3>
                  <p className="text-sm text-muted-foreground">Audio preferences</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="voice-assist" className="text-foreground">Voice Assistant</Label>
                  <Switch id="voice-assist" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="reminder-sound" className="text-foreground">Reminder Sounds</Label>
                  <Switch id="reminder-sound" defaultChecked />
                </div>
              </div>
            </Card>

            <Card variant="glass" className="p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="rounded-2xl bg-primary/10 p-2.5">
                  <Smartphone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Appearance</h3>
                  <p className="text-sm text-muted-foreground">Theme and display settings</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Label className="text-foreground">Theme Mode</Label>
                <ThemeToggle />
              </div>
            </Card>

            <div className="flex gap-4">
              <Button className="flex-1">Save Changes</Button>
              <Button variant="outline" className="flex-1">Reset to Defaults</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;