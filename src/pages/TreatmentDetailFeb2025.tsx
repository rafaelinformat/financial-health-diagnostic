import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, FileText, Clock, TrendingUp, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TreatmentDetailFeb2025 = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2">Tratamento da Saúde Financeira</h1>
            <p className="text-muted-foreground">
              Recomendações específicas para melhorar os indicadores financeiros
            </p>
          </div>
          <Button variant="outline" onClick={() => navigate('/financial-treatment')}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Button>
        </div>

        {/* Dados da Empresa */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card Azul - Dados da Empresa */}
          <div className="bg-blue-600 rounded-lg p-6 text-white space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">TECNO MONTAGENS</h2>
              <Badge className="bg-white text-blue-600 hover:bg-gray-100">2024</Badge>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded p-1">
                  <FileText className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs opacity-80">Data de Criação</p>
                  <p className="font-semibold">10/12/2014</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded p-1">
                  <TrendingUp className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs opacity-80">Setor</p>
                  <p className="font-semibold text-sm">Serviço Instalação Hidráulica/elétrica</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded p-1">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs opacity-80">Solicitado por</p>
                  <p className="font-semibold">Vitoria</p>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <div className="bg-blue-500 rounded p-1">
                  <Clock className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs opacity-80">Idade de empresa</p>
                  <p className="font-semibold">10 anos</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card Branco - Exame de Risco */}
          <div className="glass-card p-6 space-y-4">
            <h3 className="text-lg font-semibold">Exame do Risco de Falência</h3>
            
            <div className="bg-green-50 rounded-lg p-4 space-y-3">
              <p className="text-center text-green-600 font-bold text-lg">
                BAIXO RISCO DE FALÊNCIA
              </p>
              
              <p className="text-sm text-muted-foreground">
                Com base nos indicadores de liquidez observados no negócio, conclui-se que a empresa está em baixo 
                risco de falência no curto prazo.
              </p>
              
              <p className="text-xs text-muted-foreground italic">
                Obs: O exame é limitado com base nas informações financeiras fornecidas pela empresa.
              </p>
            </div>
          </div>
        </div>

        {/* TRATAMENTO FINANCEIRO RECOMENDADO */}
        <div className="rounded-lg overflow-hidden">
          <div className="bg-purple-600 text-white p-4">
            <h2 className="text-xl font-bold">TRATAMENTO FINANCEIRO RECOMENDADO</h2>
          </div>
          <div className="bg-white border border-t-0 p-6 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-purple-600 mb-3">MELHORAR GESTÃO DE FLUXO DE CAIXA</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Focada na redução do ciclo de caixa através do gerenciamento eficiente de recebíveis e pagamentos,
                garantindo maior liquidez e previsibilidade financeira.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Revisar e encurtar prazos de recebimento</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Implementar política de cobrança ativa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Oferecer desconto para pagamento antecipado (ex: 3% em pagamentos até 10 dias)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Gestão de Contas a Pagar</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Renegociar prazos com fornecedores para alongamento de pagamentos</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Priorizar pagamentos estratégicos e evitar descontos desnecessários</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Adiantamento de recebíveis</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Avaliar antecipação de recebíveis em casos pontuais de necessidade de caixa</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">Comparar taxas de diferentes instituições financeiras</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* RESULTADO ESPERADO */}
        <div className="rounded-lg overflow-hidden">
          <div className="bg-cyan-500 text-white p-4">
            <h2 className="text-xl font-bold">RESULTADO ESPERADO</h2>
          </div>
          <div className="bg-white border border-t-0 p-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 bg-green-100 rounded-full p-3">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <p className="text-sm">
                  Melhora no equilíbrio entre entradas e saídas, com redução significativa do ciclo de caixa.
                  Aumento da previsibilidade do fluxo de caixa e fortalecimento da capacidade de honrar compromissos
                  de curto prazo. Maior flexibilidade financeira para investimentos operacionais.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* INDICADORES RECOMENDADOS PARA MONITORAMENTO */}
        <div className="rounded-lg overflow-hidden">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-xl font-bold">INDICADORES RECOMENDADOS PARA MONITORAMENTO</h2>
          </div>
          <div className="bg-white border border-t-0 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              {/* Liquidez Imediata */}
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <FileText className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Liquidez Imediata</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Mede a capacidade de pagamento imediato das obrigações de curto prazo
                </p>
              </div>

              {/* PMR */}
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">PMR - Prazo Médio de Recebimento</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Tempo médio que a empresa leva para receber suas vendas
                </p>
              </div>

              {/* Ciclo Operacional */}
              <div className="border rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 rounded-lg p-2">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="font-semibold">Ciclo Operacional</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  Período entre a compra de matéria-prima e o recebimento da venda
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8">
                ATIVAR INDICADORES
              </Button>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between pt-4">
          <Button variant="outline" onClick={() => navigate('/financial-treatment')}>
            VOLTAR
          </Button>
          <Button onClick={() => navigate('/treatment-detail-receivables-feb-2025')}>
            CONTINUAR
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TreatmentDetailFeb2025;
