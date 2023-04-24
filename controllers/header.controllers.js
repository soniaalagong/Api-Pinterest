const mongoose = require('mongoose')

const headerSchema = new mongoose.Schema(
    { inicio: Object, buscar: Object, botones: Object},
    { collection: 'header'}
)
const Header = mongoose.model('Header', headerSchema)

const getHeader = async (req, res)=>{

    const buscar = await Header.find()

    let data = buscar
    let status = data ? 200 : 204
    let statusText = data ? 'Enviando info del header...' : 'No hay datos.'

    res.status(status).json({ data, status, statusText})
}

module.exports = {
    getHeader
}
