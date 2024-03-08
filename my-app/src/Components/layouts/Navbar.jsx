import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import brandlogo from "../../assets/images/Mainlogo.png"


const Navbar = () => {

  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };
  const handleLogoutClick = () => {
    localStorage.removeItem("authToken");
    navigate('/login')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg  navbar-background">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={brandlogo} alt="Logo" className="me-2" style={{ width: "auto", height: "100px" }} />
            Good&Food
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              {(localStorage.getItem("authToken")) ?
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">My Orders</Link>
                </li>
                : ""}

            </ul>
            {(!localStorage.getItem("authToken")) ?
              <div className="d-flex align-items-center">
                <button className="btn btn-primary me-2 navbar-btn" type="button" onClick={handleSignupClick}>
                  Signup
                </button>
                <button className="btn btn-primary me-2 navbar-btn" type="button" onClick={handleLoginClick}>
                  Login
                </button>

              </div>
              :
              <div className='d-flex align-items-center'>
                <button className="btn btn-primary me-2 navbar-btn" type="button" onClick={handleLogoutClick}>
                  My Cart
                </button>
                <button className="btn btn-primary me-2 navbar-btn" type="button" onClick={handleLogoutClick}>
                  Log Out
                </button>
              </div>

            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar