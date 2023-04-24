const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema(
    { nombre: String, apellido: String },
    { collection: 'users'}
)

const Users = mongoose.model('Users', usersSchema)

const getAUser = async (req, res)=>{

    const {id} = req.params

    const oneUser = await Users.findById(id)

    res.json(oneUser)
}

const deleteUser = async (req, res)=>{

    const {id} = req.params

    await Users.findByIdAndRemove(id)

    const buscar = await Users.find()
    res.json( buscar )
}

module.exports = {
    getAUser,
    deleteUser
}