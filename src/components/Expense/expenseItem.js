import React, { useState } from "react";
import Card from "../UI/card";
import "./expenseItem.css";
import ExpenseItemDate from "./expenseItemDate";

// {} destructuring object
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title); //useState trả về 1 mảng 2 giá trị với giá trị đầu là đối số ta truyền vào và giá trị 2 là hàm cập nhật

  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseItemDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
