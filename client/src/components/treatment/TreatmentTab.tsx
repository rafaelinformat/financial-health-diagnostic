
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import TreatmentCard from './TreatmentCard';
import TreatmentPlanCard from './TreatmentPlanCard';
import { Upload, ChevronRight, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

export type TreatmentPlanItem = {
  title: string;
  description: string;
  buttonText: string;
  buttonVariant: "default" | "outline";
};

const TreatmentTab = () => {
  const [isUploading, setIsUploading] = useState(false);
  const [hasUploaded, setHasUploaded] = useState(false);

  const handleUpload = () => {
    setIsUploading(true);
    setTimeout(() => {
      setIsLoading(false);
      setHasUploaded(true);
      toast.success('Dados financeiros carregados com sucesso!');
    }, 1500);
  };

  const treatments = [
    {
      title: "Gestão de Fluxo de Caixa",
      description: "Implementação de sistema de controle diário de fluxo de caixa para evitar problemas de liquidez",
      statusText: "Em Andamento",
      progress: 35,
      startDate: "15/03/2023",
      endDate: "15/06/2023"
    },
    {
      title: "Redução de Custos Operacionais",
      description: "Análise e redução de despesas operacionais em 15% nos próximos 60 dias",
      statusText: "Não Iniciado",
      progress: 0,
      startDate: "Pendente",
      endDate: "Pendente"
    },
    {
      title: "Renegociação de Dívidas",
      description: "Estratégia para renegociação de dívidas com fornecedores e instituições financeiras",
      statusText: "Concluído",
      progress: 100,
      startDate: "10/01/2023",
      endDate: "28/02/2023"
    },
    {
      title: "Diversificação de Receita",
      description: "Desenvolvimento de novas linhas de produtos para diversificar fontes de receita",
      statusText: "Em Andamento",
      progress: 65,
      startDate: "05/02/2023",
      endDate: "30/05/2023"
    }
  ];

  const treatmentPlans: TreatmentPlanItem[] = [
    {
      title: "Plano Básico",
      description: "Análise financeira inicial e recomendações básicas para melhorar a saúde financeira da sua empresa",
      buttonText: "Selecionar",
      buttonVariant: "outline"
    },
    {
      title: "Plano Intermediário",
      description: "Análise detalhada, recomendações personalizadas e acompanhamento mensal por 6 meses",
      buttonText: "Recomendado",
      buttonVariant: "default"
    },
    {
      title: "Plano Avançado",
      description: "Análise completa, estratégia financeira de longo prazo e acompanhamento semanal por 12 meses",
      buttonText: "Selecionar",
      buttonVariant: "outline"
    }
  ];

  return (
    <div className="space-y-8">
      {!hasUploaded ? (
        <Card className="p-6">
          <h3 className="text-xl font-semibold mb-4">Carregar Dados Financeiros</h3>
          <p className="text-muted-foreground mb-6">
            Para iniciar o processo de tratamento financeiro, precisamos analisar seus dados financeiros atuais.
            Faça o upload de seus relatórios financeiros ou conecte-se ao seu sistema ERP.
          </p>
          
          <div className="border-2 border-dashed border-border rounded-lg p-8 text-center mb-4">
            <Upload className="mx-auto h-10 w-10 text-muted-foreground mb-3" />
            <h4 className="text-lg font-medium mb-2">Arraste e solte seus arquivos aqui</h4>
            <p className="text-sm text-muted-foreground mb-4">Suportamos arquivos CSV, XLS, XLSX ou PDF</p>
            <Button onClick={handleUpload} disabled={isUploading}>
              {isUploading ? "Carregando..." : "Selecionar Arquivos"}
            </Button>
          </div>
        </Card>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {treatments.map((treatment, index) => (
              <TreatmentCard 
                key={index}
                title={treatment.title}
                description={treatment.description}
                statusText={treatment.statusText}
                progress={treatment.progress}
                startDate={treatment.startDate}
                endDate={treatment.endDate}
              />
            ))}
          </div>
          
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">Planos de Tratamento Disponíveis</h3>
              <Button variant="link" className="flex items-center">
                Ver todos <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {treatmentPlans.map((plan, index) => (
                <TreatmentPlanCard 
                  key={index}
                  name={plan.title}
                  description={plan.description}
                  buttonText={plan.buttonText}
                  buttonVariant={plan.buttonVariant}
                />
              ))}
            </div>
          </div>
          
          <Card className="p-6 bg-muted/30">
            <div className="flex flex-col md:flex-row md:items-center justify-between">
              <div>
                <h3 className="text-xl font-semibold mb-2">Precisa de uma análise mais profunda?</h3>
                <p className="text-muted-foreground mb-4 md:mb-0">
                  Consulte com um de nossos especialistas financeiros para uma avaliação personalizada.
                </p>
              </div>
              <Button className="flex items-center gap-2">
                Agendar Consulta <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </Card>
        </>
      )}
    </div>
  );
};

export default TreatmentTab;
