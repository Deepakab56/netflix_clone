import React, { useContext, useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { json } from 'react-router-dom';


function Setup(props) {
  const [formdata, setformdata] = useState()
  const { setupPassword, message, setmessage } = useContext(AuthContext)

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


  const register = (e) => {
    e.preventDefault()
    setupPassword(formdata)

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
                  <input type="text" name="email" id="" value={formdata?.email} onChange={handleChange} />
                </div>
                <div className="inp2 m-3">
                  <label htmlFor="" className='form-label px-2' > Password</label>
                  <input type="password" name="password" id="" onChange={handleChange} />
                </div>
              </form>

            </div>






            <div className="btn btn-danger color" onClick={register}>Register</div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Setup;   