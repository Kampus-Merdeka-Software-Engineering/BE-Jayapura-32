const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const email_cb = sequelize.define('email_cb', {  
    email: {
        type: DataTypes.STRING,
    },
}, {
    freezeTableName:true,
    timestamps:false
});

module.exports = email_cb;