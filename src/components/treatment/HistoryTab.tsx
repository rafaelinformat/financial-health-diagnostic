
import React from 'react';
import { TabsContent } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, CheckCircle, XCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Sample treatment history data
const treatmentHistoryData = [
  {
    id: '1',
    date: '01/04/2025',
    companyName: 'TECNO CHAPA',
    reference: '2025',
    classification: 'SAUDÁVEL',
    treatmentType: 'REDUZIR DESPESAS OPERACIONAIS',
    status: 'pending'
  },
  {
    id: '2',
    date: '30/03/2025',
    companyName: 'TECNO CHAPA',
    reference: '2024',
    classification: 'SAUDÁVEL',
    treatmentType: 'OTIMIZAÇÃO DE CAPITAL DE GIRO',
    status: 'pending'
  },
  {
    id: '3',
    date: '30/03/2025',
    companyName: 'TECNO CHAPA',
    reference: '2023',
    classification: 'SAUDÁVEL',
    treatmentType: 'MELHORAR GESTÃO DE FLUXO DE CAIXA',
    status: 'pending'
  },
];

const HistoryTab: React.FC = () => {
  const navigate = useNavigate();

  const handleViewDetails = (id: string) => {
    navigate(`/financial-treatment?tab=tratamento-detalhado&id=${id}`);
  };

  const handleApplyTreatment = (id: string) => {
    console.log("Aplicar tratamento ID:", id);
    // Here you would implement the logic to apply the treatment
  };

  const handleRejectTreatment = (id: string) => {
    console.log("Rejeitar tratamento ID:", id);
    // Here you would implement the logic to reject the treatment
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
    <TabsContent value="historico">
      <div className="glass-card p-6 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6">Histórico de Tratamento</h2>
        <p className="text-muted-foreground mb-8">
          Acompanhe o histórico de tratamentos financeiros aplicados e seus resultados.
        </p>
        
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>Lista de tratamentos financeiros por empresa</TableCaption>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="w-24">DATA</TableHead>
                <TableHead>EMPRESA</TableHead>
                <TableHead>ANO DE REFERÊNCIA</TableHead>
                <TableHead>CLASSIFICAÇÃO</TableHead>
                <TableHead>TRATAMENTO</TableHead>
                <TableHead>AÇÃO</TableHead>
                <TableHead className="text-right">DETALHAMENTO</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {treatmentHistoryData.map((treatment) => (
                <TableRow key={treatment.id}>
                  <TableCell>{treatment.date}</TableCell>
                  <TableCell className="font-medium">{treatment.companyName}</TableCell>
                  <TableCell>{treatment.reference}</TableCell>
                  <TableCell className={getClassificationStyle(treatment.classification)}>
                    {treatment.classification}
                  </TableCell>
                  <TableCell>{treatment.treatmentType}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex items-center gap-1"
                        onClick={() => handleApplyTreatment(treatment.id)}
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>Aplicar</span>
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="flex items-center gap-1"
                        onClick={() => handleRejectTreatment(treatment.id)}
                      >
                        <XCircle className="h-4 w-4 text-red-500" />
                        <span>Rejeitar</span>
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleViewDetails(treatment.id)}
                      className="flex items-center gap-1"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Ver detalhes</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </TabsContent>
  );
};

export default HistoryTab;
