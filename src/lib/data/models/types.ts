import {
  BannerStatus,
  BannerTarget,
  BannerType,
  CourseAllowComments,
  CourseLevel,
  CourseVisibility,
} from './enums'

export interface IQueriesParams {
  page?: number
  search_string?: string
}

export interface IPagination {
  total_pages: number
  current_page: number
  per_page: number
  total_items: number
}

export interface ICourse {
  id: number
  title: string
  slug: string
  status: 'published'
  short_description: string
  created_at: string
  updated_at: string
  tags: string[]
  settings: {
    city: string
    state: string
    start_at: string
    end_at: string
    course_types: {
      live: boolean
      online: boolean
      presential: boolean
    }
    manual_watched: boolean
    highlight_banner: boolean
  }
  long_description: string
  level: CourseLevel
  has_certificate: boolean
  visibility: CourseVisibility
  allow_comments: CourseAllowComments
  featured: boolean
  featured_order: number | null
  has_free_offer: boolean
  statement: string | null
  schedule: string | null
  city: string | null
  state: string | null
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nps_config: any | null
  show_subjects_menu: boolean
  banner: string | null
  banner_mobile: string | null
  thumbnail_vertical: string | null
  thumbnail: string | null
  duration: string
  categories: string[]
  store: {
    id: number
    name: string
    slug: string
    timezone: string
    brand_id: number
  }
  teachers: string[]
  publishable: boolean
  testimonials: string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  faq: Record<string, any>
  certificate_image: string | null
  tickets_qty: number
  classrooms_qty: number
  lowest_offer: {
    promo_price: number | null
    original_price: number | null
    type_offer: string
  }
  offer_currency: string | null
  lesson_types: string[]
}

export interface ICoursesResponse {
  courses: ICourse[]
  pagination: IPagination
}

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
