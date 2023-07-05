import { faker } from "@faker-js/faker";
import { Room } from "../models/models";

export const generateRooms = () => {
    let rooms: Room[] = [];
    for (let i = 1; i <= 10; i++) {
      const id = i;
     const  title = faker.commerce.productAdjective();
    const images = [faker.image.urlLoremFlickr()];
    const room_type = faker.commerce.productAdjective();
    const room_number = faker.number.int({ min: 0, max: 10 });
    const amenities = [{a_name:"", icon:""}];
    const price = faker.number.int({ min: 300, max: 500 });
    const discount =  faker.number.int({ min: 0, max: 100 });
    const offer = faker.helpers.arrayElement(["yes", "no"]);;
    const offer_price = price - (price * discount) / 100;
    const description = faker.lorem.lines(4);
    const cancellation = faker.lorem.lines(8);
    const status = faker.helpers.arrayElement(["Available", "Booked"]);
  
      rooms.push({
        id,
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
        status
      });
    }
    return rooms;
  };
  
  export const roomsList = generateRooms();