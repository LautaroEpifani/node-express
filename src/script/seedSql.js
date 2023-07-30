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
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMessagesSQL = exports.postRoomsSQL = exports.postUsersSQL = exports.postBookingsSQL = void 0;
const pool_1 = require("../pool");
const bookingsFaker_1 = require("../faker/bookingsFaker");
const usersFaker_1 = require("../faker/usersFaker");
const roomsFaker_1 = require("../faker/roomsFaker");
const messagesFaker_1 = require("../faker/messagesFaker");
const postBookingsSQL = () => __awaiter(void 0, void 0, void 0, function* () {
    if (bookingsFaker_1.bookingsList) {
        for (let i = 0; i < bookingsFaker_1.bookingsList.length; i++) {
            const { guest, 
            // room_id,
            check_in, check_out, order_date, special_request, status, room_number, color, bgrColor, } = bookingsFaker_1.bookingsList[i];
            yield pool_1.pool.query("INSERT INTO bookings VALUES(?,?,?,?,?,?,?,?,?,?,?)", [
                null,
                guest,
                // room_id,
                check_in,
                check_out,
                order_date,
                special_request,
                status,
                room_number,
                color,
                bgrColor,
            ]);
        }
    }
});
exports.postBookingsSQL = postBookingsSQL;
const postUsersSQL = () => __awaiter(void 0, void 0, void 0, function* () {
    if (usersFaker_1.usersList) {
        for (let i = 0; i < usersFaker_1.usersList.length; i++) {
            const { employee_name, image, email, password, start_date, description, contact, status, position } = usersFaker_1.usersList[i];
            yield pool_1.pool.query("INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?)", [
                null,
                employee_name,
                image,
                email,
                password,
                start_date,
                description,
                contact,
                status,
                position,
            ]);
        }
    }
});
exports.postUsersSQL = postUsersSQL;
const postRoomsSQL = () => __awaiter(void 0, void 0, void 0, function* () {
    if (roomsFaker_1.roomsList) {
        for (let i = 0; i < roomsFaker_1.roomsList.length; i++) {
            const { images, room_type, room_number, amenities, price, discount, offer, offer_price, description, cancellation, status, } = roomsFaker_1.roomsList[i];
            yield pool_1.pool.query("INSERT INTO rooms VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)", [
                null,
                JSON.stringify(images),
                room_type,
                room_number,
                JSON.stringify(amenities),
                price,
                discount,
                offer,
                offer_price,
                description,
                cancellation,
                status,
            ]);
        }
    }
});
exports.postRoomsSQL = postRoomsSQL;
const postMessagesSQL = () => __awaiter(void 0, void 0, void 0, function* () {
    if (messagesFaker_1.messagesList) {
        for (let i = 0; i < messagesFaker_1.messagesList.length; i++) {
            const { date, hour, name, email, phone, subject, comment } = messagesFaker_1.messagesList[i];
            yield pool_1.pool.query("INSERT INTO messages VALUES(?,?,?,?,?,?,?,?)", [
                null,
                date,
                hour,
                name,
                email,
                phone,
                subject,
                comment,
            ]);
        }
    }
});
exports.postMessagesSQL = postMessagesSQL;
