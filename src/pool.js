"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const promise_1 = require("mysql2/promise");
exports.pool = (0, promise_1.createPool)({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: process.env.MYSQL,
    database: 'node_express_api',
});
