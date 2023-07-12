import { faker } from "@faker-js/faker";
import { Message } from "../interfaces/interfaces";

export const generateMessages = () => {
  let messages: Message[] = [];
  for (let i = 1; i <= 10; i++) {
    const id = i;
    const date = faker.date.anytime();
    const hour = i + ":" + i*4;
    const name = faker.person.fullName();
    const email = faker.internet.email();
    const phone = faker.phone.imei();
    const subject = faker.word.adverb();
    const comment = faker.lorem.lines(6);

    messages.push({
      id,
      date,
      hour,
      name,
      email,
      phone,
      subject,
      comment,
    });
  }
  return messages;
};

export const messagesList = generateMessages();
