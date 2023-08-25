import jwt from "jsonwebtoken";
import { hashPassword } from "../utils";
import { userModel } from "../models/users";

export const loginService = async (email: string, password: string) => {
  const user =  await  userModel.find({email: email, password: hashPassword(password) });
  if (user[0].email !== email || user[0].password !== hashPassword(password)) {
    console.log("user doesn't exist");
  } else {
    const token = jwt.sign({ ...user, id: null }, process.env.TOKEN_SECRET as string, {
      expiresIn: 3600,
    });
    return { auth: true, token: token ? token : " " };
  }
};
