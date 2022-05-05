const { Post, User/*,  Comment */} = require('../models');
const fs = require('fs')

exports.createPost = (req, res) => {
    let postImage;
    
    if(req.file) {
         postImage = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    };

    const newPost = {
        userId: req.body.id,
        content: req.body.content,
        image: postImage
    };
  
    Post.create(newPost)
        .then(post => res.status(201).json(post))
        .catch(error => res.status(500).json({ error }));
};