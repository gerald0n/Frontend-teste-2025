'use client'

import { styled } from 'styled-components'

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 460px;
  display: flex;
  align-items: center;
  overflow: hidden;

  ${({ theme }) => theme.media.lg} {
    height: 54rem;
  }
`

const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -2;
`

const HeroOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: -1;

  ${({ theme }) => theme.media.lg} {
    display: none;
  }
`

const HeroDesktopOverlay = styled.div`
  display: none;

  ${({ theme }) => theme.media.lg} {
    display: block;
    position: absolute;
    max-width: calc(50% - 5rem);
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.colors.primary.main};
    left: 0;
    clip-path: polygon(0 0, 100% 0, calc(100% - calc(50% - 30%)) 100%, 0 100%);
    max-width: 50%;
  }
`

const HeroContent = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: baseline;
  padding: 4rem 2rem;
  gap: 2rem;

  max-width: ${({ theme }) => theme.grid.container};
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.lg} {
    padding: 2rem 6rem;
  }

  ${({ theme }) => theme.media.xxl} {
    padding-inline: 0;
  }
`

const HeroTitle = styled.h1`
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 3.2rem; // 32px para mobile
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
  max-width: 100%;

  ${({ theme }) => theme.media.lg} {
    font-size: ${({ theme }) => theme.font.sizes.xxxxlarge};
    max-width: 480px;
  }
`

const SkeletonContainer = styled.div`
  position: relative;
  width: 100%;
  height: 460px;
  background-color: #d1d5db;
  border-radius: 0.5rem;
  overflow: hidden;
  animation: pulse 1.5s infinite ease-in-out;

  @media (min-width: 768px) {
    height: 540px;
  }

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

const SkeletonOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1rem;
  background-color: #9ca3af;
  animation: pulse 1.5s infinite ease-in-out;
`

export {
  HeroContainer,
  HeroImage,
  HeroOverlay,
  HeroDesktopOverlay,
  HeroContent,
  HeroTitle,
  SkeletonContainer,
  SkeletonOverlay,
}
