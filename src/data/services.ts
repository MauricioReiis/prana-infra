import type { Service } from '../types'
import terraplenagem from '../assets/images/service-terraplenagem.webp'
import drenagem from '../assets/images/service-drenagem.webp'
import bim from '../assets/images/service-bim.webp'

export const services: Service[] = [
  {
    slug: 'terraplenagem',
    title: 'Projetos de Terraplenagem',
    description: 'Soluções técnicas para equilibrar movimentação de terra, custo executivo e aproveitamento do empreendimento.',
    image: terraplenagem,
    bullets: ['Modelagem do terreno', 'Cálculo de corte e aterro', 'Otimização de volumes'],
  },
  {
    slug: 'drenagem',
    title: 'Projetos de Drenagem',
    description: 'Dimensionamento seguro e eficiente de sistemas de drenagem para loteamentos, condomínios e áreas urbanizadas.',
    image: drenagem,
    bullets: ['Redes e dispositivos', 'Dimensionamento hidráulico', 'Compatibilização com o projeto'],
  },
  {
    slug: 'compatibilizacao-bim',
    title: 'Compatibilização de Projetos em BIM',
    description: 'Integração multidisciplinar para antecipar conflitos, reduzir retrabalho e apoiar decisões antes da obra.',
    image: bim,
    bullets: ['Detecção de interferências', 'Coordenação multidisciplinar', 'Maior previsibilidade'],
  },
]
