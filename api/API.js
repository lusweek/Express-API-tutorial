
const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Här sätter du upp endpointen newpost och gör möjligheten att posta.
router.post("/newpost", (req, res) => {
    const newPost = new Post({
        fname: req.body.fname,
        email: req.body.email,
        content: req.body.email
    });
    newPost.save((err) => {
        if (err) {
            console.log(err); 
            res.status(500).json({
                message: {
                    msgBody: "An error occurd",
                    msgError: true,
                },
            });
        }else {
            res.status(201).json({message: {
                msgBody: "Post sucessfull",
                msgError: false
            }
            })
        }
    })
});

router.get("/getposts", (req, res) => {
    Post.find({}, (err, documents) => {
        if (err) {
            res.status(500).json({message: {msgBody: "Can't get posts", msgError: true}})
        }else {
            res.status(200).json({posts: documents});
        }
    });
});

module.exports = router;