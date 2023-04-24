const mongoose = require('mongoose')

const inicioSchema = new mongoose.Schema(
    { titulo: String, subtitulo: String, login: Object},
    { collection: 'inicio'}
)
const Inicio = mongoose.model('Inicio', inicioSchema)

const getInicio = async (req, res)=>{

    const buscar = await Inicio.find()

    let data = buscar
    let status = data ? 200 : 204
    let statusText = data ? 'Enviando info de inicio...' : 'No hay datos.'

    res.status(status).json({ data, status, statusText})
}

module.exports = {
    getInicio
}