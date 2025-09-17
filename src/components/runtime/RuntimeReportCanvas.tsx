import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download } from "lucide-react";
import { DisclosureReport } from "@/components/reports/DisclosureReport";
import { OtherComprehensiveReport } from "@/components/reports/OtherComprehensiveReport";
import { MaturityProfileReport } from "@/components/reports/MaturityProfileReport";
import { SensitivityAnalysisReport } from "@/components/reports/SensitivityAnalysisReport";

interface RuntimeReportCanvasProps {
  activeSection: string;
  selectedDate: string;
  selectedCurrency: string;
  selectedCompany: string;
}

const ReportSection = ({ 
  id, 
  title, 
  subtitle, 
  children, 
  onExport 
}: { 
  id: string;
  title: string;
  subtitle: string;
  children: React.ReactNode;
  onExport: () => void;
}) => (
  <section data-section={id} className="scroll-mt-20">
    <Card className="mb-8">
      <CardHeader className="border-b bg-muted/30">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-xl font-bold text-foreground">
              {title}
            </CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              {subtitle}
            </p>
          </div>
          <Button variant="outline" size="sm" onClick={onExport}>
            <Download className="h-4 w-4 mr-2" />
            Export Section
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {children}
      </CardContent>
    </Card>
  </section>
);

export const RuntimeReportCanvas = ({
  activeSection,
  selectedDate,
  selectedCurrency,
  selectedCompany,
}: RuntimeReportCanvasProps) => {
  const handleSectionExport = (sectionId: string) => {
    console.log(`Exporting ${sectionId} section...`);
  };

  return (
    <div className="p-6 space-y-8">
      <ReportSection
        id="disclosure"
        title={`${selectedCompany} — Gratuity Scheme Valuation as at December 31, 2021`}
        subtitle="IAS 19 (Revised 2011) Disclosure Report"
        onExport={() => handleSectionExport("disclosure")}
      >
        <DisclosureReport />
      </ReportSection>

      <ReportSection
        id="oci"
        title="Other Comprehensive Income Analysis"
        subtitle="OCI components and movements analysis"
        onExport={() => handleSectionExport("oci")}
      >
        <OtherComprehensiveReport />
      </ReportSection>

      <ReportSection
        id="maturity"
        title="Maturity Profile Analysis"
        subtitle="Benefit payment timing and distribution analysis"
        onExport={() => handleSectionExport("maturity")}
      >
        <MaturityProfileReport />
      </ReportSection>

      <ReportSection
        id="sensitivity"
        title="Sensitivity Analysis"
        subtitle="Impact analysis of key assumption changes"
        onExport={() => handleSectionExport("sensitivity")}
      >
        <SensitivityAnalysisReport />
      </ReportSection>
    </div>
  );
};