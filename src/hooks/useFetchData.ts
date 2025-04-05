'use client'

import { useState, useEffect } from 'react'

interface FetchState<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

export function useFetchData<T>(fetchFunction: () => Promise<T>) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: true,
    error: null,
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState({ data: null, isLoading: true, error: null })
        const data = await fetchFunction()
        setState({ data, isLoading: false, error: null })
      } catch (err) {
        setState({
          data: null,
          isLoading: false,
          error: `${err}: erro ao carregar os dados.`,
        })
      }
    }

    fetchData()
  }, [fetchFunction])

  return state
}
