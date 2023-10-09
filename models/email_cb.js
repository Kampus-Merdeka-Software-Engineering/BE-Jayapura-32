const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const email_cb = sequelize.define('email_callback', {  
    id_cb:{
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true,
    },
    email_cb: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    freezeTableName:true,
    timestamps:false
});

module.exports = email_cb;