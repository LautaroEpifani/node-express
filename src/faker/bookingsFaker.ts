import { faker } from "@faker-js/faker";
import { Booking } from "../models/models";

export const generateBookings = () => {
    let bookings: Booking[] = [];
    for (let i = 1; i <= 10; i++) {
      const id = i;
      const guest = faker.person.fullName();
      const room_id = faker.number.int({ min: 0, max: 10 });
      const room_type = "Double Bed";
      const check_in = faker.date.anytime();
      const check_out = faker.date.anytime();
      const order_date = faker.date.anytime();
      const special_request = faker.lorem.lines(4);
      const status = "Check In";
      const room_number = faker.number.int({ min: 0, max: 10 });
      const color = "";
      const bgrColor = "";
  
      bookings.push({
        id,
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
      });
    }
    return bookings;
  };
  
  export const bookingsList = generateBookings();