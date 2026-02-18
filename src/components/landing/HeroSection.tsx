import { Button } from "@/components/ui/button";
import { MessageCircle, Award, Factory, Truck } from "lucide-react";
import heroImage from "@/assets/hero-perin.jpg";
import logo from "@/assets/logo-perin.png";

const HeroSection = () => {
  const whatsappLink = "https://wa.me/5541984078829?text=Olá,%20gostaria%20de%20informações%20sobre%20representação%20Perin%20Plásticos";

  return (
    <section className="relative min-h-[90vh] bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 lg:py-28">
        {/* Logo */}
        <div className="mb-8 animate-fade-up">
          <img src={logo} alt="Perin Plásticos" className="h-16 md:h-20" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-primary-foreground space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 animate-fade-up">
              <Award className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium">26+ anos de mercado | Fábrica própria em São José dos Pinhais/PR</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-fade-up delay-100">
              Seja Representante Perin Plásticos:
              <span className="block text-accent mt-2">Produtos Premium em PVC</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl animate-fade-up delay-200">
              Fabrica desde 1999 | Logística Nacional | Tabelas B2B Competitivas | Suporte Completo de Vendas
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm text-primary-foreground/70 animate-fade-up delay-300">
              <div className="flex items-center gap-2">
                <Factory className="w-5 h-5 text-accent" />
                <span>Fábrica Própria</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-accent" />
                <span>Entrega Nacional</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-accent" />
                <span>26+ Anos de Mercado</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-400">
              <Button variant="cta" size="xl" asChild>
                <a href="#formulario">
                  Quero Ser Representante
                </a>
              </Button>
              <Button variant="cta-outline" size="xl" asChild>
                <a href="#formulario">
                  Sou Lojista/Revendedor
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-up delay-300">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroImage}
                alt="Ambiente corporativo com produtos Perin Plásticos - forros e divisórias em PVC"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-sm rounded-xl p-4 shadow-xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Vagas disponíveis</p>
                    <p className="text-lg font-bold text-primary">Representação por Região</p>
                  </div>
                  <div className="bg-emerald text-emerald-foreground px-3 py-1 rounded-full text-sm font-semibold">
                    Abertas
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white" fill="white" />
      </a>
    </section>
  );
};

export default HeroSection;