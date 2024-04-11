import express from 'express';
import { RentalController } from '../../controller/RentalController';
import { verifyToken } from '../../middleware/authentication';

const router = express.Router();

// Define rental routes
router.get('/rentals', verifyToken, RentalController.getAllRentals);
router.post('/rentals', verifyToken, RentalController.createRental);
router.put('/rentals/:rentalId', verifyToken, RentalController.updateRental);
router.get('/rentals/:rentalId', verifyToken, RentalController.getRentalById);
router.delete('/rentals/:rentalId', verifyToken, RentalController.deleteRental);

export default router;
