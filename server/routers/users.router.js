const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Post = require('../models/post.model');
const data = require('../data/data');

// MIDDLEWARE
router.use(express.json());

// routes
// CREATE USERS
router.post('/createUsers', async (req, res) => {

    try {
        // read the users object and loop through it and save each user in the database
        for (let user of data) {
            await User.insertOne(user);
        }
        res.json({ message: "users created" });
    } catch (error) {
        res.status(404).json({ message: error.message })
    }

});

// CREATE POSTS
router.post("/createPosts", async (req, res) => {
    try {
        // find each user by name and insert relecant posts.
        const floyd = await User.findOne({ name: 'Floyd Miles' });
        const daniel = await User.findOne({ name: 'Dianne Russel' });
        const leslie = await User.findOne({ name: 'Leslie Alexander' });
        const precious = await User.findOne({ name: 'Precious Smith' });

        // create new posts for the users
        let floydPost = new Post({
            title: "A UX Case Study Creating a Studious Environment for Students: ",
            category: "Business",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            thumbnail: "https://plus.unsplash.com/premium_photo-1661331603643-e5d639f4e10a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            user: floyd._id
        });

        let floydPost2 = new Post({
            title: "A different turn of events as technology turns against us ",
            category: "Technology",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            thumbnail: "https://plus.unsplash.com/premium_photo-1661963212517-830bbb7d76fc?q=80&w=1086&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            user: floyd._id
        });

        let danielPost = new Post({
            title: "8 Figma design systems you can download for free today",
            category: "Startup",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            thumbnail: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            user: daniel._id
        });

        let lesliePost = new Post({
            title: "Font sizes in UI design: The complete guide to follow",
            category: "Technology",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            thumbnail: "https://plus.unsplash.com/premium_photo-1664476975642-8448d32de0de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwaW4lMjBvZmZpY2V8ZW58MHx8MHx8fDA%3D",
            user: leslie._id
        });

        let preciousPost = new Post({
            title: "How to build rapport with your web design clients",
            category: "Economy",
            body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
            thumbnail: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBlb3BsZSUyMGluJTIwb2ZmaWNlfGVufDB8fDB8fHww",
            user: precious._id
        });

        // save posts to the database
        await floydPost.save();
        await floydPost2.save();
        await danielPost.save();
        await lesliePost.save();
        await preciousPost.save();

        // push the relevant post to the user posts array
        floyd.posts.push(floydPost);
        floyd.posts.push(floydPost2);

        daniel.posts.push(danielPost);
        leslie.posts.push(lesliePost);
        precious.posts.push(preciousPost);

        // save the users to the database
        await floyd.save();
        await daniel.save();
        await leslie.save();
        await precious.save();

        res.json({ message: "successfully created posts" })

    } catch (error) {

    }
});

// GET ALL USERS
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({}).populate('posts');
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// GET ONE USER
router.get('/users/:id', async (req, res) => {
    try {
        const users = await User.findById(req.params.id).populate('posts');
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

// GET ALL POSTS
router.get('/posts', async (req, res) => {
    // get all users and in each user extract all posts and push to the posts array
    try {
        // THE OLD WAY I GOT AROUND THIS 🤣
        // const posts = [];
        // const users = await User.find({}).populate('posts');

        // users.forEach(user => {
        //     const userPosts = user.posts;
        //     posts.push(userPosts);
        // });

        // THE EASY WAY 😎
        const posts = await Post.find({}).populate('user');

        res.status(200).json(posts);

        // res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

})

// GET ONE POST
router.get('/posts/:id', async (req, res) => {
    // get all one post
    try {
        const post = await Post.findById(req.params.id).populate('user');
        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
})

module.exports = router;