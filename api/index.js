import express from 'express';

const app = express();

app.listen(10000, ()=>{
    console.log('Server listening on port 10000')
})