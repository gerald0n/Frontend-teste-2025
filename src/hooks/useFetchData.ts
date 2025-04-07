'use client'

import { useState, useEffect, useMemo } from 'react'

import { ApiError } from '@/lib/data/config/api-error'
import { IQueriesParams } from '@/lib/data/models/types'

interface FetchState<T> {
  data: T | null
  isLoading: boolean
  error: string | null
}

export function useFetchData<T>(
  fetchFunction: (params: IQueriesParams) => Promise<{ data: T }>,
  params: IQueriesParams = {},
  shouldFetch: boolean = true,
) {
  const [state, setState] = useState<FetchState<T>>({
    data: null,
    isLoading: false,
    error: null,
  })

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const memoizedParams = useMemo(() => params, [JSON.stringify(params)])

  useEffect(() => {
    if (!shouldFetch) return

    const fetchData = async () => {
      try {
        setState({ data: null, isLoading: true, error: null })
        const result = await fetchFunction(memoizedParams)
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
  }, [fetchFunction, memoizedParams, shouldFetch])

  return state
}
