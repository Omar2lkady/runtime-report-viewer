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
          <div className="space-y-6">
            <h4 className="font-bold text-slate-800 text-lg border-b pb-2">Maturity Profile</h4>
            
            {/* Maturity Profile Table */}
            <div className="flex gap-4">
              {/* Particulars Column */}
              <div className="flex-1">
                <div className="font-medium text-slate-700 bg-slate-100 py-3 px-4 border border-slate-300 text-center">
                  Particulars
                </div>
                <div className="text-slate-700 py-3 px-4 border border-slate-300">Year 1</div>
                <div className="text-slate-700 py-3 px-4 border border-slate-300">Year 2</div>
                <div className="text-slate-700 py-3 px-4 border border-slate-300">Year 3</div>
                <div className="text-slate-700 py-3 px-4 border border-slate-300">Year 4</div>
                <div className="text-slate-700 py-3 px-4 border border-slate-300">Year 5</div>
                <div className="text-slate-700 py-3 px-4 border border-slate-300">Year 6 to Year 10</div>
                <div className="text-slate-700 py-3 px-4 border border-slate-300">Year 11 and above</div>
              </div>

              {/* Undiscounted Payments Column */}
              <div className="flex-1">
                <div className="font-medium text-slate-700 bg-slate-100 py-3 px-4 border border-slate-300 text-center">
                  Undiscounted Payments
                </div>
                <div className="text-center font-mono py-3 px-4 border border-slate-300">742,863</div>
                <div className="text-center font-mono py-3 px-4 border border-slate-300">424,279</div>
                <div className="text-center font-mono py-3 px-4 border border-slate-300">272,688</div>
                <div className="text-center font-mono py-3 px-4 border border-slate-300">344,069</div>
                <div className="text-center font-mono py-3 px-4 border border-slate-300">252,080</div>
                <div className="text-center font-mono py-3 px-4 border border-slate-300">1,788,212</div>
                <div className="text-center font-mono py-3 px-4 border border-slate-300">2,800,986</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
