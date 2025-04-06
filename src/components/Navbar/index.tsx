import React from 'react'

import Link from 'next/link'

import {
  ButtonContainer,
  IconWrapper,
  LogoContainer,
  NavbarContainer,
  NavbarContent,
  NavbarSection,
  SearchText,
} from './style'
import { Button } from '../shared/Button'
import { SvgIcon } from '../shared/SvgIcon'

export function Navbar() {
  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarSection $gap="3">
          <IconWrapper className="menu">
            <SvgIcon.Menu />
          </IconWrapper>
          <IconWrapper className="search">
            <SvgIcon.Search />
            <SearchText>Busca</SearchText>
          </IconWrapper>
        </NavbarSection>

        <LogoContainer>
          <Link href="/">
            <SvgIcon.Logo />
          </Link>
        </LogoContainer>

        <NavbarSection $justify="flex-end">
          <ButtonContainer className="register">
            <Button variant="ghost" size="md" leftIcon={<SvgIcon.Register />}>
              Cadastre-se
            </Button>
          </ButtonContainer>

          <ButtonContainer className="login">
            <Button variant="primary" size="md" leftIcon={<SvgIcon.Login />}>
              <p>Entrar</p>
            </Button>
          </ButtonContainer>
        </NavbarSection>
      </NavbarContent>
    </NavbarContainer>
  )
}
