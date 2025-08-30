
import React, { useEffect, useState } from 'react';
import { TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { useLocation } from 'react-router-dom';
import { Clipboard, CheckCircle, AlertTriangle } from 'lucide-react';

// Mock treatment data
const treatmentData = {
  company: {
    name: 'TRANS ENGENHARIA',
    creationDate: '10/12/2004',
    sector: 'Serviço Instalação Hidráulica/Elétrica',
    requestedBy: 'Ronaldo',
    analysisDate: '2024',
    age: '20 anos',
    status: 'Saudável'
  },
  treatment: {
    title: 'MELHORAR GESTÃO DE FLUXO DE CAIXA',
    description: 'A gestão do fluxo de caixa é o processo de monitorar, analisar e otimizar as entradas e saídas de dinheiro de uma empresa.',
    strategies: [
      {
        title: 'Construção de Reservas de Emergência',
        description: 'Destine parte do fluxo de caixa positivo nos próximos 90 dias para formar um fundo de reserva. Isso ajudará em situações de imprevistos financeiros no futuro.'
      },
      {
        title: 'Gestão de Contas a Pagar',
        description: 'Negocie prazos com fornecedores: Alongue os prazos de pagamento sem comprometer a relação comercial.'
      },
      {
        title: 'Adiantamento de recebíveis',
        description: 'Ofereça incentivos para pagamentos antecipados: Conceda descontos para clientes que pagam à vista ou antes do vencimento.'
      }
    ],
    expectedResults: [
      'Ter uma reserva de emergência garante que a empresa tenha dinheiro disponível para lidar com imprevistos financeiros.'
    ]
  }
};

const DetailedTreatmentTab: React.FC = () => {
  const location = useLocation();
  const [treatmentId, setTreatmentId] = useState<string | null>(null);
  
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const id = searchParams.get('id');
    if (id) {
      setTreatmentId(id);
      console.log("Treatment ID:", id);
      // Here you would fetch treatment data based on the ID
    }
  }, [location]);

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case 'saudável':
        return <Badge className="bg-green-500 hover:bg-green-600">Saudável</Badge>;
      case 'alerta':
        return <Badge className="bg-amber-500 hover:bg-amber-600">Alerta</Badge>;
      case 'em risco de falência':
        return <Badge className="bg-red-500 hover:bg-red-600">Em Risco de Falência</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  return (
    <TabsContent value="tratamento-detalhado">
      <div className="space-y-6 animate-fade-in">
        <div className="bg-slate-100 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-indigo-900 mb-1">
            Tratamento da Saúde Financeira – Dados Observados no Exame
          </h2>
          <p className="text-muted-foreground mb-6">
            Detalhamento completo do tratamento financeiro recomendado com base na análise realizada.
          </p>

          <Card className="border-0 shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-1 lg:col-span-2">
                  <h3 className="font-semibold text-lg mb-2">Exame de Risco de Falência</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
                    <div>
                      <p className="text-sm text-muted-foreground">Empresa:</p>
                      <p className="font-medium">{treatmentData.company.name}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data de análise dos dados:</p>
                      <p className="font-medium">{treatmentData.company.analysisDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Data de Criação da Empresa:</p>
                      <p className="font-medium">{treatmentData.company.creationDate}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Idade da empresa:</p>
                      <p className="font-medium">{treatmentData.company.age}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Setor:</p>
                      <p className="font-medium">{treatmentData.company.sector}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Solicitado por:</p>
                      <p className="font-medium">{treatmentData.company.requestedBy}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center bg-slate-50 rounded-lg p-4">
                  <p className="text-sm text-muted-foreground">Status da Empresa</p>
                  <div className="my-2">
                    {getStatusBadge(treatmentData.company.status)}
                  </div>
                  <div className="mt-2 flex justify-center">
                    {treatmentData.company.status.toLowerCase() === 'saudável' ? (
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    ) : (
                      <AlertTriangle className="h-10 w-10 text-amber-500" />
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white p-6 rounded-lg border shadow-sm">
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold text-indigo-900 uppercase">
              Tratamento Financeiro Recomendado
            </h2>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-3 text-indigo-700 uppercase">
              {treatmentData.treatment.title}
            </h3>
            <p className="text-muted-foreground">
              {treatmentData.treatment.description}
            </p>
          </div>

          <div className="space-y-6">
            {treatmentData.treatment.strategies.map((strategy, index) => (
              <div key={index} className="border-l-4 border-indigo-300 pl-4 py-1">
                <h4 className="font-semibold mb-2 text-indigo-700">{strategy.title}</h4>
                <ul className="list-disc list-inside text-muted-foreground pl-2">
                  <li>{strategy.description}</li>
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Resultado Esperado:</h3>
          <p className="mb-3">Após implementação do tratamento espera-se que:</p>
          <ul className="list-disc list-inside space-y-2 pl-2">
            {treatmentData.treatment.expectedResults.map((result, index) => (
              <li key={index} className="text-muted-foreground">{result}</li>
            ))}
          </ul>
        </div>
      </div>
    </TabsContent>
  );
};

export default DetailedTreatmentTab;
