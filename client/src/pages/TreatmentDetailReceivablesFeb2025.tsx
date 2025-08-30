
import React, { useEffect, useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate, useLocation } from 'react-router-dom';
import TreatmentTab from '@/components/treatment/TreatmentTab';
import DetailedTreatmentTab from '@/components/treatment/DetailedTreatmentTab';
import HistoryTab from '@/components/treatment/HistoryTab';
import SettingsTab from '@/components/treatment/SettingsTab';

const TreatmentDetailReceivablesFeb2025 = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tratamento');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    if (tabParam && ['tratamento', 'tratamento-detalhado', 'historico', 'configuracoes'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/treatment-detail-receivables-feb-2025?tab=${value}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Detalhamento do Tratamento</h1>
          <p className="text-muted-foreground">
            Análise detalhada e recomendações para tratamento financeiro
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="tratamento">
              Diagnóstico Geral
            </TabsTrigger>
            <TabsTrigger value="tratamento-detalhado">
              Diagnóstico Detalhado
            </TabsTrigger>
            <TabsTrigger value="historico">
              Histórico do Diagnóstico
            </TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="tratamento" className="animate-fade-in">
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Dados da Empresa</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Empresa:</h3>
                    <p>TECNO CHAPA SOLUCOES EM CORTE E DOBRA LTDA</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h3 className="font-semibold">Data de Criação da Empresa:</h3>
                      <p>01/2023</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Idade da empresa:</h3>
                      <p>2 anos</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Setor de atuação:</h3>
                      <p>Indústria/Serviços (Corte e Dobra Metálica)</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Período de análise:</h3>
                      <p>01/02/2025 a 31/02/2025</p>
                    </div>
                    <div>
                      <h3 className="font-semibold">Solicitado por:</h3>
                      <p>Vitoria</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Tratamento Recomendado - Restruturação Financeira Interna</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-2">Foco:</h3>
                    <p>Negociação com os clientes da empresa.</p>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Indicador Crítico:</h3>
                    <p>Ciclo de Caixa excessivo (328 dias)</p>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Ação Recomendada:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Revisar e encurtar prazos de recebimento.</li>
                      <li>Implementar política de cobrança ativa e incentivo para pagamento antecipado.</li>
                      <li>Oferecer desconto para clientes que pagam à vista ou antecipado (ex.: 3% em pagamentos até 10 dias).</li>
                      <li>Revisar contratos de fornecimento para alongar prazo de pagamento.</li>
                    </ul>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h3 className="font-semibold mb-2">Resultado Esperado:</h3>
                    <p>Melhora no equilíbrio entre entradas e saídas — Aumento da previsibilidade do fluxo de caixa.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="tratamento-detalhado">
            <DetailedTreatmentTab />
          </TabsContent>
          
          <TabsContent value="historico">
            <HistoryTab />
          </TabsContent>
          
          <TabsContent value="configuracoes">
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Configurações de Tratamento</h2>
              <p className="text-muted-foreground mb-8">
                Personalize as configurações do seu tratamento financeiro e defina os parâmetros de análise.
              </p>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Preferências de Análise</h3>
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
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default TreatmentDetailReceivablesFeb2025;
