import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const MapSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
              Regiões Disponíveis
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
              Regiões Disponíveis para Representação
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Consulte disponibilidade de território exclusivo na sua região. Garantimos exclusividade territorial para nossos representantes.
            </p>
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-6 mb-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-foreground mb-1">Vagas limitadas por estado</p>
                  <p className="text-muted-foreground text-sm">
                    Garantimos exclusividade territorial. Não trabalhamos com sobreposição de representantes na mesma região.
                  </p>
                </div>
              </div>
            </div>
            <Button variant="section-cta" size="lg" asChild>
              <a href="#formulario">
                Verificar Disponibilidade
              </a>
            </Button>
          </div>

          {/* Map Illustration */}
          <div className="relative">
            <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 border border-border">
              {/* Simplified Brazil Map SVG */}
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto max-h-[400px]"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="500" height="500" fill="transparent" />
                
                {/* Brazil simplified shape */}
                <path
                  d="M180 80 L320 60 L380 100 L420 150 L440 220 L430 300 L400 360 L350 400 L280 440 L200 430 L140 380 L100 320 L80 250 L90 180 L120 120 L180 80Z"
                  fill="hsl(var(--primary))"
                  fillOpacity="0.1"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                />
                
                {/* State divisions (simplified) */}
                <path d="M280 150 L320 200 L280 250 L240 200 Z" fill="hsl(var(--emerald))" fillOpacity="0.3" stroke="hsl(var(--emerald))" strokeWidth="1" />
                <path d="M200 200 L240 200 L240 260 L200 260 Z" fill="hsl(var(--accent))" fillOpacity="0.3" stroke="hsl(var(--accent))" strokeWidth="1" />
                <path d="M320 200 L360 220 L340 280 L300 260 Z" fill="hsl(var(--emerald))" fillOpacity="0.3" stroke="hsl(var(--emerald))" strokeWidth="1" />
                <path d="M240 260 L300 260 L300 320 L240 320 Z" fill="hsl(var(--accent))" fillOpacity="0.3" stroke="hsl(var(--accent))" strokeWidth="1" />
                <path d="M180 300 L240 300 L240 360 L180 360 Z" fill="hsl(var(--emerald))" fillOpacity="0.3" stroke="hsl(var(--emerald))" strokeWidth="1" />
                <path d="M300 300 L340 280 L360 340 L320 360 Z" fill="hsl(var(--primary))" fillOpacity="0.2" stroke="hsl(var(--primary))" strokeWidth="1" />
                
                {/* Location markers */}
                <circle cx="260" cy="340" r="8" fill="hsl(var(--accent))" />
                <circle cx="260" cy="340" r="12" fill="hsl(var(--accent))" fillOpacity="0.3" />
                <text x="275" y="345" fill="hsl(var(--foreground))" fontSize="12" fontWeight="600">PR - Sede</text>
                
                <circle cx="300" cy="290" r="6" fill="hsl(var(--emerald))" />
                <circle cx="220" cy="230" r="6" fill="hsl(var(--emerald))" />
                <circle cx="340" cy="240" r="6" fill="hsl(var(--emerald))" />
              </svg>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-emerald/50 border border-emerald" />
                  <span className="text-sm text-muted-foreground">Disponível</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-accent/50 border border-accent" />
                  <span className="text-sm text-muted-foreground">Parceria Ativa</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-primary/20 border border-primary" />
                  <span className="text-sm text-muted-foreground">Em Negociação</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MapSection;
