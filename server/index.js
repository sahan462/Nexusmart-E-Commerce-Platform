const express = require("express");
const {connect} = require('mongoose');
const cors = require('cors');
const app = express();


const RegLog = require('./routes/UserRegisterLogRoute');

app.use(cors({
  credentials:true,
  origin:'http://localhost:3000',
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Uyzw8Ee5ADGHlESn
connect("mongodb+srv://devXcrew:Uyzw8Ee5ADGHlESn@cluster0.du3wi1a.mongodb.net/?retryWrites=true&w=majority");

app.use('/', RegLog);


app.listen(5000)
