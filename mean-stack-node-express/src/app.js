const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();

mongoose.connect("<USE YOUR OWN CONNECTION STRING HERE>")
    .then(() => {
        console.log('Connected to database');
    })
    .catch(() => {
        console.log('Connection to database failed');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Methods", 
        "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Referer");
    next();
});

app.post("/api/posts", (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    console.log(post);
    res.status(201).json({
        post: post
    });
});

app.get("/api/posts", (req, res, next) => {
    Post.find().then((posts) => {
        console.log(posts);
        res.status(200).json({
            posts: posts
        });
    });
});

app.delete("/api/posts/:id", (req, res, next) => {
    const postId = req.params.id;
    Post.deleteOne({
        _id: postId
    }).then((result) => {
        console.log(result);
        res.status(200).json({
            message: "Post deleted"
        });
    });
});

module.exports = app;