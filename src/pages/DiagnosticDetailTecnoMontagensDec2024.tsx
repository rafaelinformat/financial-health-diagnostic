import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';
import DiagnosticHistoryTable from '@/components/DiagnosticHistoryTable';
import { diagnosticDataByCompany } from '@/data/diagnosticData';

interface IndicatorRowProps {
  indicator: string;
  value: string;
  desiredValue: string;
  analysis: string;
}

const DiagnosticDetailTecnoMontagensDec2024 = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const indicators: IndicatorRowProps[] = [
    {
      indicator: "Liquidez Corrente",
      value: "1.2",
      desiredValue: "> 1.5",
      analysis: "Razoável - Capacidade de pagamento de curto prazo precisa de atenção"
    },
    {
      indicator: "Liquidez Seca",
      value: "0.9",
      desiredValue: "> 1",
      analysis: "Atenção - Dependência de estoques para cobrir obrigações"
    },
    {
      indicator: "Endividamento Geral",
      value: "0.65",
      desiredValue: "< 0.6",
      analysis: "Alerta - Nível de endividamento elevado"
    },
    {
      indicator: "Margem Líquida",
      value: "0.05",
      desiredValue: "> 0.1",
      analysis: "Atenção - Margem de lucro baixa"
    },
    {
      indicator: "Retorno sobre o Ativo (ROA)",
      value: "0.08",
      desiredValue: "> 0.1",
      analysis: "Atenção - Retorno sobre ativos precisa melhorar"
    }
  ];

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Detalhes do Diagnóstico - Tecno Montagens (Dez 2024)</h1>
          <p className="text-muted-foreground mb-6">
            Visualizando resultados do diagnóstico financeiro #{id} para Tecno Montagens em Dezembro de 2024.
          </p>
        </div>

        <Tabs defaultValue="diagnostico" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico-geral" onClick={() => navigate('/financial-health')}>Diagnóstico Geral</TabsTrigger>
            <TabsTrigger value="diagnostico" onClick={() => navigate('/financial-health/detailed')}>Diagnóstico Detalhado</TabsTrigger>
            <TabsTrigger value="historico" onClick={() => navigate('/financial-health/history')}>Histórico do Diagnóstico</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>

          <TabsContent value="diagnostico" className="animate-fade-in">
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Indicadores Financeiros</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Valor Desejado</TableHead>
                      <TableHead>Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {indicators.map((row) => (
                      <TableRow key={row.indicator}>
                        <TableCell>{row.indicator}</TableCell>
                        <TableCell>{row.value}</TableCell>
                        <TableCell>{row.desiredValue}</TableCell>
                        <TableCell>{row.analysis}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Resumo do Diagnóstico</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p>
                  Este diagnóstico foi realizado para Tecno Montagens em Dezembro de 2024.
                  A análise indica que a empresa precisa melhorar sua liquidez e reduzir o endividamento.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="historico">
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

export default DiagnosticDetailTecnoMontagensDec2024;
