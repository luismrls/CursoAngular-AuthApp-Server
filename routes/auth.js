const {Router} = require('express');
const {crearUsuario, loginUsuario, revalidarToken} = require("../controllers/auth");
const {check} = require("express-validator");
const {validarCampos} = require("../middleware/validar-campos");
const { validarJWT } = require('../middleware/validar-jwt');

const router = Router();

// Crear un nuevo usuario
router.post('/new',[
    check('name', 'El nombre es obligatorio').notEmpty().isLength({min:3}),
    check('password', 'El password es obligatorio y debe tener minimo 6 caracteres').isLength({min:3}),
    check('email', 'El email es obligatorio').isEmail(),
    validarCampos
],crearUsuario);

// login de usuario
router.post('/',[
    check('email', 'El email es obligatorio').isEmail(),
    check('password', 'El password es obligatorio y debe tener minimo 6 caracteres').isLength({min: 6}),
    validarCampos
],  loginUsuario);

// Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;