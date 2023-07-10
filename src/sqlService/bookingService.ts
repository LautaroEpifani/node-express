import { Booking } from "../interfaces/interfaces";
import { pool } from "../pool";

export const getSqlBookingsService = async () => {
  const [rows] = await pool.query("SELECT * FROM bookings");
  return rows;
};

export const getSqlBookingService = async (id: string) => {
  const [rows] = await pool.query(`SELECT * FROM bookings WHERE id = ${id}`);
  return rows;
};

export const postSqlBookingService = async (newBooking: Booking) => {
  const { guest, room_id, check_in, check_out, order_date, special_request, status, room_number } =
    newBooking;
  const [rows] = await pool.query("INSERT INTO bookings VALUES(?,?,?,?,?,?,?,?,?,?,?)", [
    null,
    guest,
    room_id,
    check_in,
    check_out,
    order_date,
    special_request,
    status,
    room_number,
    " ",
    " ",
  ]);
  return rows;
};

export const deleteSqlBookingService = async (id: string) => {
  const [rows] = await pool.query(`DELETE FROM bookings WHERE id = ${id}`);
  return rows;
};

export const updateSqlBookingService = async (id: string, update: Partial<Booking>) => {
  const [rows] = await pool.query(
    "Update bookings SET " +
      Object.keys(update)
        .map((key) => `${key} = ?`)
        .join(", ") +
      " WHERE id = " +
      `${id}`,
    [...Object.values(update)]
  );
  return rows;
};
