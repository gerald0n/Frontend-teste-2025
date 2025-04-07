'use client'

import React from 'react'

import { IPagination } from '@/lib/data/models/types'

import { NavButton, PageButton, PageList, Wrapper } from './style'
import { SvgIcon } from '../shared/SvgIcon'

interface PaginationProps {
  meta?: IPagination
  onNextPage: () => void
  onPrevPage: () => void
  onPageChange: (page: number) => void
}

export function Pagination({
  meta,
  onNextPage,
  onPrevPage,
  onPageChange,
}: PaginationProps) {
  const renderPageButtons = () => {
    const pages = []

    for (let i = 1; i <= (meta?.total_pages ?? 0); i++) {
      pages.push(
        <PageButton
          key={i}
          isActive={i === meta?.current_page}
          onClick={() => onPageChange(i)}
        >
          {i}
        </PageButton>,
      )
    }

    return pages
  }

  return (
    <Wrapper>
      <NavButton onClick={onPrevPage} disabled={meta?.current_page === 1}>
        <SvgIcon.ArrowLeft />
        Anterior
      </NavButton>

      <PageList>{renderPageButtons()}</PageList>

      <NavButton
        onClick={onNextPage}
        disabled={meta?.current_page === meta?.total_pages}
      >
        Próxima
        <SvgIcon.ArrowRight />
      </NavButton>
    </Wrapper>
  )
}
