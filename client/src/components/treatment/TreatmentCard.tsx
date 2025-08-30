
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface TreatmentCardProps {
  title: string;
  icon: LucideIcon;
  priority: string;
  description: string;
  metricLabel: string;
  metricValue: string;
  metricSubtext: string;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({
  title,
  icon: Icon,
  priority,
  description,
  metricLabel,
  metricValue,
  metricSubtext,
}) => {
  const navigate = useNavigate();
  
  const handleViewDetailedPlan = () => {
    // Navigate to the same page but with tratamento-detalhado tab
    const currentPath = window.location.pathname;
    navigate(`${currentPath}?tab=tratamento-detalhado`);
  };
  
  return (
    <Card className="card-animated">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center">
          <Icon className="w-5 h-5 mr-2 text-primary" />
          {title}
        </CardTitle>
        <CardDescription>Prioridade: {priority}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {description}
        </p>
        <div className="flex justify-between items-center p-3 bg-muted rounded-md mb-4">
          <div>
            <p className="text-sm font-medium">{metricLabel}</p>
            <p className="text-lg font-bold">{metricValue} <span className="text-sm text-success">{metricSubtext}</span></p>
          </div>
          <ArrowUpRight className="w-10 h-10 text-success/20" />
        </div>
        <Button 
          variant="outline" 
          className="w-full button-animated"
          onClick={handleViewDetailedPlan}
        >
          Ver plano detalhado <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default TreatmentCard;
