"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSqlUserService = exports.deleteSqlUserService = exports.postSqlUserService = exports.getSqlUserService = exports.getSqlUsersService = void 0;
const pool_1 = require("../pool");
const utils_1 = require("../utils");
const getSqlUsersService = async () => {
    console.log((0, utils_1.hashPassword)("123"));
    const [rows] = await pool_1.pool.query("SELECT * FROM users");
    return rows;
};
exports.getSqlUsersService = getSqlUsersService;
const getSqlUserService = async (id) => {
    const [rows] = await pool_1.pool.query(`SELECT * FROM users WHERE id = ${id}`);
    return rows;
};
exports.getSqlUserService = getSqlUserService;
const postSqlUserService = async (newUser) => {
    const { employee_name, image, email, password, start_date, description, contact, status, position } = newUser;
    const [rows] = await pool_1.pool.query("INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?,?,?)", [
        null,
        employee_name,
        image,
        email,
        (0, utils_1.hashPassword)(password),
        start_date,
        description,
        contact,
        status,
        position,
    ]);
    return rows;
};
exports.postSqlUserService = postSqlUserService;
const deleteSqlUserService = async (id) => {
    const [rows] = await pool_1.pool.query(`DELETE FROM users WHERE id = ${id}`);
    return rows;
};
exports.deleteSqlUserService = deleteSqlUserService;
const updateSqlUserService = async (id, update) => {
    const [rows] = await pool_1.pool.query("Update users SET " +
        Object.keys(update)
            .map((key) => `${key} = ?`)
            .join(", ") +
        " WHERE id = " +
        `${id}`, [...Object.values(update)]);
    return rows;
};
exports.updateSqlUserService = updateSqlUserService;
