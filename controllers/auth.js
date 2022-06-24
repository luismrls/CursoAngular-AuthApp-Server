const { response } =  require('express');


const crearUsuario = (req, res = response) => {

    return res.json({
        ok: true,
        message: 'Crear usuario /new'
    })
}

const loginUsuario = (req, res) => {
    return res.json({
        ok: true,
        message: 'Login de usuario /new'
    })
}

const revalidarToken = (req, res) => {
    return res.json({
        ok: true,
        message: 'Renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}