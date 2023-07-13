import mongoose from "mongoose";

export interface Booking {
  id: number;
  guest: string; 
  room_id: mongoose.Types.ObjectId;
  room_number: number;
  special_request: string;
  order_date: Date;
  check_in: Date; 
  check_out: Date 
  status: string;
  color: string;
  bgrColor: string;
}

export interface Message {
  date: Date;
  hour: string;
  id: number;
  name: string;
  email: string;
  phone: string;
  subject: string;
  comment: string;
}

export interface Room {
    id: number;
    title: string;
    images: string[];
    room_type: string;
    room_number: number;
    amenities: Amenities[];
    price: number;
    discount: number;
    offer: string;
    offer_price: number;
    description: string;
    cancellation: string;
    status: string;
    bookings: Booking[] | [];
  }

export interface Amenities {
  a_name: string;
  icon: string;
}

export interface User {
      employee_name: string;
      id: number;
      image: string;
      email: string;
      password: string;
      start_date: Date;
      description: string;
      contact: string;
      status: string;
      position: string;
  }  