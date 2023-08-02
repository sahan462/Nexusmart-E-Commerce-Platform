const bcrypt = require('bcryptjs');
const user = require('../models/user');
const bcryptSalt = bcrypt.genSaltSync(10);


const register = async (req, res) => {

    const {name,email,password} = req.body;

    const userDoc = await user.create({
        name : name,
        email : email,
        password : bcrypt.hashSync(password, bcryptSalt),
    });
    //console.log(userDoc);
    res.status(200).json(userDoc);

}

const login = async (req, res)=>{

    const {email, password} = req.body;

    const userDoc = await user.findOne({email});
    if(userDoc){

        const passOk = bcrypt.compareSync(password, userDoc.password);
        if(passOk){
            jwt.sign({email:userDoc.email, id:userDoc.id}, jwtSecret, {}, (err,token)=>{
                if(err) throw err;
                res.cookie('token', token).json("pass ok");
            })
        }else{
            res.status(422).json("pass not ok");
        }

    }else{
        res.send('not found');
    }
}

module.exports = {
    register,
    login
}