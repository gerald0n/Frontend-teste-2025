'use client'

import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import {
  FooterContainer,
  FooterContent,
  FooterLinks,
  LanguageSelector,
  SocialIcons,
} from './style'

export function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <SocialIcons>
          {['whatsapp', 'youtube', 'facebook', 'instagram'].map((icon) => (
            <Image
              key={icon}
              src={`/${icon}.svg`}
              alt={icon}
              width={16}
              height={16}
            />
          ))}
        </SocialIcons>

        <FooterLinks>
          <Link href="#">Termos de uso</Link>
          <Link href="#">Política de privacidade</Link>
          <LanguageSelector>
            {['PT', 'EN', 'ES'].map((lang) => (
              <button key={lang}>{lang}</button>
            ))}
          </LanguageSelector>
        </FooterLinks>
      </FooterContent>
    </FooterContainer>
  )
}
