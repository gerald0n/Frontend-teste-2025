'use client'

import { useMemo } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { BannerSection } from '@/components/BannerSection'
import { CourseCard } from '@/components/CourseCard'
import { CoursesSection } from '@/components/CourseSection'
import { EmptyState } from '@/components/shared/EmptyState'
import { PageContainer } from '@/components/shared/PageContainer'
import { PageContentWrapper } from '@/components/shared/PageContentWrapper'
import { SkeletonCoursesList } from '@/components/SkeletonCoursesList'
import { useFavoriteCourses } from '@/hooks/use-favorite-course'
import { useFetchData } from '@/hooks/useFetchData'
import { BannerInfos } from '@/lib/data/models/types'
import { getBannerInfos, getCourses } from '@/lib/data/services/api'

export default function Home() {
  const router = useRouter()

  const { data: coursesData, isLoading: isLoadingCourses } =
    useFetchData(getCourses)
  const { data: bannerData, isLoading: isLoadingBanner } =
    useFetchData(getBannerInfos)

  const { favoriteCourses, toggleCourse, isFavorite } = useFavoriteCourses()

  const courses = useMemo(() => coursesData?.courses || [], [coursesData])
  const banner = useMemo(
    () => bannerData?.banners[0] || ({} as BannerInfos),
    [bannerData],
  )

  const hasCourses = courses.length > 0
  const hasFavorites = favoriteCourses.length > 0

  const handleNavigateToCourse = (slug: string) => {
    router.push(`/courses/${slug}`)
  }

  const renderCourseCard = (courseId: number) => {
    const course = courses.find((c) => c.id === courseId)
    if (!course) return null

    return (
      <CourseCard
        key={course.id}
        title={course.title}
        description={course.short_description}
        bannerUrl={course.banner_mobile}
        isOnline
        isFavoriteCourse={isFavorite(course.id)}
        toggleCourse={() => toggleCourse(course.id)}
        navigateToCourse={() => handleNavigateToCourse(course.slug)}
      />
    )
  }

  if (isLoadingCourses || isLoadingBanner) {
    return <SkeletonCoursesList />
  }

  return (
    <PageContainer>
      <BannerSection banner={banner} />
      <PageContentWrapper>
        <CoursesSection
          id="meus-cursos"
          title="Meus cursos"
          style={{ scrollMarginTop: '100px' }}
          className={!hasCourses ? 'empty-state' : ''}
        >
          {!hasCourses ? (
            <EmptyState
              heading="Ops... nenhum dado encontrado"
              description="Verifique novamente ou tente mais tarde."
            />
          ) : (
            courses.map((course) => renderCourseCard(course.id))
          )}
        </CoursesSection>

        <CoursesSection
          title="Meus favoritos"
          className={!hasCourses || !hasFavorites ? 'empty-state' : ''}
        >
          {!hasCourses || !hasFavorites ? (
            <EmptyState
              iconComponent={
                <Image
                  src="/heart-search.svg"
                  alt="Nenhum favorito"
                  width={24}
                  height={24}
                />
              }
              description="Parece que você ainda não tem cursos favoritados"
            />
          ) : (
            favoriteCourses.map((courseId) => renderCourseCard(courseId))
          )}
        </CoursesSection>
      </PageContentWrapper>
    </PageContainer>
  )
}
