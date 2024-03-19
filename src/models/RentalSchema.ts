import mongoose from 'mongoose';

const rentalSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    pricePerDay: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true,
    },
});

const Rental = mongoose.model('Rental', rentalSchema);

export default Rental;
