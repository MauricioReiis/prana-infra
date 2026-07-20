import type { PropsWithChildren } from 'react'
import { ContainerWrapper } from './styles'

type Props = PropsWithChildren<{ className?: string }>

export default function Container({ children, className }: Props) {
  return <ContainerWrapper className={className}>{children}</ContainerWrapper>
}
