const stats = [
  { number: "26+", label: "Anos de Mercado" },
  { number: "Todo Brasil", label: "Cobertura Nacional" },
  { number: "3 Linhas", label: "De Produtos Premium" },
  { number: "100+", label: "Parceiros Ativos" },
];

const CredibilitySection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-accent mb-2">
                {stat.number}
              </p>
              <p className="text-muted-foreground font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Company Description */}
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Desde 1999
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
            Desde 1999, atendendo todo o mercado nacional
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            A Perin Plásticos é referência nacional em soluções em PVC para a construção civil. 
            Com fábrica própria em São José dos Pinhais (PR) e logística estruturada, 
            atendemos distribuidores, construtoras e lojistas em todo o Brasil, 
            garantindo qualidade, escala e agilidade nas entregas.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-card border border-border rounded-lg px-6 py-3 shadow-sm">
              <span className="text-sm font-semibold text-foreground">Fábrica Própria</span>
            </div>
            <div className="bg-card border border-border rounded-lg px-6 py-3 shadow-sm">
              <span className="text-sm font-semibold text-foreground">Parque Industrial Moderno</span>
            </div>
            <div className="bg-card border border-border rounded-lg px-6 py-3 shadow-sm">
              <span className="text-sm font-semibold text-foreground">Logística Nacional</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredibilitySection;