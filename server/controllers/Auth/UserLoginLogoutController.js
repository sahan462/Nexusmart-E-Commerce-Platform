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
            jwt.sign(userData, jwtSecret, { expiresIn: '1h' }, (err, token) => {
                if (err) throw err;
                res
                    .header('x-auth-token', token)
                    .cookie('token', token, { httpOnly: true, maxAge: 3600000 })
                    .json({ name: userDoc.name, email: userDoc.email, role: userDoc.role });
            });
        } else {
            res.status(422).json("Access Denied");
        }
    } else {
        res.status(404).send('User not found');
    }
}

const logout = (req, res) => {
    res.status(200).json({ loggedOut: true, message: 'Logged out successfully' });
    res.cookie('token', '', { expires: new Date(0), httpOnly: true }).send();
}

module.exports = {
    login,
    logout
};