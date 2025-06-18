
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

const Config = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Sample data - in a real app this would come from an API
  const configs = [
    { id: 1, title: "qenawy", company: "qenawy company" },
    { id: 2, title: "Config 1234", company: "test company" },
    { id: 3, title: "new confige", company: "test company" },
    { id: 4, title: "adnh config", company: "adnh" },
    { id: 5, title: "test config", company: "adnh" },
    { id: 6, title: "test config 2", company: "adnh" },
  ];

  const filteredConfigs = configs.filter(
    config =>
      config.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      config.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-semibold text-gray-900">Config</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-64"
              />
            </div>
            <Button 
              onClick={() => navigate("/add-config")}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Add Config
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Configurations</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4 w-12">
                      <Checkbox />
                    </th>
                    <th className="text-left py-3 px-4 font-medium">ID</th>
                    <th className="text-left py-3 px-4 font-medium">Title</th>
                    <th className="text-left py-3 px-4 font-medium">Company</th>
                    <th className="text-left py-3 px-4 w-12"></th>
                  </tr>
                </thead>
                <tbody>
                  {filteredConfigs.map((config) => (
                    <tr key={config.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <Checkbox />
                      </td>
                      <td className="py-3 px-4 text-gray-900">{config.id}</td>
                      <td className="py-3 px-4 text-blue-600">{config.title}</td>
                      <td className="py-3 px-4 text-green-600">{config.company}</td>
                      <td className="py-3 px-4">
                        <Button variant="ghost" size="sm">
                          •••
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-gray-600">
              {filteredConfigs.length} results
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Config;
