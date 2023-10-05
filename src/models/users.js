const dbPool = require('../config/database.js');

const getAllUsers = () => {
    const SQLQuery = 'SELECT * FROM user_review';
    return dbPool.execute(SQLQuery);
}

const createNewUser = (body) => {
    const SQLQuery = `  INSERT INTO user_review (full_name, email, no_phone, message, star) 
                        VALUES ('${body.full_name}','${body.email}','${body.no_phone}','${body.message}', '${body.star}')`;
    return dbPool.execute(SQLQuery);
}

const updateUser = (body, idUser) => {
    const SQLQuery = `  UPDATE user_review
                        SET full_name='${body.full_name}', email='${body.email}', no_phone='${body.no_phone}', message='${body.message}', star='${body.star}' 
                        WHERE id='${idUser}'`;
    return dbPool.execute(SQLQuery);
}

// const deleteUser = (idUser) => {
//     const SQLQuery = `DELETE FROM user_review WHERE id=${idUser}`;
//     return dbPool.execute(SQLQuery);
// }

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    // deleteUser,
}