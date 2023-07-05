import express from "express";
import jwt from "jsonwebtoken";

export const loginService = async (email: string, password: string) => {
  const user = {
    email: "carlos@gmail.com",
    password: "asdasd123",
  };

  if (user.email !== email || user.password !== password) {
    console.log("user doesn't exist");
  } else {
    const token = jwt.sign({ ...user, id: null }, process.env.TOKEN_SECRET as string, {
      expiresIn: 1800,
    });
    return { auth: true, token };
  }
};
