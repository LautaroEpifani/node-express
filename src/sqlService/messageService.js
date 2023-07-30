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
exports.updateSqlMessageService = exports.deleteSqlMessageService = exports.postSqlMessageService = exports.getSqlMessageService = exports.getSqlMessagesService = void 0;
const pool_1 = require("../pool");
const getSqlMessagesService = () => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query("SELECT * FROM messages");
    return rows;
});
exports.getSqlMessagesService = getSqlMessagesService;
const getSqlMessageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query(`SELECT * FROM messages WHERE id = ${id}`);
    return rows;
});
exports.getSqlMessageService = getSqlMessageService;
const postSqlMessageService = (newMessage) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, hour, name, email, phone, subject, comment } = newMessage;
    const [rows] = yield pool_1.pool.query("INSERT INTO messages VALUES(?,?,?,?,?,?,?,?)", [
        null,
        date,
        hour,
        name,
        email,
        phone,
        subject,
        comment,
    ]);
    return rows;
});
exports.postSqlMessageService = postSqlMessageService;
const deleteSqlMessageService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query(`DELETE FROM messages WHERE id = ${id}`);
    return rows;
});
exports.deleteSqlMessageService = deleteSqlMessageService;
const updateSqlMessageService = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query("Update messages SET " +
        Object.keys(update)
            .map((key) => `${key} = ?`)
            .join(", ") +
        " WHERE id = " +
        `${id}`, [...Object.values(update)]);
    return rows;
});
exports.updateSqlMessageService = updateSqlMessageService;
