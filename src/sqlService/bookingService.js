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
exports.updateSqlBookingService = exports.deleteSqlBookingService = exports.postSqlBookingService = exports.getSqlBookingService = exports.getSqlBookingsService = void 0;
const pool_1 = require("../pool");
const getSqlBookingsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query("SELECT * FROM bookings");
    return rows;
});
exports.getSqlBookingsService = getSqlBookingsService;
const getSqlBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query(`SELECT * FROM bookings WHERE id = ${id}`);
    return rows;
});
exports.getSqlBookingService = getSqlBookingService;
const postSqlBookingService = (newBooking) => __awaiter(void 0, void 0, void 0, function* () {
    const { guest, room_id, check_in, check_out, order_date, special_request, status, room_number } = newBooking;
    const [rows] = yield pool_1.pool.query("INSERT INTO bookings VALUES(?,?,?,?,?,?,?,?,?,?,?)", [
        null,
        guest,
        room_id,
        check_in,
        check_out,
        order_date,
        special_request,
        status,
        room_number,
        " ",
        " ",
    ]);
    return rows;
});
exports.postSqlBookingService = postSqlBookingService;
const deleteSqlBookingService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query(`DELETE FROM bookings WHERE id = ${id}`);
    return rows;
});
exports.deleteSqlBookingService = deleteSqlBookingService;
const updateSqlBookingService = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query("Update bookings SET " +
        Object.keys(update)
            .map((key) => `${key} = ?`)
            .join(", ") +
        " WHERE id = " +
        `${id}`, [...Object.values(update)]);
    return rows;
});
exports.updateSqlBookingService = updateSqlBookingService;
