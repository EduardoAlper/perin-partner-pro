import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import technicalImage from "@/assets/technical-benefits.jpg";

const benefits = [
  "Não absorve umidade",
  "Resistente à corrosão",
  "Baixa manutenção",
  "Possibilidade de reutilização",
  "Imune à pragas",
  "Fácil limpeza",
  "Fácil instalação",
  "Anti-chamas",
  "Conforto térmico/acústico",
  "Sustentável e reciclável",
];

const TechnicalBenefitsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={technicalImage}
                alt="Produtos PVC Perin - diferenciais técnicos"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-xl p-6 shadow-xl hidden md:block">
              <p className="text-4xl font-extrabold">25+</p>
              <p className="text-sm text-primary-foreground/80">Anos de Qualidade</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Diferenciais Competitivos
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Produtos com Diferenciais Técnicos
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossos produtos em PVC oferecem vantagens únicas que facilitam a venda e garantem a satisfação do cliente final.
            </p>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-emerald/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-emerald" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button variant="section-cta" size="lg" asChild>
              <a href="#formulario">
                Receber Catálogo Técnico B2B
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalBenefitsSection;
