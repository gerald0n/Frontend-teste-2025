'use client'

import { styled } from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  z-index: ${({ theme }) => theme.layers.menu};
  padding: 1.6rem 2rem;
  padding-bottom: 4rem;

  font-family: ${({ theme }) => theme.font.family.quattrocento};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.sizes.small};
  color: ${({ theme }) => theme.colors.black.main};

  ${({ theme }) => theme.media.lg} {
    padding: 2rem 6rem;
    padding-bottom: 2.9rem;
  }
`

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  max-width: ${({ theme }) => theme.grid.container};
  width: 100%;
  margin: 0 auto;

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`

const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;

  ${({ theme }) => theme.media.md} {
    margin-right: auto;
  }
`

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  ${({ theme }) => theme.media.lg} {
    flex-direction: row;
    align-items: center;
    gap: 6rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.zinc[500]};
    transition: color ${({ theme }) => theme.transition.default};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`

const LanguageSelector = styled.div`
  display: flex;
  gap: 2rem;

  button {
    background: transparent;
    border: none;
    font-family: ${({ theme }) => theme.font.family.quattrocento};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    font-size: ${({ theme }) => theme.font.sizes.small};
    color: ${({ theme }) => theme.colors.black.main};
    cursor: pointer;
    transition: color ${({ theme }) => theme.transition.fast};

    &:hover {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`
export {
  FooterContainer,
  FooterContent,
  SocialIcons,
  FooterLinks,
  LanguageSelector,
}
