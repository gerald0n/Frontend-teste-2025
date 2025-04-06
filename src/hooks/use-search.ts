'use client'

import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { useRouter, useSearchParams } from 'next/navigation'

import { useFetchData } from '@/hooks/useFetchData'
import { ICourse } from '@/lib/data/models/types'
import { getCourses } from '@/lib/data/services/api'

const DEBOUNCE_DELAY = 500
const NAVIGATION_DELAY = 800

export function useSearch() {
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<ICourse[]>([])
  const [isNavigating, setIsNavigating] = useState(false)
  const [navigatingCourse, setNavigatingCourse] = useState<string | null>(null)
  const [navigateToSlug, setNavigateToSlug] = useState<string | null>(null)

  const searchParams = useSearchParams()
  const router = useRouter()

  const searchString = searchParams.get('search_string') || ''

  useEffect(() => {
    if (isSearchModalOpen && searchString) {
      setSearchTerm(searchString)
    }
  }, [isSearchModalOpen, searchString])

  useEffect(() => {
    if (navigateToSlug) {
      const url = `/courses/${navigateToSlug}`
      window.location.href = url
      setNavigateToSlug(null)
    }
  }, [navigateToSlug])

  const handleNavigateToCourse = useCallback(
    (slug: string, title: string) => {
      setIsNavigating(true)
      setNavigatingCourse(title)

      setTimeout(() => {
        if (searchParams.has('search_string')) {
          router.replace('/')
        }

        setNavigateToSlug(slug)
        setIsSearchModalOpen(false)
        setSearchTerm('')
        setSearchResults([])
        setIsNavigating(false)
        setNavigatingCourse(null)
      }, NAVIGATION_DELAY)
    },
    [router, searchParams],
  )

  useEffect(() => {
    if (!isSearchModalOpen) {
      setSearchTerm('')
      setSearchResults([])
      setIsNavigating(false)
      setNavigatingCourse(null)

      if (searchParams.has('search_string')) {
        router.replace('/')
      }
    }
  }, [isSearchModalOpen, router, searchParams])

  const { data, isLoading } = useFetchData(
    getCourses,
    { search_string: searchString },
    isSearchModalOpen && !!searchString,
  )

  useEffect(() => {
    if (data?.courses) {
      setSearchResults(data.courses)
    }
  }, [data])

  useEffect(() => {
    if (!isSearchModalOpen) return

    const handler = setTimeout(() => {
      if (searchTerm) {
        router.replace(`?search_string=${encodeURIComponent(searchTerm)}`)
      } else {
        router.replace('/')
      }
    }, DEBOUNCE_DELAY)

    return () => clearTimeout(handler)
  }, [searchTerm, router, isSearchModalOpen])

  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([])
    }
  }, [searchTerm])

  const handleOpenModal = useCallback(() => {
    setIsSearchModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    if (isNavigating) return
    setIsSearchModalOpen(false)
  }, [isNavigating])

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
    },
    [],
  )

  const courses = useMemo(
    () => (isSearchModalOpen ? searchResults : []),
    [searchResults, isSearchModalOpen],
  )

  return {
    isSearchModalOpen,
    handleOpenModal,
    handleCloseModal,
    searchTerm,
    handleSearchChange,
    isNavigating,
    navigatingCourse,
    courses,
    handleNavigateToCourse,
    isLoading,
  }
}
