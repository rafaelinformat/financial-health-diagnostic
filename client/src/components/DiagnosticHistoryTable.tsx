import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface DiagnosticData {
  id: string;
  date: string;
  companyName: string;
  size: string;
  reference: string;
  referenceMonth: string;
  classification: string;
}

interface DiagnosticHistoryTableProps {
  companyName: string;
  diagnostics: DiagnosticData[];
}

const DiagnosticHistoryTable: React.FC<DiagnosticHistoryTableProps> = ({ companyName, diagnostics }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);

  const handleViewDiagnostic = (id: string, diagnostic: DiagnosticData) => {
    if (companyName === 'TECNO CHAPA' && 
        diagnostic.reference === '2025' && 
        diagnostic.referenceMonth === 'JANEIRO') {
      navigate(`/financial-health/details-jan-2025/${id}`);
    } else if (companyName === 'TECNO CHAPA' && 
               diagnostic.reference === '2025' && 
               diagnostic.referenceMonth === 'FEVEREIRO') {
      navigate(`/financial-health/details-feb2025/${id}`);
    } else if (companyName === 'TECNO MONTAGENS' && 
               diagnostic.reference === '2025' && 
               diagnostic.referenceMonth === 'JANEIRO') {
      navigate(`/financial-health/details-tecno-montagens/${id}`);
    } else if (companyName === 'TECNO MONTAGENS' && 
               diagnostic.reference === '2024' && 
               diagnostic.referenceMonth === 'DEZEMBRO') {
      navigate(`/financial-health/details-tecno-montagens-dec-2024/${id}`);
    } else if (diagnostic.reference === '2023' && 
               diagnostic.referenceMonth === 'NOVEMBRO') {
      navigate(`/financial-health/details-nov-2023/${id}`);
    } else {
      navigate(`/financial-health/details/${id}`);
    }
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
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="mb-6 glass-card rounded-lg overflow-hidden"
    >
      <CollapsibleTrigger asChild>
        <div className="flex items-center justify-between p-4 cursor-pointer bg-muted/30 rounded-t-lg">
          <h3 className="text-lg font-semibold">Empresa {companyName}</h3>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">{diagnostics.length} diagnósticos</span>
            {isOpen ? 
              <ChevronDown className="h-5 w-5" /> : 
              <ChevronRight className="h-5 w-5" />
            }
          </div>
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="p-4">
          <Table>
            <TableHeader className="bg-muted/30">
              <TableRow>
                <TableHead className="w-24">DATA</TableHead>
                <TableHead>NOME</TableHead>
                <TableHead>ENQUADRAMENTO</TableHead>
                <TableHead>ANO DE REFERÊNCIA</TableHead>
                <TableHead>MÊS DE REFERÊNCIA</TableHead>
                <TableHead>CLASSIFICAÇÃO</TableHead>
                <TableHead className="text-right">AÇÕES</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {diagnostics.map((diagnostic) => (
                <TableRow key={diagnostic.id}>
                  <TableCell>{diagnostic.date}</TableCell>
                  <TableCell className="font-medium">{diagnostic.companyName}</TableCell>
                  <TableCell>{diagnostic.size}</TableCell>
                  <TableCell>{diagnostic.reference}</TableCell>
                  <TableCell>{diagnostic.referenceMonth}</TableCell>
                  <TableCell className={getClassificationStyle(diagnostic.classification)}>
                    {diagnostic.classification}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      onClick={() => handleViewDiagnostic(diagnostic.id, diagnostic)}
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
      </CollapsibleContent>
    </Collapsible>
  );
};

export default DiagnosticHistoryTable;
