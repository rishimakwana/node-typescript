import mongoose from 'mongoose';

const HotelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    description: {
        type: String,
        required: true
    },
    amenities: {
        type: [String],
        required: true
    },
    imageURL: String
}, { timestamps: true });

const Hotel = mongoose.model('Hotel', HotelSchema);

export default Hotel;
