import styled from 'styled-components'
import Container from '../../ui/Container/Container'

export const HeroSection = styled.section`
  position: relative;
  min-height: min(860px, 100svh);
  display: grid;
  align-items: end;
  background: var(--c-bg);
  overflow: hidden;
  isolation: isolate;

  @media (max-width: 680px) {
    min-height: 760px;
    align-items: center;
  }
`

export const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 58% center;
  z-index: -2;

  @media (max-width: 680px) {
    object-position: 62% center;
  }
`

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background:
    linear-gradient(
      90deg,
      rgba(248, 243, 234, .95) 0%,
      rgba(248, 243, 234, .88) 34%,
      rgba(248, 243, 234, .34) 64%,
      rgba(248, 243, 234, .05) 100%
    ),
    linear-gradient(0deg, rgba(248, 243, 234, .74) 0%, transparent 58%);

  @media (max-width: 680px) {
    background: linear-gradient(
      180deg,
      rgba(247, 242, 233, .78),
      rgba(247, 242, 233, .87)
    );
  }
`

export const HeroContent = styled(Container)`
  padding-top: 8.5rem;
  padding-bottom: clamp(4rem, 10vw, 7rem);

  @media (max-width: 680px) {
    padding-top: 8rem;
    padding-bottom: 3rem;
  }
`

export const Copy = styled.div`
  max-width: 790px;
  display: grid;
  justify-items: start;
  gap: 1.15rem;
  padding: clamp(1.15rem, 2vw, 1.6rem);
  border: 1px solid rgba(255, 255, 255, .45);
  border-radius: 24px;
  background: rgba(255, 251, 244, .5);
  backdrop-filter: blur(3px);
`

export const Title = styled.h1`
  max-width: 14ch;
  color: var(--c-red);
  font-size: clamp(2.2rem, 5.5vw, 4.4rem);
  line-height: .96;
  font-weight: 700;
  letter-spacing: -.04em;

  span {
    display: block;
  }
`

export const Lead = styled.p`
  max-width: 39ch;
  color: var(--c-red-deep);
  font-size: clamp(1rem, 1.45vw, 1.1rem);
  font-weight: 500;
`

export const Chips = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: .55rem;

  li {
    padding: .45rem .62rem;
    border-radius: 999px;
    border: 1px solid rgba(168, 38, 17, .16);
    background: rgba(255, 255, 255, .62);
    color: #7b4d3f;
    font-size: .72rem;
    font-weight: 600;
    letter-spacing: .02em;
  }
`

export const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .7rem;

  @media (max-width: 680px) {
    width: 100%;

    a {
      flex: 1 1 auto;
    }
  }
`
