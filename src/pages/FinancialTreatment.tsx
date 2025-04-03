
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TreatmentTab from '@/components/treatment/TreatmentTab';
import DetailedTreatmentTab from '@/components/treatment/DetailedTreatmentTab';
import HistoryTab from '@/components/treatment/HistoryTab';
import SettingsTab from '@/components/treatment/SettingsTab';

const FinancialTreatment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tratamento');

  useEffect(() => {
    // Parse the URL query parameters
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab');
    
    // If there's a tab parameter in the URL and it's valid, set it as active
    if (tabParam && ['tratamento', 'tratamento-detalhado', 'historico', 'configuracoes'].includes(tabParam)) {
      setActiveTab(tabParam);
    }
  }, [location]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    navigate(`/financial-treatment?tab=${value}`);
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tratamento Financeiro</h1>
          <p className="text-muted-foreground">
            Baseado no diagnóstico da sua empresa, recomendamos os seguintes tratamentos financeiros
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="tratamento">Tratamento</TabsTrigger>
            <TabsTrigger value="tratamento-detalhado">Tratamento Detalhado</TabsTrigger>
            <TabsTrigger value="historico">Histórico de Tratamento</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          
          <TreatmentTab />
          <DetailedTreatmentTab />
          <HistoryTab />
          <SettingsTab />
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default FinancialTreatment;
