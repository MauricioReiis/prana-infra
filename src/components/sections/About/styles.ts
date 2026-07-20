import styled from 'styled-components'

export const AboutSection = styled.section`
  border-top: 1px solid var(--c-line);
  background: linear-gradient(180deg, rgba(255, 254, 249, .6) 0%, rgba(255, 254, 249, 0) 100%);
`

export const Layout = styled.div`
  margin-top: 3rem;
  display: grid;
  gap: 2rem;
  align-items: center;

  @media (min-width: 900px) {
    grid-template-columns: .8fr 1.2fr;
    gap: 5rem;
  }
`

export const Portrait = styled.div`
  width: min(100%, 430px);
  aspect-ratio: 1;
  margin-inline: auto;
  border-radius: 50%;
  overflow: hidden;
  border: 8px solid rgba(255, 250, 241, .88);
  background: #fff;
  box-shadow: var(--shadow-card);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center top;
  }

  @media (max-width: 680px) {
    width: min(100%, 320px);
    border-width: 6px;
  }
`

export const Content = styled.div`
  display: grid;
  gap: 2rem;
`

export const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: .75rem;

  div {
    padding: 1rem;
    border: 1px solid rgba(168, 38, 17, .12);
    border-top: 2px solid var(--c-gold);
    border-radius: 12px;
    background: rgba(255, 255, 255, .64);
  }

  strong {
    display: block;
    color: var(--c-red);
    font-size: clamp(1.45rem, 3vw, 2.2rem);
    line-height: 1;
  }

  span {
    display: block;
    margin-top: .5rem;
    font-size: .76rem;
    letter-spacing: .02em;
  }

  @media (max-width: 680px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));

    div {
      padding: .9rem;
    }

    div:last-child {
      grid-column: 1 / -1;
    }

    strong {
      font-size: 1.95rem;
    }

    span {
      font-size: .95rem;
      line-height: 1.2;
    }
  }
`

export const Bio = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 62ch;
  padding: 1.2rem 1.35rem;
  border: 1px solid rgba(168, 38, 17, .12);
  border-radius: 16px;
  background: rgba(255, 255, 255, .5);

  h3 {
    color: var(--c-red);
    font-size: 1.45rem;
    line-height: 1.2;
  }

  p {
    color: #6e4d44;
  }
`
