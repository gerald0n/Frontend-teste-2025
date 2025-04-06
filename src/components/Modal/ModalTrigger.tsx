/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  cloneElement,
  forwardRef,
  isValidElement,
  ReactElement,
  ReactNode,
} from 'react'

type ModalTriggerProps =
  | {
      asChild: true
      children: ReactElement
      onOpen: () => void
    }
  | {
      asChild?: false
      children: ReactNode
      onOpen: () => void
    }

export const ModalTrigger = forwardRef<HTMLDivElement, ModalTriggerProps>(
  ({ children, asChild = false, onOpen }, ref) => {
    if (asChild && isValidElement(children)) {
      const childProps = children.props as {
        onClick?: (...args: any[]) => void
      }

      const newProps: {
        onClick: (...args: any[]) => void
      } = {
        onClick: (...args) => {
          childProps.onClick?.(...args)
          onOpen()
        },
      }

      return cloneElement(children, newProps as any)
    }

    return (
      <div ref={ref} onClick={onOpen}>
        {children}
      </div>
    )
  },
)

ModalTrigger.displayName = 'ModalTrigger'
