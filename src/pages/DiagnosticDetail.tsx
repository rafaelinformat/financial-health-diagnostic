
import React from 'react';
import { useParams } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import HealthCard from '@/components/HealthCard';

const DiagnosticDetail = () => {
  const { id } = useParams();

  // In a real application, you would fetch the diagnostic details based on the ID
  // This is just a placeholder for demonstration purposes

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Detalhes do Diagnóstico</h1>
          <p className="text-muted-foreground mb-6">
            Visualizando resultados do diagnóstico financeiro #{id}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <HealthCard
            title="Saúde Financeira Geral"
            description="Sua empresa apresenta uma saúde financeira comprometida"
            value={35}
            colorScheme="danger"
          />
          <HealthCard
            title="Eficiência Operacional"
            description="Seus processos operacionais estão com desempenho baixo"
            value={42}
            colorScheme="danger"
          />
          <HealthCard
            title="Potencial de Crescimento"
            description="Sua empresa tem potencial de crescimento limitado"
            value={25}
            colorScheme="danger"
          />
        </div>

        <div className="glass-card p-6 mb-8">
          <h3 className="text-xl font-semibold mb-4">Análise Detalhada</h3>
          <p className="mb-4">
            Este diagnóstico foi realizado em 10/01/2024 para a empresa TRAS ENGENHARIA.
            A análise identificou vários pontos críticos que precisam de atenção imediata
            para evitar a deterioração da saúde financeira da empresa.
          </p>
          
          <h4 className="text-lg font-medium mt-6 mb-2">Pontos Críticos</h4>
          <ul className="list-disc pl-6 space-y-2">
            <li>Fluxo de caixa negativo há mais de 3 meses consecutivos</li>
            <li>Endividamento acima de 70% do patrimônio</li>
            <li>Queda de receita superior a 30% em comparação ao ano anterior</li>
            <li>Margem de lucro operacional negativa</li>
          </ul>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DiagnosticDetail;
