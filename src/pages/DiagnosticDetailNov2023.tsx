
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

const DiagnosticDetailNov2023 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const diagnosticData = {
    company: {
      name: 'TECNO CHAPA SOLUCOES EM CORTE E DOBRA LTDA',
      creationDate: '01/2023',
      age: '2 anos',
      sector: 'Indústria/Serviços (Corte e Dobra Metálica)',
      analysisFrom: '01/01/2023',
      analysisTo: '31/12/2023',
      requestedBy: 'Vitoria',
      status: 'SAUDÁVEL',
      analysisYear: '2023',
    },
    liquidityParameters: [
      {
        indicator: 'Liquidez Corrente',
        value: '34,57',
        desiredValue: '> 1,5',
        analysis: 'Muito saudável. A empresa tem R$ 34,57 para cada R$ 1,00 de dívida de curto prazo.'
      },
      {
        indicator: 'Liquidez Seca',
        value: '34,57',
        desiredValue: '> 1,0',
        analysis: 'Excelente. Sem estoques e com liquidez em caixa e contas a receber.'
      },
      {
        indicator: 'Liquidez Imediata',
        value: '30,57',
        desiredValue: '> 0,5',
        analysis: 'Altamente sólida. Caixa cobre 30 vezes o passivo de curto prazo.'
      }
    ],
    operationalActivities: [
      {
        indicator: 'Prazo Médio de Recebimento (PMR)',
        value: '1,32 dias',
        desiredValue: '< 30 dias',
        analysis: 'Recebimentos quase imediatos. Excelente eficiência.'
      },
      {
        indicator: 'Prazo Médio de Estocagem (PME)',
        value: '0,00 dias',
        desiredValue: '< 40 dias',
        analysis: 'Sem estoque. Modelo sob demanda.'
      },
      {
        indicator: 'Prazo Médio de Pagamento (PMP)',
        value: '0,80 dias',
        desiredValue: '> 15 dias',
        analysis: 'Pagamentos muito rápidos. Baixo poder de barganha.'
      },
      {
        indicator: 'Ciclo Operacional',
        value: 'PMR + PME',
        analysisValue: '1,32 dias',
        desiredValue: '-',
        analysis: 'Ciclo operacional extremamente curto.'
      },
      {
        indicator: 'Ciclo de Caixa',
        value: '',
        analysisValue: '0,52 dias',
        desiredValue: '-',
        analysis: 'Caixa gira rapidamente. Alta eficiência.'
      }
    ],
    capitalStructure: [
      {
        indicator: 'Índice de Endividamento Geral',
        value: '2,81%',
        desiredValue: '< 60%',
        analysis: 'Endividamento muito baixo.'
      },
      {
        indicator: 'Capital de Terceiros / Capital Próprio',
        value: '2,89%',
        desiredValue: '< 100%',
        analysis: 'Alta autonomia financeira.'
      },
      {
        indicator: 'Composição do Endividamento',
        value: '100%',
        desiredValue: '-',
        analysis: 'Toda dívida é de curto prazo.'
      },
      {
        indicator: 'Grau de Alavancagem Financeira',
        value: '1,03',
        desiredValue: '1,5 – 2,5',
        analysis: 'Estrutura conservadora. Pouco uso de dívida.'
      }
    ],
    interestCoverage: [
      {
        indicator: 'Índice de Cobertura de Juros',
        value: '-',
        desiredValue: '> 2',
        analysis: 'Não aplicável. Não há despesas financeiras registradas.'
      }
    ],
    principalPayment: [
      {
        indicator: 'Dívida Líquida/EBITDA',
        value: '-0,76',
        desiredValue: '< 3',
        analysis: 'Caixa líquido. Sem necessidade de financiamento externo.'
      },
      {
        indicator: 'Dívida Líquida/PL',
        value: '-0,85',
        desiredValue: '< 1,5',
        analysis: 'Indicador muito saudável.'
      }
    ],
    profitabilityEfficiency: [
      {
        indicator: 'Giro do Ativo Fixo',
        value: '84,32',
        desiredValue: '> 5',
        analysis: 'Muito eficiente. Ativo fixo bem utilizado.'
      },
      {
        indicator: 'Giro do Ativo Permanente',
        value: '84,32',
        desiredValue: '> 1',
        analysis: 'Alta produtividade dos ativos não circulantes.'
      },
      {
        indicator: 'Giro do Ativo Total',
        value: '2,55',
        desiredValue: '> 1',
        analysis: 'Bom uso de todos os ativos.'
      }
    ],
    margins: [
      {
        indicator: 'Margem Bruta',
        value: '58,82%',
        desiredValue: '> 30%',
        analysis: 'Excelente rentabilidade na venda.'
      },
      {
        indicator: 'Margem Operacional',
        value: '42,61%',
        desiredValue: '> 20%',
        analysis: 'Ótima performance operacional.'
      },
      {
        indicator: 'Margem Líquida',
        value: '42,61%',
        desiredValue: '> 15%',
        analysis: 'Margem final bastante elevada.'
      }
    ],
    returnOnCapital: [
      {
        indicator: 'ROA (Retorno sobre o Ativo)',
        value: '108,79%',
        desiredValue: '> 10%',
        analysis: 'Excelente retorno sobre ativos totais.'
      },
      {
        indicator: 'ROE (Retorno sobre o Patrimônio Líquido)',
        value: '111,95%',
        desiredValue: '> 15%',
        analysis: 'Retorno altíssimo para os sócios.'
      }
    ],
    conclusion: {
      status: 'FINANCEIRA SAÚDAVEL',
      positivePoints: [
        'Alta liquidez e posição de caixa sólida',
        'Endividamento baixo e estrutura conservadora',
        'Excelente rentabilidade e margens operacionais',
        'Alta eficiência nas operações e retorno sobre capital elevado'
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
            <th className="border p-2 text-left">Valor Desejado</th>
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
            <th className="border p-2 text-left">Referência</th>
            <th className="border p-2 text-left">Análise do Indicador</th>
          </tr>
        </thead>
        <tbody>
          {diagnosticData.capitalStructure.map((item, index) => (
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

  const renderInterestCoverageTable = () => (
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
          {diagnosticData.interestCoverage.map((item, index) => (
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

  const renderPrincipalPaymentTable = () => (
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
          {diagnosticData.principalPayment.map((item, index) => (
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

  const renderProfitabilityEfficiencyTable = () => (
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
          {diagnosticData.profitabilityEfficiency.map((item, index) => (
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

  const renderMarginsTable = () => (
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
          {diagnosticData.margins.map((item, index) => (
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

  const renderReturnOnCapitalTable = () => (
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
          {diagnosticData.returnOnCapital.map((item, index) => (
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
          <h1 className="text-3xl font-bold mb-2">Resultado do Diagnóstico de Saúde Financeira Detalhado - Novembro 2023</h1>
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

export default DiagnosticDetailNov2023;
