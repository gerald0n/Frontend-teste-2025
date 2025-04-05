import React from 'react'

import { styled } from 'styled-components'

interface Props extends React.HTMLAttributes<HTMLImageElement> {
  src?: string | null
  alt?: string
}

export function ImageWithFallback({ src, alt, ...props }: Props) {
  const fallbackImage = 'https://via.placeholder.com/400x300?text=Sem+Imagem'

  return <CourseImage src={src || fallbackImage} alt={alt} {...props} />
}

const CourseImage = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
`
