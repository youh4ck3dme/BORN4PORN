
"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

export function InstallPwaBanner() {
  const [installPrompt, setInstallPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setInstallPrompt(e as BeforeInstallPromptEvent);
      setIsVisible(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = () => {
    if (!installPrompt) {
      return;
    }
    installPrompt.prompt();
    installPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the A2HS prompt');
      } else {
        console.log('User dismissed the A2HS prompt');
      }
      setInstallPrompt(null);
      setIsVisible(false);
    });
  };

  const handleDismissClick = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="bg-card border border-border shadow-lg rounded-lg p-4 flex items-center gap-4">
        <div className="flex-shrink-0">
          <Download className="h-6 w-6 text-primary" />
        </div>
        <div className="flex-grow">
          <p className="font-semibold">Inštalovať aplikáciu</p>
          <p className="text-sm text-muted-foreground">Pridajte si nás na plochu pre rýchly prístup.</p>
        </div>
        <Button size="sm" onClick={handleInstallClick}>Inštalovať</Button>
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleDismissClick}>
          <X className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
