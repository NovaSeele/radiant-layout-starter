
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircleIcon, HomeIcon } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-background to-secondary/20 p-4">
      <div className="w-full max-w-md text-center space-y-6 animate-fade-in">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-destructive/10 mb-2">
          <AlertCircleIcon size={32} className="text-destructive" />
        </div>
        
        <h1 className="text-6xl font-display font-medium">404</h1>
        
        <div className="space-y-2">
          <p className="text-xl font-medium">Page not found</p>
          <p className="text-muted-foreground">
            The page you are looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="pt-4">
          <Button asChild size="lg" className="animate-slide-in-bottom">
            <Link to="/">
              <HomeIcon size={18} className="mr-2" />
              Return to Home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
