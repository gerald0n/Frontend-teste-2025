'use client'

import { styled } from 'styled-components'

import { BannerSection } from '@/components/BannerSection'

export default function Home() {
  return (
    <Container>
      <BannerSection />
    </Container>
  )
}

const Container = styled.div`
  padding-top: 6.4rem;

  gap: 2.4rem;

  ${({ theme }) => theme.media.lg} {
    padding-top: 7.5rem;
    padding-bottom: 2.6rem;
    gap: 4.8rem;
  }
`
