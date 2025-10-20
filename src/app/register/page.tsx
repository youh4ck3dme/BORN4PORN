
"use client";

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { UnicornLogo } from "@/components/logo"
import Image from "next/image"
import { LanguageSwitcher } from "@/components/language-switcher"
import { CtaButton } from "@/components/ui/CtaButton";

export default function RegisterPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <UnicornLogo className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold font-headline tracking-wide-3">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Max" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Robinson" required />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" />
            </div>
            <Button type="submit" className="w-full" asChild>
                  <Link href="/dashboard">Create an account</Link>
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Crypto Wallet
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
         <Image 
            src="/eroticon.png" 
            alt="Eroticon Background"
            fill
            className="object-cover opacity-50"
            data-ai-hint="dark room lights"
            priority
        />
        <div className="absolute top-4 right-4 z-20 flex items-center gap-4">
          <LanguageSwitcher />
           <CtaButton asChild size="sm" className="bg-gold text-white hover:bg-gold/90">
                <Link href="/aboutus">About us</Link>
            </CtaButton>
        </div>
      </div>
    </div>
  )
}
