const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors")
mongoose.connect("mongodb://127.0.0.1:27017/E-Dashbord")
 .then(()=>{console.log("Database connect")})
.catch((err)=>{console.log(err)});
const allroute=require("./routes/allroutes")
const app=express();
const PORT=5000;
app.use(express.json())
app.use(cors());

 app.use("/",allroute)

app.listen(PORT,()=>{
console.log(`server is running on http://localhost:${PORT}`)
})