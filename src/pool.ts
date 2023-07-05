import { createPool } from 'mysql2/promise'

export const pool = createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'mypassword',
    database: 'node_express_api',
})