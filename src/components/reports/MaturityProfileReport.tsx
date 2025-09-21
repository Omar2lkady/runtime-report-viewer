import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const MaturityProfileReport = () => {
  const handleExport = () => {
    console.log("Exporting Maturity Profile Report...");
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
                <Badge variant="outline" className="mx-auto">MATURITY PROFILE WITH PAYABLES</Badge>
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
            {/* Maturity Profile Section */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">4. Maturity Profile With Payables</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded">Particulars</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">Dec 31, 2022<br/>Undiscounted Payments<br/>(Amounts in SAR)</div>
                
                <div className="text-slate-700 py-2 px-3">Year 1</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">2,028</div>
                
                <div className="text-slate-700 py-2 px-3">Year 2</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">5,294</div>
                
                <div className="text-slate-700 py-2 px-3">Year 3</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">4,380</div>
                
                <div className="text-slate-700 py-2 px-3">Year 4</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">3,953</div>
                
                <div className="text-slate-700 py-2 px-3">Year 5</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">5,912</div>
                
                <div className="text-slate-700 py-2 px-3">Year 6 to Year 10</div>
                <div className="text-center font-mono py-2 px-3 bg-orange-50 rounded">22,838</div>
                
                <div className="text-slate-700 py-2 px-3">Year 11 & above</div>
                <div className="text-center font-mono py-2 px-3 bg-orange-50 rounded">21,584</div>
              </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  );
};
