const { response } =  require('express');
const Usuario = require('../models/Usuario')


const crearUsuario = async (req, res = response) => {

    const { name, email, password } = req.body;

    try {
        // Verificar email
        let usuario = await Usuario.findOne({email});
        if ( usuario) {
            return res.status(400).json({
                ok: false,
                message: 'El usuario ya existe con ese email'
            });
        }

        // Crear usuario de el modelo
        const dbUsuario = new Usuario( req.body );

        // Encripatar contraseñas con hash

        // Generar JWT

        // Crear usuario de DB
        await dbUsuario.save()
        // Generar respuesta exitosa
        res.status(201).json({
            ok: true,
            uid: dbUsuario.id,
            name
        })


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            message: 'Por favor hable con el administrador'
        })

    }


}
const loginUsuario = (req, res = response) => {

    const { email, password } = req.body;
    console.log(email, password);

    return res.json({
        ok: true,
        message: 'Login de usuario /new'
    })
}

const revalidarToken = (req, res = response) => {
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