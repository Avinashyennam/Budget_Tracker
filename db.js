const mongoose = require("mongoose");
require('dotenv').config();
const mongoUri = process.env.MONGODB_URI;
console.log(mongoUri);
mongoose.connect(mongoUri)
.then(()=>{
    console.log("Database connected");
})
.catch(()=>{
    console.log("Failed to connect to Database");
})

const dataSchema = new mongoose.Schema({
    amount:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true,
    }
})


const collection = new mongoose.model("transactions",dataSchema);
module.exports = collection;