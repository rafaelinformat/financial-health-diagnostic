
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, BookOpen, MessageSquare, FileText, ArrowRight } from 'lucide-react';

const HelpCenter = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Central de Ajuda</h1>
          <p className="text-muted-foreground">
            Encontre respostas para suas perguntas e obtenha suporte
          </p>
        </div>
        
        <div className="glass-card p-6 mt-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-center mb-4">Como podemos ajudar?</h2>
            <div className="flex gap-2">
              <Input 
                className="input-animated" 
                placeholder="Pesquisar por dúvidas ou tópicos..." 
                prefix={<Search className="text-muted-foreground" />}
              />
              <Button className="button-animated">Pesquisar</Button>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="faq" className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="faq" className="flex items-center">
              <BookOpen className="w-4 h-4 mr-2" />
              FAQ
            </TabsTrigger>
            <TabsTrigger value="support" className="flex items-center">
              <MessageSquare className="w-4 h-4 mr-2" />
              Suporte
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center">
              <FileText className="w-4 h-4 mr-2" />
              Recursos
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="faq" className="animate-fade-in">
            <div className="space-y-4">
              {[
                {
                  question: "Como posso interpretar o indicador de saúde financeira?",
                  answer: "O indicador de saúde financeira é uma pontuação de 0 a 100 que resume a condição financeira geral da sua empresa. Uma pontuação acima de 80 indica excelente saúde financeira, entre 60-80 é considerada boa, entre 40-60 é moderada e abaixo de 40 indica problemas financeiros que precisam de atenção urgente."
                },
                {
                  question: "Quais documentos são necessários para o diagnóstico financeiro?",
                  answer: "Para um diagnóstico financeiro completo, recomendamos que você forneça o balanço patrimonial, demonstrativo de resultados (DRE), fluxo de caixa dos últimos 12 meses, e informações sobre dívidas e financiamentos. Quanto mais informações você fornecer, mais preciso será o diagnóstico."
                },
                {
                  question: "Com que frequência devo fazer um diagnóstico de saúde financeira?",
                  answer: "Recomendamos realizar um diagnóstico completo trimestralmente, mas o monitoramento dos principais indicadores deve ser feito mensalmente. Empresas em processo de reestruturação financeira podem precisar de acompanhamento mais frequente."
                },
                {
                  question: "Como posso melhorar minha pontuação de saúde financeira?",
                  answer: "A melhoria da pontuação envolve trabalhar nas áreas identificadas no diagnóstico. Geralmente, isso inclui otimizar o fluxo de caixa, reduzir dívidas de alto custo, melhorar margens de lucro, e estabelecer reservas financeiras adequadas. O plano de tratamento financeiro fornecerá ações específicas para o seu caso."
                },
                {
                  question: "Posso exportar os relatórios para apresentar aos stakeholders?",
                  answer: "Sim, todos os relatórios podem ser exportados em formato PDF ou Excel. Além disso, você pode gerar um relatório executivo resumido especificamente projetado para apresentações a investidores, diretores ou outros stakeholders."
                }
              ].map((item, index) => (
                <Card key={index} className="card-animated">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="support" className="animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="card-animated">
                <CardHeader>
                  <CardTitle>Chat ao Vivo</CardTitle>
                  <CardDescription>Fale com um especialista agora mesmo</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Nossa equipe de suporte está disponível para ajudar você com qualquer dúvida ou problema técnico.
                  </p>
                  <Button className="w-full button-animated">Iniciar Chat</Button>
                </CardContent>
              </Card>
              
              <Card className="card-animated">
                <CardHeader>
                  <CardTitle>Enviar Ticket</CardTitle>
                  <CardDescription>Obtenha ajuda para problemas complexos</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Para questões mais complexas, crie um ticket e nossa equipe responderá em até 24 horas.
                  </p>
                  <Button className="w-full button-animated">Criar Ticket</Button>
                </CardContent>
              </Card>
              
              <Card className="card-animated md:col-span-2">
                <CardHeader>
                  <CardTitle>Consultoria Especializada</CardTitle>
                  <CardDescription>Agende uma sessão com um consultor financeiro</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Para orientação financeira personalizada, agende uma consulta com um de nossos especialistas em finanças empresariais.
                  </p>
                  <Button className="button-animated">Agendar Consulta</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="resources" className="animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Materiais Educativos</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    title: "Guia de Indicadores Financeiros",
                    description: "Aprenda a interpretar e utilizar os principais indicadores financeiros",
                    type: "E-book"
                  },
                  {
                    title: "Gestão de Fluxo de Caixa",
                    description: "Técnicas para otimizar e controlar o fluxo de caixa da sua empresa",
                    type: "Webinar"
                  },
                  {
                    title: "Planejamento Financeiro para PMEs",
                    description: "Estratégias de planejamento financeiro para pequenas e médias empresas",
                    type: "Curso"
                  },
                  {
                    title: "Redução de Custos Operacionais",
                    description: "Métodos práticos para identificar e reduzir custos sem perder qualidade",
                    type: "E-book"
                  },
                  {
                    title: "Análise de Investimentos",
                    description: "Como avaliar e priorizar oportunidades de investimento para sua empresa",
                    type: "Webinar"
                  },
                  {
                    title: "Gestão de Endividamento",
                    description: "Estratégias para controlar e reduzir dívidas empresariais",
                    type: "Curso"
                  }
                ].map((item, index) => (
                  <Card key={index} className="card-animated">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <div className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium">
                          {item.type}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4 text-sm">{item.description}</p>
                      <Button variant="outline" className="w-full justify-between button-animated">
                        Acessar <ArrowRight className="w-4 h-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default HelpCenter;
