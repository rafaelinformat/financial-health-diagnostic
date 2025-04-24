
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DiagnosticDetailFeb2025 = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Resultado do Diagnóstico de Saúde Financeira Detalhado - Fevereiro 2025
          </h1>
          <p className="text-muted-foreground">
            Detalhamento completo do tratamento financeiro recomendado com base na análise realizada.
          </p>
        </div>

        <Tabs defaultValue="diagnostico-detalhado" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico-geral">Diagnóstico Geral</TabsTrigger>
            <TabsTrigger value="diagnostico-detalhado">Diagnóstico Detalhado</TabsTrigger>
            <TabsTrigger value="historico">Histórico do Diagnóstico</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="diagnostico-detalhado" className="animate-fade-in">
            <div className="glass-card p-6 rounded-lg mb-6">
              <h2 className="text-xl font-semibold mb-4">Exame de Risco de Falência</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Empresa:</span><br />
                    TECNO CHAPA SOLUCOES EM CORTE E DOBRA LTDA
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Data de Criação da Empresa:</span><br />
                    01/2023
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Setor:</span><br />
                    Indústria/Serviços (Corte e Dobra Metálica)
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Período de análise:</span><br />
                    01/02/2025 a 28/02/2025
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Idade da empresa:</span><br />
                    2 anos
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Solicitado por:</span><br />
                    Vitoria
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <span className="bg-green-600 text-white text-xs font-semibold uppercase px-3 py-1 rounded-full mb-2">
                    Saudável
                  </span>
                  <Check className="w-12 h-12 text-green-500" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="parametros-liquidez" className="border rounded-md">
                    <AccordionTrigger className="text-lg font-medium px-4 py-3">
                      Parâmetros de Liquidez
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm">
                      <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Indicador</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">Liquidez Corrente</td>
                            <td className="border border-gray-300 p-2">24,48</td>
                            <td className="border border-gray-300 p-2">&gt; 1,5</td>
                            <td className="border border-gray-300 p-2">Muito saudável. A empresa possui ampla cobertura de obrigações de curto prazo.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Liquidez Seca</td>
                            <td className="border border-gray-300 p-2">17,44</td>
                            <td className="border border-gray-300 p-2">&gt; 1,0</td>
                            <td className="border border-gray-300 p-2">Excelente. Mesmo sem estoques, empresa permanece muito solvente.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Liquidez Imediata</td>
                            <td className="border border-gray-300 p-2">7,12</td>
                            <td className="border border-gray-300 p-2">&gt; 0,5</td>
                            <td className="border border-gray-300 p-2">Excelente liquidez imediata.</td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="estrutura-capital" className="border rounded-md">
                    <AccordionTrigger className="text-lg font-medium px-4 py-3">
                      Estrutura de Capital
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm">
                      <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Indicador</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">Endividamento Geral</td>
                            <td className="border border-gray-300 p-2">14,51%</td>
                            <td className="border border-gray-300 p-2">&lt; 50%</td>
                            <td className="border border-gray-300 p-2">Muito saudável. Baixa dependência de capital de terceiros.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Passivo / PL</td>
                            <td className="border border-gray-300 p-2">0,17</td>
                            <td className="border border-gray-300 p-2">&lt; 1,0</td>
                            <td className="border border-gray-300 p-2">Boa estrutura de capital próprio.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Composição do Endividamento</td>
                            <td className="border border-gray-300 p-2">26,77%</td>
                            <td className="border border-gray-300 p-2">&lt; 50%</td>
                            <td className="border border-gray-300 p-2">Prevalência de passivos de longo prazo.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Alavancagem Financeira</td>
                            <td className="border border-gray-300 p-2">1,17</td>
                            <td className="border border-gray-300 p-2">&lt; 2,0</td>
                            <td className="border border-gray-300 p-2">Alavancagem sob controle.</td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="pagamento-principal" className="border rounded-md">
                    <AccordionTrigger className="text-lg font-medium px-4 py-3">
                      Pagamento do Principal
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm">
                      <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Indicador</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">Dívida Líquida / EBITDA</td>
                            <td className="border border-gray-300 p-2">-2,88</td>
                            <td className="border border-gray-300 p-2">&lt; 3,0</td>
                            <td className="border border-gray-300 p-2">Caixa excedente à dívida.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Dívida Líquida / PL</td>
                            <td className="border border-gray-300 p-2">-0,20</td>
                            <td className="border border-gray-300 p-2">&lt; 1,0</td>
                            <td className="border border-gray-300 p-2">Estrutura muito robusta financeiramente.</td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="margens" className="border rounded-md">
                    <AccordionTrigger className="text-lg font-medium px-4 py-3">
                      Margens
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm">
                      <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Indicador</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">Margem Bruta</td>
                            <td className="border border-gray-300 p-2">75,2%</td>
                            <td className="border border-gray-300 p-2">&gt; 40%</td>
                            <td className="border border-gray-300 p-2">Boa margem. Custos diretos bem controlados.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Margem Operacional</td>
                            <td className="border border-gray-300 p-2">70,5%</td>
                            <td className="border border-gray-300 p-2">&gt; 15%</td>
                            <td className="border border-gray-300 p-2">Excelente margem operacional.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Margem Líquida</td>
                            <td className="border border-gray-300 p-2">70,5%</td>
                            <td className="border border-gray-300 p-2">&gt; 10%</td>
                            <td className="border border-gray-300 p-2">Lucratividade muito acima da média.</td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div className="space-y-4">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="atividades-operacionais" className="border rounded-md">
                    <AccordionTrigger className="text-lg font-medium px-4 py-3">
                      Atividades Operacionais
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm">
                      <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Indicador</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">PMR</td>
                            <td className="border border-gray-300 p-2">53,40 dias</td>
                            <td className="border border-gray-300 p-2">&lt; 45 dias</td>
                            <td className="border border-gray-300 p-2">Acima do ideal. Concessão de prazos ou atrasos no recebimento.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">PME</td>
                            <td className="border border-gray-300 p-2">296,17 dias</td>
                            <td className="border border-gray-300 p-2">&lt; 90 dias</td>
                            <td className="border border-gray-300 p-2">Muito alto. Estoques parados comprometem o giro operacional.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">PMP</td>
                            <td className="border border-gray-300 p-2">21,56 dias</td>
                            <td className="border border-gray-300 p-2">&gt; 30 dias</td>
                            <td className="border border-gray-300 p-2">Baixo. A empresa paga antes de receber dos clientes.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Ciclo Operacional</td>
                            <td className="border border-gray-300 p-2">349,57 dias</td>
                            <td className="border border-gray-300 p-2">&lt; 120 dias</td>
                            <td className="border border-gray-300 p-2">Muito longo. Excesso de capital preso no operacional.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Ciclo de Caixa</td>
                            <td className="border border-gray-300 p-2">328,01 dias</td>
                            <td className="border border-gray-300 p-2">&lt; 90 dias</td>
                            <td className="border border-gray-300 p-2">Crítico. Necessário revisar capital de giro.</td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="cobertura-juros" className="border rounded-md">
                    <AccordionTrigger className="text-lg font-medium px-4 py-3">
                      Cobertura de Juros
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm">
                      <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Indicador</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">Cobertura de Juros</td>
                            <td className="border border-gray-300 p-2">141,40x</td>
                            <td className="border border-gray-300 p-2">&gt; 2,0</td>
                            <td className="border border-gray-300 p-2">Excelente capacidade de gerar resultado para cobrir juros.</td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="rentabilidade-eficiencia" className="border rounded-md">
                    <AccordionTrigger className="text-lg font-medium px-4 py-3">
                      Rentabilidade e Eficiência
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm">
                      <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Indicador</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">Giro do Ativo Fixo</td>
                            <td className="border border-gray-300 p-2">1,69</td>
                            <td className="border border-gray-300 p-2">&gt; 1,5</td>
                            <td className="border border-gray-300 p-2">Uso eficiente dos ativos fixos.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Giro do Ativo Total</td>
                            <td className="border border-gray-300 p-2">0,08</td>
                            <td className="border border-gray-300 p-2">&gt; 0,5</td>
                            <td className="border border-gray-300 p-2">Muito baixo. Necessário melhor aproveitamento da estrutura.</td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="retorno-capital" className="border rounded-md">
                    <AccordionTrigger className="text-lg font-medium px-4 py-3">
                      Retorno sobre o Capital
                    </AccordionTrigger>
                    <AccordionContent className="px-4 py-3 text-sm">
                      <table className="w-full table-auto border-collapse border border-gray-300 text-left">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 p-2">Indicador</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">ROA</td>
                            <td className="border border-gray-300 p-2">5,90%</td>
                            <td className="border border-gray-300 p-2">&gt; 5%</td>
                            <td className="border border-gray-300 p-2">Bom retorno sobre os ativos.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">ROE</td>
                            <td className="border border-gray-300 p-2">6,90%</td>
                            <td className="border border-gray-300 p-2">&gt; 7%</td>
                            <td className="border border-gray-300 p-2">Quase ideal. Pode ser otimizado com reinvestimentos.</td>
                          </tr>
                        </tbody>
                      </table>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            <div className="glass-card p-6 rounded-lg shadow-sm mt-6">
              <h3 className="text-lg font-semibold mb-4">Conclusão</h3>
              <p>
                Com base nos indicadores analisados, conclui-se que a empresa está em situação <span className="font-bold">FINANCEIRA SAUDÁVEL</span>.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold mb-2">Principais Pontos positivos:</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li>Alta liquidez em todos os horizontes (corrente, seca, imediata)</li>
                  <li>Estrutura de capital conservadora e baixa alavancagem</li>
                  <li>Margens e rentabilidade acima da média do setor</li>
                  <li>Cobertura de juros robusta</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DiagnosticDetailFeb2025;

