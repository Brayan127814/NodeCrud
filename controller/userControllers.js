const itemUser = require("../src/query");

//obtener los datos de la base de datos

const getUser = (req, res) => {
  itemUser.getUser((err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ menssaje: "Error interno en el servidor" });
    }
    res.json(results);
  });
};

//obtener los datos de la base de datos por medio de ud ID

const getUserid = (req, res) => {
  const id = req.params.id;
  itemUser.getUserid(id, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ menssaje: "Error interno en el servidor" });
    }
    if (!results) {
      return res.status(404).json({ menssaje: "Resultado no encontrado" });
    }

    res.json(results);
  });
};

//CREAR USER
const crearUser = (req , res)=>{
    const newUser = req.body
    itemUser.crearUsers(newUser,(err, results)=>{
        if(err){
            console.error(err)
            return res.status(500).json({menssaje:'error interno del servidor'})
        }

        res.status(201).json({menssaje:'Users crado exítosamente', id:results.insertid})
    })
}

//ACTUALIZAR DATOS

const putUsers = (req, res) => {
  const id = req.params.id;
  const newData = req.body;

  itemUser.putUsers(id, newData, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ menssaje: "Error interno en el servidor" });
    }

    res.json({ menssaje: "Registro Actualizado" });
  });
};

//DELETE USERS

const deleteUsers = (req, res) => {
  const id = req.params.id;
  itemUser.deleteUsers(id, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ menssaje: "Error interno en el servidor" });
    }

    res.json({ menssaje: "Usuario Eliminado" });
  });
};

module.exports = {
  getUser,
  getUserid,
  crearUser,
  putUsers,
  deleteUsers,
};
