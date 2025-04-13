
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
import { CheckCircle } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import HealthCard from '@/components/HealthCard';
import KpiCard from '@/components/KpiCard';

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
      requestedBy: 'Vitoria',
      status: 'SAUDÁVEL',
      analysisYear: '2025',
      healthScore: 85,
      healthStatus: 'Saúde Financeira Geral'
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

  // Define styled cards for different indicator groups
  const IndicatorCard = ({ title, children, className = "" }) => (
    <Card className={`shadow-sm hover:shadow-md transition-shadow ${className}`}>
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Resultado do Diagnóstico de Saúde Financeira Detalhado</h1>
          <p className="text-muted-foreground mb-6">
            Detalhamento completo do tratamento financeiro recomendado com base na análise realizada.
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
            {/* Novo componente HealthCard para o sumário de saúde financeira */}
            <Card className="mb-8 border rounded-lg shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold">{diagnosticData.company.healthStatus}</h2>
                  <div className="mt-2">
                    <Progress 
                      value={diagnosticData.company.healthScore} 
                      className="h-2 bg-gray-200"
                    />
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Sua empresa apresenta uma saúde financeira {
                      diagnosticData.company.healthScore > 70 ? 'saudável' : 
                      diagnosticData.company.healthScore > 40 ? 'comprometida' : 'em risco'
                    }
                  </p>
                  <div className="mt-4">
                    <h3 className="text-4xl font-bold">{diagnosticData.company.healthScore}%</h3>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Cartão de dados da empresa */}
            <Card className="mb-8 shadow-sm">
              <CardContent className="pt-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold mb-4">Exame de Risco de Falência</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Empresa:</p>
                    <p className="font-semibold">{diagnosticData.company.name}</p>
                    
                    <p className="text-muted-foreground text-sm mt-4 mb-1">Data de Criação da Empresa:</p>
                    <p className="font-semibold">{diagnosticData.company.creationDate}</p>
                    
                    <p className="text-muted-foreground text-sm mt-4 mb-1">Setor:</p>
                    <p className="font-semibold">{diagnosticData.company.sector}</p>
                  </div>
                  
                  <div>
                    <p className="text-muted-foreground text-sm mb-1">Data de análise dos dados:</p>
                    <p className="font-semibold">{diagnosticData.company.analysisYear}</p>
                    
                    <p className="text-muted-foreground text-sm mt-4 mb-1">Idade da empresa:</p>
                    <p className="font-semibold">{diagnosticData.company.age}</p>
                    
                    <p className="text-muted-foreground text-sm mt-4 mb-1">Solicitado por:</p>
                    <p className="font-semibold">{diagnosticData.company.requestedBy}</p>
                  </div>
                  
                  <div className="flex flex-col items-center justify-center">
                    <p className="text-muted-foreground text-sm mb-3">Status da Empresa</p>
                    <Badge variant="outline" className="bg-green-500 text-white px-4 py-1 text-sm rounded-full">
                      {diagnosticData.company.status}
                    </Badge>
                    <div className="mt-5">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Grid de cards de indicadores */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="liquidez" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Parâmetros de Liquidez</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderIndicatorsTable(diagnosticData.liquidityParameters)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="operacional" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Atividades Operacionais</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderIndicatorsTable(diagnosticData.operationalActivities)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="capital" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Estrutura de Capital</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderIndicatorsTable(diagnosticData.capitalStructure)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="juros" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Cobertura de Juros</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderIndicatorsTable(diagnosticData.interestCoverage)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pagamentos" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Pagamento do Principal</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderIndicatorsTable(diagnosticData.principalPayment)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="eficiencia" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Rentabilidade e Eficiência</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderIndicatorsTable(diagnosticData.profitabilityEfficiency)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="margens" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Margens</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderIndicatorsTable(diagnosticData.margins)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="retorno" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Retorno sobre o Capital</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderIndicatorsTable(diagnosticData.returnOnCapital)}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

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
