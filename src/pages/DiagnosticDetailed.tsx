
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Dados da Empresa - 2023</h2>
              <div className="space-y-2">
                <p><strong>Nome da empresa:</strong> TECNO CHAPA SOLUÇÕES EM CORTE E DOBRA LTDA</p>
                <p><strong>Setor de atuação:</strong> Indústria/Serviços de Corte e Dobra</p>
                <p><strong>Período de análise:</strong> 01/01/2023 a 31/12/2023</p>
              </div>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Parâmetros de Liquidez</h2>
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
                    <TableCell>1.00</TableCell>
                    <TableCell>&gt; 1.0 (Ideal)</TableCell>
                    <TableCell>Limítrofe</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Liquidez Seca</TableCell>
                    <TableCell>0.18</TableCell>
                    <TableCell>&gt; 1.0</TableCell>
                    <TableCell>Crítica</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Liquidez Imediata</TableCell>
                    <TableCell>0.57</TableCell>
                    <TableCell>&gt; 0.5</TableCell>
                    <TableCell>Boa</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Margens</h2>
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
                    <TableCell>1.00</TableCell>
                    <TableCell>Margem de contribuição</TableCell>
                    <TableCell>Excelente</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Margem Operacional</TableCell>
                    <TableCell>0.73</TableCell>
                    <TableCell>Eficiência operacional</TableCell>
                    <TableCell>Alta</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Margem Líquida</TableCell>
                    <TableCell>0.73</TableCell>
                    <TableCell></TableCell>
                    <TableCell>Alta</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Retorno sobre o Capital</h2>
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
                    <TableCell>0.72</TableCell>
                    <TableCell>Rentabilidade dos ativos</TableCell>
                    <TableCell>Muito forte</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>ROE (Retorno sobre o PL)</TableCell>
                    <TableCell>0.77</TableCell>
                    <TableCell>Retorno ao sócio</TableCell>
                    <TableCell>Excelente</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Estrutura de Capital</h2>
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
                    <TableCell>1.00</TableCell>
                    <TableCell>Proporção de dívida</TableCell>
                    <TableCell>Risco</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Capital de Terceiros / Capital Próprio</TableCell>
                    <TableCell>1.07</TableCell>
                    <TableCell>Alavancagem</TableCell>
                    <TableCell>Frágil</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Grau de Alavancagem Financeira</TableCell>
                    <TableCell>Retorno &gt; custo</TableCell>
                    <TableCell>Eficiência da dívida</TableCell>
                    <TableCell>Positivo</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Pagamento do Principal</h2>
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
                    <TableCell>0.60</TableCell>
                    <TableCell>Ideal até 3x</TableCell>
                    <TableCell>Saudável</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Dívida Líquida/PL</TableCell>
                    <TableCell>0.45</TableCell>
                    <TableCell>Ideal &lt; 1</TableCell>
                    <TableCell>Boa</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Rentabilidade e Eficiência</h2>
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
                    <TableCell>0.99</TableCell>
                    <TableCell>Receita por ativo</TableCell>
                    <TableCell>Razoável</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <div className="glass-card p-6">
              <h2 className="text-xl font-semibold mb-4">Conclusão</h2>
              <p className="p-4 bg-muted/20 rounded-md">
                Saúde Financeira Saudável, porém com alerta para liquidez seca e endividamento no limite dos ativos.
              </p>
            </div>
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
