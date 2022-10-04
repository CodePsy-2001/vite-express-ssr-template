import path from 'path';
import { config as env } from 'dotenv';
import express from 'express';
import compression from 'compression';
// import session from 'express-session';
// import Redis from 'ioredis';
// import connectRedis from 'connect-redis';
// import mongoose from "mongoose"

const root = `${__dirname}/..`;
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  env({ path: path.join(root, '.env') });
} else {
  env({ path: path.join(root, '.env.local') });
}


const app = express();

app.use(compression());

// connect to mongodb
// mongoose
//   .connect(process.env.MONGO_URL ?? '')
//   .then(() => console.log('Successfully connected to mongodb'))
//   .catch((e) => console.error(e))

// 3. Register `session` middleware with `upstash redis`
// const RedisStore = connectRedis(session);
// const client = new Redis(process.env.SESSION_URI ?? '');
// app.use(session({
//   secret: 'keyboard cat',
//   resave: false,
//   saveUninitialized: true,
//   cookie: { secure: false, maxAge: 60 * 60 * 24 * 7 * 1000 },
//   store: new RedisStore({ client })
// }));

export default app;
