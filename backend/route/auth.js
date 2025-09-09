const router = require("express").Router();
const passport = require("passport");
const users = []; // simple in-memory storage for demo



router.get("/login/failed",
    (req, res) => {
        res.status(401).json({
            error: true,
            message: "Login failed"
        });
    }
);

router.get("/login/success", (req, res) => {
    console.log("Session user:", req.user);
    if (req.user) {
        res.status(200).json({
            error: false,
            message: "Login successful",
            user: req.user
        });
    } else {
        res.status(403).json({ error: true, message: "Not authenticated" });
    }
});


router.get(
    "/google/callback",
    passport.authenticate("google", {
        successRedirect: "http://localhost:3000",
        failureRedirect: "/login/failed",
    })
);
router.get(
    "/google",
    passport.authenticate("google", ["profile", "email"])
);


router.get("/logout", (req, res) => {
    try {
        req.logOut({ keepSessionInfo: false }, err => {
            if (err) {
                return res.status(500).json({ error: true, message: "Logout failed" });
            }
            req.session = null;
            res.status(200).json({ success: true, message: "Logged out successfully" });
        });
    }
    catch (err) {
        console.error("Logout error:", err);
        res.status(500).json({ error: true, message: "Logout failed" });
    }
})

// router.get("/logout", (req, res, next) => {
//     req.logout((err) => {
//         if (err) return next(err);
//         req.session.destroy(() => {
//             res.clearCookie("connect.sid"); // optional
//             res.redirect("http://localhost:3000");
//         });
//     });
// });

// Register route
router.post("/register", (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ error: true, message: "All fields are required" });
    }

    // // Check if user exists
    // if (users.find(u => u.email === email)) {
    //     return res.status(400).json({ error: true, message: "User already exists" });
    // }

    const newUser = { name, email, password };
    users.push(newUser);

    res.status(201).json({ error: false, message: "User registered successfully", user: newUser });
});


// Temporary in-memory login for demo
router.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: true, message: "All fields are required" });
    }

    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
        return res.status(401).json({ error: true, message: "Invalid email or password" });
    }

    // Simulate login by attaching user to session (or just return user for demo)
    req.user = user;

    res.status(200).json({ error: false, message: "Login successful", user });
});




module.exports = router;