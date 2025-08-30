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

const DiagnosticDetailTecnoMontagens = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">
            Resultado do Diagnóstico de Saúde Financeira Detalhado - Janeiro 2025
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
                    TECNO MONTAGENS SOLUÇÕES DE ENGENHARIA
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Data de Criação da Empresa:</span><br />
                    01/2023
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Setor:</span><br />
                    Industrial – Montagens e Engenharia
                  </p>
                </div>
                <div>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Data de análise dos dados:</span><br />
                    2025
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Idade da empresa:</span><br />
                    2 anos
                  </p>
                  <p className="text-sm mb-2">
                    <span className="font-semibold">Período de análise:</span><br />
                    01/01/2025 a 31/01/2025
                  </p>
                  <p className="text-sm">
                    <span className="font-semibold">Solicitado por:</span><br />
                    Vitória
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
                            <td className="border border-gray-300 p-2">4,05</td>
                            <td className="border border-gray-300 p-2">≥ 1,5</td>
                            <td className="border border-gray-300 p-2">A empresa tem R$ 4,05 em ativo circulante para cada R$ 1,00 em dívida de curto prazo. Situação muito saudável.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Liquidez Seca</td>
                            <td className="border border-gray-300 p-2">3,90</td>
                            <td className="border border-gray-300 p-2">≥ 1,0</td>
                            <td className="border border-gray-300 p-2">Mesmo desconsiderando estoques, a empresa mantém ótima capacidade de pagamento.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Liquidez Imediata</td>
                            <td className="border border-gray-300 p-2">2,20</td>
                            <td className="border border-gray-300 p-2">≥ 1,0</td>
                            <td className="border border-gray-300 p-2">Caixa cobre mais que o dobro das obrigações imediatas.</td>
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
                            <td className="border border-gray-300 p-2">0,24</td>
                            <td className="border border-gray-300 p-2">≤ 0,5</td>
                            <td className="border border-gray-300 p-2">Baixo uso de dívidas. Empresa bem capitalizada.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Capital de Terceiros / PL</td>
                            <td className="border border-gray-300 p-2">0,32</td>
                            <td className="border border-gray-300 p-2">≤ 1,0</td>
                            <td className="border border-gray-300 p-2">Baixo grau de dependência de capital externo.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Composição do Endividamento</td>
                            <td className="border border-gray-300 p-2">0,55</td>
                            <td className="border border-gray-300 p-2">≤ 0,6</td>
                            <td className="border border-gray-300 p-2">Estrutura equilibrada entre curto e longo prazo.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Alavancagem Financeira</td>
                            <td className="border border-gray-300 p-2">1,32</td>
                            <td className="border border-gray-300 p-2">≤ 2,0</td>
                            <td className="border border-gray-300 p-2">Nível saudável de alavancagem.</td>
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
                            <td className="border border-gray-300 p-2">-1,83</td>
                            <td className="border border-gray-300 p-2">≤ 2,0</td>
                            <td className="border border-gray-300 p-2">Caixa excede o valor da dívida. Alta solvência.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Dívida Líquida / PL</td>
                            <td className="border border-gray-300 p-2">-0,24</td>
                            <td className="border border-gray-300 p-2">≤ 1,0</td>
                            <td className="border border-gray-300 p-2">Excelente estrutura: caixa cobre 100% da dívida.</td>
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
                            <th className="border border-gray-300 p-2">Fórmula</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">Margem Bruta</td>
                            <td className="border border-gray-300 p-2">Lucro Bruto / Receita Líquida</td>
                            <td className="border border-gray-300 p-2">100,00%</td>
                            <td className="border border-gray-300 p-2">30–60%</td>
                            <td className="border border-gray-300 p-2">Possivelmente distorcida. Ausência de CMV gera margem bruta artificialmente alta.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Margem Operacional</td>
                            <td className="border border-gray-300 p-2">-</td>
                            <td className="border border-gray-300 p-2">47,24%</td>
                            <td className="border border-gray-300 p-2">15–30%</td>
                            <td className="border border-gray-300 p-2">Muito acima do mercado. Ótima eficiência operacional.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Margem Líquida</td>
                            <td className="border border-gray-300 p-2">-</td>
                            <td className="border border-gray-300 p-2">47,24%</td>
                            <td className="border border-gray-300 p-2">10–25%</td>
                            <td className="border border-gray-300 p-2">Excelente. Empresa retém quase metade da receita como lucro líquido.</td>
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
                            <th className="border border-gray-300 p-2">Fórmula</th>
                            <th className="border border-gray-300 p-2">Valor Obtido</th>
                            <th className="border border-gray-300 p-2">Valor Desejado</th>
                            <th className="border border-gray-300 p-2">Análise do Indicador</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-gray-300 p-2">ROA</td>
                            <td className="border border-gray-300 p-2">-</td>
                            <td className="border border-gray-300 p-2">9,98%</td>
                            <td className="border border-gray-300 p-2">≥ 5%</td>
                            <td className="border border-gray-300 p-2">Bom uso dos ativos para gerar lucro.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">ROE</td>
                            <td className="border border-gray-300 p-2">-</td>
                            <td className="border border-gray-300 p-2">13,21%</td>
                            <td className="border border-gray-300 p-2">≥ 10%</td>
                            <td className="border border-gray-300 p-2">Excelente retorno para os sócios.</td>
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
                            <td className="border border-gray-300 p-2">PMR – Recebimento</td>
                            <td className="border border-gray-300 p-2">22,69 dias</td>
                            <td className="border border-gray-300 p-2">≤ 30 dias</td>
                            <td className="border border-gray-300 p-2">Recebimento em prazo curto. Garante bom fluxo de caixa.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">PME – Estocagem</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">Não aplicável: CMV não informado na DRE.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">PMP – Pagamento</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">Não aplicável: CMV ausente.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Ciclo Operacional</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">Inviável sem PME.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Ciclo de Caixa</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">Inviável sem PME e PMP.</td>
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
                            <td className="border border-gray-300 p-2">82,05</td>
                            <td className="border border-gray-300 p-2">≥ 2,0</td>
                            <td className="border border-gray-300 p-2">Excelente capacidade de pagar encargos financeiros.</td>
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
                            <td className="border border-gray-300 p-2">39,01</td>
                            <td className="border border-gray-300 p-2">≥ 3,0</td>
                            <td className="border border-gray-300 p-2">Excelente uso dos ativos fixos.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Giro do Ativo Permanente</td>
                            <td className="border border-gray-300 p-2">0,46</td>
                            <td className="border border-gray-300 p-2">≥ 0,8</td>
                            <td className="border border-gray-300 p-2">Baixo giro. Indica capital ocioso ou investimentos ainda não produtivos.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Giro do Ativo Total</td>
                            <td className="border border-gray-300 p-2">0,21</td>
                            <td className="border border-gray-300 p-2">≥ 0,5</td>
                            <td className="border border-gray-300 p-2">Geração de receita baixa em relação ao total investido.</td>
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
                  <li>Excelente liquidez (corrente, seca e imediata)</li>
                  <li>Margens elevadas e lucratividade superior à média do setor</li>
                  <li>Estrutura de capital sólida e com baixa dependência de terceiros</li>
                  <li>Solvência elevada com dívida líquida negativa</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default DiagnosticDetailTecnoMontagens;
