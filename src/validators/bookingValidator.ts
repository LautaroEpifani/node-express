import joi from 'joi';


export const postBookingValidator = joi.object({
    _id: joi.string().max(100).optional(),
    guest: joi.string().max(50).required(),
    id: joi.string().max(100).optional(),
    check_in: joi.date().required(),
    check_out: joi.date().required(),
    order_date: joi.date().required(),
    special_request: joi.string().max(800).required(),
    room_number: joi.number().integer().positive().required(),
    status: joi.string().valid('Check In', 'Check Out', 'In Progress').required(),
    color: joi.string().max(10).optional(),
    bgr_color: joi.string().max(10).optional(),
   
})

export const updateBookingValidator = joi.object({
    _id: joi.string().max(100).optional(),
    guest: joi.string().max(50).optional(),
    id: joi.string().max(100).optional(),
    check_in: joi.date().optional(),
    check_out: joi.date().optional(),
    order_date: joi.date().optional(),
    special_request: joi.string().max(800).optional(),
    room_number: joi.number().optional(),
    status: joi.string().valid('Check In', 'Check Out', 'In Progress').optional(),
    color: joi.string().max(10).optional(),
    bgr_color: joi.string().max(10).optional(),
})