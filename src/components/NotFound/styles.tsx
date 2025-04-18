import { styled } from 'styled-components'

const Container = styled.div`
  padding-inline: 2rem;
  color: ${({ theme }) => theme.colors.black.main};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  ${({ theme }) => theme.media.lg} {
    padding-inline: 6rem;
  }
`

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.sizes.xxxlarge};
  color: ${({ theme }) => theme.colors.primary.main};
  margin-bottom: 1rem;
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  color: ${({ theme }) => theme.colors.zinc[500]};
  margin-bottom: 2rem;
`
export { Container, Title, Description }
