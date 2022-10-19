import { Router } from "express";

const apiRouter = Router();

apiRouter
  .get('/hi', (req, res) => {
    res.send('Hello World!');
  });


export default apiRouter;