'use client'

import { useMemo } from 'react'

import Image from 'next/image'

import { BannerSection } from '@/components/BannerSection'
import { CourseCard } from '@/components/CourseCard'
import { CoursesSection } from '@/components/CourseSection'
import { EmptyState } from '@/components/shared/EmptyState'
import { PageContainer } from '@/components/shared/PageContainer'
import { PageContentWrapper } from '@/components/shared/PageContentWrapper'
import { useFavoriteCourses } from '@/hooks/use-favorite-course'
import { useFetchData } from '@/hooks/useFetchData'
import { getCourses } from '@/lib/data/services/api'

export default function Home() {
  const { data, isLoading } = useFetchData(getCourses)
  const { favoriteCourses, toggleCourse, isFavorite } = useFavoriteCourses()

  const courses = useMemo(() => data?.courses || [], [data])

  if (isLoading) return <div>Carregando...</div>

  return (
    <PageContainer>
      <BannerSection />
      <PageContentWrapper>
        <CoursesSection
          id="meus-cursos"
          title="Meus cursos"
          style={{ scrollMarginTop: '100px' }}
          className={courses.length === 0 ? 'empty-state' : ''}
        >
          {courses.length === 0 ? (
            <EmptyState
              heading="Ops... nenhum dado encontrado"
              description="Verifique novamente ou tente mais tarde."
            />
          ) : (
            courses.map((course) => (
              <CourseCard
                key={course.id}
                title={course.title}
                description={course.short_description}
                isOnline={true}
                bannerUrl={course.banner_mobile}
                isFavoriteCourse={isFavorite(course.id)}
                toggleCourse={() => toggleCourse(course.id)}
              />
            ))
          )}
        </CoursesSection>

        <CoursesSection
          title="Meus favoritos"
          className={
            courses.length === 0 || favoriteCourses.length === 0
              ? 'empty-state'
              : ''
          }
        >
          {courses.length === 0 || favoriteCourses.length === 0 ? (
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
            favoriteCourses.map((courseId) => {
              const courseData = courses.find((c) => c.id === courseId)
              if (!courseData) return null
              return (
                <CourseCard
                  key={courseData.id}
                  title={courseData.title}
                  description={courseData.short_description}
                  bannerUrl={courseData.banner_mobile}
                  isOnline={true}
                  isFavoriteCourse={isFavorite(courseData.id)}
                  toggleCourse={() => toggleCourse(courseData.id)}
                />
              )
            })
          )}
        </CoursesSection>
      </PageContentWrapper>
    </PageContainer>
  )
}
