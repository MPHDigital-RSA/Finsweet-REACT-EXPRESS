require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// mongoose connection
mongoose.connect(process.env.MONGODB_URI).
    then(() => {
        console.log("CONNECTING TO MONGO SUCCESS!!")
    }).catch(err => {
        console.log(err)
    })

const app = express();
const userRouter = require('./routers/users.router');

// middleware
app.use(express.json());
app.use(cors());

// routers
app.use('/api', userRouter);

app.get('/', (req, res) => {
    res.json({ message: "Successfully connected to the Prince Dev API" });
})

app.listen(process.env.PORT, () => {
    console.log("SERVER LISTENING ON PORT 3001");
});