
import React from 'react';
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

const DiagnosticDetailFeb = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Dados hardcoded conforme solicitado para o detalhamento Fevereiro 2025
  const diagnosticData = {
    company: {
      name: 'TECNO CHAPA SOLUCOES EM CORTE E DOBRA LTDA',
      creationDate: '01/2023',
      age: '2 anos',
      sector: 'Indústria/Serviços (Corte e Dobra Metálica)',
      analysisFrom: '01/02/2025',
      analysisTo: '28/02/2025',
      requestedBy: 'Vitoria',
      status: 'SAUDÁVEL',
      analysisYear: '2025',
    },
    liquidityParameters: [
      {
        indicator: 'Liquidez Corrente',
        value: '24,48',
        desiredValue: '> 1,5',
        analysis: 'Muito saudável. A empresa possui ampla cobertura de obrigações de curto prazo.'
      },
      {
        indicator: 'Liquidez Seca',
        value: '17,44',
        desiredValue: '> 1,0',
        analysis: 'Excelente. Mesmo sem estoques, empresa permanece muito solvente.'
      },
      {
        indicator: 'Liquidez Imediata',
        value: '7,12',
        desiredValue: '> 0,5',
        analysis: 'Excelente liquidez imediata.'
      }
    ],
    operationalActivities: [
      {
        indicator: 'PMR',
        value: '53,40 dias',
        desiredValue: '< 45 dias',
        analysis: 'Acima do ideal. Concessão de prazos ou atrasos no recebimento.'
      },
      {
        indicator: 'PME',
        value: '296,17 dias',
        desiredValue: '< 90 dias',
        analysis: 'Muito alto. Estoques parados comprometem o giro operacional.'
      },
      {
        indicator: 'PMP',
        value: '21,56 dias',
        desiredValue: '> 30 dias',
        analysis: 'Baixo. A empresa paga antes de receber dos clientes.'
      },
      {
        indicator: 'Ciclo Operacional',
        value: 'PMR + PME',
        analysisValue: '349,57 dias',
        desiredValue: '< 120 dias',
        analysis: 'Muito longo. Excesso de capital preso no operacional.'
      },
      {
        indicator: 'Ciclo de Caixa',
        value: '',
        analysisValue: '328,01 dias',
        desiredValue: '< 90 dias',
        analysis: 'Crítico. Necessário revisar capital de giro.'
      },
    ],
    capitalStructure: [
      {
        indicator: 'Endividamento Geral',
        value: '14,51%',
        desiredValue: '< 50%',
        analysis: 'Muito saudável. Baixa dependência de capital de terceiros.'
      },
      {
        indicator: 'Passivo / PL',
        value: '0,17',
        desiredValue: '< 1,0',
        analysis: 'Boa estrutura de capital próprio.'
      },
      {
        indicator: 'Composição do Endividamento',
        value: '26,77%',
        desiredValue: '< 50%',
        analysis: 'Prevalência de passivos de longo prazo.'
      },
      {
        indicator: 'Alavancagem Financeira',
        value: '1,17',
        desiredValue: '< 2,0',
        analysis: 'Alavancagem sob controle.'
      }
    ],
    interestCoverage: [
      {
        indicator: 'Cobertura de Juros',
        value: '141,40x',
        desiredValue: '> 2,0',
        analysis: 'Excelente capacidade de gerar resultado para cobrir juros.'
      }
    ],
    principalPayment: [
      {
        indicator: 'Dívida Líquida / EBITDA',
        value: '-2,88',
        desiredValue: '< 3,0',
        analysis: 'Caixa excedente à dívida.'
      },
      {
        indicator: 'Dívida Líquida / PL',
        value: '-0,20',
        desiredValue: '< 1,0',
        analysis: 'Estrutura muito robusta financeiramente.'
      }
    ],
    profitabilityEfficiency: [
      {
        indicator: 'Giro do Ativo Fixo',
        value: '1,69',
        desiredValue: '> 1,5',
        analysis: 'Uso eficiente dos ativos fixos.'
      },
      {
        indicator: 'Giro do Ativo Total',
        value: '0,08',
        desiredValue: '> 0,5',
        analysis: 'Muito baixo. Necessário melhor aproveitamento da estrutura.'
      }
    ],
    margins: [
      {
        indicator: 'Margem Bruta',
        value: '75,2%',
        desiredValue: '> 40%',
        analysis: 'Boa margem. Custos diretos bem controlados.'
      },
      {
        indicator: 'Margem Operacional',
        value: '70,5%',
        desiredValue: '> 15%',
        analysis: 'Excelente margem operacional.'
      },
      {
        indicator: 'Margem Líquida',
        value: '70,5%',
        desiredValue: '> 10%',
        analysis: 'Lucratividade muito acima da média.'
      }
    ],
    returnOnCapital: [
      {
        indicator: 'ROA',
        value: '5,90%',
        desiredValue: '> 5%',
        analysis: 'Bom retorno sobre os ativos.'
      },
      {
        indicator: 'ROE',
        value: '6,90%',
        desiredValue: '> 7%',
        analysis: 'Quase ideal. Pode ser otimizado com reinvestimentos.'
      }
    ],
    conclusion: {
      status: 'FINANCEIRA SAUDAVEL',
      positivePoints: [
        'Alta liquidez em todos os horizontes (corrente, seca, imediata)',
        'Estrutura de capital conservadora e baixa alavancagem',
        'Margens e rentabilidade acima da média do setor',
        'Cobertura de juros robusta'
      ]
    }
  };

  const renderLiquidityTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Referência</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.liquidityParameters.map((item, index) => (
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

  const renderOperationalTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Referência</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.operationalActivities.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value || item.analysisValue}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderCapitalStructureTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Interpretação</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.capitalStructure.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.interpretation || '-'}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderInterestCoverageTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Interpretação</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.interestCoverage.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.interpretation || '-'}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderPrincipalPaymentTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Interpretação</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.principalPayment.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.interpretation || '-'}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderProfitabilityEfficiencyTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Interpretação</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.profitabilityEfficiency.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.interpretation || '-'}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderMarginsTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Interpretação</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.margins.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.interpretation || '-'}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  const renderReturnOnCapitalTable = () => (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead className="bg-muted/30">
          <tr>
            <th className="border p-2 text-left">Indicador</th>
            <th className="border p-2 text-left">Valor Obtido</th>
            <th className="border p-2 text-left">Interpretação</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.returnOnCapital.map((item, index) => (
            <tr key={index} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.interpretation || '-'}</td>
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
          <h1 className="text-3xl font-bold mb-2">Resultado do Diagnóstico de Saúde Financeira Detalhado - Fevereiro 2025</h1>
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
            <Card className="mb-8 border rounded-lg shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h2 className="text-xl font-bold">Exame de Risco de Falência</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
                    <div>
                      <p className="text-muted-foreground text-sm">Empresa:</p>
                      <p className="font-semibold">{diagnosticData.company.name}</p>

                      <p className="text-muted-foreground text-sm mt-4">Data de Criação da Empresa:</p>
                      <p className="font-semibold">{diagnosticData.company.creationDate}</p>

                      <p className="text-muted-foreground text-sm mt-4">Setor:</p>
                      <p className="font-semibold">{diagnosticData.company.sector}</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-sm">Data de análise dos dados:</p>
                      <p className="font-semibold">{diagnosticData.company.analysisYear}</p>

                      <p className="text-muted-foreground text-sm mt-4">Idade da empresa:</p>
                      <p className="font-semibold">{diagnosticData.company.age}</p>

                      <p className="text-muted-foreground text-sm mt-4">Solicitado por:</p>
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
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="liquidez" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Parâmetros de Liquidez</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderLiquidityTable()}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="operacional" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Atividades Operacionais</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderOperationalTable()}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="capital" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Estrutura de Capital</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderCapitalStructureTable()}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="juros" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Cobertura de Juros</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderInterestCoverageTable()}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="pagamentos" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Pagamento do Principal</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderPrincipalPaymentTable()}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="eficiencia" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Rentabilidade e Eficiência</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderProfitabilityEfficiencyTable()}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="margens" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Margens</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderMarginsTable()}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="retorno" className="border rounded-lg overflow-hidden">
                  <AccordionTrigger className="bg-muted/30 p-4 hover:no-underline hover:bg-muted/50">
                    <h3 className="text-xl font-semibold text-left">Retorno sobre o Capital</h3>
                  </AccordionTrigger>
                  <AccordionContent className="p-4 pt-4">
                    {renderReturnOnCapitalTable()}
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
          
          <TabsContent value="diagnostico-geral">
            {/* O conteúdo não será exibido pois navegamos para outra página */}
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

export default DiagnosticDetailFeb;

