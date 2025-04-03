
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';

const SettingsTab: React.FC = () => {
  return (
    <TabsContent value="configuracoes">
      <div className="glass-card p-8 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6">Configurações de Tratamento</h2>
        <p className="text-muted-foreground mb-8">
          Personalize as configurações do seu tratamento financeiro e defina parâmetros.
        </p>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-6">
            <h3 className="text-lg font-medium mb-4">Preferências de Tratamento</h3>
            <p className="text-muted-foreground mb-4">
              Configure as preferências para tratamentos futuros.
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

export default SettingsTab;
