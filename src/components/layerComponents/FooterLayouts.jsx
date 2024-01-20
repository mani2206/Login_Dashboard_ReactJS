import React, { useState, useEffect } from "react";
export default function Footer() {
  const [count, setCount] = useState(0);
  const [person, setPerson] = useState({
    firstname: "",
    lastname: "",
  });
  const oneInc = () => {
    setCount(count + 1);
  };
  const fiveInc = () => {
    // for(let i=0;i<5;i++)(
    //     setCount((prevState)=>prevState + 1)
    // )
    setCount(count + 5);
  };

  return (
    <>
      <button onClick={() => oneInc()}>click me</button>
      <p>iniitial value {count}</p>
      <button onClick={() => fiveInc()}>click me(add5)</button>
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setPerson({ ...person,firstname: e.target.value })}
      />
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setPerson({  ...person,lastname: e.target.value })}
      />

      <p>fisrt name value :{person.firstname}</p>
      <p>fisrt name value :{person.lastname}</p>
    </>
  );
}
