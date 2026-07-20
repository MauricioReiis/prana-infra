import Container from '../../ui/Container/Container'
import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import portrait from '../../../assets/images/romulo.webp'
import {
  AboutSection,
  Bio,
  Content,
  Layout,
  Portrait,
  Stats,
} from './styles'

export default function About() {
  return (
    <AboutSection id="sobre" className="section">
      <Container>
        <SectionHeading
          eyebrow="Quem está por trás"
          title="Experiência técnica com visão de negócio."
        />

        <Layout>
          <Portrait>
            <img
              src={portrait}
              alt="Rômulo Henrique, proprietário da Prana Infra"
              loading="lazy"
              decoding="async"
            />
          </Portrait>

          <Content>
            <Stats>
              <div>
                <strong>10+</strong>
                <span>anos de experiência</span>
              </div>
              <div>
                <strong>200+</strong>
                <span>projetos com participação</span>
              </div>
              <div>
                <strong>BIM</strong>
                <span>gestão e compatibilização</span>
              </div>
            </Stats>

            <Bio>
              <h3>Rômulo Henrique</h3>
              <p>
                Proprietário da Prana Infra e responsável pela condução técnica
                da equipe. Engenheiro civil com MBA em gestão de projetos e
                atuação como BIM Manager, construiu sua experiência em
                infraestrutura urbana passando pela obra, topografia,
                terraplenagem e drenagem.
              </p>
              <p>
                Essa vivência de ponta a ponta orienta uma abordagem prática:
                projetar com precisão, antecipar conflitos e ajudar o
                empreendimento a chegar à execução com mais segurança e
                previsibilidade.
              </p>
            </Bio>
          </Content>
        </Layout>
      </Container>
    </AboutSection>
  )
}
