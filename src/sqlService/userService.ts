import { User } from "../models/models";
import { pool } from "../pool";

export const getSqlUsersService = async () => {
  const [rows] = await pool.query("SELECT * FROM users");
  return rows;
};

export const getSqlUserService = async (id: string) => {
  const [rows] = await pool.query(`SELECT * FROM users WHERE id = ${id}`);
  return rows;
};

export const postSqlUserService = async (newUser: User) => {
  const { employee_name, image, email, password, start_date, description, contact, status, position } = newUser;

  const [rows] = await pool.query("INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?,?,?)", [
    null,
    employee_name,
    image,
    email,
    password,
    start_date,
    description,
    contact,
    status,
    position,
  ]);
  return rows;
};

export const deleteSqlUserService = async (id: string) => {
  const [rows] = await pool.query(`DELETE FROM users WHERE id = ${id}`);
  return rows;
};

export const updateSqlUserService = async (id: string, update: User) => {
  const [rows] = await pool.query(
    "Update users SET " +
      Object.keys(update)
        .map((key) => `${key} = ?`)
        .join(", ") +
      " WHERE id = " +
      `${id}`,
    [...Object.values(update)]
  );
  return rows;
};
