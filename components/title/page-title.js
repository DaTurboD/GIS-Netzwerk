import styled from 'styled-components'

const TitleWrapper = styled.div`
  max-width: 1200px;
  margin: calc(var(--space-lg)*2.5) auto var(--space-lg) auto;
  padding-left: var(--space);
`

const Title = styled.h1`
  font-size: 4rem;
  text-transform: capitalize;
`

export default function PageTitle({ children, color }) {
  return (
    <TitleWrapper>
        <Title>{children}</Title>
    </TitleWrapper>
  )
}
