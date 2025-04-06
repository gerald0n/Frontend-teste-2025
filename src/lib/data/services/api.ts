import { buildQueryString } from '@/lib/utils'

import { customFetch } from '../config/custom-fetch'
import type {
  IBannerInfosResponse,
  ICourse,
  ICoursesResponse,
  IQueriesParams,
} from '../models/types'

export async function getCourses(params?: IQueriesParams, limit = 8) {
  const response = await customFetch<ICoursesResponse>(
    `/courses?${buildQueryString(params)}&per_page=${limit}`,
  )

  return response.data
}

export async function getCourseBySlug(slug: string) {
  const response = await customFetch<ICourse>(`/courses/${slug}`)

  return response.data
}

export async function getBannerInfos() {
  const response = await customFetch<IBannerInfosResponse>('/banners')

  return response.data
}
