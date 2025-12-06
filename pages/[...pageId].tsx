import { type GetStaticProps } from 'next'

import { NotionPage } from '@/components/NotionPage'
import { domain, isDev } from '@/lib/config'
import { getSiteMap } from '@/lib/get-site-map'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import { type PageProps, type Params } from '@/lib/types'

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const rawParam = context.params?.pageId

  const slug = Array.isArray(rawParam)
    ? rawParam[rawParam.length - 1]
    : (rawParam as string) || ''

  try {
    const siteMap = await getSiteMap()

    let pageId = slug

    if (siteMap?.canonicalPageMap) {
      const foundId = Object.keys(siteMap.canonicalPageMap).find(
        (key) => siteMap.canonicalPageMap[key] === slug
      )
      
      if (foundId) {
        pageId = foundId
      }
    }

    const props = await resolveNotionPage(domain, pageId)

    return { props }
  } catch (err) {
    console.error('page error', domain, slug, err)
    throw err
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  return {
    paths: [],
    fallback: 'blocking'
  }
}

export default function NotionDomainDynamicPage(props: PageProps) {
  return <NotionPage {...props} />
}
