import styled from 'styled-components'
import Container from '../../ui/Container/Container'

export const HeaderWrapper = styled.header`
  position: absolute;
  z-index: 20;
  inset: 0 0 auto 0;
  padding-block: .85rem;
`

export const HeaderInner = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

export const Logo = styled.img`
  width: clamp(108px, 13vw, 150px);
  height: auto;
`

export const Navigation = styled.nav`
  display: none;
  align-items: center;
  gap: .8rem;
  padding: .55rem .7rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, .56);
  background: rgba(248, 242, 231, .68);
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 26px rgba(95, 58, 39, .16);
  color: var(--c-red);
  font-size: .76rem;
  font-weight: 700;
  letter-spacing: .03em;
  text-transform: uppercase;

  .meta {
    display: flex;
    gap: .55rem;
  }

  .meta span {
    padding: .36rem .58rem;
    border-radius: 999px;
    border: 1px solid rgba(168, 38, 17, .2);
    background: rgba(255, 255, 255, .6);
    color: var(--c-red-deep);
    font-size: .66rem;
    letter-spacing: .05em;
  }

  .links {
    display: flex;
    align-items: center;
    gap: .9rem;
    padding-inline: .25rem;
  }

  .links a {
    opacity: .86;
    transition: opacity .2s ease, color .2s ease;
  }

  .links a:hover {
    opacity: 1;
    color: var(--c-red-deep);
  }

  .contact {
    padding: .56rem .82rem;
    border-radius: 999px;
    background: linear-gradient(135deg, #d8aa32 0%, #bd8512 100%);
    color: #fffef6;
    box-shadow: 0 6px 14px rgba(158, 111, 23, .22);
    transition: transform .2s ease, box-shadow .2s ease;
  }

  .contact:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 18px rgba(158, 111, 23, .26);
  }

  @media (min-width: 920px) {
    display: flex;
  }
`
