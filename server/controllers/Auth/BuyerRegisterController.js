const user = require('../../models/Auth/UserModel');
const buyer = require('../../models/Auth/BuyerModel');
const validator = require('validator');

//handle errors
const  checkErrors = async (name, email, password) => {

    const exists = await buyer.findOne({email});

    if(exists){
        throw Error("Email is already registered")
    }

    if(!name || !email || !password){
        throw Error("All fields must be filled");
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid");
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password is not strong enough");
    }

}


//buyer registration
const registerBuyer = async (req, res) => {

    const {name,email,password} = req.body;

    try {
        await checkErrors(name, email, password);
        const userDoc = await user.create({
            name: name,
            email: email,
            password: password,
            role: "buyer"
        });
        res.status(200).json(userDoc);
    }catch (err){
        res.status(400).json({error : err.message});
    }

}


module.exports = {registerBuyer};
