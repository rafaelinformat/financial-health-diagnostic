import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const DiagnosticDetailed = () => {
  const navigate = useNavigate();
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (section: string) => {
    setOpenSections((prev) =>
      prev.includes(section)
        ? prev.filter((s) => s !== section)
        : [...prev, section]
    );
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Diagnóstico Detalhado</h1>
          <p className="text-muted-foreground mb-6">
            Análise completa dos indicadores financeiros da empresa
          </p>
        </div>

        <Tabs defaultValue="diagnostico" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico-geral" onClick={() => navigate('/financial-health')}>Diagnóstico Geral</TabsTrigger>
            <TabsTrigger value="diagnostico">Diagnóstico Detalhado</TabsTrigger>
            <TabsTrigger value="historico" onClick={() => navigate('/financial-health/history')}>Histórico do Diagnóstico</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="diagnostico" className="animate-fade-in space-y-8">
            <div className="bg-slate-100 p-6 rounded-lg">
              <h2 className="text-2xl font-semibold text-indigo-900 mb-1">
                Resultado do Diagnostico de Saúde Financeira Detalhado
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
                          <p className="font-medium">TRANS ENGENHARIA</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Data de análise dos dados:</p>
                          <p className="font-medium">2024</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Data de Criação da Empresa:</p>
                          <p className="font-medium">10/12/2004</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Idade da empresa:</p>
                          <p className="font-medium">20 anos</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Setor:</p>
                          <p className="font-medium">Serviço Instalação Hidráulica/Elétrica</p>
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Solicitado por:</p>
                          <p className="font-medium">Ronaldo</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-center bg-slate-50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">Status da Empresa</p>
                      <div className="my-2">
                        <Badge className="bg-green-500 hover:bg-green-600">Saudável</Badge>
                      </div>
                      <div className="mt-2 flex justify-center">
                        <CheckCircle className="h-10 w-10 text-green-500" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Accordion type="multiple" className="space-y-2">
                {/* Parâmetros de Liquidez */}
                <AccordionItem value="liquidez">
                  <AccordionTrigger onClick={() => toggleSection('liquidez')}>
                    Parâmetros de Liquidez
                  </AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 px-2 py-1">Indicador</th>
                          <th className="border border-gray-300 px-2 py-1">Valor</th>
                          <th className="border border-gray-300 px-2 py-1">Referência</th>
                          <th className="border border-gray-300 px-2 py-1">Resultado da Análise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Liquidez Corrente</td>
                          <td className="border border-gray-300 px-2 py-1">1,68x</td>
                          <td className="border border-gray-300 px-2 py-1">Ideal &gt; 1,5</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Alta capacidade de pagamento das obrigações de curto prazo</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Liquidez Seca</td>
                          <td className="border border-gray-300 px-2 py-1">1,45x</td>
                          <td className="border border-gray-300 px-2 py-1">Ideal &gt; 1</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Ampla capacidade de liquidez sem depender de estoques</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Liquidez Imediata</td>
                          <td className="border border-gray-300 px-2 py-1">0,26x</td>
                          <td className="border border-gray-300 px-2 py-1">Ideal &gt; 1</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Caixa suficiente para cobrir obrigações de curto prazo</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>

                {/* Estrutura de Capital */}
                <AccordionItem value="estrutura">
                  <AccordionTrigger onClick={() => toggleSection('estrutura')}>
                    Estrutura de Capital
                  </AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 px-2 py-1">Indicador</th>
                          <th className="border border-gray-300 px-2 py-1">Valor</th>
                          <th className="border border-gray-300 px-2 py-1">Interpretação</th>
                          <th className="border border-gray-300 px-2 py-1">Resultado da Análise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Índice de Endividamento Geral</td>
                          <td className="border border-gray-300 px-2 py-1">0,585</td>
                          <td className="border border-gray-300 px-2 py-1">&lt; 0,6 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Bom - Nível de endividamento dentro do ideal</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Capital de Terceiros / Capital Próprio</td>
                          <td className="border border-gray-300 px-2 py-1">0,574</td>
                          <td className="border border-gray-300 px-2 py-1">&lt; 1 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Bom - Financiamento majoritário com capital próprio</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Composição do Endividamento</td>
                          <td className="border border-gray-300 px-2 py-1">1,000</td>
                          <td className="border border-gray-300 px-2 py-1">0,3 - 0,6 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Alto - Todo o endividamento é de curto prazo</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>

                {/* Pagamento do Principal */}
                <AccordionItem value="pagprincipal">
                  <AccordionTrigger onClick={() => toggleSection('pagprincipal')}>
                    Pagamento do Principal
                  </AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 px-2 py-1">Indicador</th>
                          <th className="border border-gray-300 px-2 py-1">Valor</th>
                          <th className="border border-gray-300 px-2 py-1">Interpretação</th>
                          <th className="border border-gray-300 px-2 py-1">Resultado da Análise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Dívida Líquida/EBITDA</td>
                          <td className="border border-gray-300 px-2 py-1">-0,78x</td>
                          <td className="border border-gray-300 px-2 py-1">&lt; 3 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Negativo - Caixa superior à dívida</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Dívida Líquida/PL</td>
                          <td className="border border-gray-300 px-2 py-1">-0,61x</td>
                          <td className="border border-gray-300 px-2 py-1">&lt; 0,5 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Negativo - Posição financeira confortável</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>

                {/* Margens */}
                <AccordionItem value="margens">
                  <AccordionTrigger onClick={() => toggleSection('margens')}>
                    Margens
                  </AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 px-2 py-1">Indicador</th>
                          <th className="border border-gray-300 px-2 py-1">Valor</th>
                          <th className="border border-gray-300 px-2 py-1">Interpretação</th>
                          <th className="border border-gray-300 px-2 py-1">Resultado da Análise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Margem Bruta</td>
                          <td className="border border-gray-300 px-2 py-1">100%</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 40% (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Alta margem de contribuição</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Margem Operacional</td>
                          <td className="border border-gray-300 px-2 py-1">37,18%</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 10% (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Alta eficiência operacional</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Margem Líquida</td>
                          <td className="border border-gray-300 px-2 py-1">31,8%</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 5% (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Alta eficiência na conversão de receita em lucro</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion type="multiple" className="space-y-2">
                {/* Atividades Operacionais */}
                <AccordionItem value="operacionais">
                  <AccordionTrigger onClick={() => toggleSection('operacionais')}>
                    Atividades Operacionais
                  </AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 px-2 py-1">Indicador</th>
                          <th className="border border-gray-300 px-2 py-1">Valor</th>
                          <th className="border border-gray-300 px-2 py-1">Interpretação</th>
                          <th className="border border-gray-300 px-2 py-1">Resultado da Análise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Prazo Médio de Recebimento (PMR)</td>
                          <td className="border border-gray-300 px-2 py-1">69,97 dias</td>
                          <td className="border border-gray-300 px-2 py-1">&lt; 30 dias (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Moderado - Prazo de recebimento em geral elevado</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Prazo Médio de Estocagem (PME)</td>
                          <td className="border border-gray-300 px-2 py-1">0,00 dias</td>
                          <td className="border border-gray-300 px-2 py-1">&lt; 60 dias (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Sem estoque acumulado</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Prazo Médio de Pagamento (PMP)</td>
                          <td className="border border-gray-300 px-2 py-1">10,99 dias</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 30 dias (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Baixo - Prazos curtos de pagamento</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Ciclo Operacional</td>
                          <td className="border border-gray-300 px-2 py-1">69,97 dias</td>
                          <td className="border border-gray-300 px-2 py-1">&lt; 150 dias (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Bom - Ciclo operacional eficiente</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Ciclo de Caixa</td>
                          <td className="border border-gray-300 px-2 py-1">58,91 dias</td>
                          <td className="border border-gray-300 px-2 py-1">&lt; 90 dias (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Bom - Ciclo de caixa equilibrado</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>

                {/* Cobertura de Juros */}
                <AccordionItem value="juros">
                  <AccordionTrigger onClick={() => toggleSection('juros')}>
                    Cobertura de Juros
                  </AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 px-2 py-1">Indicador</th>
                          <th className="border border-gray-300 px-2 py-1">Valor</th>
                          <th className="border border-gray-300 px-2 py-1">Interpretação</th>
                          <th className="border border-gray-300 px-2 py-1">Resultado da Análise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Índice de Cobertura de Juros</td>
                          <td className="border border-gray-300 px-2 py-1">19,94x</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 3 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Alta capacidade de pagamento dos juros</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>

                {/* Rentabilidade e Eficiência */}
                <AccordionItem value="rentabilidade">
                  <AccordionTrigger onClick={() => toggleSection('rentabilidade')}>
                    Rentabilidade e Eficiência
                  </AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 px-2 py-1">Indicador</th>
                          <th className="border border-gray-300 px-2 py-1">Valor</th>
                          <th className="border border-gray-300 px-2 py-1">Interpretação</th>
                          <th className="border border-gray-300 px-2 py-1">Resultado da Análise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Giro do Ativo Total</td>
                          <td className="border border-gray-300 px-2 py-1">2,30x</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 0,5 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Alta eficiência no uso dos ativos</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Giro do Ativo Permanente</td>
                          <td className="border border-gray-300 px-2 py-1">5,99x</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 0,5 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Bom - Eficiência no uso dos ativos permanentes</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">Giro do Ativo Total</td>
                          <td className="border border-gray-300 px-2 py-1">5,99x</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 0,5 (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Bom - Eficiência geral no uso dos ativos</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>

                {/* Retorno sobre o Capital */}
                <AccordionItem value="retorno">
                  <AccordionTrigger onClick={() => toggleSection('retorno')}>
                    Retorno sobre o Capital
                  </AccordionTrigger>
                  <AccordionContent>
                    <table className="w-full text-left border-collapse border border-gray-200">
                      <thead>
                        <tr className="bg-muted">
                          <th className="border border-gray-300 px-2 py-1">Indicador</th>
                          <th className="border border-gray-300 px-2 py-1">Valor</th>
                          <th className="border border-gray-300 px-2 py-1">Interpretação</th>
                          <th className="border border-gray-300 px-2 py-1">Resultado da Análise</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">ROA (Retorno sobre o Ativo)</td>
                          <td className="border border-gray-300 px-2 py-1">73,38%</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 5% (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Retorno elevado sobre os ativos totais</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-2 py-1">ROE (Retorno sobre o Patrimônio Líquido)</td>
                          <td className="border border-gray-300 px-2 py-1">77,24%</td>
                          <td className="border border-gray-300 px-2 py-1">&gt; 15% (Ideal)</td>
                          <td className="border border-gray-300 px-2 py-1">Excelente - Retorno excepcional para os acionistas</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            <Card className="border-border/40 shadow-sm mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Conclusão</h3>
                <p className="p-4 bg-muted/20 rounded-md">
                  A empresa apresenta uma situação financeira saudável, com alta rentabilidade, sólida posição de caixa e baixo endividamento. Os principais destaques incluem excelente capacidade de pagamento, alta eficiência operacional e retorno excepcional sobre o patrimônio líquido.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="diagnostico-geral">
            {/* This content will not be displayed as we navigate away */}
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
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DiagnosticDetailed;
