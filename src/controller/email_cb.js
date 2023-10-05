const EmailModel = require('../models/email_cb.js');

const getAllEmailCB = async (req, res) => {
    try {
        const [data] = await EmailModel.getAllEmailCB();

    res.json({
        message: 'GET all email success',
        data: data
    })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewEmailCB = async (req, res) => {
    console.log(req.body);
    const {body} = req;

    try {
        await EmailModel.createNewEmailCB(body);
        res.json({
            message: 'CREATE new email success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllEmailCB,
    createNewEmailCB,
}