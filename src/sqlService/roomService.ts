import express from "express";
import { Room } from "../models/models";
import { pool } from "../pool";
import { postRoomsSQL, postUsersSQL } from "../script/seed";

export const getSqlRoomsService = async (req: express.Request, res: express.Response) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM rooms", (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const getSqlRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`SELECT * FROM rooms WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const postSqlRoomService = async (req: express.Request, res: express.Response) => {
  const newRoom: Room = { ...req.body };
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
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO rooms VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
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

export const deleteSqlRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`DELETE FROM rooms WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const updateSqlRoomService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`UPDATE rooms SET title = 'Room Up' WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};
