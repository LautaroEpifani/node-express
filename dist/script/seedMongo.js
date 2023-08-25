"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bookings_1 = require("../models/bookings");
const rooms_1 = require("../models/rooms");
const users_1 = require("../models/users");
const messages_1 = require("../models/messages");
const bookingsFaker_1 = require("../faker/bookingsFaker");
const roomsFaker_1 = require("../faker/roomsFaker");
const messagesFaker_1 = require("../faker/messagesFaker");
const usersFaker_1 = require("../faker/usersFaker");
async function postBookingsMongo() {
    await bookings_1.bookingModel.collection.drop();
    await bookings_1.bookingModel.insertMany(bookingsFaker_1.bookingsList);
}
;
const postUsersMongo = async () => {
    await users_1.userModel.collection.drop();
    users_1.userModel.insertMany(usersFaker_1.usersList);
};
const postRoomsMongo = async () => {
    await rooms_1.roomModel.collection.drop();
    rooms_1.roomModel.insertMany(roomsFaker_1.roomsList);
};
const postMessagesMongo = async () => {
    await messages_1.messageModel.collection.drop();
    messages_1.messageModel.insertMany(messagesFaker_1.messagesList);
};
postBookingsMongo();
// postRoomsMongo();
// postUsersMongo();
// postMessagesMongo();
