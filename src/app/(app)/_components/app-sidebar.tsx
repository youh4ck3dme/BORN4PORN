
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
  useSidebar
} from "@/components/ui/sidebar";
import { UnicornLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import {
  LayoutGrid,
  Clapperboard,
  Archive,
  Users,
  Wallet,
  User,
  Info,
  Shield,
  Badge,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useLanguage } from "@/context/language-context";


export function AppSidebar() {
  const pathname = usePathname();
  const { open } = useSidebar();
  const { t } = useLanguage();

  const menuItems = [
    { href: "/dashboard", label: t('dashboard'), icon: LayoutGrid },
    { href: "/live", label: t('live'), icon: Clapperboard },
    { href: "/archive", label: t('archive'), icon: Archive },
    { href: "/pricing", label: t('pricing'), icon: Wallet },
    { href: "/casting", label: t('casting'), icon: Users },
    { href: "/aboutus", label: "About us", icon: Info },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="h-14 flex items-center p-2">
        <Button variant="ghost" className="h-10 p-2" asChild>
          <Link href="/">
            <UnicornLogo className="size-8 text-primary" />
            <span className="sr-only">Eroticon</span>
          </Link>
        </Button>
        <div className="flex-1" />
        <SidebarTrigger className="hidden md:flex" />
      </SidebarHeader>
      <SidebarContent className="flex-1 p-2">
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.href}>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))}
                tooltip={{ children: item.label }}
              >
                <Link href={item.href}>
                  <item.icon />
                  <span>{item.label}</span>
                  {item.label === t('live') && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-600 animate-pulse">
                    </Badge> }
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        
      </SidebarContent>
      <SidebarFooter className="border-t p-2">
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={pathname.startsWith('/account')} tooltip={{children: t('my_account')}}>
                    <Link href="/account">
                         <Avatar className="size-7">
                            <AvatarImage src="https://picsum.photos/seed/user-avatar/100/100" data-ai-hint="person face" />
                            <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <span>{t('my_account')}</span>
                    </Link>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

    
