const mongoose          = require('mongoose')

const sectionMoreSchema = new mongoose.Schema(
    { titulo: String, subtitulo: String, formulario: Object},
    { collection: 'sectionMore'}
)

const SectionMore = mongoose.model('SectionMore', sectionMoreSchema)

const getSectionMore = async (req, res)=>{

    const buscar = await SectionMore.find()

    let data = buscar
    let status = data ? 200 : 204
    let statusText = data ? 'Cargando sectionMore' : 'No hay datos'

    res.status(status).json({data, status, statusText})
}

module.exports = {
    getSectionMore
}