const mongoose=require("mongoose");

const userSchema= new mongoose.Schema({
    name:String ,
    email:String,
    password:String
    

})

const userData=mongoose.model("user",userSchema);

module.exports = userData;