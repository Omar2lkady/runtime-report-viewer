import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import { SensitivityAnalysisReport } from "@/components/reports/SensitivityAnalysisReport";

const Index = () => {
  const navigate = useNavigate();
  
  const [showReport, setShowReport] = useState(false);

  const toggleReport = () => {
    setShowReport(!showReport);
  };

  const [formData, setFormData] = useState({
    title: "",
    company: "",
    valuationDate: "",
    discountRate: "",
    salaryIncreaseRate: "",
    mortalityTable: "",
    withdrawalRate: "",
    retirementAge: "",
    numberOfEmployees: "",
    averageSalary: "",
    planType: "",
    vestingPeriod: "",
    contributionRate: "",
    economicAssumptions: "",
    additionalParameters: "",
    calculationSettings: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Data:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-gray-900">Runtime Creation</h1>
          <p className="text-gray-600">Configure your actuarial valuation parameters</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => handleInputChange("title", e.target.value)}
                    placeholder="Enter title"
                  />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Select value={formData.company} onValueChange={(value) => handleInputChange("company", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select company" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Company A">Company A</SelectItem>
                      <SelectItem value="Company B">Company B</SelectItem>
                      <SelectItem value="Company C">Company C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="valuation-date">Valuation Date</Label>
                  <Input
                    type="date"
                    id="valuation-date"
                    value={formData.valuationDate}
                    onChange={(e) => handleInputChange("valuationDate", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Financial Assumptions */}
            <Card>
              <CardHeader>
                <CardTitle>Financial Assumptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="discount-rate">Discount Rate</Label>
                  <Input
                    id="discount-rate"
                    value={formData.discountRate}
                    onChange={(e) => handleInputChange("discountRate", e.target.value)}
                    placeholder="Enter discount rate"
                  />
                </div>
                <div>
                  <Label htmlFor="salary-increase-rate">Salary Increase Rate</Label>
                  <Input
                    id="salary-increase-rate"
                    value={formData.salaryIncreaseRate}
                    onChange={(e) => handleInputChange("salaryIncreaseRate", e.target.value)}
                    placeholder="Enter salary increase rate"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Demographic Assumptions */}
            <Card>
              <CardHeader>
                <CardTitle>Demographic Assumptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="mortality-table">Mortality Table</Label>
                  <Input
                    id="mortality-table"
                    value={formData.mortalityTable}
                    onChange={(e) => handleInputChange("mortalityTable", e.target.value)}
                    placeholder="Enter mortality table"
                  />
                </div>
                <div>
                  <Label htmlFor="withdrawal-rate">Withdrawal Rate</Label>
                  <Input
                    id="withdrawal-rate"
                    value={formData.withdrawalRate}
                    onChange={(e) => handleInputChange("withdrawalRate", e.target.value)}
                    placeholder="Enter withdrawal rate"
                  />
                </div>
                <div>
                  <Label htmlFor="retirement-age">Retirement Age</Label>
                  <Input
                    id="retirement-age"
                    value={formData.retirementAge}
                    onChange={(e) => handleInputChange("retirementAge", e.target.value)}
                    placeholder="Enter retirement age"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Plan Information */}
            <Card>
              <CardHeader>
                <CardTitle>Plan Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="number-of-employees">Number of Employees</Label>
                  <Input
                    id="number-of-employees"
                    value={formData.numberOfEmployees}
                    onChange={(e) => handleInputChange("numberOfEmployees", e.target.value)}
                    placeholder="Enter number of employees"
                  />
                </div>
                <div>
                  <Label htmlFor="average-salary">Average Salary</Label>
                  <Input
                    id="average-salary"
                    value={formData.averageSalary}
                    onChange={(e) => handleInputChange("averageSalary", e.target.value)}
                    placeholder="Enter average salary"
                  />
                </div>
                <div>
                  <Label htmlFor="plan-type">Plan Type</Label>
                  <Select value={formData.planType} onValueChange={(value) => handleInputChange("planType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select plan type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Defined Benefit">Defined Benefit</SelectItem>
                      <SelectItem value="Defined Contribution">Defined Contribution</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vesting-period">Vesting Period</Label>
                  <Input
                    id="vesting-period"
                    value={formData.vestingPeriod}
                    onChange={(e) => handleInputChange("vestingPeriod", e.target.value)}
                    placeholder="Enter vesting period"
                  />
                </div>
                <div>
                  <Label htmlFor="contribution-rate">Contribution Rate</Label>
                  <Input
                    id="contribution-rate"
                    value={formData.contributionRate}
                    onChange={(e) => handleInputChange("contributionRate", e.target.value)}
                    placeholder="Enter contribution rate"
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Economic Assumptions */}
            <Card>
              <CardHeader>
                <CardTitle>Economic Assumptions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="economic-assumptions">Assumptions</Label>
                  <Textarea
                    id="economic-assumptions"
                    value={formData.economicAssumptions}
                    onChange={(e) => handleInputChange("economicAssumptions", e.target.value)}
                    placeholder="Enter economic assumptions"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Additional Parameters */}
            <Card>
              <CardHeader>
                <CardTitle>Additional Parameters</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="additional-parameters">Parameters</Label>
                  <Textarea
                    id="additional-parameters"
                    value={formData.additionalParameters}
                    onChange={(e) => handleInputChange("additionalParameters", e.target.value)}
                    placeholder="Enter additional parameters"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Calculation Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Calculation Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="calculation-settings">Settings</Label>
                  <Textarea
                    id="calculation-settings"
                    value={formData.calculationSettings}
                    onChange={(e) => handleInputChange("calculationSettings", e.target.value)}
                    placeholder="Enter calculation settings"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Control Panel */}
            <Card>
              <CardHeader>
                <CardTitle>Control Panel</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-blue-500 text-white" onClick={handleSubmit}>
                  Run Valuation
                </Button>
                <Button className="w-full bg-green-500 text-white" onClick={toggleReport}>
                  {showReport ? "Hide Report" : "Show Report"}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Report Section */}
        {showReport && (
          <div className="mt-8">
            <SensitivityAnalysisReport />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
