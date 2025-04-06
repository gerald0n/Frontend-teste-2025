'use client'

import React, { forwardRef, useEffect } from 'react'

import { createPortal } from 'react-dom'
import { styled, css, keyframes } from 'styled-components'

import { useModal } from '@/hooks/useModal'

interface ModalContentProps {
  children: React.ReactNode
  size?: 'md' | 'lg'
}

export const ModalContent = forwardRef<HTMLDivElement, ModalContentProps>(
  ({ children, size = 'md' }, ref) => {
    const { isOpen, close } = useModal()

    useEffect(() => {
      const handleEsc = (e: KeyboardEvent) => {
        if (e.key === 'Escape') close()
      }
      document.addEventListener('keydown', handleEsc)
      return () => document.removeEventListener('keydown', handleEsc)
    }, [close])

    if (!isOpen) return null

    return createPortal(
      <Overlay onClick={close} aria-hidden>
        <Content
          role="dialog"
          aria-modal="true"
          size={size}
          ref={ref}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </Content>
      </Overlay>,
      document.body,
    )
  },
)

ModalContent.displayName = 'ModalContent'

// Estilização
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.97); }
  to { opacity: 1; transform: scale(1); }
`

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

const Content = styled.div<{ size: 'md' | 'lg' }>`
  background: white;
  border-radius: 6px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.2s ease-out;
  margin-inline: 16px;

  ${({ size }) =>
    size === 'md'
      ? css`
          width: 100%;
          max-width: 405px;
        `
      : css`
          width: 100%;
          max-width: 720px;
        `}
`
