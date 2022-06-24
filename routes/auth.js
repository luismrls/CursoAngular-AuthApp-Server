const {Router} = require('express');
const {crearUsuario, loginUsuario, revalidarToken} = require("../controllers/auth");
const {check} = require("express-validator");

const router = Router();

// Crear un nuevo usuario
router.post('/new', crearUsuario);

// login de usuario
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio y debe tener minimo 6 caracteres').isLength({min: 6}),
],  loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);

module.exports = router;