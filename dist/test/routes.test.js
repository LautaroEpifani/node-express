"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = require("../app");
const bookings_1 = require("../models/bookings");
let token = "";
beforeAll(async () => {
    const response = await (0, supertest_1.default)(app_1.app).post("/api/login").send({
        email: "carlos@gmail.com",
        password: "asdasd123",
    });
    token = response.body.token;
});
describe("bookings endpoints", () => {
    it("return bookings", async () => {
        const getBookings = await (0, supertest_1.default)(app_1.app).get("/api/bookings").set("Authorization", `Bearer ${token}`);
        expect(getBookings.statusCode).toEqual(200);
        expect(Array.isArray(getBookings.body)).toBe(true);
        const sortedBookings = getBookings.body.sort((a, b) => a.createdAt - b.createdAt);
        expect(sortedBookings[0]).toHaveProperty('guest');
    });
    it("should create a new booking", async () => {
        const postBooking = await (0, supertest_1.default)(app_1.app)
            .post("/api/bookings")
            .send({
            guest: "Star Lord",
            check_in: "2023-05-01",
            check_out: "2023-05-01",
            order_date: "2023-05-01",
            special_request: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate rem perferendis nobis deleniti laborum nesciunt a porro laboriosam temporibus sint.",
            status: "Check In",
            room_number: 10,
        })
            .set("Authorization", `Bearer ${token}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");
        expect(postBooking.statusCode).toEqual(200);
        const getBookings = await (0, supertest_1.default)(app_1.app).get("/api/bookings").set("Authorization", `Bearer ${token}`);
        const sortedBookings = getBookings.body.sort((a, b) => a.createdAt - b.createdAt);
        expect(sortedBookings[0]).toHaveProperty('guest', 'Star Lord');
    });
    it("should delete a booking", async () => {
        const deleteBooking = await (0, supertest_1.default)(app_1.app)
            .delete("/api/bookings/64afd6bd36de6141ed9ab1be")
            .set("Authorization", `Bearer ${token}`);
        expect(deleteBooking.statusCode).toEqual(200);
        const booking = await bookings_1.bookingModel.findById('64afd6bd36de6141ed9ab1be');
        expect(booking).toBe(null);
    });
    it("should update a booking", async () => {
        const updateBooking = await (0, supertest_1.default)(app_1.app)
            .patch("/api/bookings/64afefcfda45f74e06a1c49f")
            .send({
            guest: "Obi-Wan Kenobi",
        })
            .set("Authorization", `Bearer ${token}`)
            .set("Content-Type", "application/json")
            .set("Accept", "application/json");
        expect(updateBooking.statusCode).toEqual(200);
        expect(await bookings_1.bookingModel.findById('64afefcfda45f74e06a1c49f')).toHaveProperty('guest', 'Obi-Wan Kenobi');
    });
});
