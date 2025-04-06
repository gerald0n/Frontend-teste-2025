'use client'

import { useCallback, useEffect, useState } from 'react'

import { usePathname } from 'next/navigation'

import { useFavoriteCourses } from '@/hooks/use-favorite-course'
import { useFetchData } from '@/hooks/useFetchData'
import { getCourseBySlug } from '@/lib/data/services/api'

import {
  Content,
  Description,
  FloatButton,
  ImageContainer,
  LinkCopyButton,
  LinkInput,
  StyledContainer,
  LinkInputWrapper,
  Title,
  WhatsappShareButton,
  SkeletonImage,
  SkeletonText,
} from './styles'
import {
  Modal,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalTrigger,
} from '../Modal'
import { Button } from '../shared/Button'
import { PageContainer } from '../shared/PageContainer'
import { PageContentWrapper } from '../shared/PageContentWrapper'
import { SvgHeart } from '../shared/SvgHeart'
import { SvgIcon } from '../shared/SvgIcon'

type Props = {
  slug: string
}

export function DetailsCourse({ slug }: Props) {
  const pathname = usePathname()

  const [courseUrl, setCourseUrl] = useState('')
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCourseUrl(`${window.location.origin}${pathname}`)
    }
  }, [pathname])

  const fetchCourse = useCallback(() => getCourseBySlug(slug), [slug])
  const { data: course, isLoading } = useFetchData(fetchCourse)

  const { isFavorite, toggleCourse } = useFavoriteCourses()

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(courseUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 10000)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Erro ao copiar o link:', err)
    }
  }

  const handleSendWhatsapp = (title: string) => {
    const message = encodeURIComponent(
      `Olha esse curso: ${title} - ${courseUrl}`,
    )
    const whatsappUrl = `${process.env.NEXT_PUBLIC_WHATSAPP_API_URL}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (isLoading) {
    return (
      <PageContainer>
        <SkeletonImage />
        <PageContentWrapper>
          <StyledContainer>
            <SkeletonText $width="30%" />
            <Content>
              <SkeletonText $width="60%" />
            </Content>
          </StyledContainer>
        </PageContentWrapper>
      </PageContainer>
    )
  }

  if (!course) return null

  const isFavorited = isFavorite(course.id)

  return (
    <PageContainer>
      <ImageContainer $course={course} />

      <PageContentWrapper>
        <StyledContainer>
          <Button
            variant="secondary"
            size="xs-full"
            leftIcon={<SvgHeart isFavorited={isFavorited} color="#292D32" />}
            onClick={() => toggleCourse(course.id)}
          >
            {isFavorited ? 'Favoritado' : 'Favoritar'}
          </Button>

          <Content>
            <Title>{course.title}</Title>
            <Description>{course.long_description}</Description>

            <Modal>
              <ModalTrigger asChild>
                <FloatButton>
                  <SvgIcon.Share />
                </FloatButton>
              </ModalTrigger>

              <ModalContent size="md">
                <ModalHeader>
                  Compartilhar curso
                  <ModalClose asIcon />
                </ModalHeader>
                <LinkInputWrapper>
                  <LinkInput>
                    <input type="text" value={courseUrl} readOnly />
                    <LinkCopyButton
                      onClick={handleCopyLink}
                      style={{
                        cursor: copied ? 'default' : 'pointer',
                        backgroundColor: copied ? '#F0F0F0' : '#FFFFFF',
                      }}
                    >
                      {copied ? <SvgIcon.CheckCircle /> : <SvgIcon.Copy />}
                    </LinkCopyButton>
                  </LinkInput>

                  <WhatsappShareButton
                    onClick={() => handleSendWhatsapp(course.title)}
                  >
                    <SvgIcon.WhatsApp width={20} height={20} color="#FFFFFF" />
                    Compartilhar via Whatsapp
                  </WhatsappShareButton>
                </LinkInputWrapper>

                <ModalFooter>
                  <ModalClose />
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Content>
        </StyledContainer>
      </PageContentWrapper>
    </PageContainer>
  )
}
