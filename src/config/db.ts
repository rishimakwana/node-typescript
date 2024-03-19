import mongoose from "mongoose";
import MESSAGE from "../helper/message"
import { DATABASE_URL } from './';

export async function connectDb() {
    try {
        await mongoose.connect(DATABASE_URL);
        console.log(MESSAGE.DB_CONNECTED);
    } catch (error) {
        console.error(MESSAGE.FAILED_TO_CONNECT, error);
        process.exit(1);
    }
}
