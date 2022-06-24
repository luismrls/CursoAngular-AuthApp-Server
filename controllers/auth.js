const { response } =  require('express');


const crearUsuario = (req, res = response) => {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    return res.json({
        ok: true,
        message: 'Crear usuario /new'
    })

}
const loginUsuario = (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);

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