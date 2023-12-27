import React, { useContext } from 'react';
import netflix from "../assets/Netflix_Logo_RGB.png";
import { Link } from 'react-router-dom';
import AuthContext from '../Auth/AuthContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navbar(props) {
  const { user,logout } = useContext(AuthContext)

 
  return (
    <>
      <nav className="navbar navbar-expand-lg  fixed-top navbar-dark">
        <div className="container-fluid">
        {
            user ?
              <>
                <Link class="navbar-brand" to="/originalpage" className="offset-0.5">
                  <img src={netflix} alt="" className="" width={150} height={80} />
                </Link>
                <div class="dropdown mx-4">
                  <p class="btn btn-transparent dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FontAwesomeIcon icon={faUser} className="text-white fs-4" />
                  </p>
                  <ul class="dropdown-menu position-absolute end-50 ">
                    <li><Link class="dropdown-item " to="/" onClick={logout}>Sign out</Link></li>
                    {/* <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li> */}
                  </ul>
                </div>



              </>
              :
              <>
                <Link class="navbar-brand" to="/" className="offset-0.5">
                  <img src={netflix} alt="" className="" width={150} height={80} />
                </Link>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse " id="navbarSupportedContent">
                  <form class="d-flex ms-auto" role="search">
                    <Link className="nav-link btn color text-white p-2" to="/login">Sign in</Link>
                  </form>
                </div>
              </>
          }

        </div>
      </nav>
    </>
  );
}

export default Navbar;