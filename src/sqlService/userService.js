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
exports.updateSqlUserService = exports.deleteSqlUserService = exports.postSqlUserService = exports.getSqlUserService = exports.getSqlUsersService = void 0;
const pool_1 = require("../pool");
const utils_1 = require("../utils");
const getSqlUsersService = () => __awaiter(void 0, void 0, void 0, function* () {
    console.log((0, utils_1.hashPassword)("123"));
    const [rows] = yield pool_1.pool.query("SELECT * FROM users");
    return rows;
});
exports.getSqlUsersService = getSqlUsersService;
const getSqlUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query(`SELECT * FROM users WHERE id = ${id}`);
    return rows;
});
exports.getSqlUserService = getSqlUserService;
const postSqlUserService = (newUser) => __awaiter(void 0, void 0, void 0, function* () {
    const { employee_name, image, email, password, start_date, description, contact, status, position } = newUser;
    const [rows] = yield pool_1.pool.query("INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?,?,?)", [
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
});
exports.postSqlUserService = postSqlUserService;
const deleteSqlUserService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query(`DELETE FROM users WHERE id = ${id}`);
    return rows;
});
exports.deleteSqlUserService = deleteSqlUserService;
const updateSqlUserService = (id, update) => __awaiter(void 0, void 0, void 0, function* () {
    const [rows] = yield pool_1.pool.query("Update users SET " +
        Object.keys(update)
            .map((key) => `${key} = ?`)
            .join(", ") +
        " WHERE id = " +
        `${id}`, [...Object.values(update)]);
    return rows;
});
exports.updateSqlUserService = updateSqlUserService;
