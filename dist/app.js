"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.app = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const bookings_1 = require("./routes/bookings");
const login_1 = require("./middlewares/login");
const loginController_1 = require("./controllers/loginController");
const info_1 = require("./routes/info");
const rooms_1 = require("./routes/rooms");
const messages_1 = require("./routes/messages");
const users_1 = require("./routes/users");
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
exports.app = (0, express_1.default)();
exports.PORT = process.env.PORT;
//connection
exports.app.use(async (req, res, next) => {
    const checkIsConnected = mongoose_1.default.connection.readyState;
    if (!checkIsConnected) {
        try {
            await mongoose_1.default.connect(process.env.MONGO_URI).then(() => {
                exports.app.listen(exports.PORT, () => {
                    console.log(`Connect to db and listening... on port ${exports.PORT}`);
                });
            });
            next();
        }
        catch (err) {
            next(err);
        }
    }
    else {
        next();
        return;
    }
});
//middleware
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use("/api/login", loginController_1.loginRoutes);
//public routes
exports.app.use("/api/info", info_1.infoRoute);
//private routes
exports.app.use("/api/bookings", login_1.authenticateToken, bookings_1.bookingRoutes);
exports.app.use("/api/rooms", login_1.authenticateToken, rooms_1.roomRoutes);
exports.app.use("/api/messages", login_1.authenticateToken, messages_1.messageRoutes);
exports.app.use("/api/users", login_1.authenticateToken, users_1.userRoutes);
