
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface TreatmentPlanItem {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant?: 'default' | 'outline';
}

interface TreatmentPlanCardProps {
  items: TreatmentPlanItem[];
}

const TreatmentPlanCard: React.FC<TreatmentPlanCardProps> = ({ items }) => {
  return (
    <Card className="card-animated mt-6">
      <CardHeader>
        <CardTitle>Seu Plano de Tratamento Personalizado</CardTitle>
        <CardDescription>
          Um plano personalizado e abrangente para melhorar a saúde financeira da sua empresa
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b last:border-b-0 pb-4">
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <Button 
                variant={item.buttonVariant || 'default'} 
                className="button-animated"
              >
                {item.buttonText}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TreatmentPlanCard;
