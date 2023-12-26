import React from 'react';
import netflix from "../assets/Netflix_Logo_RGB.png";
import { Link } from 'react-router-dom';
function Navbar(props) {
    return (
        <>
        <nav class="navbar navbar-expand-lg  fixed-top navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"><img src={netflix}  width={120} height={50}/></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="#">Home</Link>
        </li>
       
       
      
      </ul>
      <Link className="nav-link btn color text-white p-2" to="/login">Sign in</Link>
    </div>
  </div>
</nav>
        </>
    );
}

export default Navbar;