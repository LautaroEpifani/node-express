import { Message } from "../models/models";
import { pool } from "../pool";

export const getSqlMessagesService = async () => {
  const [rows] = await pool.query("SELECT * FROM messages");
  return rows;
};

export const getSqlMessageService = async (id: string) => {
  const [rows] = await pool.query(`SELECT * FROM messages WHERE id = ${id}`);
  return rows;
};

export const postSqlMessageService = async (newMessage: Message) => {
  const { date, hour, name, email, phone, subject, comment } = newMessage;
  const [rows] = await pool.query("INSERT INTO messages VALUES(?,?,?,?,?,?,?,?)", [
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

export const deleteSqlMessageService = async (id: string) => {
  const [rows] = await pool.query(`DELETE FROM messages WHERE id = ${id}`);
  return rows;
};

export const updateSqlMessageService = async (id: string, update: Message) => {
  const [rows] = await pool.query(
    "Update messages SET " +
      Object.keys(update)
        .map((key) => `${key} = ?`)
        .join(", ") +
      " WHERE id = " +
      `${id}`,
    [...Object.values(update)]
  );
  return rows;
};
