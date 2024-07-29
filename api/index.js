import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';

const app = express();

mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>{
    console.log('connected successfully')
})
.catch(err =>
    console.log(err)
)

app.listen(10000, ()=>{
    console.log('Server listening on port 10000')
})