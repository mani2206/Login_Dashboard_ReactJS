import React, { useState, useEffect } from "react";
import { countries } from "../schema/Schema";
import { NavLink } from "react-router-dom";
import Header from "./HeaderLayouts";

export default function Sign() {
  const [person, setPerson] = useState({
    firstname: "",
    phonenumber: "",
    email: "",
  });
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  return (
    <>
      <div className="p-5 bg-white d-flex">
        <div className="image">
          <img
            src="images/relationship.jpg"
            alt="logo"
            className="relationship"
          />
        </div>

        <div className="container">
          <h1 className="text-danger">Sign In</h1>
          <div>
            <h6>Name</h6>
            <input type="text" placeholder="Enter name" />
          </div>
          <div className="py-2">
            <h6>Phone Number</h6>
            <input type="tel" placeholder="Enter phone number" />
          </div>
          <div className="py-2">
            <h6>Email</h6>
            <input type="email" placeholder="Enter Email Id" />
          </div>
          <div>
            <h6>Countires</h6>
            <select
              onChange={(e) => {
                setCountry(e.target.value);
                setCity("");
                setDistrict("");
              }}
              className="w-50"
            >
              <option>Select Countries</option>
              {countries.map((item, index) => {
                return (
                  <option key={index} value={index}>
                    {item.name}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="py-2">
            <h6>Cities</h6>
            <select
              className="w-50"
              onChange={(e) => {
                console.log(e.target.value);
                setCity(e.target.value);
                setDistrict("");
              }}
            >
              <option>select City</option>
              {countries[country] &&
                countries[country].Cities.map((items, index) => {
                  return (
                    <option key={index} value={index}>
                      {items}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="">
            <h6>Cities</h6>
            <select className="w-50 ">
              <option>select district</option>
              {countries[country] &&
                countries[country].district.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item}
                    </option>
                  );
                })}
            </select>
          </div>
          <div className="py-4 d-flex  justify-content-between">
            <button className="submit fs-bold p-2">SUBMIT</button>
            <button className="submit fs-bold p-2 ">
              <NavLink
                exact="true"
                to="/"
                activeclassname="active"
                className="nav-links"
                // onClick={action ? handleClick : null}
              >
                Back to Login
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
