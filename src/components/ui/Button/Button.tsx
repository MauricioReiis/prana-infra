import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'
import { StyledButton } from './styles'

type Props = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: 'primary' | 'ghost'
  }
>

export default function Button({
  children,
  variant = 'primary',
  ...props
}: Props) {
  return (
    <StyledButton $variant={variant} {...props}>
      {children}
    </StyledButton>
  )
}
