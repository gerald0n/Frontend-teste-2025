'use client'

import React, { useEffect, useRef, useState } from 'react'

import { createPortal } from 'react-dom'
import { styled } from 'styled-components'

import { FadeWrapper, Overlay } from './style'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Modal({ isOpen, onClose, children }: ModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const modalRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      isAnimating.current = true
      document.body.style.overflow = 'hidden'
    } else {
      isAnimating.current = true

      const modalEl = modalRef.current
      if (modalEl) {
        const handleCloseAnimationEnd = () => {
          document.body.style.overflow = ''
          modalEl.removeEventListener('animationend', handleCloseAnimationEnd)
        }
        modalEl.addEventListener('animationend', handleCloseAnimationEnd)
      } else {
        document.body.style.overflow = ''
      }
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const modalEl = modalRef.current
    if (!modalEl) return

    const handleAnimationEnd = () => {
      isAnimating.current = false
      if (!isOpen) setIsVisible(false)
    }

    modalEl.addEventListener('animationend', handleAnimationEnd)

    return () => {
      modalEl.removeEventListener('animationend', handleAnimationEnd)
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    if (isVisible) {
      document.addEventListener('keydown', handleKeyDown)
    }

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose, isVisible])

  if (!isVisible) return null

  return createPortal(
    <Overlay onClick={onClose}>
      <CenteredFadeWrapper
        ref={modalRef}
        $isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </CenteredFadeWrapper>
    </Overlay>,
    document.body,
  )
}

const CenteredFadeWrapper = styled(FadeWrapper)`
  max-width: 50rem;
  margin: 0 auto;
`
