'use client'

import React, { useEffect, useRef, useState } from 'react'

import { createPortal } from 'react-dom'

import { DrawerWrapper, Overlay } from './style'

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Drawer({ isOpen, onClose, children }: DrawerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const drawerRef = useRef<HTMLDivElement>(null)
  const isAnimating = useRef(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
      isAnimating.current = true
      document.body.style.overflow = 'hidden'
    } else {
      isAnimating.current = true

      const drawerEl = drawerRef.current
      if (drawerEl) {
        const handleCloseAnimationEnd = () => {
          document.body.style.overflow = ''
          drawerEl.removeEventListener('animationend', handleCloseAnimationEnd)
        }
        drawerEl.addEventListener('animationend', handleCloseAnimationEnd)
      } else {
        document.body.style.overflow = ''
      }
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const drawerEl = drawerRef.current
    if (!drawerEl) return

    const handleAnimationEnd = () => {
      isAnimating.current = false
      if (!isOpen) setIsVisible(false)
    }

    drawerEl.addEventListener('animationend', handleAnimationEnd)

    return () => {
      drawerEl.removeEventListener('animationend', handleAnimationEnd)
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
      <DrawerWrapper
        ref={drawerRef}
        $isOpen={isOpen}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </DrawerWrapper>
    </Overlay>,
    document.body,
  )
}
