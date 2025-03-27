
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-slate-50 p-4">
      <div className="text-center glass-card p-12 max-w-md mx-auto animate-scale-in">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Oops! A página que você está procurando não foi encontrada.
        </p>
        <Button asChild className="button-animated">
          <Link to="/">Voltar para a Home</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
