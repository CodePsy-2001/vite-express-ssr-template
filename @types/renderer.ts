import type { Session, User } from './user';

import type { PageContextBuiltIn } from 'vite-plugin-ssr';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client' // When using Server Routing
// import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client/router' // When using Client Routing

export type Page = (pageProps: PageProps) => React.ReactElement
export interface PageProps { }

export type PageContextCustom = {
  Page: Page
  pageProps?: PageProps
  session: Session
  user?: User
  haha: any
  urlPathname: string
  exports: {
    documentProps?: {
      title?: string
      description?: string
    }
  }
}

export type PageContextServer = PageContextBuiltIn<Page> & PageContextCustom;
export type PageContextClient = PageContextBuiltInClient<Page> & PageContextCustom;

export type PageContext = PageContextClient | PageContextServer;
