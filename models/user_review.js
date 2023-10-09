const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const user_review = sequelize.define('user_review', {
    email: {
        type: DataTypes.STRING,
    },
    full_name: {
        type: DataTypes.TEXT,
    },
    no_phone: {
        type: DataTypes.TEXT,
    },
    message: {
        type: DataTypes.TEXT,
    },
    star: {
        type: DataTypes.INTEGER,
    },
}, {
    freezeTableName:true,
    timestamps:false
});

module.exports = user_review;