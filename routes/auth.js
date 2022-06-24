const {Router} = require('express');

const router = Router();

// Crear un nuevo usuario
router.post('/new', (req, res) => {
    return res.json({
        ok: true,
        message: 'Crear usuario /new'
    })
});

// login de usuario
router.post('/', (req, res) => {
    return res.json({
        ok: true,
        message: 'Login de usuario /new'
    })
});

// Validar y revalidar token
router.get('/renew', (req, res) => {
    return res.json({
        ok: true,
        message: 'Renew'
    })
});

module.exports = router;