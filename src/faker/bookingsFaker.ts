import { faker } from "@faker-js/faker";
import { Booking } from "../interfaces/interfaces";
import mongoose from "mongoose";
import uuid from "react-uuid";

const obId = (id: string) => {
  return new mongoose.Types.ObjectId(id);
};

export const generateBookings = () => {
  let bookings: Booking[] = [];
  for (let i = 1; i <= 10; i++) {
    const id = uuid();
    const guest = faker.person.fullName();
    const room_id = faker.helpers.arrayElement([
      obId("64ba961c39c6d79195072288"),
      obId("64ba961c39c6d79195072288"),
      obId("64ba961c39c6d7919507229c"),
      obId("64ba961c39c6d791950722a6"),
    ]);
    const check_in = faker.date.anytime();
    const check_out = faker.date.anytime();
    const order_date = faker.date.anytime();
    const special_request = faker.lorem.lines(4);
    const status = faker.helpers.arrayElement(["Check In"]);
    const room_number = faker.number.int({ min: 0, max: 10 });
    const color = faker.helpers.arrayElement(["#5AD07A"]);
    const bgrColor = faker.helpers.arrayElement(["#E8FFEE"]);

    bookings.push({
      id,
      guest,
      room_id,
      check_in,
      check_out,
      order_date,
      special_request,
      status,
      room_number,
      color,
      bgrColor,
    });
  }
  return bookings;
};

export const bookingsList = generateBookings();
