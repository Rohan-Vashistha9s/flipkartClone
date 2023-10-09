import express from 'express';
import { Connection } from './Database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';


const app  = express();

dotenv.config();

const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


Connection(username,password);

app.listen(PORT,console.log(`server is running on port ${PORT}`));
DefaultData();