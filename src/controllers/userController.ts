import express from "express";
import { User } from "../interfaces/interfaces";
import { postUserValidator, updateUserValidator } from "../validators/userValidator";
import {
  deleteMongoUserService,
  getMongoUserService,
  getMongoUsersService,
  postMongoUserService,
  updateMongoUserService,
} from "../mongoService/userService";
import mongoose from "mongoose";

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getMongoUsersService();
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const response = await getMongoUserService(id);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};

export const postUser = async (req: express.Request<{}, {}, User>, res: express.Response) => {
  const newUser: User = { ...req.body };
  try {
    postUserValidator.validateAsync(newUser);
    const response = await postMongoUserService(newUser);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req: express.Request<{ id: string }>, res: express.Response) => {
  const { id } = req.params;
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      const response = await deleteMongoUserService(id);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};

export const updateUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const userUpdate: User = { ...req.body };
  if (mongoose.Types.ObjectId.isValid(id)) {
    try {
      updateUserValidator.validateAsync(userUpdate);
      const response = await updateMongoUserService(id, userUpdate);
      res.status(200).send(response);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  } else {
    res.status(404).json({ error: "No such booking" });
  }
};
