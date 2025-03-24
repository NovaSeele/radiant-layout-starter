
import { useState } from 'react';
import { MainLayout } from '@/components/layout/MainLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, BarChartIcon, LightbulbIcon, LineChartIcon, TrendingUpIcon } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleAction = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };
  
  return (
    <MainLayout>
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Hero Section */}
        <section className="animate-fade-in mb-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/5 border border-primary/10 text-sm mb-6 animate-slide-in-bottom delay-1">
              <span className="text-primary/70 font-medium">Minimalist Design System</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-medium leading-tight mb-4 text-balance animate-slide-in-bottom delay-2">
              Create beautiful interfaces with precision & elegance
            </h1>
            <p className="text-xl text-muted-foreground mb-8 text-balance max-w-2xl animate-slide-in-bottom delay-3">
              This design system embraces simplicity and functionality, inspired by the principles of minimal design that puts user experience first.
            </p>
            <div className="flex flex-wrap gap-4 animate-slide-in-bottom delay-4">
              <Button size="lg" onClick={handleAction} disabled={isLoading}>
                Get started
                <ArrowRightIcon size={16} className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" onClick={handleAction} disabled={isLoading}>
                View components
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard 
            icon={LightbulbIcon}
            title="Intuitive Design"
            description="Every element is designed with both aesthetics and usability in mind."
            index={0}
          />
          <FeatureCard 
            icon={BarChartIcon}
            title="Powerful Components"
            description="A comprehensive set of flexible components to build modern interfaces."
            index={1}
          />
          <FeatureCard 
            icon={TrendingUpIcon}
            title="Optimized Performance"
            description="Lightweight and fast, with smooth animations and transitions."
            index={2}
          />
        </section>
        
        {/* Content Section */}
        <section className="bg-secondary/30 -mx-8 px-8 py-16 mt-20 border-y">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display font-medium mb-4 animate-fade-in">Design Principles</h2>
            <p className="text-muted-foreground mb-12 animate-fade-in">
              These core principles guide our approach to creating minimal, functional, and beautiful interfaces.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <PrincipleCard 
                number="01"
                title="Simplicity"
                description="Eliminate unnecessary elements. If it doesn't serve a purpose, it doesn't belong."
              />
              <PrincipleCard 
                number="02"
                title="Clarity"
                description="Every design choice should enhance understanding and reduce cognitive load."
              />
              <PrincipleCard 
                number="03"
                title="Consistency"
                description="Maintain visual and functional consistency across the entire interface."
              />
              <PrincipleCard 
                number="04"
                title="Feedback"
                description="Provide clear feedback for every user interaction with subtle animations."
              />
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

type FeatureCardProps = {
  icon: React.ElementType;
  title: string;
  description: string;
  index: number;
};

const FeatureCard = ({ icon: Icon, title, description, index }: FeatureCardProps) => {
  return (
    <Card className={`glass-card overflow-hidden animate-slide-in-bottom delay-${index}`}>
      <CardHeader className="pb-2">
        <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-2">
          <Icon size={24} className="text-primary" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardContent>
      <CardFooter className="pt-0">
        <Button variant="ghost" size="sm" className="px-0 text-primary">
          Learn more
          <ArrowRightIcon size={14} className="ml-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

type PrincipleCardProps = {
  number: string;
  title: string;
  description: string;
};

const PrincipleCard = ({ number, title, description }: PrincipleCardProps) => {
  return (
    <div className="text-left p-6 border rounded-xl bg-background animate-fade-in">
      <div className="text-xl font-display text-primary/60 mb-2">{number}</div>
      <h3 className="text-xl font-medium mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default Index;
