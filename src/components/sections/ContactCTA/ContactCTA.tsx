import Button from "../../ui/Button/Button";
import pattern from "../../../assets/images/topography-pattern.webp";
import { Content, Pattern, Section, Tint } from "./styles";

export default function ContactCTA() {
  return (
    <Section id="contato">
      <Pattern src={pattern} alt="" aria-hidden="true" loading="lazy" />
      <Tint />

      <Content>
        <p className="eyebrow">Próximo passo</p>

        <h2>
          Vamos juntos desenvolver
          <br />
          seu próximo empreendimento
          <br />
          de sucesso?
        </h2>

        <p>
          Conte um pouco sobre o projeto e fale diretamente com a Prana Infra.
        </p>

        <Button
          href="https://wa.me/553291982940?text=Olá%2C%20quero%20conversar%20sobre%20um%20novo%20empreendimento."
          target="_blank"
          rel="noreferrer"
        >
          Conversar pelo WhatsApp
        </Button>
      </Content>
    </Section>
  );
}
