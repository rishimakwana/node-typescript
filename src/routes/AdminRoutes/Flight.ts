import express from "express";
import { createFlight, getAllFlights, getFlightById, updateFlight, deleteFlight } from "../controllers/flightController";
import { verifyToken } from "../middleware/authentication";

const router = express.Router();

router.post('/', createFlight);
router.get('/', getAllFlights);
router.get('/:flightId', getFlightById);
router.put('/:flightId',  updateFlight);
router.delete('/:flightId',  deleteFlight);

export default router;
