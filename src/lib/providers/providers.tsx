import React from 'react'

import { ThemeProvider } from 'styled-components'

import theme from '@/styles/theme'

import StyledComponentsRegistry from './registry'
import { GlobalStyle } from '../../styles/GlobalStyle'

interface Props {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
