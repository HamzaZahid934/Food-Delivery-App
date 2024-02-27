import React from 'react'
import { Link, useNavigate } from 'react-router-dom'



const Navbar = () => {

  const navigate = useNavigate();
  const handleSignupClick = () => {
    navigate('/signup');
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-background">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Good&Food
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Shop</Link>
            </li>

          </ul>
          <div className='d-flex justify-content-center align-items-center gap-3 px-3'>
            <button className="btn btn-primary me-2 navbar-btn " type="button" onClick={handleSignupClick}>Signup</button>

            <button className="btn btn-primary me-2 navbar-btn " type="button" onClick={handleLoginClick}>Login</button>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Navbar