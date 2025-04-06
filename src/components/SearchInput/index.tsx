'use client'

import React from 'react'

import { useSearch } from '@/hooks/use-search'

import { MiniCourseCard } from '../CourseCard/MiniCourseCard'
import { Modal, ModalContent, ModalHeader, ModalTrigger } from '../Modal'
import {
  LoadingOverlay,
  LoadingText,
  ResultsContainer,
  SearchContainer,
  SearchField,
  Spinner,
} from './styles'
import { IconWrapper, SearchText } from '../Navbar/style'
import { EmptyState } from '../shared/EmptyState'
import { SvgIcon } from '../shared/SvgIcon'

const MODAL_HEIGHT = '400px'

export function SearchInput() {
  const {
    searchTerm,
    handleSearchChange,
    isSearchModalOpen,
    handleOpenModal,
    handleCloseModal,
    courses,
    isLoading,
    isNavigating,
    navigatingCourse,
    handleNavigateToCourse,
  } = useSearch()

  return (
    <>
      <ModalTrigger asChild onOpen={handleOpenModal}>
        <IconWrapper className="search">
          <SvgIcon.Search />
          <SearchText>Busca</SearchText>
        </IconWrapper>
      </ModalTrigger>

      <Modal isOpen={isSearchModalOpen} onClose={handleCloseModal}>
        <ModalContent
          size="md"
          style={{
            height: MODAL_HEIGHT,
            marginInline: '20px',
            overflow: 'hidden',
          }}
        >
          <ModalHeader onClose={handleCloseModal}>Buscar</ModalHeader>
          <SearchContainer>
            <SearchField
              type="text"
              placeholder="Digite sua busca..."
              value={searchTerm}
              onChange={handleSearchChange}
              autoFocus
              disabled={isNavigating}
            />
            <ResultsContainer>
              {(isLoading || isNavigating) && (
                <LoadingOverlay>
                  <Spinner />
                  <LoadingText>
                    {isNavigating
                      ? `Acessando ${navigatingCourse}...`
                      : 'Carregando resultados...'}
                  </LoadingText>
                </LoadingOverlay>
              )}

              {courses.length > 0 ? (
                courses.map((course) => (
                  <MiniCourseCard
                    key={course.id}
                    title={course.title}
                    bannerUrl={course.banner}
                    description={course.short_description}
                    onNavigate={() =>
                      handleNavigateToCourse(course.slug, course.title)
                    }
                  />
                ))
              ) : searchTerm ? (
                <EmptyState description="A pesquisa não retornou nenhum resultado." />
              ) : (
                <EmptyState description="Digite algo para buscar cursos." />
              )}
            </ResultsContainer>
          </SearchContainer>
        </ModalContent>
      </Modal>
    </>
  )
}
