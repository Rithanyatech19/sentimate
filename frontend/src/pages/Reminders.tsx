import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Clock, Pill, Phone, Utensils, Edit, Trash2 } from "lucide-react";

const reminders = [
  {
    id: 1,
    title: "Morning Medication",
    time: "8:30 AM",
    frequency: "Daily",
    icon: Pill,
    color: "text-primary",
    active: true,
  },
  {
    id: 2,
    title: "Lunch Time",
    time: "12:00 PM",
    frequency: "Daily",
    icon: Utensils,
    color: "text-success",
    active: true,
  },
  {
    id: 3,
    title: "Afternoon Walk",
    time: "2:30 PM",
    frequency: "Daily",
    icon: Clock,
    color: "text-accent",
    active: true,
  },
  {
    id: 4,
    title: "Family Check-in Call",
    time: "6:00 PM",
    frequency: "Daily",
    icon: Phone,
    color: "text-primary",
    active: true,
  },
  {
    id: 5,
    title: "Evening Medication",
    time: "8:00 PM",
    frequency: "Daily",
    icon: Pill,
    color: "text-primary",
    active: false,
  },
];

const Reminders = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gradient">Reminders</h1>
            <p className="text-muted-foreground mt-1">Schedule and manage daily reminders</p>
          </div>
          <Button size="lg">
            <Plus className="mr-2 h-5 w-5" />
            New Reminder
          </Button>
        </div>

        <div className="grid gap-4">
          {reminders.map((reminder) => {
            const Icon = reminder.icon;
            return (
              <Card key={reminder.id} variant="glass" className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className={`rounded-2xl bg-card p-3 ${reminder.color}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg font-semibold text-foreground">{reminder.title}</h3>
                        <Badge variant={reminder.active ? "default" : "secondary"}>
                          {reminder.active ? "Active" : "Paused"}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-sm text-muted-foreground flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {reminder.time}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {reminder.frequency}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="icon">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
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

export default Reminders;
