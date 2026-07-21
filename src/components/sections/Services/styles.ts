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
  position: relative;
  isolation: isolate;
  overflow: hidden;
  background:
    linear-gradient(180deg, rgba(255, 255, 255, .9) 0%, rgba(255, 252, 246, .84) 100%);
  border: 1px solid rgba(168, 38, 17, .22);
  border-radius: var(--radius);
  box-shadow:
    0 14px 30px rgba(62, 35, 20, .12),
    inset 0 1px 0 rgba(255, 255, 255, .72);
  transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease;

  &::before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: inherit;
    background:
      radial-gradient(120% 60% at 0% 0%, rgba(207, 159, 31, .14) 0%, transparent 58%),
      radial-gradient(90% 80% at 100% 100%, rgba(168, 38, 17, .09) 0%, transparent 62%);
    opacity: .8;
    z-index: -1;
    pointer-events: none;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    border: 1px solid rgba(255, 255, 255, .48);
    pointer-events: none;
  }

  &:hover img {
    transform: scale(1.07);
  }

  &:hover {
    transform: translateY(-7px);
    border-color: rgba(168, 38, 17, .35);
    box-shadow:
      0 28px 44px rgba(65, 38, 26, .2),
      inset 0 1px 0 rgba(255, 255, 255, .84);
  }

  @media (min-width: 760px) {
    display: grid;
    grid-template-rows: auto 1fr;
  }
`

export const ServiceMedia = styled.div`
  aspect-ratio: 4 / 3;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(17, 8, 4, 0) 45%, rgba(17, 8, 4, .34) 100%);
    opacity: .72;
    transition: opacity .35s ease;
    pointer-events: none;
  }

  ${ServiceCard}:hover &::after {
    opacity: .5;
  }

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
  gap: 1rem;

  h3 {
    color: var(--c-red);
    font-size: 1.3rem;
    line-height: 1.2;
    font-weight: 600;
    margin-bottom: .35rem;
  }

  p,
  li {
    font-size: .94rem;
    color: #65463b;
  }

  ul {
    display: grid;
    gap: .45rem;
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  li {
    position: relative;
    padding-left: 1rem;
  }

  li::before {
    content: '';
    position: absolute;
    left: 0;
    top: .58em;
    width: .36rem;
    height: .36rem;
    border-radius: 999px;
    background: var(--c-red);
    box-shadow: 0 0 0 3px rgba(168, 38, 17, .12);
  }
`

export const ServiceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: .45rem;
  color: var(--c-red);
  width: fit-content;
  margin-top: .2rem;
  padding: .5rem .75rem;
  font-weight: 700;
  font-size: .82rem;
  letter-spacing: .05em;
  text-transform: uppercase;
  border-radius: 999px;
  background: rgba(168, 38, 17, .08);
  transition: background .2s ease, color .2s ease;

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

  &:hover {
    background: rgba(168, 38, 17, .14);
    color: var(--c-red-deep);
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
