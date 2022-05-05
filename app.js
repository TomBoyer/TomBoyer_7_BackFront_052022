require("dotenv").config();
const express = require("express");
const path = require("path");
const cors = require("cors");
const helmet = require("helmet");
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({
    extended: true
}));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    res.setHeader("Cross-Origin-Resource-Policy", "cross-origin");
    next();
});

//déclarer les routes
const userRoute = require("./routes/userRoute");

//utiliser routes
app.use('/api/user', userRoute);

module.exports = app;