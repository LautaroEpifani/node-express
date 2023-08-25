import express from 'express';
import { loginService } from '../services/loginService';

export const loginRoutes = express.Router();

const loginController = async (req: express.Request , res: express.Response) => {
  const body = req.body;
  const jsonBody = JSON.parse(body);
  const { email, password } = jsonBody;
  res.set({
    "Access-Control-Allow-Origin": '*',
    "Access-Control-Allow-Methods": '*',
    "'Access-Control-Allow-Headers'": '*',
    "Content-Type": "application/json"
    })
    try {
      const response = await loginService(email, password);
      res.status(200).send(response);    
    } catch (error: any) { 
      res.status(400).send(JSON.stringify({ error: error.message }));
    }
  };

loginRoutes.post("/", loginController)
