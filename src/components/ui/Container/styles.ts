import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  width: min(calc(100% - 2rem), var(--container));
  margin-inline: auto;

  @media (min-width: 768px) {
    width: min(calc(100% - 4rem), var(--container));
  }
`
