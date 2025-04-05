'use client'

import { useContext } from 'react'

import { FavoriteCoursesContext } from '@/context/favorite-courses'

export const useFavoriteCourses = () => {
  const context = useContext(FavoriteCoursesContext)
  if (context === undefined) {
    throw new Error(
      'useFavoriteCourses must be used within a FavoriteCoursesProvider',
    )
  }
  return context
}
