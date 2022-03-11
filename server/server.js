const express = require("express");
// const cors  = require("cors");
const mongoose = require('mongoose');
require('dotenv').config();

const app = express()
// app.use(cors());
app.use(express.json());
app.use(require('./router/routes.js'))


const PORT = process.env.PORT || 5000;
const DB = process.env.ATLAS_URI;

mongoose.connect(DB).then(()=>{
    console.log("Database Connected 😎") 
}).catch((err)=>{
    console.log(err)
    console.log("Database Connection Failed!")
})




app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})
