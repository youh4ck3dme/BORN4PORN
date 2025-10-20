
"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, ThumbsDown, Send, Gift, Play } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/context/language-context";
import { ScrollArea } from "@/components/ui/scroll-area";

const ChatMessage = ({ name, message, avatar, isUser }: { name: string; message: string; avatar: string, isUser?: boolean }) => (
    <div className={`flex items-start gap-2.5 ${isUser ? 'justify-end' : ''}`}>
        {!isUser && (
            <Avatar className="h-8 w-8 border">
                <AvatarImage src={avatar} data-ai-hint="person face" />
                <AvatarFallback>{name.substring(0, 2)}</AvatarFallback>
            </Avatar>
        )}
        <div className={`rounded-lg p-3 max-w-[85%] text-sm ${isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'}`}>
            {!isUser && <p className="font-semibold mb-1 text-primary">{name}</p>}
            <p>{message}</p>
        </div>
    </div>
);

export default function LivePage() {
    const { t } = useLanguage();

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-8 h-full">
            <div className="lg:col-span-2 flex flex-col gap-6">
                <Card className="overflow-hidden">
                    <div className="relative aspect-video bg-black flex items-center justify-center">
                        <Image src="/eroticon.png" fill alt="Live Stream" className="object-cover opacity-30" data-ai-hint="dark room lights" />
                         <div className="relative z-10 text-center p-4">
                            <h2 className="text-2xl sm:text-4xl font-headline font-bold text-white drop-shadow-lg tracking-wide-3">{t('live_stream_title')}</h2>
                            <p className="text-primary animate-pulse font-semibold mt-2">{t('live_now')}</p>
                            <Button size="lg" className="mt-4">
                                <Play className="mr-2 h-5 w-5"/>
                                {t('watch_now')}
                            </Button>
                        </div>
                    </div>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline text-xl md:text-2xl tracking-wide-3">{t('cast_your_vote')}</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                        <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                            <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mb-4 border-2 border-transparent group-hover:border-primary">
                               <AvatarImage src="https://picsum.photos/seed/contestant1/200/200" data-ai-hint="woman model" />
                               <AvatarFallback>A&J</AvatarFallback>
                            </Avatar>
                            <h3 className="font-semibold text-lg">Anna & Ján</h3>
                            <p className="text-sm text-muted-foreground">"The Power Couple"</p>
                            <div className="flex gap-4 mt-4">
                                <Button variant="outline" size="icon"><ThumbsUp className="text-green-500" /></Button>
                                <Button variant="outline" size="icon"><ThumbsDown className="text-destructive" /></Button>
                            </div>
                        </div>
                        <div className="border rounded-lg p-4 flex flex-col items-center justify-center text-center">
                            <Avatar className="w-20 h-20 sm:w-24 sm:h-24 mb-4 border-2 border-transparent group-hover:border-primary">
                               <AvatarImage src="https://picsum.photos/seed/contestant2/200/200" data-ai-hint="man model" />
                               <AvatarFallback>M</AvatarFallback>
                            </Avatar>
                            <h3 className="font-semibold text-lg">Marek</h3>
                            <p className="text-sm text-muted-foreground">"The Lone Wolf"</p>
                            <div className="flex gap-4 mt-4">
                                <Button variant="outline" size="icon"><ThumbsUp className="text-green-500"/></Button>
                                <Button variant="outline" size="icon"><ThumbsDown className="text-destructive"/></Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
            
            <div className="lg:col-span-1 mt-6 lg:mt-0 flex flex-col h-full min-h-[500px] lg:min-h-0 lg:max-h-[calc(100vh-theme(spacing.16))]">
                <Card className="flex-1 flex flex-col h-full">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl md:text-2xl tracking-wide-3">{t('live_chat')}</CardTitle>
                    </CardHeader>
                     <ScrollArea className="flex-1 px-4 sm:px-6">
                        <div className="space-y-4 pr-3 pb-4">
                            <ChatMessage name="System" message="Welcome to the live chat! Remember to be respectful." avatar="" />
                            <ChatMessage name="Alex" message="This is intense! 🔥" avatar="https://picsum.photos/seed/avatar2/100/100" />
                            <ChatMessage name="Sarah" message="Go Anna & Ján! You got this! 💖" avatar="https://picsum.photos/seed/avatar1/100/100" />
                            <ChatMessage name="You" message="Who do you think will win?" avatar="" isUser />
                            <ChatMessage name="Mike" message="Marek is my favorite so far." avatar="https://picsum.photos/seed/avatar4/100/100" />
                             <ChatMessage name="System" message="Welcome to the live chat! Remember to be respectful." avatar="" />
                            <ChatMessage name="Alex" message="This is intense! 🔥" avatar="https://picsum.photos/seed/avatar2/100/100" />
                            <ChatMessage name="Sarah" message="Go Anna & Ján! You got this! 💖" avatar="https://picsum.photos/seed/avatar1/100/100" />
                            <ChatMessage name="You" message="Who do you think will win?" avatar="" isUser />
                            <ChatMessage name="Mike" message="Marek is my favorite so far." avatar="https://picsum.photos/seed/avatar4/100/100" />
                        </div>
                    </ScrollArea>
                    <CardFooter className="border-t pt-4">
                        <div className="relative w-full">
                            <Input placeholder={t('send_a_message')} className="pr-20"/>
                            <div className="absolute top-1/2 right-1 transform -translate-y-1/2 flex items-center">
                                <Button variant="ghost" size="icon" className="w-8 h-8"><Gift className="h-4 w-4 text-muted-foreground hover:text-primary"/></Button>
                                <Button variant="ghost" size="icon" className="w-8 h-8"><Send className="h-4 w-4 text-muted-foreground hover:text-primary"/></Button>
                            </div>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}
