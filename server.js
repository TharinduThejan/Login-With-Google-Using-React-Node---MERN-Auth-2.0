require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const mongoose = require("mongoose");
const passportSetup = require("./passport");
const app = express();
const authRoute = require("./route/auth.js");

// MongoDB connection
const connectDB = async () => {
    try {
        const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/google-auth";
        await mongoose.connect(mongoURI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error.message);
        // Don't exit process, continue without database for development
    }
};

connectDB();

app.use(
    cookieSession({
        name: "session",
        keys: [process.env.COOKIE_KEY],
        maxAge: 24 * 60 * 60 * 1000,
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true
}));
app.use("/auth", authRoute);
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.json({
        message: 'Google Auth Server is running!',
        status: 'success',
        endpoints: {
            googleAuth: '/auth/google',
            loginStatus: '/auth/login/success',
            logout: '/auth/logout'
        },
        mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});