import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import background from '../assets/backgorund.png'
import AuthContext from './AuthContext';

function Login(props) {

  const [formdata, setformdata] = useState([])
  const { login, message,setmessage} = useContext(AuthContext)
  const inputfield = useRef()
  const [error, seterror] = useState({
    email: [],
    password: []
  })

  const [dirty, setdirty] = useState({
    email: false,
    password: false
  })


  const handleChange = (e) => {
    const { name, value } = e.target
    setformdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const validate=()=>{
    const errorData ={}
    errorData.email=[]
    errorData.password=[]

    if(!formdata.email)
    {
      errorData.email.push("please enter the email ")
    }
    const regaxemail = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
    if(formdata.email)
    {
      if(!regaxemail.test(formdata.email))
      {
        errorData.email.push("please enter the valid email")
      }
    }

    if(!formdata.password)
    {
      errorData.password.push("please enter the password")
    }
   seterror(errorData)
  }

  useEffect(validate,[formdata])

  const blurChange=(e)=>{
    const {name} = e.target
    setdirty((prev)=>({
      ...prev,
      [name]:true
    }))
    validate()

  }

  const isvalid=()=>{
    let valid = true
    for(let controls in error)
    {
      if(error[controls].length>0)
      {
        valid=false
      }
    }
    return valid
  }

  const signup = (e) => {
    e.preventDefault()
    if(isvalid())
    {
      login(formdata)
    }
    else{
      const currentvalue = inputfield.current.value
      if(!currentvalue)
      {
        Object.keys(dirty).forEach((abc)=>dirty[abc]=true)
      }
      setmessage("please resolve error")
    }

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
                <form action="">
                  <div className=" d-flex flex-column bg-dark w-100  ">
                    <label htmlFor="emailandpassword" className=" p-1 m-1 opacity-50"> Email and Phone Number</label>
                    <input type="email" name="email" id="emailandpassword" className="bg-transparent border-0 text-white" onChange={handleChange} ref={inputfield} onBlur={blurChange} />
                  </div>
                  <div className="text-danger">{dirty["email"] && error["email"] ? error["email"] : ''}</div>
                  <div className=" d-flex flex-column bg-dark w-100  mt-4 ">
                    <label htmlFor="password" className="p-1 m-1 opacity-50"> Password</label>
                    <input type="password" name="password" id="password" className="bg-transparent border-0 text-white px-2" onChange={handleChange} ref={inputfield} onBlur={blurChange} />
                  </div>
                  <div className="text-danger">{dirty["password"]&& error["password"] ? error["password"] :""}</div>
                </form>
                <div className="text-center w-100">
                  <button className="btn color text-white  mt-4 mx-4 p-2  w-50" onClick={signup}>Sign Up</button>
                </div>
                <div className="text-danger">{message}</div>
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