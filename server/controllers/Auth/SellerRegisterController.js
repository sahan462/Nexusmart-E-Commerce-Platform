const user = require('../../models/Auth/UserModel');
const seller = require('../../models/Auth/SellerModel');
const validator = require('validator');



//handle errors
const  checkErrors = async (name, email, password) => {

    const exists = await user.findOne({email});

    if(exists && exists.role === "seller"){
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

//seller registration
const registerSeller = async (req, res) => {

    const {name,email,password,street,city,state,zip} = req.body;

    try {
        await checkErrors(name, email, password);

        const sellerDoc = await seller.create({
            address : {
                street: street,
                city: city,
                state: state,
                zip: zip
            }
        });

        const userDoc = await user.create({
            name: name,
            email: email,
            password: password,
            role: "seller",
            sellerData: userDoc._id
        })

        res.status(200).json({User:userDoc, Seller: sellerDoc});

    }catch (err){
        res.status(400).json({error : err.message});
    }

}

module.exports = {registerSeller};