
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { BellIcon, UserIcon } from 'lucide-react';

type HeaderProps = {
  className?: string;
};

export const Header = ({ className }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        'fixed top-0 right-0 z-40 w-full transition-all duration-300 ease-in-out',
        isScrolled 
          ? 'glass-light py-3 border-b shadow-sm' 
          : 'bg-transparent py-4',
        className
      )}
    >
      <div className="container flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative animate-fade-in"
          >
            <BellIcon size={18} />
            <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
          </Button>
          
          <div className="h-6 w-px bg-border mx-1" />
          
          <Button 
            variant="ghost" 
            size="icon"
            className="animate-fade-in"
          >
            <UserIcon size={18} />
          </Button>
        </div>
      </div>
    </header>
  );
};
