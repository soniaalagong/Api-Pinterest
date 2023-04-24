let usuarios = [
    { userName: "Sonia Alagón",
      contra: "1234"
    },
    { userName: "Eduardo Fierro",
      contra: "admin"
    },
    { userName: "CEI escuela",
      contra: "master"
    }
]

const postLogin = (req, res)=>{

    const {userName, contra} = req.body

    let buscar = usuarios.find( user => user.userName === userName)

    buscar === undefined && res.json({data: {login: false}, status: 200, statusText: 'Usuario erróneo'})
    buscar && buscar.contra === contra && res.json({data: {usuario: buscar.userName, login: true}, status: 200, statusText: 'Todo correcto.'})
    buscar && buscar.contra !== contra && res.json({data: {login: false}, status: 200, statusText: 'Contraseña incorrecta.'})
}

module.exports = {
    postLogin
}