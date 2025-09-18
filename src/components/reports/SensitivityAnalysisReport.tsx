import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
          <div className="space-y-8">
            {/* Sensitivity Analysis Section */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">Sensitivity Analysis</h4>
              <div className="grid grid-cols-5 gap-4">
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded">Particulars</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">Current PVDBO</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">Percentage Change</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">Last PVDBO</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">Percentage Change</div>
                
                <div className="text-slate-700 py-2 px-3">Current Liability</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,150,497</div>
                <div className="text-center font-mono py-2 px-3">-</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,145,296</div>
                <div className="text-center font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">+1% Discount Rate</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">3,903,619</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">-5.95%</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">3,897,471</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">-5.98%</div>
                
                <div className="text-slate-700 py-2 px-3">-1% Discount Rate</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">4,488,033</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">8.13%</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">4,427,283</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">6.80%</div>
                
                <div className="text-slate-700 py-2 px-3">+1% Salary Increase Rate</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">4,534,687</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">9.26%</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">4,481,419</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">8.11%</div>
                
                <div className="text-slate-700 py-2 px-3">-1% Salary Increase Rate</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">3,854,973</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">-7.12%</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">3,842,192</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">-7.31%</div>
                
                <div className="text-slate-700 py-2 px-3">+10% Withdrawal Rates</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,183,048</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.78%</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,145,462</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.00%</div>
                
                <div className="text-slate-700 py-2 px-3">-10% Withdrawal Rates</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,167,610</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.41%</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,145,127</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.00%</div>
                
                <div className="text-slate-700 py-2 px-3">1 Year Mortality age set back</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,175,287</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.60%</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,159,055</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.33%</div>
                
                <div className="text-slate-700 py-2 px-3">1 Year Mortality age set forward</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,175,871</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.61%</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,131,205</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">-0.34%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
