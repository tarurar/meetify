import * as express from 'express';
import * as bodyParser from 'body-parser';

export var apiRouter = express.Router();

apiRouter.use(bodyParser.json());
apiRouter.route('/')
  .get((req, res, next) => {
    res.send({ status: 'OK' });
  });