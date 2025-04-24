
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
                    01/02/2025 a 31/02/2025
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
                            <td className="border border-gray-300 p-2">3,83</td>
                            <td className="border border-gray-300 p-2">≥ 1,5</td>
                            <td className="border border-gray-300 p-2">Alta capacidade de pagamento de curto prazo. Muito saudável.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Liquidez Seca</td>
                            <td className="border border-gray-300 p-2">3,83</td>
                            <td className="border border-gray-300 p-2">≥ 1,2</td>
                            <td className="border border-gray-300 p-2">Estoque irrelevante. Resultado saudável.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Liquidez Imediata</td>
                            <td className="border border-gray-300 p-2">1,39</td>
                            <td className="border border-gray-300 p-2">≥ 0,8</td>
                            <td className="border border-gray-300 p-2">Boa liquidez imediata. Garante caixa para emergências.</td>
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
                            <td className="border border-gray-300 p-2">0,25</td>
                            <td className="border border-gray-300 p-2">≤ 0,60</td>
                            <td className="border border-gray-300 p-2">Endividamento muito baixo.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Cap. Terceiros / PL</td>
                            <td className="border border-gray-300 p-2">0,33</td>
                            <td className="border border-gray-300 p-2">≤ 1,0</td>
                            <td className="border border-gray-300 p-2">Baixa dependência de terceiros.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Composição do Endividamento</td>
                            <td className="border border-gray-300 p-2">0,62</td>
                            <td className="border border-gray-300 p-2">≤ 0,7</td>
                            <td className="border border-gray-300 p-2">Predominância de CP. Atenção à rolagem.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Alavancagem Financeira</td>
                            <td className="border border-gray-300 p-2">1,33</td>
                            <td className="border border-gray-300 p-2">1,5 a 2,0</td>
                            <td className="border border-gray-300 p-2">Empresa conservadora.</td>
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
                            <td className="border border-gray-300 p-2">-1,54</td>
                            <td className="border border-gray-300 p-2">≤ 2,5</td>
                            <td className="border border-gray-300 p-2">Caixa maior que dívida.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Dívida Líquida / PL</td>
                            <td className="border border-gray-300 p-2">-0,16</td>
                            <td className="border border-gray-300 p-2">≤ 1,0</td>
                            <td className="border border-gray-300 p-2">Endividamento negativo.</td>
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
                            <td className="border border-gray-300 p-2">83,99%</td>
                            <td className="border border-gray-300 p-2">30% a 60%</td>
                            <td className="border border-gray-300 p-2">Muito acima do esperado.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Margem Operacional</td>
                            <td className="border border-gray-300 p-2">27,15%</td>
                            <td className="border border-gray-300 p-2">15% a 30%</td>
                            <td className="border border-gray-300 p-2">Boa margem.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Margem Líquida</td>
                            <td className="border border-gray-300 p-2">27,15%</td>
                            <td className="border border-gray-300 p-2">10% a 25%</td>
                            <td className="border border-gray-300 p-2">Alta eficiência.</td>
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
                            <td className="border border-gray-300 p-2">7,69%</td>
                            <td className="border border-gray-300 p-2">≥ 5%</td>
                            <td className="border border-gray-300 p-2">Saudável.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">ROE</td>
                            <td className="border border-gray-300 p-2">10,25%</td>
                            <td className="border border-gray-300 p-2">≥ 10%</td>
                            <td className="border border-gray-300 p-2">Boa geração de valor ao sócio.</td>
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
                            <td className="border border-gray-300 p-2">30,41 dias</td>
                            <td className="border border-gray-300 p-2">≤ 45 dias</td>
                            <td className="border border-gray-300 p-2">Ciclo de recebimento eficiente.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">PME</td>
                            <td className="border border-gray-300 p-2">0,05 dias</td>
                            <td className="border border-gray-300 p-2">≤ 30 dias</td>
                            <td className="border border-gray-300 p-2">Estoque praticamente inexistente.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">PMP</td>
                            <td className="border border-gray-300 p-2">12,86 dias</td>
                            <td className="border border-gray-300 p-2">≥ 15 dias</td>
                            <td className="border border-gray-300 p-2">Poder de negociação pode ser melhorado.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Ciclo Operacional</td>
                            <td className="border border-gray-300 p-2">30,46 dias</td>
                            <td className="border border-gray-300 p-2">—</td>
                            <td className="border border-gray-300 p-2">Ciclo enxuto. Excelente.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Ciclo de Caixa</td>
                            <td className="border border-gray-300 p-2">17,60 dias</td>
                            <td className="border border-gray-300 p-2">≤ 30 dias</td>
                            <td className="border border-gray-300 p-2">Empresa antecipa recebíveis.</td>
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
                            <td className="border border-gray-300 p-2">156,17</td>
                            <td className="border border-gray-300 p-2">≥ 2</td>
                            <td className="border border-gray-300 p-2">Cobertura excepcional.</td>
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
                            <td className="border border-gray-300 p-2">59,56</td>
                            <td className="border border-gray-300 p-2">≥ 3,0</td>
                            <td className="border border-gray-300 p-2">Excelente aproveitamento de ativos fixos.</td>
                          </tr>
                          <tr className="bg-gray-50">
                            <td className="border border-gray-300 p-2">Giro do Ativo Permanente</td>
                            <td className="border border-gray-300 p-2">0,69</td>
                            <td className="border border-gray-300 p-2">≥ 0,8</td>
                            <td className="border border-gray-300 p-2">Abaixo do ideal.</td>
                          </tr>
                          <tr>
                            <td className="border border-gray-300 p-2">Giro do Ativo Total</td>
                            <td className="border border-gray-300 p-2">0,28</td>
                            <td className="border border-gray-300 p-2">≥ 0,7</td>
                            <td className="border border-gray-300 p-2">Baixo giro. Potencial ocioso.</td>
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
                  <li>Excelente cobertura de juros e alta liquidez</li>
                  <li>Margens operacionais e líquidas acima da média</li>
                  <li>Endividamento controlado e dívida líquida negativa</li>
                  <li>Ciclo operacional eficiente e capital próprio bem aplicado</li>
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
