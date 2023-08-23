const bcrypt = require('bcryptjs');
const user = require('../../models/Auth/UserModel');
const jwt = require('jsonwebtoken');

jwtSecret = "f6s5d4f6s54s6df5ds65f6s5f4684s6dfs6fs65fsd68f46f5s6fsfds8fs8f9sf9sf9sf7e";


//login
const login = async (req, res) => {

    const {email, password} = req.body;
    const userDoc = await user.findOne({email});

    if (userDoc) {

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (passOk) {
            const userData = {email: userDoc.email, id: userDoc.id, role: userDoc.role, data: userDoc.userData};

            //creating jwt
            jwt.sign(userData, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({validate:true ,httpOnly: true});
            });


        } else {
            res.status(422).json("Access Denied");
        }
    } else {
        res.status(404).send('User not found');
    }
}

module.exports = {login};