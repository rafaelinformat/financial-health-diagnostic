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
        <div className="glass-card p-6 rounded-md shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Coluna esquerda e central - dados */}
            <div className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold">TECNO CHAPA SOLUÇÕES EM CORTE E DOBRA LTDA</h2>
                <Badge className="bg-blue-600 text-white hover:bg-blue-700">2025</Badge>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-muted-foreground text-sm">Data de Criação da Empresa:</p>
                  <p className="font-semibold">01/2023</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Setor:</p>
                  <p className="font-semibold">Indústria/Serviços (Corte e Dobra Metálica)</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Solicitado por:</p>
                  <p className="font-semibold">Vitoria</p>
                </div>
                <div>
                  <p className="text-muted-foreground text-sm">Idade da empresa:</p>
                  <p className="font-semibold">2 anos</p>
                </div>
              </div>
            </div>
            
            {/* Coluna direita - Status */}
            <div className="flex flex-col items-center justify-center border-l pl-6">
              <p className="text-sm font-semibold mb-3">Exame do Risco de Falência</p>
              <Badge className="bg-green-100 text-green-700 hover:bg-green-200 mb-3 text-sm px-4 py-1">
                BAIXO RISCO DE FALÊNCIA
              </Badge>
              <p className="text-sm text-center text-muted-foreground mb-2">
                Empresa com fluxo de caixa positivo e indicadores saudáveis
              </p>
              <p className="text-xs text-center text-muted-foreground">
                Requer monitoramento e melhorias pontuais
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
