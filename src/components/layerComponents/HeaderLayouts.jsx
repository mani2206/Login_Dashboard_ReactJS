import React, { useState, useEffect } from "react";
import {NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom"

function Header() {
  const navigate = useNavigate()
  const [click, setClick] = useState(false);
  const[theme,setTheme] = useState('light')
  const [logout,setLogout]=useState(false)  

  useEffect(()=>{
   if(!localStorage.getItem("auth"))  {
       navigate("/")
   }
  },[logout])

  const logoutHandler = (e)=>{
       e.preventDefault()
       localStorage.removeItem("auth");
       setLogout(true)
  }


  const changeTheme =()=>{
      if(theme === 'light'){
        setTheme('dark')
      }else{
        setTheme('light')
      }
  }
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  return (
    <>
      <div className={`${theme}`}>
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />
        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <NavLink to="/" exact="true" className="nav-logo">
              Logo
            </NavLink>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/"
                  activeclassname="active"
                  className= {`${theme} nav-links`}
                  onClick={click ? handleClick : null}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/about"
                  activeclassname="active"
                  className={`${theme} nav-links`}
                  onClick={click ? handleClick : null}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact="true"
                  to="/contact"
                  activeclassname="active"
                  className={`${theme} nav-links`}
                  onClick={click ? handleClick : null}
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
            <div className="form-check form-switch"  onChange={changeTheme}>
              {
                theme ==='light'?
                 <input
                 className="form-check-input"
                 type="checkbox"
                 role="switch"
                 id="flexSwitchCheckDefault"
               />:
               <input
                 className="form-check-input"
                 type="checkbox"
                 role="switch"
                 id="flexSwitchCheckDefault"/>

              }
             
            </div>
            <div className="nav-icon " onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
            <div>
                <button className="btn btn-danger"  onClick={logoutHandler}>Logout</button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
