import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  // let title = props.title;
  const clickHandler = () => {
    // console.log("hello there!");
    setTitle("Updated!")
    // console.log(title);
  };

  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date}/>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <Card className="expense-item__price">₺{props.amount}</Card>
      </div>
      <button onClick={clickHandler}>Click Me!</button>
    </Card>
  );
}

export default ExpenseItem;
