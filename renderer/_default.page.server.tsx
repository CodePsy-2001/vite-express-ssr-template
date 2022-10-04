import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom/server';
import { PageShell } from './PageShell';
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr';
import logoUrl from './logo.svg';
import type { PageContextServer } from '!/renderer';


export const passToClient = ['pageProps', 'urlPathname', 'session', 'user'];

export async function render(pageContext: PageContextServer) {
  const { Page, pageProps, urlOriginal } = pageContext
  const pageHtml = renderToString(
    <StaticRouter location={urlOriginal}>
      <PageShell pageContext={pageContext}>
        <Page {...pageProps} />
      </PageShell>
    </StaticRouter>
  )

  // See https://vite-plugin-ssr.com/head
  const { documentProps } = pageContext.exports;
  const title = (documentProps && documentProps.title) || '펫노트';
  const desc = (documentProps && documentProps.description) || '반려동물 영양제 리워드 서비스';

  const documentHtml = escapeInject`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <link rel="icon" href="${logoUrl}" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="${desc}" />
  <title>${title}</title>
</head>
<body>
  <div id="page-view">${dangerouslySkipEscape(pageHtml)}</div>
</body>
</html>`

  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vite-plugin-ssr.com/page-redirection
    }
  }
}
