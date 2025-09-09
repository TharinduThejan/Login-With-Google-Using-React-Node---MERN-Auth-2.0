require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const passportSetup = require("./passport");
// const cookieSession = require("cookie-session");
const authRoute = require("./route/auth.js");

// require("./passport");
// initialize passport strategies

const app = express();

app.use(
    cors({
        origin: "http://localhost:3000",
        // origin: process.env.CLIENT_URL || "http://localhost:3000",
        methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
        credentials: true
    })
);
// app.use(cookieSession({
//     name: "session",
//     keys: ["Thejan"],
//     // keys: [process.env.COOKIE_KEY],
//     maxAge: 24 * 60 * 60 * 1000 // 24 hours
// }));
app.use(express.json());

// session middleware
app.use(
    session({
        secret: process.env.COOKIE_KEY,
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false,
            httpOnly: true,
            sameSite: "lax",
            maxAge: 24 * 60 * 60 * 1000
        } // 1 day
        // cookie: { maxAge: 24 * 60 * 60 * 1000 }, // 1 day
    })
);

app.use(passport.initialize());
app.use(passport.session());

// allow frontend to send cookies


app.use("/auth", authRoute);

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`✅ Server running on http://localhost:${port}`);
});
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

