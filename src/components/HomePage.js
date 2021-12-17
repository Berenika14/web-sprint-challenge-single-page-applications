import React from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  const routeToPizza = () => {
    history.push("./pizza");
  };

  return (
    <div>
      <form>
        <label>
          <button id="order-pizza" onClick={routeToPizza} className="pizzaBtn">
            Order Pizza
          </button>
        </label>
      </form>
    </div>
  );
};
export default HomePage;
