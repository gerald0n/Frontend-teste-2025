'use client'

import { useFavoriteCourses } from '@/hooks/use-favorite-course'
import { ICourse } from '@/lib/data/models/types'

import { CourseCard } from '../CourseCard'
import { CoursesSection } from '../CourseSection'
import { EmptyState } from '../shared/EmptyState'

interface Props {
  courses: ICourse[]
}

export function CoursesList({ courses }: Props) {
  const { toggleCourse, isFavorite } = useFavoriteCourses()

  return (
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
  )
}
