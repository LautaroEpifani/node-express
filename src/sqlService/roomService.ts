import { Room } from "../interfaces/interfaces";
import { pool } from "../pool";

export const getSqlRoomsService = async () => {
  const [rows] = await pool.query("SELECT * FROM rooms");
  return rows;
};

export const getSqlRoomService = async (id: string) => {
  const [rows] = await pool.query(`SELECT * FROM rooms WHERE id = ${id}`);
  return rows;
};

export const postSqlRoomService = async (newRoom: Room) => {
  const {
    title,
    images,
    room_type,
    room_number,
    amenities,
    price,
    discount,
    offer,
    offer_price,
    description,
    cancellation,
    status,
  } = newRoom;
  const [rows] = await pool.query("INSERT INTO rooms VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)", [
    null,
    title,
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

export const deleteSqlRoomService = async (id: string) => {
  const [rows] = await pool.query(`DELETE FROM rooms WHERE id = ${id}`);
  return rows;
};

export const updateSqlRoomService = async (id: string, update: Room) => {
  const [rows] = await pool.query(
    "Update rooms SET " +
      Object.keys(update)
        .map((key) => `${key} = ?`)
        .join(", ") +
      " WHERE id = " +
      `${id}`,
    [...Object.values(update)]
  );
};
