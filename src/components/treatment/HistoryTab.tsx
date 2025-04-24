import React, { useState } from 'react';
import { TabsContent } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Eye, CheckCircle, XCircle, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const treatmentHistoryByCompany = {
  'TECNO CHAPA': [
    {
      id: '1',
      date: '01/04/2025',
      companyName: 'TECNO CHAPA',
      size: 'LTDA',
      reference: '2025',
      referenceMonth: 'JANEIRO',
      classification: 'SAUDÁVEL',
      treatmentType: 'RESTRUTURAÇÃO FINNACEIRA EXTERNA',
      status: 'pending'
    },
    {
      id: '2',
      date: '30/03/2025',
      companyName: 'TECNO CHAPA LTDA',
      size: '',
      reference: '2025',
      referenceMonth: 'FEVEREIRO',
      classification: 'SAUDÁVEL',
      treatmentType: 'RESTRUTURAÇÃO FINANCEIRA INTERNA',
      status: 'pending'
    },
    {
      id: '3',
      date: '30/03/2025',
      companyName: 'TECNO CHAPA LTDA',
      size: '',
      reference: '2025',
      referenceMonth: 'FEVEREIRO',
      classification: 'SAUDÁVEL',
      treatmentType: 'OTIMIZAÇÃO DE RECEBIMENTO',
      status: 'pending'
    },
  ],
  'TECNO MONTAGENS': [
    {
      id: '4',
      date: '01/04/2025',
      companyName: 'TECNO MONTAGENS LTDA',
      size: '',
      reference: '2025',
      classification: 'SAUDÁVEL',
      treatmentType: 'REDUZIR DESPESAS OPERACIONAIS',
      status: 'pending'
    },
  ],
};

const ITEMS_PER_PAGE = 2;

const CompanyTreatmentTable = ({ companyName, treatments }: { companyName: string, treatments: any[] }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const handleViewDetails = (id: string, treatment: any) => {
    if (treatment.companyName.includes('TECNO CHAPA') && 
        treatment.reference === '2025' && 
        treatment.referenceMonth === 'FEVEREIRO' &&
        treatment.treatmentType === 'RESTRUTURAÇÃO FINANCEIRA INTERNA') {
      navigate('/treatment-detail-feb-2025');
    } else {
      navigate(`/financial-treatment?tab=tratamento-detalhado&id=${id}`);
    }
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

  const totalPages = Math.ceil(treatments.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = treatments.slice(startIndex, endIndex);

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
            <span className="text-sm text-muted-foreground">{treatments.length} tratamentos</span>
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
                <TableHead>EMPRESA</TableHead>
                <TableHead>ANO DE REFERÊNCIA</TableHead>
                <TableHead>MÊS DE REFERÊNCIA</TableHead>
                <TableHead>CLASSIFICAÇÃO</TableHead>
                <TableHead>TRATAMENTO</TableHead>
                <TableHead>AÇÃO</TableHead>
                <TableHead className="text-right">DETALHAMENTO</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentItems.map((treatment) => (
                <TableRow key={treatment.id}>
                  <TableCell>{treatment.date}</TableCell>
                  <TableCell className="font-medium">
                    {treatment.companyName}
                    {treatment.size && ` ${treatment.size}`}
                  </TableCell>
                  <TableCell>{treatment.reference}</TableCell>
                  <TableCell>{treatment.referenceMonth}</TableCell>
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
                      onClick={() => handleViewDetails(treatment.id, treatment)}
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

          {totalPages > 1 && (
            <Pagination className="mt-4">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => setCurrentPage(p => Math.max(1, p - 1))} 
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink 
                      isActive={currentPage === i + 1}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} 
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};

const HistoryTab: React.FC = () => {
  return (
    <TabsContent value="historico">
      <div className="glass-card p-6 animate-fade-in">
        <h2 className="text-2xl font-semibold mb-6">Histórico de Tratamento</h2>
        <p className="text-muted-foreground mb-8">
          Acompanhe o histórico de tratamentos financeiros aplicados e seus resultados.
        </p>
        
        <div className="space-y-6">
          {Object.entries(treatmentHistoryByCompany).map(([company, treatments]) => (
            <CompanyTreatmentTable 
              key={company} 
              companyName={company} 
              treatments={treatments} 
            />
          ))}
        </div>
      </div>
    </TabsContent>
  );
};

export default HistoryTab;
