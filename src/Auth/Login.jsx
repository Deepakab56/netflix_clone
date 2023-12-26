import React from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/backgorund.png'

function Login(props) {
    const handleChange=()=>{

    }

    const signup=()=>{

    }
    return (
        <div>
              <div className="position-relative vh-100 ">
        <img className="header-img" src={background} alt="" />

        <div className="container caption1 w-60  offset-2 ">
          <div className="row">
            <div className=" w-100 p-4 ">
              <div className="p-4">
                <p className="fs-3 mx-3">Sign In </p>
                <div className=" d-flex flex-column bg-dark w-100  ">
                  <label htmlFor="emailandpassword" className=" p-1 m-1 opacity-50"> Email and Phone Number</label>
                  <input type="email" name="email" id="emailandpassword" className="bg-transparent border-0 text-white" onChange={handleChange} />
                </div>
                <div className=" d-flex flex-column bg-dark w-100  mt-4 ">
                  <label htmlFor="password" className="p-1 m-1 opacity-50"> Password</label>
                  <input type="password" name="password" id="password" className="bg-transparent border-0 text-white px-2" onChange={handleChange} />
                </div>

                <div className="text-center w-100">
                  <button className="btn color text-white  mt-4 mx-4 p-2  w-50" onClick={signup}>Sign Up</button>
                </div>
               
                <p ><span className="opacity-50">New to Netflix ? </span> <span> <Link className="text-white opacity-100" to="/">  Sign up now.</Link></span> </p>
                <p className="opacity-50">Sign in is protected by Google reCAPTCHA to ensure you’re not a bot. </p>
              </div>
            </div>
          </div>
        </div>


      </div>
            
        </div>
    );
}

export default Login;