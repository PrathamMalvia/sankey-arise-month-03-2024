// Libraries
const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const cors = require("cors");

const users = require("./routes/usersRoute.js");
const errorHandler = require("./middlewares/ErrorHandler.js");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello");
});

// Middlewares
app.use(express.json());
app.use(cors());

// Error Handler
app.use(errorHandler)

// Routes
app.use("/", users);

mongoose.connect(process.env.MONGODB_URL)
    .then(() => {
        console.log("App connected to database");
    })
    .catch((error) => {
        console.log(error);
    })


app.listen(PORT, (req, res) => {
    console.log("Server is running");
})