console.clear()
console.log('INICIANDO API PINTEREST...')

const { getAllPinterest }       = require('./controllers/all.controllers')
const { getInicio }             = require('./controllers/inicio.controllers')
const { getHeader }             = require('./controllers/header.controllers')
const { getColumnaPines }       = require('./controllers/columnaPines.controllers')
const { getSectionHoy }         = require('./controllers/sectionHoy.controllers')
const { getMenuNotif }          = require('./controllers/menuNotif.controllers')
const { getMenuUser }           = require('./controllers/menuUser.controllers')
const { getSectionMore }        = require('./controllers/sectionMore.controllers')
const { postLogin }             = require('./controllers/login.controllers')
const { getAUser, deleteUser }  = require('./controllers/usersId.controllers')
const { getAllUsers, postNewUser, putUser } = require('./controllers/users.controllers')


                              require('dotenv').config()
const mongoose              = require('mongoose')
      mongoose.set('strictQuery' , false)
const express               = require('express')
const router                = express.Router()
const cors                  = require('cors')
const app                   = express()


app.use( cors() )
app.use( express.json())
app.use( express.urlencoded({extended: false}))

const url = process.env.BBDD_atlas || process.env.BBDD_local

const main = async()=> await mongoose.connect(url).then( ()=>{
    console.log('Conectado a Mongo en API -> ')
    console.log(url)
})

main()


/* CONECTAMOS CADA ELEMENTO A LA BBDD DE MONGO*/

app.use( router )

router.route('/')
    .get( getAllPinterest )

router.route('/inicio')
    .get( getInicio )

router.route('/header')
    .get( getHeader )

router.route('/columnaPines')
    .get( getColumnaPines )

router.route('/sectionHoy')
    .get( getSectionHoy )

router.route('/menuNotif')
    .get( getMenuNotif )

router.route('/sectionMore')
    .get( getSectionMore )

router.route('/menuUser')
    .get( getMenuUser )

router.route('/login')
    .post( postLogin )

router.route('/users')
    .get( getAllUsers )
    .post( postNewUser )
    .put( putUser )

router.route('/users/:id')
    .get( getAUser )
    .delete( deleteUser )


app.listen(2802, ()=> console.log('ESCUCHANDO...') )
