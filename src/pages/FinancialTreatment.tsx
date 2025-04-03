
import React from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '@/components/DashboardLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clipboard, LineChart, ArrowUpRight } from 'lucide-react';

const FinancialTreatment = () => {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tratamento Financeiro</h1>
          <p className="text-muted-foreground">
            Baseado no diagnóstico da sua empresa, recomendamos os seguintes tratamentos financeiros
          </p>
        </div>

        <Tabs defaultValue="tratamento" className="w-full">
          <TabsList className="mb-6 bg-muted/20 p-1 rounded-md">
            <TabsTrigger value="tratamento">Tratamento</TabsTrigger>
            <TabsTrigger value="tratamento-detalhado">Tratamento Detalhado</TabsTrigger>
            <TabsTrigger value="historico">Histórico de Tratamento</TabsTrigger>
            <TabsTrigger value="configuracoes">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="tratamento" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-animated">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Clipboard className="w-5 h-5 mr-2 text-primary" />
                    Reestruturação de Dívidas
                  </CardTitle>
                  <CardDescription>Prioridade: Alta</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Identificamos oportunidades para reestruturar suas dívidas atuais, reduzindo taxas de juros e melhorando o fluxo de caixa.
                  </p>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-md mb-4">
                    <div>
                      <p className="text-sm font-medium">Economia estimada</p>
                      <p className="text-lg font-bold">R$ 12.450 <span className="text-sm text-success">/ano</span></p>
                    </div>
                    <ArrowUpRight className="w-10 h-10 text-success/20" />
                  </div>
                  <Button variant="outline" className="w-full button-animated">
                    Ver plano detalhado <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-animated">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-primary" />
                    Otimização de Capital de Giro
                  </CardTitle>
                  <CardDescription>Prioridade: Média</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Estratégias para melhorar o ciclo de conversão de caixa e liberar capital de giro para operações.
                  </p>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-md mb-4">
                    <div>
                      <p className="text-sm font-medium">Melhoria de fluxo de caixa</p>
                      <p className="text-lg font-bold">+22% <span className="text-sm text-success">projeção</span></p>
                    </div>
                    <ArrowUpRight className="w-10 h-10 text-success/20" />
                  </div>
                  <Button variant="outline" className="w-full button-animated">
                    Ver plano detalhado <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-animated">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <Clipboard className="w-5 h-5 mr-2 text-primary" />
                    Redução de Custos Operacionais
                  </CardTitle>
                  <CardDescription>Prioridade: Alta</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Plano detalhado para identificar e reduzir custos operacionais sem impactar a qualidade dos produtos/serviços.
                  </p>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-md mb-4">
                    <div>
                      <p className="text-sm font-medium">Redução de custos estimada</p>
                      <p className="text-lg font-bold">15-20% <span className="text-sm text-success">em 6 meses</span></p>
                    </div>
                    <ArrowUpRight className="w-10 h-10 text-success/20" />
                  </div>
                  <Button variant="outline" className="w-full button-animated">
                    Ver plano detalhado <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="card-animated">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center">
                    <LineChart className="w-5 h-5 mr-2 text-primary" />
                    Estratégias de Precificação
                  </CardTitle>
                  <CardDescription>Prioridade: Média</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Revisão e otimização da estratégia de precificação para maximizar margens de lucro sem perder competitividade.
                  </p>
                  <div className="flex justify-between items-center p-3 bg-muted rounded-md mb-4">
                    <div>
                      <p className="text-sm font-medium">Aumento de margem projetado</p>
                      <p className="text-lg font-bold">8-12% <span className="text-sm text-success">por produto</span></p>
                    </div>
                    <ArrowUpRight className="w-10 h-10 text-success/20" />
                  </div>
                  <Button variant="outline" className="w-full button-animated">
                    Ver plano detalhado <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            <Card className="card-animated mt-6">
              <CardHeader>
                <CardTitle>Seu Plano de Tratamento Personalizado</CardTitle>
                <CardDescription>
                  Um plano personalizado e abrangente para melhorar a saúde financeira da sua empresa
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
                    <div>
                      <h3 className="font-medium">Consultoria Financeira Especializada</h3>
                      <p className="text-sm text-muted-foreground">
                        Sessões de consultoria com especialistas para implementar as recomendações de tratamento
                      </p>
                    </div>
                    <Button className="button-animated">Agendar Consulta</Button>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
                    <div>
                      <h3 className="font-medium">Relatório Detalhado de Tratamento</h3>
                      <p className="text-sm text-muted-foreground">
                        Documento abrangente com todas as estratégias e passos para implementação
                      </p>
                    </div>
                    <Button variant="outline" className="button-animated">Gerar Relatório</Button>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-medium">Implementação Assistida</h3>
                      <p className="text-sm text-muted-foreground">
                        Suporte contínuo durante a implementação das medidas de tratamento financeiro
                      </p>
                    </div>
                    <Button variant="outline" className="button-animated">Saiba Mais</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="tratamento-detalhado">
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Tratamento Detalhado</h2>
              <p className="text-muted-foreground mb-8">
                Visualize planos detalhados de tratamento financeiro para sua empresa.
              </p>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Detalhes do Tratamento</h3>
                  <p className="text-muted-foreground mb-4">
                    Esta seção apresentará os detalhes completos do tratamento financeiro recomendado.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Conteúdo em desenvolvimento
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="historico">
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Histórico de Tratamento</h2>
              <p className="text-muted-foreground mb-8">
                Acompanhe o histórico de tratamentos financeiros aplicados e seus resultados.
              </p>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Tratamentos Anteriores</h3>
                  <p className="text-muted-foreground mb-4">
                    Esta seção apresentará um histórico completo dos tratamentos financeiros já aplicados.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Conteúdo em desenvolvimento
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="configuracoes">
            <div className="glass-card p-8 animate-fade-in">
              <h2 className="text-2xl font-semibold mb-6">Configurações de Tratamento</h2>
              <p className="text-muted-foreground mb-8">
                Personalize as configurações do seu tratamento financeiro e defina parâmetros.
              </p>
              
              <div className="space-y-6">
                <div className="border rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-4">Preferências de Tratamento</h3>
                  <p className="text-muted-foreground mb-4">
                    Configure as preferências para tratamentos futuros.
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

export default FinancialTreatment;
