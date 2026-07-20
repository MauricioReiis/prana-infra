import logo from "../../../assets/logos/prana-infra.png";
import { HeaderInner, HeaderWrapper, Logo, Navigation } from "./styles";

const whatsappNav =
  "https://wa.me/553291982940?text=Olá%2C%20vim%20pelo%20site%20da%20Prana%20Infra%20e%20gostaria%20de%20falar%20com%20a%20equipe.";

export default function Header() {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <a href="#inicio" aria-label="Prana Infra - início">
          <Logo src={logo} alt="Prana Infra" />
        </a>

        <Navigation aria-label="Navegação principal">
          <div className="meta" aria-label="Resumo de experiência">
            <span>200+ projetos</span>
            <span>10+ anos</span>
          </div>

          <div className="links">
            <a href="#servicos">Serviços</a>
            <a href="#atuacao">Atuação</a>
            <a href="#sobre">Sobre</a>
            <a href="#contato">Contato</a>
          </div>

          <a
            className="contact"
            href={whatsappNav}
            target="_blank"
            rel="noreferrer"
          >
            Falar no WhatsApp
          </a>
        </Navigation>
      </HeaderInner>
    </HeaderWrapper>
  );
}
