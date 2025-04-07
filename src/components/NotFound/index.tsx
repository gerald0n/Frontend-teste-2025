'use client'

import { Container, Description, Title } from './styles'
import { Button } from '../shared/Button'

export function NotFoundComponent() {
  return (
    <Container>
      <Title>Oops! Curso não encontrado.</Title>
      <Description>
        Parece que o curso que você está procurando não existe ou foi removido.
      </Description>
      <Button
        variant="primary"
        size="md"
        onClick={() => (window.location.href = '/')}
      >
        Voltar para a página inicial
      </Button>
    </Container>
  )
}
