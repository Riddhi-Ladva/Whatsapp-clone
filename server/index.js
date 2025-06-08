import express from 'express';
import Connection from './database/db.js';
import route from './routes/route.js';
import cors from 'cors';
import bodyparser from 'body-parser';

const app=express();
Connection();
const PORT=8000;
app.use(cors());
app.use(bodyparser.json({extended:true}));
app.use(bodyparser.urlencoded({extended:true}));
app.use('/',route);

app.listen(PORT,()=>console.log('server is running succesfully'))