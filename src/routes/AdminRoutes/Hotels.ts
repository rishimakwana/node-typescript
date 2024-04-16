// routes/hotel.js
import express from "express";
import { createHotel, getAllHotels, getHotelById, updateHotel, deleteHotel } from "../../controller/HotelController";

import { hotelValidationRules } from "../../validators/hotelValidator";
import { verifyToken } from "../../middleware/authentication";
import { validate } from "uuid";

const router = express.Router();

router.post('/', verifyToken, hotelValidationRules(), validate, createHotel);
router.get('/', verifyToken, getAllHotels);
router.get('/:hotelId', verifyToken, getHotelById);
router.put('/:hotelId', verifyToken, hotelValidationRules(), validate, updateHotel);
router.delete('/:hotelId', verifyToken, deleteHotel);

export default router;
