
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, CheckCircle } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const DiagnosticDetailNov2023 = () => {
  const navigate = useNavigate();

  // Company data
  const companyData = {
    name: "TECNO CHAPA SOLUCOES EM CORTE E DOBRA LTDA",
    foundingDate: "01/2023",
    age: "2 anos",
    sector: "Indústria/Serviços (Corte e Dobra Metálica)",
    analysisDate: "01/01/2023 a 31/12/2023",
    requestedBy: "Vitoria",
    status: "SAUDÁVEL"
  };

  // Liquidity parameters
  const liquidityParameters = [
    {
      indicator: "Liquidez Corrente",
      value: "34,57",
      reference: "> 1,5",
      analysis: "Muito saudável. A empresa tem R$ 34,57 para cada R$ 1,00 de dívida de curto prazo."
    },
    {
      indicator: "Liquidez Seca",
      value: "34,57",
      reference: "> 1,0",
      analysis: "Excelente. Sem estoques e com liquidez em caixa e contas a receber."
    },
    {
      indicator: "Liquidez Imediata",
      value: "30,57",
      reference: "> 0,5",
      analysis: "Altamente sólida. Caixa cobre 30 vezes o passivo de curto prazo."
    }
  ];

  // Operational activities
  const operationalActivities = [
    {
      indicator: "Prazo Médio de Recebimento (PMR)",
      value: "1,32 dias",
      interpretation: "< 30 dias",
      analysis: "Recebimentos quase imediatos. Excelente eficiência."
    },
    {
      indicator: "Prazo Médio de Estocagem (PME)",
      value: "0,00 dias",
      interpretation: "< 40 dias",
      analysis: "Sem estoque. Modelo sob demanda."
    },
    {
      indicator: "Prazo Médio de Pagamento (PMP)",
      value: "0,80 dias",
      interpretation: "> 15 dias",
      analysis: "Pagamentos muito rápidos. Baixo poder de barganha."
    },
    {
      indicator: "Ciclo Operacional\nPMR + PME",
      value: "1,32 dias",
      interpretation: "-",
      analysis: "Ciclo operacional extremamente curto."
    },
    {
      indicator: "Ciclo de Caixa",
      value: "0,52 dias",
      interpretation: "-",
      analysis: "Caixa gira rapidamente. Alta eficiência."
    }
  ];

  // Capital structure
  const capitalStructure = [
    {
      indicator: "Índice de Endividamento Geral",
      value: "2,81%",
      interpretation: "< 60%",
      analysis: "Endividamento muito baixo."
    },
    {
      indicator: "Capital de Terceiros / Capital Próprio\nPassivo / PL",
      value: "2,89%",
      interpretation: "< 100%",
      analysis: "Alta autonomia financeira."
    },
    {
      indicator: "Composição do Endividamento",
      value: "100%",
      interpretation: "-",
      analysis: "Toda dívida é de curto prazo."
    },
    {
      indicator: "Grau de Alavancagem Financeira",
      value: "1,03",
      interpretation: "1,5 – 2,5",
      analysis: "Estrutura conservadora. Pouco uso de dívida."
    }
  ];

  // Interest coverage
  const interestCoverage = [
    {
      indicator: "Índice de Cobertura de Juros",
      value: "-",
      interpretation: "> 2",
      analysis: "Não aplicável. Não há despesas financeiras registradas."
    }
  ];

  // Principal payment
  const principalPayment = [
    {
      indicator: "Dívida Líquida/EBITDA",
      value: "-0,76",
      interpretation: "< 3",
      analysis: "Caixa líquido. Sem necessidade de financiamento externo."
    },
    {
      indicator: "Dívida Líquida/PL",
      value: "-0,85",
      interpretation: "< 1,5",
      analysis: "Indicador muito saudável."
    }
  ];

  // Profitability and efficiency
  const profitabilityEfficiency = [
    {
      indicator: "Giro do Ativo Fixo",
      value: "84,32",
      interpretation: "> 5",
      analysis: "Muito eficiente. Ativo fixo bem utilizado."
    },
    {
      indicator: "Giro do Ativo Permanente",
      value: "84,32",
      interpretation: "> 1",
      analysis: "Alta produtividade dos ativos não circulantes."
    },
    {
      indicator: "Giro do Ativo Total",
      value: "2,55",
      interpretation: "> 1",
      analysis: "Bom uso de todos os ativos."
    }
  ];

  // Margins
  const margins = [
    {
      indicator: "Margem Bruta",
      value: "58,82%",
      interpretation: "> 30%",
      analysis: "Excelente rentabilidade na venda."
    },
    {
      indicator: "Margem Operacional",
      value: "42,61%",
      interpretation: "> 20%",
      analysis: "Ótima performance operacional."
    },
    {
      indicator: "Margem Líquida",
      value: "42,61%",
      interpretation: "> 15%",
      analysis: "Margem final bastante elevada."
    }
  ];

  // Return on capital
  const returnOnCapital = [
    {
      indicator: "ROA (Retorno sobre o Ativo)",
      value: "108,79%",
      interpretation: "> 10%",
      analysis: "Excelente retorno sobre ativos totais."
    },
    {
      indicator: "ROE (Retorno sobre o Patrimônio Líquido)",
      value: "111,95%",
      interpretation: "> 15%",
      analysis: "Retorno altíssimo para os sócios."
    }
  ];

  // Conclusion
  const conclusion = {
    status: "FINANCEIRA SAÚDAVEL",
    positivePoints: [
      "Alta liquidez e posição de caixa sólida",
      "Endividamento baixo e estrutura conservadora",
      "Excelente rentabilidade e margens operacionais",
      "Alta eficiência nas operações e retorno sobre capital elevado"
    ]
  };

  return (
    <div className="container mx-auto py-8 px-4 sm:px-6 max-w-6xl">
      <div className="flex flex-col space-y-6">
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => navigate('/financial-health/history')}
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Voltar</span>
          </Button>
          <h1 className="text-3xl font-bold">Exame de Risco de Falência</h1>
        </div>

        {/* Company Information Card */}
        <Card className="w-full border bg-card shadow-sm">
          <CardContent className="p-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Empresa:</p>
                  <p className="font-semibold">{companyData.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Data de Criação da Empresa:</p>
                  <p>{companyData.foundingDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Setor:</p>
                  <p>{companyData.sector}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Data de análise dos dados:</p>
                  <p>{companyData.analysisDate}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Idade da empresa:</p>
                  <p>{companyData.age}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Solicitado por:</p>
                  <p>{companyData.requestedBy}</p>
                </div>
              </div>

              <div className="flex flex-col items-center justify-center space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Status da Empresa</p>
                  <Badge variant="outline" className="bg-green-500 text-white px-3 py-1 uppercase font-semibold text-sm rounded-full">
                    {companyData.status}
                  </Badge>
                </div>
                <div className="text-green-500">
                  <CheckCircle className="h-16 w-16" />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Liquidity Parameters */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors">
              <h2 className="text-xl font-semibold">Parâmetros de Liquidez</h2>
              <ChevronLeft className="h-5 w-5 transform -rotate-90" />
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] max-w-full mx-auto">
            <SheetHeader>
              <SheetTitle className="text-xl">Parâmetros de Liquidez</SheetTitle>
              <SheetDescription>
                Análise dos indicadores de liquidez da empresa
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Indicador</th>
                    <th className="border p-2 text-left">Valor Obtido</th>
                    <th className="border p-2 text-left">Referência</th>
                    <th className="border p-2 text-left">Análise do Indicador</th>
                  </tr>
                </thead>
                <tbody>
                  {liquidityParameters.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="border p-2 font-medium">{item.indicator}</td>
                      <td className="border p-2">{item.value}</td>
                      <td className="border p-2">{item.reference}</td>
                      <td className="border p-2">{item.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SheetContent>
        </Sheet>

        {/* Operational Activities */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors">
              <h2 className="text-xl font-semibold">Atividades Operacionais</h2>
              <ChevronLeft className="h-5 w-5 transform -rotate-90" />
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] max-w-full mx-auto">
            <SheetHeader>
              <SheetTitle className="text-xl">Atividades Operacionais</SheetTitle>
              <SheetDescription>
                Análise do ciclo operacional e de caixa da empresa
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Indicador</th>
                    <th className="border p-2 text-left">Valor Obtido</th>
                    <th className="border p-2 text-left">Interpretação</th>
                    <th className="border p-2 text-left">Análise do Indicador</th>
                  </tr>
                </thead>
                <tbody>
                  {operationalActivities.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="border p-2 font-medium">{item.indicator}</td>
                      <td className="border p-2">{item.value}</td>
                      <td className="border p-2">{item.interpretation}</td>
                      <td className="border p-2">{item.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SheetContent>
        </Sheet>

        {/* Capital Structure */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors">
              <h2 className="text-xl font-semibold">Estrutura de Capital</h2>
              <ChevronLeft className="h-5 w-5 transform -rotate-90" />
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] max-w-full mx-auto">
            <SheetHeader>
              <SheetTitle className="text-xl">Estrutura de Capital</SheetTitle>
              <SheetDescription>
                Análise da estrutura de capital e endividamento da empresa
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Indicador</th>
                    <th className="border p-2 text-left">Valor Obtido</th>
                    <th className="border p-2 text-left">Interpretação</th>
                    <th className="border p-2 text-left">Análise do Indicador</th>
                  </tr>
                </thead>
                <tbody>
                  {capitalStructure.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="border p-2 font-medium">{item.indicator}</td>
                      <td className="border p-2">{item.value}</td>
                      <td className="border p-2">{item.interpretation}</td>
                      <td className="border p-2">{item.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SheetContent>
        </Sheet>

        {/* Interest Coverage */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors">
              <h2 className="text-xl font-semibold">Cobertura de Juros</h2>
              <ChevronLeft className="h-5 w-5 transform -rotate-90" />
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] max-w-full mx-auto">
            <SheetHeader>
              <SheetTitle className="text-xl">Cobertura de Juros</SheetTitle>
              <SheetDescription>
                Análise da capacidade da empresa de cobrir suas despesas financeiras
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Indicador</th>
                    <th className="border p-2 text-left">Valor Obtido</th>
                    <th className="border p-2 text-left">Interpretação</th>
                    <th className="border p-2 text-left">Análise do Indicador</th>
                  </tr>
                </thead>
                <tbody>
                  {interestCoverage.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="border p-2 font-medium">{item.indicator}</td>
                      <td className="border p-2">{item.value}</td>
                      <td className="border p-2">{item.interpretation}</td>
                      <td className="border p-2">{item.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SheetContent>
        </Sheet>

        {/* Principal Payment */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors">
              <h2 className="text-xl font-semibold">Pagamento do Principal</h2>
              <ChevronLeft className="h-5 w-5 transform -rotate-90" />
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] max-w-full mx-auto">
            <SheetHeader>
              <SheetTitle className="text-xl">Pagamento do Principal</SheetTitle>
              <SheetDescription>
                Análise da capacidade da empresa de pagar o principal de sua dívida
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Indicador</th>
                    <th className="border p-2 text-left">Valor Obtido</th>
                    <th className="border p-2 text-left">Interpretação</th>
                    <th className="border p-2 text-left">Análise do Indicador</th>
                  </tr>
                </thead>
                <tbody>
                  {principalPayment.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="border p-2 font-medium">{item.indicator}</td>
                      <td className="border p-2">{item.value}</td>
                      <td className="border p-2">{item.interpretation}</td>
                      <td className="border p-2">{item.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SheetContent>
        </Sheet>

        {/* Profitability and Efficiency */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors">
              <h2 className="text-xl font-semibold">Rentabilidade e Eficiência</h2>
              <ChevronLeft className="h-5 w-5 transform -rotate-90" />
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] max-w-full mx-auto">
            <SheetHeader>
              <SheetTitle className="text-xl">Rentabilidade e Eficiência</SheetTitle>
              <SheetDescription>
                Análise de indicadores de rentabilidade e eficiência operacional
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Indicador</th>
                    <th className="border p-2 text-left">Valor Obtido</th>
                    <th className="border p-2 text-left">Interpretação</th>
                    <th className="border p-2 text-left">Análise do Indicador</th>
                  </tr>
                </thead>
                <tbody>
                  {profitabilityEfficiency.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="border p-2 font-medium">{item.indicator}</td>
                      <td className="border p-2">{item.value}</td>
                      <td className="border p-2">{item.interpretation}</td>
                      <td className="border p-2">{item.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SheetContent>
        </Sheet>

        {/* Margins */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors">
              <h2 className="text-xl font-semibold">Margens</h2>
              <ChevronLeft className="h-5 w-5 transform -rotate-90" />
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] max-w-full mx-auto">
            <SheetHeader>
              <SheetTitle className="text-xl">Margens</SheetTitle>
              <SheetDescription>
                Análise das margens operacionais e lucratividade da empresa
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Indicador</th>
                    <th className="border p-2 text-left">Valor Obtido</th>
                    <th className="border p-2 text-left">Interpretação</th>
                    <th className="border p-2 text-left">Análise do Indicador</th>
                  </tr>
                </thead>
                <tbody>
                  {margins.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="border p-2 font-medium">{item.indicator}</td>
                      <td className="border p-2">{item.value}</td>
                      <td className="border p-2">{item.interpretation}</td>
                      <td className="border p-2">{item.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SheetContent>
        </Sheet>

        {/* Return on Capital */}
        <Sheet>
          <SheetTrigger asChild>
            <div className="border rounded-lg p-4 flex justify-between items-center cursor-pointer hover:bg-muted/30 transition-colors">
              <h2 className="text-xl font-semibold">Retorno sobre o Capital</h2>
              <ChevronLeft className="h-5 w-5 transform -rotate-90" />
            </div>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] max-w-full mx-auto">
            <SheetHeader>
              <SheetTitle className="text-xl">Retorno sobre o Capital</SheetTitle>
              <SheetDescription>
                Análise dos indicadores de retorno sobre investimentos e patrimônio
              </SheetDescription>
            </SheetHeader>
            <div className="mt-6 overflow-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-2 text-left">Indicador</th>
                    <th className="border p-2 text-left">Valor Obtido</th>
                    <th className="border p-2 text-left">Interpretação</th>
                    <th className="border p-2 text-left">Análise do Indicador</th>
                  </tr>
                </thead>
                <tbody>
                  {returnOnCapital.map((item, index) => (
                    <tr key={index} className="border-b hover:bg-muted/20">
                      <td className="border p-2 font-medium">{item.indicator}</td>
                      <td className="border p-2">{item.value}</td>
                      <td className="border p-2">{item.interpretation}</td>
                      <td className="border p-2">{item.analysis}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SheetContent>
        </Sheet>

        {/* Conclusion */}
        <div className="mt-8 bg-muted/20 p-6 rounded-lg">
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-4">Conclusão</h2>
            <Separator className="mb-4" />
            <div className="space-y-4">
              <p className="mb-4">
                Com base nos indicadores analisados, conclui-se que a empresa está em situação <span className="font-bold text-green-500">{conclusion.status}</span>.
              </p>
              <h4 className="font-semibold mb-2">Principais Pontos positivos:</h4>
              <ul className="list-disc pl-6 space-y-1">
                {conclusion.positivePoints.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-4 mt-8">
          <Button 
            variant="outline"
            onClick={() => navigate('/financial-health/history')}
          >
            Voltar ao Histórico
          </Button>
          <Button>
            Aplicar Tratamento
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticDetailNov2023;
