const mongoose = require('mongoose')

const columnaPinesSchema = new mongoose.Schema(
    { id: Number, pin: Array},
    { collection: 'columnaPines'}
)
const Columnas = mongoose.model('Columnas', columnaPinesSchema)


const getColumnaPines = async (req, res)=>{

    const buscar = await Columnas.find()

    let data = buscar
    let status = data ? 200 : 204
    let statusText = data ? 'Cargando columnas...' : 'No hay datos.'

    res.status(status).json({ data, status, statusText })
}

module.exports = {
    getColumnaPines
}