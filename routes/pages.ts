import type { NextFunction, Request, Response } from 'express';
import { Router } from "express";
import { renderPage } from "vite-plugin-ssr";

const ssrPagesRouter = Router();

async function ssrPages(req: Request, res: Response, next: NextFunction) {
  // 로그인 리다이렉트
  // 페이지를 렌더하기 전에 로그인을 거른다
  // if (req.cookies.user === undefined) {
  //   res.redirect('/login');
  //   return;
  // }

  const pageContextInit = {
    urlOriginal: req.originalUrl,
  };
  const pageContext = await renderPage(pageContextInit);
  const { httpResponse, urlOriginal } = pageContext;
  if (!httpResponse) { return next(); }

  const { body, statusCode, contentType } = httpResponse;
  res.status(statusCode).type(contentType).send(body);
}

ssrPagesRouter.use('*', ssrPages);

export default ssrPagesRouter;
