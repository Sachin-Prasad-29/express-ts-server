import { Router, Request, Response, NextFunction } from 'express';
import { getUsers } from '../handlers/users';

const router = Router();

router.get('/', getUsers);

export default router;
