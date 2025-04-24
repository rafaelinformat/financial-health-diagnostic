import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { AlertCircle } from 'lucide-react';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DiagnosticDetailTecnoMontagensDec2024 = () => {
  const navigate = useNavigate();

  const diagnosticData = {
    company: {
      name: 'TECNO MONTAGENS SOLUÇÕES DE ENGENHARIA',
      creationDate: '01/2023',
      age: '2 anos',
      sector: 'Industrial – Montagens e Engenharia',
      analysisFrom: '01/06/2024',
      analysisTo: '31/12/2024',
      requestedBy: 'Vitória',
      status: 'RISCO FINANCEIRO MODERADO',
      analysisYear: '2024',
    },
    liquidityParameters: [
      {
        indicator: 'Liquidez Corrente',
        value: '6,11',
        desiredValue: '≥ 1,5',
        analysis: 'Excelente – Sinaliza folga financeira no curto prazo',
      },
      {
        indicator: 'Liquidez Seca',
        value: '6,11',
        desiredValue: '≥ 1,0',
        analysis: 'Estoque irrelevante – mesmo valor da corrente',
      },
      {
        indicator: 'Liquidez Imediata',
        value: '4,16',
        desiredValue: '≥ 0,5',
        analysis: 'Muito positiva – empresa pode quitar 4x suas obrigações de curto prazo com o caixa',
      },
    ],
    operationalActivities: [
      {
        indicator: 'PMR',
        value: '4,0 dias',
        desiredValue: 'até 30 dias',
        analysis: 'Excelente giro – baixo prazo de recebimento',
      },
      {
        indicator: 'PME',
        value: '0,01 dia',
        desiredValue: 'até 60 dias',
        analysis: 'Estoque zerado – pode indicar risco de ruptura',
      },
      {
        indicator: 'PMP',
        value: '0,21 dia',
        desiredValue: 'até 45 dias',
        analysis: 'Negociação fraca com fornecedores',
      },
      {
        indicator: 'Ciclo Operacional',
        value: '4,01 dias',
        desiredValue: '—',
        analysis: 'Ciclo extremamente curto',
      },
      {
        indicator: 'Ciclo de Caixa',
        value: '3,8 dias',
        desiredValue: '—',
        analysis: 'Empresa recebe antes de pagar – situação ideal',
      },
    ],
    capitalStructure: [
      {
        indicator: 'Endividamento Geral',
        value: '0,25',
        desiredValue: 'até 0,5',
        analysis: 'Baixo – estrutura conservadora',
      },
      {
        indicator: 'Capital de Terceiros / PL',
        value: '0,34',
        desiredValue: 'até 1,0',
        analysis: 'Empresa pouco alavancada',
      },
      {
        indicator: 'Composição do Endividamento',
        value: '0,48',
        desiredValue: '< 0,6',
        analysis: 'Boa proporção de dívidas no curto prazo',
      },
      {
        indicator: 'Alavancagem Financeira',
        value: '1,34',
        desiredValue: 'até 2,0',
        analysis: 'Empresa opera majoritariamente com capital próprio',
      },
    ],
    interestCoverage: [
      {
        indicator: 'Cobertura de Juros',
        value: '-29,37',
        desiredValue: '> 2,0',
        analysis: '❌ Negativo – prejuízo operacional não cobre nem os juros',
      },
    ],
    principalPayment: [
      {
        indicator: 'Dívida Líquida / EBITDA',
        value: 'Negativa',
        desiredValue: '< 3,0',
        analysis: 'Caixa maior que dívida – empresa líquida',
      },
      {
        indicator: 'Dívida Líquida / PL',
        value: '-0,34',
        desiredValue: '< 1,0',
        analysis: 'Empresa tem caixa superior ao passivo',
      },
    ],
    profitabilityEfficiency: [
      {
        indicator: 'Giro do Ativo Total',
        value: '1,38',
        desiredValue: '≥ 1,0',
        analysis: 'Ativo bem utilizado',
      },
      {
        indicator: 'Giro do Ativo Fixo',
        value: '220,6',
        desiredValue: '≥ 2,0',
        analysis: 'Ativo fixo subutilizado',
      },
      {
        indicator: 'Giro do Ativo Permanente',
        value: '5,33',
        desiredValue: '≥ 1,5',
        analysis: 'Bom aproveitamento do ativo não circulante',
      },
    ],
    margins: [
      {
        indicator: 'Margem Bruta',
        value: '68,2%',
        desiredValue: '30–60%',
        analysis: 'Excelente margem de contribuição',
      },
      {
        indicator: 'Margem Operacional',
        value: '-6,5%',
        desiredValue: '15–30%',
        analysis: '❌ Prejuízo operacional – alta carga de despesas',
      },
      {
        indicator: 'Margem Líquida',
        value: '-6,5%',
        desiredValue: '10–25%',
        analysis: '❌ Empresa perdeu resultado no semestre',
      },
    ],
    returnOnCapital: [
      {
        indicator: 'ROA',
        value: '—',
        desiredValue: '—',
        analysis: '(Não informado)',
      },
      {
        indicator: 'ROE',
        value: '—',
        desiredValue: '—',
        analysis: '(Não informado)',
      },
    ],
    conclusion: {
      status: 'RISCO FINANCEIRO MODERADO',
      positivePoints: [
        'Prejuízo operacional no segundo semestre',
        'Estoques praticamente zerados, o que pode comprometer a continuidade das vendas',
        'Liquidez excelente, mas margem líquida e cobertura de juros negativas',
        'Estrutura de capital conservadora com caixa superior ao endividamento',
      ],
    },
  };

  const TableWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="overflow-x-auto">{children}</div>
  );

  const renderLiquidityTable = () => (
    <TableWrapper>
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
          {diagnosticData.liquidityParameters.map((item, i) => (
            <tr key={i} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );

  const renderOperationalTable = () => (
    <TableWrapper>
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
          {diagnosticData.operationalActivities.map((item, i) => (
            <tr key={i} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value || item.analysisValue}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );

  const renderCapitalStructureTable = () => (
    <TableWrapper>
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
          {diagnosticData.capitalStructure.map((item, i) => (
            <tr key={i} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );

  const renderInterestCoverageTable = () => (
    <TableWrapper>
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
          {diagnosticData.interestCoverage.map((item, i) => (
            <tr key={i} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );

  const renderPrincipalPaymentTable = () => (
    <TableWrapper>
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
          {diagnosticData.principalPayment.map((item, i) => (
            <tr key={i} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );

  const renderProfitabilityEfficiencyTable = () => (
    <TableWrapper>
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
          {diagnosticData.profitabilityEfficiency.map((item, i) => (
            <tr key={i} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );

  const renderMarginsTable = () => (
    <TableWrapper>
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
          {diagnosticData.margins.map((item, i) => (
            <tr key={i} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );

  const renderReturnOnCapitalTable = () => (
    <TableWrapper>
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
          {diagnosticData.returnOnCapital.map((item, i) => (
            <tr key={i} className="border-b hover:bg-muted/20">
              <td className="border p-2 font-medium">{item.indicator}</td>
              <td className="border p-2">{item.value}</td>
              <td className="border p-2">{item.desiredValue}</td>
              <td className="border p-2">{item.analysis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  );

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Resultado do Diagnóstico de Saúde Financeira Detalhado - Dezembro 2024
          </h1>
          <p className="text-muted-foreground mb-6">
            Detalhamento completo do tratamento financeiro recomendado com base na análise realizada.
          </p>
        </div>

        <Tabs defaultValue="diagnostico" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico-geral" onClick={() => navigate('/financial-health')}>
              Diagnóstico Geral
            </TabsTrigger>
            <TabsTrigger value="diagnostico">
              Diagnóstico Detalhado
            </TabsTrigger>
            <TabsTrigger value="historico" onClick={() => navigate('/financial-health/history')}>
              Histórico do Diagnóstico
            </TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="diagnostico" className="animate-fade-in">
            <Card className="mb-8 border rounded-lg shadow-sm bg-white">
              <CardContent className="p-6">
                <div className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <p className="text-muted-foreground text-sm">Empresa:</p>
                    <p className="font-semibold">{diagnosticData.company.name}</p>

                    <p className="text-muted-foreground text-sm mt-4">Data de Criação da Empresa:</p>
                    <p className="font-semibold">{diagnosticData.company.creationDate}</p>

                    <p className="text-muted-foreground text-sm mt-4">Setor:</p>
                    <p className="font-semibold">{diagnosticData.company.sector}</p>
                  </div>

                  <div>
                    <p className="text-muted-foreground text-sm">Período de análise:</p>
                    <p className="font-semibold">{`${diagnosticData.company.analysisFrom} a ${diagnosticData.company.analysisTo}`}</p>

                    <p className="text-muted-foreground text-sm mt-4">Idade da empresa:</p>
                    <p className="font-semibold">{diagnosticData.company.age}</p>

                    <p className="text-muted-foreground text-sm mt-4">Solicitado por:</p>
                    <p className="font-semibold">{diagnosticData.company.requestedBy}</p>
                  </div>

                  <div className="flex flex-col items-center justify-center">
                    <p className="text-muted-foreground text-sm mb-3">Status da Empresa</p>
                    <Badge variant="outline" className="bg-yellow-500 text-white px-4 py-1 text-sm rounded-full">
                      {diagnosticData.company.status}
                    </Badge>
                    <div className="mt-5">
                      <AlertCircle className="h-16 w-16 text-yellow-500" />
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
                Com base nos indicadores analisados, conclui-se que a empresa está em situação de <span className="font-bold text-yellow-500">{diagnosticData.conclusion.status}</span>.
              </p>
              <p className="mb-2 font-semibold">Principais Fatores de Alerta:</p>
              <ul className="list-disc pl-6 space-y-1">
                {diagnosticData.conclusion.positivePoints.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="diagnostico-geral">
            {/* Conteúdo não exibido por navegação */}
          </TabsContent>

          <TabsContent value="historico">
            {/* Conteúdo não exibido por navegação */}
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
                  <p className="text-muted-foreground mb-4">Conteúdo em desenvolvimento</p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DiagnosticDetailTecnoMontagensDec2024;
