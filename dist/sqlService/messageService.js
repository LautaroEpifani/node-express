"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSqlMessageService = exports.deleteSqlMessageService = exports.postSqlMessageService = exports.getSqlMessageService = exports.getSqlMessagesService = void 0;
const pool_1 = require("../pool");
const getSqlMessagesService = async () => {
    const [rows] = await pool_1.pool.query("SELECT * FROM messages");
    return rows;
};
exports.getSqlMessagesService = getSqlMessagesService;
const getSqlMessageService = async (id) => {
    const [rows] = await pool_1.pool.query(`SELECT * FROM messages WHERE id = ${id}`);
    return rows;
};
exports.getSqlMessageService = getSqlMessageService;
const postSqlMessageService = async (newMessage) => {
    const { date, hour, name, email, phone, subject, comment } = newMessage;
    const [rows] = await pool_1.pool.query("INSERT INTO messages VALUES(?,?,?,?,?,?,?,?)", [
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
};
exports.postSqlMessageService = postSqlMessageService;
const deleteSqlMessageService = async (id) => {
    const [rows] = await pool_1.pool.query(`DELETE FROM messages WHERE id = ${id}`);
    return rows;
};
exports.deleteSqlMessageService = deleteSqlMessageService;
const updateSqlMessageService = async (id, update) => {
    const [rows] = await pool_1.pool.query("Update messages SET " +
        Object.keys(update)
            .map((key) => `${key} = ?`)
            .join(", ") +
        " WHERE id = " +
        `${id}`, [...Object.values(update)]);
    return rows;
};
exports.updateSqlMessageService = updateSqlMessageService;
