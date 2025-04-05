import { styled } from 'styled-components'

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};

  min-height: 19.6rem;
  width: 100%;
  height: 100%;
`

const CardHeader = styled.div`
  position: relative;
  width: 100%;
  min-height: 16rem;
  overflow: hidden;
`

const CardContent = styled.div`
  text-align: left;
  padding: 1.6rem 1.6rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

const CardFooter = styled.div`
  padding: 1.6rem;
  margin-top: 6rem;
`

const HeartIcon = styled.div`
  position: absolute;
  top: 1.6rem;
  right: 1.6rem;
  width: 3.6rem;
  height: 3.6rem;
  background-color: ${({ theme }) => theme.colors.black.muted};
  border-radius: ${({ theme }) => theme.border.radius.circle};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`

const CourseBadge = styled.div`
  position: absolute;
  bottom: 1.6rem;
  left: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  justify-content: flex-start;
`

const BadgeIcon = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  background-color: ${({ theme }) => theme.colors.pink};
  display: flex;
  align-items: center;
  justify-content: center;
`

const BadgeText = styled.div`
  background-color: ${({ theme }) => theme.colors.zinc[500]};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.font.family.quattrocento};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: ${({ theme }) => theme.font.sizes.small};
  padding: 0.4rem 1.2rem;
`

const CourseTitle = styled.h3`
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.sizes.xxxlarge};
`

const CourseDescription = styled.p`
  font-family: ${({ theme }) => theme.font.family.inter};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  font-size: ${({ theme }) => theme.font.sizes.medium};
`

export {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  HeartIcon,
  CourseBadge,
  BadgeIcon,
  BadgeText,
  CourseTitle,
  CourseDescription,
}
