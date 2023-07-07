import joi from "joi";

export const postUserValidator = joi.object({
  employee_name: joi.string().max(50).required(),
  image: joi.string().max(400).required(),
  email: joi.string().max(70).required(),
  password: joi.string().max(1000).required(),
  start_date: joi.date().required(),
  description: joi.string().max(500).required(),
  contact: joi.string().max(15).required(),
  status: joi.string().valid("Active", "Inactive").required(),
  position: joi.string().valid("Manager", "Reception", "Room Service").required(),
});

export const updateUserValidator = joi.object({
  employee_name: joi.string().max(50).optional(),
  image: joi.string().max(400).optional(),
  email: joi.string().max(70).optional(),
  password: joi.string().max(1000).optional(),
  start_date: joi.date().optional(),
  description: joi.string().max(500).optional(),
  contact: joi.string().max(15).optional(),
  status: joi.string().valid("Active", "Inactive").optional(),
  position: joi.string().valid("Manager", "Reception", "Room Service").optional(),
});
