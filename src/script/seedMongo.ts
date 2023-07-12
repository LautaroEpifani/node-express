import { bookingsList } from "../faker/bookingsFaker";
import { roomsList } from "../faker/roomsFaker";
import { messagesList } from "../faker/messagesFaker";
import { bookingModel } from "../models/bookings";
import connectDb from "../server";
import { usersList } from "../faker/usersFaker";
import { roomModel } from "../models/rooms";
import { userModel } from "../models/users";
import { messageModel } from "../models/messages";

connectDb();

async function postBookingsMongo() {
  await bookingModel.collection.drop();
  await bookingModel.insertMany(bookingsList);
}

const postUsersMongo = async () => {
  await userModel.collection.drop();
  userModel.insertMany(usersList);
};

const postRoomsMongo = async () => {
  await roomModel.collection.drop();
  roomModel.insertMany(roomsList);
};

const postMessagesMongo = async () => {
  await messageModel.collection.drop();
  messageModel.insertMany(messagesList);
};

postBookingsMongo();
postRoomsMongo();
postUsersMongo();
postMessagesMongo();
