import mongoose from 'mongoose';

const PackageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    destination: {
        type: String,
        required: true,
    },
    days: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

// Indexes
// PackageSchema.index({ _id: 1 });
const Package = mongoose.model('Package', PackageSchema);

export default Package;
