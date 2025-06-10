
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const DisclosureReport = () => {
  const handleExport = () => {
    console.log("Exporting Disclosure Report...");
    // Export functionality will be implemented here
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white shadow-lg border-0">
        <CardHeader className="text-center border-b bg-slate-50">
          <div className="space-y-2">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-slate-800">
                  Cement Product
                </h2>
                <h3 className="text-xl font-semibold text-slate-700">
                  GRATUITY SCHEME VALUATION AS AT December 31, 2021
                </h3>
                <Badge variant="outline" className="mx-auto">
                  DISCLOSURE AS PER IAS 19 (Revised 2011)
                </Badge>
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
          {/* Main Tables */}
          <div className="space-y-8">
            {/* Period Headers */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div></div>
              <div className="font-semibold text-slate-700 bg-slate-100 py-2 rounded">
                31-Dec-23
              </div>
              <div className="font-semibold text-slate-700 bg-slate-100 py-2 rounded">
                31-Dec-22
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div></div>
              <div className="text-sm text-slate-600 bg-slate-50 py-1 rounded">
                Amounts in SAR
              </div>
              <div className="text-sm text-slate-600 bg-slate-50 py-1 rounded"></div>
            </div>

            {/* Net Defined Benefit Obligation */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">
                Reconciliation of Payable to / (Receivable from) Net Defined
                Benefit Obligation
              </h4>

              <div className="grid grid-cols-3 gap-4 py-2">
                <div className="font-medium text-slate-700">
                  Present Value of Defined Benefit Obligation
                </div>
                <div className="text-right font-mono bg-blue-50 py-2 px-3 rounded">
                  2,639,023
                </div>
                <div className="text-right font-mono bg-blue-50 py-2 px-3 rounded">
                  2,750,893
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-2">
                <div className="font-medium text-slate-700">
                  Fair Value of any Plan assets
                </div>
                <div className="text-right font-mono py-2 px-3">-</div>
                <div className="text-right font-mono py-2 px-3">-</div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-2 border-t border-slate-200">
                <div></div>
                <div className="text-right font-mono font-bold bg-slate-100 py-2 px-3 rounded">
                  2,639,023
                </div>
                <div className="text-right font-mono font-bold bg-slate-100 py-2 px-3 rounded">
                  2,750,893
                </div>
              </div>
            </div>

            {/* Movement in Net Liability */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">
                Movement in net liability / (asset) recognized
              </h4>

              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Opening Net (Asset) / Liability
                  </div>
                  <div className="text-right font-mono bg-yellow-50 py-2 px-3 rounded">
                    2,750,893
                  </div>
                  <div className="text-right font-mono bg-yellow-50 py-2 px-3 rounded">
                    2,207,993
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    (Income) / Expense for the year
                  </div>
                  <div className="text-right font-mono bg-cyan-50 py-2 px-3 rounded">
                    1,009,088
                  </div>
                  <div className="text-right font-mono bg-cyan-50 py-2 px-3 rounded">
                    607,295
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Employees Transferred from / (to) the Group Companies
                  </div>
                  <div className="text-right font-mono py-2 px-3">-</div>
                  <div className="text-right font-mono py-2 px-3">-</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Other Comprehensive Income
                  </div>
                  <div className="text-right font-mono bg-orange-50 py-2 px-3 rounded">
                    32,711
                  </div>
                  <div className="text-right font-mono bg-orange-50 py-2 px-3 rounded">
                    257,488
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Benefits Paid during the year
                  </div>
                  <div className="text-right font-mono bg-red-50 py-2 px-3 rounded">
                    (1,153,669)
                  </div>
                  <div className="text-right font-mono bg-red-50 py-2 px-3 rounded">
                    (321,883)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-2 border-t border-slate-200">
                <div className="font-bold text-slate-800">
                  Closing Net (Asset) / Liability
                </div>
                <div className="text-right font-mono font-bold bg-slate-100 py-2 px-3 rounded">
                  2,639,023
                </div>
                <div className="text-right font-mono font-bold bg-slate-100 py-2 px-3 rounded">
                  2,750,893
                </div>
              </div>
            </div>

            {/* Income/Charge for Defined Benefit Plan */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">
                (Income) / Charge for the Defined Benefit Plan
              </h4>

              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">Service Cost</div>
                  <div className="text-right font-mono bg-orange-50 py-2 px-3 rounded">
                    911,928
                  </div>
                  <div className="text-right font-mono bg-orange-50 py-2 px-3 rounded">
                    552,843
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">Net Interest</div>
                  <div className="text-right font-mono bg-orange-50 py-2 px-3 rounded">
                    97,160
                  </div>
                  <div className="text-right font-mono bg-orange-50 py-2 px-3 rounded">
                    54,452
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Past Service Cost
                  </div>
                  <div className="text-right font-mono py-2 px-3">-</div>
                  <div className="text-right font-mono py-2 px-3">-</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Employees Transferred from / (to) the Group Companies
                  </div>
                  <div className="text-right font-mono py-2 px-3">-</div>
                  <div className="text-right font-mono py-2 px-3">-</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Curtailment / Settlement Gain / Loss
                  </div>
                  <div className="text-right font-mono py-2 px-3">-</div>
                  <div className="text-right font-mono py-2 px-3">-</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 py-2 border-t border-slate-200">
                <div></div>
                <div className="text-right font-mono font-bold bg-cyan-100 py-2 px-3 rounded">
                  1,009,088
                </div>
                <div className="text-right font-mono font-bold bg-cyan-100 py-2 px-3 rounded">
                  607,295
                </div>
              </div>
            </div>

            {/* Actuarial Assumptions */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-800 text-lg border-b pb-2">
                Actuarial Assumptions
              </h4>

              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Valuation Discount Rate
                  </div>
                  <div className="text-right font-mono py-2 px-3">4.70%</div>
                  <div className="text-right font-mono py-2 px-3">4.42%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Valuation Discount Rate for P&L (p.a.)
                  </div>
                  <div className="text-right font-mono py-2 px-3">4.42%</div>
                  <div className="text-right font-mono py-2 px-3">2.66%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Salary Increase Rate - Short Term - for 1 year
                  </div>
                  <div className="text-right font-mono py-2 px-3">6.65%</div>
                  <div className="text-right font-mono py-2 px-3">5.85%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Salary Increase Rate - Long Term
                  </div>
                  <div className="text-right font-mono py-2 px-3">6.65%</div>
                  <div className="text-right font-mono py-2 px-3">5.85%</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Salary Increase Timings
                  </div>
                  <div className="text-right font-mono py-2 px-3">1-Apr-24</div>
                  <div className="text-right font-mono py-2 px-3">1-Apr-23</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700 bg-yellow-50 py-2 px-3 rounded">
                    Duration (Years)
                  </div>
                  <div className="text-right font-mono bg-red-100 py-2 px-3 rounded font-bold">
                    6.75
                  </div>
                  <div className="text-right font-mono py-2 px-3">9.85</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Withdrawal Rate
                  </div>
                  <div className="text-right font-mono py-2 px-3">Moderate</div>
                  <div className="text-right font-mono py-2 px-3">Moderate</div>
                </div>

                <div className="grid grid-cols-3 gap-4 py-2">
                  <div className="font-medium text-slate-700">
                    Mortality Rates
                  </div>
                  <div className="text-right font-mono py-2 px-3">
                    SLIC 2001-05
                  </div>
                  <div className="text-right font-mono py-2 px-3">
                    SLIC 2001-05
                  </div>
                </div>
              </div>
            </div>

            {/* Final Totals */}
            <div className="grid grid-cols-3 gap-4 py-4 border-t-2 border-slate-300">
              <div></div>
              <div className="text-right font-mono font-bold text-lg bg-slate-200 py-3 px-4 rounded">
                1,041,799
              </div>
              <div className="text-right font-mono font-bold text-lg bg-slate-200 py-3 px-4 rounded">
                864,783
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
