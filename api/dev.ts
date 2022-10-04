import app from './ssr'
import ssrPagesRouter from '../routes/ssr';

import { createServer } from 'vite';
import { exit } from 'process';

const root = `${__dirname}/..`;
const isProduction = process.env.NODE_ENV === 'production';

const port = 3000;

if (isProduction) {
  console.error('NODE_ENV가 production인데 개발용 서버를 실행하려고 하고 있습니다.');
  exit();
}

async function startServer() {
  const viteDevServer = (
    await createServer({
      root,
      server: { middlewareMode: true }
    })
  );
  app.use(viteDevServer.middlewares);

  app.get('*', ssrPagesRouter);

  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
};

startServer();
