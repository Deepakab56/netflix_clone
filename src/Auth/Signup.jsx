import React from 'react';

function Signup(props) {
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

                    id=""
                    placeholder="Email address"
                    className="  bg-transparent p-3 text-white w-50 fs-5"

                />


                <button
                    className=" btn color text-white fs-4 mx-3 p-3"

                >
                    Get Started{" "}
                </button>
                <div className="text-danger">

                </div>
                
            </div>
        </div>
    );
}

export default Signup;