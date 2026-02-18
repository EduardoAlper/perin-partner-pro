import { Instagram, Facebook, Youtube, Linkedin, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo-perin.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Logo & Info */}
          <div>
            <img src={logo} alt="Perin Plásticos" className="h-14 mb-4 brightness-0 invert" />
            <p className="text-primary-foreground/70 mb-6 leading-relaxed">
              Fabricante de produtos PVC para construção civil desde 1999. 
              Forros, divisórias, perfis ripados e acabamentos com qualidade premium.
            </p>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <p className="text-sm">
                Rodovia Contorno Leste BR 116, nº 5318 - Quississana, 
                São José dos Pinhais/PR
              </p>
            </div>
          </div>

          {/* Column 2: Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <a href="https://perinplasticos.com.br/forros-da-linha-prime/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Forros Linha Prime
                </a>
              </li>
              <li>
                <a href="https://perinplasticos.com.br/perfis-ripados/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Perfis Ripados
                </a>
              </li>
              <li>
                <a href="https://perinplasticos.com.br/divisorias-em-pvc/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Divisórias em PVC
                </a>
              </li>
              <li>
                <a href="https://perinplasticos.com.br/historia/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Sobre a Perin Plásticos
                </a>
              </li>
              <li>
                <a href="https://perinplasticos.com.br/contato/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6">Redes Sociais</h4>
            <div className="flex gap-4 mb-8">
              <a
                href="https://www.instagram.com/perinplasticos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.facebook.com/perinplasticos/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@perinplasticos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/perin-plasticos"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-start gap-3 text-primary-foreground/70">
              <Clock className="w-5 h-5 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-primary-foreground">Atendimento B2B</p>
                <p className="text-sm">Segunda a Sexta, 7h30 às 17h30</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Perin Plásticos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;