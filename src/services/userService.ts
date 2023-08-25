import fs from "fs";
import path from "path";
import { User } from "../interfaces/interfaces";

const directory = path.join(__dirname, "..", "data", "users.json");
const readUsers = fs.readFileSync(directory, "utf8");
const usersJson = JSON.parse(readUsers);

export const getUsersService = async () => {
  return readUsers;
};

export const getUserService = async (id: string) => {
  const user = usersJson.find((user: User) => user.id.toString() === id);
  return JSON.stringify(user);
};

export const postUserService = async (newUser: User) => {
  usersJson.push(newUser);
  fs.writeFileSync(directory, JSON.stringify(usersJson));
};

export const deleteUserService = async (id: string) => {
  const newArray = usersJson.filter((user: User) => user.id.toString() !== id);
  fs.writeFileSync(directory, JSON.stringify(newArray));
};

export const updateUserService = async (id: string, newUser: User) => {
  let newArray: User[] = [];
  let user: User | undefined = usersJson.find((user: User) => user.id.toString() === id);
  user = { ...user, ...newUser };
  if (user) {
    newArray = usersJson.filter((userFilt: User) => userFilt.id.toString() !== id);
    newArray.push(user);
  }
  fs.writeFileSync(directory, JSON.stringify(newArray));
};
