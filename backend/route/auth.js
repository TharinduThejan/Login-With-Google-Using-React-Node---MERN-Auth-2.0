const router = require("express").Router();
const passport = require("passport");


router.get("/login/failed",
    (req, res) => {
        res.status(401).json({
            message: "Login failed"
        });
    }
);

router.get("/login/success", (req, res) => {
    console.log("Session user:", req.user);
    if (req.user) {
        res.status(200).json({ user: req.user });
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});


router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: process.env.CLIENT_URL,
        failureRedirect: "/login/failed",
    })
);
router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/logout", (req, res, next) => {
    req.logout(function (err) {
        if (err) return next(err);
        req.session.destroy(() => {
            res.clearCookie("connect.sid");
            res.status(200).json({ success: true });
        });
    });
});

module.exports = router;