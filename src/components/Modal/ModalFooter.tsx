import React from 'react'

import { Footer } from './style'

export function ModalFooter({ children }: { children?: React.ReactNode }) {
  return <Footer>{children}</Footer>
}
