import User from '../models/UserSchema';

export const findUserById = async (userId: any) => {
    const findUser = await User.findById(userId);
    return findUser ? findUser : null;
};
export const getAllUsers = async () => {
    const allUsers = await User.find({});
    return allUsers || null;
};
export const findByEmail = async (email: string) => {
    const findUser = await User.findOne({ email });
    return findUser ? findUser : null;
};
export const findByResetToken = async (resetToken: any) => {
    const findUser = await User.findOne({ resetToken });
    return findUser ? findUser : null;
};
export const findByVerificationToken = async (verificationToken: any) => {
    const findUser = await User.findOne({ verificationToken });
    return findUser ? findUser : null;
};
export const updateUser = async (userId: any, data: any) => {
    const updatedUser = await User.findOneAndUpdate({ _id: userId }, { $set: data }, { new: true });
    return updatedUser || null;
};

export const add = async (params: any) => {
    let modules = new User(params);
    return await modules.save();
}