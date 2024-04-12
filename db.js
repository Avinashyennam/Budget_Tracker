const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1/Budget_Tracker")
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