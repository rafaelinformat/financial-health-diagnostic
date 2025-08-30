
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import HealthCard from '@/components/HealthCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const DiagnosticDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real application, you would fetch the diagnostic details based on the ID
  // This is just a placeholder for demonstration purposes

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Detalhes do Diagnóstico</h1>
          <p className="text-muted-foreground mb-6">
            Visualizando resultados do diagnóstico financeiro #{id}
          </p>
        </div>

        <Tabs defaultValue="diagnostico" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico-geral" onClick={() => navigate('/financial-health')}>Diagnóstico Geral</TabsTrigger>
            <TabsTrigger value="diagnostico" onClick={() => navigate('/financial-health/detailed')}>Diagnóstico Detalhado</TabsTrigger>
            <TabsTrigger value="historico" onClick={() => navigate('/financial-health/history')}>Histórico do Diagnóstico</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="diagnostico" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <HealthCard
                title="Saúde Financeira Geral"
                description="Sua empresa apresenta uma saúde financeira comprometida"
                value={35}
                colorScheme="danger"
              />
              <HealthCard
                title="Eficiência Operacional"
                description="Seus processos operacionais estão com desempenho baixo"
                value={42}
                colorScheme="danger"
              />
              <HealthCard
                title="Potencial de Crescimento"
                description="Sua empresa tem potencial de crescimento limitado"
                value={25}
                colorScheme="danger"
              />
            </div>

            <div className="glass-card p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Análise Detalhada</h3>
              <p className="mb-4">
                Este diagnóstico foi realizado em 10/01/2024 para a empresa TRAS ENGENHARIA.
                A análise identificou vários pontos críticos que precisam de atenção imediata
                para evitar a deterioração da saúde financeira da empresa.
              </p>
              
              <h4 className="text-lg font-medium mt-6 mb-2">Pontos Críticos</h4>
              <ul className="list-disc pl-6 space-y-2">
                <li>Fluxo de caixa negativo há mais de 3 meses consecutivos</li>
                <li>Endividamento acima de 70% do patrimônio</li>
                <li>Queda de receita superior a 30% em comparação ao ano anterior</li>
                <li>Margem de lucro operacional negativa</li>
              </ul>
            </div>
          </TabsContent>
          
          <TabsContent value="historico">
            {/* This content will not be displayed as we navigate away */}
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

export default DiagnosticDetail;
