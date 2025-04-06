/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react'

import { useModal } from '@/hooks/useModal'

type ModalTriggerProps =
  | {
      asChild: true
      children: ReactElement
    }
  | {
      asChild?: false
      children: ReactNode
    }

export const ModalTrigger = forwardRef<HTMLDivElement, ModalTriggerProps>(
  ({ children, asChild = false }, ref) => {
    const { open } = useModal()

    if (asChild && isValidElement(children)) {
      const childProps = children.props as {
        onClick?: (...args: any[]) => void
      }

      const newProps: {
        onClick: (...args: any[]) => void
      } = {
        onClick: (...args) => {
          childProps.onClick?.(...args)
          open()
        },
      }

      return cloneElement(children, newProps as any)
    }

    return (
      <div ref={ref} onClick={open}>
        {children}
      </div>
    )
  },
)

ModalTrigger.displayName = 'ModalTrigger'
