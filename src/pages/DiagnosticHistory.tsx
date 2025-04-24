
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DiagnosticHistoryTable from '@/components/DiagnosticHistoryTable';
import { diagnosticDataByCompany } from '@/data/diagnosticData';

const DiagnosticHistory = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Histórico de Diagnósticos</h1>
          <p className="text-muted-foreground mb-6">
            Lista de diagnósticos financeiros realizados por empresa
          </p>
        </div>

        <Tabs defaultValue="historico" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico-geral" onClick={() => navigate('/financial-health')}>Diagnóstico Geral</TabsTrigger>
            <TabsTrigger value="diagnostico" onClick={() => navigate('/financial-health/detailed')}>Diagnóstico Detalhado</TabsTrigger>
            <TabsTrigger value="historico">Histórico do Diagnóstico</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="historico" className="animate-fade-in">
            <div className="space-y-6">
              {Object.entries(diagnosticDataByCompany).map(([company, diagnostics]) => (
                <DiagnosticHistoryTable 
                  key={company} 
                  companyName={company} 
                  diagnostics={diagnostics} 
                />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="configuracoes">
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Configurações de Diagnóstico</h2>
              <p className="text-muted-foreground mb-8">
                Personalize as configurações do seu diagnóstico financeiro e defina os parâmetros de análise.
              </p>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Preferências de Análise</h3>
                  <p className="text-muted-foreground mb-4">
                    Configure as preferências para análises futuras.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Conteúdo em desenvolvimento
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DiagnosticHistory;
