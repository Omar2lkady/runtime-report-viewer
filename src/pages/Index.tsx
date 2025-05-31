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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import { DisclosureReport } from "@/components/reports/DisclosureReport";
import { SensitivityAnalysisReport } from "@/components/reports/SensitivityAnalysisReport";
import { MaturityProfileReport } from "@/components/reports/MaturityProfileReport";
import { OtherComprehensiveReport } from "@/components/reports/OtherComprehensiveReport";

const Index = () => {
  const [showOutput, setShowOutput] = useState(false);
  const [activeTab, setActiveTab] = useState("current");
  const [activeMenuItem, setActiveMenuItem] = useState("Runtime");
  const [reportStatus, setReportStatus] = useState({
    current: "completed",
    last: "completed",
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
      time: "3-5 minutes",
      description: "Analyzing parameter sensitivity across different scenarios",
    },
    maturity: {
      time: "2-3 minutes",
      description: "Generating cash flow maturity profiles and projections",
    },
    comprehensive: {
      time: "4-6 minutes",
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

  const isFormValid =
    Object.values(formData)
      .slice(0, 3)
      .every((value) => value !== "") && formData.calculationBase !== "";

  if (showOutput) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-lg border-r border-slate-200 flex flex-col">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-bold text-slate-800">
              End of service benefits
            </h2>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.name}>
                    <button
                      onClick={() => setActiveMenuItem(item.name)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeMenuItem === item.name
                          ? "bg-emerald-100 text-emerald-800 font-medium"
                          : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 overflow-auto">
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

            {/* Report Tabs */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-6"
            >
              <TabsList className="grid w-full grid-cols-6 bg-white border">
                <TabsTrigger
                  value="current"
                  className="flex items-center gap-2"
                >
                  {getTabIcon("current", reportStatus.current)}
                  Current Details
                </TabsTrigger>
                <TabsTrigger value="last" className="flex items-center gap-2">
                  {getTabIcon("last", reportStatus.last)}
                  Last Details
                </TabsTrigger>
                <TabsTrigger
                  value="disclosure"
                  className="flex items-center gap-2"
                >
                  {getTabIcon("disclosure", reportStatus.disclosure)}
                  Disclosure
                </TabsTrigger>
                <TabsTrigger
                  value="sensitivity"
                  className="flex items-center gap-2"
                >
                  {getTabIcon("sensitivity", reportStatus.sensitivity)}
                  Sensitivity Analysis
                </TabsTrigger>
                <TabsTrigger
                  value="maturity"
                  className="flex items-center gap-2"
                >
                  {getTabIcon("maturity", reportStatus.maturity)}
                  Maturity Profile
                </TabsTrigger>
                <TabsTrigger
                  value="comprehensive"
                  className="flex items-center gap-2"
                >
                  {getTabIcon("comprehensive", reportStatus.comprehensive)}
                  Other Comprehensive
                </TabsTrigger>
              </TabsList>

              <TabsContent value="current">
                <Card className="bg-white shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">
                      Current Period Details
                    </CardTitle>
                    <CardDescription>
                      Employee data and calculations for the current period
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left p-2 font-medium text-slate-700">
                              Employee code
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Employee name
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Date of birth
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Date of joining
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Basic salary
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Transportation
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Housing
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Current Age
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Service Cost
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              PVDBO
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1001</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1961-10-19</td>
                            <td className="p-2">2021-11-14</td>
                            <td className="p-2">48150</td>
                            <td className="p-2">1000</td>
                            <td className="p-2">4000</td>
                            <td className="p-2">64</td>
                            <td className="p-2">27,139,358</td>
                            <td className="p-2">95,478,977</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1002</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1999-07-29</td>
                            <td className="p-2">2022-03-21</td>
                            <td className="p-2">5000</td>
                            <td className="p-2">500</td>
                            <td className="p-2">2000</td>
                            <td className="p-2">26</td>
                            <td className="p-2">5,039,388</td>
                            <td className="p-2">15,976,675</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1003</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1960-06-21</td>
                            <td className="p-2">2020-02-28</td>
                            <td className="p-2">29425</td>
                            <td className="p-2">500</td>
                            <td className="p-2">2000</td>
                            <td className="p-2">45</td>
                            <td className="p-2">27,821,641</td>
                            <td className="p-2">145,487,711</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1004</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1967-08-26</td>
                            <td className="p-2">2020-07-13</td>
                            <td className="p-2">10800</td>
                            <td className="p-2">700</td>
                            <td className="p-2">2000</td>
                            <td className="p-2">38</td>
                            <td className="p-2">12,154,362</td>
                            <td className="p-2">59,032,521</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1005</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1993-06-22</td>
                            <td className="p-2">2021-04-19</td>
                            <td className="p-2">8500</td>
                            <td className="p-2">500</td>
                            <td className="p-2">1000</td>
                            <td className="p-2">32</td>
                            <td className="p-2">8,942,461</td>
                            <td className="p-2">36,577,342</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1006</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1993-05-15</td>
                            <td className="p-2">2021-03-15</td>
                            <td className="p-2">6800</td>
                            <td className="p-2">500</td>
                            <td className="p-2">1200</td>
                            <td className="p-2">32</td>
                            <td className="p-2">7,621,242</td>
                            <td className="p-2">31,904,045</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1007</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1968-06-14</td>
                            <td className="p-2">2021-11-08</td>
                            <td className="p-2">5500</td>
                            <td className="p-2">500</td>
                            <td className="p-2">800</td>
                            <td className="p-2">37</td>
                            <td className="p-2">6,156,585</td>
                            <td className="p-2">21,761,065</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1008</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1976-01-03</td>
                            <td className="p-2">2021-11-08</td>
                            <td className="p-2">5500</td>
                            <td className="p-2">500</td>
                            <td className="p-2">800</td>
                            <td className="p-2">49</td>
                            <td className="p-2">5,597,772</td>
                            <td className="p-2">19,785,886</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1009</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1994-03-26</td>
                            <td className="p-2">2021-12-02</td>
                            <td className="p-2">5900</td>
                            <td className="p-2">500</td>
                            <td className="p-2">1000</td>
                            <td className="p-2">31</td>
                            <td className="p-2">5,990,057</td>
                            <td className="p-2">20,778,907</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1010</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1969-06-03</td>
                            <td className="p-2">2022-02-03</td>
                            <td className="p-2">5300</td>
                            <td className="p-2">0</td>
                            <td className="p-2">0</td>
                            <td className="p-2">36</td>
                            <td className="p-2">4,768,889</td>
                            <td className="p-2">15,720,166</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <p className="text-sm text-slate-600">
                        Showing 10 of 20,001 employees
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Previous
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="last">
                <Card className="bg-white shadow-lg border-0">
                  <CardHeader>
                    <CardTitle className="text-xl text-slate-800">
                      Last Period Details
                    </CardTitle>
                    <CardDescription>
                      Employee data and calculations for the previous period
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-200">
                            <th className="text-left p-2 font-medium text-slate-700">
                              Employee code
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Employee name
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Date of birth
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Date of joining
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Basic salary
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Transportation
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Housing
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Current Age
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              Service Cost
                            </th>
                            <th className="text-left p-2 font-medium text-slate-700">
                              PVDBO
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1001</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1961-10-19</td>
                            <td className="p-2">2021-11-14</td>
                            <td className="p-2">45800</td>
                            <td className="p-2">950</td>
                            <td className="p-2">3800</td>
                            <td className="p-2">63</td>
                            <td className="p-2">24,892,134</td>
                            <td className="p-2">89,234,567</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1002</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1999-07-29</td>
                            <td className="p-2">2022-03-21</td>
                            <td className="p-2">4750</td>
                            <td className="p-2">475</td>
                            <td className="p-2">1900</td>
                            <td className="p-2">25</td>
                            <td className="p-2">4,789,123</td>
                            <td className="p-2">14,567,890</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1003</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1960-06-21</td>
                            <td className="p-2">2020-02-28</td>
                            <td className="p-2">28200</td>
                            <td className="p-2">475</td>
                            <td className="p-2">1900</td>
                            <td className="p-2">44</td>
                            <td className="p-2">25,634,789</td>
                            <td className="p-2">132,456,789</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1004</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1967-08-26</td>
                            <td className="p-2">2020-07-13</td>
                            <td className="p-2">10300</td>
                            <td className="p-2">665</td>
                            <td className="p-2">1900</td>
                            <td className="p-2">37</td>
                            <td className="p-2">11,234,567</td>
                            <td className="p-2">54,321,987</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1005</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1993-06-22</td>
                            <td className="p-2">2021-04-19</td>
                            <td className="p-2">8100</td>
                            <td className="p-2">475</td>
                            <td className="p-2">950</td>
                            <td className="p-2">31</td>
                            <td className="p-2">8,234,567</td>
                            <td className="p-2">33,456,789</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1006</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1993-05-15</td>
                            <td className="p-2">2021-03-15</td>
                            <td className="p-2">6500</td>
                            <td className="p-2">475</td>
                            <td className="p-2">1140</td>
                            <td className="p-2">31</td>
                            <td className="p-2">7,123,456</td>
                            <td className="p-2">28,234,567</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1007</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1968-06-14</td>
                            <td className="p-2">2021-11-08</td>
                            <td className="p-2">5250</td>
                            <td className="p-2">475</td>
                            <td className="p-2">760</td>
                            <td className="p-2">36</td>
                            <td className="p-2">5,789,123</td>
                            <td className="p-2">19,876,543</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1008</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1976-01-03</td>
                            <td className="p-2">2021-11-08</td>
                            <td className="p-2">5250</td>
                            <td className="p-2">475</td>
                            <td className="p-2">760</td>
                            <td className="p-2">48</td>
                            <td className="p-2">5,234,567</td>
                            <td className="p-2">17,654,321</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1009</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1994-03-26</td>
                            <td className="p-2">2021-12-02</td>
                            <td className="p-2">5600</td>
                            <td className="p-2">475</td>
                            <td className="p-2">950</td>
                            <td className="p-2">30</td>
                            <td className="p-2">5,567,890</td>
                            <td className="p-2">18,234,567</td>
                          </tr>
                          <tr className="border-b border-slate-100 hover:bg-slate-50">
                            <td className="p-2">1010</td>
                            <td className="p-2">
                              <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs">
                                Null
                              </span>
                            </td>
                            <td className="p-2">1969-06-03</td>
                            <td className="p-2">2022-02-03</td>
                            <td className="p-2">5000</td>
                            <td className="p-2">0</td>
                            <td className="p-2">0</td>
                            <td className="p-2">35</td>
                            <td className="p-2">4,345,678</td>
                            <td className="p-2">13,567,890</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                      <p className="text-sm text-slate-600">
                        Showing 10 of 20,501 employees
                      </p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          Previous
                        </Button>
                        <Button variant="outline" size="sm">
                          Next
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="disclosure">
                <DisclosureReport />
              </TabsContent>

              <TabsContent value="sensitivity">
                {reportStatus.sensitivity === "completed" ? (
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
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-sm text-blue-800">
                                Estimated time:{" "}
                                {reportTimeEstimates.sensitivity.time}
                              </p>
                            </div>
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
                            <div className="bg-amber-50 p-4 rounded-lg mb-6">
                              <p className="text-sm text-amber-800">
                                Estimated time:{" "}
                                {reportTimeEstimates.sensitivity.time}
                              </p>
                            </div>
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
                )}
              </TabsContent>

              <TabsContent value="maturity">
                {reportStatus.maturity === "completed" ? (
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
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-sm text-blue-800">
                                Estimated time:{" "}
                                {reportTimeEstimates.maturity.time}
                              </p>
                            </div>
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
                            <div className="bg-amber-50 p-4 rounded-lg mb-6">
                              <p className="text-sm text-amber-800">
                                Estimated time:{" "}
                                {reportTimeEstimates.maturity.time}
                              </p>
                            </div>
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
                )}
              </TabsContent>

              <TabsContent value="comprehensive">
                {reportStatus.comprehensive === "completed" ? (
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
                            <div className="bg-blue-50 p-4 rounded-lg">
                              <p className="text-sm text-blue-800">
                                Estimated time:{" "}
                                {reportTimeEstimates.comprehensive.time}
                              </p>
                            </div>
                          </>
                        ) : (
                          <>
                            <PieChart className="h-16 w-16 mx-auto text-amber-500 mb-6" />
                            <h3 className="text-xl font-semibold text-slate-800 mb-4">
                              Other Comprehensive Report
                            </h3>
                            <p className="text-slate-600 mb-6">
                              {reportTimeEstimates.comprehensive.description}
                            </p>
                            <div className="bg-amber-50 p-4 rounded-lg mb-6">
                              <p className="text-sm text-amber-800">
                                Estimated time:{" "}
                                {reportTimeEstimates.comprehensive.time}
                              </p>
                            </div>
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
                )}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg border-r border-slate-200 flex flex-col">
        <div className="p-6 border-b border-slate-200">
          <h2 className="text-xl font-bold text-slate-800">
            End of service benefits
          </h2>
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <button
                    onClick={() => setActiveMenuItem(item.name)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeMenuItem === item.name
                        ? "bg-emerald-100 text-emerald-800 font-medium"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-800"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                    {item.name}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="container mx-auto px-6 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-between items-center mb-8">
              <h1 className="text-4xl font-bold text-slate-800">
                Create Runtime
              </h1>
              <div className="flex gap-3">
                <Button
                  variant="outline"
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
                            <SelectItem value="both">Both</SelectItem>
                            <SelectItem value="single">Single</SelectItem>
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
                      <span className="text-sm font-normal text-slate-500 ml-2">
                        (Optional)
                      </span>
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
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
                    </div>
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
    </div>
  );
};

export default Index;
