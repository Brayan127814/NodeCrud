const express = require ('express')
const route = require('../Route/route')
const app = express()
const PORT = process.env.PORT  || 3000

//middleware

app.use(express.json())

//RUTAS 

app.use('/users',route)


app.listen(PORT ,()=>{
    console.log('El servidor está corriendo en el puerto ' + PORT)
})