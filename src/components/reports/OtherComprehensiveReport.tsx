import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const OtherComprehensiveReport = () => {
  const handleExport = () => {
    console.log("Exporting Other Comprehensive Report...");
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
                <Badge variant="outline" className="mx-auto">Working for Disclosures as per the IAS 19 (Revised 2011)</Badge>
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
            <h4 className="font-bold text-slate-800 text-lg border-b pb-2">Other Comprehensive Breakup</h4>
            
            {/* Other Comprehensive Breakup Table */}
            <div className="border border-slate-300">
              <div className="grid grid-cols-2 gap-0">
                <div className="font-bold text-slate-800 bg-slate-100 py-3 px-4 border-r border-slate-300">A. Assumption Gain / Loss</div>
                <div></div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t pl-8">a. Change in Demographic Assumptions</div>
                <div className="text-right font-mono py-3 px-4 border-t">2,114</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t pl-8">b. Change in Financial Assumptions</div>
                <div className="text-right font-mono py-3 px-4 border-t">25,272</div>
                
                <div className="font-bold text-slate-800 bg-slate-100 py-3 px-4 border-r border-slate-300 border-t">B. Experience Gain / Loss</div>
                <div className="border-t"></div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t pl-8">a. Due to Actual Salary Increase</div>
                <div className="text-right font-mono py-3 px-4 border-t">(146,974)</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t pl-8">b. Due to actual Withdrawals / Mortality</div>
                <div className="text-right font-mono py-3 px-4 border-t">(203,269)</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t pl-8">c. Paid to employees not accounted for last time</div>
                <div className="text-right font-mono py-3 px-4 border-t">0</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t pl-8">d. For active employees</div>
                <div className="text-right font-mono py-3 px-4 border-t">184,587</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">New Entrants liability</div>
                <div className="text-right font-mono py-3 px-4 border-t">-</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Transfer In expense Adjustment</div>
                <div className="text-right font-mono py-3 px-4 border-t">-</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Transfer In liability Adjustment</div>
                <div className="text-right font-mono py-3 px-4 border-t">1,120</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Transfer Out expense Adjustment</div>
                <div className="text-right font-mono py-3 px-4 border-t">-</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Transfer Out liability Adjustment</div>
                <div className="text-right font-mono py-3 px-4 border-t">2,331</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Curtailment Adjustment</div>
                <div className="text-right font-mono py-3 px-4 border-t">-</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Past Service Cost</div>
                <div className="text-right font-mono py-3 px-4 border-t">-</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Opening liability difference</div>
                <div className="text-right font-mono py-3 px-4 border-t">179,627</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Net increase in advances</div>
                <div className="text-right font-mono py-3 px-4 border-t">25,753</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Data Issues Adjustment - Dates</div>
                <div className="text-right font-mono py-3 px-4 border-t">37,981</div>
                
                <div className="text-slate-700 py-3 px-4 border-r border-slate-300 border-t">Data Issues - employees not dates / unreconciled liability</div>
                <div className="text-right font-mono py-3 px-4 border-t">-</div>
                
                <div className="font-bold text-slate-800 py-3 px-4 border-r border-slate-300 border-t">Total</div>
                <div className="text-right font-mono font-bold py-3 px-4 border-t">108,540</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
