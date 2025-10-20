
"use client";

import Link from 'next/link';
import { UnicornLogo } from '@/components/logo';
import { BarChart, Euro, Globe } from 'lucide-react';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/language-switcher';
import { CtaButton } from '@/components/ui/CtaButton';
import { useLanguage } from '@/context/language-context';
import type { TranslationKeys } from '@/lib/translations';
import { HomeTabsWrapper } from './home-tabs-wrapper';


export function HomePageClient() {
  const { t } = useLanguage();

  const stats = [
    {
      icon: Globe,
      value: '100 mld. USD',
      labelKey: 'global_market',
    },
    {
      icon: BarChart,
      value: '3 mld. Kč',
      labelKey: 'czech_market',
    },
    {
      icon: Euro,
      value: '50 mil. €',
      labelKey: 'slovak_market',
    },
  ];

const businessModelItems = [
    { titleKey: 'business_item1_title', descriptionKey: 'business_item1_desc' },
    { titleKey: 'business_item2_title', descriptionKey: 'business_item2_desc' },
    { titleKey: 'business_item3_title', descriptionKey: 'business_item3_desc' },
    { titleKey: 'business_item4_title', descriptionKey: 'business_item4_desc' },
    { titleKey: 'business_item5_title', descriptionKey: 'business_item5_desc' }
];

const legalAspectsKeys: ('legal_item1' | 'legal_item2' | 'legal_item3' | 'legal_item4' | 'legal_item5')[] = [
    'legal_item1',
    'legal_item2',
    'legal_item3',
    'legal_item4',
    'legal_item5',
];

const structureKeys: ('structure_item1' | 'structure_item2' | 'structure_item3' | 'structure_item4' | 'structure_item5')[] = [
    'structure_item1',
    'structure_item2',
    'structure_item3',
    'structure_item4',
    'structure_item5',
];

const conceptKeys: ('concept_item1' | 'concept_item2' | 'concept_item3' | 'concept_item4' | 'concept_item5')[] = [
    'concept_item1',
    'concept_item2',
    'concept_item3',
    'concept_item4',
    'concept_item5',
];

const marketKeys: ('market_global' | 'market_cz' | 'market_sk' | 'market_trend')[] = [
    'market_global',
    'market_cz',
'market_sk',
    'market_trend'
];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <UnicornLogo className="h-8 w-8 text-primary" />
            <span className="font-headline text-lg font-semibold tracking-wide-3">EROTICON</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
             <LanguageSwitcher />
            <CtaButton asChild size="sm" className="bg-gold text-white hover:bg-gold/90">
                <Link href="/aboutus">About us</Link>
            </CtaButton>
            <CtaButton asChild size="sm">
                <Link href="/login">{t('home_login')}</Link>
            </CtaButton>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden text-center">
            <div className="absolute inset-0 z-0">
                 <Image 
                    src="/eroticon.png" 
                    alt="Eroticon Reality Show"
                    fill
                    className="object-cover opacity-30"
                    data-ai-hint="dark room lights"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            </div>
            <div className="container relative px-4 text-center">
                <h1 className="font-headline text-4xl font-bold tracking-wide-3 sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg [text-wrap:balance]">
                  {t('home_title')}
                </h1>
                <p className="mx-auto mt-4 max-w-[700px] text-lg font-semibold text-white/80 md:text-xl drop-shadow-md [text-wrap:balance]">
                  {t('home_subtitle')}
                </p>
            </div>
        </section>

        <section className="border-y bg-muted/50">
          <div className="container px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col items-center">
                  <stat.icon className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                  <p className="mt-4 font-headline text-3xl md:text-4xl font-bold tracking-wide-3">{stat.value}</p>
                  <p className="text-muted-foreground">{t(stat.labelKey as any)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full my-12 md:my-24 px-4 sm:px-6 lg:px-8 text-center bg-card-texture">
            <div className="container">
                <h2 className="font-headline text-2xl md:text-3xl font-bold tracking-wide-3 sm:text-4xl [text-wrap:balance]">{t('partner_search_title')}</h2>
                <p className="mt-4 font-headline text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-wide-3 text-primary">
                {t('partner_investment')}
                </p>
                <div className="mx-auto mt-8 md:mt-12 max-w-4xl rounded-lg border border-border bg-card p-6 md:p-8 shadow-lg text-center">
                    <p className="text-base md:text-lg text-foreground [text-wrap:balance]">
                    {t('formal_text')}
                    </p>
                    <p className="mt-6 text-lg md:text-xl font-bold text-primary [text-wrap:balance]">
                    {t('marketing_text')}
                    </p>
                </div>
            </div>
        </section>

        <section id="details" className="w-full bg-muted/50 py-12 md:py-24">
          <div className="container max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="mb-8 md:mb-12 font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide-3 text-center [text-wrap:balance]">{t('pack_title')}</h2>
             <HomeTabsWrapper
                t={t}
                businessModelItems={businessModelItems}
                legalAspectsKeys={legalAspectsKeys}
                structureKeys={structureKeys}
                conceptKeys={conceptKeys}
                marketKeys={marketKeys}
            />
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container flex flex-col items-center justify-center gap-4 py-10 md:h-24 md:flex-row md:py-0 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0 text-center">
            <UnicornLogo className="h-6 w-6 text-primary" />
             <p className="text-lg font-bold text-destructive tracking-wide-3 [text-wrap:balance]">
               © 2025 <a href="https://youh4ck3d.me" target="_blank" rel="noopener noreferrer" className="underline hover:text-red-400">H4CK3D|labs</a>. Autor: Filip Kosorin
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
