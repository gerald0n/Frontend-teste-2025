'use client'

import React from 'react'

import { styled, css } from 'styled-components'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  leftIcon?: React.ReactNode
  variant: 'primary' | 'secondary' | 'ghost' | 'black'
  size: 'sm' | 'md' | 'lg' | 'xs-full' | 'md-full' | 'icon'
  children: React.ReactNode
}

const ButtonStyled = styled.button<{
  $variant: 'primary' | 'secondary' | 'ghost' | 'black'
  $size: 'sm' | 'md' | 'lg' | 'xs-full' | 'md-full' | 'icon'
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px 20px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.transition.default};
  font-size: ${({ theme }) => theme.font.sizes.large};

  & > * {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return css`
          background-color: ${theme.colors.primary.main};
          color: ${theme.colors.white};
          border: none;
          border-radius: ${theme.border.radius.none};

          &:hover {
            background-color: ${theme.colors.primary.muted};
          }
        `
      case 'secondary':
        return css`
          background-color: ${theme.colors.white};
          color: ${theme.colors.black.main};
          border: 1px solid ${theme.colors.primary.border};
          border-radius: ${theme.border.radius.small};

          &:hover {
            background-color: ${theme.colors.primary.muted};
          }
        `
      case 'ghost':
        return css`
          background-color: transparent;
          color: ${theme.colors.black.main};
          border: none;
          border-radius: ${theme.border.radius.none};

          &:hover {
            background-color: ${theme.colors.primary.muted};
          }
        `
      case 'black':
        return css`
          background-color: ${theme.colors.black.main};
          color: ${theme.colors.black.foreground};
          border: none;
          border-radius: ${theme.border.radius.none};

          &:hover {
            background-color: ${theme.colors.black.muted};
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
