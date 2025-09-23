import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download } from "lucide-react";

export const SensitivityAnalysisReport = () => {
  const handleExport = () => {
    console.log("Exporting Sensitivity Analysis Report...");
    // Export functionality will be implemented here
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="text-center border-b bg-slate-50">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800">Client A</h2>
                <h3 className="text-xl font-semibold text-slate-700">Actuarial Valuation of EOSB Scheme | FY 2022</h3>
                <Badge variant="outline" className="mx-auto">APPENDIX 6: ADDITIONAL DISCLOSURES</Badge>
              </div>
              <Button 
                onClick={handleExport}
                variant="outline" 
                size="sm"
                className="ml-4"
              >
                <Download className="h-4 w-4 mr-2" />
                Export
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-6">
            <h4 className="font-bold text-slate-800 text-lg text-center border-b pb-2">Sensitivity Analysis</h4>
            
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-center font-semibold">Particulars</TableHead>
                    <TableHead className="text-center font-semibold">Current PVDBO</TableHead>
                    <TableHead className="text-center font-semibold">Percentage Change</TableHead>
                    <TableHead className="text-center font-semibold">Last PVDBO</TableHead>
                    <TableHead className="text-center font-semibold">Percentage Change</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Current Liability</TableCell>
                    <TableCell className="text-right font-mono">4,150,497</TableCell>
                    <TableCell className="text-center font-mono">-</TableCell>
                    <TableCell className="text-right font-mono">4,145,296</TableCell>
                    <TableCell className="text-center font-mono">-</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">+1% Discount Rate</TableCell>
                    <TableCell className="text-right font-mono">3,903,619</TableCell>
                    <TableCell className="text-center font-mono">-5.95%</TableCell>
                    <TableCell className="text-right font-mono">3,897,471</TableCell>
                    <TableCell className="text-center font-mono">-5.98%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">-1% Discount Rate</TableCell>
                    <TableCell className="text-right font-mono">4,488,033</TableCell>
                    <TableCell className="text-center font-mono">8.13%</TableCell>
                    <TableCell className="text-right font-mono">4,427,283</TableCell>
                    <TableCell className="text-center font-mono">6.80%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">+1% Salary Increase Rate</TableCell>
                    <TableCell className="text-right font-mono">4,534,687</TableCell>
                    <TableCell className="text-center font-mono">9.26%</TableCell>
                    <TableCell className="text-right font-mono">4,481,419</TableCell>
                    <TableCell className="text-center font-mono">8.11%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">-1% Salary Increase Rate</TableCell>
                    <TableCell className="text-right font-mono">3,854,973</TableCell>
                    <TableCell className="text-center font-mono">-7.12%</TableCell>
                    <TableCell className="text-right font-mono">3,842,192</TableCell>
                    <TableCell className="text-center font-mono">-7.31%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">+10% Withdrawal Rates</TableCell>
                    <TableCell className="text-right font-mono">4,183,048</TableCell>
                    <TableCell className="text-center font-mono">0.78%</TableCell>
                    <TableCell className="text-right font-mono">4,145,462</TableCell>
                    <TableCell className="text-center font-mono">0.00%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">-10% Withdrawal Rates</TableCell>
                    <TableCell className="text-right font-mono">4,167,610</TableCell>
                    <TableCell className="text-center font-mono">0.41%</TableCell>
                    <TableCell className="text-right font-mono">4,145,127</TableCell>
                    <TableCell className="text-center font-mono">0.00%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1 Year Mortality age set back</TableCell>
                    <TableCell className="text-right font-mono">4,175,287</TableCell>
                    <TableCell className="text-center font-mono">0.60%</TableCell>
                    <TableCell className="text-right font-mono">4,159,055</TableCell>
                    <TableCell className="text-center font-mono">0.33%</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">1 Year Mortality age set forward</TableCell>
                    <TableCell className="text-right font-mono">4,175,871</TableCell>
                    <TableCell className="text-center font-mono">0.61%</TableCell>
                    <TableCell className="text-right font-mono">4,131,205</TableCell>
                    <TableCell className="text-center font-mono">-0.34%</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="space-y-4 mt-8">
              <h4 className="font-bold text-slate-800 text-lg text-center border-b pb-2">Duration</h4>
              
              <div className="overflow-auto">
                <Table>
                  <TableHeader>
                    <TableRow className="border-b-2 border-slate-300 bg-slate-50">
                      <TableHead className="text-center font-semibold text-slate-700 w-1/3">Particulars</TableHead>
                      <TableHead className="text-center font-semibold text-slate-700 w-1/3">Current</TableHead>
                      <TableHead className="text-center font-semibold text-slate-700 w-1/3">Last</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow className="border-b border-slate-200 hover:bg-slate-50/50">
                      <TableCell className="font-medium text-slate-800 py-3">Duration - years</TableCell>
                      <TableCell className="text-right font-mono text-slate-700 py-3">7.04</TableCell>
                      <TableCell className="text-right font-mono text-slate-700 py-3">6.39</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
