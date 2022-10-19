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
const isProduction = process.env.NODE_ENV === 'production';
const port = 3000;

if (isProduction) { env({ path: path.join(root, '.env') }); }
else { env({ path: path.join(root, '.env.local') }); }


const app = express();

(async () => {
  if (isProduction) {
    app.use(compression());
    app.use(sirv(`${root}/dist/client`));
    return;
  }

  const viteDevServer = await createServer({ root, server: { middlewareMode: true } });
  app.use(viteDevServer.middlewares);
})();

app.get('*', pagesRouter);
app.get('/api', apiRouter);

// connect to mongodb
// mongoose
//   .connect(process.env.MONGO_URL ?? '')
//   .then(() => console.log('Successfully connected to mongodb'))
//   .catch((e) => console.error(e))


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
