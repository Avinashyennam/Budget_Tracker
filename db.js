const mongoose = require("mongoose");
require('dotenv').config();
const mongoUri = process.env.DATABASE;
mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
.then(()=>{
    console.log("Database connected");
})
.catch((e)=>{
    console.log("error is ",e);
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
    },
    type:{
        type:String,
        required: true
    }
})


const collection = new mongoose.model("transactions",dataSchema);
module.exports = collection;
