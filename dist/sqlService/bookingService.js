"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSqlBookingService = exports.deleteSqlBookingService = exports.postSqlBookingService = exports.getSqlBookingService = exports.getSqlBookingsService = void 0;
const pool_1 = require("../pool");
const getSqlBookingsService = async () => {
    const [rows] = await pool_1.pool.query("SELECT * FROM bookings");
    return rows;
};
exports.getSqlBookingsService = getSqlBookingsService;
const getSqlBookingService = async (id) => {
    const [rows] = await pool_1.pool.query(`SELECT * FROM bookings WHERE id = ${id}`);
    return rows;
};
exports.getSqlBookingService = getSqlBookingService;
const postSqlBookingService = async (newBooking) => {
    const { guest, room_id, check_in, check_out, order_date, special_request, status, room_number } = newBooking;
    const [rows] = await pool_1.pool.query("INSERT INTO bookings VALUES(?,?,?,?,?,?,?,?,?,?,?)", [
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
};
exports.postSqlBookingService = postSqlBookingService;
const deleteSqlBookingService = async (id) => {
    const [rows] = await pool_1.pool.query(`DELETE FROM bookings WHERE id = ${id}`);
    return rows;
};
exports.deleteSqlBookingService = deleteSqlBookingService;
const updateSqlBookingService = async (id, update) => {
    const [rows] = await pool_1.pool.query("Update bookings SET " +
        Object.keys(update)
            .map((key) => `${key} = ?`)
            .join(", ") +
        " WHERE id = " +
        `${id}`, [...Object.values(update)]);
    return rows;
};
exports.updateSqlBookingService = updateSqlBookingService;
