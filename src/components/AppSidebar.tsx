
import { Home, Users, Building2, Settings, Package, Database, Calendar, FileText, Clock } from "lucide-react";
import { NavLink } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
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
    <Sidebar className="w-64">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url}
                      className={({ isActive }) =>
                        isActive 
                          ? "bg-green-100 text-green-700 font-medium border-r-2 border-green-500" 
                          : "text-gray-600 hover:bg-gray-50"
                      }
                    >
                      <item.icon className="h-5 w-5" />
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
