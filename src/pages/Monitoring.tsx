import React, { useState } from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProgressBar from '@/components/ProgressBar';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, Info } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';

const Monitoring = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Monitoramento Financeiro</h1>
          <p className="text-muted-foreground">
            Acompanhe em tempo real os indicadores financeiros da sua empresa
          </p>
        </div>
        
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Visão Geral</TabsTrigger>
            <TabsTrigger value="cash-flow">Fluxo de Caixa</TabsTrigger>
            <TabsTrigger value="profitability">Rentabilidade</TabsTrigger>
            <TabsTrigger value="debts">Endividamento</TabsTrigger>
            <TabsTrigger value="settings">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-animated">
                <CardHeader>
                  <CardTitle>Indicadores Principais</CardTitle>
                  <CardDescription>Status atual dos KPIs críticos</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm font-medium">Liquidez Corrente</div>
                      <div className="text-sm font-medium">1.85</div>
                    </div>
                    <ProgressBar value={85} colorScheme="success" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm font-medium">Margem EBITDA</div>
                      <div className="text-sm font-medium">23.4%</div>
                    </div>
                    <ProgressBar value={68} colorScheme="primary" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm font-medium">Ciclo Operacional</div>
                      <div className="text-sm font-medium">45 dias</div>
                    </div>
                    <ProgressBar value={52} colorScheme="warning" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <div className="text-sm font-medium">ROI</div>
                      <div className="text-sm font-medium">22.7%</div>
                    </div>
                    <ProgressBar value={78} colorScheme="success" />
                  </div>
                </CardContent>
              </Card>
              
              <Card className="card-animated">
                <CardHeader>
                  <CardTitle>Alertas e Notificações</CardTitle>
                  <CardDescription>Problemas que requerem atenção</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 bg-danger/10 rounded-lg border border-danger/20">
                    <h3 className="text-danger font-medium mb-1">Alerta de Liquidez</h3>
                    <p className="text-sm">A reserva de caixa está 15% abaixo da meta estabelecida.</p>
                  </div>
                  
                  <div className="p-4 bg-warning/10 rounded-lg border border-warning/20">
                    <h3 className="text-warning font-medium mb-1">Prazo médio de recebimento</h3>
                    <p className="text-sm">Aumento de 5 dias no prazo médio de recebimento de clientes.</p>
                  </div>
                  
                  <div className="p-4 bg-success/10 rounded-lg border border-success/20">
                    <h3 className="text-success font-medium mb-1">Oportunidade identificada</h3>
                    <p className="text-sm">Potencial para redução de 12% nos custos operacionais.</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="md:col-span-2 card-animated">
                <CardHeader>
                  <CardTitle>Progresso do Tratamento Financeiro</CardTitle>
                  <CardDescription>Acompanhamento dos planos de tratamento em implementação</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="font-medium">Reestruturação de Dívidas</div>
                        <div className="text-sm font-medium">75% concluído</div>
                      </div>
                      <ProgressBar value={75} colorScheme="primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="font-medium">Otimização de Capital de Giro</div>
                        <div className="text-sm font-medium">45% concluído</div>
                      </div>
                      <ProgressBar value={45} colorScheme="primary" />
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <div className="font-medium">Redução de Custos Operacionais</div>
                        <div className="text-sm font-medium">30% concluído</div>
                      </div>
                      <ProgressBar value={30} colorScheme="primary" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="cash-flow" className="animate-fade-in">
            <Card className="card-animated">
              <CardHeader>
                <CardTitle>Fluxo de Caixa</CardTitle>
                <CardDescription>Detalhamento do fluxo de caixa atual e projeções</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted rounded-md mb-4">
                  <p className="text-muted-foreground">Gráfico de fluxo de caixa seria exibido aqui</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Entradas (mês atual)</p>
                    <p className="text-2xl font-bold">R$ 145.320</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Saídas (mês atual)</p>
                    <p className="text-2xl font-bold">R$ 107.450</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Saldo líquido</p>
                    <p className="text-2xl font-bold text-success">R$ 37.870</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="profitability" className="animate-fade-in">
            <Card className="card-animated">
              <CardHeader>
                <CardTitle>Análise de Rentabilidade</CardTitle>
                <CardDescription>Indicadores de rentabilidade e desempenho</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted rounded-md mb-4">
                  <p className="text-muted-foreground">Gráfico de rentabilidade seria exibido aqui</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">ROI</p>
                    <p className="text-2xl font-bold">22.7%</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Margem Líquida</p>
                    <p className="text-2xl font-bold">18.4%</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">EBITDA</p>
                    <p className="text-2xl font-bold">R$ 58.240</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">ROE</p>
                    <p className="text-2xl font-bold">15.3%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="debts" className="animate-fade-in">
            <Card className="card-animated">
              <CardHeader>
                <CardTitle>Gestão de Endividamento</CardTitle>
                <CardDescription>Análise da estrutura de capital e dívidas</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-80 flex items-center justify-center bg-muted rounded-md mb-4">
                  <p className="text-muted-foreground">Gráfico de endividamento seria exibido aqui</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Endividamento Total</p>
                    <p className="text-2xl font-bold">R$ 378.520</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Custo Médio da Dívida</p>
                    <p className="text-2xl font-bold">12.7%</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm text-muted-foreground">Índice de Cobertura</p>
                    <p className="text-2xl font-bold">2.35x</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <IndicatorConfigCard 
                title="Indicadores de Liquidez" 
                indicators={[
                  { id: 'liquidez-corrente', name: 'Liquidez Corrente' },
                  { id: 'liquidez-seca', name: 'Liquidez Seca' },
                  { id: 'liquidez-imediata', name: 'Liquidez Imediata' }
                ]}
              />

              <IndicatorConfigCard 
                title="Estrutura de Capital" 
                indicators={[
                  { id: 'capital-terceiros', name: 'Capital Terceiros / Capital Próprio' },
                  { id: 'indice-endividamento', name: 'Índice de Endividamento Geral' },
                  { id: 'composicao-endividamento', name: 'Composição do Endividamento' },
                  { id: 'grau-alavancagem', name: 'Grau de Alavancagem Financeira' },
                  { id: 'patrimonio', name: 'Patrimônio' },
                  { id: 'lucro-operacional', name: 'Lucro Operacional' },
                  { id: 'depreciacao', name: 'Depreciação' },
                  { id: 'ativo-total', name: 'Ativo Total' },
                  { id: 'passivo-circulante', name: 'Passivo Circulante' }
                ]}
              />

              <IndicatorConfigCard 
                title="Atividades Essenciais" 
                indicators={[
                  { id: 'prazo-recebimento', name: 'Prazo Médio de Recebimento - PMR' },
                  { id: 'prazo-estocagem', name: 'Prazo Médio de Estocagem - PME' },
                  { id: 'prazo-pagamento', name: 'Prazo Médio de Pagamento - PMP' },
                  { id: 'ciclo-operacional', name: 'Ciclo Operacional' },
                  { id: 'contas-receber', name: 'Contas a Receber' }
                ]}
              />

              <IndicatorConfigCard 
                title="Rentabilidade" 
                indicators={[
                  { id: 'receita-liquida', name: 'Receita Líquida' },
                  { id: 'giro-ativo-fixo', name: 'Giro do Ativo Fixo' },
                  { id: 'lucro-bruto', name: 'Lucro Bruto' },
                  { id: 'lucro-liquido', name: 'Lucro Líquido' },
                  { id: 'margem-bruta', name: 'Margem Bruta' },
                  { id: 'roi', name: 'ROI' },
                  { id: 'roa', name: 'ROA' },
                  { id: 'margem-liquida', name: 'Margem Líquida' }
                ]}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

