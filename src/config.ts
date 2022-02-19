
import dotenv from "dotenv";

dotenv.config();

const ENV = process.env.NODE_ENV;

const HOST = process.env.HOST;
const PORT = process.env.PORT;

const DB_NAME = process.env.DB_NAME;
const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

const DB_URI = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.ww7tr.mongodb.net`;
const API_URL = `http://${HOST}:${PORT}`;

export {
    ENV,
    HOST,
    PORT,
    API_URL,
    DB_NAME,
    DB_USER,
    DB_PASSWORD,
    DB_URI
};