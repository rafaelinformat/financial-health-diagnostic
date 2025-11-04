
import React from 'react';
import { ArrowUpIcon, ArrowDownIcon, LightbulbIcon } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import HealthCard from '@/components/HealthCard';
import KpiCard from '@/components/KpiCard';
import { Card } from '@/components/ui/card';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Painel de Saúde Financeira</h1>
          <p className="text-muted-foreground">
            Monitore a saúde do seu negócio e obtenha insights acionáveis
          </p>
        </div>
        
        {/* Health Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <HealthCard
            title="Saúde Financeira Geral"
            description="Seu negócio está performando bem com fundamentos sólidos"
            value={85}
            colorScheme="success"
          />
          <HealthCard
            title="Status do Fluxo de Caixa"
            description="Fluxo de caixa moderado com margem para melhorias"
            value={65}
            colorScheme="warning"
          />
          <HealthCard
            title="Potencial de Crescimento"
            description="Excelentes perspectivas de crescimento baseadas nas tendências atuais"
            value={92}
            colorScheme="success"
          />
        </div>
        
        {/* KPI Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Indicadores-Chave de Desempenho</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <KpiCard
              title="Receita"
              value="125.000"
              change={12.5}
              prefix="R$ "
            />
            <KpiCard
              title="Despesas"
              value="82.000"
              change={5.2}
              prefix="R$ "
            />
            <KpiCard
              title="Margem de Lucro"
              value="28,5"
              change={2.1}
              suffix="%"
            />
            <KpiCard
              title="Reserva de Caixa"
              value="43.000"
              change={-8.3}
              prefix="R$ "
            />
          </div>
        </div>
        
        {/* Recommendations Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Recomendações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <LightbulbIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Otimizar Capital de Giro</h3>
                    <div className="inline-block">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">Alto Impacto</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Considere negociar melhores condições de pagamento com fornecedores para melhorar o fluxo de caixa e a eficiência do capital de giro.

            Teste de alteração de código no replit.
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <LightbulbIcon className="h-6 w-6 text-amber-400" />
                </div>
                <div className="space-y-2">
                  <div className="space-y-1">
                    <h3 className="text-lg font-medium">Revisar Estratégia de Preços</h3>
                    <div className="inline-block">
                      <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full">Médio Impacto</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    As margens de lucro atuais sugerem espaço para ajustes estratégicos de preços nas principais linhas de produtos.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Activity */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Atividades Recentes</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(item => (
                <div key={item} className="flex justify-between items-center border-b border-border pb-4">
                  <div>
                    <h3 className="font-medium">Pagamento recebido</h3>
                    <p className="text-sm text-muted-foreground">Fatura #1234 - Nome do Cliente</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">R$ 5.240,00</div>
                    <p className="text-xs text-muted-foreground">Hoje, 14:30</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Upcoming Payments */}
          <div className="glass-card p-6">
            <h2 className="text-xl font-semibold mb-4">Pagamentos Próximos</h2>
            <div className="space-y-4">
              {[1, 2, 3].map(item => (
                <div key={item} className="flex justify-between items-center border-b border-border pb-4">
                  <div>
                    <h3 className="font-medium">Renovação de Assinatura</h3>
                    <p className="text-sm text-muted-foreground">Serviço de Software</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">R$ 899,00</div>
                    <p className="text-xs text-muted-foreground">Vence em 5 dias</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
