"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bookings_1 = require("../models/bookings");
const rooms_1 = require("../models/rooms");
const users_1 = require("../models/users");
const messages_1 = require("../models/messages");
const server_1 = __importDefault(require("../server"));
const bookingsFaker_1 = require("../faker/bookingsFaker");
const roomsFaker_1 = require("../faker/roomsFaker");
const messagesFaker_1 = require("../faker/messagesFaker");
const usersFaker_1 = require("../faker/usersFaker");
(0, server_1.default)();
function postBookingsMongo() {
    return __awaiter(this, void 0, void 0, function* () {
        yield bookings_1.bookingModel.collection.drop();
        yield bookings_1.bookingModel.insertMany(bookingsFaker_1.bookingsList);
    });
}
;
const postUsersMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    yield users_1.userModel.collection.drop();
    users_1.userModel.insertMany(usersFaker_1.usersList);
});
const postRoomsMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    yield rooms_1.roomModel.collection.drop();
    rooms_1.roomModel.insertMany(roomsFaker_1.roomsList);
});
const postMessagesMongo = () => __awaiter(void 0, void 0, void 0, function* () {
    yield messages_1.messageModel.collection.drop();
    messages_1.messageModel.insertMany(messagesFaker_1.messagesList);
});
postBookingsMongo();
// postRoomsMongo();
// postUsersMongo();
// postMessagesMongo();
