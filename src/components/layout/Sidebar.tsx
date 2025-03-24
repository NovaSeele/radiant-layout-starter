
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  HomeIcon,
  LayoutDashboardIcon,
  MessagesSquareIcon,
  ImageIcon,
  SettingsIcon,
  HelpCircleIcon,
  MenuIcon,
  XIcon
} from 'lucide-react';

type SidebarItemProps = {
  icon: React.ElementType;
  label: string;
  path: string;
  isActive?: boolean;
  isCollapsed: boolean;
};

const SidebarItem = ({ icon: Icon, label, path, isActive, isCollapsed }: SidebarItemProps) => {
  return (
    <Link
      to={path}
      className={cn(
        'flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-300 ease-in-out',
        isActive 
          ? 'bg-accent text-accent-foreground font-medium' 
          : 'text-muted-foreground hover:bg-accent/50 hover:text-foreground',
        isCollapsed && 'justify-center'
      )}
    >
      <Icon size={20} />
      {!isCollapsed && <span>{label}</span>}
    </Link>
  );
};

type SidebarProps = {
  className?: string;
};

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const navigationItems = [
    { icon: HomeIcon, label: 'Home', path: '/' },
    { icon: LayoutDashboardIcon, label: 'Dashboard', path: '/dashboard' },
    { icon: MessagesSquareIcon, label: 'Messages', path: '/messages' },
    { icon: ImageIcon, label: 'Gallery', path: '/gallery' },
  ];

  const utilityItems = [
    { icon: SettingsIcon, label: 'Settings', path: '/settings' },
    { icon: HelpCircleIcon, label: 'Help', path: '/help' },
  ];

  return (
    <aside
      className={cn(
        'flex flex-col h-full border-r bg-card transition-all duration-300 ease-in-out',
        isCollapsed ? 'w-16' : 'w-64',
        className
      )}
    >
      <div className="flex items-center justify-between p-4 border-b">
        {!isCollapsed && (
          <div className="font-display font-medium text-lg animate-fade-in">Minimal</div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          className={cn("ml-auto", isCollapsed && "mx-auto")}
          onClick={() => setIsCollapsed(!isCollapsed)}
          aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {isCollapsed ? <MenuIcon size={18} /> : <XIcon size={18} />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 px-3">
        <nav className="flex flex-col gap-1">
          {navigationItems.map((item, index) => (
            <div key={item.path} className={`animate-slide-in-left delay-${index}`}>
              <SidebarItem
                icon={item.icon}
                label={item.label}
                path={item.path}
                isActive={item.path === '/'}
                isCollapsed={isCollapsed}
              />
            </div>
          ))}
        </nav>
        
        <div className="mt-6 pt-6 border-t">
          <nav className="flex flex-col gap-1">
            {utilityItems.map((item, index) => (
              <div key={item.path} className={`animate-slide-in-left delay-${index + 4}`}>
                <SidebarItem
                  icon={item.icon}
                  label={item.label}
                  path={item.path}
                  isCollapsed={isCollapsed}
                />
              </div>
            ))}
          </nav>
        </div>
      </div>
      
      <div className="border-t p-4">
        {!isCollapsed && (
          <div className="glass-card p-3 text-xs text-center text-muted-foreground animate-fade-in">
            <p>Design Version 1.0</p>
          </div>
        )}
      </div>
    </aside>
  );
};
