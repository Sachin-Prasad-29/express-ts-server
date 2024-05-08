import { Request, Response } from 'express';

export function getUsers(req: Request, res: Response) {
    console.log('ehllo');
    res.send([]);
}
