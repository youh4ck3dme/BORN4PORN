
"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CheckCircle } from 'lucide-react';
import type { TranslationKeys } from '@/lib/translations';

type HomeTabsProps = {
    t: (key: TranslationKeys) => string;
    businessModelItems: { titleKey: string; descriptionKey: string }[];
    legalAspectsKeys: string[];
    structureKeys: string[];
    conceptKeys: string[];
    marketKeys: string[];
}

export function HomeTabs({ t, businessModelItems, legalAspectsKeys, structureKeys, conceptKeys, marketKeys }: HomeTabsProps) {
    return (
        <Tabs defaultValue="summary" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:flex lg:flex-wrap lg:w-auto h-auto justify-center mx-auto">
                <TabsTrigger value="summary">{t('tab_summary')}</TabsTrigger>
                <TabsTrigger value="market">{t('tab_market')}</TabsTrigger>
                <TabsTrigger value="concept">{t('tab_concept')}</TabsTrigger>
                <TabsTrigger value="structure">{t('tab_structure')}</TabsTrigger>
                <TabsTrigger value="business">{t('tab_business_model')}</TabsTrigger>
                <TabsTrigger value="legal">{t('tab_legal')}</TabsTrigger>
                <TabsTrigger value="finance">{t('tab_finance')}</TabsTrigger>
            </TabsList>
            
            <Card className="mt-4">
            <CardContent className="pt-6">
                <TabsContent value="summary" className="text-center">
                <h3 className="font-headline text-xl md:text-2xl font-semibold mb-4 tracking-wide-3">{t('summary_title')}</h3>
                <p className="text-muted-foreground mb-4 text-sm md:text-base">{t('summary_project')}</p>
                <p className="max-w-prose mx-auto text-sm md:text-base">{t('summary_desc')}</p>
                <p className="mt-4 font-semibold text-primary text-sm md:text-base">{t('summary_goal')}</p>
                </TabsContent>

                <TabsContent value="market" className="text-center">
                    <h3 className="font-headline text-xl md:text-2xl font-semibold mb-4 tracking-wide-3">{t('market_analysis_title')}</h3>
                <ul className="space-y-2 list-none max-w-prose mx-auto text-sm md:text-base">
                    {marketKeys.map(key => <li key={key}>{t(key as TranslationKeys)}</li>)}
                </ul>
                </TabsContent>

                <TabsContent value="concept" className="text-center">
                    <h3 className="font-headline text-xl md:text-2xl font-semibold mb-4 tracking-wide-3">{t('concept_title')}</h3>
                <ul className="space-y-2 list-none max-w-prose mx-auto text-sm md:text-base">
                    {conceptKeys.map(key => <li key={key}>{t(key as TranslationKeys)}</li>)}
                </ul>
                </TabsContent>

                <TabsContent value="structure" className="text-center">
                    <h3 className="font-headline text-xl md:text-2xl font-semibold mb-4 tracking-wide-3">{t('structure_title')}</h3>
                    <ol className="space-y-2 list-decimal list-inside max-w-prose mx-auto text-sm md:text-base">
                        {structureKeys.map(key => <li key={key}>{t(key as TranslationKeys)}</li>)}
                    </ol>
                </TabsContent>

                <TabsContent value="business" className="text-center">
                    <h3 className="font-headline text-xl md:text-2xl font-semibold mb-4 tracking-wide-3">{t('business_title')}</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto text-sm md:text-base">
                    {businessModelItems.map(item => (
                        <div key={item.titleKey}>
                            <h4 className="font-semibold text-primary">{t(item.titleKey as TranslationKeys)}</h4>
                            <p className="text-muted-foreground">{t(item.descriptionKey as TranslationKeys)}</p>
                        </div>
                    ))}
                    </div>
                </TabsContent>
                
                <TabsContent value="legal" className="text-center">
                    <h3 className="font-headline text-xl md:text-2xl font-semibold mb-4 tracking-wide-3">{t('legal_title')}</h3>
                    <ul className="space-y-3 list-none max-w-prose mx-auto text-sm md:text-base inline-block text-left">
                    {legalAspectsKeys.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5"/>
                            <span>{t(item as TranslationKeys)}</span>
                        </li>
                    ))}
                    </ul>
                </TabsContent>
                
                <TabsContent value="finance" className="text-center">
                    <h3 className="font-headline text-xl md:text-2xl font-semibold mb-4 tracking-wide-3">{t('finance_title')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto text-sm md:text-base">
                    <div className="text-center">
                        <h4 className="font-semibold text-destructive mb-2">{t('finance_costs_title')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground inline-block text-left">
                            <li>{t('finance_costs_item1')}</li>
                            <li>{t('finance_costs_item2')}</li>
                            <li>{t('finance_costs_item3')}</li>
                            <li>{t('finance_costs_item4')}</li>
                        </ul>
                            <p className="font-bold mt-2">{t('finance_costs_total')}</p>
                    </div>
                        <div className="text-center">
                        <h4 className="font-semibold text-green-500 mb-2">{t('finance_revenue_title')}</h4>
                        <ul className="list-disc list-inside space-y-1 text-muted-foreground inline-block text-left">
                            <li>{t('finance_revenue_item1')}</li>
                            <li>{t('finance_revenue_item2')}</li>
                            <li>{t('finance_revenue_item3')}</li>
                        </ul>
                        <p className="font-bold mt-2">{t('finance_revenue_total')}</p>
                    </div>
                    </div>
                    <div className="mt-8 text-center">
                    <p className="font-headline text-xl md:text-2xl font-bold tracking-wide-3">{t('finance_profit_title')}</p>
                    <p className="font-headline text-3xl md:text-4xl font-extrabold text-primary tracking-wide-3">{t('finance_profit_amount')}</p>

                    </div>
                </TabsContent>

            </CardContent>
            </Card>
        </Tabs>
    );
}
