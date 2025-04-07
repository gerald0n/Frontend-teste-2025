'use client'

import { useMemo, useState, useEffect } from 'react'

import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { BannerSection } from '@/components/BannerSection'
import { CourseCard } from '@/components/CourseCard'
import { CoursesSection } from '@/components/CourseSection'
import { Pagination } from '@/components/Pagination'
import { EmptyState } from '@/components/shared/EmptyState'
import { PageContainer } from '@/components/shared/PageContainer'
import { PageContentWrapper } from '@/components/shared/PageContentWrapper'
import { SkeletonCoursesList } from '@/components/SkeletonCoursesList'
import { useFavoriteCourses } from '@/hooks/use-favorite-course'
import { useFetchData } from '@/hooks/useFetchData'
import { BannerInfos, ICourse } from '@/lib/data/models/types'
import { getBannerInfos, getCourses } from '@/lib/data/services/api'

export default function Home() {
  const router = useRouter()

  const [page, setPage] = useState(1)
  const [allCourses, setAllCourses] = useState<ICourse[]>([])

  const { data: coursesData, isLoading: isLoadingCourses } = useFetchData(
    getCourses,
    {
      page,
    },
  )

  const { data: bannerData, isLoading: isLoadingBanner } =
    useFetchData(getBannerInfos)

  const { favoriteCourses, toggleCourse, isFavorite } = useFavoriteCourses()

  const courses = useMemo(() => coursesData?.courses || [], [coursesData])
  const banner = useMemo(
    () => bannerData?.banners[0] || ({} as BannerInfos),
    [bannerData],
  )

  const favoriteCoursesList = useMemo(() => {
    return (
      allCourses.filter((course) => favoriteCourses.includes(course.id)) || []
    )
  }, [allCourses, favoriteCourses])

  const hasCourses = courses.length > 0
  const hasFavorites = favoriteCoursesList.length > 0

  useEffect(() => {
    if (courses.length > 0) {
      setAllCourses((prevCourses) => {
        const newCourses = courses.filter(
          (course) => !prevCourses.some((c) => c.id === course.id),
        )
        return [...prevCourses, ...newCourses]
      })
    }
  }, [courses])

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

  const renderFavoriteCourseCard = (courseId: number) => {
    const course = allCourses.find((c) => c.id === courseId)
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

  if (isLoadingCourses || isLoadingBanner || !bannerData) {
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
          className={!hasFavorites ? 'empty-state' : ''}
        >
          {!hasFavorites ? (
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
            favoriteCoursesList.map((course) =>
              renderFavoriteCourseCard(course.id),
            )
          )}
        </CoursesSection>

        <Pagination
          meta={coursesData?.pagination}
          onNextPage={() => setPage((prev) => prev + 1)}
          onPrevPage={() => setPage((prev) => Math.max(prev - 1, 1))}
          onPageChange={setPage}
        />
      </PageContentWrapper>
    </PageContainer>
  )
}
