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
exports.updateSqlRoomService = exports.deleteSqlRoomService = exports.postSqlRoomService = exports.getSqlRoomService = exports.getSqlRoomsService = void 0;
const pool_1 = require("../pool");
const getSqlRoomsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query("SELECT * FROM rooms");
    return rows;
});
exports.getSqlRoomsService = getSqlRoomsService;
const getSqlRoomService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query(`SELECT * FROM rooms WHERE id = ${id}`);
    return rows;
});
exports.getSqlRoomService = getSqlRoomService;
const postSqlRoomService = (newRoom) => __awaiter(void 0, void 0, void 0, function* () {
    const { images, room_type, room_number, amenities, price, discount, offer, offer_price, description, cancellation, status, } = newRoom;
    const [rows] = yield pool_1.pool.query("INSERT INTO rooms VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)", [
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
});
exports.postSqlRoomService = postSqlRoomService;
const deleteSqlRoomService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query(`DELETE FROM rooms WHERE id = ${id}`);
    return rows;
});
exports.deleteSqlRoomService = deleteSqlRoomService;
const updateSqlRoomService = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query("Update rooms SET " +
        Object.keys(update)
            .map((key) => `${key} = ?`)
            .join(", ") +
        " WHERE id = " +
        `${id}`, [...Object.values(update)]);
});
exports.updateSqlRoomService = updateSqlRoomService;
