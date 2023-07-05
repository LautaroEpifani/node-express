import express from "express";
import { User } from "../models/models";
import { deleteSqlUserService, getSqlUserService, getSqlUsersService, postSqlUserService, updateSqlUserService } from "../sqlService/userService";

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getSqlUsersService();
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await getSqlUserService(id);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const postUser = async (req: express.Request<{},{},User> , res: express.Response) => {
  const newUser: User = { ...req.body };
  try {
    const response = await postSqlUserService(newUser);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const deleteUser = async (req: express.Request<{id: string}>, res: express.Response) => {
  const { id } = req.params;
  try {
    const response = await deleteSqlUserService(id);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const updateUser = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  const userUpdate: User = { ...req.body };
  try {
    const response = await updateSqlUserService(id, userUpdate);
    res.status(200).send(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


