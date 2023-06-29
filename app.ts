import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import { bookingRoutes } from './routes/bookings'
import { authenticateToken } from './middlewares/login';
import { loginRoutes } from './controllers/loginController';
import { infoRoute } from './routes/info';

export const app = express();
export const PORT = process.env.PORT;

//middleware
app.use(express.json());
app.use('/api/login',  loginRoutes);

//public routes
app.use('/api/info', infoRoute)

//private routes
app.use('/api/bookings', authenticateToken, bookingRoutes);

