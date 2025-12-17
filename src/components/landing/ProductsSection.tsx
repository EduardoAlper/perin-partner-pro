import { Button } from "@/components/ui/button";
import forroImage from "@/assets/produto-forro.jpg";
import ripadoImage from "@/assets/produto-ripado.jpg";
import divisoriaImage from "@/assets/produto-divisoria.jpg";
import acabamentoImage from "@/assets/produto-acabamento.jpg";

const products = [
  {
    title: "Forros Linha Easy & Prime",
    description: "Diversas texturas e acabamentos premium | Comprimentos de 4 a 8m | Impermeável e anti-chamas",
    image: forroImage,
    badge: "Produto mais vendido",
    badgeType: "popular",
  },
  {
    title: "Perfis Ripados",
    description: "Design contemporâneo para ambientes modernos | Fácil instalação | Alta resistência",
    image: ripadoImage,
    badge: "Alta margem",
    badgeType: "margin",
  },
  {
    title: "Divisórias em PVC",
    description: "Solução corporativa e residencial | Isolamento térmico/acústico | Reutilizável",
    image: divisoriaImage,
    badge: "Solução B2B",
    badgeType: "popular",
  },
  {
    title: "Acabamentos",
    description: "Complementos para instalação profissional | Linha completa de acessórios",
    image: acabamentoImage,
    badge: null,
    badgeType: null,
  },
];

const ProductsSection = () => {
  return (
    <section className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Portfólio de Produtos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Linha Completa de Produtos PVC para Revenda
          </h2>
          <p className="text-lg text-muted-foreground">
            Produtos de alta qualidade com excelente giro e margem atrativa
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.title}
              className="product-card group h-[350px]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Badge */}
              {product.badge && (
                <span className={product.badgeType === "margin" ? "badge-margin" : "badge-popular"}>
                  {product.badge}
                </span>
              )}

              {/* Image */}
              <img
                src={product.image}
                alt={product.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500"
              />

              {/* Content */}
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-primary-foreground mb-2">
                  {product.title}
                </h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="section-cta" size="lg" asChild>
            <a href="#formulario">
              Receber Catálogo Técnico B2B
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
