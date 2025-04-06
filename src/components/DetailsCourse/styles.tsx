'use client'

import { styled } from 'styled-components'

import { ICourse } from '@/lib/data/models/types'

const ImageContainer = styled.div<{ $course: ICourse }>`
  width: 100%;
  height: 100%;
  min-height: 14rem;
  background-image: url(${({ $course }) => $course.banner_mobile});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.colors.zinc[300]};

  ${({ theme }) => theme.media.md} {
    min-height: 24rem;
  }

  ${({ theme }) => theme.media.lg} {
    background-image: url(${({ $course }) => $course.banner});
    min-height: 54rem;
  }
`

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  max-width: ${({ theme }) => theme.grid.container};
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.md} {
    display: grid;
    grid-template-columns: 11fr 1fr;
    gap: 6.4rem;

    button {
      order: 2;
    }
  }

  ${({ theme }) => theme.media.lg} {
    padding-inline: 6rem;
  }

  ${({ theme }) => theme.media.xl} {
    padding-inline: 0;
  }
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const Title = styled.h1`
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.sizes.xxxlarge};
  color: ${({ theme }) => theme.colors.black.main};
`

const Description = styled.p`
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.black.main};
`

const FloatButton = styled.button`
  position: fixed;
  right: 3rem;
  bottom: 25%;
  transform: translateY(50%);
  background-color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.circle};
  padding: 1rem;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  height: 5.6rem;
  width: 5.6rem;
  z-index: ${({ theme }) => theme.layers.modal};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: box-shadow ${({ theme }) => theme.transition.default};

  ${({ theme }) => theme.media.lg} {
    bottom: 10%;
  }

  &:hover {
    box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.2);
  }
`

const LinkInput = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colors.zinc[100]};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  overflow: hidden;

  input {
    flex: 1;
    padding: 1rem 1.2rem;
    border: none;
    outline: none;
    font-size: ${({ theme }) => theme.font.sizes.medium};
    font-family: ${({ theme }) => theme.font.family.inter};
    color: ${({ theme }) => theme.colors.black.main};
    background-color: ${({ theme }) => theme.colors.white};
  }
`

const LinkCopyButton = styled.button`
  background: none;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.colors.zinc[100]};
  padding: 0 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`

const WhatsappShareButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: ${({ theme }) => theme.border.radius.medium};
  padding: 1.2rem 0;
  width: 100%;
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-size: ${({ theme }) => theme.font.sizes.medium};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  cursor: pointer;

  transition: filter ${({ theme }) => theme.transition.fast};

  &:hover {
    filter: brightness(0.9);
  }
`

const LinkInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.6rem;
  gap: 1.6rem;
`

export const Skeleton = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc[300]};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  animation: pulse 1.5s infinite ease-in-out;

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`

const SkeletonImage = styled(Skeleton)`
  width: 100%;
  height: 14rem;

  ${({ theme }) => theme.media.md} {
    height: 24rem;
  }

  ${({ theme }) => theme.media.lg} {
    height: 54rem;
  }
`

const SkeletonText = styled(Skeleton)<{ $width?: string }>`
  height: 2rem;
  width: ${({ $width }) => $width || '100%'};
`

export {
  ImageContainer,
  StyledContainer,
  Content,
  Title,
  Description,
  FloatButton,
  LinkInput,
  LinkCopyButton,
  WhatsappShareButton,
  LinkInputWrapper,
  SkeletonImage,
  SkeletonText,
}
