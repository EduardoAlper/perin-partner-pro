import { ClipboardList, Search, Handshake, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Preencha o Formulário",
    description: "Informe seus dados, região de atuação e experiência no setor",
  },
  {
    number: "02",
    icon: Search,
    title: "Análise Comercial",
    description: "Nossa equipe analisa o perfil e verifica disponibilidade territorial",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Reunião de Alinhamento",
    description: "Apresentação de tabelas, condições e materiais de apoio",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Comece a Vender",
    description: "Receba kit do representante e inicie vendas com suporte total",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            4 Passos para Começar a Representar
          </h2>
          <p className="text-lg text-muted-foreground">
            Um processo simples e transparente para você iniciar sua parceria
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-16 left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-border" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative text-center"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Step Number & Icon */}
                <div className="relative inline-flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-card shadow-lg flex items-center justify-center mb-6 relative z-10 border-4 border-background">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
