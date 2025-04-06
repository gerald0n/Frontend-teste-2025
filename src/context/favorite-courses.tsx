'use client'

import {
  createContext,
  useReducer,
  useEffect,
  ReactNode,
  useCallback,
  useMemo,
} from 'react'

type CourseID = number

interface FavoriteCoursesContextType {
  favoriteCourses: CourseID[]
  addCourse: (courseId: CourseID) => void
  removeCourse: (courseId: CourseID) => void
  toggleCourse: (courseId: CourseID) => void
  isFavorite: (courseId: CourseID) => boolean
  count: number
}

interface InitialState {
  favoriteCourses: CourseID[]
}

type Action =
  | { type: 'ADD_COURSE'; payload: CourseID }
  | { type: 'REMOVE_COURSE'; payload: CourseID }
  | { type: 'SET_COURSES'; payload: CourseID[] }

const LOCAL_STORAGE_KEY = 'favoriteCourses'

export const FavoriteCoursesContext = createContext<
  FavoriteCoursesContextType | undefined
>(undefined)

const getInitialState = (): InitialState => {
  if (typeof window === 'undefined') {
    return { favoriteCourses: [] }
  }

  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_KEY)
    return {
      favoriteCourses: stored ? JSON.parse(stored) : [],
    }
  } catch (error) {
    console.error('Failed to parse favorite courses from localStorage', error)
    return { favoriteCourses: [] }
  }
}

const favoriteCoursesReducer = (
  state: InitialState,
  action: Action,
): InitialState => {
  switch (action.type) {
    case 'ADD_COURSE':
      if (state.favoriteCourses.includes(action.payload)) {
        return state
      }
      return {
        favoriteCourses: [...state.favoriteCourses, action.payload],
      }

    case 'REMOVE_COURSE':
      return {
        favoriteCourses: state.favoriteCourses.filter(
          (course) => course !== action.payload,
        ),
      }

    case 'SET_COURSES':
      return {
        favoriteCourses: action.payload,
      }

    default:
      return state
  }
}

export function FavoriteCoursesProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(
    favoriteCoursesReducer,
    getInitialState(),
  )
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    try {
      localStorage.setItem(
        LOCAL_STORAGE_KEY,
        JSON.stringify(state.favoriteCourses),
      )
    } catch (error) {
      console.error('Failed to save favorite courses to localStorage', error)
    }
  }, [state.favoriteCourses])

  const addCourse = useCallback((courseId: CourseID) => {
    dispatch({ type: 'ADD_COURSE', payload: courseId })
  }, [])

  const removeCourse = useCallback((courseId: CourseID) => {
    dispatch({ type: 'REMOVE_COURSE', payload: courseId })
  }, [])

  const toggleCourse = useCallback(
    (courseId: CourseID) => {
      const actionType = state.favoriteCourses.includes(courseId)
        ? 'REMOVE_COURSE'
        : 'ADD_COURSE'
      dispatch({ type: actionType, payload: courseId })
    },
    [state.favoriteCourses],
  )

  const isFavorite = useCallback(
    (courseId: CourseID) => {
      return state.favoriteCourses.includes(courseId)
    },
    [state.favoriteCourses],
  )

  const count = useMemo(
    () => state.favoriteCourses.length,
    [state.favoriteCourses],
  )

  const value = useMemo(
    () => ({
      favoriteCourses: state.favoriteCourses,
      addCourse,
      removeCourse,
      toggleCourse,
      isFavorite,
      count,
    }),
    [
      state.favoriteCourses,
      addCourse,
      removeCourse,
      toggleCourse,
      isFavorite,
      count,
    ],
  )

  return (
    <FavoriteCoursesContext.Provider value={value}>
      {children}
    </FavoriteCoursesContext.Provider>
  )
}

export default FavoriteCoursesProvider
