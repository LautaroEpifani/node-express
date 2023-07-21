import dotenv from 'dotenv';
dotenv.config()
import express from 'express';
import { bookingRoutes } from './routes/bookings'
import { authenticateToken } from './middlewares/login';
import { loginRoutes } from './controllers/loginController';
import { infoRoute } from './routes/info';
import { roomRoutes } from './routes/rooms';
import { messageRoutes } from './routes/messages';
import { userRoutes } from './routes/users';
import cors from 'cors';
export const app = express();
export const PORT = process.env.PORT;
const corsOptions = {
    // optionsSuccessStatus: 200,
    // credentials: true, 
    origin: ["http://localhost:3000"],
};

//middleware
app.use(express.json());
app.use(cors(corsOptions))
app.use('/api/login',  loginRoutes);

app.use((req, res, next) => {
    if (req.method === 'OPTIONS')
        return res.end();
    next()
});


//public routes
app.use('/api/info', infoRoute);

//private routes
app.use('/api/bookings', authenticateToken, bookingRoutes);
app.use('/api/rooms', authenticateToken, roomRoutes);
app.use('/api/messages', authenticateToken, messageRoutes);
app.use('/api/users', authenticateToken, userRoutes);
