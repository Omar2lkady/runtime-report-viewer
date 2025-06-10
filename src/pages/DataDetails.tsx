import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DataDetails = () => {
  const navigate = useNavigate();

  const handleBackToReports = () => {
    // Navigate back to the reports page (Index with showOutput=true)
    navigate("/", { state: { showOutput: true } });
  };

  const handleExportCurrent = () => {
    console.log("Exporting current details...");
    // TODO: Implement export functionality
  };

  const handleExportLast = () => {
    console.log("Exporting last details...");
    // TODO: Implement export functionality
  };

  const currentDetailsData = [
    {
      code: "1001",
      name: "Null",
      dob: "1961-10-19",
      doj: "2021-11-14",
      basicSalary: "48150",
      transportation: "1000",
      housing: "4000",
      currentAge: "64",
      serviceCost: "27,139,358",
      pvdbo: "95,478,977"
    },
    {
      code: "1002",
      name: "Null",
      dob: "1999-07-29",
      doj: "2022-03-21",
      basicSalary: "5000",
      transportation: "500",
      housing: "2000",
      currentAge: "26",
      serviceCost: "5,039,388",
      pvdbo: "15,976,675"
    },
    {
      code: "1003",
      name: "Null",
      dob: "1960-06-21",
      doj: "2020-02-28",
      basicSalary: "29425",
      transportation: "500",
      housing: "2000",
      currentAge: "45",
      serviceCost: "27,821,641",
      pvdbo: "145,487,711"
    },
    {
      code: "1004",
      name: "Null",
      dob: "1967-08-26",
      doj: "2020-07-13",
      basicSalary: "10800",
      transportation: "700",
      housing: "2000",
      currentAge: "38",
      serviceCost: "12,154,362",
      pvdbo: "59,032,521"
    },
    {
      code: "1005",
      name: "Null",
      dob: "1993-06-22",
      doj: "2021-04-19",
      basicSalary: "8500",
      transportation: "500",
      housing: "1000",
      currentAge: "32",
      serviceCost: "8,942,461",
      pvdbo: "36,577,342"
    },
    {
      code: "1006",
      name: "Null",
      dob: "1993-05-15",
      doj: "2021-03-15",
      basicSalary: "6800",
      transportation: "500",
      housing: "1200",
      currentAge: "32",
      serviceCost: "7,621,242",
      pvdbo: "31,904,045"
    },
    {
      code: "1007",
      name: "Null",
      dob: "1968-06-14",
      doj: "2021-11-08",
      basicSalary: "5500",
      transportation: "500",
      housing: "800",
      currentAge: "37",
      serviceCost: "6,156,585",
      pvdbo: "21,761,065"
    },
    {
      code: "1008",
      name: "Null",
      dob: "1976-01-03",
      doj: "2021-11-08",
      basicSalary: "5500",
      transportation: "500",
      housing: "800",
      currentAge: "49",
      serviceCost: "5,597,772",
      pvdbo: "19,785,886"
    },
    {
      code: "1009",
      name: "Null",
      dob: "1994-03-26",
      doj: "2021-12-02",
      basicSalary: "5900",
      transportation: "500",
      housing: "1000",
      currentAge: "31",
      serviceCost: "5,990,057",
      pvdbo: "20,778,907"
    },
    {
      code: "1010",
      name: "Null",
      dob: "1969-06-03",
      doj: "2022-02-03",
      basicSalary: "5300",
      transportation: "0",
      housing: "0",
      currentAge: "36",
      serviceCost: "4,768,889",
      pvdbo: "15,720,166"
    }
  ];

  const lastDetailsData = [
    {
      code: "1001",
      name: "Null",
      dob: "1961-10-19",
      doj: "2021-11-14",
      basicSalary: "45800",
      transportation: "950",
      housing: "3800",
      currentAge: "63",
      serviceCost: "24,892,134",
      pvdbo: "89,234,567"
    },
    {
      code: "1002",
      name: "Null",
      dob: "1999-07-29",
      doj: "2022-03-21",
      basicSalary: "4750",
      transportation: "475",
      housing: "1900",
      currentAge: "25",
      serviceCost: "4,789,123",
      pvdbo: "14,567,890"
    },
    {
      code: "1003",
      name: "Null",
      dob: "1960-06-21",
      doj: "2020-02-28",
      basicSalary: "28200",
      transportation: "475",
      housing: "1900",
      currentAge: "44",
      serviceCost: "25,634,789",
      pvdbo: "132,456,789"
    },
    {
      code: "1004",
      name: "Null",
      dob: "1967-08-26",
      doj: "2020-07-13",
      basicSalary: "10300",
      transportation: "665",
      housing: "1900",
      currentAge: "37",
      serviceCost: "11,234,567",
      pvdbo: "54,321,987"
    },
    {
      code: "1005",
      name: "Null",
      dob: "1993-06-22",
      doj: "2021-04-19",
      basicSalary: "8100",
      transportation: "475",
      housing: "950",
      currentAge: "31",
      serviceCost: "8,234,567",
      pvdbo: "33,456,789"
    },
    {
      code: "1006",
      name: "Null",
      dob: "1993-05-15",
      doj: "2021-03-15",
      basicSalary: "6500",
      transportation: "475",
      housing: "1140",
      currentAge: "31",
      serviceCost: "7,123,456",
      pvdbo: "28,234,567"
    },
    {
      code: "1007",
      name: "Null",
      dob: "1968-06-14",
      doj: "2021-11-08",
      basicSalary: "5250",
      transportation: "475",
      housing: "760",
      currentAge: "36",
      serviceCost: "5,789,123",
      pvdbo: "19,876,543"
    },
    {
      code: "1008",
      name: "Null",
      dob: "1976-01-03",
      doj: "2021-11-08",
      basicSalary: "5250",
      transportation: "475",
      housing: "760",
      currentAge: "48",
      serviceCost: "5,234,567",
      pvdbo: "17,654,321"
    },
    {
      code: "1009",
      name: "Null",
      dob: "1994-03-26",
      doj: "2021-12-02",
      basicSalary: "5600",
      transportation: "475",
      housing: "950",
      currentAge: "30",
      serviceCost: "5,567,890",
      pvdbo: "18,234,567"
    },
    {
      code: "1010",
      name: "Null",
      dob: "1969-06-03",
      doj: "2022-02-03",
      basicSalary: "5000",
      transportation: "0",
      housing: "0",
      currentAge: "35",
      serviceCost: "4,345,678",
      pvdbo: "13,567,890"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-slate-800">Data Details</h1>
          <Button
            variant="outline"
            onClick={handleBackToReports}
            className="bg-white hover:bg-slate-50 border-slate-300"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Reports
          </Button>
        </div>

        <Tabs defaultValue="current" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 bg-white border-2 border-slate-200 shadow-sm p-1 rounded-lg">
            <TabsTrigger 
              value="current" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:border-0 text-slate-700 font-medium transition-all duration-200"
            >
              Current Details
            </TabsTrigger>
            <TabsTrigger 
              value="last" 
              className="flex items-center gap-2 data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=active]:border-0 text-slate-700 font-medium transition-all duration-200"
            >
              Last Details
            </TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <Card className="bg-white shadow-xl border-2 border-slate-200">
              <CardHeader className="border-b border-slate-200 bg-slate-50">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl text-slate-800">
                      Current Period Details
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      Employee data and calculations for the current period
                    </CardDescription>
                  </div>
                  <Button
                    onClick={handleExportCurrent}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-slate-100 border-b-2 border-slate-300">
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Employee code</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Employee name</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Date of birth</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Date of joining</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Basic salary</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Transportation</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Housing</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Current Age</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Service Cost</TableHead>
                        <TableHead className="font-semibold text-slate-800">PVDBO</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {currentDetailsData.map((row) => (
                        <TableRow key={row.code} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                          <TableCell className="border-r border-slate-200 font-medium">{row.code}</TableCell>
                          <TableCell className="border-r border-slate-200">
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">
                              {row.name}
                            </span>
                          </TableCell>
                          <TableCell className="border-r border-slate-200">{row.dob}</TableCell>
                          <TableCell className="border-r border-slate-200">{row.doj}</TableCell>
                          <TableCell className="border-r border-slate-200 font-medium">{row.basicSalary}</TableCell>
                          <TableCell className="border-r border-slate-200">{row.transportation}</TableCell>
                          <TableCell className="border-r border-slate-200">{row.housing}</TableCell>
                          <TableCell className="border-r border-slate-200 font-medium">{row.currentAge}</TableCell>
                          <TableCell className="border-r border-slate-200 font-medium text-blue-700">{row.serviceCost}</TableCell>
                          <TableCell className="font-medium text-blue-700">{row.pvdbo}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-6 px-6 pb-6 flex justify-between items-center border-t border-slate-200 pt-4">
                  <p className="text-sm text-slate-600 font-medium">
                    Showing 10 of 20,001 employees
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-slate-300">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-300">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="last">
            <Card className="bg-white shadow-xl border-2 border-slate-200">
              <CardHeader className="border-b border-slate-200 bg-slate-50">
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle className="text-xl text-slate-800">
                      Last Period Details
                    </CardTitle>
                    <CardDescription className="text-slate-600">
                      Employee data and calculations for the previous period
                    </CardDescription>
                  </div>
                  <Button
                    onClick={handleExportLast}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Export
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-slate-100 border-b-2 border-slate-300">
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Employee code</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Employee name</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Date of birth</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Date of joining</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Basic salary</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Transportation</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Housing</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Current Age</TableHead>
                        <TableHead className="font-semibold text-slate-800 border-r border-slate-300">Service Cost</TableHead>
                        <TableHead className="font-semibold text-slate-800">PVDBO</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {lastDetailsData.map((row) => (
                        <TableRow key={row.code} className="border-b border-slate-200 hover:bg-slate-50 transition-colors">
                          <TableCell className="border-r border-slate-200 font-medium">{row.code}</TableCell>
                          <TableCell className="border-r border-slate-200">
                            <span className="px-2 py-1 bg-emerald-100 text-emerald-800 rounded text-xs font-medium">
                              {row.name}
                            </span>
                          </TableCell>
                          <TableCell className="border-r border-slate-200">{row.dob}</TableCell>
                          <TableCell className="border-r border-slate-200">{row.doj}</TableCell>
                          <TableCell className="border-r border-slate-200 font-medium">{row.basicSalary}</TableCell>
                          <TableCell className="border-r border-slate-200">{row.transportation}</TableCell>
                          <TableCell className="border-r border-slate-200">{row.housing}</TableCell>
                          <TableCell className="border-r border-slate-200 font-medium">{row.currentAge}</TableCell>
                          <TableCell className="border-r border-slate-200 font-medium text-blue-700">{row.serviceCost}</TableCell>
                          <TableCell className="font-medium text-blue-700">{row.pvdbo}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
                <div className="mt-6 px-6 pb-6 flex justify-between items-center border-t border-slate-200 pt-4">
                  <p className="text-sm text-slate-600 font-medium">
                    Showing 10 of 20,501 employees
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-slate-300">
                      Previous
                    </Button>
                    <Button variant="outline" size="sm" className="border-slate-300">
                      Next
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DataDetails;
