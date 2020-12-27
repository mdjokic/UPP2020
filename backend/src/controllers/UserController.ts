import express from 'express';
import AuthenticationService from '../services/AuthenticationService';

const router = express.Router();

router.get('/data', async (request, response) => {
  if (!request['userInfo'].username) {
    response.status(401).end();
  }
  const user = await AuthenticationService.getUserData(request['userInfo'].username);
  if (!user) {
    response.status(401).end();
  }
  user.password = undefined;
  response.json(user);
});

export default router;
