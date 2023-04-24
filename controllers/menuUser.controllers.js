const mongoose          = require('mongoose')

const menuUserSchema = new mongoose.Schema(
    { cuenta: Object, premium: Object},
    { collection: 'menuUser'}
)
const MenuUser = mongoose.model('MenuUser', menuUserSchema)

const getMenuUser = async (req, res) => {

    const buscar = await MenuUser.find()

    let data = buscar
    let status = data ? 200 : 204
    let statusText = data ? 'Enviando info de menuUser...' : 'No hay datos.'

    res.status(status).json({ data, status, statusText})
}

module.exports = {
    getMenuUser
}

