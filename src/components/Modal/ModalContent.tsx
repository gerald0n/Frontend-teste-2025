'use client'

import { ComponentProps } from 'react'

import { Content } from './style'

interface ModalContentProps extends ComponentProps<'div'> {
  size?: 'sm' | 'md' | 'lg'
}

export function ModalContent({
  children,
  size = 'md',
  ...props
}: ModalContentProps) {
  return (
    <Content $size={size} {...props}>
      {children}
    </Content>
  )
}
