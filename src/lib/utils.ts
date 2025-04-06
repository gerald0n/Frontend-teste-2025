import { ReadonlyURLSearchParams } from 'next/navigation'

function buildQueryString(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  params: Record<string, any> | undefined,
): string {
  if (!params) return ''

  const queryStringParams: string[] = []

  for (const key in params) {
    if (Array.isArray(params[key])) {
      params[key].forEach((item: string) => {
        queryStringParams.push(`${key}=${encodeURIComponent(item)}`)
      })
    } else if (params[key]) {
      queryStringParams.push(`${key}=${encodeURIComponent(params[key])}`)
    }
  }

  return queryStringParams.length > 0 ? `${queryStringParams.join('&')}` : ''
}

const createQueryStringFromParamsUrl = (
  searchParams: ReadonlyURLSearchParams,
  paramsObject: Record<string, string | undefined>,
) => {
  const params = new URLSearchParams(searchParams.toString())

  Object.entries(paramsObject).forEach(([name, value]) => {
    if (value) params.set(name, value)
    else params.delete(name)
  })

  return params.toString()
}

export { buildQueryString, createQueryStringFromParamsUrl }
