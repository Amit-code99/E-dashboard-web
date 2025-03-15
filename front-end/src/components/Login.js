import React,{useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const navigate=useNavigate();
    useEffect(()=>{
      let auth=localStorage.getItem("user")
      if(auth){
        navigate("/")
      }
    });

    const loginHandle= async()=>{
        console.log(email,password)
        let result=await fetch('http://localhost:5000/login',{
          method:"post",
          body:JSON.stringify({email,password}),
          headers:{
            'Content-Type':'application/json'
          }
        })
        result=await result.json();
        console.log(result)
         
        if(result.name){
          localStorage.setItem("user",JSON.stringify(result));
          navigate("/")
        }else{
          alert("Please enter correct email or password");
        }
    }

    return(
        <div class="mt-4">
        <div class="card  vstack gap-2 col-md-5 mx-auto" style={{width: "26rem"}}>
      <div class="m-4">
      <h2>Login</h2>
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

        <button  onClick={loginHandle} class="btn btn-primary">
          Login
        </button>
      </div>
      </div>
    </div>
    )
}

export default Login