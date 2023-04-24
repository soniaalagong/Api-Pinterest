const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    { nombre: String, apellido: String },
    { collection: 'users', versionKey : false}
)
const Usuarios = mongoose.model('Usuarios', usersSchema)

const getAllUsers = async (req, res)=>{

    const buscar = await Usuarios.find()
    res.json(buscar)
}

const postNewUser = async (req, res)=>{

    const {nombre, apellido} = req.body

    const nuevo = new Usuarios({ nombre, apellido})
    await nuevo.save()

    /*Para saber si está o no insertado*/
    const buscar = await Usuarios.find()
    res.json( buscar ) 
}

const putUser = async (req, res)=>{

    const {body} = req
    const {_id, ...resto} = body

    await Usuarios.findByIdAndUpdate(_id, resto)

    const buscar = await Usuarios.find()
    res.json( buscar ) 
}

module.exports = {
    getAllUsers,
    postNewUser,
    putUser
}