import dotenv from 'dotenv'
dotenv.config()
import express from 'express';
import { bookingRoutes } from './routes/bookings'

const app = express();
const PORT = process.env.PORT;

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/bookings', bookingRoutes)

app.listen(PORT, () => {
    console.log(`Server running... on port ${PORT}`);
})