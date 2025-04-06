import { Params } from 'next/dist/server/request/params'

import { DetailsCourse } from '@/components/DetailsCourse'

interface Props {
  params: Promise<Params & { slug: string }>
}

export default async function Page({ params }: Props) {
  const { slug } = await params

  return <DetailsCourse slug={slug} />
}
