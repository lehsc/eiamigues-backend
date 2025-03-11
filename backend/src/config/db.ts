import pg from 'pg'
import dotenv from "dotenv";

const { Client } = pg // extracts the Client class from the pg module
dotenv.config(); 

export const connectdb = async(): Promise<pg.Client> => {
    const client = new Client({
        user: process.env.UID,
        password: process.env.PASS,
        host: process.env.HOST,
        database: process.env.DB,
    });

    await client.connect();
    return client;
}
