import { styled } from 'styled-components'

import { Skeleton } from '../DetailsCourse/styles'

export const SkeletonSectionTitle = styled(Skeleton)`
  width: 15rem;
  height: 2.4rem;
`

export const SkeletonBanner = styled(Skeleton)`
  position: relative;
  width: 100%;
  height: 46rem;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${({ theme }) => theme.media.lg} {
    height: 54rem;
  }
`

export const SkeletonCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    width: 100%;
  }

  @media (min-width: 768px) and (max-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    width: 100%;
  }

  @media (min-width: 1280px) {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: baseline;
  }
`

export const SkeletonCard = styled(Skeleton)`
  width: 100%;
  height: 40.6rem;
`
