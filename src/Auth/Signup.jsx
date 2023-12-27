import React, { useContext, useEffect, useRef, useState } from 'react';
import AuthContext from './AuthContext';
import { current } from '@reduxjs/toolkit';

function Signup(props) {


    const [formdata, setformdata] = useState([])
    const { signup, message, setmessage } = useContext(AuthContext)
    const inputfield = useRef()
    const [error, seterror] = useState({
        email: []
    })
    const [dirty, setdirty] = useState({
        email: false
    })


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
        if (!formdata.email) {
            errordata.email.push("please enter the email")
        }

        const emailregax = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

        if (formdata.email) {
            if (!emailregax.test(formdata.email)) {
                errordata.email.push("please enter the valid email")
            }
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
            signup(formdata)
        }
        else {
            const cuurentvalue = inputfield.current.value
            if (!cuurentvalue) {
                Object.keys(dirty).forEach((abc) => dirty[abc] = true)

            }
            setmessage("please resolve error")
        }
    }


    return (
        <div>
            <div className="caption mt-2">
                <h1 className="title display-2">Unlimited movies, TV shows and more</h1>
                <p className="fs-4">Starts at ₹149. Cancel anytime.</p>

                <p className="fs-4 mt-4">
                    Ready to watch? Enter your email to create or restart your membership.
                </p>

                <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    id=""
                    placeholder="Email address"
                    className="  bg-transparent p-3 text-white w-50 fs-5"
                    ref={inputfield}
                    onBlur={blurChange}
                />


                <button
                    className=" btn color text-white fs-4 mx-3 p-3"
                    onClick={register}

                >
                    Get Started{" "}
                </button>
                <div className="text-danger">{dirty["email"] && error["email"] ? error["email"] : ""}</div>
                <div className="text-danger">
                    {message}
                </div>

            </div>
        </div>
    );
}

export default Signup;