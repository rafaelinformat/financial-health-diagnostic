
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';

const HistoryTab: React.FC = () => {
  return (
    <TabsContent value="historico">
      <div className="glass-card p-8 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6">Histórico de Tratamento</h2>
        <p className="text-muted-foreground mb-8">
          Acompanhe o histórico de tratamentos financeiros aplicados e seus resultados.
        </p>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Tratamentos Anteriores</h3>
            <p className="text-muted-foreground mb-4">
              Esta seção apresentará um histórico completo dos tratamentos financeiros já aplicados.
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

export default HistoryTab;
