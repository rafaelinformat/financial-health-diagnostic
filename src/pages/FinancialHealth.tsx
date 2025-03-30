
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Upload, FileText, CheckCircle, ExternalLink } from 'lucide-react';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Link, useNavigate } from 'react-router-dom';
import DiagnosticStep from '@/components/DiagnosticStep';
import HealthCard from '@/components/HealthCard';
import KpiCard from '@/components/KpiCard';

const FinancialHealth = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [fileUploaded, setFileUploaded] = useState(false);
  const navigate = useNavigate();
  
  const handleFileUpload = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setFileUploaded(true);
      toast.success('Dados financeiros carregados com sucesso!');
    }, 1500);
  };
  
  const handleProceed = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };
  
  const handleStepClick = (step: number) => {
    // Only allow clicking on completed steps or the next available step
    if (step <= currentStep) {
      setCurrentStep(step);
    } else if (step === currentStep + 1 && fileUploaded) {
      setCurrentStep(step);
    }
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="glass-card p-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Carregar Dados Financeiros</h2>
            <p className="text-muted-foreground mb-8">
              Para iniciar seu diagnóstico financeiro, precisamos que você carregue seus dados financeiros. 
              Você pode fazer isso através do upload de arquivos CSV, XLS ou conectando-se diretamente ao seu sistema financeiro.
            </p>
            
            <div className="border-2 border-dashed border-border rounded-lg p-10 text-center mb-8">
              <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-medium mb-2">Arraste e solte seus arquivos aqui</h3>
              <p className="text-sm text-muted-foreground mb-4">Suportamos arquivos CSV, XLS, XLSX ou PDF</p>
              <Button onClick={handleFileUpload} disabled={isLoading} className="button-animated">
                {isLoading ? 'Carregando...' : 'Selecionar Arquivos'}
              </Button>
            </div>
            
            {fileUploaded && (
              <div className="flex items-center justify-between p-4 border rounded-lg bg-success/5 mb-8">
                <div className="flex items-center">
                  <FileText className="h-5 w-5 text-success mr-2" />
                  <span>dados_financeiros_2023.xlsx</span>
                </div>
                <CheckCircle className="h-5 w-5 text-success" />
              </div>
            )}
            
            <div className="flex justify-end">
              <Button 
                onClick={handleProceed} 
                disabled={!fileUploaded} 
                className="button-animated"
              >
                Continuar
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="glass-card p-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Visualizar Métricas</h2>
            <p className="text-muted-foreground mb-8">
              Aqui estão as principais métricas financeiras da sua empresa. Estas métricas são fundamentais para entender a saúde financeira do seu negócio.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <KpiCard
                title="Lucro Bruto"
                value="43,000"
                change={7.2}
                prefix="R$ "
              />
              <KpiCard
                title="Margem de Lucro"
                value="28.5"
                change={2.1}
                suffix="%"
              />
              <KpiCard
                title="ROI"
                value="22.7"
                change={-1.3}
                suffix="%"
              />
              <KpiCard
                title="Fluxo de Caixa"
                value="15,300"
                change={3.4}
                prefix="R$ "
              />
              <KpiCard
                title="Liquidez Corrente"
                value="1.85"
                change={0.3}
              />
              <KpiCard
                title="Ciclo Operacional"
                value="45"
                change={-5}
                suffix=" dias"
              />
            </div>
            
            <div className="flex justify-end">
              <Button onClick={handleProceed} className="button-animated">
                Continuar para Diagnóstico
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="glass-card p-8 animate-fade-in">
            <h2 className="text-2xl font-semibold mb-6">Diagnóstico Financeiro</h2>
            <p className="text-muted-foreground mb-8">
              Com base na análise dos seus dados financeiros, apresentamos o diagnóstico completo da saúde financeira da sua empresa.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <HealthCard
                title="Saúde Financeira Geral"
                description="Sua empresa apresenta uma boa saúde financeira geral"
                value={78}
                colorScheme="success"
              />
              <HealthCard
                title="Eficiência Operacional"
                description="Seus processos operacionais estão com desempenho moderado"
                value={62}
                colorScheme="warning"
              />
              <HealthCard
                title="Potencial de Crescimento"
                description="Sua empresa mostra ótimas perspectivas de crescimento"
                value={85}
                colorScheme="success"
              />
            </div>
            
            <div className="glass-card p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4">Recomendações</h3>
              <ul className="space-y-3">
                <li className="flex">
                  <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary text-white text-xs mr-3">1</div>
                  <p>Melhorar o controle de custos operacionais para aumentar margens de lucro</p>
                </li>
                <li className="flex">
                  <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary text-white text-xs mr-3">2</div>
                  <p>Implementar estratégias para reduzir o ciclo de conversão de caixa</p>
                </li>
                <li className="flex">
                  <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary text-white text-xs mr-3">3</div>
                  <p>Revisar a política de crédito para diminuir o risco de inadimplência</p>
                </li>
                <li className="flex">
                  <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary text-white text-xs mr-3">4</div>
                  <p>Considerar opções de reinvestimento para otimizar retornos financeiros</p>
                </li>
              </ul>
            </div>
            
            <div className="flex justify-between">
              <Button onClick={() => navigate('/financial-health/detailed')} variant="outline" className="button-animated flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Ver diagnóstico detalhado
              </Button>
              
              <Button onClick={() => toast.success('Relatório gerado com sucesso!')} className="button-animated">
                Gerar Relatório Completo
              </Button>
            </div>
          </div>
        );
      default:
        return null;
    }
  };
  
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Diagnóstico de Saúde Financeira</h1>
          <p className="text-muted-foreground">
            Complete os passos abaixo para obter um diagnóstico completo da saúde financeira da sua empresa
          </p>
        </div>
        
        <Tabs defaultValue="diagnostico" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico">Diagnóstico Geral</TabsTrigger>
            <TabsTrigger value="diagnostico-detalhado" onClick={() => navigate('/financial-health/detailed')}>Diagnóstico Detalhado</TabsTrigger>
            <TabsTrigger value="historico" onClick={() => navigate('/financial-health/history')}>Histórico do Diagnóstico</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="diagnostico" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <DiagnosticStep 
                step={1} 
                currentStep={currentStep} 
                title="Carregar Dados" 
                description="Envie seus dados financeiros para análise"
                onClick={() => handleStepClick(1)}
              />
              <DiagnosticStep 
                step={2} 
                currentStep={currentStep} 
                title="Visualizar Métricas" 
                description="Revise os indicadores financeiros principais"
                onClick={() => handleStepClick(2)}
              />
              <DiagnosticStep 
                step={3} 
                currentStep={currentStep} 
                title="Diagnóstico Financeiro" 
                description="Análise completa e recomendações"
                onClick={() => handleStepClick(3)}
              />
            </div>
            
            {renderStepContent()}
          </TabsContent>
          
          <TabsContent value="diagnostico-detalhado">
            {/* This content will not be displayed as we navigate away */}
          </TabsContent>
          
          <TabsContent value="historico">
            {/* This content will not be displayed as we navigate away */}
          </TabsContent>
          
          <TabsContent value="configuracoes">
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Configurações de Diagnóstico</h2>
              <p className="text-muted-foreground mb-8">
                Personalize as configurações do seu diagnóstico financeiro e defina os parâmetros de análise.
              </p>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Preferências de Análise</h3>
                  <p className="text-muted-foreground mb-4">
                    Configure as preferências para análises futuras.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Conteúdo em desenvolvimento
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default FinancialHealth;
