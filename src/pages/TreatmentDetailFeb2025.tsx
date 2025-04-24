
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const TreatmentDetailFeb2025 = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Detalhamento do Tratamento</h1>
          <p className="text-muted-foreground">
            Análise detalhada e recomendações para tratamento financeiro
          </p>
        </div>

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
    </DashboardLayout>
  );
};

export default TreatmentDetailFeb2025;
