'use client'

import React from 'react'

import Image from 'next/image'

import {
  BadgeIcon,
  BadgeText,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CourseBadge,
  CourseDescription,
  CourseTitle,
  HeartIcon,
} from './styles'
import { Button } from '../shared/Button'
import { ImageWithFallback } from '../shared/ImageWithFallback'
import { SvgHeart } from '../shared/SvgHeart'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  isOnline: boolean
  isFavoriteCourse: boolean
  bannerUrl: string | null
  toggleCourse: () => void
  navigateToCourse?: () => void
}

export function CourseCard({
  title,
  description,
  isOnline,
  isFavoriteCourse,
  bannerUrl,
  toggleCourse,
  navigateToCourse,
}: Props) {
  const courseBadge = isOnline ? 'ONLINE' : 'OFFLINE'
  const courseBadgeIcon = isOnline ? '/fire.svg' : '/lock.svg'

  return (
    <Card>
      <CardHeader>
        <ImageWithFallback src={bannerUrl} alt="Curso" />
        <HeartIcon>
          <SvgHeart
            isFavorited={isFavoriteCourse}
            toggleCourse={toggleCourse}
          />
        </HeartIcon>
        <CourseBadge>
          <BadgeIcon>
            <Image src={courseBadgeIcon} alt="Fogo" width={10} height={12} />
          </BadgeIcon>
          <BadgeText>{courseBadge}</BadgeText>
        </CourseBadge>
      </CardHeader>

      <CardContent>
        <CourseTitle>{title}</CourseTitle>
        <CourseDescription>{description}</CourseDescription>
      </CardContent>

      <CardFooter>
        <Button variant="primary" size="md-full" onClick={navigateToCourse}>
          Acessar
        </Button>
      </CardFooter>
    </Card>
  )
}
