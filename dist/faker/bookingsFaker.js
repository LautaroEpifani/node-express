"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingsList = exports.generateBookings = void 0;
const faker_1 = require("@faker-js/faker");
const mongoose_1 = __importDefault(require("mongoose"));
const react_uuid_1 = __importDefault(require("react-uuid"));
const obId = (id) => {
    return new mongoose_1.default.Types.ObjectId(id);
};
const generateBookings = () => {
    let bookings = [];
    for (let i = 1; i <= 10; i++) {
        const id = (0, react_uuid_1.default)();
        const guest = faker_1.faker.person.fullName();
        const room_id = faker_1.faker.helpers.arrayElement([
            obId("64ba961c39c6d79195072288"),
            obId("64ba961c39c6d79195072288"),
            obId("64ba961c39c6d7919507229c"),
            obId("64ba961c39c6d791950722a6"),
        ]);
        const check_in = faker_1.faker.date.anytime();
        const check_out = faker_1.faker.date.anytime();
        const order_date = faker_1.faker.date.anytime();
        const special_request = faker_1.faker.lorem.lines(4);
        const status = faker_1.faker.helpers.arrayElement(["Check In"]);
        const room_number = faker_1.faker.number.int({ min: 0, max: 10 });
        const color = faker_1.faker.helpers.arrayElement(["#5AD07A"]);
        const bgrColor = faker_1.faker.helpers.arrayElement(["#E8FFEE"]);
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
exports.generateBookings = generateBookings;
exports.bookingsList = (0, exports.generateBookings)();
