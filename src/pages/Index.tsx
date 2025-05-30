import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlayCircle, FileText, BarChart3, PieChart, TrendingUp, Eye } from "lucide-react";
import { DisclosureReport } from "@/components/reports/DisclosureReport";
import { SensitivityAnalysisReport } from "@/components/reports/SensitivityAnalysisReport";
import { MaturityProfileReport } from "@/components/reports/MaturityProfileReport";
import { OtherComprehensiveReport } from "@/components/reports/OtherComprehensiveReport";

const Index = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [selectedReport, setSelectedReport] = useState<string>("");
  const [activeTab, setActiveTab] = useState("disclosure");
  const [formData, setFormData] = useState({
    config: "",
    dataset: "",
    perform: "",
    assumptionSet: "",
    lastAssumptionSet: "",
    calculationBase: ""
  });

  const reportTypes = [
    { value: "disclosure", label: "Disclosure", icon: FileText, description: "IAS 19 Disclosure Report" },
    { value: "sensitivity", label: "Sensitivity Analysis", icon: BarChart3, description: "Parameter sensitivity analysis" },
    { value: "maturity", label: "Maturity Profile", icon: TrendingUp, description: "Cash flow maturity analysis" },
    { value: "comprehensive", label: "Other Comprehensive Breakup", icon: PieChart, description: "Detailed comprehensive income breakdown" }
  ];

  const handleCreateRuntime = () => {
    if (selectedReport && Object.values(formData).every(value => value !== "")) {
      setShowOutput(true);
    }
  };

  const handleBackToListing = () => {
    setShowOutput(false);
    setSelectedReport("");
  };

  const isFormComplete = selectedReport && Object.values(formData).every(value => value !== "");

  if (showOutput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-slate-800">Runtime Output</h1>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                onClick={handleBackToListing}
                className="bg-white hover:bg-slate-50"
              >
                Back to listing
              </Button>
              <Button 
                variant="outline"
                className="bg-white hover:bg-slate-50"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Old Output
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Export
              </Button>
            </div>
          </div>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4 bg-white border">
              <TabsTrigger value="disclosure" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Disclosure
              </TabsTrigger>
              <TabsTrigger value="sensitivity" className="flex items-center gap-2">
                <BarChart3 className="h-4 w-4" />
                Sensitivity Analysis
              </TabsTrigger>
              <TabsTrigger value="maturity" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                Maturity Profile
              </TabsTrigger>
              <TabsTrigger value="comprehensive" className="flex items-center gap-2">
                <PieChart className="h-4 w-4" />
                Other Comprehensive
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="disclosure">
              <DisclosureReport />
            </TabsContent>
            
            <TabsContent value="sensitivity">
              <SensitivityAnalysisReport />
            </TabsContent>
            
            <TabsContent value="maturity">
              <MaturityProfileReport />
            </TabsContent>
            
            <TabsContent value="comprehensive">
              <OtherComprehensiveReport />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800">Create Runtime</h1>
            <div className="flex gap-3">
              <Button variant="outline" className="bg-white hover:bg-slate-50">
                Back to listing
              </Button>
              <Button 
                variant="outline" 
                className="bg-white hover:bg-slate-50"
                disabled
              >
                Create and add another
              </Button>
              <Button 
                className="bg-emerald-600 hover:bg-emerald-700 text-white disabled:bg-slate-300"
                onClick={handleCreateRuntime}
                disabled={!isFormComplete}
              >
                <PlayCircle className="h-4 w-4 mr-2" />
                Create
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Runtime Configuration */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Runtime Configuration</CardTitle>
                <CardDescription>Configure the parameters for your runtime</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="config" className="text-sm font-medium text-slate-700">
                    Config <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.config} onValueChange={(value) => setFormData({...formData, config: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select config" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="config1">Config 1</SelectItem>
                      <SelectItem value="config2">Config 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dataset" className="text-sm font-medium text-slate-700">
                    Dataset <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.dataset} onValueChange={(value) => setFormData({...formData, dataset: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select dataset" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="test20k">test20k both with rollforward 1-1-205</SelectItem>
                      <SelectItem value="test10k">test10k dataset</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="perform" className="text-sm font-medium text-slate-700">
                    Perform <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.perform} onValueChange={(value) => setFormData({...formData, perform: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select perform" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="both">Both</SelectItem>
                      <SelectItem value="single">Single</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assumptionSet" className="text-sm font-medium text-slate-700">
                    Assumption Set
                  </Label>
                  <Select value={formData.assumptionSet} onValueChange={(value) => setFormData({...formData, assumptionSet: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select assumption set" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="current">current assumption_SHMA demo (Copy)</SelectItem>
                      <SelectItem value="previous">previous assumption set</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastAssumptionSet" className="text-sm font-medium text-slate-700">
                    Last Assumption Set
                  </Label>
                  <Select value={formData.lastAssumptionSet} onValueChange={(value) => setFormData({...formData, lastAssumptionSet: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select last assumption set" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="current">current assumption_SHMA demo (Copy)</SelectItem>
                      <SelectItem value="previous">previous assumption set</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="calculationBase" className="text-sm font-medium text-slate-700">
                    Calculation Base <span className="text-red-500">*</span>
                  </Label>
                  <Select value={formData.calculationBase} onValueChange={(value) => setFormData({...formData, calculationBase: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select calculation base" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="age">Age</SelectItem>
                      <SelectItem value="service">Service</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Report Selection */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">Select Report Type</CardTitle>
                <CardDescription>Choose the report you want to generate</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {reportTypes.map((report) => {
                  const Icon = report.icon;
                  return (
                    <div 
                      key={report.value}
                      className={`p-4 rounded-lg border-2 cursor-pointer transition-all hover:shadow-md ${
                        selectedReport === report.value 
                          ? 'border-emerald-500 bg-emerald-50' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                      onClick={() => setSelectedReport(report.value)}
                    >
                      <div className="flex items-start space-x-3">
                        <Icon className={`h-6 w-6 mt-1 ${
                          selectedReport === report.value ? 'text-emerald-600' : 'text-slate-400'
                        }`} />
                        <div className="flex-1">
                          <h3 className={`font-semibold ${
                            selectedReport === report.value ? 'text-emerald-800' : 'text-slate-800'
                          }`}>
                            {report.label}
                          </h3>
                          <p className="text-sm text-slate-600 mt-1">
                            {report.description}
                          </p>
                        </div>
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          selectedReport === report.value 
                            ? 'border-emerald-500 bg-emerald-500' 
                            : 'border-slate-300'
                        }`}>
                          {selectedReport === report.value && (
                            <div className="w-full h-full rounded-full bg-white transform scale-50"></div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
