const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    position: {
        type: String
    },
    avatar: {
        type: String
    },
    company: {
        type: String
    },
    facebook: {
        type: String
    },
    twitter: {
        type: String
    },
    instagram: {
        type: String
    },
    linkedin: {
        type: String
    },
    posts: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;