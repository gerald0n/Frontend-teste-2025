'use client'

import { ReactNode } from 'react'

import { ModalClose } from './ModalClose'
import { Container } from './style'

type Props = {
  children?: ReactNode
  onClose: () => void
}

export function ModalHeader({ children, onClose }: Props) {
  return (
    <Container>
      {children}
      <ModalClose asIcon onClose={onClose} />
    </Container>
  )
}
