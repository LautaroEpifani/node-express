import express from "express";
import { User } from "../models/models";
import { deleteSqlUserService, getSqlUserService, getSqlUsersService, postSqlUserService, updateSqlUserService } from "../sqlService/userService";

export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    await getSqlUsersService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    await getSqlUserService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const postUser = async (req: express.Request<{},{},User> , res: express.Response) => {
  try {
    await postSqlUserService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const deleteUser = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    await deleteSqlUserService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const updateUser = async (req: express.Request, res: express.Response) => {
 
  try {
    await updateSqlUserService(req, res);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


