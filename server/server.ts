import path from 'path';
import { config as env } from 'dotenv';
import express from 'express';
import compression from 'compression';
import sirv from 'sirv';
import { createServer } from 'vite';
import pagesRouter from '../routes/pages';
import apiRouter from '../routes/api';
// import mongoose from "mongoose"

const root = `${__dirname}/..`;
const isProduction = process.env.ENVIRONMENT === 'production';
env({ path: path.join(root, '.env') });
env({ path: path.join(root, '.env.local') });
const port = parseInt(process.env.PORT ?? '3000', 10);


const app = express();


async function startDevServer() {
  const viteDevServer = await createServer({
    root,
    server: { middlewareMode: true }
  });

  app.use(viteDevServer.middlewares);

  app.get('*', pagesRouter);
  app.get('/api', apiRouter);

  app.listen(port, () => {
    console.log(`Dev Server running at http://localhost:${port}`);
  });
}


function startProdServer() {
  app.use(compression({ threshold: 0 }));
  app.use(sirv(`${root}/dist/client`, { dev: false }));
  app.use('*', pagesRouter);
  app.use('/api', apiRouter);

  app.listen(port, () => {
    console.log(`Production Server running at http://localhost:${port}`);
  });
}


if (isProduction) { startProdServer(); }
else { startDevServer(); }
