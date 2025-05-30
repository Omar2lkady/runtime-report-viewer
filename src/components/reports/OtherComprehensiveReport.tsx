
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const OtherComprehensiveReport = () => {
  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="text-center border-b bg-slate-50">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-slate-800">Client A</h2>
            <h3 className="text-xl font-semibold text-slate-700">Actuarial Valuation of EOSB Scheme | FY 2022</h3>
            <Badge variant="outline" className="mx-auto">Working for Disclosures as per the IAS 19 (Revised 2011)</Badge>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-8">
            {/* Header */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="font-semibold text-slate-700 bg-slate-100 py-2 rounded">Working for Disclosures as per the IAS 19 (Revised 2011)</div>
              <div className="font-semibold text-slate-700 bg-slate-100 py-2 rounded">2022<br/>Amount in SAR</div>
            </div>

            {/* Difference in opening liability */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">Difference in opening liability as at 31 December 2021</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-slate-700 py-2 px-3">Present value of obligation as at 31st December 2021</div>
                <div className="text-right font-mono py-2 px-3 bg-blue-50 rounded">684,438</div>
                
                <div className="text-slate-700 py-2 px-3">Total Assets 31st December 2021</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Funding (Surplus) / Deficit as at 31st December 2021</div>
                <div className="text-right font-mono py-2 px-3 bg-blue-50 rounded">684,438</div>
                
                <div className="text-slate-700 py-2 px-3">Liability / (Assets) already recognized as per client's book for 2021</div>
                <div className="text-right font-mono py-2 px-3 bg-yellow-50 rounded">1,396,327</div>
                
                <div className="text-slate-700 py-2 px-3 bg-red-50 rounded">Remaining Liability / (Assets) recognized for FY 2022</div>
                <div className="text-right font-mono py-2 px-3 bg-red-50 rounded">(711,889)</div>
              </div>
            </div>

            {/* Actuarial Gain/Loss in Obligations */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">ACTUARIAL GAIN/LOSS IN OBLIGATIONS</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-slate-700 py-2 px-3">Present Value of Defined Benefit Obligation - beginning of the year</div>
                <div className="text-center text-slate-600 py-2 px-3"></div>
                <div className="text-right font-mono py-2 px-3 bg-yellow-50 rounded">1,396,327</div>
                
                <div className="text-slate-700 py-2 px-3">Current Service cost</div>
                <div className="text-center text-slate-600 py-2 px-3">add</div>
                <div className="text-right font-mono py-2 px-3 bg-orange-50 rounded">160,967</div>
                
                <div className="text-slate-700 py-2 px-3">Interest Cost</div>
                <div className="text-center text-slate-600 py-2 px-3">add</div>
                <div className="text-right font-mono py-2 px-3 bg-orange-50 rounded">29,946</div>
                
                <div className="text-slate-700 py-2 px-3">Benefits Paid</div>
                <div className="text-center text-slate-600 py-2 px-3">less</div>
                <div className="text-right font-mono py-2 px-3 bg-red-50 rounded">317,757</div>
                
                <div className="text-slate-700 py-2 px-3">Past Service Cost</div>
                <div className="text-center text-slate-600 py-2 px-3">add</div>
                <div className="text-right font-mono py-2 px-3 bg-orange-50 rounded">203,327</div>
                
                <div className="text-slate-700 py-2 px-3">Employees Transferred from / (to) the Group Companies</div>
                <div className="text-center text-slate-600 py-2 px-3">add</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Curtailment / Settlement Gain / Loss</div>
                <div className="text-center text-slate-600 py-2 px-3">add</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Benefits Payable to retired employees</div>
                <div className="text-center text-slate-600 py-2 px-3">less</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-slate-200 rounded">Actuarial (Gain) or Loss on obligation (Balancing Figure)</div>
                <div className="text-center text-slate-600 py-2 px-3"></div>
                <div className="text-right font-mono font-bold py-2 px-3 bg-slate-200 rounded">(621,023)</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-blue-100 rounded">Present value of Defined Benefit Obligation at the end of the year</div>
                <div className="text-center text-slate-600 py-2 px-3"></div>
                <div className="text-right font-mono font-bold py-2 px-3 bg-blue-100 rounded">851,787</div>
              </div>
            </div>

            {/* Actuarial Gain/Loss in Assets */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">ACTUARIAL GAIN/LOSS IN ASSETS</h4>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-slate-700 py-2 px-3">Total Assets as at the beginning of the year</div>
                <div className="text-center text-slate-600 py-2 px-3"></div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Expected Return on plan assets</div>
                <div className="text-center text-slate-600 py-2 px-3">add</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Contributions</div>
                <div className="text-center text-slate-600 py-2 px-3">add</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Benefits Paid</div>
                <div className="text-center text-slate-600 py-2 px-3">less</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-slate-200 rounded">Actuarial Gain or (Loss) on Assets (Balancing Figure)</div>
                <div className="text-center text-slate-600 py-2 px-3"></div>
                <div className="text-right font-mono font-bold py-2 px-3 bg-slate-200 rounded">-</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-blue-100 rounded">Total Assets as at the End of the year</div>
                <div className="text-center text-slate-600 py-2 px-3"></div>
                <div className="text-right font-mono font-bold py-2 px-3 bg-blue-100 rounded">-</div>
              </div>
            </div>

            {/* Actuarial Remeasurements */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">ACTUARIAL REMEASUREMENTS</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-slate-700 py-2 px-3">Actuarial (Gain) or Loss on obligations</div>
                <div className="text-right font-mono py-2 px-3 bg-green-50 rounded">90,866</div>
                
                <div className="text-slate-700 py-2 px-3">Difference in opening liability - beginning of the year</div>
                <div className="text-right font-mono py-2 px-3 bg-red-50 rounded">(711,889)</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-slate-200 rounded">Other Comprehensive Income Recognized as at the End of the year</div>
                <div className="text-right font-mono font-bold py-2 px-3 bg-slate-200 rounded">(621,023)</div>
              </div>
            </div>

            {/* Cost for the Year */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">COST FOR THE YEAR</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-slate-700 py-2 px-3">Current Service Cost</div>
                <div className="text-right font-mono py-2 px-3 bg-orange-50 rounded">160,967</div>
                
                <div className="text-slate-700 py-2 px-3">Net Interest</div>
                <div className="text-right font-mono py-2 px-3 bg-orange-50 rounded">29,946</div>
                
                <div className="text-slate-700 py-2 px-3">Past Service Cost</div>
                <div className="text-right font-mono py-2 px-3 bg-orange-50 rounded">203,327</div>
                
                <div className="text-slate-700 py-2 px-3">Employees Transferred from / (to) the Group Companies</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Curtailment / Settlement Gain / Loss</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-cyan-100 rounded">(Income)/Expense for the year ended</div>
                <div className="text-right font-mono font-bold py-2 px-3 bg-cyan-100 rounded">394,240</div>
              </div>
            </div>

            {/* Reconciliation */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">Reconciliation of Payable to / (Receivable from) Defined Benefit Plan</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-slate-700 py-2 px-3">Present value of obligation</div>
                <div className="text-right font-mono py-2 px-3 bg-blue-50 rounded">851,787</div>
                
                <div className="text-slate-700 py-2 px-3">Benefits Payable to retired employees</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="text-slate-700 py-2 px-3">Fair Value of Plan Assets</div>
                <div className="text-right font-mono py-2 px-3">-</div>
                
                <div className="font-bold text-slate-800 py-2 px-3 bg-slate-200 rounded">(Asset) / Liability to be recognized in the balance sheet</div>
                <div className="text-right font-mono font-bold py-2 px-3 bg-slate-200 rounded">851,787</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
