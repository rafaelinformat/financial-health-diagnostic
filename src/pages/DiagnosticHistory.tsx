
import React from 'react';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import DashboardLayout from '@/components/DashboardLayout';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useNavigate } from 'react-router-dom';

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
      </div>
    </DashboardLayout>
  );
};

export default DiagnosticHistory;
