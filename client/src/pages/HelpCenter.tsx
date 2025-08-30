
import React from 'react';
import DashboardLayout from '@/components/DashboardLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { SearchIcon } from 'lucide-react';

const HelpCenter = () => {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Central de Ajuda</h1>
          <p className="text-muted-foreground">
            Encontre respostas para suas dúvidas sobre gestão financeira
          </p>
        </div>
        
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-400" />
          </div>
          <Input
            type="search"
            placeholder="Pesquisar tópicos de ajuda..."
            className="pl-10 w-full md:max-w-md"
          />
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Converting the element to string */}
          {["Primeiros Passos", "Importação de Dados", "Análise Financeira", "Indicadores", "Relatórios", "Configurações"].map((topic, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow cursor-pointer">
              <CardHeader>
                <CardTitle>{topic}</CardTitle>
                <CardDescription>
                  Guias e tutoriais para ajudar você a utilizar esta seção.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  5 artigos nesta categoria
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div>
          <h2 className="text-xl font-semibold mb-4">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                question: "Como importar meus dados financeiros?",
                answer: "Você pode importar seus dados a partir de arquivos CSV, Excel ou conectar diretamente com seu sistema contábil através de nossa API."
              },
              {
                question: "Como interpretar o diagnóstico de saúde financeira?",
                answer: "O diagnóstico é baseado em análises de múltiplos indicadores e comparado com benchmarks do seu setor para fornecer uma visão clara da situação atual."
              },
              {
                question: "Posso compartilhar os relatórios com minha equipe?",
                answer: "Sim, você pode compartilhar relatórios diretamente pelo sistema ou exportá-los em diversos formatos como PDF, Excel ou apresentações."
              },
            ].map((faq, index) => (
              <Card key={index} className="p-4">
                <h3 className="font-medium text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
        
        <Card className="p-6">
          <div className="text-center space-y-4">
            <h2 className="text-xl font-semibold">Ainda precisa de ajuda?</h2>
            <p className="text-muted-foreground">
              Nossa equipe de suporte está disponível para ajudar com qualquer dúvida que você tenha.
            </p>
            <Button>Contatar Suporte</Button>
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default HelpCenter;
