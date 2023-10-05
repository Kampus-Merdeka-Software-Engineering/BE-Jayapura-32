const UserModel = require('../models/users.js');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UserModel.getAllUsers();

    res.json({
        message: 'GET all users success',
        data: data
    })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    console.log(req.body);
    const {body} = req;

    try {
        await UserModel.createNewUser(body);
        res.json({
            message: 'CREATE new user success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    
    try {
        await UserModel.updateUser(body, idUser);
        res.json({
            message: 'UPDATE user success',
            data: {
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

// const deleteUser = async(req, res) => {
//     const {idUser} = req.params;
//     try {
//         await UsersModel.deleteUser(idUser);
//         res.json({
//             message: 'DELETE user success',
//             data: null
//         })
//     } catch (error) {
//         res.status(500).json({
//             message: 'Server Error',
//             serverMessage: error,
//         })
//     }
// }


module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    // deleteUser,
}