import styled from 'styled-components'
import Container from '../../ui/Container/Container'

export const Section = styled.section`
  position: relative;
  min-height: 600px;
  display: grid;
  place-items: center;
  overflow: hidden;
  isolation: isolate;
`

export const Pattern = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`

export const Tint = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background:
    linear-gradient(140deg, rgba(248, 243, 234, .86) 8%, rgba(248, 243, 234, .7) 58%, rgba(238, 230, 214, .8) 100%);
`

export const Content = styled(Container)`
  text-align: center;
  display: grid;
  justify-items: center;
  gap: 1.2rem;
  padding: clamp(1.6rem, 3vw, 2.4rem);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, .46);
  background: rgba(255, 252, 246, .42);
  backdrop-filter: blur(3px);
  box-shadow: var(--shadow-card);

  h2 {
    max-width: 24ch;
    color: var(--c-red);
    font-size: clamp(1.9rem, 4.4vw, 3.55rem);
    line-height: 1;
    font-weight: 600;
    letter-spacing: -.04em;
  }

  > p:not(.eyebrow) {
    max-width: 48ch;
    color: #704a3f;
  }
`
