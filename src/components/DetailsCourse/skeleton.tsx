import { Content, SkeletonImage, SkeletonText, StyledContainer } from './styles'
import { PageContainer } from '../shared/PageContainer'
import { PageContentWrapper } from '../shared/PageContentWrapper'

export function Skeleton() {
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
