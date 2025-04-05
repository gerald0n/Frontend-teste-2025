'use client'

import React from 'react'

import { Section, SectionContent, SectionTitle } from './styles'

interface Props extends React.HTMLProps<HTMLElement> {
  title: string
}
export function CoursesSection({ title, ...props }: Props) {
  return (
    <Section {...props}>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent className={props.className}>
        {props.children}
      </SectionContent>
    </Section>
  )
}
