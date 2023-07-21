import joi from 'joi';


export const postRoomValidator = joi.object({
    _id: joi.string().max(100).optional(),
    id: joi.string().max(100).required(),
    images: joi.array().required(),
    room_type: joi.string().valid('Double Bed', 'Single Bed', 'Suite').required(),
    room_number: joi.number().integer().positive().required(),
    amenities: joi.array().required(),
    price: joi.number().integer().positive().required(),
    discount: joi.number().integer().positive().required(),
    offer: joi.string().valid('yes', 'no').required(),
    offer_price: joi.number().integer().positive().required(),
    description: joi.string().max(500).required(),
    cancellation: joi.string().max(800).required(),
    status: joi.string().valid('Available', 'Booked').required(),
    bookings: joi.array().required(),
})

export const updateRoomValidator = joi.object({
    _id: joi.string().max(100).optional(),
    id: joi.string().max(100).optional(),
    images: joi.array().optional(),
    room_type: joi.string().valid('Double Bed', 'Single Bed', 'Suite').optional(),
    room_number: joi.number().integer().positive().optional(),
    amenities: joi.array().optional(),
    price: joi.number().integer().positive().optional(),
    discount: joi.number().integer().positive().optional(),
    offer: joi.string().valid('yes', 'no').optional(),
    offer_price: joi.number().integer().positive().optional(),
    description: joi.string().max(500).optional(),
    cancellation: joi.string().max(800).optional(),
    status: joi.string().valid('Available', 'Booked').optional(),
    bookings: joi.array().optional(),
})