interface IndicatorProps {
  id: string;
  name: string;
}

interface IndicatorConfigCardProps {
  title: string;
  indicators: IndicatorProps[];
}

const IndicatorConfigCard = ({ title, indicators }: IndicatorConfigCardProps) => {
  return (
    <Card className="card-animated">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-xl">{title}</CardTitle>
        <button className="text-muted-foreground hover:text-foreground">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </CardHeader>
      <CardContent className="pt-2">
        <div className="space-y-4">
          {indicators.map((indicator) => (
            <IndicatorConfigRow 
              key={indicator.id} 
              indicator={indicator} 
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const IndicatorConfigRow = ({ indicator }: { indicator: IndicatorProps }) => {
  const form = useForm();
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Switch
          checked={isEnabled}
          onCheckedChange={(checked) => setIsEnabled(checked)}
          className="data-[state=checked]:bg-primary"
        />
        <span className="text-sm">{indicator.name}</span>
        <Popover>
          <PopoverTrigger asChild>
            <button className="text-muted-foreground hover:text-foreground">
              <Info className="h-4 w-4" />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-96" align="start">
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">{indicator.name}</h4>
                <p className="text-sm text-muted-foreground mt-1">
                  Descrição detalhada do indicador e como ele é calculado.
                </p>
              </div>
              
              <Form {...form}>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="dateStart"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data Início</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="dateEnd"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Data Fim</FormLabel>
                          <FormControl>
                            <Input type="date" {...field} />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone para notificação</FormLabel>
                        <FormControl>
                          <Input type="tel" placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email para notificação</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Observações</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Notas ou observações adicionais" {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end">
                    <Button type="submit">Salvar Configurações</Button>
                  </div>
                </div>
              </Form>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Monitoring;
