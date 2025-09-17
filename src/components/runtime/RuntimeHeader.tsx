import { Button } from "@/components/ui/button";
import { Download, HelpCircle, ChevronRight } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

interface RuntimeHeaderProps {
  selectedCompany: string;
  onExport: () => void;
  onViewDataDetails: () => void;
}

export const RuntimeHeader = ({ selectedCompany, onExport, onViewDataDetails }: RuntimeHeaderProps) => {
  return (
    <header className="sticky top-0 z-30 bg-background border-b px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left: App name + Breadcrumb */}
        <div className="flex items-center space-x-3">
          <h1 className="text-lg font-semibold text-foreground">
            End of service benefits
          </h1>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Dashboard</span>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Runtime Output</span>
        </div>

        {/* Center: Screen title */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h2 className="text-xl font-bold text-foreground">Runtime Output</h2>
        </div>

        {/* Right: Action buttons */}
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={onViewDataDetails}>
            View Data Details
          </Button>
          <Button onClick={onExport} className="flex items-center space-x-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <HelpCircle className="h-4 w-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Get help with Runtime Output</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </header>
  );
};