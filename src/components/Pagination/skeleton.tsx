import { SkeletonNavButton, SkeletonPageButton, SkeletonWrapper } from './style'

export function PaginationSkeleton() {
  return (
    <SkeletonWrapper>
      <SkeletonNavButton />
      <div style={{ display: 'flex', gap: '8px' }}>
        {Array.from({ length: 3 }).map((_, index) => (
          <SkeletonPageButton key={index} />
        ))}
      </div>
      <SkeletonNavButton />
    </SkeletonWrapper>
  )
}
