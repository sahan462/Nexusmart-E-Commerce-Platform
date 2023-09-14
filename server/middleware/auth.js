const jwt = require('jsonwebtoken');
const User = require('../models/Auth/UserModel');
const Seller = require('../models/Auth/SellerModel');
require('dotenv').config();

async function verifySignin(req, res, next) {
    const token = req.header('x-auth-token');
    if (!token) return res.status(401).send('Access denied. No token provided');

    try {
        const decoded = jwt.verify(token, jwtSecret = process.env.JWT_SECRET);
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

function verifyAdmin(req, res, next) {
    if (req.body.role!='admin') return res.status(400).send('Not a Admin');
    next()
}


module.exports = {
    verifySignin,
    verifySeller,
    verifyBuyer,
    verifyAdmin
};