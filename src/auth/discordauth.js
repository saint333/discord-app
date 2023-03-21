const {DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET} = require('../config')
const User = require('../models/user');
const passport = require("passport")
const {Strategy} = require("passport-discord")

passport.serializeUser((user, done) => {
    done(null, user.id)
})
passport.deserializeUser(async(id, done) => {
    const user = await User.findById(id)
    if(user) done(null, user)
})

passport.use(new Strategy({
    clientID: DISCORD_CLIENT_ID,
    clientSecret: DISCORD_CLIENT_SECRET,
    callbackURL: "/auth/redict",
    scope: ['identify', 'email', 'guilds', 'guilds.join', 'connections']
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log(profile);
        const user = await User.findOne({discordId: profile.id})
        if(user) return done(null, user)
        const newUser = new User({
            discordId: profile.id,
            username: profile.username,
            email: profile.email,
            guilds: profile.guilds,
            locale: profile.locale,
            verified: profile.verified,
            connections: profile.connections,
            premium: profile.premium_type,
        })
        await newUser.save()
        done(null, newUser)
    } catch (error) {
        console.log(error);
        done(error, null);
    }
}))