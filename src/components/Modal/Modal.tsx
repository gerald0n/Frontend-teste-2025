'use client'

import React, { useEffect } from 'react'

import { createPortal } from 'react-dom'

import { FadeWrapper, Overlay } from './style'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!isOpen) return null

  return createPortal(
    <Overlay onClick={onClose}>
      <FadeWrapper $isOpen={isOpen} onClick={(e) => e.stopPropagation()}>
        {children}
      </FadeWrapper>
    </Overlay>,
    document.body,
  )
}
