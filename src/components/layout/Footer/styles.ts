import styled from 'styled-components'
import Container from '../../ui/Container/Container'

export const FooterWrapper = styled.footer`
  position: relative;
  padding-block: 2.4rem 1.25rem;
  background:
    radial-gradient(circle at top left, rgba(212, 166, 41, .16), transparent 30%),
    linear-gradient(180deg, #efe6d9 0%, #e6d8c7 100%);
  border-top: 1px solid rgba(168, 38, 17, .14);
  color: var(--c-red);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, .18) 50%, transparent 100%);
    pointer-events: none;
  }
`

export const FooterGrid = styled(Container)`
  display: grid;
  gap: 1.4rem;
  position: relative;
  z-index: 1;
  font-size: .85rem;
  letter-spacing: .01em;

  strong {
    display: block;
    margin-bottom: .7rem;
    color: var(--c-red-deep);
    font-size: .72rem;
    letter-spacing: .16em;
    text-transform: uppercase;
  }

  @media (min-width: 720px) {
    grid-template-columns: 1.4fr .8fr .8fr 1fr;
    align-items: start;
  }
`

export const Brand = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 30ch;

  img {
    width: clamp(110px, 12vw, 150px);
    height: auto;
  }

  p {
    color: #705044;
    line-height: 1.6;
  }
`

export const Section = styled.div`
  display: grid;
  gap: .45rem;

  a,
  p {
    color: #6e4d42;
    line-height: 1.5;
  }

  a {
    width: fit-content;
    transition: color .2s ease;
  }

  a:hover {
    color: var(--c-red);
  }
`

export const Links = styled.div`
  display: grid;
  gap: .35rem;
`

export const FooterBottom = styled.div`
  grid-column: 1 / -1;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: .8rem;
  padding-top: 1rem;
  padding-bottom: 4.6rem;
  border-top: 1px solid rgba(168, 38, 17, .12);

  @media (min-width: 768px) {
    padding-bottom: 0;
  }

  a {
    color: #705044;
  }
`

export const Copyright = styled.p`
  opacity: .7;
`
