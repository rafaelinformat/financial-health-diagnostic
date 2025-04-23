import React, { useState } from 'react';
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@/components/ui/collapsible';
import { ChevronDown, ChevronRight } from 'lucide-react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';

const diagnosticDataByCompany = {
  'TECNO CHAPA': [
    {
      id: '1',
      date: '30/03/2025',
      companyName: 'TECNO CHAPA LDTA',
      size: 'LDTA',
      reference: '2025',
      referenceMonth: 'JANEIRO',
      classification: 'SAUDÁVEL',
    },
    {
      id: '7',
      date: '30/03/2025',
      companyName: 'TECNO CHAPA LDTA',
      size: 'LDTA',
      reference: '2025',
      referenceMonth: 'FEVEREIRO',
      classification: 'SAUDÁVEL',
    },
    {
      id: '2',
      date: '30/03/2025',
      companyName: 'TECNO CHAPA',
      size: 'LDTA',
      reference: '2024',
      referenceMonth: 'DEZEMBRO',
      classification: 'SAUDÁVEL',
    },
    {
      id: '3',
      date: '30/03/2025',
      companyName: 'TECNO CHAPA',
      size: 'LDTA',
      reference: '2023',
      referenceMonth: 'NOVEMBRO',
      classification: 'SAUDÁVEL',
    },
  ],
  'TECNO MONTAGENS': [
    {
      id: '4',
      date: '30/03/2025',
      companyName: 'TECNO MONTAGENS LDTA',
      size: 'LDTA',
      reference: '2025',
      referenceMonth: 'JANEIRO',
      classification: 'SAUDÁVEL',
    },
    {
      id: '5',
      date: '30/03/2025',
      companyName: 'TECNO MONTAGENS',
      size: 'LDTA',
      reference: '2024',
      referenceMonth: 'DEZEMBRO',
      classification: 'SAUDÁVEL',
    },
    {
      id: '6',
      date: '30/03/2025',
      companyName: 'TECNO MONTAGENS',
      size: 'LDTA',
      reference: '2025',
      referenceMonth: 'FEVEREIRO',
      classification: 'SAUDÁVEL',
    },
    {
      id: '8',
      date: '30/03/2025',
      companyName: 'TECNO MONTAGENS',
      size: 'LDTA',
      reference: '2025',
      referenceMonth: 'FEVEREIRO',
      classification: 'SAUDÁVEL',
    },
  ],
};

const DiagnosticHistoryTable = ({ companyName, diagnostics }: { companyName: string, diagnostics: any[] }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(1);

  const handleViewDiagnostic = (id: string, reference: string, referenceMonth: string) => {
    if (companyName === 'TECNO CHAPA' && reference === '2025' && referenceMonth === 'JANEIRO') {
      navigate(`/financial-health/details-jan-2025/${id}`);
    } else if (companyName === 'TECNO MONTAGENS' && reference === '2025' && referenceMonth === 'JANEIRO') {
      navigate(`/financial-health/details-tecno-montagens/${id}`);
    } else if (reference === '2025' && referenceMonth === 'FEVEREIRO') {
      navigate(`/financial-health/details-feb/${id}`);
    } else if (reference === '2024' && referenceMonth === 'DEZEMBRO') {
      navigate(`/financial-health/details-dec-2024/${id}`);
    } else if (reference === '2023' && referenceMonth === 'NOVEMBRO') {
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

  const totalPages = Math.ceil(diagnostics.length / 2);
  const startIndex = (currentPage - 1) * 2;
  const endIndex = startIndex + 2;
  const currentItems = diagnostics.slice(startIndex, endIndex);

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
              {currentItems.map((diagnostic) => (
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
                      onClick={() => handleViewDiagnostic(diagnostic.id, diagnostic.reference, diagnostic.referenceMonth)}
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

const DiagnosticHistory = () => {
  const navigate = useNavigate();

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
            <div className="space-y-6">
              {Object.entries(diagnosticDataByCompany).map(([company, diagnostics]) => (
                <DiagnosticHistoryTable 
                  key={company} 
                  companyName={company} 
                  diagnostics={diagnostics} 
                />
              ))}
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
