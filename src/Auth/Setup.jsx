import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from './AuthContext';
import { json } from 'react-router-dom';


function Setup(props) {
  const [formdata, setformdata] = useState([])
  const { setupPassword, message, setmessage } = useContext(AuthContext)
  const inputfield = useRef()
  const [error, seterror] = useState({
    email: []
  })
  const [dirty, setdirty] = useState({
    email: false
  })


  const local = localStorage.getItem("user")
  const userdata = JSON.parse(local)


  useEffect(() => {
    setformdata(userdata)
  }, [local])


  const handleChange = (e) => {
    const { name, value } = e.target

    setformdata((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  const validate = () => {
    const errordata = {}
    errordata.email = []
    errordata.password = []
    if (!formdata.email) {
      errordata.email.push("please enter the email")
    }

    const emailregax = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

    if (formdata.email) {
      if (!emailregax.test(formdata.email)) {
        errordata.email.push("please enter the valid email")
      }
    }


    if (!formdata.password) {
      errordata.password.push("please enter the password")
    }
    seterror(errordata)
  }

  useEffect(validate, [formdata])


  const isvalid = () => {
    let valid = true
    for (let controls in error) {
      if (error[controls].length > 0) {
        valid = false
      }
    }
    return valid
  }

  const blurChange = (e) => {
    const { name } = e.target
    setdirty((prev) => ({
      ...prev,
      [name]: true
    }))
    validate()
  }


  const register = (e) => {
    e.preventDefault()
    if (isvalid()) {
      setupPassword(formdata)
    }
    else {
      const currentvalue = inputfield.current.value
      if (!currentvalue) {
        Object.keys(dirty).forEach((abc) => dirty[abc] = true)
      }
      setmessage("please resolve error")
    }


  }
  return (
    <div className='bg-primary'>
      <div className="">
        <div className="container position-absolute top-50 start-50 translate-middle ">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <h5 className="px-4">Welcome back! </h5>
            <h5 className="px-4">create a password to start your membership</h5>
            <p className="px-4"> just a few more steps and you're done!</p>
            <p className="px-4">We hate paperwork , too</p>

            <div className="d-flex flex-columm justify-content-center align-items-center">

              <form action="">
                <div className="inp1 mt-2 mx-4 px-4">
                  <label htmlFor="" className="form-label px-2">Email</label>
                  <input type="text" name="email" id="" value={formdata?.email} onChange={handleChange} ref={inputfield} onBlur={blurChange} />
                </div>
                <div className="text-danger mx-4">{dirty["email"] && error["email"] ? error["email"] : ''}</div>
                <div className="inp2 m-3">
                  <label htmlFor="" className='form-label px-2' > Password</label>
                  <input type="password" name="password" id="" onChange={handleChange} ref={inputfield} onBlur={blurChange} />
                  <div className="text-danger">{dirty["password"]&& error["password"] ? error["password"] :""}</div>
                </div>
              </form>

            </div>






            <div className="btn btn-danger color" onClick={register}>Register</div>
<div className="text-white">{message}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Setup;   