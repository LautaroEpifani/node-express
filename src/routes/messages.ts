import express from 'express';
import { deleteMessage, getMessage, getMessages, postMessage, updateMessage } from '../controllers/messageController';

export const messageRoutes = express.Router();


messageRoutes.get('/', getMessages);


messageRoutes.get('/:id', getMessage);


messageRoutes.post('/', postMessage);


messageRoutes.delete('/:id', deleteMessage);

messageRoutes.patch('/:id', updateMessage);