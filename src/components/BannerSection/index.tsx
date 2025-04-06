'use client'

import React from 'react'

import { BannerInfos } from '@/lib/data/models/types'

import {
  HeroContainer,
  HeroContent,
  HeroDesktopOverlay,
  HeroImage,
  HeroOverlay,
  HeroTitle,
} from './style'
import { Button } from '../shared/Button'

interface Props {
  banner: BannerInfos
}

export function BannerSection({ banner }: Props) {
  const scrollToCourses = () => {
    const section = document.getElementById('meus-cursos')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroContainer>
      <HeroImage src={banner.mobile} alt="Banner" />
      <HeroDesktopOverlay />
      <HeroOverlay />
      <HeroContent>
        <HeroTitle>{banner.description}</HeroTitle>
        <Button variant="black" size="lg" onClick={scrollToCourses}>
          Conheça as aulas
        </Button>
      </HeroContent>
    </HeroContainer>
  )
}
