"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const mongoose_1 = __importDefault(require("mongoose"));
//connect to mongoDb
const connectDb = () => {
    mongoose_1.default
        .connect(process.env.MONGO_URI)
        .then(() => {
        app_1.app.listen(app_1.PORT, () => {
            console.log(`Connect to db and listening... on port ${app_1.PORT}`);
        });
    })
        .catch((error) => {
        console.log(error);
    });
};
connectDb();
exports.default = connectDb;
