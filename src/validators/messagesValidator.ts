import joi from "joi";

export const postMessageValidator = joi.object({
  date: joi.date().required(),
  hour: joi.date().required(),
  name: joi.string().max(50).required(),
  email: joi.string().max(70).required(),
  phone: joi.string().max(15).required(),
  subject: joi.string().max(20).required(),
  comment: joi.string().max(500).required(),
});

export const updateMessageValidator = joi.object({
  date: joi.date().optional(),
  hour: joi.date().optional(),
  name: joi.string().max(50).optional(),
  email: joi.string().max(70).optional(),
  phone: joi.string().max(15).optional(),
  subject: joi.string().max(20).optional(),
  comment: joi.string().max(500).optional(),
});
