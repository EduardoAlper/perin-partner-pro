import { Button } from "@/components/ui/button";
import { MessageCircle, Phone, Mail } from "lucide-react";

const FinalCtaSection = () => {
  const whatsappLink = "https://wa.me/5541984078829?text=Olá,%20gostaria%20de%20informações%20sobre%20representação%20Perin%20Plásticos";

  return (
    <section className="py-20 lg:py-28 bg-gradient-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-foreground mb-4">
          Pronto para Ampliar Seus Negócios?
        </h2>
        <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
          Junte-se aos nossos parceiros de sucesso em todo Brasil
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button variant="cta" size="xl" asChild>
            <a href="#formulario">
              Quero Ser Representante
            </a>
          </Button>
          <Button variant="cta-outline" size="xl" asChild>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>

        {/* Contact Info */}
        <div className="flex flex-wrap justify-center gap-8 text-primary-foreground/80">
          <a href="tel:+554132828000" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Phone className="w-5 h-5" />
            <span>(41) 3282-8000</span>
          </a>
          <a href="https://wa.me/5541984078829" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-accent transition-colors">
            <MessageCircle className="w-5 h-5" />
            <span>(41) 98407-8829</span>
          </a>
          <a href="mailto:comercial@perinplasticos.com.br" className="flex items-center gap-2 hover:text-accent transition-colors">
            <Mail className="w-5 h-5" />
            <span>comercial@perinplasticos.com.br</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;