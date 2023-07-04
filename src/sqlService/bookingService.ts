import express from "express";
import { Booking } from "../models/models";
import { pool } from "../pool";

export const getSqlBookingsService = async (req: express.Request, res: express.Response) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM bookings", (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const getSqlBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`SELECT * FROM bookings WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const postSqlBookingService = async (req: express.Request, res: express.Response) => {
  const newBooking: Booking = { ...req.body };
  const { guest, room_id, room_type, check_in, check_out, order_date, special_request, status, room_number } =
    newBooking;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO bookings VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        null,
        guest,
        room_id,
        room_type,
        check_in,
        check_out,
        order_date,
        special_request,
        status,
        room_number,
        " ",
        " ",
      ],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.status(200).send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
};

export const deleteSqlBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`DELETE FROM bookings WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
  
};

export const updateSqlBookingService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`UPDATE bookings SET guest = 'Canyon' WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });

};
