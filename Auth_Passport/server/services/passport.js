const passport = require('passport');
const keys = require('../config/keys');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.use(new GoogleStrategy({
            clientID: keys.googleCliendID,
            clientSecret: keys.googleCliendSecret,
            callbackURL: '/auth/google/callback'
        },
        (accessToken, refreshToken, profile, done) => {
            console.log('access Token: ', accessToken);
            console.log('Referesh Token: ', refreshToken);
            console.log('profile: ', profile);
            console.log('done: ', done);
        })

);