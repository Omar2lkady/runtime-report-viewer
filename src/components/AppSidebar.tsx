
import { Home, Users, Building2, Settings, Package, Database, Calendar, FileText, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: Home },
  { title: "Users", url: "/users", icon: Users },
  { title: "Companies", url: "/companies", icon: Building2 },
  { title: "Config", url: "/config", icon: Settings },
  { title: "Products", url: "/products", icon: Package },
  { title: "Manage datasets", url: "/data-details", icon: Database },
  { title: "Master assumption", url: "/master-assumption", icon: Calendar },
  { title: "Assumption set", url: "/assumption-set", icon: FileText },
  { title: "Runtime", url: "/runtime", icon: Clock },
];

export function AppSidebar() {
  return (
    <Sidebar className="w-64 border-r border-gray-200">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-900">End of service benefits</h2>
      </div>
      <SidebarContent className="p-0">
        <SidebarGroup className="p-0">
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 p-4">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="p-0">
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors ${
                          isActive 
                            ? "bg-green-100 text-green-700" 
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5 flex-shrink-0" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
