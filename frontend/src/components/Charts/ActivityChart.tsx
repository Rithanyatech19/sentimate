import { Card } from "../Card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { time: "00:00", activity: 2 },
  { time: "04:00", activity: 1 },
  { time: "08:00", activity: 12 },
  { time: "12:00", activity: 18 },
  { time: "16:00", activity: 15 },
  { time: "20:00", activity: 8 },
  { time: "24:00", activity: 3 },
];

export function ActivityChart() {
  return (
    <Card variant="glass" className="p-4">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Daily Activity</h3>
        <p className="text-sm text-muted-foreground">Movement patterns over 24 hours</p>
      </div>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
          <XAxis 
            dataKey="time" 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <YAxis 
            stroke="hsl(var(--muted-foreground))"
            fontSize={12}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: "0.75rem",
            }}
          />
          <Line
            type="monotone"
            dataKey="activity"
            stroke="hsl(var(--primary))"
            strokeWidth={2}
            dot={{ fill: "hsl(var(--primary))", strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
