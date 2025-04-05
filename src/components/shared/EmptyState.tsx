'use client'

import React from 'react'

import { styled } from 'styled-components'

interface Props extends React.ComponentProps<'div'> {
  iconComponent?: React.ReactNode
  heading?: string
  description?: string
}

export function EmptyState({
  iconComponent,
  heading,
  description,
  ...props
}: Props) {
  return (
    <Container {...props}>
      {iconComponent && <IconWrapper>{iconComponent}</IconWrapper>}
      {heading && <Heading>{heading}</Heading>}
      {description && <Description>{description}</Description>}
      {props.children}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.4rem;
  height: 13.7rem;
  text-align: center;
  gap: 1rem;
`

const Heading = styled.h3`
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.weight.semibold};
  font-family: ${({ theme }) => theme.font.family.inter};
`

const Description = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.large};
  color: ${({ theme }) => theme.colors.zinc[300]};
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: ${({ theme }) => theme.font.weight.normal};
`

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.zinc[100]};
  border-radius: ${({ theme }) => theme.border.radius.circle};
  background-color: ${({ theme }) => theme.colors.white};
`
