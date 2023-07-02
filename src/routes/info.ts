import express from "express";
import { Request, Response } from "express";

export const infoRoute = express.Router();

infoRoute.get("/", (req: Request, res: Response) => {
    const hotelName = "Miranda Hotel";
    const endpoints = [
        {path: "/rooms", methods: ["GET", "POST"]},
        {path: "/bookings", methods: ["GET", "POST"]}
    ]

    res.json({hotelName, endpoints})
})