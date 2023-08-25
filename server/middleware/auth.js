const jwt = require('jsonwebtoken');

function verifySignin(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided');

    try {
        const decoded = jwt.verify(token, 'f6s5d4f6s54s6df5ds65f6s5f4684s6dfs6fs65fsd68f46f5s6f');
        req.body.id=decoded.id;
        req.body.role=decoded.role;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token');
    }
}

function verifySeller(req, res, next) {
    if (req.body.role!='seller') return res.status(400).send('Not a seller');
    next()
}

function verifyBuyer(req, res, next) {
    if (req.body.role!='buyer') return res.status(400).send('Not a buyer');
    next()
}

module.exports = {
    verifySignin,
    verifySeller,
    verifyBuyer
};