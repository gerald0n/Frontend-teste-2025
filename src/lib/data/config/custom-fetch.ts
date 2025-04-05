'use server'

import { env } from 'process'

import { ApiError } from './api-error'

interface ReqOptions extends RequestInit {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any
}

export async function customFetch<T>(path: string, reqOptions?: ReqOptions) {
  const baseUrl = env.NEXT_PUBLIC_BACKEND_API_URL
  const url = new URL(`content${path}`, baseUrl)

  const options: RequestInit = {
    ...reqOptions,
    headers: {
      'Content-type': 'application/json',
      Origin: 'http://localhost:3024',
      ...reqOptions?.headers,
    },
  }

  // Parse body to JSON string
  if (reqOptions?.body) {
    options.body = JSON.stringify(reqOptions.body)
  }

  try {
    const response = await fetch(url, options)

    if (!response.ok) {
      const contentType = response.headers.get('Content-Type')

      let responseError
      if (contentType && contentType.includes('application/json')) {
        responseError = await response.json()
      } else {
        responseError = {
          message: 'Ops! Algo deu errado.',
          statusCode: response.status,
        }
      }

      throw new ApiError(
        responseError?.message ?? 'Ops! Algo deu errado.',
        responseError?.statusCode,
      )
    }

    // Check if response type is a valid JSON
    const contentType = response.headers.get('Content-Type')

    if (contentType && contentType.includes('application/json')) {
      const responseData = await response.json()
      return { data: responseData as T }
    }

    return { data: null } // Default response
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('CLIENT_FETCH_ERROR', { error: error as Error, url })

    if (error instanceof ApiError) {
      return { error: error.message }
    }

    return { error: 'Oops! Algo deu errado.' }
  }
}
