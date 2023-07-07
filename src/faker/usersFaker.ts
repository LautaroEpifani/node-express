import { faker } from "@faker-js/faker";
import { User } from "../models/models";
import { hashPassword } from "../utils";

export const generateUsers = () => {
  let users: User[] = [];
  for (let i = 1; i <= 10; i++) {
    const id = i;
    const employee_name = faker.person.fullName();
    const image = `${faker.image.avatar()}?random=${Math.round(Math.random() * 1000)}`;
    const email = faker.internet.email();
    const password = hashPassword(faker.string.alpha(10));
    const start_date = faker.date.anytime();
    const description = faker.lorem.lines(2);
    const contact = faker.phone.imei();
    const status = faker.helpers.arrayElement(["Active", "Inactive"]);
    const position = faker.helpers.arrayElement(["Manager", "Reception", "Room Service"]);

    users.push({
      id,
      employee_name,
      image,
      email,
      password,
      start_date,
      description,
      contact,
      status,
      position,
    });
  }
  return users;
};

export const usersList = generateUsers();
