import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronLeft, FileText, PieChart, BarChart3, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface RuntimeSidebarProps {
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

const sidebarSections = [
  {
    id: "disclosure",
    label: "Disclosure",
    sublabel: "IAS 19",
    icon: FileText,
  },
  {
    id: "oci",
    label: "Other Comprehensive Income",
    sublabel: "OCI Analysis",
    icon: PieChart,
  },
  {
    id: "maturity",
    label: "Maturity",
    sublabel: "Profile Analysis",
    icon: BarChart3,
  },
  {
    id: "sensitivity",
    label: "Sensitivity Analysis",
    sublabel: "Risk Assessment",
    icon: TrendingUp,
  },
];

export const RuntimeSidebar = ({ 
  activeSection, 
  onSectionClick, 
  isCollapsed, 
  onToggleCollapse 
}: RuntimeSidebarProps) => {
  return (
    <aside 
      className={cn(
        "sticky top-[73px] h-[calc(100vh-73px)] bg-card border-r transition-all duration-300",
        isCollapsed ? "w-16" : "w-[280px]"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <h3 className="font-semibold text-card-foreground">Report Sections</h3>
        )}
        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleCollapse}
          className="h-8 w-8 p-0"
        >
          <ChevronLeft 
            className={cn(
              "h-4 w-4 transition-transform",
              isCollapsed && "rotate-180"
            )} 
          />
        </Button>
      </div>
      
      <ScrollArea className="flex-1">
        <nav className="p-2 space-y-1">
          {sidebarSections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <Button
                key={section.id}
                variant={isActive ? "secondary" : "ghost"}
                className={cn(
                  "w-full justify-start h-auto p-3 text-left",
                  isActive && "bg-accent text-accent-foreground",
                  isCollapsed && "px-2"
                )}
                onClick={() => onSectionClick(section.id)}
              >
                <Icon className={cn("h-5 w-5 flex-shrink-0", !isCollapsed && "mr-3")} />
                {!isCollapsed && (
                  <div className="flex flex-col min-w-0">
                    <span className="font-medium text-sm truncate">
                      {section.label}
                    </span>
                    <span className="text-xs text-muted-foreground truncate">
                      {section.sublabel}
                    </span>
                  </div>
                )}
              </Button>
            );
          })}
        </nav>
      </ScrollArea>
    </aside>
  );
};