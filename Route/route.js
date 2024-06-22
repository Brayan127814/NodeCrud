const express = require('express')
const route = express.Router()
const controller = require('../controller/userControllers')



route.get('/',controller.getUser)
route.get('/:id',controller.getUserid)
route.post('/',controller.crearUser)
route.put('/:id',controller.putUsers)
route.delete('/:id',controller.deleteUsers)


module.exports = route