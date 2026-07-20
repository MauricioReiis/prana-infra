import { Description, Heading, Title } from './styles'

type Props = {
  eyebrow?: string
  title: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <Heading>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Heading>
  )
}
