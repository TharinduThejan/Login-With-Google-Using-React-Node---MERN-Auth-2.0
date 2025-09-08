require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieSession = require("cookie-session");
const passport = require("passport");
const passportSetup = require("./passport");
const app = express();
const authRoute = require("./route/auth.js");

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
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});