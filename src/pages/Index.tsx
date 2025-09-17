import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  PlayCircle,
  FileText,
  BarChart3,
  PieChart,
  TrendingUp,
  Eye,
  Clock,
  CheckCircle,
  Loader2,
  Home,
  Users,
  Building2,
  Settings,
  Package,
  Database,
  Calculator,
  FileSpreadsheet,
  Timer,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DisclosureReport } from "@/components/reports/DisclosureReport";
import { SensitivityAnalysisReport } from "@/components/reports/SensitivityAnalysisReport";
import { MaturityProfileReport } from "@/components/reports/MaturityProfileReport";
import { OtherComprehensiveReport } from "@/components/reports/OtherComprehensiveReport";

const Index = () => {
  const navigate = useNavigate();
  const [showOutput, setShowOutput] = useState(false);
  const [activeTab, setActiveTab] = useState("disclosure");
  const [activeMenuItem, setActiveMenuItem] = useState("Runtime");
  const [reportStatus, setReportStatus] = useState({
    disclosure: "completed",
    sensitivity: "pending",
    maturity: "pending",
    comprehensive: "pending",
  });
  const [loadingReports, setLoadingReports] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    config: "config1",
    dataset: "test20k",
    perform: "both",
    assumptionSet: "current",
    lastAssumptionSet: "current",
    calculationBase: "age",
    // Disclosure Report Title field
    disclosureReportTitle: "Cement Product",
    // New fields for disclosure report
    currentFairValuePlanAssets: "",
    currentEmployeesTransferredFrom: "",
    currentSecondEmployeesTransferredFrom: "",
    currentEosbPaidPayable: "",
    currentPastServiceCost: "",
    currentCurtailmentSettlementGain: "",
  });

  const menuItems = [
    { name: "Dashboard", icon: Home },
    { name: "Users", icon: Users },
    { name: "Companies", icon: Building2 },
    { name: "Config", icon: Settings },
    { name: "Products", icon: Package },
    { name: "Manage datasets", icon: Database },
    { name: "Master assumption", icon: Calculator },
    { name: "Assumption set", icon: FileSpreadsheet },
    { name: "Runtime", icon: Timer },
  ];

  const reportTimeEstimates = {
    sensitivity: {
      description: "Analyzing parameter sensitivity across different scenarios",
    },
    maturity: {
      description: "Generating cash flow maturity profiles and projections",
    },
    comprehensive: {
      description: "Computing detailed comprehensive income breakdown analysis",
    },
  };

  const handleStartReport = (reportType: string) => {
    setLoadingReports([...loadingReports, reportType]);
    setReportStatus({ ...reportStatus, [reportType]: "loading" });

    // Simulate report generation
    setTimeout(() => {
      setReportStatus((prev) => ({ ...prev, [reportType]: "completed" }));
      setLoadingReports((prev) => prev.filter((r) => r !== reportType));
    }, 5000); // 5 second simulation
  };

  const getTabIcon = (tabValue: string, status: string) => {
    if (status === "completed")
      return <CheckCircle className="h-4 w-4 text-emerald-600" />;
    if (status === "loading")
      return <Loader2 className="h-4 w-4 animate-spin text-blue-600" />;
    return <Clock className="h-4 w-4 text-amber-600" />;
  };

  const handleCreateDisclosureReport = () => {
    if (
      Object.values(formData)
        .slice(0, 3)
        .every((value) => value !== "") &&
      formData.calculationBase !== ""
    ) {
      setShowOutput(true);
      setActiveTab("disclosure");
    }
  };

  const handleCreateAdditionalDisclosure = () => {
    if (
      Object.values(formData)
        .slice(0, 3)
        .every((value) => value !== "") &&
      formData.calculationBase !== ""
    ) {
      setShowOutput(true);
      setActiveTab("sensitivity");
    }
  };

  const handleBackToListing = () => {
    setShowOutput(false);
  };

  const handleViewDataDetails = () => {
    navigate("/data-details");
  };

  const isFormValid =
    Object.values(formData)
      .slice(0, 3)
      .every((value) => value !== "") && formData.calculationBase !== "";

  const showCurrentSections = formData.perform === "current" || formData.perform === "both";
  const showLastSections = formData.perform === "last" || formData.perform === "both";

  if (showOutput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 py-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-slate-800">
              Runtime Output
            </h1>
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={handleBackToListing}
                className="bg-white hover:bg-slate-50"
              >
                Back to listing
              </Button>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                Export
              </Button>
            </div>
          </div>

          {/* Summary Cards */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-slate-800">
                Runtime Summary
              </h2>
              <Button
                onClick={handleViewDataDetails}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Data Details
              </Button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* PVDBO_T Comparison */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-800">
                    Present Value of DBO
                  </CardTitle>
                  <CardDescription>
                    Total present value of defined benefit obligation
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-cyan-50 to-cyan-100 rounded-lg">
                    <div>
                      <div className="text-sm text-cyan-700 font-medium">
                        Current
                      </div>
                      <div className="text-xl font-bold text-cyan-800">
                        875,395,402.84
                      </div>
                    </div>
                    <div className="text-cyan-600">
                      <TrendingUp className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="text-sm text-slate-600 font-medium">
                        Last
                      </div>
                      <div className="text-xl font-bold text-slate-700">
                        675,385,402.84
                      </div>
                    </div>
                    <div className="text-emerald-600 text-sm font-semibold">
                      +29.6%
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Cost Comparison */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-800">
                    Service Cost
                  </CardTitle>
                  <CardDescription>
                    Current and past service cost totals
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg">
                    <div>
                      <div className="text-sm text-emerald-700 font-medium">
                        Current
                      </div>
                      <div className="text-xl font-bold text-emerald-800">
                        207,894,356.63
                      </div>
                    </div>
                    <div className="text-emerald-600">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="text-sm text-slate-600 font-medium">
                        Last
                      </div>
                      <div className="text-xl font-bold text-slate-700">
                        247,894,356.63
                      </div>
                    </div>
                    <div className="text-red-600 text-sm font-semibold">
                      -16.1%
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Employee Count Comparison */}
              <Card className="bg-white shadow-lg border-0">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-slate-800">
                    Total Employees
                  </CardTitle>
                  <CardDescription>
                    Active employee count in the plan
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg">
                    <div>
                      <div className="text-sm text-amber-700 font-medium">
                        Current
                      </div>
                      <div className="text-xl font-bold text-amber-800">
                        20,001
                      </div>
                    </div>
                    <div className="text-amber-600">
                      <PieChart className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <div>
                      <div className="text-sm text-slate-600 font-medium">
                        Last
                      </div>
                      <div className="text-xl font-bold text-slate-700">
                        20,501
                      </div>
                    </div>
                    <div className="text-red-600 text-sm font-semibold">
                      -2.4%
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Reports Section with Side Navigation */}
          <div className="flex gap-6">
            {/* Reports Side Navigation */}
            <div className="w-80 flex-shrink-0">
              <Card className="bg-white shadow-lg border-0 sticky top-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-slate-800">Reports</CardTitle>
                  <CardDescription>Navigate between different report sections</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <nav className="space-y-1">
                    {[
                      { key: "disclosure", label: "Disclosure", sublabel: "IAS 19", icon: FileText },
                      { key: "comprehensive", label: "Other Comprehensive Income", sublabel: "OCI", icon: PieChart },
                      { key: "maturity", label: "Maturity", sublabel: "Profile", icon: TrendingUp },
                      { key: "sensitivity", label: "Sensitivity Analysis", sublabel: "Parameters", icon: BarChart3 }
                    ].map((item) => (
                      <button
                        key={item.key}
                        onClick={() => setActiveTab(item.key)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-slate-50 transition-colors ${
                          activeTab === item.key 
                            ? "bg-emerald-50 text-emerald-700 border-r-2 border-emerald-600" 
                            : "text-slate-600"
                        }`}
                      >
                        <div className="flex items-center gap-3 flex-1">
                          {getTabIcon(item.key, reportStatus[item.key as keyof typeof reportStatus])}
                          <item.icon className="h-4 w-4 flex-shrink-0" />
                          <div className="min-w-0 flex-1">
                            <div className="text-sm font-medium truncate">{item.label}</div>
                            <div className="text-xs text-slate-500">{item.sublabel}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </nav>
                </CardContent>
              </Card>
            </div>

            {/* Report Content */}
            <div className="flex-1 min-w-0">
              {activeTab === "disclosure" && <DisclosureReport />}
              
              {activeTab === "comprehensive" && (
                reportStatus.comprehensive === "completed" ? (
                  <OtherComprehensiveReport />
                ) : (
                  <Card className="bg-white shadow-lg border-0">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        {reportStatus.comprehensive === "loading" ? (
                          <>
                            <Loader2 className="h-16 w-16 mx-auto text-blue-600 animate-spin mb-6" />
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                              Generating Other Comprehensive Report
                            </h3>
                            <p className="text-slate-600 mb-6">
                              {reportTimeEstimates.comprehensive.description}
                            </p>
                          </>
                        ) : (
                          <>
                            <PieChart className="h-16 w-16 mx-auto text-amber-500 mb-6" />
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                              Other Comprehensive Income (OCI) Report
                            </h3>
                            <p className="text-slate-600 mb-6">
                              {reportTimeEstimates.comprehensive.description}
                            </p>
                            <Button
                              onClick={() => handleStartReport("comprehensive")}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white"
                            >
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Start Report Generation
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              )}

              {activeTab === "maturity" && (
                reportStatus.maturity === "completed" ? (
                  <MaturityProfileReport />
                ) : (
                  <Card className="bg-white shadow-lg border-0">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        {reportStatus.maturity === "loading" ? (
                          <>
                            <Loader2 className="h-16 w-16 mx-auto text-blue-600 animate-spin mb-6" />
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                              Generating Maturity Profile Report
                            </h3>
                            <p className="text-slate-600 mb-6">
                              {reportTimeEstimates.maturity.description}
                            </p>
                          </>
                        ) : (
                          <>
                            <TrendingUp className="h-16 w-16 mx-auto text-amber-500 mb-6" />
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                              Maturity Profile Report
                            </h3>
                            <p className="text-slate-600 mb-6">
                              {reportTimeEstimates.maturity.description}
                            </p>
                            <Button
                              onClick={() => handleStartReport("maturity")}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white"
                            >
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Start Report Generation
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              )}

              {activeTab === "sensitivity" && (
                reportStatus.sensitivity === "completed" ? (
                  <SensitivityAnalysisReport />
                ) : (
                  <Card className="bg-white shadow-lg border-0">
                    <CardContent className="p-12 text-center">
                      <div className="max-w-md mx-auto">
                        {reportStatus.sensitivity === "loading" ? (
                          <>
                            <Loader2 className="h-16 w-16 mx-auto text-blue-600 animate-spin mb-6" />
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                              Generating Sensitivity Analysis Report
                            </h3>
                            <p className="text-slate-600 mb-6">
                              {reportTimeEstimates.sensitivity.description}
                            </p>
                          </>
                        ) : (
                          <>
                            <BarChart3 className="h-16 w-16 mx-auto text-amber-500 mb-6" />
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                              Sensitivity Analysis Report
                            </h3>
                            <p className="text-slate-600 mb-6">
                              {reportTimeEstimates.sensitivity.description}
                            </p>
                            <Button
                              onClick={() => handleStartReport("sensitivity")}
                              className="bg-emerald-600 hover:bg-emerald-700 text-white"
                            >
                              <PlayCircle className="h-4 w-4 mr-2" />
                              Start Report Generation
                            </Button>
                          </>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-slate-800">
              Create Runtime
            </h1>
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
                disabled
              >
                Create and add another
              </Button>
            </div>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Runtime Configuration */}
            <Card className="bg-white shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl text-slate-800">
                  Runtime Configuration
                </CardTitle>
                <CardDescription>
                  Configure the parameters for your runtime
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                {/* Data Configuration Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                    Data Configuration
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="config"
                        className="text-sm font-medium text-slate-700"
                      >
                        Config <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.config}
                        onValueChange={(value) =>
                          setFormData({ ...formData, config: value })
                        }
                      >
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
                      <Label
                        htmlFor="dataset"
                        className="text-sm font-medium text-slate-700"
                      >
                        Dataset <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.dataset}
                        onValueChange={(value) =>
                          setFormData({ ...formData, dataset: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select dataset" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="test20k">
                            test20k both with rollforward 1-1-205
                          </SelectItem>
                          <SelectItem value="test10k">
                            test10k dataset
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Calculation Settings Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                    Calculation Settings
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="perform"
                        className="text-sm font-medium text-slate-700"
                      >
                        Perform <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.perform}
                        onValueChange={(value) =>
                          setFormData({ ...formData, perform: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select perform" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="current">Current</SelectItem>
                          <SelectItem value="last">Last</SelectItem>
                          <SelectItem value="both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="calculationBase"
                        className="text-sm font-medium text-slate-700"
                      >
                        Calculation Base{" "}
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        value={formData.calculationBase}
                        onValueChange={(value) =>
                          setFormData({ ...formData, calculationBase: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select calculation base" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="age">Age</SelectItem>
                          <SelectItem value="service">Service</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Assumption Sets Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                    Assumption Sets
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {showCurrentSections && (
                      <div className="space-y-2">
                        <Label
                          htmlFor="assumptionSet"
                          className="text-sm font-medium text-slate-700"
                        >
                          Current Assumption Set
                        </Label>
                        <Select
                          value={formData.assumptionSet}
                          onValueChange={(value) =>
                            setFormData({ ...formData, assumptionSet: value })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select assumption set" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="current">
                              current assumption_SHMA demo (Copy)
                            </SelectItem>
                            <SelectItem value="previous">
                              previous assumption set
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}

                    {showLastSections && (
                      <div className="space-y-2">
                        <Label
                          htmlFor="lastAssumptionSet"
                          className="text-sm font-medium text-slate-700"
                        >
                          Last Assumption Set
                        </Label>
                        <Select
                          value={formData.lastAssumptionSet}
                          onValueChange={(value) =>
                            setFormData({
                              ...formData,
                              lastAssumptionSet: value,
                            })
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select last assumption set" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="current">
                              current assumption_SHMA demo (Copy)
                            </SelectItem>
                            <SelectItem value="previous">
                              previous assumption set
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>
                </div>

                {/* Disclosure Report Title Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="disclosureReportTitle"
                    className="text-sm font-medium text-slate-700"
                  >
                    Disclosure Report Title
                  </Label>
                  <Input
                    id="disclosureReportTitle"
                    type="text"
                    placeholder="e.g., Cement Product"
                    value={formData.disclosureReportTitle}
                    onChange={(e) =>
                      setFormData({ 
                        ...formData, 
                        disclosureReportTitle: e.target.value 
                      })
                    }
                    className="bg-white border-slate-300"
                  />
                </div>

                {/* Required Fields for Disclosure Report Section */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-slate-800 border-b border-slate-200 pb-2">
                    Required Fields for Disclosure Report (Current)
                    <span className="text-sm font-normal text-slate-500 ml-2">
                      (Optional)
                    </span>
                  </h3>
                  
                  {/* Current Section */}
                  {showCurrentSections && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label
                            htmlFor="currentFairValuePlanAssets"
                            className="text-sm font-medium text-slate-700"
                          >
                            Fair Value of Any Plan Assets
                          </Label>
                          <Input
                            id="currentFairValuePlanAssets"
                            type="number"
                            placeholder="Enter fair value"
                            value={formData.currentFairValuePlanAssets}
                            onChange={(e) =>
                              setFormData({ 
                                ...formData, 
                                currentFairValuePlanAssets: e.target.value 
                              })
                            }
                            className="bg-white border-slate-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="currentEmployeesTransferredFrom"
                            className="text-sm font-medium text-slate-700"
                          >
                            First Employees Transferred From
                          </Label>
                          <Input
                            id="currentEmployeesTransferredFrom"
                            type="number"
                            placeholder="Enter number of employees"
                            value={formData.currentEmployeesTransferredFrom}
                            onChange={(e) =>
                              setFormData({ 
                                ...formData, 
                                currentEmployeesTransferredFrom: e.target.value 
                              })
                            }
                            className="bg-white border-slate-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="currentSecondEmployeesTransferredFrom"
                            className="text-sm font-medium text-slate-700"
                          >
                            Second Employees Transferred From
                          </Label>
                          <Input
                            id="currentSecondEmployeesTransferredFrom"
                            type="number"
                            placeholder="Enter number of employees"
                            value={formData.currentSecondEmployeesTransferredFrom || ""}
                            onChange={(e) =>
                              setFormData({ 
                                ...formData, 
                                currentSecondEmployeesTransferredFrom: e.target.value 
                              })
                            }
                            className="bg-white border-slate-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="currentEosbPaidPayable"
                            className="text-sm font-medium text-slate-700"
                          >
                            EOSB Paid/Payable for Leavers
                          </Label>
                          <Input
                            id="currentEosbPaidPayable"
                            type="number"
                            placeholder="Enter EOSB amount"
                            value={formData.currentEosbPaidPayable}
                            onChange={(e) =>
                              setFormData({ 
                                ...formData, 
                                currentEosbPaidPayable: e.target.value 
                              })
                            }
                            className="bg-white border-slate-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="currentPastServiceCost"
                            className="text-sm font-medium text-slate-700"
                          >
                            Past Service Cost
                          </Label>
                          <Input
                            id="currentPastServiceCost"
                            type="number"
                            placeholder="Enter past service cost"
                            value={formData.currentPastServiceCost}
                            onChange={(e) =>
                              setFormData({ 
                                ...formData, 
                                currentPastServiceCost: e.target.value 
                              })
                            }
                            className="bg-white border-slate-300"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label
                            htmlFor="currentCurtailmentSettlementGain"
                            className="text-sm font-medium text-slate-700"
                          >
                            Curtailment / Settlement Gain / Loss
                          </Label>
                          <Input
                            id="currentCurtailmentSettlementGain"
                            type="number"
                            placeholder="Enter curtailment/settlement amount"
                            value={formData.currentCurtailmentSettlementGain}
                            onChange={(e) =>
                              setFormData({ 
                                ...formData, 
                                currentCurtailmentSettlementGain: e.target.value 
                              })
                            }
                            className="bg-white border-slate-300"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Buttons Section */}
                <div className="pt-6 border-t border-slate-200">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Generate Reports
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button
                        className="bg-emerald-600 hover:bg-emerald-700 text-white disabled:bg-slate-300 w-full h-12"
                        onClick={handleCreateDisclosureReport}
                        disabled={!isFormValid}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Create Disclosure Report
                      </Button>
                      <Button
                        className="bg-blue-600 hover:bg-blue-700 text-white disabled:bg-slate-300 w-full h-12"
                        onClick={handleCreateAdditionalDisclosure}
                        disabled={!isFormValid}
                      >
                        <BarChart3 className="h-4 w-4 mr-2" />
                        Create Additional Disclosure
                      </Button>
                    </div>
                    {!isFormValid && (
                      <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded-lg">
                        Please fill in all required fields (marked with *) to
                        enable report generation.
                      </p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
