import Button from "../../ui/Button/Button";
import hero from "../../../assets/images/hero.webp";
import {
  Background,
  Copy,
  CtaRow,
  HeroContent,
  HeroSection,
  Lead,
  Overlay,
  Title,
} from "./styles";

const whatsapp =
  "https://wa.me/553291982940?text=Olá%2C%20vim%20pelo%20site%20da%20Prana%20Infra%20e%20gostaria%20de%20solicitar%20um%20orçamento.";

export default function Hero() {
  return (
    <HeroSection id="inicio">
      <Background src={hero} alt="" aria-hidden="true" fetchPriority="high" />
      <Overlay />

      <HeroContent>
        <Copy>
          <p className="eyebrow">Infraestrutura urbana para loteamentos</p>

          <Title>
            <span>Engenharia de precisão</span>
            <span>para loteamentos</span>
            <span>e condomínios.</span>
          </Title>

          <Lead>
            Projetamos para reduzir retrabalho, acelerar aprovações e aumentar a
            previsibilidade técnica da sua obra.
          </Lead>

          <CtaRow>
            <Button href={whatsapp} target="_blank" rel="noreferrer">
              Solicitar análise inicial
            </Button>
            <Button href="#servicos" variant="ghost">
              Ver serviços
            </Button>
          </CtaRow>
        </Copy>
      </HeroContent>
    </HeroSection>
  );
}
