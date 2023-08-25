import joi from "joi";

export const postMessageValidator = joi.object({
  _id: joi.string().max(100).required(),
  date: joi.date().required(),
  hour: joi.string().max(5).required(),
  name: joi.string().max(50).required(),
  email: joi.string().max(70).required(),
  phone: joi.string().max(20).required(),
  subject: joi.string().max(20).required(),
  comment: joi.string().max(500).required(),
  archived: joi.boolean().required(),
});

export const updateMessageValidator = joi.object({
  _id: joi.string().max(100).optional(),
  date: joi.date().optional(),
  hour: joi.string().max(5).optional(),
  name: joi.string().max(50).optional(),
  email: joi.string().max(70).optional(),
  phone: joi.string().max(20).optional(),
  subject: joi.string().max(20).optional(),
  comment: joi.string().max(500).optional(),
  archived: joi.boolean().optional(),
});
