import { CreateUserDto } from 'dtos/CreateUser.dto';
import { Request, Response } from 'express';

// get All User
export function getUsers(req: Request, res: Response) {
    console.log('ehllo');
    res.send([]);
}

// get Single User
export function getUserById(req: Request, res: Response) {
    res.send(req.params.id);
}

// Create a User
export function createUser(req: Request<{}, {}, CreateUserDto>, res: Response) {
      
}
