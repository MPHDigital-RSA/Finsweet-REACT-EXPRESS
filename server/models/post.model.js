const mongoose = require('mongoose');

// schema
const postSchema = mongoose.Schema({
    title: String,
    category: String,
    body: String,
    createdAt: { type: Date, default: Date.now },
    thumbnail: String,
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

// create a model
const Post = mongoose.model('Post', postSchema);

module.exports = Post;