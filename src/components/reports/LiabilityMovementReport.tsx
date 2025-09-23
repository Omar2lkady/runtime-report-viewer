import { Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function LiabilityMovementReport() {
  const handleExport = () => {
    // Export functionality will be implemented later
    console.log("Exporting Liability Movement Report...");
  };

  return (
    <Card className="w-full">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800">Liability Movement Report</h2>
            <p className="text-sm text-slate-600 mt-1">Movement in defined benefit obligation</p>
            <Badge variant="outline" className="mt-2">AS-15 Disclosure</Badge>
          </div>
          <Button onClick={handleExport} className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="font-bold text-slate-800 text-xl text-center border-b pb-2">Liability Movement</h3>
            
            <div className="overflow-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b-2 border-slate-300 bg-slate-50">
                    <TableHead className="text-center font-semibold text-slate-700 w-1/2">Particulars</TableHead>
                    <TableHead className="text-center font-semibold text-slate-700 w-1/6">Amount</TableHead>
                    <TableHead className="text-center font-semibold text-slate-700 w-1/6">Payables</TableHead>
                    <TableHead className="text-center font-semibold text-slate-700 w-1/6">Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-slate-200">
                    <TableCell className="font-medium text-slate-800 py-3">Present value of obligation - Opening</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">4,000,000</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">2,500</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">4,002,500</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200 bg-yellow-50">
                    <TableCell className="font-medium text-slate-800 py-3">Current Service Cost</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3 bg-yellow-100">286,966</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">286,966</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200">
                    <TableCell className="font-medium text-slate-800 py-3">Interest Cost</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">96,651</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">96,651</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200">
                    <TableCell className="font-medium text-slate-800 py-3">Benefits Paid</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">418,264</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">2,500</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">420,764</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200">
                    <TableCell className="font-medium text-slate-800 py-3">Transferred In</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">17,536</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">17,536</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200">
                    <TableCell className="font-medium text-slate-800 py-3">Transferred Out</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">(59,221)</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">(59,221)</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200">
                    <TableCell className="font-medium text-slate-800 py-3">Curtailment Impact</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200">
                    <TableCell className="font-medium text-slate-800 py-3">Past Service Cost</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200 bg-yellow-50">
                    <TableCell className="font-medium text-slate-800 py-3">Net Increase in Advances</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3 bg-yellow-100">25,753</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">25,753</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-slate-200 bg-yellow-50">
                    <TableCell className="font-medium text-slate-800 py-3">Actuarial (Gain) or Loss on obligation (Balancing Figure)</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3 bg-yellow-100">252,581</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">-</TableCell>
                    <TableCell className="text-right font-mono text-slate-700 py-3">252,581</TableCell>
                  </TableRow>
                  <TableRow className="border-b-2 border-slate-400 bg-slate-100 font-semibold">
                    <TableCell className="font-bold text-slate-800 py-3">Present value of obligation - Closing</TableCell>
                    <TableCell className="text-right font-mono font-bold text-slate-800 py-3">4,150,497</TableCell>
                    <TableCell className="text-right font-mono font-bold text-slate-800 py-3">-</TableCell>
                    <TableCell className="text-right font-mono font-bold text-slate-800 py-3">4,150,497</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}