import bcrypt from 'bcryptjs';

const saltRounds = 10;
export const encryptPass = async (password: any) => {
    try {
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        throw error;
    }
};

export const bycryptPass = async (userPassword: any, hashedPassword: any) => {
    try {
        const match = await bcrypt.compare(userPassword, hashedPassword);
        console.log(match ? 'Passwords match' : 'Passwords do not match');
        return match;
    } catch (error) {
        throw error;
    }
};
