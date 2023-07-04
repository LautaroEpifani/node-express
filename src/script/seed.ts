import { Request, Response } from "express";
import { pool } from "../pool";
import { bookingsList } from "../faker/bookingsFaker";
import { usersList } from "../faker/usersFaker";
import { roomsList } from "../faker/roomsFaker";
import { messagesList } from "../faker/messagesFaker";

export const postBookingsSQL = () => {
  if (bookingsList) {
    for (let i = 0; i < bookingsList.length; i++) {
      const {
        guest,
        room_id,
        room_type,
        check_in,
        check_out,
        order_date,
        special_request,
        status,
        room_number,
        color,
        bgrColor,
      } = bookingsList[i];
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
            color,
            bgrColor,
          ],
          (err, rows) => {
            connection.release();
            if (!err) {
              console.log("Bookings List Posted");
            } else {
              console.log(err);
            }
          }
        );
      });
    }
  }
};

export const postUsersSQL = () => {
  if (usersList) {
    for (let i = 0; i < usersList.length; i++) {
      const { employee_name, image, email, password, start_date, description, contact, status, position } =
        usersList[i];
      pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
          "INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?)",
          [null, employee_name, image, email, password, start_date, description, contact, status, position],
          (err, rows) => {
            connection.release();
            if (!err) {
              console.log("Users List Posted");
            } else {
              console.log(err);
            }
          }
        );
      });
    }
  }
};

export const postRoomsSQL = () => {
  if (roomsList) {
    for (let i = 0; i < roomsList.length; i++) {
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
      } = roomsList[i];
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
              console.log("Rooms List Posted");
            } else {
              console.log(err);
            }
          }
        );
      });
    }
  }
};

export const postMessagesSQL = () => {
  if (messagesList) {
    for (let i = 0; i < messagesList.length; i++) {
      const { date, hour, name, email, phone, subject, comment } = messagesList[i];
      pool.getConnection((err, connection) => {
        if (err) throw err;
        connection.query(
          "INSERT INTO messages VALUES(?,?,?,?,?,?,?,?)",
          [null, date, hour, name, email, phone, subject, comment],
          (err, rows) => {
            connection.release();
            if (!err) {
              console.log("Messages List Posted");
            } else {
              console.log(err);
            }
          }
        );
      });
    }
  }
};
