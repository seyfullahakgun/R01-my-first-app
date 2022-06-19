import "./index.css";
import React from "react";
import Expenses from "./components/Expense/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", amount: 294.47, date: new Date(2022, 3, 29) },
    { title: "Toilet Paper", amount: 100.12, date: new Date(2022, 5, 12) },
    { title: "Gas Bill", amount: 94.0, date: new Date(2022, 3, 3) },
  ];

  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's Get Started"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
