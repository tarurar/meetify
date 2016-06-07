import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as userModel from '../model/user';
import * as workspaceModel from '../model/workspace';

export var apiRouter = express.Router();

apiRouter.use(bodyParser.json());
apiRouter.route('/')
  .get((req, res, next) => {
    res.send({ status: 'OK' });
  });

apiRouter.route('/users')
  .get((req, res, next) => {
    userModel.Users.find(null, (err, data) => {
      if (err) throw err;

      res.send({ users: data });
    })
  })
  .post((req, res, next) => {
    let item = req.body;

    userModel.Users.create(item, (err, newUser) => {
      if (err) throw err;

      res.send({ status: 'OK', userId: newUser.id });
    });
  });

apiRouter.route('/workspaces')
  .get((req, res, next) => {
    workspaceModel.Workspaces.find(null, (err, data) => {
      if (err) throw err;

      res.send({ workspaces: data });
    });
  })
  .post((req, res, next) => {
    let item = req.body;

    workspaceModel.Workspaces.create(item, (err, newWorkspace) => {
      if (err) throw err;

      res.send({ status: 'OK', workspaceId: newWorkspace.id });
    })
  })