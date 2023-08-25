const express = require("express");
const {connect} = require('mongoose');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
require('dotenv').config();

const regLog = require('./routes/UserRegisterLogRoute');
const item = require('./routes/ItemRoute');
const cart = require('./routes/CartRoute');
const feedback = require('./routes/FeedbackRoute');

app.use(cors({
  credentials:true,
  origin:'http://localhost:3000',
}));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

connect(process.env.MONGO_URL)
  .then(()=>console.log("connected to mongodb..."))
  .catch(()=>console.log("Could not connect to mongodb..."));


app.use('/auth', regLog);
app.use('/items', item);
app.use('/cart', cart);
app.use('/feedback', feedback);

const port = 5000;
app.listen(port, ()=>{
  console.log(`listening on port ${port}...`);
});

