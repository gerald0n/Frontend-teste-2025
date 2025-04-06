'use client'

import { styled } from 'styled-components'

const NavbarContainer = styled.nav`
  display: flex;
  width: 100%;
  padding: 16px 20px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: ${({ theme }) => theme.layers.menu};

  ${({ theme }) => theme.media.lg} {
    padding: 20px 60px;
  }
`

const NavbarContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${({ theme }) => theme.grid.container};
  margin: 0 auto;
  position: relative;
`

const NavbarSection = styled.div<{ $justify?: string; $gap?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${({ $gap = '0' }) => `${$gap}rem`};
  justify-content: ${({ $justify = 'flex-start' }) => $justify};
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  &.menu {
    ${({ theme }) => theme.media.lg} {
      display: none;
    }
  }
`

const SearchText = styled.p`
  display: none;
  margin-left: 8px;
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.black.main};

  ${({ theme }) => theme.media.lg} {
    display: block;
  }
`

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`

const ButtonContainer = styled.div`
  &.register {
    button {
      display: none;
    }

    ${({ theme }) => theme.media.lg} {
      button {
        display: inline-flex;
      }
    }
  }

  &.login {
    width: 32px;
    height: 32px;

    button {
      padding: 0;
      border: none;
      background-color: transparent;

      p {
        display: none;
      }
    }

    .responsive-icon {
      width: 16px;
      height: 16px;
      fill: white;
    }

    ${({ theme }) => theme.media.lg} {
      width: auto;
      height: auto;

      .responsive-icon {
        width: 16px !important;
        height: 16px !important;

        path {
          fill: white;
        }
      }

      button {
        padding: 9px 20px;
        background-color: ${({ theme }) => theme.colors.primary.main};

        p {
          display: block;
        }
      }
    }
  }
`

export {
  NavbarContainer,
  NavbarContent,
  NavbarSection,
  IconWrapper,
  SearchText,
  LogoContainer,
  ButtonContainer,
}
