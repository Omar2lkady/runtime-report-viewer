
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const MaturityProfileReport = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="text-center border-b bg-slate-50">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-800">Client A</h2>
            <h3 className="text-xl font-semibold text-slate-700">Actuarial Valuation of EOSB Scheme | FY 2022</h3>
            <Badge variant="outline" className="mx-auto">MATURITY PROFILE WITH PAYABLES</Badge>
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

            {/* Current and Non-Current Liability Breakup */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">5. Current and Non-Current Liability Breakup</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded">Particulars</div>
                <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">(Amounts in SAR)<br/>2022</div>
                
                <div className="text-slate-700 py-2 px-3">Current Liability; the expected benefits payable within next one year</div>
                <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">5,901</div>
                
                <div className="text-slate-700 py-2 px-3">Non-Current Liability;</div>
                <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">42,383</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-slate-200 rounded">Total Actuarial Liability</div>
                <div className="text-center font-mono font-bold py-2 px-3 bg-slate-200 rounded">48,284</div>
              </div>
            </div>

            {/* Ratios Section */}
            <div className="space-y-6">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">6. Ratios</h4>
              
              {/* Termination Liability vs Actuarial Liability */}
              <div className="space-y-3">
                <h5 className="font-semibold text-slate-700 text-md">a. Termination Liability vs the Actuarial Liability</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded">Particulars</div>
                  <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">(Amounts in SAR)<br/>2022</div>
                  
                  <div className="text-slate-700 py-2 px-3">Discontinuance Liability</div>
                  <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">23,775</div>
                  
                  <div className="text-slate-700 py-2 px-3">Actuarial Liability</div>
                  <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">48,284</div>
                  
                  <div className="text-slate-700 py-2 px-3">Ratio of Discontinuance to Actuarial</div>
                  <div className="text-center font-mono py-2 px-3 bg-yellow-50 rounded">49.24%</div>
                </div>
              </div>

              {/* Service Cost vs Actuarial Liability */}
              <div className="space-y-3">
                <h5 className="font-semibold text-slate-700 text-md">b. Service Cost vs the Actuarial Liability</h5>
                <div className="grid grid-cols-2 gap-4">
                  <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded">Particulars</div>
                  <div className="font-medium text-slate-700 bg-slate-100 py-2 px-3 rounded text-center">(Amounts in SAR)<br/>2022</div>
                  
                  <div className="text-slate-700 py-2 px-3">Service Cost</div>
                  <div className="text-center font-mono py-2 px-3 bg-green-50 rounded">113,645</div>
                  
                  <div className="text-slate-700 py-2 px-3">Actuarial Liability</div>
                  <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">48,284</div>
                  
                  <div className="text-slate-700 py-2 px-3">Ratio of Service Cost to Actuarial</div>
                  <div className="text-center font-mono py-2 px-3 bg-orange-50 rounded">235.37%</div>
                  
                  <div className="text-slate-700 py-2 px-3">Past Service – Years</div>
                  <div className="text-center font-mono py-2 px-3 bg-blue-50 rounded">0.56</div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
