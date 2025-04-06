'use client'

import React from 'react'

import {
  SkeletonBanner,
  SkeletonSectionTitle,
  SkeletonCards,
  SkeletonCard,
} from './styles'
import { PageContainer } from '../shared/PageContainer'
import { PageContentWrapper } from '../shared/PageContentWrapper'

export function SkeletonCoursesList() {
  return (
    <PageContainer
      style={{
        alignItems: 'start',
      }}
    >
      <SkeletonBanner />

      <PageContentWrapper>
        
        <SkeletonSectionTitle />

        <SkeletonCards>
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index}>
              <></>
            </SkeletonCard>
          ))}
        </SkeletonCards>
      </PageContentWrapper>
    </PageContainer>
  )
}
