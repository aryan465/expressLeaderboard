const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    tokens: [
        {
            token: {
                type: String,
                required: true

            }
        }
    ]
})

const leaderboardSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    points: {
        type: Number,
        required: true,
        default: 0
    }
})

// Password hashing
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
    }
    next();
})

// Auth token
userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id: this._id},process.env.KEY);
        this.tokens = this.tokens.concat({token:token});
        await this.save()
        return token
    } catch (error) {
        console.log(error)
    }
}

const User = mongoose.model('USER', userSchema)

const Leaderboard = mongoose.model('LEADERBOARD', leaderboardSchema);

module.exports = { User, Leaderboard };
