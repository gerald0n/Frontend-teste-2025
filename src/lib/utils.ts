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
  searchParams: ReadonlyURLSearchParams, // Parâmetros atuais da URL
  paramsObject: Record<string, string | undefined>, // Novos parâmetros a serem aplicados
) => {
  const params = new URLSearchParams(searchParams.toString()) // Cria uma cópia dos parâmetros atuais

  Object.entries(paramsObject).forEach(([name, value]) => {
    if (value) params.set(name, value) // Atualiza/adiciona o valor do parâmetro
    else params.delete(name) // Remove o parâmetro se o valor for `undefined`
  })

  return params.toString() // Retorna a nova query string
}

export { buildQueryString, createQueryStringFromParamsUrl }
