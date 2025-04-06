'use client'

import { useCallback } from 'react'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { createQueryStringFromParamsUrl } from '@/lib/utils'

export function useApplyFilterUrl() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const handleApplyFilterUrl = useCallback(
    (value: { [key: string]: string | undefined }) => {
      const queryParams = createQueryStringFromParamsUrl(searchParams, value)
      router.push(pathname + `${queryParams}`)
    },
    [pathname, router, searchParams],
  )

  const handleResetAllFilters = () => {
    router.push(pathname)
  }

  return {
    handleApplyFilterUrl,
    handleResetAllFilters,
    searchParams,
    router,
    pathname,
  }
}
