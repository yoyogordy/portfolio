import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-slate-50">
      <div className="text-center space-y-6 px-4">
        <h1 className="text-6xl md:text-8xl font-heading font-bold text-primary">404</h1>
        <h2 className="text-2xl md:text-3xl font-heading font-bold">עמוד לא נמצא</h2>
        <p className="text-lg text-gray-600 max-w-md mx-auto">
          מצטערים, העמוד שחיפשת לא קיים או הוסר.
        </p>
        <div className="pt-4">
          <Button asChild size="lg">
            <Link to="/">חזרה לדף הבית</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
