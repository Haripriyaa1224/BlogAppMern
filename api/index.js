import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv/config';
import userRoutes from './routes/user.js'
import authRoutes from './routes/auth.js'

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

app.use(express.json());
app.use('/api/user', userRoutes);
app.use('/api/auth', authRoutes);