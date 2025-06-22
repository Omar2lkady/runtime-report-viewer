
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import DataDetails from "./pages/DataDetails";
import Config from "./pages/Config";
import NotFound from "./pages/NotFound";
import AddConfig from "./pages/AddConfig";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <SidebarInset>
              <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                <SidebarTrigger className="-ml-1" />
              </header>
              <main className="flex-1 p-6">
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/users" element={<div className="p-6"><h1 className="text-2xl font-bold">Users</h1><p>Users page coming soon...</p></div>} />
                  <Route path="/companies" element={<div className="p-6"><h1 className="text-2xl font-bold">Companies</h1><p>Companies page coming soon...</p></div>} />
                  <Route path="/config" element={<Config />} />
                  <Route path="/products" element={<div className="p-6"><h1 className="text-2xl font-bold">Products</h1><p>Products page coming soon...</p></div>} />
                  <Route path="/data-details" element={<DataDetails />} />
                  <Route path="/master-assumption" element={<div className="p-6"><h1 className="text-2xl font-bold">Master Assumption</h1><p>Master assumption page coming soon...</p></div>} />
                  <Route path="/assumption-set" element={<div className="p-6"><h1 className="text-2xl font-bold">Assumption Set</h1><p>Assumption set page coming soon...</p></div>} />
                  <Route path="/runtime" element={<Index />} />
                  <Route path="/add-config" element={<AddConfig />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </SidebarInset>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
