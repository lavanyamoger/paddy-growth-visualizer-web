
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Leaf, TrendingUp, Droplets, Sun, Thermometer } from "lucide-react";

const PlantAnalysis = () => {
  const plantData = [
    {
      id: "P001",
      name: "Paddy Plant A",
      health: 92,
      growth: "Excellent",
      stage: "Vegetative",
      height: 24.5,
      leaves: 12,
      lastAnalyzed: "2024-06-13",
    },
    {
      id: "P002", 
      name: "Paddy Plant B",
      health: 78,
      growth: "Good",
      stage: "Reproductive",
      height: 31.2,
      leaves: 18,
      lastAnalyzed: "2024-06-12",
    },
    {
      id: "P003",
      name: "Paddy Plant C",
      health: 65,
      growth: "Fair",
      stage: "Seedling",
      height: 12.8,
      leaves: 6,
      lastAnalyzed: "2024-06-13",
    },
  ];

  const environmentalFactors = {
    temperature: 28,
    humidity: 75,
    soilMoisture: 82,
    lightIntensity: 68,
  };

  const growthPredictions = [
    { week: "Week 1", predicted: 15, actual: 14.2 },
    { week: "Week 2", predicted: 18, actual: 17.8 },
    { week: "Week 3", predicted: 22, actual: 21.5 },
    { week: "Week 4", predicted: 26, actual: null },
    { week: "Week 5", predicted: 30, actual: null },
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-green-100">
          <TabsTrigger value="overview" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Plant Overview
          </TabsTrigger>
          <TabsTrigger value="environment" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Environment
          </TabsTrigger>
          <TabsTrigger value="predictions" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
            Growth Predictions
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {plantData.map((plant) => (
              <Card key={plant.id} className="border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <Leaf className="h-5 w-5 text-green-600" />
                      <span>{plant.name}</span>
                    </span>
                    <Badge variant={plant.health > 80 ? "default" : plant.health > 60 ? "secondary" : "destructive"}>
                      {plant.growth}
                    </Badge>
                  </CardTitle>
                  <CardDescription>ID: {plant.id} • Last analyzed: {plant.lastAnalyzed}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Health Score</span>
                      <span className="font-bold">{plant.health}%</span>
                    </div>
                    <Progress value={plant.health} className="h-2" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-600">Growth Stage</p>
                      <p className="font-medium">{plant.stage}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Height</p>
                      <p className="font-medium">{plant.height} cm</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Leaves</p>
                      <p className="font-medium">{plant.leaves}</p>
                    </div>
                    <div>
                      <p className="text-gray-600">Status</p>
                      <Badge variant="outline" className="text-xs">
                        Active
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="environment" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Temperature</CardTitle>
                <Thermometer className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{environmentalFactors.temperature}°C</div>
                <Progress value={(environmentalFactors.temperature / 40) * 100} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">Optimal range: 25-30°C</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Humidity</CardTitle>
                <Droplets className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{environmentalFactors.humidity}%</div>
                <Progress value={environmentalFactors.humidity} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">Optimal range: 70-80%</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Soil Moisture</CardTitle>
                <Droplets className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{environmentalFactors.soilMoisture}%</div>
                <Progress value={environmentalFactors.soilMoisture} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">Optimal range: 80-90%</p>
              </CardContent>
            </Card>

            <Card className="border-green-200">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Light Intensity</CardTitle>
                <Sun className="h-4 w-4 text-yellow-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{environmentalFactors.lightIntensity}%</div>
                <Progress value={environmentalFactors.lightIntensity} className="mt-2" />
                <p className="text-xs text-gray-600 mt-1">Optimal range: 60-80%</p>
              </CardContent>
            </Card>
          </div>

          <Card className="border-green-200">
            <CardHeader>
              <CardTitle>Environmental Recommendations</CardTitle>
              <CardDescription>AI-generated suggestions based on current conditions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-green-50 rounded-lg">
                  <div className="bg-green-600 rounded-full p-1">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="font-medium text-green-800">Temperature is optimal</p>
                    <p className="text-sm text-green-600">Current temperature supports healthy growth</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-blue-50 rounded-lg">
                  <div className="bg-blue-600 rounded-full p-1">
                    <span className="text-white text-xs">i</span>
                  </div>
                  <div>
                    <p className="font-medium text-blue-800">Monitor soil moisture</p>
                    <p className="text-sm text-blue-600">Consider slight increase in watering frequency</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-3 bg-yellow-50 rounded-lg">
                  <div className="bg-yellow-600 rounded-full p-1">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <div>
                    <p className="font-medium text-yellow-800">Light exposure could be improved</p>
                    <p className="text-sm text-yellow-600">Ensure plants receive adequate sunlight throughout the day</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-6">
          <Card className="border-green-200">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>Growth Predictions</span>
              </CardTitle>
              <CardDescription>AI-powered growth forecasting based on current patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {growthPredictions.map((prediction, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <span className="font-medium text-gray-900">{prediction.week}</span>
                      <div className="flex space-x-4">
                        <span className="text-sm text-gray-600">
                          Predicted: {prediction.predicted}cm
                        </span>
                        {prediction.actual && (
                          <span className="text-sm text-green-600 font-medium">
                            Actual: {prediction.actual}cm
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      {prediction.actual ? (
                        <Badge variant={Math.abs(prediction.predicted - prediction.actual) < 1 ? "default" : "secondary"}>
                          {Math.abs(prediction.predicted - prediction.actual) < 1 ? "Accurate" : "Close"}
                        </Badge>
                      ) : (
                        <Badge variant="outline">Predicted</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PlantAnalysis;
