'use client'

import { ReactNode } from 'react'

import { ModalClose } from '../Modal/ModalClose'
import { Container } from '../Modal/style'

type Props = {
  children?: ReactNode
  onClose: () => void
}

export function DrawerHeader({ children, onClose }: Props) {
  return (
    <Container>
      {children}
      <ModalClose asIcon onClose={onClose} />
    </Container>
  )
}
