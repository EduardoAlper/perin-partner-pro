import { MapPin, Package, Calendar, Truck, FileText, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: MapPin,
    title: "Território Exclusivo",
    description: "Atue com exclusividade na sua região sem concorrência interna",
  },
  {
    icon: Package,
    title: "Linha Completa",
    description: "Forros, perfis ripados, divisórias e acabamentos em PVC",
  },
  {
    icon: Calendar,
    title: "Desde 1999",
    description: "Fábrica sólida com parque industrial próprio e credibilidade no mercado",
  },
  {
    icon: Truck,
    title: "Logística Nacional",
    description: "Entregas rápidas para todo Brasil com SLA competitivo",
  },
  {
    icon: FileText,
    title: "Materiais de Marketing",
    description: "Catálogos, amostras, apresentações e suporte técnico completo",
  },
  {
    icon: TrendingUp,
    title: "Margem Atrativa",
    description: "Tabelas B2B com condições comerciais diferenciadas",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Por que representar a Perin?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Vantagens Exclusivas para Nossos Parceiros Comerciais
          </h2>
          <p className="text-lg text-muted-foreground">
            Junte-se a uma rede de parceiros que cresce junto com a Perin há mais de 25 anos
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="benefit-card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                <benefit.icon className="w-7 h-7 text-accent" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
