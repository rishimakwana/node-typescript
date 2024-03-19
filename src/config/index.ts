import dotenv from "dotenv";
dotenv.config();

export const environment = process.env.NODE_ENV || "development";
export const Port = process.env.PORT || 3000;
export const JWT_SECRET = process.env.JWT_SECRET || "";
export const Email = process.env.EMAIL || "";
export const UserPass = process.env.USERPASS || "";
export const DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://rishi:rishi@cluster0.ccdhj3b.mongodb.net/yatrachalo";
