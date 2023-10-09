const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const user_review = sequelize.define('user_review', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    full_name: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    no_phone: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    star: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps:false
});

module.exports = user_review;