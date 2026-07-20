import Container from "../../ui/Container/Container";
import SectionHeading from "../../ui/SectionHeading/SectionHeading";
import Button from "../../ui/Button/Button";
import { services } from "../../../data/services";
import {
  Cta,
  ServiceBody,
  ServiceCard,
  ServiceLink,
  ServiceMedia,
  ServicesGrid,
  ServicesSection,
} from "./styles";

export default function Services() {
  return (
    <ServicesSection id="servicos" className="section">
      <Container>
        <SectionHeading
          eyebrow="Serviços prestados"
          title="Projetos que transformam planejamento em empreendimentos viáveis."
          description="Conheça as principais frentes da Prana Infra. Cada solução é desenvolvida para reduzir riscos, otimizar custos e dar mais clareza à execução."
        />

        <ServicesGrid>
          {services.map((service) => (
            <ServiceCard key={service.slug}>
              <ServiceMedia>
                <img
                  src={service.image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </ServiceMedia>

              <ServiceBody>
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>

                <ServiceLink
                  href={`https://wa.me/553291982940?text=${encodeURIComponent(
                    `Olá, gostaria de conversar sobre ${service.title}.`,
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Conversar sobre este serviço
                </ServiceLink>
              </ServiceBody>
            </ServiceCard>
          ))}
        </ServicesGrid>

        <Cta>
          <p>Tem um novo empreendimento em estudo?</p>

          <Button
            href="https://wa.me/553291982940"
            target="_blank"
            rel="noreferrer"
          >
            Solicite um orçamento
          </Button>
        </Cta>
      </Container>
    </ServicesSection>
  );
}
