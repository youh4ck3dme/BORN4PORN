
"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { UnicornLogo } from '@/components/logo';
import { Users, Gamepad2, Brush, Target, Microscope, BrainCircuit } from 'lucide-react';
import Image from 'next/image';
import { LanguageSwitcher } from '@/components/language-switcher';
import { CtaButton } from '@/components/ui/CtaButton';
import { useLanguage } from '@/context/language-context';

export default function AboutUsPage() {
  const { t } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-background -m-4 sm:-m-6 lg:-m-8">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <UnicornLogo className="h-8 w-8 text-primary" />
            <span className="font-headline text-lg font-semibold tracking-wide-3">EROTICON</span>
          </Link>
          <div className="flex items-center gap-2 md:gap-4">
             <LanguageSwitcher />
            <CtaButton asChild size="sm">
                <Link href="/login">{t('home_login')}</Link>
            </CtaButton>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden text-center p-4">
            <div className="absolute inset-0 z-0">
                 <Image 
                    src="/eroticon.png" 
                    alt="Fantasy background"
                    fill
                    className="object-cover opacity-30"
                    data-ai-hint="fantasy landscape dark"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"></div>
            </div>
            <div className="container relative text-center px-4">
                <h1 className="font-headline text-4xl font-bold tracking-wide-3 sm:text-5xl md:text-6xl lg:text-7xl text-white drop-shadow-lg max-w-4xl mx-auto">
                  Unicorn & Gametusy: Nová éra interaktívnej erotickej zábavy
                </h1>
                <div className="mt-8 flex justify-center gap-4">
                    <CtaButton asChild size="default">
                        <Link href="#discover">Objavte Projekt</Link>
                    </CtaButton>
                    <CtaButton asChild size="default" variant="secondary">
                        <Link href="#investors">Pre Investorov</Link>
                    </CtaButton>
                </div>
            </div>
        </section>

        <section id="discover" className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
             <div className="container text-center">
                <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide-3 mb-12">Obsah Balíka: Unicorn & Gametusy</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start text-center">
                    <Card className="bg-muted/50 text-center">
                        <CardHeader className="items-center">
                            <CardTitle className="flex flex-col md:flex-row items-center gap-3 font-headline text-2xl md:text-3xl tracking-wide-3">
                                <Users className="h-8 w-8 text-primary"/>
                                Agentúra Unicorn: Ekosystém pre Dospelých
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground text-center">
                            <p className="max-w-prose mx-auto">Unicorn je prelomová erotická personálna agentúra, ktorá vytvára profesionálny a bezpečný ekosystém. Spájame a zastrešujeme najzaujímavejšie tváre a talenty v odvetví:</p>
                            <ul className="list-none space-y-2 inline-block text-left">
                                <li>Performeri a Modeli</li>
                                <li>Tvorcovia Obsahu & Producenti</li>
                                <li>Entertaineri & Eskort</li>
                                <li>Online Talenty (Livechat, OF)</li>
                            </ul>
                        </CardContent>
                    </Card>
                     <Card className="bg-muted/50 text-center">
                        <CardHeader className="items-center">
                            <CardTitle className="flex flex-col md:flex-row items-center gap-3 font-headline text-2xl md:text-3xl tracking-wide-3">
                                 <Gamepad2 className="h-8 w-8 text-primary"/>
                                 Gametusy: Interaktívna Fantasy Séria
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 text-muted-foreground text-center">
                           <p className="max-w-prose mx-auto">GAMETUSY je vlajkový projekt – 18+ séria, ktorá spája filmovú kvalitu s hernou kultúrou. Nejde len o pasívne sledovanie; diváci sa stávajú spolutvorcami.</p>
                            <ul className="list-none space-y-2 inline-block text-left">
                                <li><strong>Interaktivita ako v hre:</strong> Diváci hlasujú a rozhodujú o ďalšom smerovaní príbehu.</li>
                                <li><strong>Gamifikácia zážitku:</strong> Členovia získavajú virtuálnu menu na hlasovanie.</li>
                                <li><strong>Komunita a Cosplay:</strong> Inšpirované hernými archetypmi a cosplay kultúrou.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>

        <section className="w-full bg-muted/50 min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="container max-w-6xl text-center">
                 <div className="mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl lg:text-5xl font-bold tracking-wide-3">Branding & Vizuálna Identita</h2>
                    <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-lg">
                        Názov "Unicorn" evokuje jedinečnosť a fantáziu. Naša vizuálna identita je navrhnutá tak, aby bola provokatívna, no zároveň signalizovala profesionalitu, prémiovú kvalitu a dôveru.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="flex flex-col items-center">
                        <Brush className="h-10 w-10 text-primary" />
                        <h3 className="mt-4 font-headline text-2xl font-bold tracking-wide-3">Fantázia & Hravosť</h3>
                        <p className="mt-2 text-muted-foreground">Odkazujeme na mýtickú povahu mena. Značka sľubuje magickú, nevšednú skúsenosť a únik do sveta fantázie.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <Target className="h-10 w-10 text-primary" />
                        <h3 className="mt-4 font-headline text-2xl font-bold tracking-wide-3">Elegantný & Prémiový</h3>
                        <p className="mt-2 text-muted-foreground">Minimalistická a luxusná estetika signalizuje exkluzivitu a profesionalitu, čím uisťuje partnerov aj talenty.</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <BrainCircuit className="h-10 w-10 text-primary" />
                        <h3 className="mt-4 font-headline text-2xl font-bold tracking-wide-3">Techno-Herné Spojenie</h3>
                        <p className="mt-2 text-muted-foreground">Moderné herné prvky a neónová estetika odrážajú spojenie technológie a fantázie, oslovujúce mladé publikum.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="investors" className="w-full min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center text-center">
                    <div className="flex flex-col items-center">
                         <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-wide-3">Plán & Budúcnosť Projektu</h2>
                         <p className="mt-4 text-muted-foreground md:text-lg max-w-prose">Gametusy je len začiatok. Naša stratégia je postavená na inováciách a expanzii. Plánujeme rozšíriť našu produkciu do ďalších žánrov (sci-fi, horor) a neustále posúvať hranice interaktívnej zábavy pre dospelých.</p>
                         <Card className="mt-6 bg-primary/10 border-primary text-center">
                             <CardHeader className="items-center">
                                 <CardTitle className="flex flex-col md:flex-row items-center gap-3 font-headline text-xl md:text-2xl tracking-wide-3">
                                    <Microscope className="h-8 w-8 text-primary"/>
                                    Inovácia: Warhol 4DX
                                </CardTitle>
                             </CardHeader>
                             <CardContent>
                                 <p className="text-muted-foreground max-w-prose mx-auto">Našou najväčšou ambíciou je "Warhol 4DX" – plne imerzívny, multizmyslový zážitok. Nejde len o sledovanie, ale o cítenie. Predstavte si 360° VR filmy, haptickú odozvu a živé predstavenia, kde sa stierajú hranice medzi divákom a dejom. Je to budúcnosť, kde sa umenie, technológia a erotika spájajú do jedného dychberúceho celku.</p>
                             </CardContent>
                         </Card>
                    </div>
                     <div className="flex flex-col items-center">
                        <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-wide-3">Trhový Potenciál: Prečo Gametusy Funguje</h2>
                        <p className="mt-4 text-muted-foreground md:text-lg max-w-prose">Gametusy nie je len kreatívny experiment; je to produkt postavený na reálnom dopyte. Herná kultúra a erotika sa už dávno prepojili. Postavy z videohier ako Lara Croft alebo postavy z Resident Evil a Nintenda patria medzi najvyhľadávanejšie na stránkach pre dospelých. My tento dopyt transformujeme na prémiový, interaktívny zážitok, kde fanúšikovia môžu konečne ovplyvniť osud svojich obľúbených archetypov.</p>
                    </div>
                </div>
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
