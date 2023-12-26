import React from 'react';

function Setup(props) {

    const register=()=>{
        
    }
    return (
        <div>
              <div className="">
      <div className="container position-absolute top-50 start-50 translate-middle ">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <h5 className="px-4">Welcome back! </h5>
          <h5 className="px-4">create a password to start your membership</h5>
          <p className="px-4"> just a few more steps and you're done!</p>
          <p className="px-4">We hate paperwork , too</p>

          <div className="inp1">

            <label htmlFor="" className="m-1">
              Email
            </label>
            <input type="email" name="email" id="" className="p-2 m-2" value={formdata?.email} onChange={handleChange} />
          </div>
          <div className="inp2">
            <label htmlFor="" className="m-1">
              Password
            </label>
            <input type="password" name="password" id="" className="p-2 m-2" onChange={handleChange} />
          </div>

          <div className="btn btn-danger color" onClick={register}>Register</div>
         
        </div>
      </div>
    </div>
        </div>
    );
}

export default Setup;   