//const { pinterest } = require('../bbddMain')

const mongoose          = require('mongoose')

const sectionHoySchema = new mongoose.Schema(
    { filaInspo: Array, sectionFin: Object},
    { collection: 'sectionHoy'}
)
const SectionHoy = mongoose.model('SectionHoy', sectionHoySchema)


const getSectionHoy = async (req, res)=>{

    const buscar = await SectionHoy.find()

    let data = buscar
    let status = data ? 200 : 204
    let statusText = data ? 'Cargando seccionHoy...' : 'No hay datos'

    res.status(status).json({data, status, statusText})
}

module.exports = {
    getSectionHoy
}