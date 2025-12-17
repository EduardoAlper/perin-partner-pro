import { Warehouse, Store, Building2, Compass } from "lucide-react";

const segments = [
  {
    icon: Warehouse,
    title: "Distribuidores e Atacadistas",
    description: "Compras em grande volume com tabelas especiais e prazos diferenciados",
  },
  {
    icon: Store,
    title: "Lojas de Materiais de Construção",
    description: "Produtos que aumentam giro e agregam valor ao mix da loja",
  },
  {
    icon: Building2,
    title: "Construtoras e Incorporadoras",
    description: "Fornecimento direto para obras com qualidade garantida",
  },
  {
    icon: Compass,
    title: "Arquitetos e Especificadores",
    description: "Produtos especificáveis com suporte técnico completo",
  },
];

const SegmentsSection = () => {
  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Para Quem Vendemos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Nossos Segmentos de Atuação B2B
          </h2>
          <p className="text-lg text-muted-foreground">
            Atendemos diversos segmentos com soluções personalizadas
          </p>
        </div>

        {/* Segments Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <div
              key={segment.title}
              className="bg-card rounded-xl p-8 text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <segment.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {segment.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {segment.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SegmentsSection;
