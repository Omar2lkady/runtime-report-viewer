import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, DollarSign, Building2 } from "lucide-react";

interface RuntimeContextBarProps {
  selectedDate: string;
  selectedCurrency: string;
  selectedCompany: string;
  onDateChange: (date: string) => void;
  onCurrencyChange: (currency: string) => void;
  onCompanyChange: (company: string) => void;
}

export const RuntimeContextBar = ({
  selectedDate,
  selectedCurrency,
  selectedCompany,
  onDateChange,
  onCurrencyChange,
  onCompanyChange,
}: RuntimeContextBarProps) => {
  return (
    <div className="px-6 py-4 bg-muted/30 border-b">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-6">
          {/* Date Picker */}
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Period:</span>
            <Select value={selectedDate} onValueChange={onDateChange}>
              <SelectTrigger className="w-32">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="31-Dec-23">31-Dec-23</SelectItem>
                <SelectItem value="31-Dec-22">31-Dec-22</SelectItem>
                <SelectItem value="31-Dec-21">31-Dec-21</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Currency Selector */}
          <div className="flex items-center space-x-2">
            <DollarSign className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Currency:</span>
            <Select value={selectedCurrency} onValueChange={onCurrencyChange}>
              <SelectTrigger className="w-24">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="SAR">SAR</SelectItem>
                <SelectItem value="USD">USD</SelectItem>
                <SelectItem value="EUR">EUR</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Company Selector */}
          <div className="flex items-center space-x-2">
            <Building2 className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium text-foreground">Company:</span>
            <Select value={selectedCompany} onValueChange={onCompanyChange}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Cement Product">Cement Product</SelectItem>
                <SelectItem value="Steel Manufacturing">Steel Manufacturing</SelectItem>
                <SelectItem value="Chemical Industries">Chemical Industries</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="text-sm text-muted-foreground">
          Amounts in {selectedCurrency}
        </div>
      </div>
    </div>
  );
};