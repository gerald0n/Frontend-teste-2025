'use client'

import { useState, useEffect } from 'react'

import { ApiError } from '@/lib/data/config/api-error'

interface FetchState<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

export function useFetchData<T>(fetchFunction: () => Promise<{ data: T }>) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ data: null, isLoading: true, error: null })
        const result = await fetchFunction()
        setState({ data: result.data, isLoading: false, error: null })
      } catch (err) {
        const errorMessage =
          err instanceof ApiError ? err.message : 'Erro ao carregar os dados.'

        setState({
          data: null,
          isLoading: false,
          error: errorMessage,
        })
      }
    }

    fetchData()
  }, [fetchFunction])

  return state
}
