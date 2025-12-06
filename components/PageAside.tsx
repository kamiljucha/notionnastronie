import * as React from 'react'
import { type Block, type ExtendedRecordMap } from 'notion-types'
import { getPageTableOfContents } from 'notion-utils'
import { TableOfContents } from 'react-notion-x'

import { PageSocial } from './PageSocial'
import styles from './styles.module.css'

export function PageAside({
  block,
  recordMap,
  isBlogPost
}: {
  block: Block
  recordMap: ExtendedRecordMap
  isBlogPost: boolean
}) {
  if (!block) {
    return null
  }

  if (isBlogPost) {
    const toc = getPageTableOfContents(block, recordMap)
    
    if (!toc || toc.length < 2) {
      return <PageSocial />
    }

    return (
      <div className={styles.pageAside}>
        <TableOfContents block={block} recordMap={recordMap} />
      </div>
    )
  }

  return <PageSocial />
}
