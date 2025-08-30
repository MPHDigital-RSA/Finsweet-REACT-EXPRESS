const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('../routes/users.router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// routers
app.use('/api', userRouter);


app.listen(3001, () => {
    mongoose.connect('mongodb://127.0.0.1:27017/finSweet').
        then((res) => {
            console.log("CONNECTING TO MONGO SUCCESS!!")
        }).catch(err => {
            console.log(err)
        })
    console.log("SERVER LISTENING ON PORT 3001");
})