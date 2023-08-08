const bcrypt = require('bcryptjs');
const buyer = require('../models/BuyerModel');
const seller = require('../models/SellerModel');
const jwt = require('jsonwebtoken');

jwtSecret = "f6s5d4f6s54s6df5ds65f6s5f4684s6dfs6fs65fsd68f46f5s6fsfds8fs8f9sf9sf9sf7e";


//handle errors
const handleErrors = (err) => {

    let errors = {email: '', password: ''};

    //duplicate error code
    if(err.code === 11000){
        errors.email = "That email is already registered";
        return errors;
    }

    //validation errors
    if(err.message.includes("Buyer validation failed") || err.message.includes("Seller validation failed")){
        Object.values(err.errors).forEach(({properties})=>{
            errors[properties.path] = properties.message;
        })
    }

    return errors;
}


//buyer registration
const registerBuyer = async (req, res) => {

    const {name,email,password} = req.body;

    try {

        const buyerDoc = await buyer.create({
            name: name,
            email: email,
            password: password,
        });
        res.status(200).json(buyerDoc);
    }catch (err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }

}

//seller registration
const registerSeller = async (req, res) => {

    const {name,email,password} = req.body;

    try {
        const sellerDoc = await seller.create({
            name: name,
            email: email,
            password: password,
        });
        res.status(200).json(sellerDoc);
    }catch (err){
        const errors = handleErrors(err);
        res.status(400).json({errors});
    }

}

//buyer and seller login
const login = async (req, res) => {

    const { email, password } = req.body;
    const buyerDoc = await buyer.findOne({ email });
    const sellerDoc = await seller.findOne({ email });

    if (buyerDoc || sellerDoc) {

        let userDoc = null;
        if (buyerDoc) {
            userDoc = buyerDoc;
        } else {
            userDoc = sellerDoc;
        }

        const passOk = bcrypt.compareSync(password, userDoc.password);

        if (passOk) {
            const userData = { email: userDoc.email, id: userDoc.id, role: userDoc.role };

            //creating jwt
            jwt.sign(userData, jwtSecret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({httpOnly: true});
                res.status(200).send("pass ok");
            });


        } else {
            res.status(422).json("pass not ok");
        }
    } else {
        res.status(404).send('User not found');
    }

}


module.exports = {
    registerBuyer,
    registerSeller,
    login
}