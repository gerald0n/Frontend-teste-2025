import { Suspense } from 'react'

import { NotFoundComponent } from '@/components/NotFound'

export default function NotFound() {
  return (
    <Suspense fallback={null}>
      <NotFoundComponent />
    </Suspense>
  )
}
