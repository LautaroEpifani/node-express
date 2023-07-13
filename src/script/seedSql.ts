import { pool } from "../pool";
import { bookingsList } from "../faker/bookingsFaker";
import { usersList } from "../faker/usersFaker";
import { roomsList } from "../faker/roomsFaker";
import { messagesList } from "../faker/messagesFaker";

export const postBookingsSQL = async () => {
  if (bookingsList) {
    for (let i = 0; i < bookingsList.length; i++) {
      const {
        guest,
        // room_id,
        check_in,
        check_out,
        order_date,
        special_request,
        status,
        room_number,
        color,
        bgrColor,
      } = bookingsList[i];
      await pool.query("INSERT INTO bookings VALUES(?,?,?,?,?,?,?,?,?,?,?)", [
        null,
        guest,
        // room_id,
        check_in,
        check_out,
        order_date,
        special_request,
        status,
        room_number,
        color,
        bgrColor,
      ]);
    }
  }
};

export const postUsersSQL = async () => {
  if (usersList) {
    for (let i = 0; i < usersList.length; i++) {
      const { employee_name, image, email, password, start_date, description, contact, status, position } =
        usersList[i];
      await pool.query("INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?)", [
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
    }
  }
};

export const postRoomsSQL = async () => {
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
      await pool.query("INSERT INTO rooms VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)", [
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
    }
  }
};

export const postMessagesSQL = async () => {
  if (messagesList) {
    for (let i = 0; i < messagesList.length; i++) {
      const { date, hour, name, email, phone, subject, comment } = messagesList[i];
      await pool.query("INSERT INTO messages VALUES(?,?,?,?,?,?,?,?)", [
        null,
        date,
        hour,
        name,
        email,
        phone,
        subject,
        comment,
      ]);
    }
  }
};
