
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/language-context";

export default function PricingPage() {
    const { t } = useLanguage();

    const subscriptionFeatures = [
        t('feature_all_episodes'),
        t('feature_behind_the_scenes'),
        t('feature_uncensored'),
        t('feature_early_casting'),
        t('feature_cancel_anytime'),
    ];

    const ppvFeatures = [
        t('feature_watch_live'),
        t('feature_live_voting'),
        t('feature_24h_replay'),
    ];

    const seasonPassFeatures = [
        t('feature_all_season_episodes'),
        t('feature_all_ppv'),
        t('feature_best_value'),
    ]

    return (
        <div className="space-y-8 md:space-y-12">
            <div className="text-center">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold tracking-wide-3">{t('pricing_title')}</h1>
                <p className="text-muted-foreground mt-2 text-md sm:text-lg max-w-2xl mx-auto">{t('pricing_desc')}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-start max-w-7xl mx-auto">
                
                {/* Subscription Card */}
                <Card className="border-primary border-2 shadow-lg shadow-primary/10 relative flex flex-col h-full">
                     <Badge variant="default" className="absolute -top-3 left-1/2 -translate-x-1/2">{t('most_popular')}</Badge>
                    <CardHeader className="text-center pt-8">
                        <CardTitle className="text-2xl md:text-3xl font-headline tracking-wide-3">{t('all_access')}</CardTitle>
                        <CardDescription>{t('all_access_desc')}</CardDescription>
                        <div className="text-4xl md:text-5xl font-bold mt-4">€19.99<span className="text-base md:text-lg font-normal text-muted-foreground">{t('per_month')}</span></div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <ul className="space-y-3">
                            {subscriptionFeatures.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 shrink-0"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 mt-auto pt-6">
                        <Button className="w-full" size="lg">{t('subscribe_now')}</Button>
                        <Button variant="outline" className="w-full">{t('subscribe_with_crypto')}</Button>
                    </CardFooter>
                </Card>

                {/* PPV Card */}
                <Card className="flex flex-col h-full">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl md:text-3xl font-headline tracking-wide-3">{t('ppv')}</CardTitle>
                        <CardDescription>{t('ppv_desc')}</CardDescription>
                        <div className="text-4xl md:text-5xl font-bold mt-4">€29.99<span className="text-base md:text-lg font-normal text-muted-foreground">{t('per_episode')}</span></div>
                    </CardHeader>
                    <CardContent className="flex-1">
                         <ul className="space-y-3">
                            {ppvFeatures.map(feature => (
                                <li key={feature} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 shrink-0"/>
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                    <CardFooter className="flex-col gap-2 mt-auto pt-6">
                        <Button className="w-full" size="lg" variant="secondary">{t('buy_episode')}</Button>
                        <Button variant="outline" className="w-full">{t('buy_with_crypto')}</Button>
                    </CardFooter>
                </Card>
                
                {/* Season Pass Card */}
                <Card className="flex flex-col h-full">
                    <CardHeader className="text-center">
                        <CardTitle className="text-2xl md:text-3xl font-headline tracking-wide-3">{t('season_pass')}</CardTitle>
                        <CardDescription>{t('season_pass_desc')}</CardDescription>
                        <div className="text-4xl md:text-5xl font-bold mt-4">€100<span className="text-base md:text-lg font-normal text-muted-foreground">{t('per_season')}</span></div>
                    </CardHeader>
                    <CardContent className="flex-1">
                        <ul className="space-y-3">
                            {seasonPassFeatures.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="h-5 w-5 text-primary mt-1 shrink-0"/>
                                    <span>{feature}</span>
                                </li>
                             ))}
                        </ul>
                    </CardContent>
                     <CardFooter className="flex-col gap-2 mt-auto pt-6">
                        <Button className="w-full" size="lg" variant="secondary">{t('buy_season_pass')}</Button>
                        <Button variant="outline" className="w-full">{t('buy_with_crypto')}</Button>
                    </CardFooter>
                </Card>

            </div>
        </div>
    );
}
