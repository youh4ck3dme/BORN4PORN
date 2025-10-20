
"use client";

import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/context/language-context";

const archiveVideos = [
  {
    id: 1,
    title: "Season 1: Episode 4 - The Twist",
    description: "A shocking turn of events leaves the contestants speechless.",
    thumbnail: "https://picsum.photos/seed/eroticon-thumb4/400/225",
    imageHint: "couple portrait",
    duration: "45:12",
    rating: 4.8,
    isBonus: false
  },
  {
    id: 2,
    title: "BONUS: Behind the Scenes",
    description: "Uncut footage and interviews with the cast.",
    thumbnail: "https://picsum.photos/seed/eroticon-thumb5/400/225",
    imageHint: "dance floor",
    duration: "22:30",
    rating: 4.9,
    isBonus: true
  },
    {
    id: 3,
    title: "Season 1: Episode 3 - The Challenge",
    description: "Contestants face their most difficult challenge yet.",
    thumbnail: "https://picsum.photos/seed/eroticon-thumb3/400/225",
    imageHint: "luxury bedroom",
    duration: "52:40",
    rating: 4.5,
    isBonus: false
  },
  {
    id: 4,
    title: "Season 1: Episode 2 - First Impressions",
    description: "Sparks fly as the contestants get to know each other.",
    thumbnail: "https://picsum.photos/seed/eroticon-thumb2/400/225",
    imageHint: "neon lights",
    duration: "48:15",
    rating: 4.2,
    isBonus: false
  },
  {
    id: 5,
    title: "Season 1: Episode 1 - The Arrival",
    description: "Meet the cast of the first-ever Eroticon reality show.",
    thumbnail: "https://picsum.photos/seed/eroticon-thumb1/400/225",
    imageHint: "people party",
    duration: "55:01",
    rating: 4.7,
    isBonus: false
  },
    {
    id: 6,
    title: "BONUS: Cast Auditions",
    description: "See the hilarious and emotional audition tapes.",
    thumbnail: "https://picsum.photos/seed/eroticon-thumb6/400/225",
    imageHint: "abstract fire",
    duration: "35:18",
    rating: 4.6,
    isBonus: true
  },
];

export default function ArchivePage() {
  const { t } = useLanguage();
  
  return (
    <div className="space-y-6 md:space-y-8">
      <h1 className="text-3xl font-headline font-bold md:text-4xl">{t('content_archive')}</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
        {archiveVideos.map((video) => (
          <Card key={video.id} className="flex flex-col overflow-hidden group">
            <CardHeader className="p-0 relative">
              <Link href="#">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  width={400}
                  height={225}
                  quality={100}
                  className="aspect-video object-cover w-full group-hover:scale-105 transition-transform duration-300"
                  data-ai-hint={video.imageHint}
                />
              </Link>
              {video.isBonus && <Badge variant="destructive" className="absolute top-2 right-2">Bonus</Badge>}
               <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 text-xs rounded-md flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {video.duration}
                </div>
            </CardHeader>
            <CardContent className="p-4 flex-1">
              <CardTitle className="text-lg font-semibold leading-snug hover:text-primary transition-colors">
                <Link href="#">{video.title}</Link>
              </CardTitle>
              <p className="text-muted-foreground text-sm mt-2 line-clamp-2">{video.description}</p>
            </CardContent>
            <CardFooter className="p-4 flex justify-between items-center mt-auto">
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span>{video.rating}</span>
                </div>
              <Button asChild variant="secondary" size="sm">
                <Link href="#">{t('watch_now')}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
