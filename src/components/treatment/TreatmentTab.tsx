
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import TreatmentCard from './TreatmentCard';
import TreatmentPlanCard from './TreatmentPlanCard';
import { Clipboard, LineChart } from 'lucide-react';

const TreatmentTab: React.FC = () => {
  const treatmentCards = [
    {
      title: 'Reestruturação de Dívidas',
      icon: Clipboard,
      priority: 'Alta',
      description: 'Identificamos oportunidades para reestruturar suas dívidas atuais, reduzindo taxas de juros e melhorando o fluxo de caixa.',
      metricLabel: 'Economia estimada',
      metricValue: 'R$ 12.450',
      metricSubtext: '/ano',
    },
    {
      title: 'Otimização de Capital de Giro',
      icon: LineChart,
      priority: 'Média',
      description: 'Estratégias para melhorar o ciclo de conversão de caixa e liberar capital de giro para operações.',
      metricLabel: 'Melhoria de fluxo de caixa',
      metricValue: '+22%',
      metricSubtext: 'projeção',
    },
    {
      title: 'Redução de Custos Operacionais',
      icon: Clipboard,
      priority: 'Alta',
      description: 'Plano detalhado para identificar e reduzir custos operacionais sem impactar a qualidade dos produtos/serviços.',
      metricLabel: 'Redução de custos estimada',
      metricValue: '15-20%',
      metricSubtext: 'em 6 meses',
    },
    {
      title: 'Estratégias de Precificação',
      icon: LineChart,
      priority: 'Média',
      description: 'Revisão e otimização da estratégia de precificação para maximizar margens de lucro sem perder competitividade.',
      metricLabel: 'Aumento de margem projetado',
      metricValue: '8-12%',
      metricSubtext: 'por produto',
    },
  ];

  const planItems = [
    {
      title: 'Consultoria Financeira Especializada',
      description: 'Sessões de consultoria com especialistas para implementar as recomendações de tratamento',
      buttonText: 'Agendar Consulta',
      buttonVariant: 'default',
    },
    {
      title: 'Relatório Detalhado de Tratamento',
      description: 'Documento abrangente com todas as estratégias e passos para implementação',
      buttonText: 'Gerar Relatório',
      buttonVariant: 'outline',
    },
    {
      title: 'Implementação Assistida',
      description: 'Suporte contínuo durante a implementação das medidas de tratamento financeiro',
      buttonText: 'Saiba Mais',
      buttonVariant: 'outline',
    },
  ];

  return (
    <TabsContent value="tratamento" className="animate-fade-in">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treatmentCards.map((card, index) => (
          <TreatmentCard
            key={index}
            title={card.title}
            icon={card.icon}
            priority={card.priority}
            description={card.description}
            metricLabel={card.metricLabel}
            metricValue={card.metricValue}
            metricSubtext={card.metricSubtext}
          />
        ))}
      </div>

      <TreatmentPlanCard items={planItems} />
    </TabsContent>
  );
};

export default TreatmentTab;
