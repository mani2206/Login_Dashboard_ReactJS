import React from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login({input,handleChange,errorMessage,fromSubmitter,handleAuthentication}) {
 
  return (
    <>
      <div className="login_page">
        <div className="image">
          <img
            src="images/relationship.jpg"
            alt="logo"
            className="relationship"
          />
        </div>
        <div className="container">
          <div className="form-box">
            <div className="body-form">
              <h2 className="text-center">Login</h2>
              <form>
                <div className="input-group mb-3 py-2">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-user"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    name="email"
                    onChange={handleChange}
                  />
                </div>
                {errorMessage.length >0 && <div className="my-2 text-danger">{errorMessage}</div>}
                <div className="input-group mb-3 py-3">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <i className="fa fa-lock"></i>
                    </span>
                  </div>
                 
                  <input
                    type="current-password"
                    className="form-control"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                  />
                 
                </div>
                <button type="button" className="btn btn-secondary btn-block " onClick={fromSubmitter}>
                  LOGIN
                </button>
                <div className="message">
                  <div>
                    <input type="checkbox"  className="p-3"/> Remember ME
                  </div>
                  <div>
                    <a href="#">Forgot your password</a>
                  </div>
                </div>
                <button className="submit p-2 my-3 ">
                  <NavLink
                    exact="true"
                    to="/sign"
                    activeclassname="active"
                    className="nav-links fw-bold"
                  >
                    Sign
                  </NavLink>
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
