import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  //  let title = props.title;
  const clicklHandler = () => {
    // title = "Updated...";
    setTitle("Updated!!!");
    console.log(title);
  };
  //function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clicklHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
