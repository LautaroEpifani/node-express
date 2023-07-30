"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSqlRoomService = exports.deleteSqlRoomService = exports.postSqlRoomService = exports.getSqlRoomService = exports.getSqlRoomsService = void 0;
const pool_1 = require("../pool");
const getSqlRoomsService = async () => {
    const [rows] = await pool_1.pool.query("SELECT * FROM rooms");
    return rows;
};
exports.getSqlRoomsService = getSqlRoomsService;
const getSqlRoomService = async (id) => {
    const [rows] = await pool_1.pool.query(`SELECT * FROM rooms WHERE id = ${id}`);
    return rows;
};
exports.getSqlRoomService = getSqlRoomService;
const postSqlRoomService = async (newRoom) => {
    const { images, room_type, room_number, amenities, price, discount, offer, offer_price, description, cancellation, status, } = newRoom;
    const [rows] = await pool_1.pool.query("INSERT INTO rooms VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)", [
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
    return rows;
};
exports.postSqlRoomService = postSqlRoomService;
const deleteSqlRoomService = async (id) => {
    const [rows] = await pool_1.pool.query(`DELETE FROM rooms WHERE id = ${id}`);
    return rows;
};
exports.deleteSqlRoomService = deleteSqlRoomService;
const updateSqlRoomService = async (id, update) => {
    const [rows] = await pool_1.pool.query("Update rooms SET " +
        Object.keys(update)
            .map((key) => `${key} = ?`)
            .join(", ") +
        " WHERE id = " +
        `${id}`, [...Object.values(update)]);
};
exports.updateSqlRoomService = updateSqlRoomService;
