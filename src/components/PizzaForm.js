import React, { useState } from "react";
import * as yup from "yup";
import schema from "../validation/FormSchema";

const initialFormState = {
  name: " ",
};
const initialFormErrors = {
  name: " ",
};

const PizzaForm = () => {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialFormErrors);
  console.log(errors);
  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        console.log("name is valid");
        setErrors({ ...errors, [name]: "" });
      })
      .catch((err) => {
        console.log(err);
        setErrors({ ...errors, [name]: err.errors[0] });
      });
  };

  const changeHandler = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setForm({ ...form, [ev.target.name]: value });
    validate(ev.target.name, value);
  };

  return (
    <div>
      <form id="pizza-form">
        <header>
          <h1>Build your own Pizza</h1>
        </header>
        <div className="errors">{errors.name}</div>
        <input
          onChange={changeHandler}
          name="name"
          type="text"
          id="name-input"
        />
      </form>
    </div>
  );
};

export default PizzaForm;
