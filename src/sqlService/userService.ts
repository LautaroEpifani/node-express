import express from "express";
import { User } from "../models/models";
import { pool } from "../pool";

export const getSqlUsersService = async (req: express.Request, res: express.Response) => {
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query("SELECT * FROM users", (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const getSqlUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`SELECT * FROM users WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
};

export const postSqlUserService = async (req: express.Request, res: express.Response) => {
  const newUser: User = { ...req.body };
  const { employee_name, image, email, password, start_date, description, contact, status, position } =
    newUser;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(
      "INSERT INTO users VALUES(?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        null,
        employee_name, image, email, password, start_date, description, contact, status, position
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

export const deleteSqlUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`DELETE FROM users WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });
  
};

export const updateSqlUserService = async (req: express.Request, res: express.Response) => {
  const { id } = req.params;
  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(`UPDATE users SET employee_name = 'Faker' WHERE id = ${id}`, (err, rows) => {
      connection.release();
      if (!err) {
        res.status(200).send(rows);
      } else {
        console.log(err);
      }
    });
  });

};
