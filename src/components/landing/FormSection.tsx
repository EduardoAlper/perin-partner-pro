import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, CheckCircle } from "lucide-react";

const states = [
  "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
  "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
  "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

const partnershipTypes = [
  "Representante Comercial",
  "Distribuidor/Atacadista",
  "Loja de Materiais de Construção",
  "Depósito/Armazém",
  "Outro",
];

const experienceLevels = [
  { value: "active", label: "Sim, tenho carteira ativa" },
  { value: "starting", label: "Sim, mas estou iniciando" },
  { value: "new", label: "Não, quero começar agora" },
];

const revenueRanges = [
  "Até R$ 50k",
  "R$ 50k - R$ 200k",
  "R$ 200k - R$ 500k",
  "Acima de R$ 500k",
];

const FormSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cnpj: "",
    partnershipType: "",
    state: "",
    city: "",
    experience: "",
    revenue: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, "");
    if (numbers.length <= 2) return `(${numbers}`;
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.phone || !formData.partnershipType || !formData.state || !formData.city || !formData.experience) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha todos os campos obrigatórios.",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "E-mail inválido",
        description: "Por favor, insira um e-mail válido.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Solicitação enviada!",
      description: "Nossa equipe entrará em contato em até 24h úteis.",
    });
  };

  if (isSubmitted) {
    return (
      <section id="formulario" className="py-20 lg:py-28 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-emerald/20 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-emerald" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
              Solicitação Enviada com Sucesso!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa equipe comercial entrará em contato em até 24 horas úteis para dar continuidade à sua solicitação.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
            >
              Enviar Nova Solicitação
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="formulario" className="py-20 lg:py-28 section-gradient">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-wider mb-4">
            Faça Parte do Time
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Solicite Sua Proposta Comercial B2B
          </h2>
          <p className="text-lg text-muted-foreground">
            Preencha o formulário e nossa equipe entrará em contato em até 24h úteis
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-xl p-8 md:p-10 border border-border">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Seu nome"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                  E-mail corporativo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="email@empresa.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                  Telefone/WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="form-input"
                  placeholder="(00) 00000-0000"
                  maxLength={15}
                  required
                />
              </div>

              {/* CNPJ */}
              <div>
                <label htmlFor="cnpj" className="block text-sm font-semibold text-foreground mb-2">
                  CNPJ <span className="text-muted-foreground font-normal">(opcional)</span>
                </label>
                <input
                  type="text"
                  id="cnpj"
                  name="cnpj"
                  value={formData.cnpj}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="00.000.000/0000-00"
                />
              </div>

              {/* Partnership Type */}
              <div>
                <label htmlFor="partnershipType" className="block text-sm font-semibold text-foreground mb-2">
                  Tipo de parceria *
                </label>
                <select
                  id="partnershipType"
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleChange}
                  className="form-input bg-card"
                  required
                >
                  <option value="">Selecione...</option>
                  {partnershipTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* State */}
              <div>
                <label htmlFor="state" className="block text-sm font-semibold text-foreground mb-2">
                  Estado de atuação *
                </label>
                <select
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="form-input bg-card"
                  required
                >
                  <option value="">Selecione...</option>
                  {states.map(state => (
                    <option key={state} value={state}>{state}</option>
                  ))}
                </select>
              </div>

              {/* City */}
              <div>
                <label htmlFor="city" className="block text-sm font-semibold text-foreground mb-2">
                  Cidade principal de atuação *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="Sua cidade"
                  required
                />
              </div>

              {/* Revenue */}
              <div>
                <label htmlFor="revenue" className="block text-sm font-semibold text-foreground mb-2">
                  Faturamento médio mensal <span className="text-muted-foreground font-normal">(opcional)</span>
                </label>
                <select
                  id="revenue"
                  name="revenue"
                  value={formData.revenue}
                  onChange={handleChange}
                  className="form-input bg-card"
                >
                  <option value="">Selecione...</option>
                  {revenueRanges.map(range => (
                    <option key={range} value={range}>{range}</option>
                  ))}
                </select>
              </div>

              {/* Experience */}
              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Já trabalha com linhas de construção? *
                </label>
                <div className="flex flex-wrap gap-4">
                  {experienceLevels.map(level => (
                    <label key={level.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="experience"
                        value={level.value}
                        checked={formData.experience === level.value}
                        onChange={handleChange}
                        className="w-4 h-4 text-primary border-border focus:ring-primary"
                        required
                      />
                      <span className="text-sm text-foreground">{level.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Mensagem/Observações <span className="text-muted-foreground font-normal">(opcional)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input min-h-[120px] resize-y"
                  placeholder="Conte-nos mais sobre sua empresa ou suas expectativas..."
                />
              </div>
            </div>

            {/* Submit */}
            <div className="mt-8">
              <Button
                type="submit"
                variant="cta"
                size="xl"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin mr-2">⏳</span>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Solicitação
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground mt-4">
                Ao enviar, você concorda com nossa Política de Privacidade. 
                Usaremos seus dados apenas para contato comercial.
              </p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default FormSection;
