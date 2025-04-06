'use client'

import React from 'react'

import Image from 'next/image'

import {
  MiniCard,
  MiniCardBanner,
  MiniCardContent,
  MiniCardDescription,
  MiniCardTitle,
} from './styles'
import { Button } from '../shared/Button'

interface MiniCourseCardProps {
  title: string
  description: string
  bannerUrl: string | null
  onNavigate: () => void
}

export function MiniCourseCard({
  title,
  description,
  bannerUrl,
  onNavigate,
}: MiniCourseCardProps) {
  return (
    <MiniCard>
      <MiniCardBanner>
        <Image
          src={bannerUrl || '/placeholder.png'}
          alt="Curso"
          width={80}
          height={80}
          style={{ borderRadius: '8px' }}
        />
      </MiniCardBanner>
      <MiniCardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <MiniCardTitle>{title}</MiniCardTitle>
            <MiniCardDescription>{description}</MiniCardDescription>
          </div>
          <Button variant="ghost" size="sm" onClick={onNavigate}>
            Acessar
          </Button>
        </div>
      </MiniCardContent>
    </MiniCard>
  )
}
