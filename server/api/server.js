require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userRouter = require('../routers/users.router');
const cors = require('cors');

app.use(express.json());
app.use(cors());

// routers
app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.json({ message: "Successfully connected to the Prince Dev API" });
})

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.MONGODB_URI).
        then(() => {
            console.log("CONNECTING TO MONGO SUCCESS!!")
        }).catch(err => {
            console.log(err)
        })
    console.log("SERVER LISTENING ON PORT 3001");
});