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
exports.app = (0, express_1.default)();
exports.PORT = process.env.PORT;
const corsOptions = {
    // optionsSuccessStatus: 200,
    credentials: true,
    origin: "http://mirandadashboard.s3-website-eu-west-1.amazonaws.com",
    headers: {
        'Access-Control-Allow-Origin': '*',
    },
};
//middleware
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)(corsOptions));
exports.app.use('/api/login', loginController_1.loginRoutes);
exports.app.use((req, res, next) => {
    if (req.method === 'OPTIONS')
        return res.end();
    next();
});
//public routes
exports.app.use('/api/info', info_1.infoRoute);
//private routes
exports.app.use('/api/bookings', bookings_1.bookingRoutes);
exports.app.use('/api/rooms', login_1.authenticateToken, rooms_1.roomRoutes);
exports.app.use('/api/messages', login_1.authenticateToken, messages_1.messageRoutes);
exports.app.use('/api/users', login_1.authenticateToken, users_1.userRoutes);
