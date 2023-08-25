import { User } from "../interfaces/interfaces";
import { userModel } from "../models/users";

export const getMongoUsersService = async () => {
  const users = await userModel.find({}).sort({createdAt: -1})
  return users;
};

export const getMongoUserService = async (id: string) => {
  const user = await userModel.findById(id);
  return user;
};

export const postMongoUserService = async (newUser: User) => {
  const addUser = await userModel.create(newUser);
  return addUser;
};

export const deleteMongoUserService = async (id: string) => {
  const deleteUser = await userModel.findOneAndDelete({_id: id})
  return deleteUser;
};

export const updateMongoUserService = async (id: string, update: Partial<User>) => {
  const updateUser = await userModel.findOneAndUpdate({_id: id}, {
    ...update
  })
  return updateUser;
};
