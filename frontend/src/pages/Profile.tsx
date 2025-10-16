import { DashboardHeader } from "@/components/DashboardHeader";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { User, Phone, Mail, Users, Calendar } from "lucide-react";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="container mx-auto px-4 py-6 space-y-6">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Profile</h1>
          <p className="text-muted-foreground mt-1">Manage account and family contacts</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card variant="glass" className="p-8">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-24 w-24 rounded-2xl bg-gradient-to-br from-primary to-accent" />
              <div>
                <h2 className="text-2xl font-bold text-foreground">Sarah Johnson</h2>
                <p className="text-muted-foreground">Family Admin</p>
                <Button variant="outline" size="sm" className="mt-2">Change Photo</Button>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <Input id="name" defaultValue="Sarah Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">Email</Label>
                  <Input id="email" type="email" defaultValue="sarah.j@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                  <Input id="phone" type="tel" defaultValue="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dob" className="text-foreground">Date of Birth</Label>
                  <Input id="dob" type="date" defaultValue="1985-06-15" />
                </div>
              </div>

              <Button size="lg" className="w-full">Update Profile</Button>
            </div>
          </Card>

          <Card variant="glass" className="p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="rounded-2xl bg-primary/10 p-2.5">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">Family Contacts</h3>
                <p className="text-sm text-muted-foreground">Emergency and caregiver contacts</p>
              </div>
            </div>

            <div className="space-y-4">
              <Card variant="flat" className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent" />
                    <div>
                      <p className="font-medium text-foreground">Dr. Emily Chen</p>
                      <p className="text-sm text-muted-foreground">Primary Care Physician</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <Card variant="flat" className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-success to-accent" />
                    <div>
                      <p className="font-medium text-foreground">Michael Johnson</p>
                      <p className="text-sm text-muted-foreground">Emergency Contact</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                </div>
              </Card>

              <Button variant="outline" className="w-full">
                + Add Family Contact
              </Button>
            </div>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;