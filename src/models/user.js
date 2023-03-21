const { Schema, model } = require("mongoose");

const userShema = new Schema(
    {
        discordId: {
            type: String,
            required: true,
        },
        username: { 
            type: String, 
            required: true 
        },
        email: { type: String, required: true},
        guilds: { 
            type: Array,
            required: true 
        },
        locale: { type: String, required: true},
        premium: { type: Number, required: true},
        verified: { type: Boolean, required: true},
        connections: { type: Array, required: false},
    },
    {
        timestamps: true,
    }
);

module.exports = model("User", userShema);