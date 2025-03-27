
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, Lock, CreditCard, Bell, LogOut } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

const Account = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Minha Conta</h1>
          <p className="text-muted-foreground">
            Gerencie suas informações pessoais e preferências
          </p>
        </div>
        
        <Tabs defaultValue="profile" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="profile" className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              Perfil
            </TabsTrigger>
            <TabsTrigger value="security" className="flex items-center">
              <Lock className="w-4 h-4 mr-2" />
              Segurança
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center">
              <CreditCard className="w-4 h-4 mr-2" />
              Faturamento
            </TabsTrigger>
            <TabsTrigger value="notifications" className="flex items-center">
              <Bell className="w-4 h-4 mr-2" />
              Notificações
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="profile" className="animate-fade-in">
            <Card className="card-animated">
              <CardHeader>
                <CardTitle>Informações de Perfil</CardTitle>
                <CardDescription>Atualize suas informações pessoais</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor="name">Nome Completo</Label>
                      <Input id="name" defaultValue="João Silva" className="input-animated" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label htmlFor="company">Empresa</Label>
                      <Input id="company" defaultValue="Silva Contabilidade" className="input-animated" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1 space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue="joao.silva@email.com" className="input-animated" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" defaultValue="(11) 98765-4321" className="input-animated" />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="profile">Perfil de Usuário</Label>
                    <Input id="profile" defaultValue="Contador" disabled className="bg-muted" />
                    <p className="text-sm text-muted-foreground mt-1">Seu tipo de perfil não pode ser alterado</p>
                  </div>
                  
                  <Button className="button-animated">Salvar Alterações</Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="security" className="animate-fade-in">
            <Card className="card-animated">
              <CardHeader>
                <CardTitle>Configurações de Segurança</CardTitle>
                <CardDescription>Gerencie sua senha e opções de autenticação</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Alterar Senha</h3>
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Senha Atual</Label>
                      <Input id="current-password" type="password" className="input-animated" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nova Senha</Label>
                      <Input id="new-password" type="password" className="input-animated" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar Nova Senha</Label>
                      <Input id="confirm-password" type="password" className="input-animated" />
                    </div>
                    <Button className="button-animated">Atualizar Senha</Button>
                  </div>
                  
                  <div className="pt-6 border-t">
                    <h3 className="text-lg font-medium mb-4">Segurança da Conta</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Autenticação de Dois Fatores</p>
                          <p className="text-sm text-muted-foreground">Adicione uma camada extra de segurança</p>
                        </div>
                        <Switch />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Notificações de Login</p>
                          <p className="text-sm text-muted-foreground">Receba alertas sobre novos logins</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="billing" className="animate-fade-in">
            <Card className="card-animated">
              <CardHeader>
                <CardTitle>Informações de Faturamento</CardTitle>
                <CardDescription>Gerencie suas informações de pagamento e assinatura</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Plano Atual: Premium</h3>
                        <p className="text-sm text-muted-foreground">Próxima cobrança em 15/05/2023</p>
                      </div>
                      <Button variant="outline" className="button-animated">Alterar Plano</Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Método de Pagamento</h3>
                    <div className="p-4 border rounded-lg flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-12 h-8 bg-muted rounded mr-4"></div>
                        <div>
                          <p className="font-medium">Cartão de Crédito</p>
                          <p className="text-sm text-muted-foreground">Visa terminando em 4242</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="button-animated">Editar</Button>
                    </div>
                    <Button variant="outline" className="button-animated">Adicionar Método de Pagamento</Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Histórico de Faturamento</h3>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="grid grid-cols-3 p-3 bg-muted font-medium">
                        <div>Data</div>
                        <div>Descrição</div>
                        <div className="text-right">Valor</div>
                      </div>
                      <div className="divide-y">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="grid grid-cols-3 p-3">
                            <div className="text-muted-foreground">15/04/2023</div>
                            <div>Assinatura Premium</div>
                            <div className="text-right">R$ 199,90</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="notifications" className="animate-fade-in">
            <Card className="card-animated">
              <CardHeader>
                <CardTitle>Preferências de Notificação</CardTitle>
                <CardDescription>Controle os tipos de notificações que você deseja receber</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Email</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Alertas de Saúde Financeira</p>
                          <p className="text-sm text-muted-foreground">Receba alertas sobre mudanças nos indicadores financeiros</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Relatórios Periódicos</p>
                          <p className="text-sm text-muted-foreground">Relatórios semanais e mensais sobre o desempenho financeiro</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Atualizações do Sistema</p>
                          <p className="text-sm text-muted-foreground">Informações sobre novas funcionalidades e atualizações</p>
                        </div>
                        <Switch />
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t space-y-4">
                    <h3 className="text-lg font-medium">Aplicativo</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Alertas em Tempo Real</p>
                          <p className="text-sm text-muted-foreground">Notificações push para eventos importantes</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium">Lembretes</p>
                          <p className="text-sm text-muted-foreground">Lembretes para tarefas e prazos financeiros</p>
                        </div>
                        <Switch defaultChecked />
                      </div>
                    </div>
                  </div>
                  
                  <Button className="button-animated">Salvar Preferências</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default Account;
