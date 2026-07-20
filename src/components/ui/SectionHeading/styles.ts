import styled from 'styled-components'

export const Heading = styled.header`
  display: grid;
  gap: .85rem;
  max-width: 700px;
`

export const Title = styled.h2`
  color: var(--c-red);
  font-size: clamp(1.75rem, 3vw, 2.6rem);
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -.03em;
`

export const Description = styled.p`
  max-width: 62ch;
  font-size: clamp(.98rem, 1.4vw, 1.08rem);
  color: #6e4d42;
`
