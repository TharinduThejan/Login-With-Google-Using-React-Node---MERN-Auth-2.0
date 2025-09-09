const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require('passport');
const User = require('./models/User');
require('dotenv').config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    scope: ['profile', 'email']
},
    async function (accessToken, refreshToken, profile, done) {
        try {
            // Check if user already exists
            let user = await User.findOne({ googleId: profile.id });
            
            if (user) {
                return done(null, user);
            }
            
            // Create new user
            user = new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value,
                avatar: profile.photos[0].value
            });
            
            await user.save();
            done(null, user);
        } catch (error) {
            console.error('Error in Google Strategy:', error);
            done(error, null);
        }
    }
));

passport.serializeUser((user, done) => {
    done(null, user._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});