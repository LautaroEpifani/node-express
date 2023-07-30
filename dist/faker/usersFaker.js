"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usersList = exports.generateUsers = void 0;
const faker_1 = require("@faker-js/faker");
const utils_1 = require("../utils");
const generateUsers = () => {
    let users = [];
    for (let i = 1; i <= 10; i++) {
        const id = i;
        const employee_name = faker_1.faker.person.fullName();
        const image = `${faker_1.faker.image.avatar()}?random=${Math.round(Math.random() * 1000)}`;
        const email = faker_1.faker.internet.email();
        const password = faker_1.faker.string.alpha(10);
        const start_date = faker_1.faker.date.anytime();
        const description = faker_1.faker.lorem.lines(2);
        const contact = faker_1.faker.phone.imei();
        const status = faker_1.faker.helpers.arrayElement(["Active", "Inactive"]);
        const position = faker_1.faker.helpers.arrayElement(["Manager", "Reception", "Room Service"]);
        console.log(email + " --- " + password);
        users.push({
            id,
            employee_name,
            image,
            email,
            password: (0, utils_1.hashPassword)(password),
            start_date,
            description,
            contact,
            status,
            position,
        });
    }
    return users;
};
exports.generateUsers = generateUsers;
exports.usersList = (0, exports.generateUsers)();
