
import React, { useState } from "react";
import DashboardLayout from '@/components/DashboardLayout';
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { CheckCircle2 } from "lucide-react";

const DiagnosticDetailJan2025 = () => {
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
          <h1 className="text-3xl font-bold mb-2">Detalhes do Diagnóstico - Jan/2025</h1>
          <p className="text-muted-foreground mb-6">
            Visualizando resultados do diagnóstico financeiro para TECNO CHAPA SOLUCOES EM CORTE E DOBRA LTDA
          </p>
          <button 
            onClick={() => navigate(-1)}
            className="mb-6 px-4 py-2 rounded-md bg-muted text-muted-foreground hover:bg-muted/80"
          >
            Voltar
          </button>
        </div>

        {/* Dados da Empresa */}
        <div className="glass-card p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-bold mb-4">Exame de Risco de Falência</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Coluna esquerda e central - dados */}
            <div className="md:col-span-2 grid grid-cols-2 gap-4">
              <div>
                <p className="text-muted-foreground text-sm">Empresa:</p>
                <p className="font-semibold">TECNO CHAPA SOLUCOES EM CORTE E DOBRA LTDA</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Data de análise dos dados:</p>
                <p className="font-semibold">Janeiro/2025</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Data de Criação da Empresa:</p>
                <p className="font-semibold">01/2023</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Idade da empresa:</p>
                <p className="font-semibold">2 anos</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Setor:</p>
                <p className="font-semibold">Indústria/Serviços (Corte e Dobra Metálica)</p>
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Solicitado por:</p>
                <p className="font-semibold">Vitoria</p>
              </div>
            </div>
            
            {/* Coluna direita - Status */}
            <div className="flex flex-col items-center justify-center">
              <p className="text-muted-foreground text-sm mb-2">Status da Empresa</p>
              <span className="rounded-full bg-green-100 px-4 py-1 font-semibold text-sm text-green-600 mb-2">
                Saudável
              </span>
              <CheckCircle2 size={48} className="text-green-600" />
            </div>
          </div>
        </div>

        {/* Accordion Sections with the parameters */}

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
                      <th className="border border-gray-300 px-2 py-1">Valor Obtido</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Desejado</th>
                      <th className="border border-gray-300 px-2 py-1">Análise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Liquidez Corrente</td>
                      <td className="border border-gray-300 px-2 py-1">17,29</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 1,50</td>
                      <td className="border border-gray-300 px-2 py-1">Excelente capacidade de pagamento no curto prazo.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Liquidez Seca</td>
                      <td className="border border-gray-300 px-2 py-1">12,35</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 1,00</td>
                      <td className="border border-gray-300 px-2 py-1">Indicador muito saudável, baixo risco de iliquidez.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Liquidez Imediata</td>
                      <td className="border border-gray-300 px-2 py-1">5,41</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 0,30</td>
                      <td className="border border-gray-300 px-2 py-1">Excelente posição de caixa disponível.</td>
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
                      <th className="border border-gray-300 px-2 py-1">Valor Obtido</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Desejado</th>
                      <th className="border border-gray-300 px-2 py-1">Análise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Endividamento Geral</td>
                      <td className="border border-gray-300 px-2 py-1">0,17</td>
                      <td className="border border-gray-300 px-2 py-1">&lt; 0,60</td>
                      <td className="border border-gray-300 px-2 py-1">Baixo grau de endividamento.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Cap. Terceiros / Cap. Próprio</td>
                      <td className="border border-gray-300 px-2 py-1">0,20</td>
                      <td className="border border-gray-300 px-2 py-1">&lt; 1,00</td>
                      <td className="border border-gray-300 px-2 py-1">Estrutura de capital conservadora.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Composição do Endividamento</td>
                      <td className="border border-gray-300 px-2 py-1">0,33</td>
                      <td className="border border-gray-300 px-2 py-1">&lt; 0,70</td>
                      <td className="border border-gray-300 px-2 py-1">Maioria da dívida é de longo prazo.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Grau de Alavancagem</td>
                      <td className="border border-gray-300 px-2 py-1">1,20</td>
                      <td className="border border-gray-300 px-2 py-1">&le; 2,00</td>
                      <td className="border border-gray-300 px-2 py-1">Empresa pouco alavancada.</td>
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
                      <th className="border border-gray-300 px-2 py-1">Fórmula</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Obtido</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Desejado</th>
                      <th className="border border-gray-300 px-2 py-1">Análise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Dívida Líquida/EBITDA</td>
                      <td className="border border-gray-300 px-2 py-1">-</td>
                      <td className="border border-gray-300 px-2 py-1">-1,37</td>
                      <td className="border border-gray-300 px-2 py-1">&lt; 2,00</td>
                      <td className="border border-gray-300 px-2 py-1">Caixa excedente à dívida.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Dívida Líquida / PL</td>
                      <td className="border border-gray-300 px-2 py-1">-</td>
                      <td className="border border-gray-300 px-2 py-1">-0,16</td>
                      <td className="border border-gray-300 px-2 py-1">&lt; 1,00</td>
                      <td className="border border-gray-300 px-2 py-1">Endividamento líquido negativo.</td>
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
                      <th className="border border-gray-300 px-2 py-1">Fórmula</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Obtido</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Desejado</th>
                      <th className="border border-gray-300 px-2 py-1">Análise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Margem Bruta</td>
                      <td className="border border-gray-300 px-2 py-1">Lucro Bruto / Receita Líquida</td>
                      <td className="border border-gray-300 px-2 py-1">100%</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 40%</td>
                      <td className="border border-gray-300 px-2 py-1">Receita líquida igual ao lucro bruto.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Margem Operacional</td>
                      <td className="border border-gray-300 px-2 py-1">Lucro Operacional / Receita</td>
                      <td className="border border-gray-300 px-2 py-1">76,00%</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 10%</td>
                      <td className="border border-gray-300 px-2 py-1">Excelente margem operacional.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Margem Líquida</td>
                      <td className="border border-gray-300 px-2 py-1">Lucro Líquido / Receita</td>
                      <td className="border border-gray-300 px-2 py-1">76,00%</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 5%</td>
                      <td className="border border-gray-300 px-2 py-1">Lucro elevado. Muito positivo.</td>
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
                      <th className="border border-gray-300 px-2 py-1">Valor Obtido</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Desejado</th>
                      <th className="border border-gray-300 px-2 py-1">Análise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">PMR</td>
                      <td className="border border-gray-300 px-2 py-1">33,06 dias</td>
                      <td className="border border-gray-300 px-2 py-1">≤ 30 dias</td>
                      <td className="border border-gray-300 px-2 py-1">Acima do ideal. Pode indicar atraso ou prazo de vendas elevado.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">PME</td>
                      <td className="border border-gray-300 px-2 py-1">57,55 dias</td>
                      <td className="border border-gray-300 px-2 py-1">≤ 45 dias</td>
                      <td className="border border-gray-300 px-2 py-1">Estoque elevado. Indica baixa rotatividade de produtos.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">PMP</td>
                      <td className="border border-gray-300 px-2 py-1">7,45 dias</td>
                      <td className="border border-gray-300 px-2 py-1">≥ 30 dias</td>
                      <td className="border border-gray-300 px-2 py-1">Empresa paga rápido. Poderia renegociar prazos.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Ciclo Operacional</td>
                      <td className="border border-gray-300 px-2 py-1">90,61 dias</td>
                      <td className="border border-gray-300 px-2 py-1">-</td>
                      <td className="border border-gray-300 px-2 py-1">Ciclo relativamente longo.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Ciclo de Caixa</td>
                      <td className="border border-gray-300 px-2 py-1">83,16 dias</td>
                      <td className="border border-gray-300 px-2 py-1">≤ 30 dias</td>
                      <td className="border border-gray-300 px-2 py-1">Preocupante. Exige capital de giro elevado.</td>
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
                      <th className="border border-gray-300 px-2 py-1">Fórmula</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Obtido</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Desejado</th>
                      <th className="border border-gray-300 px-2 py-1">Análise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Cobertura de Juros</td>
                      <td className="border border-gray-300 px-2 py-1">-</td>
                      <td className="border border-gray-300 px-2 py-1">152,15x</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 2,00</td>
                      <td className="border border-gray-300 px-2 py-1">Excelente. Confortável para pagar encargos.</td>
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
                      <th className="border border-gray-300 px-2 py-1">Valor Obtido</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Desejado</th>
                      <th className="border border-gray-300 px-2 py-1">Análise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Giro do Ativo Fixo</td>
                      <td className="border border-gray-300 px-2 py-1">2,39</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 1,50</td>
                      <td className="border border-gray-300 px-2 py-1">Bons retornos sobre ativos fixos.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">Giro do Ativo Total</td>
                      <td className="border border-gray-300 px-2 py-1">0,12</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 0,50</td>
                      <td className="border border-gray-300 px-2 py-1">Muito abaixo do ideal. Ativos ociosos.</td>
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
                      <th className="border border-gray-300 px-2 py-1">Valor Obtido</th>
                      <th className="border border-gray-300 px-2 py-1">Valor Desejado</th>
                      <th className="border border-gray-300 px-2 py-1">Análise</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">ROA</td>
                      <td className="border border-gray-300 px-2 py-1">9,49%</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 6%</td>
                      <td className="border border-gray-300 px-2 py-1">Bom retorno operacional.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-2 py-1">ROE</td>
                      <td className="border border-gray-300 px-2 py-1">11,38%</td>
                      <td className="border border-gray-300 px-2 py-1">&gt; 10%</td>
                      <td className="border border-gray-300 px-2 py-1">Excelente retorno para os sócios.</td>
                    </tr>
                  </tbody>
                </table>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Conclusion */}
        <div className="glass-card p-6 rounded-md shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Conclusão</h2>
          <p>Com base nos indicadores analisados, conclui-se que a empresa está em situação <span className="font-bold text-green-600">FINANCEIRA SAUDÁVEL</span>.</p>
          <h3 className="mt-4 font-semibold">Principais Pontos positivos:</h3>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Alta liquidez (corrente, seca e imediata).</li>
            <li>Margens elevadas e excelente ROE/ROA.</li>
            <li>Baixo endividamento e dívida líquida negativa.</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DiagnosticDetailJan2025;

