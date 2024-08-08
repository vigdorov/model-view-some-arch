import React, { useState } from "react";

import { Input } from "./Input";

export const FormFunc = () => {
  const [state, setState] = useState({
    firstName: "Mikhail!",
    password: "",
  });

  const handleChange = (type, value) => {
    setState((state) => ({
      ...state,
      [type]: value,
    }));
  };
  const handleSubmit = () => {
    console.log(state);
  };
  return (
    <div>
      <Input
        inputName="login"
        type="text"
        propName="firstName"
        value={state.firstName}
        onChange={handleChange}
      />
      <Input
        inputName="password"
        type="password"
        propName="password"
        value={state.password}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>SUBMIT ME, BEATCH!</button>
    </div>
  );
};
