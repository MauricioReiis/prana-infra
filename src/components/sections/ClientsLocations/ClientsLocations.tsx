import SectionHeading from '../../ui/SectionHeading/SectionHeading'
import { clients } from '../../../data/clients'
import map from '../../../assets/images/project-map.webp'
import {
  Layout,
  Locations,
  LogoBox,
  Logos,
  MapWrapper,
  Section,
} from './styles'

export default function ClientsLocations() {
  return (
    <Section id="atuacao" className="section">
      <Layout>
        <div>
          <SectionHeading
            eyebrow="Confiança"
            title="Atendemos grandes nomes do mercado."
          />

          <Logos>
            {clients.map(([name, src]) => (
              <LogoBox key={name}>
                <img
                  src={src}
                  alt={name}
                  loading="lazy"
                  decoding="async"
                />
              </LogoBox>
            ))}
          </Logos>
        </div>

        <Locations>
          <SectionHeading
            eyebrow="Presença"
            title="Onde já realizamos projetos."
            description="Experiência aplicada em diferentes regiões e contextos de infraestrutura urbana."
          />

          <MapWrapper>
            <img
              src={map}
              alt="Mapa do Brasil destacando regiões com projetos realizados pela Prana Infra"
              loading="lazy"
              decoding="async"
            />
          </MapWrapper>
        </Locations>
      </Layout>
    </Section>
  )
}
