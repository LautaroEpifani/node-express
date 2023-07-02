import express from 'express';
import { deleteRoom, getRoom, getRooms, postRoom, updateRoom } from '../controllers/roomController';

export const roomRoutes = express.Router();


roomRoutes.get('/', getRooms);


roomRoutes.get('/:id', getRoom);


roomRoutes.post('/', postRoom);


roomRoutes.delete('/:id', deleteRoom);

roomRoutes.patch('/:id', updateRoom);