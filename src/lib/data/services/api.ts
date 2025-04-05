import { customFetch } from '../config/custom-fetch'
import type { IBannerInfosResponse } from '../models/types'

export async function getBannerInfos() {
  const response = await customFetch<IBannerInfosResponse>('/banners')

  return response.data
}
