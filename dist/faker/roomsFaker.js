"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.roomsList = exports.generateRooms = void 0;
const faker_1 = require("@faker-js/faker");
const react_uuid_1 = __importDefault(require("react-uuid"));
const generateRooms = () => {
    let rooms = [];
    for (let i = 1; i <= 10; i++) {
        const id = (0, react_uuid_1.default)();
        const images = faker_1.faker.helpers.arrayElement([
            "https://images.unsplash.com/photo-1611971263023-105938ce12ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1587985064135-0366536eab42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1611892440504-42a792e24d32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1661796428175-55423b19409f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
            "https://plus.unsplash.com/premium_photo-1678297270523-8775c817d0b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
            "https://images.unsplash.com/photo-1584132915807-fd1f5fbc078f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            "https://plus.unsplash.com/premium_photo-1661901997525-fdbfb88d8554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=629&q=80",
            "https://plus.unsplash.com/premium_photo-1661962493427-910e3333cf5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
        ]);
        const room_type = faker_1.faker.helpers.arrayElement(["Double Bed", "Single Bed", "Suite"]);
        const room_number = faker_1.faker.number.int({ min: 0, max: 10 });
        const amenities = [
            { a_name: "wifi", icon: "wifi" },
            { a_name: "air_conditioner", icon: "air_conditioner" },
            { a_name: "double_bed", icon: "double_bed" },
            { a_name: "towels", icon: "towels" },
            { a_name: "shop_near", icon: "shop_near" },
            { a_name: "cleaning", icon: "cleaning" },
            { a_name: "breakfast", icon: "breakfast" },
            { a_name: "kitchen", icon: "kitchen" },
            { a_name: "shower", icon: "shower" },
        ];
        const price = faker_1.faker.number.int({ min: 300, max: 500 });
        const discount = faker_1.faker.number.int({ min: 0, max: 100 });
        const offer = faker_1.faker.helpers.arrayElement(["yes", "no"]);
        const offer_price = parseInt((price - (price * discount) / 100).toFixed(0));
        const description = faker_1.faker.lorem.lines(2);
        const cancellation = faker_1.faker.lorem.lines(8);
        const status = faker_1.faker.helpers.arrayElement(["Available", "Booked"]);
        const bookings = [];
        rooms.push({
            id,
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
            bookings,
        });
    }
    return rooms;
};
exports.generateRooms = generateRooms;
exports.roomsList = (0, exports.generateRooms)();
