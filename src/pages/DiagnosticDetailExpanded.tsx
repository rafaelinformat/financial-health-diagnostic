
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';

const DiagnosticDetailExpanded = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Os dados poderiam vir de uma API em um caso real
  const diagnosticData = {
    company: {
      name: 'TECNO CHAPA SOLUCOES EM CORTE E DOBRA LTDA',
      creationDate: '01/2023',
      age: '2 anos',
      sector: 'Indústria/Serviços (Corte e Dobra Metálica)',
      analysisFrom: '01/01/2025',
      analysisTo: '31/01/2025',
      requestedBy: 'Vitoria'
    },
    liquidityParameters: [
      {
        indicator: 'Liquidez Corrente',
        value: '17,29',
        desiredValue: '> 1,50',
        analysis: 'Excelente capacidade de pagamento no curto prazo.'
      },
      {
        indicator: 'Liquidez Seca',
        value: '12,35',
        desiredValue: '> 1,00',
        analysis: 'Indicador muito saudável, baixo risco de iliquidez.'
      },
      {
        indicator: 'Liquidez Imediata',
        value: '5,41',
        desiredValue: '> 0,30',
        analysis: 'Excelente posição de caixa disponível.'
      }
    ],
    operationalActivities: [
      {
        indicator: 'PMR',
        value: '33,06 dias',
        desiredValue: '≤ 30 dias',
        analysis: 'Acima do ideal. Pode indicar atraso ou prazo de vendas elevado.'
      },
      {
        indicator: 'PME',
        value: '57,55 dias',
        desiredValue: '≤ 45 dias',
        analysis: 'Estoque elevado. Indica baixa rotatividade de produtos.'
      },
      {
        indicator: 'PMP',
        value: '7,45 dias',
        desiredValue: '≥ 30 dias',
        analysis: 'Empresa paga rápido. Poderia renegociar prazos.'
      },
      {
        indicator: 'Ciclo Operacional',
        value: '90,61 dias',
        desiredValue: '-',
        analysis: 'Ciclo relativamente longo.'
      },
      {
        indicator: 'Ciclo de Caixa',
        value: '83,16 dias',
        desiredValue: '≤ 30 dias',
        analysis: 'Preocupante. Exige capital de giro elevado.'
      }
    ],
    capitalStructure: [
      {
        indicator: 'Endividamento Geral',
        value: '0,17',
        desiredValue: '< 0,60',
        analysis: 'Baixo grau de endividamento.'
      },
      {
        indicator: 'Cap. Terceiros / Cap. Próprio',
        value: '0,20',
        desiredValue: '< 1,00',
        analysis: 'Estrutura de capital conservadora.'
      },
      {
        indicator: 'Composição do Endividamento',
        value: '0,33',
        desiredValue: '< 0,70',
        analysis: 'Maioria da dívida é de longo prazo.'
      },
      {
        indicator: 'Grau de Alavancagem',
        value: '1,20',
        desiredValue: '≤ 2,00',
        analysis: 'Empresa pouco alavancada.'
      }
    ],
    interestCoverage: [
      {
        indicator: 'Cobertura de Juros',
        value: '152,15x',
        desiredValue: '> 2,00',
        analysis: 'Excelente. Confortável para pagar encargos.'
      }
    ],
    principalPayment: [
      {
        indicator: 'Dívida Líquida/EBITDA',
        value: '-1,37',
        desiredValue: '< 2,00',
        analysis: 'Caixa excedente à dívida.'
      },
      {
        indicator: 'Dívida Líquida / PL',
        value: '-0,16',
        desiredValue: '< 1,00',
        analysis: 'Endividamento líquido negativo.'
      }
    ],
    profitabilityEfficiency: [
      {
        indicator: 'Giro do Ativo Fixo',
        value: '2,39',
        desiredValue: '> 1,50',
        analysis: 'Bons retornos sobre ativos fixos.'
      },
      {
        indicator: 'Giro do Ativo Total',
        value: '0,12',
        desiredValue: '> 0,50',
        analysis: 'Muito abaixo do ideal. Ativos ociosos.'
      }
    ],
    margins: [
      {
        indicator: 'Margem Bruta',
        value: '100%',
        desiredValue: '> 40%',
        analysis: 'Receita líquida igual ao lucro bruto.'
      },
      {
        indicator: 'Margem Operacional',
        value: '76,00%',
        desiredValue: '> 10%',
        analysis: 'Excelente margem operacional.'
      },
      {
        indicator: 'Margem Líquida',
        value: '76,00%',
        desiredValue: '> 5%',
        analysis: 'Lucro elevado. Muito positivo.'
      }
    ],
    returnOnCapital: [
      {
        indicator: 'ROA',
        value: '9,49%',
        desiredValue: '> 6%',
        analysis: 'Bom retorno operacional.'
      },
      {
        indicator: 'ROE',
        value: '11,38%',
        desiredValue: '> 10%',
        analysis: 'Excelente retorno para os sócios.'
      }
    ],
    conclusion: {
      status: 'FINANCEIRA SAUDAVEL',
      positivePoints: [
        'Alta liquidez (corrente, seca e imediata).',
        'Margens elevadas e excelente ROE/ROA.',
        'Baixo endividamento e dívida líquida negativa.'
      ]
    }
  };

  const renderIndicatorsTable = (indicators: any[]) => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Valor Desejado</th>
            <th className="border p-2 text-left">Análise</th>
          </tr>
        </thead>
        <tbody>
          {indicators.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Diagnóstico Detalhado</h1>
          <p className="text-muted-foreground mb-6">
            Análise completa da saúde financeira da empresa
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
            <div className="glass-card p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Dados da Empresa</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <p className="mb-2"><span className="font-semibold">Empresa:</span> {diagnosticData.company.name}</p>
                  <p className="mb-2"><span className="font-semibold">Data de Criação:</span> {diagnosticData.company.creationDate}</p>
                  <p className="mb-2"><span className="font-semibold">Idade da empresa:</span> {diagnosticData.company.age}</p>
                </div>
                <div>
                  <p className="mb-2"><span className="font-semibold">Setor de atuação:</span> {diagnosticData.company.sector}</p>
                  <p className="mb-2"><span className="font-semibold">Período de análise:</span> {diagnosticData.company.analysisFrom} a {diagnosticData.company.analysisTo}</p>
                  <p className="mb-2"><span className="font-semibold">Solicitado por:</span> {diagnosticData.company.requestedBy}</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="w-full mb-8">
                <AccordionItem value="liquidez">
                  <AccordionTrigger className="text-xl font-semibold py-4">Parâmetros de Liquidez</AccordionTrigger>
                  <AccordionContent>
                    {renderIndicatorsTable(diagnosticData.liquidityParameters)}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="operacional">
                  <AccordionTrigger className="text-xl font-semibold py-4">Atividades Operacionais</AccordionTrigger>
                  <AccordionContent>
                    {renderIndicatorsTable(diagnosticData.operationalActivities)}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="capital">
                  <AccordionTrigger className="text-xl font-semibold py-4">Estrutura de Capital</AccordionTrigger>
                  <AccordionContent>
                    {renderIndicatorsTable(diagnosticData.capitalStructure)}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="juros">
                  <AccordionTrigger className="text-xl font-semibold py-4">Cobertura de Juros</AccordionTrigger>
                  <AccordionContent>
                    {renderIndicatorsTable(diagnosticData.interestCoverage)}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="pagamentos">
                  <AccordionTrigger className="text-xl font-semibold py-4">Pagamento do Principal</AccordionTrigger>
                  <AccordionContent>
                    {renderIndicatorsTable(diagnosticData.principalPayment)}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="eficiencia">
                  <AccordionTrigger className="text-xl font-semibold py-4">Rentabilidade e Eficiência</AccordionTrigger>
                  <AccordionContent>
                    {renderIndicatorsTable(diagnosticData.profitabilityEfficiency)}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="margens">
                  <AccordionTrigger className="text-xl font-semibold py-4">Margens</AccordionTrigger>
                  <AccordionContent>
                    {renderIndicatorsTable(diagnosticData.margins)}
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="retorno">
                  <AccordionTrigger className="text-xl font-semibold py-4">Retorno sobre o Capital</AccordionTrigger>
                  <AccordionContent>
                    {renderIndicatorsTable(diagnosticData.returnOnCapital)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="bg-muted/20 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Conclusão</h3>
                <p className="mb-4">
                  Com base nos indicadores analisados, conclui-se que a empresa está em situação <span className="font-bold text-green-500">{diagnosticData.conclusion.status}</span>.
                </p>
                <h4 className="font-semibold mb-2">Principais Pontos positivos:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  {diagnosticData.conclusion.positivePoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="historico">
            {/* O conteúdo não será exibido pois navegamos para outra página */}
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

export default DiagnosticDetailExpanded;
