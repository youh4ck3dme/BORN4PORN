
"use client";

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { useLanguage } from "@/context/language-context";

export default function AccountPage() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-headline font-bold tracking-wide-3">{t('account_settings_title')}</h1>
        <p className="text-muted-foreground">{t('account_settings_desc')}</p>
      </div>
      <Separator />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
            <Card>
            <CardHeader>
                <CardTitle>{t('profile_info')}</CardTitle>
                <CardDescription>{t('profile_info_desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="firstName">{t('first_name')}</Label>
                    <Input id="firstName" defaultValue="John" />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="lastName">{t('last_name')}</Label>
                    <Input id="lastName" defaultValue="Doe" />
                </div>
                </div>
                <div className="space-y-2">
                <Label htmlFor="email">{t('email')}</Label>
                <Input id="email" type="email" defaultValue="john.doe@example.com" disabled />
                </div>
            </CardContent>
            <CardFooter>
                <Button>{t('save_changes')}</Button>
            </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <CardTitle>{t('notifications')}</CardTitle>
                <CardDescription>{t('notifications_desc')}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                        <Switch id="live-now" defaultChecked />
                        <Label htmlFor="live-now" className="cursor-pointer">{t('live_now_alerts')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="new-content" defaultChecked />
                        <Label htmlFor="new-content" className="cursor-pointer">{t('new_content_added')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="promotions" />
                        <Label htmlFor="promotions" className="cursor-pointer">{t('promotions')}</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Switch id="casting-calls" />
                        <Label htmlFor="casting-calls" className="cursor-pointer">{t('new_casting_calls')}</Label>
                    </div>
                </CardContent>
                 <CardFooter>
                    <Button>{t('save_preferences')}</Button>
                </CardFooter>
            </Card>
        </div>
        
        <div className="lg:col-span-1">
            <Card>
            <CardHeader>
                <CardTitle>{t('subscription')}</CardTitle>
                <CardDescription>{t('subscription_desc')}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-medium">{t('current_plan')}: <span className="text-primary font-semibold">{t('all_access')}</span></h4>
                    <p className="text-sm text-muted-foreground">{t('renews_on')} July 30, 2024.</p>
                </div>
                <Separator />
                <div className="space-y-3">
                    <h4 className="font-medium">{t('payment_methods')}</h4>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                        <p className="text-sm font-medium">Visa **** 4242</p>
                        <Button variant="outline" size="sm">{t('update')}</Button>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border p-3">
                        <p className="text-sm font-medium">Crypto 0x...1234</p>
                        <Button variant="outline" size="sm">{t('change')}</Button>
                    </div>
                     <Button variant="outline" className="w-full">{t('add_payment_method')}</Button>
                </div>
            </CardContent>
            <CardFooter className="flex-col gap-2 pt-4">
                <Button variant="secondary" className="w-full">{t('upgrade_plan')}</Button>
                 <Button variant="link" className="p-0 h-auto text-destructive hover:text-red-400 text-sm">{t('cancel_subscription')}</Button>
            </CardFooter>
            </Card>
        </div>
      </div>
    </div>
  )
}
