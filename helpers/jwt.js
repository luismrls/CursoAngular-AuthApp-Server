const jwt = require('jsonwebtoken');

const generarJwt = (uid, name) => {

    const payload = { uid, name };

    return new Promise((resolve, reject) => {
        jwt.sign( payload, process.env.SECRECT_JWT_SEED, {
            expiresIn: '12h'
        }, (err, token) => {
            if (err) {
                console.log (err);
                reject(err)
            } else {
                resolve(token)
            }
        });
    });
}

module.exports = {
    generarJwt
}