import React,{useState,useEffect} from "react";
import {useNavigate} from 'react-router-dom'

const Signup = () => {
   const [name,setName]=useState("");
   const [email,setEmail]=useState(""); 
   const [password,setPassword]=useState("");
   const navigate=useNavigate();

     useEffect(()=>{
      const auth=localStorage.getItem("user");
      if(auth){
        navigate("/")
      }
     })
   
   const collectData= async()=>{
    console.log(name,email,password)
      let result= await fetch('http://localhost:5000/signup',{
        method:'post',
        body:JSON.stringify({name, email, password}),
        headers:{
          'Content-type':'application/json'
        },

      });
      result=await result.json()
      console.warn(result)
      localStorage.setItem("user",JSON.stringify(result));
      if(result)
        {
        navigate("/")
      }

   }

  return (
    <div class="mt-4">
        <div class="card  vstack gap-2 col-md-5 mx-auto" style={{width: "26rem"}}>
      <div class="m-4">
      <h2>Register</h2>
      <div class="mb-3">
          
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter your Name"
            class="form-control"
            id="exampleInputName"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
         
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Enter your Email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          
          <input
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Enter your Password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>

        <button  onClick={collectData} class="btn btn-primary">
          Sign UP
        </button>
      </div>
      </div>
    </div>
  );
};

export default Signup;
