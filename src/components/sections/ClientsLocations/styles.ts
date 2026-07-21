import styled from 'styled-components'
import Container from '../../ui/Container/Container'

const logoCardBackground = 'white'
const idealizaDominantBackground = '#00415d'
const tamboreDominantBackground = '#733f11'

export const Section = styled.section`
  padding-top: 1rem;
  background: linear-gradient(180deg, rgba(255, 250, 241, .45) 0%, rgba(255, 250, 241, 0) 100%);
`

export const Layout = styled(Container)`
  display: grid;
  gap: 4rem;

  @media (min-width: 980px) {
    grid-template-columns: 1fr 1fr;
    gap: 5rem;
  }
`

export const Logos = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: .8rem;

  @media (min-width: 700px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

export const LogoBox = styled.div`
  min-height: 92px;
  display: grid;
  place-items: center;
  padding: 1rem;
  background: ${logoCardBackground};
  border: 1px solid rgba(168, 38, 17, .1);
  border-radius: 12px;
  transition: transform .2s ease, box-shadow .2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(65, 38, 26, .16);
  }

  &.logo-box-black {
    background: black;
  }

  &.logo-box-idealiza {
    background-color: ${idealizaDominantBackground};
  }

  &.logo-box-idealiza:hover {
    background-color: ${idealizaDominantBackground};
  }

  &.logo-box-tambore {
    background-color: ${tamboreDominantBackground};
  }

  &.logo-box-tambore:hover {
    background-color: ${tamboreDominantBackground};
  }

  &.logo-box-idealiza img,
  &.logo-box-tambore img {
    filter: none;
  }

  &.logo-box-idealiza:hover img,
  &.logo-box-tambore:hover img {
    filter: none;
  }

  img {
    max-width: 130px;
    max-height: 60px;
    width: auto;
    height: auto;
    filter: saturate(.85);
    transition: filter .2s ease;
  }

  img.logo-pandora {
    max-width: 160px;
    max-height: 72px;
    filter: saturate(1) contrast(1.08);
  }

  &:hover img {
    filter: saturate(1);
  }
`

export const Locations = styled.div`
  display: grid;
  align-content: start;
  gap: 2.2rem;

  @media (min-width: 980px) {
    padding-left: 4rem;
    border-left: 1px solid rgba(168, 38, 17, .18);
  }
`

export const MapWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: var(--radius);
  border: 1px solid rgba(168, 38, 17, .12);
  box-shadow: var(--shadow-card);
  transition: transform .3s ease, box-shadow .3s ease, border-color .3s ease;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(circle at 12% 10%, rgba(255, 255, 255, .14), transparent 48%);
    opacity: .55;
    pointer-events: none;
    transition: opacity .3s ease;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 255, 255, .34);
    border-radius: inherit;
    pointer-events: none;
    z-index: 2;
  }

  img {
    width: 100%;
    transition: transform .45s ease, filter .45s ease;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-3px);
      border-color: rgba(168, 38, 17, .26);
      box-shadow: 0 24px 38px rgba(62, 35, 20, .18);
    }

    &:hover::before {
      opacity: .35;
    }

    &:hover img {
      transform: scale(1.02);
      filter: saturate(1.04) contrast(1.03);
    }
  }
`
