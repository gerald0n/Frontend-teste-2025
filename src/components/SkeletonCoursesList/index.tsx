'use client'

import React from 'react'

import {
  SkeletonBanner,
  SkeletonSectionTitle,
  SkeletonCards,
  SkeletonCard,
} from './styles'
import { PaginationSkeleton } from '../Pagination/skeleton'
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

        <SkeletonSectionTitle />

        <SkeletonCards>
          {Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index}>
              <></>
            </SkeletonCard>
          ))}
        </SkeletonCards>

        <PaginationSkeleton />
      </PageContentWrapper>
    </PageContainer>
  )
}
