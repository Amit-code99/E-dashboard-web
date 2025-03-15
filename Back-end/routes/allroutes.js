const mongoose=require("mongoose");
const express=require("express");
const userData=require("../models/user")
const allroute=express.Router();
 
allroute.get("/",(req,res)=>{
return res.send("Project is under devlopment")
});

allroute.post("/signup",async(req,res)=>{
    const bodyData=new userData(req.body);
    let result= await bodyData.save();
      result=result.toObject();
      delete result.password
    res.send(result)

});

allroute.post("/login",async(req,res)=>{
    if(req.body.password && req.body.email){
        let user= await userData.findOne(req.body).select("-password");
        if(user){
         res.send(user)
        }else{
         res.send({result:"user not found"});
        }
    }else{
        res.send({result:"user not found"});
    }
   
   
})


module.exports=allroute