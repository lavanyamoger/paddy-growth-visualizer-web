
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Leaf, TrendingUp, AlertTriangle, CheckCircle } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Plants Monitored",
      value: "1,247",
      change: "+12%",
      trend: "up",
      icon: Leaf,
    },
    {
      title: "Average Growth Rate",
      value: "3.2cm/week",
      change: "+5%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Health Score",
      value: "87%",
      change: "+2%",
      trend: "up",
      icon: CheckCircle,
    },
    {
      title: "Alerts",
      value: "3",
      change: "-1",
      trend: "down",
      icon: AlertTriangle,
    },
  ];

  const recentAnalyses = [
    { id: 1, plantId: "P001", date: "2024-06-13", health: "Excellent", growth: "Normal" },
    { id: 2, plantId: "P002", date: "2024-06-13", health: "Good", growth: "Slow" },
    { id: 3, plantId: "P003", date: "2024-06-13", health: "Fair", growth: "Fast" },
    { id: 4, plantId: "P004", date: "2024-06-12", health: "Excellent", growth: "Normal" },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index} className="border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
                {stat.change} from last week
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Growth Progress */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle>Growth Progress Overview</CardTitle>
            <CardDescription>Current growth stages across all monitored plants</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Seedling Stage</span>
                <span>25%</span>
              </div>
              <Progress value={25} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Vegetative Stage</span>
                <span>45%</span>
              </div>
              <Progress value={45} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Reproductive Stage</span>
                <span>20%</span>
              </div>
              <Progress value={20} className="h-2" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Maturation Stage</span>
                <span>10%</span>
              </div>
              <Progress value={10} className="h-2" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle>Recent Plant Analyses</CardTitle>
            <CardDescription>Latest AI-powered plant assessments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAnalyses.map((analysis) => (
                <div key={analysis.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Plant {analysis.plantId}</p>
                    <p className="text-sm text-gray-600">{analysis.date}</p>
                  </div>
                  <div className="flex space-x-2">
                    <Badge 
                      variant={analysis.health === 'Excellent' ? 'default' : analysis.health === 'Good' ? 'secondary' : 'destructive'}
                      className="text-xs"
                    >
                      {analysis.health}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {analysis.growth}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
