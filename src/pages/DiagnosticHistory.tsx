
import React from 'react';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useNavigate } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

// Sample diagnostic data
const diagnosticData = [
  {
    id: '1',
    date: '10/01/2024',
    companyName: 'TRAS ENGENHARIA',
    size: 'ME',
    revenue: 'R$ 0 até 100 mil',
    classification: 'EM RISCO DE FALÊNCIA',
  },
  {
    id: '2',
    date: '05/01/2024',
    companyName: 'CONSTRUTORA ABC',
    size: 'ME',
    revenue: 'R$ 0 até 100 mil',
    classification: 'SAUDÁVEL',
  },
  {
    id: '3',
    date: '28/12/2023',
    companyName: 'TECH SOLUTIONS LTDA',
    size: 'EPP',
    revenue: 'R$ 100 mil até 500 mil',
    classification: 'ALERTA',
  },
  {
    id: '4',
    date: '15/12/2023',
    companyName: 'CONSULTORIA XYZ',
    size: 'ME',
    revenue: 'R$ 0 até 100 mil',
    classification: 'SAUDÁVEL',
  },
];

const DiagnosticHistory = () => {
  const navigate = useNavigate();

  const handleViewDiagnostic = (id: string) => {
    navigate(`/financial-health/details/${id}`);
  };

  const getClassificationStyle = (classification: string) => {
    switch (classification) {
      case 'EM RISCO DE FALÊNCIA':
        return 'text-red-500 font-semibold';
      case 'ALERTA':
        return 'text-amber-500 font-semibold';
      case 'SAUDÁVEL':
        return 'text-green-500 font-semibold';
      default:
        return '';
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Histórico de Diagnósticos</h1>
          <p className="text-muted-foreground mb-6">
            Lista de diagnósticos financeiros realizados por empresa
          </p>
        </div>

        <Tabs defaultValue="historico" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico-geral" onClick={() => navigate('/financial-health')}>Diagnóstico Geral</TabsTrigger>
            <TabsTrigger value="diagnostico" onClick={() => navigate('/financial-health/detailed')}>Diagnóstico Detalhado</TabsTrigger>
            <TabsTrigger value="historico">Histórico do Diagnóstico</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="diagnostico-geral">
            {/* This content will not be displayed as we navigate away */}
          </TabsContent>
          
          <TabsContent value="diagnostico">
            {/* This content will not be displayed as we navigate away */}
          </TabsContent>
          
          <TabsContent value="historico" className="animate-fade-in">
            <div className="glass-card p-6">
              <Table>
                <TableCaption>Lista de Diagnóstico por empresa</TableCaption>
                <TableHeader className="bg-muted/30">
                  <TableRow>
                    <TableHead className="w-24">DATA</TableHead>
                    <TableHead>NOME</TableHead>
                    <TableHead>ENQUADRAMENTO</TableHead>
                    <TableHead>RECEITA</TableHead>
                    <TableHead>CLASSIFICAÇÃO</TableHead>
                    <TableHead className="text-right">AÇÕES</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {diagnosticData.map((diagnostic) => (
                    <TableRow key={diagnostic.id}>
                      <TableCell>{diagnostic.date}</TableCell>
                      <TableCell className="font-medium">{diagnostic.companyName}</TableCell>
                      <TableCell>{diagnostic.size}</TableCell>
                      <TableCell>{diagnostic.revenue}</TableCell>
                      <TableCell className={getClassificationStyle(diagnostic.classification)}>
                        {diagnostic.classification}
                      </TableCell>
                      <TableCell className="text-right">
                        <Button 
                          size="sm" 
                          variant="outline" 
                          onClick={() => handleViewDiagnostic(diagnostic.id)}
                          className="flex items-center gap-1"
                        >
                          <Eye className="h-4 w-4" />
                          <span>Ver diagnóstico</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
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

export default DiagnosticHistory;
