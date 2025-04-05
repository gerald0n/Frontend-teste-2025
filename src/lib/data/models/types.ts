import { BannerStatus, BannerTarget, BannerType } from './enums'

export interface BannerInfos {
  id: number
  brand_id: number
  type: BannerType
  link_to: string | null
  target: BannerTarget
  created_at: string
  updated_at: string
  order: number | null
  title: string
  status: BannerStatus
  description: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules: Record<string, any>
  desktop: string
  mobile: string
  title_image: string | null
}

export interface IBannerInfosResponse {
  banners: BannerInfos[]
}
