import joi from 'joi';

export const idValidator = joi.number().integer().positive().required();
