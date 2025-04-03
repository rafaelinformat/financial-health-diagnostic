
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';

const DetailedTreatmentTab: React.FC = () => {
  return (
    <TabsContent value="tratamento-detalhado">
      <div className="glass-card p-8 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6">Tratamento Detalhado</h2>
        <p className="text-muted-foreground mb-8">
          Visualize planos detalhados de tratamento financeiro para sua empresa.
        </p>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Detalhes do Tratamento</h3>
            <p className="text-muted-foreground mb-4">
              Esta seção apresentará os detalhes completos do tratamento financeiro recomendado.
            </p>
            <p className="text-sm text-muted-foreground">
              Conteúdo em desenvolvimento
            </p>
          </div>
        </div>
      </div>
    </TabsContent>
  );
};

export default DetailedTreatmentTab;
