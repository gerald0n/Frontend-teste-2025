'use client'

import Image from 'next/image'

import { useFavoriteCourses } from '@/hooks/use-favorite-course'
import { ICourse } from '@/lib/data/models/types'

import { CourseCard } from '../CourseCard'
import { CoursesSection } from '../CourseSection'
import { EmptyState } from '../shared/EmptyState'

interface Props {
  courses: ICourse[]
}

export function FavoriteCoursesList({ courses }: Props) {
  const { favoriteCourses, toggleCourse, isFavorite } = useFavoriteCourses()
  const fallbackImage = 'https://via.placeholder.com/400x300?text=Sem+Imagem'

  return (
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
              bannerUrl={courseData.banner_mobile || fallbackImage}
              isOnline={true}
              isFavoriteCourse={isFavorite(courseData.id)}
              toggleCourse={() => toggleCourse(courseData.id)}
            />
          )
        })
      )}
    </CoursesSection>
  )
}
