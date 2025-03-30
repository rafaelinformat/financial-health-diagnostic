
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const DiagnosticDetailed = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Diagnóstico Detalhado</h1>
          <p className="text-muted-foreground mb-6">
            Análise completa dos indicadores financeiros da empresa
          </p>
        </div>

        <Tabs defaultValue="diagnostico" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="diagnostico-geral" onClick={() => navigate('/financial-health')}>Diagnóstico Geral</TabsTrigger>
            <TabsTrigger value="diagnostico">Diagnóstico Detalhado</TabsTrigger>
            <TabsTrigger value="historico" onClick={() => navigate('/financial-health/history')}>Histórico do Diagnóstico</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="diagnostico" className="animate-fade-in space-y-8">
            {/* Titulo do Diagnostico */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Diagnóstico Financeiro - Tecno Chapa (2023)</CardTitle>
              </CardHeader>
            </Card>

            {/* Dados da Empresa */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Dados da Empresa</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <p><strong>Nome da empresa:</strong> Tecno Chapa</p>
                  <p><strong>Setor de atuação:</strong> Indústria</p>
                  <p><strong>Período de análise:</strong> 2023</p>
                </div>
              </CardContent>
            </Card>

            {/* Parametros de Liquidez */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Parâmetros de Liquidez</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Referência</TableHead>
                      <TableHead>Resultado da Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Liquidez Corrente</TableCell>
                      <TableCell>1,68x</TableCell>
                      <TableCell>Ideal &gt; 1,5</TableCell>
                      <TableCell>Excelente - Alta capacidade de pagamento das obrigações de curto prazo</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Liquidez Seca</TableCell>
                      <TableCell>1,45x</TableCell>
                      <TableCell>Ideal &gt; 1</TableCell>
                      <TableCell>Excelente - Ampla capacidade de liquidez sem depender de estoques</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Liquidez Imediata</TableCell>
                      <TableCell>0,26x</TableCell>
                      <TableCell>Ideal &gt; 1</TableCell>
                      <TableCell>Excelente - Caixa suficiente para cobrir obrigações de curto prazo</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Atividades Operacionais */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Atividades Operacionais</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Interpretação</TableHead>
                      <TableHead>Resultado da Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Prazo Médio de Recebimento (PMR)</TableCell>
                      <TableCell>69,97 dias</TableCell>
                      <TableCell>&lt; 30 dias (Ideal)</TableCell>
                      <TableCell>Moderado - Prazo de recebimento em geral elevado</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prazo Médio de Estocagem (PME)</TableCell>
                      <TableCell>0,00 dias</TableCell>
                      <TableCell>&lt; 60 dias (Ideal)</TableCell>
                      <TableCell>Excelente - Sem estoque acumulado</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Prazo Médio de Pagamento (PMP)</TableCell>
                      <TableCell>10,99 dias</TableCell>
                      <TableCell>&gt; 30 dias (Ideal)</TableCell>
                      <TableCell>Baixo - Prazos curtos de pagamento</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ciclo Operacional</TableCell>
                      <TableCell>69,97 dias</TableCell>
                      <TableCell>&lt; 150 dias (Ideal)</TableCell>
                      <TableCell>Bom - Ciclo operacional eficiente</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Ciclo de Caixa</TableCell>
                      <TableCell>58,91 dias</TableCell>
                      <TableCell>&lt; 90 dias (Ideal)</TableCell>
                      <TableCell>Bom - Ciclo de caixa equilibrado</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Estrutura de Capital */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Estrutura de Capital</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Interpretação</TableHead>
                      <TableHead>Resultado da Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Índice de Endividamento Geral</TableCell>
                      <TableCell>0,585</TableCell>
                      <TableCell>&lt; 0,6 (Ideal)</TableCell>
                      <TableCell>Bom - Nível de endividamento dentro do ideal</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Capital de Terceiros / Capital Próprio</TableCell>
                      <TableCell>0,574</TableCell>
                      <TableCell>&lt; 1 (Ideal)</TableCell>
                      <TableCell>Bom - Financiamento majoritário com capital próprio</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Composição do Endividamento</TableCell>
                      <TableCell>1,000</TableCell>
                      <TableCell>0,3 - 0,6 (Ideal)</TableCell>
                      <TableCell>Alto - Todo o endividamento é de curto prazo</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Cobertura de Juros */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Cobertura de Juros</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Interpretação</TableHead>
                      <TableHead>Resultado da Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Índice de Cobertura de Juros</TableCell>
                      <TableCell>19,94x</TableCell>
                      <TableCell>&gt; 3 (Ideal)</TableCell>
                      <TableCell>Excelente - Alta capacidade de pagamento dos juros</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Pagamento do Principal */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Pagamento do Principal</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Interpretação</TableHead>
                      <TableHead>Resultado da Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Dívida Líquida/EBITDA</TableCell>
                      <TableCell>-0,78x</TableCell>
                      <TableCell>&lt; 3 (Ideal)</TableCell>
                      <TableCell>Negativo - Caixa superior à dívida</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Dívida Líquida/PL</TableCell>
                      <TableCell>-0,61x</TableCell>
                      <TableCell>&lt; 0,5 (Ideal)</TableCell>
                      <TableCell>Negativo - Posição financeira confortável</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Rentabilidade e Eficiência */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Rentabilidade e Eficiência</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Interpretação</TableHead>
                      <TableHead>Resultado da Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Giro do Ativo Total</TableCell>
                      <TableCell>2,30x</TableCell>
                      <TableCell>&gt; 0,5 (Ideal)</TableCell>
                      <TableCell>Excelente - Alta eficiência no uso dos ativos</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Giro do Ativo Permanente</TableCell>
                      <TableCell>5,99x</TableCell>
                      <TableCell>&gt; 0,5 (Ideal)</TableCell>
                      <TableCell>Bom - Eficiência no uso dos ativos permanentes</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Giro do Ativo Total</TableCell>
                      <TableCell>5,99x</TableCell>
                      <TableCell>&gt; 0,5 (Ideal)</TableCell>
                      <TableCell>Bom - Eficiência geral no uso dos ativos</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Margens */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Margens</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Interpretação</TableHead>
                      <TableHead>Resultado da Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>Margem Bruta</TableCell>
                      <TableCell>100%</TableCell>
                      <TableCell>&gt; 40% (Ideal)</TableCell>
                      <TableCell>Excelente - Alta margem de contribuição</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Margem Operacional</TableCell>
                      <TableCell>37,18%</TableCell>
                      <TableCell>&gt; 10% (Ideal)</TableCell>
                      <TableCell>Excelente - Alta eficiência operacional</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Margem Líquida</TableCell>
                      <TableCell>31,8%</TableCell>
                      <TableCell>&gt; 5% (Ideal)</TableCell>
                      <TableCell>Excelente - Alta eficiência na conversão de receita em lucro</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Retorno sobre o Capital */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Retorno sobre o Capital</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Indicador</TableHead>
                      <TableHead>Valor</TableHead>
                      <TableHead>Interpretação</TableHead>
                      <TableHead>Resultado da Análise</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    <TableRow>
                      <TableCell>ROA (Retorno sobre o Ativo)</TableCell>
                      <TableCell>73,38%</TableCell>
                      <TableCell>&gt; 5% (Ideal)</TableCell>
                      <TableCell>Excelente - Retorno elevado sobre os ativos totais</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>ROE (Retorno sobre o Patrimônio Líquido)</TableCell>
                      <TableCell>77,24%</TableCell>
                      <TableCell>&gt; 15% (Ideal)</TableCell>
                      <TableCell>Excelente - Alto retorno sobre o capital próprio</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Conclusão */}
            <Card className="border-border/40 shadow-sm">
              <CardHeader className="bg-muted/30 pb-2">
                <CardTitle className="text-lg text-primary">Conclusão</CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="p-4 bg-muted/20 rounded-md">
                  A empresa Tecno Chapa apresenta uma situação financeira "muito firme" em 2023, com alta rentabilidade, sólida posição de caixa e baixo endividamento. Os principais destaques são:
                </p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="diagnostico-geral">
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

export default DiagnosticDetailed;
