import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Qual o investimento inicial para ser representante?",
    answer: "Não há investimento inicial ou taxa de representação. Trabalhamos com modelo de comissionamento sobre vendas.",
  },
  {
    question: "Como funciona o território exclusivo?",
    answer: "Garantimos exclusividade por cidade ou região, dependendo do porte do mercado. Não trabalhamos com sobreposição de representantes.",
  },
  {
    question: "Qual o prazo médio de entrega?",
    answer: "Temos estoque permanente e logística estruturada. Prazo médio de 5-10 dias úteis para todo Brasil, dependendo da região.",
  },
  {
    question: "Fornecem materiais de vendas?",
    answer: "Sim! Kit completo com catálogos físicos, apresentações digitais, amostras de produtos e tabelas comerciais atualizadas.",
  },
  {
    question: "Qual o ticket médio de pedido?",
    answer: "Varia conforme o segmento. Distribuidores trabalham com volumes maiores (R$ 10k+), enquanto lojas menores iniciam com R$ 2-5k.",
  },
  {
    question: "Oferecem suporte técnico?",
    answer: "Sim, nossa equipe dá suporte completo para especificação, instalação e pós-venda.",
  },
  {
    question: "Qual a política de troca e devolução?",
    answer: "Temos política clara de garantia. Defeitos de fabricação são trocados sem custo.",
  },
  {
    question: "Posso representar se já trabalho com outras linhas?",
    answer: "Sim! Muitos parceiros representam múltiplas linhas complementares. O importante é foco em B2B.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Perguntas e Respostas
          </h2>
          <p className="text-lg text-muted-foreground">
            Tire suas principais dúvidas sobre nossa parceria comercial
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
