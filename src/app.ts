import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { bookingRoutes } from "./routes/bookings";
import { authenticateToken } from "./middlewares/login";
import { loginRoutes } from "./controllers/loginController";
import { infoRoute } from "./routes/info";
import { roomRoutes } from "./routes/rooms";
import { messageRoutes } from "./routes/messages";
import { userRoutes } from "./routes/users";
import cors from "cors";
import mongoose from "mongoose";
export const app = express();
export const PORT = process.env.PORT;

//connection
app.use(async (req, res, next) => {
  const checkIsConnected = mongoose.connection.readyState;
  if (!checkIsConnected) {
    try {
      await mongoose.connect(process.env.MONGO_URI as string).then(() => {
        app.listen(PORT, () => {
          console.log(`Connect to db and listening... on port ${PORT}`);
        });
      });
      next();
    } catch (err) {
      next(err);
    }
  } else {
    next();
    return;
  }
});

//middleware
app.use(express.json());
app.use(cors());
app.use("/api/login", loginRoutes);

//public routes
app.use("/api/info", infoRoute);

//private routes
app.use("/api/bookings",authenticateToken, bookingRoutes);
app.use("/api/rooms",authenticateToken, roomRoutes);
app.use("/api/messages",authenticateToken, messageRoutes);
app.use("/api/users",authenticateToken, userRoutes);
