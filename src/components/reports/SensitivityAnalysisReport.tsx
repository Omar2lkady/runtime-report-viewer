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
            {/* Duration Section */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">1. Duration</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded">Particulars</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">2022</div>
                <div className="text-slate-700 py-2 px-3">Duration (years)</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">6.83</div>
              </div>
            </div>

            {/* Experience Adjustment Section */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">2. Experience Adjustment</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded">Particulars</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">Amounts in SAR 2022</div>
                
                <div className="text-slate-700 py-2 px-3">Present Value of Defined Benefit Obligation</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">48,284</div>
                
                <div className="text-slate-700 py-2 px-3">Fair Value of any Plan assets</div>
                <div className="text-center font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Benefits Payable to Outgoing Employees</div>
                <div className="text-center font-mono py-2 px-3">-</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-slate-200 rounded">Net Defined Benefit Liability</div>
                <div className="text-center font-mono font-bold py-2 px-3 bg-slate-200 rounded">48,284</div>
                
                <div className="text-slate-700 py-2 px-3">Remeasurement (Gain)/Loss on Obligation</div>
                <div className="text-center font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Remeasurement (Gain)/Loss on Plan Asset</div>
                <div className="text-center font-mono py-2 px-3">-</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-yellow-100 rounded">Other Comprehensive Income</div>
                <div className="text-center font-mono font-bold py-2 px-3 bg-yellow-100 rounded">-</div>
              </div>
            </div>

            {/* Sensitivity Analysis Section */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">3. Sensitivity Analysis</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded">Particulars</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">PVDBO (Amounts in SAR)</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">Percentage Change</div>
                
                <div className="text-slate-700 py-2 px-3">Current Liability</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">48,284</div>
                <div className="text-center font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">+1% Discount Rate</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">45,167</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">-6.46%</div>
                
                <div className="text-slate-700 py-2 px-3">-1% Discount Rate</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">51,759</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">7.20%</div>
                
                <div className="text-slate-700 py-2 px-3">+1% Salary Increase Rate</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">51,972</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">7.64%</div>
                
                <div className="text-slate-700 py-2 px-3">-1% Salary Increase Rate</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">44,921</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">-6.96%</div>
                
                <div className="text-slate-700 py-2 px-3">+10% Withdrawal Rates</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">44,733</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">-7.35%</div>
                
                <div className="text-slate-700 py-2 px-3">-10% Withdrawal Rates</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">52,520</div>
                <div className="text-center font-mono py-2 px-3 bg-red-50 rounded">8.36%</div>
                
                <div className="text-slate-700 py-2 px-3">1 Year Mortality age set back</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">48,285</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.00%</div>
                
                <div className="text-slate-700 py-2 px-3">1 Year Mortality age set forward</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">48,283</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.00%</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
