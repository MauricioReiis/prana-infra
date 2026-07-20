import styled from 'styled-components'

export const FloatingButton = styled.a`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  z-index: 40;
  width: 58px;
  aspect-ratio: 1;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: #25d366;
  box-shadow: 0 14px 28px rgba(0, 0, 0, .22);
  transition: transform .2s ease;

  &:hover {
    transform: translateY(-3px) scale(1.03);
  }

  svg {
    width: 31px;
    fill: #fff;
  }

  @media (min-width: 768px) {
    right: 1.5rem;
    bottom: 1.5rem;
  }
`
