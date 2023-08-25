"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.messagesList = exports.generateMessages = void 0;
const faker_1 = require("@faker-js/faker");
const react_uuid_1 = __importDefault(require("react-uuid"));
const generateMessages = () => {
    let messages = [];
    for (let i = 1; i <= 10; i++) {
        const id = (0, react_uuid_1.default)();
        const date = faker_1.faker.date.anytime();
        const hour = i + ":" + i * 4;
        const name = faker_1.faker.person.fullName();
        const email = faker_1.faker.internet.email();
        const phone = faker_1.faker.phone.imei();
        const subject = faker_1.faker.word.adverb();
        const comment = faker_1.faker.lorem.lines(6);
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
exports.generateMessages = generateMessages;
exports.messagesList = (0, exports.generateMessages)();
