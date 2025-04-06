'use client'

import React, { useState } from 'react'

import Link from 'next/link'

import {
  ButtonContainer,
  IconWrapper,
  LogoContainer,
  NavbarContainer,
  NavbarContent,
  NavbarSection,
} from './style'
import { Drawer, DrawerHeader, DrawerTrigger } from '../Drawer'
import { SearchInput } from '../SearchInput'
import { Button } from '../shared/Button'
import { SvgIcon } from '../shared/SvgIcon'

export function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <NavbarContainer>
      <NavbarContent>
        <NavbarSection $gap="3">
          <DrawerTrigger asChild onOpen={() => setIsDrawerOpen(true)}>
            <IconWrapper className="menu">
              <SvgIcon.Menu />
            </IconWrapper>
          </DrawerTrigger>

          <Drawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
            <DrawerHeader onClose={() => setIsDrawerOpen(false)}>
              <SvgIcon.Logo />
            </DrawerHeader>
            <div style={{ paddingBlock: '16px' }}>
              <Button variant="ghost" size="md" leftIcon={<SvgIcon.Register />}>
                Cadastre-se
              </Button>
            </div>
          </Drawer>

          <SearchInput />
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
