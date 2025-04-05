'use client'

import React, { useMemo } from 'react'

import { useFetchData } from '@/hooks/useFetchData'
import { BannerInfos } from '@/lib/data/models/types'
import { getBannerInfos } from '@/lib/data/services/api'

import SkeletonBanner from './skeleton'
import {
  HeroContainer,
  HeroContent,
  HeroDesktopOverlay,
  HeroImage,
  HeroOverlay,
  HeroTitle,
} from './style'
import { Button } from '../shared/Button'

export function BannerSection() {
  const { data, isLoading } = useFetchData(getBannerInfos)

  const banner = useMemo(() => data?.banners[0] || ({} as BannerInfos), [data])

  const scrollToCourses = () => {
    const section = document.getElementById('meus-cursos')
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  if (Object.keys(banner).length === 0 || isLoading) return <SkeletonBanner />

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
