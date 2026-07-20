import styled from 'styled-components'
import Container from '../../ui/Container/Container'

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
  background: rgba(255, 255, 255, .64);
  border: 1px solid rgba(168, 38, 17, .1);
  border-radius: 12px;
  transition: transform .2s ease, box-shadow .2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 24px rgba(65, 38, 26, .16);
  }

  img {
    max-width: 130px;
    max-height: 60px;
    width: auto;
    height: auto;
    filter: saturate(.85);
    transition: filter .2s ease;
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

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(255, 255, 255, .34);
    border-radius: inherit;
    pointer-events: none;
  }

  img {
    width: 100%;
  }
`
