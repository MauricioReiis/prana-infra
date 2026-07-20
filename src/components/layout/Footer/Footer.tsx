import logo from "../../../assets/logos/prana-infra.webp";
import {
  Brand,
  Copyright,
  FooterBottom,
  FooterGrid,
  FooterWrapper,
  Links,
  Section,
} from "./styles";

const whatsapp =
  "https://wa.me/553291982940?text=Olá%2C%20vim%20pelo%20site%20da%20Prana%20Infra%20e%20gostaria%20de%20falar%20com%20a%20equipe.";

export default function Footer() {
  return (
    <FooterWrapper>
      <FooterGrid>
        <Brand>
          <a href="#inicio" aria-label="Prana Infra - início">
            <img src={logo} alt="Prana Infra" />
          </a>

          <p>
            Engenharia de precisão para loteamentos e condomínios, com foco em
            aprovação, compatibilização e execução mais segura.
          </p>
        </Brand>

        <Section>
          <strong>Navegação</strong>
          <Links>
            <a href="#servicos">Serviços</a>
            <a href="#atuacao">Atuação</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </Links>
        </Section>

        <Section>
          <strong>Contato</strong>
          <a href="mailto:romulo@pranainfra.com.br">romulo@pranainfra.com.br</a>
          <a href={whatsapp} target="_blank" rel="noreferrer">
            Falar no WhatsApp
          </a>
        </Section>

        <Section>
          <strong>Endereço</strong>
          <p>
            R. José Martins Silva, 215 | Sala 01
            <br />
            Cerâmica, Juiz de Fora - MG, 36080-370
          </p>
        </Section>

        <FooterBottom>
          <Copyright>© {new Date().getFullYear()} Prana Infra</Copyright>
          <a href="#inicio">Voltar ao topo</a>
        </FooterBottom>
      </FooterGrid>
    </FooterWrapper>
  );
}
