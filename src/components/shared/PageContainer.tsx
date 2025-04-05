'use client'

import { styled } from 'styled-components'

export const PageContainer = styled.div`
  padding-top: 6.4rem;
  display: flex;
  flex-direction: column;
  gap: 4.8rem;
  align-items: center;

  ${({ theme }) => theme.media.lg} {
    padding-top: 7.5rem;
    padding-bottom: 2.6rem;
  }
`
