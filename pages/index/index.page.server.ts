import { PageContext } from "!/renderer";

export async function onBeforeRender({ urlParsed }: PageContext) {
  const search = urlParsed?.search ?? {};

  return {
    pageContext: {
      pageProps: {
        // 
      }
    }
  }
}

export const passToClient = ['pageProps'];
