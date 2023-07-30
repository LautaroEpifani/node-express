import express from 'express';
import { loginService } from '../services/loginService';

export const loginRoutes = express.Router();

const loginController = async (req: express.Request , res: express.Response) => {
  console.log(req.body)
  const { email, password } = req.body;
    try {
      const response = await loginService(email, password);
      const str = JSON.stringify(response);
      res.status(200).send(response);
    
    } catch (error: any) {
      res.status(400).send(JSON.stringify({ error: error.message }));
    }
  };

loginRoutes.post("/", loginController)
