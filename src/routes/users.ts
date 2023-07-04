import express from 'express';
import { deleteUser, getUser, getUsers, postUser, updateUser } from '../controllers/userController';

export const userRoutes = express.Router();


userRoutes.get('/', getUsers);


userRoutes.get('/:id', getUser);


userRoutes.post('/', postUser);


userRoutes.delete('/:id', deleteUser);

userRoutes.patch('/:id', updateUser);
