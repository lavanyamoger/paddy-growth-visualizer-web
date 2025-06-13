
import { useState, useCallback } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Upload, Image as ImageIcon, Brain, Leaf, AlertCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any>(null);
  const { toast } = useToast();

  const handleImageUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setAnalysisResult(null);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const analyzeImage = async () => {
    if (!selectedImage) {
      toast({
        title: "No image selected",
        description: "Please upload an image first",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate AI analysis with realistic delay and results
    setTimeout(() => {
      const mockResult = {
        plantHealth: Math.floor(Math.random() * 30) + 70, // 70-100%
        growthStage: ["Seedling", "Vegetative", "Reproductive", "Maturation"][Math.floor(Math.random() * 4)],
        heightEstimate: (Math.random() * 20 + 10).toFixed(1), // 10-30cm
        leafCount: Math.floor(Math.random() * 15) + 5, // 5-20 leaves
        diseases: Math.random() > 0.7 ? ["Leaf spot", "Nutrient deficiency"] : [],
        recommendations: [
          "Maintain current watering schedule",
          "Consider adding nitrogen-rich fertilizer",
          "Monitor for pest activity"
        ]
      };
      
      setAnalysisResult(mockResult);
      setIsAnalyzing(false);
      
      toast({
        title: "Analysis Complete",
        description: "Your plant image has been successfully analyzed",
      });
    }, 3000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Upload Section */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Upload className="h-5 w-5 text-green-600" />
              <span>Upload Plant Image</span>
            </CardTitle>
            <CardDescription>
              Upload a clear image of your paddy plant for AI-powered analysis
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-green-300 rounded-lg p-8 text-center">
              {selectedImage ? (
                <div className="space-y-4">
                  <img
                    src={selectedImage}
                    alt="Uploaded plant"
                    className="max-h-64 mx-auto rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600">Image uploaded successfully</p>
                </div>
              ) : (
                <div className="space-y-4">
                  <ImageIcon className="h-12 w-12 text-green-400 mx-auto" />
                  <div>
                    <p className="text-lg font-medium text-gray-900">Drop your image here</p>
                    <p className="text-sm text-gray-600">or click to browse</p>
                  </div>
                </div>
              )}
            </div>
            
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="w-full"
            />
            
            <Button 
              onClick={analyzeImage}
              disabled={!selectedImage || isAnalyzing}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              {isAnalyzing ? (
                <>
                  <Brain className="h-4 w-4 mr-2 animate-spin" />
                  Analyzing...
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4 mr-2" />
                  Analyze with AI
                </>
              )}
            </Button>
            
            {isAnalyzing && (
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Processing image...</span>
                  <span>75%</span>
                </div>
                <Progress value={75} className="h-2" />
              </div>
            )}
          </CardContent>
        </Card>

        {/* Analysis Results */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Leaf className="h-5 w-5 text-green-600" />
              <span>Analysis Results</span>
            </CardTitle>
            <CardDescription>
              AI-powered insights about your plant's health and growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            {analysisResult ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">Plant Health</p>
                    <div className="flex items-center space-x-2">
                      <Progress value={analysisResult.plantHealth} className="flex-1" />
                      <span className="text-sm font-bold">{analysisResult.plantHealth}%</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600">Growth Stage</p>
                    <Badge variant="secondary">{analysisResult.growthStage}</Badge>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-600">Height Estimate</p>
                    <p className="text-lg font-bold">{analysisResult.heightEstimate} cm</p>
                  </div>
                  
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-gray-600">Leaf Count</p>
                    <p className="text-lg font-bold">{analysisResult.leafCount}</p>
                  </div>
                </div>
                
                {analysisResult.diseases.length > 0 && (
                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-600 flex items-center">
                      <AlertCircle className="h-4 w-4 mr-1 text-yellow-500" />
                      Detected Issues
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {analysisResult.diseases.map((disease: string, index: number) => (
                        <Badge key={index} variant="destructive" className="text-xs">
                          {disease}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-600">Recommendations</p>
                  <ul className="text-sm space-y-1">
                    {analysisResult.recommendations.map((rec: string, index: number) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <Brain className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>Upload and analyze an image to see results here</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ImageUpload;
