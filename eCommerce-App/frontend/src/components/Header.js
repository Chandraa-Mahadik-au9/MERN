import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Cart from "../assets/cart-b.svg";
import { logout } from '../actions/userActions.js';

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const logoutHandler = () => {
    dispatch(logout());
    console.log("Logout successful.");
  }

  return (
    <div>
      <nav
        className='navbar navbar-expand-lg navbar-light shadow-sm'
        style={{ backgroundColor: "#8BE27E" }}
      >
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Deals Wagon
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link active' aria-current='page' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Link
                </Link>
              </li>
            </ul>
            <div className='d-flex'>
              <Link to='/cart' className='align-self-center'>
                <img className='cart' src={Cart} alt='cart' />
                <strong className='bg-transparent m-1 border-0'>Cart</strong>
              </Link>
              {userInfo ? (
                <div class="dropdown ml-1">
                  <button class="btn btn-primary dropdown-toggle" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    {userInfo.name}
                  </button>

                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                    <li><Link class="dropdown-item" to="/profile">Profile</Link></li>
                    <li><button class="dropdown-item" onClick={logoutHandler} >Logout</button></li>
                  </ul>
                </div>
              ) : (
                <Link to='/login'>
                  <button className='btn btn-outline-primary m-1 border-0'>
                    Sign In
                  </button>
                </Link>
              )}
              
              {/* <Link to='/register'>
                <button className='btn btn-primary m-1'>Sign Up</button>
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
