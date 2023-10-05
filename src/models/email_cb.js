const dbPool = require('../config/database.js');

const getAllEmailCB = () => {
    const SQLQuery = 'SELECT * FROM email_callback';
    return dbPool.execute(SQLQuery);
}

const createNewEmailCB = (body) => {
    const SQLQuery = `  INSERT INTO email_callback (email) 
                        VALUES ('${body.email}')`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllEmailCB,
    createNewEmailCB,
}