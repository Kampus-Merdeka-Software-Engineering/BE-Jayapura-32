const emailCB = require("../models/email_cb");
const userReview = require("../models/user_review");
const { request } = require('express');

async function emailGet(req, res){
    try {
        const email = await emailCB.findOne({
            where: {
                email_cb: req.body.email_cb
            }
        });
        res.json(email);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function emailPost(req, res){
    try {
        const email = await emailCB.create(req.body);
        res.json({ success: true, email });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

async function userGet(req, res){
    try {
        const userR = await userReview.findAll();
        res.json(userR);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function userPost(req, res){
    try {
        const {email, full_name, message, star } = req.body;
        console.log(req.body)
        console.log(email)
        console.log(full_name)
        console.log(message)
        console.log(star)

        const userR = await userReview.create({email, full_name, message, star});
        res.json({ success: true, userR});
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
}

module.exports = {
    emailGet,
    emailPost,
    userGet,
    userPost
}