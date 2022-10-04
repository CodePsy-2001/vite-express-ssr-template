import { PageContext } from "!/renderer";
import { mock } from '!/shop';

export async function onBeforeRender({ session, urlParsed }: PageContext) {
  const search = urlParsed?.search ?? {};
  const category = search.category ?? '전체';

  const { items } = mock;
  items.sort((a, b) => a.price - b.price);

  return {
    pageContext: {
      pageProps: {
        session,
        items: items.filter(item => category === '전체' || item.category === category),
      }
    }
  }
}

export const passToClient = ['pageProps', 'session'];
