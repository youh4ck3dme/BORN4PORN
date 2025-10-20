
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

export default function LoginPage() {
  return (
    <div className="w-full lg:grid lg:min-h-screen lg:grid-cols-2 xl:min-h-screen">
      <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
             <UnicornLogo className="mx-auto h-12 w-12 text-primary" />
            <h1 className="text-3xl font-bold font-headline tracking-wide-3">Login</h1>
            <p className="text-balance text-muted-foreground">
              Enter your email below to login to your account
            </p>
          </div>
          <div className="grid gap-4">
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
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
                <Link
                  href="#"
                  className="ml-auto inline-block text-sm underline"
                >
                  Forgot your password?
                </Link>
              </div>
              <Input id="password" type="password" required />
            </div>
            <Button type="submit" className="w-full" asChild>
              <Link href="/dashboard">Login</Link>
            </Button>
            <Button variant="outline" className="w-full">
              Login with Crypto Wallet
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="underline">
              Sign up
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
            quality={100}
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
