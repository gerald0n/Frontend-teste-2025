'use client'

import React from 'react'

import { styled, css } from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode
  variant: 'primary' | 'secondary' | 'ghost'
  size: 'sm' | 'md' | 'lg' | 'xs-full' | 'md-full' | 'icon'
  children: React.ReactNode
}

const ButtonStyled = styled.button<{
  $variant: 'primary' | 'secondary' | 'ghost'
  $size: 'sm' | 'md' | 'lg' | 'xs-full' | 'md-full' | 'icon'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: 500;

  // Adicionado para centralizar os children
  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
          border: none;
          border-radius: 0;

          &:hover {
            background-color: ${theme.colors.primary.muted};
          }
        `
      case 'secondary':
        return css`
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
          border: 1px solid ${theme.colors.primary.border};
          border-radius: 2px;

          &:hover {
            background-color: ${theme.colors.primary.muted};
          }
        `
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.black};
          border: none;
          border-radius: 0;

          &:hover {
            background-color: ${theme.colors.primary.muted};
          }
        `
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case 'sm':
        return css`
          height: 31px;
          padding-inline: 22.5px;
        `
      case 'md':
        return css`
          height: 35px;
          padding-inline: 20px;

          &:hover {
            background-color: transparent;
          }
        `
      case 'lg':
        return css`
          height: 52px;
          padding-inline: 40px;
        `
      case 'xs-full':
        return css`
          height: 31px;
          width: 100%;
        `
      case 'md-full':
        return css`
          height: 48px;
          width: 100%;
        `
      case 'icon':
        return css`
          height: 20px;
          padding: 0px;
        `
    }
  }}
`

export const Button = ({ variant, size, leftIcon, ...props }: ButtonProps) => {
  return (
    <ButtonStyled $variant={variant} $size={size} {...props}>
      {leftIcon && leftIcon}
      {props.children}
    </ButtonStyled>
  )
}
