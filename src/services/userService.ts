import fs from "fs";
import path from "path";
import express from "express";
import { User } from "../models/models";

const directory = path.join(__dirname, "..", "data", "users.json");
const readUsers = fs.readFileSync(directory, "utf8");
const usersJson = JSON.parse(readUsers);

export const getUsersService = async (req: express.Request, res: express.Response) => {
  res.send(readUsers);
};

export const getUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const user = usersJson.find((user: User) => user.id === id);
  res.send(JSON.stringify(user));
};

export const postUserService = async (req: express.Request, res: express.Response) => {
  const newBooking: User = { ...req.body, id: "askjdakefkj" };
  usersJson.push(newBooking);
  fs.writeFileSync(directory, JSON.stringify(usersJson));
  const newReadUsers = fs.readFileSync(directory, "utf8");
  res.send(newReadUsers);
};

export const deleteUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const newArray = usersJson.filter((user: User) => user.id !== id);
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadUsers = fs.readFileSync(directory, "utf8");
  res.send(newReadUsers);
};

export const updateUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  let newArray: User[] = [];
  let user: User | undefined = usersJson.find((user: User) => user.id === id);
  user = { ...user, ...req.body };
  if (user) {
    newArray = usersJson.filter((userFilt: User) => userFilt.id !== id);
    newArray.push(user);
  }
  fs.writeFileSync(directory, JSON.stringify(newArray));
  const newReadUsers = fs.readFileSync(directory, "utf8");
  res.send(newReadUsers);
};
