import express from "express";
import { Message } from "../models/models";
import { pool } from "../pool";
import { postMessagesSQL } from "../script/seed";

export const getSqlMessagesService = async (req: express.Request, res: express.Response) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM messages", (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const getSqlMessageService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`SELECT * FROM messages WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const postSqlMessageService = async (req: express.Request, res: express.Response) => {
  const newMessage: Message = { ...req.body };
  const { 
    date,
    hour,
    name,
    email,
    phone,
    subject,
    comment } =
    newMessage;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO messages VALUES(?,?,?,?,?,?,?,?)",
      [
        null,
        date,
        hour,
        name,
        email,
        phone,
        subject,
        comment
      ],
      (err, rows) => {
        connection.release();
        if (!err) {
          res.status(200).send(rows);
        } else {
          console.log(err);
        }
      }
    );
  });
};

export const deleteSqlMessageService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`DELETE FROM messages WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
  
};

export const updateSqlMessageService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`UPDATE messages SET name = 'Canyon' WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });

};
