import React, { useState } from "react";
import axios from "axios";
import * as yup from "yup";
import schema from "../validation/FormSchema";

const initialFormState = {
  name: "",
  //   size: "",
  //   topping1: true,
  //   topping2: true,
  //   special: "",
};
const initialFormErrors = {
  name: " ",
  //   size: "",
  //   special: "",
};

const PizzaForm = () => {
  //setting state
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState(initialFormErrors);
  //    console.log(errors);

  //validation
  const validate = (name, value) => {
    return yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        // console.log("name is valid");
        setErrors({ ...errors, [name]: "" });
        return true;
      })
      .catch((err) => {
        // console.log(err);
        setErrors({ ...errors, [name]: err.errors[0] });
        return false;
      });
  };

  const changeHandler = (ev) => {
    const value =
      ev.target.type === "checkbox" ? ev.target.checked : ev.target.value;
    setForm({ ...form, [ev.target.name]: value });
    validate(ev.target.name, value);
  };

  const submitHandler = (ev) => {
    ev.preventDefault();
    console.log("submitted", form);
    return axios.post("https://reqres.in/api/orders", orders[0]).then((res) => {
      console.log(res.data);
      setOrders([res.data, ...orders]);
      return res.data;
    });
  };

  return (
    <div>
      <form id="pizza-form" onSubmit={submitHandler}>
        <header>
          <h1>Build your own Pizza</h1>
        </header>
        <div className="errors">
          <div>{errors.name}</div>
          {/* <div>{errors.size}</div>
          <div>{errors.special}</div> */}
        </div>
        <input
          onChange={changeHandler}
          name="name"
          type="text"
          id="name-input"
        />
        <label>
          Choice of Size
          <select name="size" id="size-dropdown">
            <option value="8 Inch">8 Inch</option>
            <option value="10 Inch">10 Inch</option>
            <option value="14 Inch">14 Inch</option>
          </select>
        </label>
        <div className="toppings">
          <h4>Add toppings</h4>
          <label>
            Pepperoni
            <input type="checkbox" name="topping1" onChange={changeHandler} />
          </label>
          <label>
            Mushroom
            <input type="checkbox" name="topping2" onChange={changeHandler} />
          </label>
          <label>
            Sausage
            <input type="checkbox" name="topping3" onChange={changeHandler} />
          </label>
          <label>
            Extra Cheese
            <input type="checkbox" name="topping4" onChange={changeHandler} />
          </label>
        </div>
        <div className="instruction">
          <label>
            <input
              id="special-text"
              name="special"
              type="text"
              onChange={changeHandler}
            />
          </label>
        </div>
        <div className="orderBtn">
          <label>
            <button type="submit" id="order-button">
              Add to order
            </button>
          </label>
        </div>
      </form>
    </div>
  );
};

export default PizzaForm;
