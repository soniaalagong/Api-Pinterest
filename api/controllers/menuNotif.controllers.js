//const { pinterest } = require('../bbddMain')

const mongoose          = require('mongoose')

const menuNotifSchema = new mongoose.Schema(
    { titulo: String, imagenes: Array, listado: Array},
    { collection: 'menuNotif'}
)
const MenuNotif = mongoose.model('MenuNotif', menuNotifSchema)


const getMenuNotif = async (req, res)=>{

    const buscar = await MenuNotif.find()

    let data = buscar
    let status = data ? 200 : 204
    let statusText = data ? 'Cargando menuNotif' : 'No hay datos'

    res.status(status).json({data, status, statusText})
}

module.exports = {
    getMenuNotif
}
