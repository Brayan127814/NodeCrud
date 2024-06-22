const db = require("./db");

//obterner todos los usuarios

const getUser = (callback) => {
  db.query("SELECT * FROM users", callback);
};
//OBTENER USUARIOS POR ID

const getUserid = (id, callback) => {
  db.query("SELECT * FROM users WHERE id = ? ", [id], callback);
};
//CREAR USUSARIO

const crearUsers = (userData,callback) => {
  db.query("INSErT INTO users SET ? ",userData, callback);
};

//ACTUALIZAR DATOS

const putUsers = (id, userData, callback) => {
  db.query("UPDATE users set ?  where id= ? ", [userData, id], callback);
};


//DELETE USERS
const deleteUsers =(id, callback)=>{
    db.query('DELETE FROM users WHERE id = ?' ,[id],callback)
}


module.exports ={
    getUser,
    getUserid,
    crearUsers,
    putUsers,
    deleteUsers
}