import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MoreHorizontal } from "lucide-react";
import { useNavigate } from "react-router-dom";

const mockConfigs = [
  { id: 1, title: "qenawy", company: "qenawy company" },
  { id: 2, title: "Config 1234", company: "test company" },
  { id: 3, title: "new config", company: "test company" },
  { id: 4, title: "adnh config", company: "adnh" },
  { id: 5, title: "test config", company: "adnh" },
  { id: 6, title: "test config 2", company: "adnh" },
];

const Config = () => {
  const navigate = useNavigate();

  const handleAddConfig = () => {
    navigate("/add-config");
  };

  return (
    <div className="container mx-auto p-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-2xl font-bold">Config</CardTitle>
          <Button 
            className="bg-green-600 hover:bg-green-700 text-white"
            onClick={handleAddConfig}
          >
            Add Config
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
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
              {mockConfigs.map((config) => (
                <TableRow key={config.id}>
                  <TableCell>
                    <input type="checkbox" className="rounded" />
                  </TableCell>
                  <TableCell className="font-medium">{config.id}</TableCell>
                  <TableCell className="text-blue-600">{config.title}</TableCell>
                  <TableCell className="text-green-600">{config.company}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-4 text-sm text-muted-foreground">
            {mockConfigs.length} results
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Config;
