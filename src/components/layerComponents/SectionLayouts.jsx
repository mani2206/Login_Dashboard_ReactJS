import React, { useState, useEffect } from "react";
import {
  emailValidator,
  passwordValidator,
} from "../baseComponents/regexValidator";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./Login";

export default function Booking() {
  const navigate = useNavigate();
  const [input, setInput] = useState({ email: "", password: "" });
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    // setInput({ ...input, [e.target.name]: e.target.value });
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const isAuthenticated = localStorage.getItem("auth");
        if (isAuthenticated) navigate("/header");
      } catch (error) {
        console.log("Error:", error);
      }
    };
    checkAuthentication();
    return () => {
      // Perform cleanup if needed
      // For example, clear any intervals or timeouts
      // clearInterval(intervalId);
      // clearTimeout(timeoutId);
    };
  }, [input])


  const fromSubmitter = (e) => {
    e.preventDefault();

    if (!emailValidator(input.email))
      return setErrorMessage("Enter vaild email id");

    if (!passwordValidator(input.password))
      return setErrorMessage(
        "password should have minium 8 character with combinate of number "
      );
    const VALID_EMAIL = "mani220696@gmail.com";
    const VALID_PASSWORD = "Maniaruna@123";
    if (
      input.email !== VALID_EMAIL  ||
      input.password !== VALID_PASSWORD
    ) {
      toast.dismiss();
      toast("Warning");
    } else {
      toast("");
      toast("Wow so easy!");
      setTimeout(() => {
        navigate("/header");
        const authObject = {
          email: input.email,
          password: input.password,
        };
        localStorage.setItem("auth", JSON.stringify(authObject));
      }, 100);
    }
  };

  return (
    <>
      <Login
        input={input}
        handleChange={handleChange}
        errorMessage={errorMessage}
        fromSubmitter={fromSubmitter}
      />
    </>
  );
}
