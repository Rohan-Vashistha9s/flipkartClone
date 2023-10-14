import express from 'express';
import { Connection } from './Database/db.js';
import dotenv from 'dotenv';
import DefaultData from './default.js';
import Router from './Routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser';


const app  = express();

dotenv.config();
app.use(cors());
app.use(bodyParser.json( {extended :true}));
app.use(bodyParser.urlencoded({ extended:true}));
app.use('/',Router);
const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;


Connection(username,password);

app.listen(PORT,console.log(`server is running on port ${PORT}`));

DefaultData();