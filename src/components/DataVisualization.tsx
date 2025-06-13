
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { TrendingUp, BarChart3, PieChart as PieIcon, Activity } from "lucide-react";

const DataVisualization = () => {
  const growthData = [
    { week: 'Week 1', height: 8.2, leaves: 3 },
    { week: 'Week 2', height: 12.5, leaves: 5 },
    { week: 'Week 3', height: 18.3, leaves: 8 },
    { week: 'Week 4', height: 24.7, leaves: 12 },
    { week: 'Week 5', height: 31.2, leaves: 16 },
    { week: 'Week 6', height: 38.1, leaves: 20 },
  ];

  const healthData = [
    { plant: 'Plant A', health: 92 },
    { plant: 'Plant B', health: 87 },
    { plant: 'Plant C', health: 78 },
    { plant: 'Plant D', health: 94 },
    { plant: 'Plant E', health: 82 },
  ];

  const stageDistribution = [
    { name: 'Seedling', value: 25, color: '#10B981' },
    { name: 'Vegetative', value: 45, color: '#059669' },
    { name: 'Reproductive', value: 20, color: '#047857' },
    { name: 'Maturation', value: 10, color: '#064E3B' },
  ];

  const environmentalTrends = [
    { day: 'Mon', temperature: 26, humidity: 78, soilMoisture: 85 },
    { day: 'Tue', temperature: 28, humidity: 75, soilMoisture: 82 },
    { day: 'Wed', temperature: 27, humidity: 80, soilMoisture: 88 },
    { day: 'Thu', temperature: 29, humidity: 72, soilMoisture: 80 },
    { day: 'Fri', temperature: 28, humidity: 76, soilMoisture: 84 },
    { day: 'Sat', temperature: 26, humidity: 82, soilMoisture: 90 },
    { day: 'Sun', temperature: 27, humidity: 79, soilMoisture: 87 },
  ];

  return (
    <div className="space-y-6">
      {/* Growth Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <span>Growth Trends</span>
            </CardTitle>
            <CardDescription>Height and leaf development over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="week" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="height" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }}
                  name="Height (cm)"
                />
                <Line 
                  type="monotone" 
                  dataKey="leaves" 
                  stroke="#059669" 
                  strokeWidth={3}
                  dot={{ fill: '#059669', strokeWidth: 2, r: 6 }}
                  name="Leaf Count"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <BarChart3 className="h-5 w-5 text-green-600" />
              <span>Plant Health Scores</span>
            </CardTitle>
            <CardDescription>Current health assessment across all plants</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={healthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="plant" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }} 
                />
                <Bar 
                  dataKey="health" 
                  fill="#10b981"
                  radius={[4, 4, 0, 0]}
                  name="Health Score (%)"
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Stage Distribution and Environmental Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <PieIcon className="h-5 w-5 text-green-600" />
              <span>Growth Stage Distribution</span>
            </CardTitle>
            <CardDescription>Current distribution of plants across growth stages</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={stageDistribution}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {stageDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-green-600" />
              <span>Environmental Conditions</span>
            </CardTitle>
            <CardDescription>Weekly environmental monitoring data</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={environmentalTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="day" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#f9fafb', 
                    border: '1px solid #d1d5db',
                    borderRadius: '8px'
                  }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  name="Temperature (°C)"
                />
                <Line 
                  type="monotone" 
                  dataKey="humidity" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  name="Humidity (%)"
                />
                <Line 
                  type="monotone" 
                  dataKey="soilMoisture" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  name="Soil Moisture (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Summary Statistics */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle>Data Summary</CardTitle>
          <CardDescription>Key insights from your plant monitoring data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <h3 className="text-2xl font-bold text-green-600">24.5 cm</h3>
              <p className="text-sm text-gray-600">Average Plant Height</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-600">86.6%</h3>
              <p className="text-sm text-gray-600">Average Health Score</p>
            </div>
            <div className="text-center p-4 bg-yellow-50 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-600">3.2 cm/week</h3>
              <p className="text-sm text-gray-600">Growth Rate</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DataVisualization;
