const { response } = require("express");
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next) => {

    const token = req.header('x-token');

    if (!token) {
        return res.status(401).json({
            ok: false,
            message: 'error de token'
        })
    }

    try {

        const { uid, name } = jwt.verify(token, process.env.SECRECT_JWT_SEED);
        req.uid = uid;
        req.name = name;
        
    } catch (error) {
        return res.status(401).json({
            ok: false,
            message: 'token no valido'
        })
    }

    // Todo ok
    next();

}

module.exports = {
    validarJWT
}