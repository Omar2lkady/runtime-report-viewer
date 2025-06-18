
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Plus, MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Config = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const configs = [
    { id: 1, title: "qenawy", company: "qenawy company" },
    { id: 2, title: "Config 1234", company: "test company" },
    { id: 3, title: "new confige", company: "test company" },
    { id: 4, title: "adnh config", company: "adnh" },
    { id: 5, title: "test config", company: "adnh" },
    { id: 6, title: "test config 2", company: "adnh" },
  ];

  const filteredConfigs = configs.filter(config =>
    config.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    config.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">Config</h1>
        <Button 
          onClick={() => navigate("/add-config")}
          className="bg-green-600 hover:bg-green-700 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add Config
        </Button>
      </div>

      <div className="mb-6">
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead className="w-12">
                <input type="checkbox" className="rounded" />
              </TableHead>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Company</TableHead>
              <TableHead className="w-12"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredConfigs.map((config) => (
              <TableRow key={config.id} className="hover:bg-gray-50">
                <TableCell>
                  <input type="checkbox" className="rounded" />
                </TableCell>
                <TableCell className="font-medium">{config.id}</TableCell>
                <TableCell className="text-blue-600">{config.title}</TableCell>
                <TableCell className="text-green-600">{config.company}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="sm">
                    <MoreHorizontal className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        {filteredConfigs.length} results
      </div>
    </div>
  );
};

export default Config;
