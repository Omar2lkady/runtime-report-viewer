import { useState, useEffect } from "react";
import { RuntimeHeader } from "@/components/runtime/RuntimeHeader";
import { RuntimeSidebar } from "@/components/runtime/RuntimeSidebar";
import { RuntimeKPICards } from "@/components/runtime/RuntimeKPICards";
import { RuntimeContextBar } from "@/components/runtime/RuntimeContextBar";
import { RuntimeReportCanvas } from "@/components/runtime/RuntimeReportCanvas";

const Runtime = () => {
  const [activeSection, setActiveSection] = useState("disclosure");
  const [selectedDate, setSelectedDate] = useState("31-Dec-23");
  const [selectedCurrency, setSelectedCurrency] = useState("SAR");
  const [selectedCompany, setSelectedCompany] = useState("Cement Product");
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Handle scroll-spy for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-section]');
      let currentSection = activeSection;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.getAttribute('data-section') || activeSection;
        }
      });
      
      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-background">
      <RuntimeHeader
        selectedCompany={selectedCompany}
        onExport={() => console.log("Exporting...")}
        onViewDataDetails={() => console.log("View data details...")}
      />
      
      <div className="flex">
        <RuntimeSidebar
          activeSection={activeSection}
          onSectionClick={handleSectionClick}
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
        />
        
        <main className="flex-1 min-h-screen">
          <div className="sticky top-0 z-20 bg-background border-b">
            <RuntimeKPICards />
            <RuntimeContextBar
              selectedDate={selectedDate}
              selectedCurrency={selectedCurrency}
              selectedCompany={selectedCompany}
              onDateChange={setSelectedDate}
              onCurrencyChange={setSelectedCurrency}
              onCompanyChange={setSelectedCompany}
            />
          </div>
          
          <RuntimeReportCanvas
            activeSection={activeSection}
            selectedDate={selectedDate}
            selectedCurrency={selectedCurrency}
            selectedCompany={selectedCompany}
          />
        </main>
      </div>
    </div>
  );
};

export default Runtime;