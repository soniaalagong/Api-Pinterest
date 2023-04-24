const mongoose = require('mongoose')

const allSchema = new mongoose.Schema(
    { inicio: Object, header: Object, columnaPines: Array, sectionHoy: Object, menuNotif: Object, menuUser: Object, sectionMore: Object},
    { collection: 'all'}
)
const TodoPinterest = mongoose.model('TodoPinterest', allSchema)


const getAllPinterest = async (req, res) => {

    const buscar = await TodoPinterest.find()

    let data    = buscar
    let status  = data ? 200 : 204 
    let statusText = data ? 'Mostrando Pines...' : 'No hay datos.'
    
    res.status(status).json( {data, status, statusText} ) 
}

module.exports={
    getAllPinterest
}