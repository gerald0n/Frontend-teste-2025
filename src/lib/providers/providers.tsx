'use client'

import React from 'react'

import { ThemeProvider } from 'styled-components'

import { FavoriteCoursesProvider } from '@/context/favorite-courses'
import { GlobalStyle } from '@/styles/GlobalStyle'
import theme from '@/styles/theme'

import StyledComponentsRegistry from './registry'

interface Props {
  children: React.ReactNode
}

export default function Providers({ children }: Props) {
  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <FavoriteCoursesProvider>
          <GlobalStyle />
          {children}
        </FavoriteCoursesProvider>
      </ThemeProvider>
    </StyledComponentsRegistry>
  )
}
