
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Upload, BarChart3, Leaf, TrendingUp, Camera, Brain } from "lucide-react";
import ImageUpload from "@/components/ImageUpload";
import Dashboard from "@/components/Dashboard";
import PlantAnalysis from "@/components/PlantAnalysis";
import DataVisualization from "@/components/DataVisualization";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-2 rounded-lg">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">PlantGrowth Monitor</h1>
                <p className="text-sm text-gray-600">AI-Powered Paddy Growth Analysis</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <Brain className="h-4 w-4 mr-2" />
                AI Model
              </Button>
              <Button size="sm" className="bg-green-600 hover:bg-green-700">
                <Upload className="h-4 w-4 mr-2" />
                Upload Image
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Advanced Plant Growth Monitoring
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage cutting-edge AI technology to monitor, analyze, and predict paddy plant growth patterns with precision and reliability.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Camera className="h-5 w-5 text-green-600" />
                <span>Image Analysis</span>
              </CardTitle>
              <CardDescription>
                Upload plant images for instant AI-powered growth analysis
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-green-600" />
                <span>Growth Analytics</span>
              </CardTitle>
              <CardDescription>
                Track growth patterns and receive detailed insights
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="border-green-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-green-600" />
                <span>Predictions</span>
              </CardTitle>
              <CardDescription>
                Get future growth predictions based on current data
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Main Application Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-green-100">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Dashboard
            </TabsTrigger>
            <TabsTrigger value="upload" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Upload & Analyze
            </TabsTrigger>
            <TabsTrigger value="analysis" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Plant Analysis
            </TabsTrigger>
            <TabsTrigger value="data" className="data-[state=active]:bg-green-600 data-[state=active]:text-white">
              Data Insights
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="mt-6">
            <Dashboard />
          </TabsContent>

          <TabsContent value="upload" className="mt-6">
            <ImageUpload />
          </TabsContent>

          <TabsContent value="analysis" className="mt-6">
            <PlantAnalysis />
          </TabsContent>

          <TabsContent value="data" className="mt-6">
            <DataVisualization />
          </TabsContent>
        </Tabs>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-green-100">
            © 2024 PlantGrowth Monitor. Advancing agriculture through AI technology.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
