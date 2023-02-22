import { Express } from 'express';
import userRouter from './user.routes';
import vehicleRouter from './vehicle.routes';

const appRouter = (app: Express) => {
  app.use('/users', userRouter());
  app.use('/vehicles', vehicleRouter())
};

export default appRouter;