'use client'

import React from 'react'

import { styled } from 'styled-components'

type Props = {
  children: React.ReactNode
}

export function PageContentWrapper({ children }: Props) {
  return (
    <ContentWrapper>
      <MainContent>{children}</MainContent>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  width: 100%;
  padding-inline: 2rem;

  ${({ theme }) => theme.media.lg} {
    padding-inline: 6rem;
  }
`

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  max-width: ${({ theme }) => theme.grid.container};
  margin: 0 auto;
  width: 100%;
  gap: 4.8rem;
  padding-bottom: 8.8rem;
`
