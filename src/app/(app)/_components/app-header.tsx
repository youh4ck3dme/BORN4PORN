
"use client";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { UnicornLogo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { CtaButton } from "@/components/ui/CtaButton";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6 md:hidden">
        <SidebarTrigger asChild>
             <Button size="icon" variant="outline">
                <UnicornLogo className="h-5 w-5" />
                <span className="sr-only">Toggle Menu</span>
            </Button>
        </SidebarTrigger>
        <div className="flex-1" />
        <LanguageSwitcher />
        <CtaButton asChild size="sm" className="bg-gold text-white hover:bg-gold/90">
            <Link href="/aboutus">About us</Link>
        </CtaButton>
    </header>
  );
}

    