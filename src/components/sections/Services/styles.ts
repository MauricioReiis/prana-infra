import styled from 'styled-components'

export const ServicesSection = styled.section`
  border-top: 1px solid rgba(212, 166, 41, .35);
  background: linear-gradient(180deg, rgba(255, 250, 241, .66) 0%, rgba(255, 250, 241, 0) 100%);
`

export const ServicesGrid = styled.div`
  margin-top: clamp(2.5rem, 5vw, 4.5rem);
  display: grid;
  gap: 1.25rem;

  @media (min-width: 760px) {
    grid-template-columns: repeat(3, 1fr);
    align-items: stretch;
  }
`

export const ServiceCard = styled.article`
  overflow: hidden;
  background: rgba(255, 255, 255, .62);
  border: 1px solid rgba(168, 38, 17, .16);
  border-radius: var(--radius);
  box-shadow: var(--shadow-card);
  transition: transform .25s ease, box-shadow .25s ease;

  &:hover img {
    transform: scale(1.04);
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 24px 36px rgba(65, 38, 26, .18);
  }

  @media (min-width: 760px) {
    display: grid;
    grid-template-rows: auto 1fr;
  }
`

export const ServiceMedia = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform .45s ease;
  }
`

export const ServiceBody = styled.div`
  padding: 1.5rem;
  display: grid;
  gap: .95rem;

  h3 {
    color: var(--c-red);
    font-size: 1.3rem;
    line-height: 1.2;
    font-weight: 600;
  }

  p,
  li {
    font-size: .94rem;
    color: #65463b;
  }

  ul {
    display: grid;
    gap: .35rem;
    padding-left: 1.1rem;
    margin: 0;
  }
`

export const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  color: var(--c-red);
  font-weight: 700;
  font-size: .82rem;
  letter-spacing: .05em;
  text-transform: uppercase;

  &::after {
    content: '';
    width: .9rem;
    height: .9rem;
    flex: 0 0 auto;
    background: currentColor;
    mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3 8h8.5' stroke='black' stroke-width='1.7' stroke-linecap='round'/%3E%3Cpath d='M8.5 4.5L12 8l-3.5 3.5' stroke='black' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center / contain no-repeat;
    -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='none'%3E%3Cpath d='M3 8h8.5' stroke='black' stroke-width='1.7' stroke-linecap='round'/%3E%3Cpath d='M8.5 4.5L12 8l-3.5 3.5' stroke='black' stroke-width='1.7' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center / contain no-repeat;
    opacity: .9;
    transition: transform .2s ease, opacity .2s ease;
  }

  &:hover::after {
    transform: translateX(2px);
    opacity: 1;
  }
`

export const Cta = styled.div`
  margin-top: 2.5rem;
  display: grid;
  justify-items: center;
  text-align: center;
  gap: 1.25rem;
  padding: 2.4rem 2rem;
  border: 1px solid rgba(168, 38, 17, .14);
  border-top: 3px solid var(--c-gold);
  border-radius: 20px;
  background: linear-gradient(160deg, rgba(255, 255, 255, .72) 0%, rgba(255, 250, 240, .6) 100%);
  box-shadow: var(--shadow-card);

  p {
    color: var(--c-red);
    font-size: clamp(1.15rem, 2vw, 1.45rem);
    font-family: var(--ff-display);
    font-weight: 600;
    max-width: 36ch;
    line-height: 1.3;
  }
`
