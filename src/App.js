import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "./components/HomePage";
import PizzaForm from "./components/PizzaForm";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </nav>
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/pizza">
          <PizzaForm />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
