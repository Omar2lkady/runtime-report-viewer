
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNavigate } from "react-router-dom";

const AddConfig = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [configCountry, setConfigCountry] = useState("");

  // Sensitivity Analysis state
  const [sensitivityData, setSensitivityData] = useState([
    { sign: "+/-", percentage: "1%", particulars: "Discount Rate" },
    { sign: "+/-", percentage: "1%", particulars: "Salary Increase Rate" },
    { sign: "+/-", percentage: "10%", particulars: "Withdrawal Rates" },
    { sign: "+/-", percentage: "1 Year", particulars: "Mortality Rates" },
  ]);

  const handleSensitivityChange = (index: number, field: string, value: string) => {
    const updatedData = [...sensitivityData];
    updatedData[index] = { ...updatedData[index], [field]: value };
    setSensitivityData(updatedData);
  };

  const handleSubmit = () => {
    console.log("Config Data:", { title, company, configCountry, sensitivityData });
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Create Config</h1>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline"
              onClick={() => navigate("/config")}
            >
              Create and add another
            </Button>
            <Button 
              onClick={handleSubmit}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Create
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Basic Information */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter config title"
              />
            </div>

            <div>
              <Label htmlFor="company">Company <span className="text-red-500">*</span></Label>
              <Select value={company} onValueChange={setCompany}>
                <SelectTrigger>
                  <SelectValue placeholder="Select company" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="test-company">test company</SelectItem>
                  <SelectItem value="qenawy-company">qenawy company</SelectItem>
                  <SelectItem value="adnh">adnh</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="config-country">Config Country <span className="text-red-500">*</span></Label>
              <Select value={configCountry} onValueChange={setConfigCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pakistani">Pakistani</SelectItem>
                  <SelectItem value="saudi">Saudi</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Sensitivity Analysis Configuration */}
        <Card>
          <CardHeader>
            <CardTitle>Sensitivity Analysis Configuration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 font-medium bg-gray-50">Sign</th>
                    <th className="text-left py-3 px-4 font-medium bg-gray-50">Percentage</th>
                    <th className="text-left py-3 px-4 font-medium bg-gray-50">Particulars</th>
                  </tr>
                </thead>
                <tbody>
                  {sensitivityData.map((row, index) => (
                    <tr key={index} className="border-b">
                      <td className="py-2 px-4">
                        <Select
                          value={row.sign}
                          onValueChange={(value) => handleSensitivityChange(index, "sign", value)}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="+/-">+/-</SelectItem>
                            <SelectItem value="+">+</SelectItem>
                            <SelectItem value="-">-</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="py-2 px-4">
                        <Input
                          value={row.percentage}
                          onChange={(e) => handleSensitivityChange(index, "percentage", e.target.value)}
                          className="w-full"
                        />
                      </td>
                      <td className="py-2 px-4">
                        <Input
                          value={row.particulars}
                          onChange={(e) => handleSensitivityChange(index, "particulars", e.target.value)}
                          className="w-full"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AddConfig;
