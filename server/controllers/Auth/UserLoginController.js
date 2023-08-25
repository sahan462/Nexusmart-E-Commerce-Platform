const bcrypt = require('bcryptjs');
const user = require('../../models/Auth/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

jwtSecret = process.env.JWT_SECRET;


//login
const login = async (req, res) => {

    const {email, password} = req.body;
    const userDoc = await user.findOne({email});

    if (userDoc) {

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (passOk) {
            const userData = {email: userDoc.email, id: userDoc.id, role: userDoc.role};

            //creating jwt
            jwt.sign(userData, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({email: email, token: token ,httpOnly: true});
            });


        } else {
            res.status(422).json("Access Denied");
        }
    } else {
        res.status(404).send('User not found');
    }
}

module.exports = {login};