const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, DELETE, PATCH, OPTIONS");
    next();
});

app.use('/api/posts', (req, res, next) => {
    const posts = [
        { 
            id: '1', 
            title : "title 1", 
            content: "this is content 1."
        },
        { 
            id: '2', 
            title : "title 2", 
            content: "this is content 2."
        },
    ];

    res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    });
});

module.exports = app;