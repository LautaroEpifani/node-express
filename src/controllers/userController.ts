import express from "express";
import { Room } from "../models/models";
import { deleteUserService, getUserService, getUsersService, postUserService, updateUserService } from "../services/userService";


export const getUsers = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getUsersService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const response = await getUserService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const postUser = async (req: express.Request<{},{},Room> , res: express.Response) => {
  try {
    const response = await postUserService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const deleteUser = async (req: express.Request<{id: string}>, res: express.Response) => {
  try {
    const response = await deleteUserService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};


export const updateUser = async (req: express.Request, res: express.Response) => {
 
  try {
    const response = await updateUserService(req, res);
    res.status(200).json(response);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
