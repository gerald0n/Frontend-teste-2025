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

  // Sincroniza o valor do input com a URL ao abrir o modal
  useEffect(() => {
    if (isSearchModalOpen && searchString) {
      setSearchTerm(searchString)
    }
  }, [isSearchModalOpen, searchString])

  // Quando o modal é fechado, limpa a busca e o parâmetro da URL
  useEffect(() => {
    if (!isSearchModalOpen) {
      setSearchTerm('')
      setSearchResults([])
      setIsNavigating(false)
      setNavigatingCourse(null)

      if (searchParams.has('search_string')) {
        const newParams = new URLSearchParams(searchParams.toString())
        newParams.delete('search_string')

        const newUrl =
          newParams.toString().length > 0
            ? `?${newParams.toString()}`
            : window.location.pathname

        router.replace(newUrl, { scroll: false })
      }
    }
  }, [isSearchModalOpen, router, searchParams])

  // Delay para navegar para a página do curso com animação e reset de estado
  const handleNavigateToCourse = useCallback((slug: string, title: string) => {
    setIsNavigating(true)
    setNavigatingCourse(title)

    setTimeout(() => {
      setNavigateToSlug(slug)
      setIsSearchModalOpen(false)
      setSearchTerm('')
      setSearchResults([])
      setIsNavigating(false)
      setNavigatingCourse(null)
    }, NAVIGATION_DELAY)
  }, [])

  // Executa a navegação após delay
  useEffect(() => {
    if (navigateToSlug) {
      const url = `/courses/${navigateToSlug}`
      window.location.href = url
      setNavigateToSlug(null)
    }
  }, [navigateToSlug])

  // Chamada da API somente quando o modal estiver aberto e houver busca
  const { data, isLoading } = useFetchData(
    getCourses,
    { search_string: searchString },
    isSearchModalOpen && !!searchString,
  )

  // Atualiza resultados após resposta da API
  useEffect(() => {
    if (data?.courses) {
      setSearchResults(data.courses)
    }
  }, [data])

  // Atualiza a URL com debounce conforme o usuário digita
  useEffect(() => {
    if (!isSearchModalOpen) return

    const handler = setTimeout(() => {
      const currentParams = new URLSearchParams(searchParams.toString())

      if (searchTerm) {
        currentParams.set('search_string', searchTerm)
      } else {
        currentParams.delete('search_string')
      }

      const newUrl =
        currentParams.toString().length > 0
          ? `?${currentParams.toString()}`
          : window.location.pathname

      router.replace(newUrl, { scroll: false })
    }, DEBOUNCE_DELAY)

    return () => clearTimeout(handler)
  }, [searchTerm, router, searchParams, isSearchModalOpen])

  // Limpa resultados se o campo for esvaziado
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSearchResults([])
    }
  }, [searchTerm])

  // Handlers de abrir e fechar modal
  const handleOpenModal = useCallback(() => {
    setIsSearchModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    if (isNavigating) return
    setIsSearchModalOpen(false)
  }, [isNavigating])

  // Atualiza o valor do input
  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value)
    },
    [],
  )

  // Retorna cursos apenas se o modal estiver aberto
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
