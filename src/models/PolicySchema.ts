import mongoose from 'mongoose';

const travelPolicySchema = new mongoose.Schema({
    policyName: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    coverage: {
        type: [String],
        required: true,
    },
    premium: {
        type: Number,
        required: true,
    },
    tripCancellationCoverage: {
        type: Boolean,
        default: false,
    },
    emergencyMedicalCoverage: {
        type: Boolean,
        default: false,
    },
    baggageCoverage: {
        type: Boolean,
        default: false,
    },
    tripStartDate: {
        type: Date,
        required: true,
    },
    tripEndDate: {
        type: Date,
        required: true,
    },
});

const Policy = mongoose.model('Policy', travelPolicySchema);

export default Policy;
