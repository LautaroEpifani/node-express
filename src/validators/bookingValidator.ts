import joi from 'joi';


export const postBookingValidator = joi.object({
    guest: joi.string().max(50).required(),
    // room_id: joi.number().integer().positive().required(),
    check_in: joi.date().required(),
    check_out: joi.date().required(),
    order_date: joi.date().required(),
    special_request: joi.string().max(800).required(),
    room_number: joi.number().integer().positive().required(),
    status: joi.string().valid('Check In', 'Check Out', 'In Progress').required(),
    color: "",
    bgr_color: "",
})

export const updateBookingValidator = joi.object({
    guest: joi.string().max(50).optional(),
    // room_id: joi.number().integer().positive().optional(),
    check_in: joi.date().optional(),
    check_out: joi.date().optional(),
    order_date: joi.date().optional(),
    special_request: joi.string().max(800).optional(),
    room_number: joi.number().optional(),
    status: joi.string().valid('Check In', 'Check Out', 'In Progress').optional(),
    color: "",
    bgr_color: "",
})