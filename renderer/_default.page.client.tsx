import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PageShell } from './PageShell'
import type { PageContextClient } from '!/renderer'

export { render }

async function render(pageContext: PageContextClient) {
  const { Page, pageProps } = pageContext
  hydrateRoot(
    document.getElementById('page-view')!,
    <BrowserRouter>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </BrowserRouter>
  )
}
