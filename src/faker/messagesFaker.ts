import { faker } from "@faker-js/faker";
import { Message } from "../interfaces/interfaces";
import uuid from "react-uuid";

export const generateMessages = () => {
  let messages: Message[] = [];
  for (let i = 1; i <= 10; i++) {
    const id = uuid();
    const date = faker.date.anytime();
    const hour = i + ":" + i*4;
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const phone = faker.phone.imei();
    const subject = faker.word.adverb();
    const comment = faker.lorem.lines(6);
    const archived = false;

    messages.push({
      id,
      date,
      hour,
      name,
      email,
      phone,
      subject,
      comment,
      archived,
    });
  }
  return messages;
};

export const messagesList = generateMessages();
