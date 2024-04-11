import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        email: { type: String, required: true, unique: true, trim: true, lowercase: true },
        password: { type: String },
        name: { type: String, trim: true },
        role: { type: String, default: 'user' },
        isActive: { type: Boolean, default: true },
        phone: { type: Number, trim: true },
        address: { type: String, trim: true },
        profilePicture: { type: String },
        bookingHistory: { type: Array, default: [] },
        resetToken: { type: String, default: null },
        verificationToken: { type: String, default: null },
        tokenExpiration: { type: Date, default: null },
        isDeleted: { type: Boolean, default: false },
    },
    { timestamps: true }
);

// Indexes
userSchema.index({ email: 1 });
const User = mongoose.model('User', userSchema);

export default User;
