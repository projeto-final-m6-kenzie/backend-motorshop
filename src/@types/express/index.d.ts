import { IComments, IUser, IUserRequest } from './../../interfaces/users/index';
import * as express from 'express';
import { IAddress } from '../../interfaces/address';

declare global {
  namespace Express {
    export interface Request {
      user: {
        id: string;
        isAnnouncer: boolean;
        token: string
      };
      newUser: IUser;
      address: IAddress
      newComments: IComments
    }
  }
}
