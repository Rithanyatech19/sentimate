import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/Card";
import { DeviceStatusCard } from "@/components/DeviceStatusCard";
import { ActivityCard } from "@/components/ActivityCard";
import { ActivityChart } from "@/components/Charts/ActivityChart";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Shield, TrendingUp, Bell } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Top Section - 1:3 ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Column - 1/4 width: Activity Cards in 2 columns */}
          <div className="lg:col-span-1 space-y-6">
            {/* Activity Cards - Made smaller in 2 columns */}
            <div className="grid grid-cols-2 gap-3">
              <Card variant="glass" className="p-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="rounded-lg bg-success/10 p-1.5 mb-2">
                    <Heart className="h-5 w-5 text-success" />
                  </div>
                  <p className="text-xs text-muted-foreground">Heart Rate</p>
                  <p className="text-lg font-bold text-gradient mt-1">72</p>
                  <p className="text-[10px] text-success mt-1">Normal</p>
                </div>
              </Card>

              <Card variant="glass" className="p-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="rounded-lg bg-primary/10 p-1.5 mb-2">
                    <Activity className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Activity</p>
                  <p className="text-lg font-bold text-gradient mt-1">85</p>
                  <p className="text-[10px] text-primary mt-1">+12%</p>
                </div>
              </Card>

              <Card variant="glass" className="p-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="rounded-lg bg-success/10 p-1.5 mb-2">
                    <Shield className="h-5 w-5 text-success" />
                  </div>
                  <p className="text-xs text-muted-foreground">Safety</p>
                  <p className="text-lg font-bold text-gradient mt-1">Safe</p>
                  <p className="text-[10px] text-success mt-1">OK</p>
                </div>
              </Card>

              <Card variant="glass" className="p-3">
                <div className="flex flex-col items-center justify-center">
                  <div className="rounded-lg bg-primary/10 p-1.5 mb-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <p className="text-xs text-muted-foreground">Trend</p>
                  <p className="text-lg font-bold text-gradient mt-1">↑ 8%</p>
                  <p className="text-[10px] text-primary mt-1">Good</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Right Column - 3/4 width: Activity Chart */}
          <div className="lg:col-span-3">
            <ActivityChart />
          </div>
        </div>

        {/* Bottom Section - Full width with internal scrolling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Recent Notifications - Internal scrolling */}
          <div className="flex flex-col">
            <Card variant="glass" className="p-3 flex-grow">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-foreground">Recent Notifications</h2>
                <Button variant="ghost" size="sm" className="text-xs h-8 px-2" onClick={() => navigate("/reminders")}>
                  View All
                </Button>
              </div>
              <div className="max-h-[250px] overflow-y-auto pr-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Medication Reminder</p>
                      <p className="text-xs text-muted-foreground">Take your evening pills</p>
                      <p className="text-[10px] text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-success mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Activity Goal Met</p>
                      <p className="text-xs text-muted-foreground">Daily step goal achieved</p>
                      <p className="text-[10px] text-muted-foreground mt-1">4 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-warning mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Device Update</p>
                      <p className="text-xs text-muted-foreground">Smart Watch needs update</p>
                      <p className="text-[10px] text-muted-foreground mt-1">Yesterday</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-info mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Doctor Appointment</p>
                      <p className="text-xs text-muted-foreground">Annual checkup scheduled</p>
                      <p className="text-[10px] text-muted-foreground mt-1">Tomorrow</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-destructive mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Missed Medication</p>
                      <p className="text-xs text-muted-foreground">Morning dose not taken</p>
                      <p className="text-[10px] text-muted-foreground mt-1">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Family Call</p>
                      <p className="text-xs text-muted-foreground">Scheduled video call</p>
                      <p className="text-[10px] text-muted-foreground mt-1">Later today</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-muted-foreground mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Hydration Reminder</p>
                      <p className="text-xs text-muted-foreground">Drink a glass of water</p>
                      <p className="text-[10px] text-muted-foreground mt-1">30 min ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-success mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Exercise Completed</p>
                      <p className="text-xs text-muted-foreground">Morning yoga session finished</p>
                      <p className="text-[10px] text-muted-foreground mt-1">This morning</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Daily Health Summary - Match style of other divs */}
          <div className="flex flex-col">
            <Card variant="glass" className="p-3 flex-grow">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-foreground">Health Summary</h2>
              </div>
              <div className="max-h-[250px] overflow-y-auto pr-2">
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Shield className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Daily Health Summary</p>
                      <p className="text-xs text-muted-foreground">
                        Heart rate stable at 72 BPM. Blood pressure 120/80 mmHg. 
                        Respiratory rate at 16 breaths per minute.
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1">Today</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Activity className="h-4 w-4 text-success mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Activity Level</p>
                      <p className="text-xs text-muted-foreground">
                        7,842 steps (78% of daily goal). 30 minutes of moderate activity completed.
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1">Today</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Heart className="h-4 w-4 text-info mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Sleep Quality</p>
                      <p className="text-xs text-muted-foreground">
                        7 hours 15 minutes sleep with 85% efficiency. 
                        Deep sleep phase lasted 1 hour 45 minutes.
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1">Last night</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Bell className="h-4 w-4 text-warning mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Medication</p>
                      <p className="text-xs text-muted-foreground">
                        All morning medications taken. Next dose scheduled for 6:00 PM.
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <TrendingUp className="h-4 w-4 text-primary mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">Weekly Trend</p>
                      <p className="text-xs text-muted-foreground">
                        Overall health score improving. Activity levels up 12% from last week.
                      </p>
                      <p className="text-[10px] text-muted-foreground mt-1">This week</p>
                    </div>
                  </div>
                  <div className="pt-2">
                    <Button size="sm" className="text-xs px-2 py-1">
                      View Full Report
                    </Button>
                    <Button size="sm" variant="outline" className="text-xs px-2 py-1 ml-2">
                      Share with Family
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Connected Devices - Internal scrolling */}
          <div className="flex flex-col">
            <Card variant="glass" className="p-3 flex-grow">
              <div className="flex items-center justify-between mb-3">
                <h2 className="font-bold text-foreground">Connected Devices</h2>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-xs h-8 px-2"
                  onClick={() => navigate("/devices")}
                >
                  Manage
                </Button>
              </div>
              <div className="max-h-[250px] overflow-y-auto pr-2">
                <div className="space-y-3">
                  <DeviceStatusCard
                    name="Smart Watch"
                    type="Wearable Monitor"
                    status="online"
                    battery={87}
                    lastActive="2 min ago"
                  />
                  <DeviceStatusCard
                    name="Home Hub"
                    type="Central Control"
                    status="online"
                    battery={100}
                    lastActive="Just now"
                  />
                  <DeviceStatusCard
                    name="Motion Sensor"
                    type="Safety Device"
                    status="online"
                    lastActive="5 min ago"
                  />
                  <DeviceStatusCard
                    name="Blood Pressure Monitor"
                    type="Health Device"
                    status="online"
                    battery={92}
                    lastActive="1 hour ago"
                  />
                  <DeviceStatusCard
                    name="Glucose Meter"
                    type="Health Device"
                    status="offline"
                    battery={45}
                    lastActive="2 days ago"
                  />
                  <DeviceStatusCard
                    name="Smart Scale"
                    type="Health Device"
                    status="online"
                    battery={78}
                    lastActive="5 hours ago"
                  />
                  <DeviceStatusCard
                    name="Pill Dispenser"
                    type="Medication Device"
                    status="online"
                    battery={95}
                    lastActive="30 min ago"
                  />
                  <DeviceStatusCard
                    name="Oximeter"
                    type="Health Device"
                    status="online"
                    battery={88}
                    lastActive="15 min ago"
                  />
                  <DeviceStatusCard
                    name="Thermometer"
                    type="Health Device"
                    status="offline"
                    battery={30}
                    lastActive="3 days ago"
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;