import sirv from 'sirv';
import { exit } from 'process';
import ssrPagesRouter from '../routes/ssr';

import app from './ssr'

const root = `${__dirname}/..`;
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  console.error('NODE_ENV가 production이 아닌데 서버를 production으로 실행하려고 하고 있습니다.');
  exit(1);
}

app.use(sirv(`${root}/dist/client`));

app.get('*', ssrPagesRouter);

export default app;
