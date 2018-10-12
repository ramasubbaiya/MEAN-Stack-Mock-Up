const express = require('express');

const app = express();

app.use('/api/posts', (req, res, next) => {
  posts = [
    { id: 1, title: 'First Post', content: 'This is the first post'},
    { id: 2, title: 'Second Post', content: 'This is the second post'},
    { id: 3, title: 'Third Post', content: 'This is the third post'},
  ];
  res.status(200).json({
    message: 'Posts fetched successfully',
    posts: posts
  });
});

module.exports = app;
