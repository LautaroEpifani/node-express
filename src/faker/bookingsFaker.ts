import { faker } from "@faker-js/faker";
import { Booking } from "../interfaces/interfaces";
import mongoose from "mongoose";

const obId = (id: string) => {
  return new mongoose.Types.ObjectId(id);
};

export const generateBookings = () => {
  let bookings: Booking[] = [];
  for (let i = 1; i <= 10; i++) {
    const id = i;
    const guest = faker.person.fullName();
    const room_id = faker.helpers.arrayElement([
      obId("64afef8619a4480683ae999f"),
      obId("64afef8619a4480683ae99a1"),
      obId("64afef8619a4480683ae99a3"),
      obId("64afef8619a4480683ae99a5"),
      obId("64afef8619a4480683ae99a7"),
      obId("64afef8619a4480683ae99a9"),
    ]);
    const check_in = faker.date.anytime();
    const check_out = faker.date.anytime();
    const order_date = faker.date.anytime();
    const special_request = faker.lorem.lines(4);
    const status = faker.helpers.arrayElement(["Check In", "Check Out", "In Progress"]);
    const room_number = faker.number.int({ min: 0, max: 10 });
    const color = "";
    const bgrColor = "";

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
