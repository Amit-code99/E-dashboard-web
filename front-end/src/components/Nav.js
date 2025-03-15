import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Link,useNavigate } from "react-router-dom";
const Nav = () => {
  const auth=localStorage.getItem("user");
  const navigate=useNavigate()

     const logOut=()=>{
           localStorage.clear()
           navigate("/signup")

     };
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary ">
        <div class="container-fluid">
          <Link class="navbar-brand text-white" to="#">
            E-Dashboard
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active text-white" aria-current="page" to="/">
                  Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/add">
                  Add-Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/update">
                  Update-Product
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link text-white" to="/profile">
                 Profile
                  
                </Link>
              </li>
              
              
            </ul>
            <span class="navbar-text text-white">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item logbar">
                
             {auth ? <Link class="nav-link text-white" onClick={logOut} to="/signup">Logout ({JSON.parse(auth).name}) </Link> :<>
              <Link class="nav-link text-white" to="/signup">Signup</Link> 
              <Link class="nav-link text-white" to="/login"> Login</Link>
              </>
              }

              </li>
            
              </ul>
            </span>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
