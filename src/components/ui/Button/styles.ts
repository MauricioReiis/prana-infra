import styled, { css } from 'styled-components'

type ButtonVariant = 'primary' | 'ghost'

export const StyledButton = styled.a<{ $variant: ButtonVariant }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  padding: .86rem 1.35rem;
  border-radius: 999px;
  font-size: .82rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  transition: transform .2s ease, box-shadow .2s ease, background .2s ease, color .2s ease;

  &:hover {
    transform: translateY(-1px);
  }

  ${({ $variant }) =>
    $variant === 'primary'
      ? css`
          background: linear-gradient(135deg, #d8aa32 0%, #bd8512 100%);
          color: #fffef6;
          box-shadow: 0 8px 18px rgba(158, 111, 23, .20);

          &:hover {
            background: linear-gradient(135deg, #c99722 0%, #ad770a 100%);
            box-shadow: 0 10px 20px rgba(158, 111, 23, .24);
          }
        `
      : css`
          border: 1px solid rgba(140, 30, 11, .45);
          background: rgba(255, 255, 255, .52);
          color: var(--c-red);

          &:hover {
            background: rgba(255, 255, 255, .85);
          }
        `}
`
